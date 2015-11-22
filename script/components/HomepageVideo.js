var HomepageVideo = React.createClass({
  render: function() {
    return (
      <div className="ui container">
        <video autoPlay loop muted id="bgvid" onCanPlay={this.props.onLoadedFinish}>
            <source src="asset/fall.mp4" type="video/mp4"/>
        </video>
      </div>
    );
  }
});

export default HomepageVideo;
