const ExitStyle = ({ useState }) => {
  const [sidebar, setSidebar] = useState("closed");

  const active = (num) => {
    const activeBox = document.querySelector(`.activeBox${num}`);
    activeBox.classList.toggle(`active${num}`);
    sidebar === "closed" ? setSidebar("open") : setSidebar("closed");
  };

  const items = [
    {
      num: 1,
    },
    {
      num: 2,
    },
  ];

  return (
    <div className="container">
      <div className={`sidebar ${sidebar}`}></div>
      {items.map((item, i) => {
        return (
          <div key={i}>
            <div className={`menu${item.num}`} id={`menu${item.num}`}>
              <div
                className={`activeBox${item.num}`}
                onClick={() => active(item.num)}
              >
                {Array.from({ length: 3 }, (_, index) => (
                  <span key={index} className="line"></span>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ExitStyle;
