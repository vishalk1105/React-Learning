const MenuAccordion = ({ title, children, number, isOpen, setShowIndex }) => {
  const openAccordion = () => {
    setShowIndex();
  };
  return (
    <div className="accordion-wrapper">
      <div
        className={`accordion-title ${isOpen ? "open" : ""}`}
        onClick={openAccordion}
      >
        {title} ({number})
      </div>
      <div className={`accordion-item ${!isOpen ? "collapsed" : ""}`}>
        <div className="accordion-content">{children}</div>
      </div>
    </div>
  );
};
export default MenuAccordion;
