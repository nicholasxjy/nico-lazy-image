import 'intersection-observer'
import React from 'react'
import PropTypes from 'prop-types'
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
    const { loaded } = this.state
    const { src, threshold } = this.props
    const vm = this
    const io = new IntersectionObserver(entries => {
      const entry = entries[0]
      const ratio = parseFloat(threshold / 100)
      if (entry.intersectionRatio > ratio) {
        if (!loaded) {
          vm.setState({ status: 'loading' })
          const image = new Image()
          image.onload = () => {
            vm.setState({ source: src, loaded: true, status: 'loaded' })
            io.unobserve(vm.el)
          }
          image.onerror = () => {
            vm.setState({ status: 'error' })
          }
          image.src = src
        }
      }
    })
    io.observe(this.el)
  }
  getRef(ref) {
    this.el = ref
  }
  render() {
    const { source, status } = this.state
    const { alt } = this.props
    return (
      <div className={`nc-lazy-image ${status}`} ref={this.getRef.bind(this)}>
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
