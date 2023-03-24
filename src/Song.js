const Song = ({ id, img, title, author, releaseDate, getSong, number }) => {
  return (
    <article className="song">
      <span className="number"># {number + 1}</span>
      <img src={img} alt="BLINDING LIGHTS" />
      <h2>{title}</h2>
      {/* <button onClick={() => getSong(id)}>Get Song</button> */}
      <p>{author}</p>
      <span>{releaseDate}</span>
    </article>
  );
};

export default Song;
