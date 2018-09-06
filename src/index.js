import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import VisibilitySensor from 'react-visibility-sensor'
import blurImage from './StackBlur'

const isInDom = !!(
  typeof window !== 'undefined' &&
  window.document &&
  window.document.createElement
)

class LazyImage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      status: '',
      isLoaded: false,
      width: props.width,
      height: props.height
    }
  }
  componentDidMount() {
    const { height } = this.props
    const canvas = ReactDOM.findDOMNode(this.canvasEl)
    if (height === 'auto') {
      const { width, height } = this.placeholderEl
      const dimension = this.calculateDimension({
        imgWidth: width,
        imgHeight: height
      })
      this.setState(dimension)
    }
    blurImage(this.placeholderEl, canvas, this.props.radius)
  }
  calculateDimension = ({ imgWidth, imgHeight }) => {
    const el = ReactDOM.findDOMNode(this)
    const rect = el.getBoundingClientRect()
    const width = rect.width
    const height = parseInt((width / imgWidth) * imgHeight, 10)
    return { width, height }
  }
  handleVisibleChange = isVisible => {
    if (!isInDom) return
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
      if (this.props.height === 'auto') {
        const dimension = this.calculateDimension({
          imgWidth: img.width,
          imgHeight: img.height
        })
        this.setState(dimension)
      }
      this.setState({ status: 'is-loaded', isLoaded: true })
    }
    img.src = source
  }
  getCanvas = ref => {
    this.canvasEl = ref
  }
  getPlaceholderRef = ref => {
    this.placeholderEl = ref
  }
  getCanvasDimension = () => {
    const { width, height } = this.state
    return { width: width + 'px', height: height + 'px' }
  }
  renderOriginal = () => {
    const { source, alt, children } = this.props
    const { isLoaded } = this.state
    return isLoaded ? children({ source, alt }) : null
  }
  render() {
    // fix ssr
    const { classPrefix, placeholder, alt } = this.props
    const { isLoaded, width, height } = this.state
    const cls = classNames('nc-lazy-image', {
      'is-loaded': isLoaded,
      [classPrefix]: !!classPrefix
    })
    return (
      <VisibilitySensor onChange={this.handleVisibleChange}>
        <div className={cls} style={{ width, height }}>
          <img
            className="nc-lazy-placeholder"
            ref={this.getPlaceholderRef}
            crossOrigin="anonymous"
            src={placeholder}
            alt={alt}
            style={{ width, height }}
          />
          <canvas
            className="nc-lazy-canvas"
            ref={this.getCanvas}
            style={{ width, height }}
          />
          <div className="nc-lazy-source">
            {isInDom ? this.renderOriginal() : null}
          </div>
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
  classPrefix: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  radius: PropTypes.number
}

LazyImage.defaultProps = {
  alt: 'image alt',
  radius: 20,
  width: '100%',
  height: 'auto'
}

export default LazyImage
