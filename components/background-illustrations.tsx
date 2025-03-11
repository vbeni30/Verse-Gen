export function BackgroundIllustrations() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Top left illustration - Noah's Ark scene */}
      <svg
        className="absolute top-0 left-0 w-96 h-96 text-gray-200"
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M50 300C50 300 100 350 200 350C300 350 350 300 350 300" stroke="currentColor" strokeWidth="2" />{" "}
        {/* Water */}
        <path d="M100 250C100 250 150 200 200 200C250 200 300 250 300 250" stroke="currentColor" strokeWidth="2" />{" "}
        {/* Ark hull */}
        <path d="M150 200V150H250V200" stroke="currentColor" strokeWidth="2" /> {/* Ark structure */}
        <path d="M175 150V125H225V150" stroke="currentColor" strokeWidth="2" /> {/* Ark upper deck */}
        <path d="M190 125L200 100L210 125" stroke="currentColor" strokeWidth="2" /> {/* Ark roof */}
        <circle cx="130" cy="270" r="10" stroke="currentColor" strokeWidth="2" /> {/* Animal (simplified) */}
        <circle cx="270" cy="270" r="10" stroke="currentColor" strokeWidth="2" /> {/* Animal (simplified) */}
        <path d="M200 170V190M190 180H210" stroke="currentColor" strokeWidth="2" /> {/* Window */}
        <path
          d="M50 320C50 320 100 310 150 320C200 330 250 310 300 320C350 330 400 320 400 320"
          stroke="currentColor"
          strokeWidth="2"
        />{" "}
        {/* More water detail */}
      </svg>

      {/* Top right illustration - Sermon on the Mount */}
      <svg
        className="absolute top-0 right-0 w-96 h-96 text-gray-200"
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M50 350C50 350 100 250 200 250C300 250 350 350 350 350" stroke="currentColor" strokeWidth="2" />{" "}
        {/* Hill */}
        <path d="M175 200V150M225 200V150" stroke="currentColor" strokeWidth="2" /> {/* Jesus figure */}
        <path d="M175 175H225" stroke="currentColor" strokeWidth="2" /> {/* Jesus' arms */}
        <circle cx="200" cy="125" r="25" stroke="currentColor" strokeWidth="2" /> {/* Jesus' head */}
        <path d="M100 300V250M120 300V260M140 300V270" stroke="currentColor" strokeWidth="2" /> {/* Crowd left */}
        <path d="M260 300V270M280 300V260M300 300V250" stroke="currentColor" strokeWidth="2" /> {/* Crowd right */}
        <path
          d="M50 350C50 350 100 360 150 350C200 340 250 360 300 350C350 340 400 350 400 350"
          stroke="currentColor"
          strokeWidth="2"
        />{" "}
        {/* Ground detail */}
      </svg>

      {/* Bottom left illustration - Crossing the Red Sea */}
      <svg
        className="absolute bottom-0 left-0 w-96 h-96 text-gray-200"
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 200C0 200 50 150 100 200C150 250 200 150 250 200C300 250 350 150 400 200"
          stroke="currentColor"
          strokeWidth="2"
        />{" "}
        {/* Parted sea left */}
        <path
          d="M0 400C0 400 50 350 100 400C150 450 200 350 250 400C300 450 350 350 400 400"
          stroke="currentColor"
          strokeWidth="2"
        />{" "}
        {/* Parted sea right */}
        <path d="M200 0V400" stroke="currentColor" strokeWidth="2" /> {/* Path through sea */}
        <path d="M150 250V150M250 250V150" stroke="currentColor" strokeWidth="2" /> {/* Water walls */}
        <path d="M175 300V200M225 300V200" stroke="currentColor" strokeWidth="2" /> {/* Moses figure */}
        <path d="M175 250H225" stroke="currentColor" strokeWidth="2" /> {/* Moses' arms */}
        <circle cx="200" cy="175" r="25" stroke="currentColor" strokeWidth="2" /> {/* Moses' head */}
        <path d="M100 350V300M120 350V310M140 350V320" stroke="currentColor" strokeWidth="2" /> {/* People left */}
        <path d="M260 350V320M280 350V310M300 350V300" stroke="currentColor" strokeWidth="2" /> {/* People right */}
      </svg>

      {/* Bottom right illustration - David and Goliath */}
      <svg
        className="absolute bottom-0 right-0 w-96 h-96 text-gray-200"
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M100 350C100 350 150 300 200 350C250 400 300 350 300 350" stroke="currentColor" strokeWidth="2" />{" "}
        {/* Ground */}
        <path d="M250 200V350M270 220V350M290 240V350" stroke="currentColor" strokeWidth="2" /> {/* Goliath's legs */}
        <path d="M230 150V200M310 150V200" stroke="currentColor" strokeWidth="2" /> {/* Goliath's arms */}
        <circle cx="270" cy="100" r="50" stroke="currentColor" strokeWidth="2" /> {/* Goliath's head */}
        <path d="M150 300V350M170 310V350" stroke="currentColor" strokeWidth="2" /> {/* David's legs */}
        <path d="M140 270V300M180 270V300" stroke="currentColor" strokeWidth="2" /> {/* David's arms */}
        <circle cx="160" cy="250" r="20" stroke="currentColor" strokeWidth="2" /> {/* David's head */}
        <path d="M120 290C120 290 140 270 160 290" stroke="currentColor" strokeWidth="2" /> {/* David's sling */}
        <circle cx="120" cy="290" r="5" fill="currentColor" /> {/* Stone */}
      </svg>

      {/* Center illustration - Scroll with verses */}
      <svg
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full text-gray-200"
        viewBox="0 0 800 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M100 100C100 100 200 50 400 50C600 50 700 100 700 100" stroke="currentColor" strokeWidth="2" />{" "}
        {/* Top of scroll */}
        <path d="M100 500C100 500 200 550 400 550C600 550 700 500 700 500" stroke="currentColor" strokeWidth="2" />{" "}
        {/* Bottom of scroll */}
        <path d="M100 100V500" stroke="currentColor" strokeWidth="2" /> {/* Left side of scroll */}
        <path d="M700 100V500" stroke="currentColor" strokeWidth="2" /> {/* Right side of scroll */}
        <path d="M150 150H650" stroke="currentColor" strokeWidth="2" /> {/* Text line */}
        <path d="M150 200H650" stroke="currentColor" strokeWidth="2" /> {/* Text line */}
        <path d="M150 250H650" stroke="currentColor" strokeWidth="2" /> {/* Text line */}
        <path d="M150 300H650" stroke="currentColor" strokeWidth="2" /> {/* Text line */}
        <path d="M150 350H650" stroke="currentColor" strokeWidth="2" /> {/* Text line */}
        <path d="M150 400H650" stroke="currentColor" strokeWidth="2" /> {/* Text line */}
        <path d="M150 450H650" stroke="currentColor" strokeWidth="2" /> {/* Text line */}
      </svg>
    </div>
  )
}

