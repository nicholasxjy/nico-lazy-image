import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import VisibilitySensor from 'react-visibility-sensor'
import blurImage from './StackBlur'
import './styles.css'

class LazyImage extends React.Component {
  constructor(props) {
    super(props)
    // fix ssr
    if (typeof window === 'undefined' || typeof window.document === 'undefined')
      return
    this.state = {
      status: '',
      isLoaded: false
    }
  }
  componentDidMount() {
    const { placeholder } = this.props
    const canvas = ReactDOM.findDOMNode(this.canvasEl)
    const img = new Image()
    img.crossOrigin = 'Anonymous'
    img.onload = () => {
      blurImage(img, canvas, 20)
    }
    img.src = placeholder
  }
  handleVisibleChange = isVisible => {
    const { isLoaded } = this.state
    if (isVisible) {
      if (!isLoaded) {
        this.loadOriginImage()
      }
    }
  }
  loadOriginImage = () => {
    this.setState({ status: 'is-loading' })
    const { source } = this.props
    const img = new Image()
    img.onload = () => {
      this.setState({ status: 'is-loaded', isLoaded: true })
    }
    img.src = source
  }
  getCanvas = ref => {
    this.canvasEl = ref
  }
  render() {
    const { source, alt, children, ...rest } = this.props
    const { isLoaded } = this.state
    const cls = classNames('nc-lazy-image', {
      'is-loaded': isLoaded
    })
    return (
      <VisibilitySensor onChange={this.handleVisibleChange}>
        <div className={cls}>
          {isLoaded ? children({ source, alt, ...rest }) : null}
          <canvas className="nc-lazy-canvas" ref={this.getCanvas} />
        </div>
      </VisibilitySensor>
    )
  }
}

LazyImage.propTypes = {
  source: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  alt: PropTypes.string,
  children: PropTypes.func,
  height: PropTypes.number
}

LazyImage.defaultProps = {
  alt: 'image alt'
}

export default LazyImage
