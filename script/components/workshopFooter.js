var WorkshopFooter = React.createClass({
  style: {
    color: '#888',
  },

  render: function() {
    return (
      <div className="column middle aligned footer">
        <div className="text-center">
          <p id="footer-title">
            Do you have time for a tea?
          </p>
          <p>Drop me a line <a href="mailto:hello@hangontie.co" style={this.style}>here!</a> <br/><br/> Montreal. 2015.</p>
        </div>
      </div>
    );
  }
});
