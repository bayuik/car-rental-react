const SocialMedia = ({ link, img, alt }) => {
  return (
    <a href={link}>
      <img src={img} alt={alt} style={{marginLeft: "10px"}} />
    </a>
  );
};

export default SocialMedia;
