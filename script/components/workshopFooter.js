var WorkshopFooter = React.createClass({
  render: function() {
    var style: {
      color: '#888'
    };

    return (
      <div className="column middle aligned footer">
        <div className="text-center">
          <p id="footer-title">
            Do you have time for a tea?
          </p>
          <p>Drop me a line <a href="mailto:rob@dice.today" style={style}>here!</a> <br/><br/> Montreal. 2015.</p>
        </div>
      </div>
    );
  }
});

export default WorkshopFooter;
