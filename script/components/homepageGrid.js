var HomepageGrid = React.createClass({
  render: function() {
    return (
      <div className="ui grid">

            <div className="row">
              <div className="sixteen wide column center aligned">
                <img src="asset/logo.png" alt="Hang Up!" id="homepage-content-logo" className="ui centered large image" />
              </div>
            </div>

            <div className="two column row">
              <div className="column right aligned">
                <button
                className="ui basic button sharp uppercase"
                id="homepage-workshop-trigger"
                data-container=".workshop-container"
                data-content=".workshop-content"
                >
                Workshop
              </button>
            </div>

            <div className="column left aligned">
              <button
              className="ui basic button sharp uppercase"
              id="homepage-about-trigger"
              data-container=".about-container"
              data-content=".about-content"
              >
              Hello!
            </button>
          </div>
        </div>
      </div>
    );
  }
});

export default HomepageGrid;
