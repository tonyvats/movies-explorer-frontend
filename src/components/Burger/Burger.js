import "./Burger.css";

function Burger({isBurgerClicked, onClick}) {
  return (
    <div className={`burger ${isBurgerClicked ? "burger_clicked" : ""}`} onClick={onClick}>
      <span className="burger__middle-line"></span>
    </div>
  );
}

export default Burger;
