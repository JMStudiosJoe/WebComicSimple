import "./comic-page.css";

function ComicPage({ page }) {
  return (
    <section className="comic-page">
      <img src={page} />
    </section>
  );
}

export default ComicPage;
