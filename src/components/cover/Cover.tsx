import "./Cover.scss";

const Cover = () => {
  return (
    <section style={{ position: "relative", paddingTop: "0" }}>
      <div>
        <img
          style={{ zIndex: -1 }}
          className="image"
          src="./cover/cover.jpg"
          alt="Main Photo"
        />
        <img
          style={{ zIndex: -1 }}
          className="imageMobile"
          src="./cover/cover_mobile.png"
          alt="Main Photo"
        />
      </div>
    </section>
  );
};

export default Cover;
