var Preloader = React.createClass({
  render: function() {
    var completed = +this.props.completed;
    if (completed < 0) {completed = 0};
    if (completed > 100) {completed = 100};

    var style = {
      backgroundColor: this.props.color || '#0BD318',
      width: completed + '%',
      transition: "width 200ms",
      height: this.props.height || 10
    };

    var preloaderClass = "preloader-wrapper " + this.props.classHidden,
        panelClass = "preloader-bottomPanel " + this.props.classEffect;


    return (
      <div className={preloaderClass}>

          <div id="preloader-topPanel" className={panelClass}></div>

          <div id="preloader-bottomPanel" className={panelClass}>
            <div className="preloader-title text-center">
              please Hang On while we are prepping some stuff...
              <br/>
            </div>

            <div className="progressbar-container" >
              <div className="progressbar-progress" style={style}>{this.props.children}</div>
            </div>
          </div>
      </div>
    );
  }
});

export default Preloader;
