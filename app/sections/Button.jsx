const Button = ({ title, isBeam = false, containerClass }) => {
    return (
      <button className={`btn ${containerClass}`}>
        {isBeam && (
          <span className="relative flex h-3 w-3">
            <span className="btn-ping"></span>
            <span className="btn-ping_dot"></span>
          </span>
        )}
        {title}
      </button>
    );
  };
  
  export default Button;