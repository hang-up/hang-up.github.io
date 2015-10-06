var WorkshopItem = React.createClass({
  render: function() {
    return (
      <div className="column">
        <div className="ui blurring fluid image preview">
          <div className="ui dimmer">
            <div className="content">
              <div className="center">
                <h3>{this.props.title}</h3>
                <p>{this.props.caption}</p>
                <div className="divider"></div>

                <a href={this.props.link} target="_blank">
                  <button className="ui basic button sharp uppercase white border-white">
                      Learn more
                  </button>
                </a>


              </div>
            </div>
          </div>

          <img className="ui image" src={this.props.thumbnail}/>

        </div>
      </div>
    );
  }
});