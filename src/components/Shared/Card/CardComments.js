import icon from "./icon.png";
function CardComments() {
  return (
    <div className="d-flex justify-content-between align-items-center">
      <div className="bottom-group">
        <span className='comment-text'>{Math.floor(Math.random() * 900) + 100} Comments</span>
        <span><img src={icon} alt="" /></span>
            
      </div>
        
    </div>
  );
}

export default CardComments;
