const ExitStyle = ({ useState }) => {
  const [sidebar, setSidebar] = useState("closed");

  const active = (num) => {
    const activeBox = document.querySelector(`.activeBox${num}`);
    activeBox.classList.toggle(`active${num}`);
    sidebar === "closed" ? setSidebar("open") : setSidebar("closed");
  };

  const items = [
    // {
    //   num: 1,
    // },
    {
      num: 2,
    },
  ];

  const sidebarItems = [
    {
      name: "Home",
      link: "/",
    },
    { name: "Map", link: "https://map.naver.com/" },
    { name: "Finance", link: "https://finance.naver.com/" },
    { name: "News", link: "https://news.naver.com/" },
  ];

  return (
    <div className="container">
      <div className={`sidebar ${sidebar}`}>
        {sidebarItems.map((sidebarItem, i) => {
          return (
            <a href={sidebarItem.link} className="sidebar-item-box" key={i}>
              <h3>{sidebarItem.name}</h3>
            </a>
          );
        })}
      </div>
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
