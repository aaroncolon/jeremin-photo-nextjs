export default class Info extends React.Component {
  componentDidMount() {
    $('.open-popup').magnificPopup({
      mainClass: 'mfp-fade',
      closeOnBgClick: false,
      closeBtnInside: false,
      removalDelay: 250
    });
  }

  componentWillUnmount() {
    $('.open-popup').remove()
  }

  render() {
    return (
      <div id="info" className="info-section mfp-hide">
        <h1>{this.props.data.title.rendered}</h1>
        <div dangerouslySetInnerHTML={{ __html: this.props.data.content.rendered }} />
      </div>
    )
  }
}
