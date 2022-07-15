import "./comic-page.css";
//import './fonts/ZagBold.otf'
//import './fonts/ZagRegular.otf'

function ComicPage({ page }) {
  return (
    <section className="comic-page">
      <img src={page} />
    </section>
  );
}

export default ComicPage;
