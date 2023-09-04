function Video() {
  return (
    <div className="video-container max-width">
      <div className="video-background"></div>
      <div className="video">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="64"
          height="64"
          viewBox="0 0 64 64"
          fill="none"
          className="video__play"
        >
          <path
            d="M13.3333 13.3057C13.3333 10.7159 13.3333 9.42104 13.8733 8.70725C14.3437 8.08541 15.0627 7.70061 15.8411 7.65414C16.7345 7.60079 17.8119 8.31906 19.9667 9.75561L48.0082 28.4499C49.7887 29.6369 50.679 30.2304 50.9892 30.9785C51.2604 31.6325 51.2604 32.3675 50.9892 33.0215C50.679 33.7696 49.7887 34.3631 48.0082 35.5501L19.9667 54.2444C17.8119 55.681 16.7345 56.3992 15.8411 56.3459C15.0627 56.2994 14.3437 55.9146 13.8733 55.2928C13.3333 54.579 13.3333 53.2841 13.3333 50.6943V13.3057Z"
            stroke="#D9D9D9"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}

export default Video;
