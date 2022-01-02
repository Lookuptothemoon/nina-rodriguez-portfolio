function ExternalLink({ src, text }) {
    return (
      <a href={src} target="_blank" rel="noreferrer">
        {text}
      </a>
    );
  }
  
  export default ExternalLink;
  