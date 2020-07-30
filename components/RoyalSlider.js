export default class JpRoyalSlider extends React.Component {
  constructor(props) {
    super(props)
    this.ref = React.createRef()
  }

  componentDidMount() {
    this.$el = $(this.ref.current)
    let slides = this.generateSlides() 

    // init RoyalSlider
    this.$el.royalSlider({
      imageScaleMode: 'fit',
      imageScalePadding: 0,
      controlNavigation: 'none',
      arrowsNavAutoHide: false,
      slidesSpacing: 10,
      loop: true,
      numImagesToPreload: 1,
      usePreloader: true,
      navigateByClick: false,
      sliderDrag: false,
      slides: slides
    })
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.data.id === nextProps.data.id) {
      return false
    }
    return true
  }
   
  componentDidUpdate(prevProps, prevState) {
    let slides = this.generateSlides()
    this.$el.royalSlider('destroy').empty().royalSlider({
      imageScaleMode: 'fit',
      imageScalePadding: 0,
      controlNavigation: 'none',
      arrowsNavAutoHide: false,
      slidesSpacing: 10,
      loop: true,
      numImagesToPreload: 1,
      usePreloader: true,
      navigateByClick: false,
      sliderDrag: false,
      slides: slides
    })
  }

  componentWillUnmount() {
    if (this.$el && this.$el.data('royalSlider')) {
      this.$el.data('royalSlider').destroy()  
    }
  }

  generateSlides() {
    const images = this.props.data.acf.jc_photos

    if (!images || !images.length) {
      return ''
    }

    return images.map((item, index) => {
      return (
        '<a class="rsImg" href="'+ item.url +'"></a>'
      )
    }).join('')
  }

  render() {
    return (
      <div style={{height: '100%', width: '100%'}}>
        <div className="royalSlider-container">
          <div className="royalSlider rsUni" ref={this.ref}></div>
        </div>
      </div>
    )
  }
}
