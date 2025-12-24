const Card = ({ props }) => {
  return (
    <div className="h-[520px] w-80 rounded-2xl border-2 border-white overflow-hidden relative">

      {/* Background Image */}
      <div
        className="h-full w-full bg-cover bg-center rounded-2xl relative"
        style={{ backgroundImage: `url(${props.profileImage})` }}
      >
        {/* Name */}
        <h1 className="text-white top-[45%] text-2xl font-medium absolute z-30 px-5">
          {props.fullName}
        </h1>

        {/* Designation */}
        <h2 className="absolute top-[52%] text-white/70 text-sm font-medium z-30 px-5">
          {props.designation}
        </h2>

        {/* Badge Section */}
        <div className="absolute top-[60%] flex gap-2 z-30 px-5">
          <div className="text-white bg-black/60 px-5 py-2 rounded-full text-sm font-medium">
            {props.badge}
          </div>
          <div className="text-white/80 h-10 w-10 flex items-center justify-center rounded-full border border-white/50">
            +{props.extraBadgeCount}
          </div>
        </div>

        {/* Stats Section */}
        <div className="flex text-white gap-8 font-medium absolute top-[70%] px-6 z-30">
          <div>
            <h2 className="flex items-center text-lg gap-1">
              <i className="fa-solid fa-star text-yellow-400"></i>
              {props.rating}
            </h2>
            <p className="text-white/60 text-sm">rating</p>
          </div>

          <div>
            <h2 className="text-lg">{props.earned}</h2>
            <p className="text-white/60 text-sm">earned</p>
          </div>

          <div>
            <h2 className="text-lg">{props.ratePerHour}</h2>
            <p className="text-white/60 text-sm">rate</p>
          </div>
        </div>

        {/* Button Section */}
        <div className="absolute bottom-5 w-full flex items-center justify-center gap-4 z-30 px-5">
          <button className="bg-transparent border border-white/70 text-white rounded-full px-4 py-2">
            <i className="fa-regular fa-bookmark"></i>
          </button>

          <button className="text-black bg-white px-10 py-2 rounded-full font-medium text-lg">
            {props.ctaText}
          </button>
        </div>

        {/* Blur Gradient */}
        <div className="absolute bottom-0 w-full h-[60%] backdrop-blur-3xl z-10
          bg-black/60
          mask-[linear-gradient(to_top,rgba(0,0,0,1),rgba(0,0,0,0))]
          [-webkit-mask-image:linear-gradient(to_top,rgba(0,0,0,1),rgba(0,0,0,0))]">
        </div>
      </div>
    </div>
  );
};

export default Card;
