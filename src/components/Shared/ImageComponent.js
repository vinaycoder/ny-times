
function ImageComponent({ src, style }) {
  return (
    <>
      <img className="card-img-top" src={src} style={style} alt="Articles" />
    </>
  );
}

export default ImageComponent;
