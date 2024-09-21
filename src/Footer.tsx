import "./Footer.css";
import line from "././assets/LINE_Brand_icon.png";
import insta from "././assets/insta.png";

const Footer = () => {
  const fullYear = new Date().getFullYear();
  return (
    <footer>
      <h5>
        主催｜ エステサロン
        <br />
        Beautiful Hearts . Enterling
        <br />
        後援 | 島田市役所 観光課
        <br />
        MAIL | seikatsuon_marche@outlook.jp <br />
      </h5>
      <div className="socials">
        <a href="https://www.instagram.com/_seikatsu_on_/" target="_blank">
          <img src={insta} alt="" />
        </a>
        <a
          href="https://line.me/R/ti/p/@012pwpyk?from=page&accountId=012pwpyk"
          target="_blank"
        >
          <img src={line} alt="" />
        </a>
      </div>
      <hr />
      <div className="content-design">@{fullYear} DaveDesign</div>
    </footer>
  );
};

export default Footer;
