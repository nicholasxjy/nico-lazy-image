import 'intersection-observer'
import React from 'react'
import PropTypes from 'prop-types'
import { isInViewport } from './utils'
import Placeholder from './placeholder.png'
import './styles.css'

export default class LazyImage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      source: props.placeholder,
      loaded: false,
      status: 'default'
    }
  }
  componentDidMount() {
    if (isInViewport(this.el)) {
      this.loadImage()
    } else {
      window.addEventListener('scroll', this.handleScroll, false)
    }
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll, false)
  }
  loadImage = () => {
    const { loaded } = this.state
    const { src } = this.props
    if (!loaded) {
      this.setState({ status: 'loading' })
      const img = new Image()
      img.onload = () => {
        this.setState({ loaded: true, source: src, status: 'loaded' })
        window.removeEventListener('scroll', this.handleScroll, false)
      }
      img.src = src
    }
  }
  handleScroll = () => {
    if (isInViewport(this.el)) {
      this.loadImage()
    }
  }
  getRef = ref => {
    this.el = ref
  }
  render() {
    const { source, status } = this.state
    const { alt } = this.props
    return (
      <div className={`nc-lazy-image ${status}`} ref={this.getRef}>
        <img src={source} alt={alt} />
      </div>
    )
  }
}

LazyImage.propTypes = {
  placeholder: PropTypes.string,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  threshold: PropTypes.number
}

LazyImage.defaultProps = {
  placeholder: Placeholder,
  alt: 'img alt',
  threshold: 0
}
