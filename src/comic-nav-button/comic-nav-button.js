import "./comic-nav-button.css";

function ComicNavButton({ direction = "left", handler = () => {} }) {
  const leftArrow = <div>&lt;-</div>;
  const rightArrow = <div>-&gt;</div>;
  const displayArrow = direction === "left" ? leftArrow : rightArrow;
  return (
    <section onClick={handler} className="comic-nav-button">
      {displayArrow}
    </section>
  );
}

export default ComicNavButton;
