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
      isTransitionEnd: false,
      width: props.width || '100%',
      height: props.height || 0
    }
    // fix ssr
    if (!isInDom) return
  }
  componentDidMount() {
    const { placeholder } = this.props
    const canvas = ReactDOM.findDOMNode(this.canvasEl)
    const img = new Image()
    img.crossOrigin = 'Anonymous'
    img.onload = () => {
      if (this.props.width && this.props.height) {
        this.setState({ width: this.props.width, height: this.props.height })
      } else {
        const dimension = this.calculateDimension({
          imgNaturalWidth: img.naturalWidth,
          imgNaturalHeight: img.naturalHeight
        })
        this.setState(dimension)
      }
      blurImage(img, canvas, this.props.radius)
    }
    img.src = placeholder
  }
  calculateDimension = ({ imgNaturalWidth, imgNaturalHeight }) => {
    const el = ReactDOM.findDOMNode(this)
    const rect = el.getBoundingClientRect()
    const width = rect.width
    const height = parseInt((width / imgNaturalWidth) * imgNaturalHeight, 10)
    console.log(rect) //eslint-disable-line
    return { width, height }
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
      if (this.props.width && this.props.height) {
        this.setState({ width: this.props.width, height: this.props.height })
      } else {
        const dimension = this.calculateDimension({
          imgNaturalWidth: img.naturalWidth,
          imgNaturalHeight: img.naturalHeight
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
  getCanvasDimension = () => {
    const { width, height } = this.state
    return { width: width + 'px', height: height + 'px' }
  }
  render() {
    // fix ssr
    if (!isInDom) return null

    const { source, alt, children, classPrefix } = this.props
    const { isLoaded, width, height } = this.state
    const cls = classNames('nc-lazy-image', {
      'is-loaded': isLoaded,
      [classPrefix]: !!classPrefix
    })
    return (
      <VisibilitySensor onChange={this.handleVisibleChange}>
        <div className={cls} style={{ width, height }}>
          <canvas
            className="nc-lazy-canvas"
            ref={this.getCanvas}
            style={{ width, height }}
          />
          <div className="nc-lazy-item">
            {isLoaded ? children({ source, alt }) : null}
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
  width: PropTypes.number,
  height: PropTypes.number,
  radius: PropTypes.number
}

LazyImage.defaultProps = {
  alt: 'image alt',
  radius: 20
}

export default LazyImage
