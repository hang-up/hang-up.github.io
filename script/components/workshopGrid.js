var WorkshopGrid = React.createClass({
  render: function() {
    var item = this.props.data.map(function(item, index) {
      return (
        <WorkshopItem key={index} title={item.name} caption={item.caption} thumbnail={item.thumbnail} link={item.link}/>
      )
    });


    return (
      <div className="three column stackable row">

      { item }

      <WorkshopFooter />

      </div>

    );
  }
});
