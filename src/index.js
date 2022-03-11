import "./styles/nav.css";
import "./styles/index.css";
import "./styles/reset.css";
import "./styles/footer.css";
import "./scripts/dom"
// footer
import submitImg from "./assets/RectangleSubmit.png";
import ellipse10 from "./assets/Ellipse_10.png";

// 1st component
import shutterStock from "./assets/shutterstock.png";
import ssGroup from "./assets/Group_458.png";
import ellipse2 from "./assets/Ellipse_2.png";
import ellipse7 from "./assets/Ellipse_7.png";
import downloadImg from "./assets/RectangleDownload.png";
import googlePlayImg from "./assets/googlePlay.png";
import arrowCircleImg from "./assets/arrowCircle.png";
import arrowImg from "./assets/Vector.png";
import mobileImg from "./assets/Group_461.png";
import ellipse6 from "./assets/Ellipse_6.png";
import ellipse9 from "./assets/Ellipse_9.png";
import money from "./assets/money.png";
import books from "./assets/books.png";
import ellipse8 from "./assets/Ellipse_8.png";
import diamond from "./assets/diamondTexture.png";
import add from "./assets/Add.png";
// footer
document.querySelector("#submitDiv").style.backgroundImage = `url(${submitImg})`;
// document.querySelector("#footer").style.backgroundImage = `url(${ellipse10})`;

// 1st component
document.querySelector("#ssDiv").style.backgroundImage = `url(${shutterStock})`;
document.querySelector("#ss").src = ssGroup;
// document.querySelector("#ellipse_6").src = ellipse6;
// document.querySelector("#ellipse_4").src = ellipse4;
// document.querySelector("#ellipse_3").src = ellipse3;m
document.querySelector("body").style.backgroundImage = `url(${ellipse2}), url(${ellipse7}), url(${ellipse6}), url(${ellipse9}), url(${ellipse8}), url(${diamond}), url(${ellipse10})`;
document.querySelector("#downloadAppDiv").style.backgroundImage = `url(${downloadImg})`;
document.querySelector("#downloadGooglePlay").src = googlePlayImg;
document.querySelector("#arrow1Div").style.backgroundImage = `url(${arrowCircleImg})`;
document.querySelector("#arrow1").src = arrowImg;


// 2nd component
// document.querySelector("body").style.backgroundImage = `url(${ellipse2})`;
document.querySelector("#mobileImg").src = mobileImg;
document.querySelector("#arrow2Div").style.backgroundImage = `url(${arrowCircleImg})`;
document.querySelector("#arrow2").src = arrowImg;

// 3rd component
// document.querySelector("#season").style.backgroundImage = `url(${ellipse6})`;
document.querySelector("#arrow3Div").style.backgroundImage = `url(${arrowCircleImg})`;
document.querySelector("#arrow3").src = arrowImg;

// 4th component
document.querySelector("#arrow4Div").style.backgroundImage = `url(${arrowCircleImg})`;
document.querySelector("#arrow4").src = arrowImg;
document.querySelector("#earn").src = money;
document.querySelector("#learn").src = books;
document.querySelector("#fun").src = money;

// 5th component
document.querySelector("#arrow5Div").style.backgroundImage = `url(${arrowCircleImg})`;
document.querySelector("#arrow5").src = arrowImg;
document.querySelector("#op5Add").src = add;
