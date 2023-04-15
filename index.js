const Notification = (props) => {
  const { container, imgLink, styleImg, text } = props;
  return (
    <div className={container}>
      <img src={imgLink} className={styleImg} />
      <p>{text}</p>
    </div>
  );
};

const element = (
  <div className="mainContainer">
    <h1>Notifications</h1>
    <div>
      <Notification
        container="subContainer blueBg"
        imgLink="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
        styleImg="image1"
        text="Information message"
      />
      <Notification
        container="subContainer greenBg"
        imgLink="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        styleImg="image1"
        text="Success message"
      />
      <Notification
        container="subContainer warnBg"
        imgLink="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
        styleImg="image1"
        text="Warning message"
      />
      <Notification
        container="subContainer redBg"
        imgLink="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
        styleImg="image1"
        text="Error message"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
