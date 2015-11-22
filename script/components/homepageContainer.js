import Preloader from './preloader.js';
import HomepageVideo from './homepageVideo.js';
import HomepageGrid from './homepageGrid.js';

var HomepageContainer = React.createClass({
  getInitialState: function() {
    return {
      loadingSteps: 0,
      classHidden: "",
      classEffect: "",
      width: 0,
      height: 0
    };
  },

  componentWillMount: function() {
    var ticker = window.setInterval(function() {
      var diff = Math.random() * 10;

      this.setState({
        loadingSteps: this.state.loadingSteps + diff
      });

      if (this.state.loadingSteps > 100) {
        window.clearInterval(ticker);
      };
    }.bind(this), 100);
  },

  progressFinish: function() {
    setTimeout(function() {
      this.setState({
        loadingSteps: 100,
        classEffect: 'animated fadeOut'
      });
    }.bind(this), 2500);

    setTimeout(function() {
      this.setState({
        classHidden: 'hidden'
      });
    }.bind(this), 3500);
  },

  /**
  * Once preloader loadingSteps reaches 100, we add the classes hidden and
  * animated + the desired animation effect (fadeOut).
  *
  * When the video can be played (onCanPlay event), we trigger the progressFinish
  * method that is reponsible for adding the appropriate classes for the prelaoder.
  *
  */
  render: function() {
    return (
      <div className="homepage-content">

      <Preloader
        completed={this.state.loadingSteps}
        color={"#333"}
        height={"2"}
        classEffect={this.state.classEffect}
        classHidden={this.state.classHidden}
      />

      <HomepageVideo onLoadedFinish={this.progressFinish} />

      <HomepageGrid />

      </div>
    );
  }
});

export default HomepageContainer;
