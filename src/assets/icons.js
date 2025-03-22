export const HtmlIcon = ({ className, fillColor = "#E65100" }) => (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      viewBox="0 0 48 48"
    >
      <path fill={fillColor} d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"></path>
      <path fill="#FF6D00" d="M24 8L24 39.9 35.2 36.7 37.7 8z"></path>
      <path
        fill="#FFF"
        d="M24,25v-4h8.6l-0.7,11.5L24,35.1v-4.2l4.1-1.4l0.3-4.5H24z M32.9,17l0.3-4H24v4H32.9z"
      ></path>
      <path
        fill="#EEE"
        d="M24,30.9v4.2l-7.9-2.6L15.7,27h4l0.2,2.5L24,30.9z M19.1,17H24v-4h-9.1l0.7,12H24v-4h-4.6L19.1,17z"
      ></path>
    </svg>
  );
  

export const CssIcon = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="30"
    height="30"
    viewBox="0 0 48 48"
  >
    <path fill="#0277BD" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"></path>
    <path fill="#039BE5" d="M24 8L24 39.9 35.2 36.7 37.7 8z"></path>
    <path
      fill="#FFF"
      d="M33.1 13L24 13 24 17 28.9 17 28.6 21 24 21 24 25 28.4 25 28.1 29.5 24 30.9 24 35.1 31.9 32.5 32.6 21 32.6 21z"
    ></path>
    <path
      fill="#EEE"
      d="M24,13v4h-8.9l-0.3-4H24z M19.4,21l0.2,4H24v-4H19.4z M19.8,27h-4l0.3,5.5l7.9,2.6v-4.2l-4.1-1.4L19.8,27z"
    ></path>
  </svg>
);

export const TailwindIcon = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="30"
    height="30"
    viewBox="0 0 48 48"
  >
    <linearGradient
      id="tailwind-gradient"
      x1="21.861"
      x2="25.703"
      y1="8.237"
      y2="36.552"
      gradientUnits="userSpaceOnUse"
    >
      <stop offset="0" stopColor="#00c1e0"></stop>
      <stop offset="1" stopColor="#009bb8"></stop>
    </linearGradient>
    <path
      fill="url(#tailwind-gradient)"
      d="M24,9.604c-5.589,0-9.347,2.439-11.276,7.318c-0.2,0.505,0.417,0.92,0.816,0.551 
           c2.035-1.882,4.322-2.505,6.86-1.871c1.826,0.456,3.131,1.781,4.576,3.247C27.328,21.236,30.051,24,36,24 
           c5.589,0,9.348-2.44,11.276-7.319c0.2-0.505-0.417-0.92-0.816-0.551c-2.035,1.882-4.322,2.506-6.86,1.872 
           c-1.825-0.456-3.13-1.781-4.575-3.247C32.672,12.367,29.948,9.604,24,9.604L24,9.604z M12,24
           c-5.589,0-9.348,2.44-11.276,7.319 c-0.2,0.505,0.417,0.92,0.816,0.551c2.035-1.882,4.322-2.506,6.86-1.871
           c1.825,0.457,3.13,1.781,4.575,3.246 c2.353,2.388,5.077,5.152,11.025,5.152c5.589,0,9.348-2.44,11.276-7.319
           c0.2-0.505-0.417-0.92-0.816-0.551 c-2.035,1.882-4.322,2.506-6.86,1.871c-1.826-0.456-3.131-1.781-4.576-3.246
           C20.672,26.764,17.949,24,12,24L12,24z"
    ></path>
  </svg>
);

export const JavaScriptIcon = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="30"
    height="30"
    viewBox="0 0 48 48"
  >
    <path fill="#ffd600" d="M6,42V6h36v36H6z"></path>
    <path
      fill="#000001"
      d="M29.538 32.947c.692 1.124 1.444 2.201 3.037 2.201 1.338 0 2.04-.665 2.04-1.585 
           0-1.101-.726-1.492-2.198-2.133l-.807-.344c-2.329-.988-3.878-2.226-3.878-4.841 0-2.41 
           1.845-4.244 4.728-4.244 2.053 0 3.528.711 4.592 2.573l-2.514 1.607c-.553-.988-1.151-1.377-2.078-1.377-.946 
           0-1.545.597-1.545 1.377 0 .964.6 1.354 1.985 1.951l.807.344C36.452 29.645 38 30.839 38 
           33.523 38 36.415 35.716 38 32.65 38c-2.999 0-4.702-1.505-5.65-3.368L29.538 32.947zM17.952 
           33.029c.506.906 1.275 1.603 2.381 1.603 1.058 0 1.667-.418 1.667-2.043V22h3.333v11.101c0 
           3.367-1.953 4.899-4.805 4.899-2.577 0-4.437-1.746-5.195-3.368L17.952 33.029z"
    ></path>
  </svg>
);

export const JavaIcon = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="30"
    height="30"
    viewBox="0 0 48 48"
  >
    <path
      fill="#F44336"
      d="M23.65,24.898c-0.998-1.609-1.722-2.943-2.725-5.455C19.229,15.2,31.24,11.366,26.37,3.999
          c2.111,5.089-7.577,8.235-8.477,12.473C17.07,20.37,23.645,24.898,23.65,24.898z"
    ></path>
    <path
      fill="#F44336"
      d="M23.878,17.27c-0.192,2.516,2.229,3.857,2.299,5.695c0.056,1.496-1.447,2.743-1.447,2.743
          s2.728-0.536,3.579-2.818c0.945-2.534-1.834-4.269-1.548-6.298c0.267-1.938,6.031-5.543,6.031-5.543
          S24.311,11.611,23.878,17.27z"
    ></path>
    <g>
      <path
        fill="#1565C0"
        d="M32.084 25.055c1.754-.394 3.233.723 3.233 2.01 0 2.901-4.021 5.643-4.021 5.643s6.225-.742
            6.225-5.505C37.521 24.053 34.464 23.266 32.084 25.055zM29.129 27.395c0 0 1.941-1.383 2.458-1.902
            -4.763 1.011-15.638 1.147-15.638.269 0-.809 3.507-1.638 3.507-1.638s-7.773-.112-7.773 2.181
            C11.683 28.695 21.858 28.866 29.129 27.395z"
      ></path>
      <path
        fill="#1565C0"
        d="M27.935,29.571c-4.509,1.499-12.814,1.02-10.354-0.993c-1.198,0-2.974,0.963-2.974,1.889
            c0,1.857,8.982,3.291,15.63,0.572L27.935,29.571z"
      ></path>
      <path
        fill="#1565C0"
        d="M18.686,32.739c-1.636,0-2.695,1.054-2.695,1.822c0,2.391,9.76,2.632,13.627,0.205l-2.458-1.632
            C24.271,34.404,17.014,34.579,18.686,32.739z"
      ></path>
      <path
        fill="#1565C0"
        d="M36.281,36.632c0-0.936-1.055-1.377-1.433-1.588c2.228,5.373-22.317,4.956-22.317,1.784
            c0-0.721,1.807-1.427,3.477-1.093l-1.42-0.839C11.26,34.374,9,35.837,9,37.017C9,42.52,36.281,42.255,36.281,36.632z"
      ></path>
      <path
        fill="#1565C0"
        d="M39,38.604c-4.146,4.095-14.659,5.587-25.231,3.057C24.341,46.164,38.95,43.628,39,38.604z"
      ></path>
    </g>
  </svg>
);

export const SpringIcon = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="30"
    height="30"
    viewBox="0 0 48 48"
  >
    <path
      fill="#8bc34a"
      d="M43.982,23.635c0.069-4.261-0.891-9.328-2.891-15.273l-1.568-4.662l-2.13,4.433 
        c-0.114,0.237-0.244,0.469-0.38,0.698C33.514,5.827,28.974,4,24,4C12.954,4,4,12.954,4,24c0,11.046,8.954,20,20,20s20-8.954,20-20 
        C44,23.877,43.984,23.758,43.982,23.635z"
    ></path>
    <path
      fill="#fff"
      d="M39.385 32.558c-3.123 4.302-8.651 4.533-13.854 4.442H18.75h-1.938c4.428-1.593 7.063-1.972 
        9.754-3.4 5.068-2.665 10.078-8.496 11.121-14.562-1.93 5.836-7.779 10.85-13.109 12.889-3.652 1.393-10.248 2.745-10.248 
        2.745l-.267-.145C9.573 32.268 9.437 22.214 17.6 18.968c3.574-1.423 6.993-.641 10.854-1.593 4.122-1.012 8.89-4.208 
        10.83-8.375C41.456 15.667 44.07 26.106 39.385 32.558L39.385 32.558zM15.668 38.445C15.386 38.795 14.955 39 14.505 39c-.823 
        0-1.495-.677-1.495-1.5s.677-1.5 1.495-1.5c.341 0 .677.118.941.336C16.086 36.855 16.186 37.805 15.668 38.445L15.668 38.445z"
    ></path>
  </svg>
);

export const DockerIcon = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="30"
    height="30"
    viewBox="0 0 48 48"
  >
    <path
      fill="#2395ec"
      d="M47.527,19.847c-0.13-0.102-1.345-1.007-3.908-1.007c-0.677,0.003-1.352,0.06-2.019,0.171 
          c-0.496-3.354-3.219-4.93-3.345-5.003l-0.688-0.392l-0.453,0.644c-0.567,0.866-1.068,1.76-1.311,2.763 
          c-0.459,1.915-0.18,3.713,0.806,5.25C35.417,22.928,33.386,22.986,33,23H1.582c-0.826,0.001-1.496,0.66-1.501,1.474 
          c-0.037,2.733,0.353,5.553,1.306,8.119c1.089,2.818,2.71,4.894,4.818,6.164C8.567,40.184,12.405,41,16.756,41 
          c1.965,0.006,3.927-0.169,5.859-0.524c2.686-0.487,5.271-1.413,7.647-2.74c1.958-1.119,3.72-2.542,5.219-4.215 
          c2.505-2.798,3.997-5.913,5.107-8.682c0.149,0,0.298,0,0.442,0c2.743,0,4.429-1.083,5.359-1.99 
          c0.618-0.579,1.101-1.284,1.414-2.065L48,20.216L47.527,19.847z"
    ></path>
    <path
      fill="#2395ec"
      d="M8,22H5c-0.552,0-1-0.448-1-1v-3c0-0.552,0.448-1,1-1h3c0.552,0,1,0.448,1,1v3 
          C9,21.552,8.552,22,8,22z"
    ></path>
    <path
      fill="#2395ec"
      d="M14,22h-3c-0.552,0-1-0.448-1-1v-3c0-0.552,0.448-1,1-1h3c0.552,0,1,0.448,1,1v3 
          C15,21.552,14.552,22,14,22z"
    ></path>
    <path
      fill="#2395ec"
      d="M20,22h-3c-0.552,0-1-0.448-1-1v-3c0-0.552,0.448-1,1-1h3c0.552,0,1,0.448,1,1v3 
          C21,21.552,20.552,22,20,22z"
    ></path>
    <path
      fill="#2395ec"
      d="M26,22h-3c-0.552,0-1-0.448-1-1v-3c0-0.552,0.448-1,1-1h3c0.552,0,1,0.448,1,1v3 
          C27,21.552,26.552,22,26,22z"
    ></path>
    <path
      fill="#2395ec"
      d="M14,16h-3c-0.552,0-1-0.448-1-1v-3c0-0.552,0.448-1,1-1h3c0.552,0,1,0.448,1,1v3 
          C15,15.552,14.552,16,14,16z"
    ></path>
    <path
      fill="#2395ec"
      d="M20,16h-3c-0.552,0-1-0.448-1-1v-3c0-0.552,0.448-1,1-1h3c0.552,0,1,0.448,1,1v3 
          C21,15.552,20.552,16,20,16z"
    ></path>
    <path
      fill="#2395ec"
      d="M26,16h-3c-0.552,0-1-0.448-1-1v-3c0-0.552,0.448-1,1-1h3c0.552,0,1,0.448,1,1v3 
          C27,15.552,26.552,16,26,16z"
    ></path>
    <path
      fill="#2395ec"
      d="M26,10h-3c-0.552,0-1-0.448-1-1V6c0-0.552,0.448-1,1-1h3c0.552,0,1,0.448,1,1v3 
          C27,9.552,26.552,10,26,10z"
    ></path>
    <path
      fill="#2395ec"
      d="M32,22h-3c-0.552,0-1-0.448-1-1v-3c0-0.552,0.448-1,1-1h3c0.552,0,1,0.448,1,1v3 
          C33,21.552,32.552,22,32,22z"
    ></path>
  </svg>
);

export const ReactIcon = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="30"
    height="30"
    viewBox="0 0 48 48"
  >
    <path
      fill="#80deea"
      d="M24,34C11.1,34,1,29.6,1,24c0-5.6,10.1-10,23-10c12.9,0,23,4.4,23,10C47,29.6,36.9,34,24,34z M24,16 c-12.6,0-21,4.1-21,8c0,3.9,8.4,8,21,8s21-4.1,21-8C45,20.1,36.6,16,24,16z"
    ></path>
    <path
      fill="#80deea"
      d="M15.1,44.6c-1,0-1.8-0.2-2.6-0.7C7.6,41.1,8.9,30.2,15.3,19l0,0c3-5.2,6.7-9.6,10.3-12.4c3.9-3,7.4-3.9,9.8-2.5 c2.5,1.4,3.4,4.9,2.8,9.8c-0.6,4.6-2.6,10-5.6,15.2c-3,5.2-6.7,9.6-10.3,12.4C19.7,43.5,17.2,44.6,15.1,44.6z M32.9,5.4 c-1.6,0-3.7,0.9-6,2.7c-3.4,2.7-6.9,6.9-9.8,11.9l0,0c-6.3,10.9-6.9,20.3-3.6,22.2c1.7,1,4.5,0.1,7.6-2.3c3.4-2.7,6.9-6.9,9.8-11.9 c2.9-5,4.8-10.1,5.4-14.4c0.5-4-0.1-6.8-1.8-7.8C34,5.6,33.5,5.4,32.9,5.4z"
    ></path>
    <path
      fill="#80deea"
      d="M33,44.6c-5,0-12.2-6.1-17.6-15.6C8.9,17.8,7.6,6.9,12.5,4.1l0,0C17.4,1.3,26.2,7.8,32.7,19 c3,5.2,5,10.6,5.6,15.2c0.7,4.9-0.3,8.3-2.8,9.8C34.7,44.4,33.9,44.6,33,44.6z M13.5,5.8c-3.3,1.9-2.7,11.3,3.6,22.2 c6.3,10.9,14.1,16.1,17.4,14.2c1.7-1,2.3-3.8,1.8-7.8c-0.6-4.3-2.5-9.4-5.4-14.4C24.6,9.1,16.8,3.9,13.5,5.8L13.5,5.8z"
    ></path>
    <circle cx="24" cy="24" r="4" fill="#80deea"></circle>
  </svg>
);

export const SvelteIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    width="30"
    height="30"
    viewBox="0 0 48 48"
  >
    <path
      fill="#ef4823"
      d="M40.311,8.7C36.352,2.998,27.6,0.647,21.934,4.243l-9.987,6.392	c-2.724,1.707-4.612,4.503-5.157,7.663c-0.472,2.651,0.991,4.848,2.262,7.208c-0.872,1.307-2.516,3.287-2.77,4.813	c-0.581,3.232,0.182,6.573,2.07,9.225c3.995,5.702,11.914,7.741,17.579,4.146l9.913-6.724c2.724-1.707,4.612-4.503,5.157-7.663	c0.472-2.651,0.073-5.375-1.198-7.736c0.872-1.307,1.453-2.76,1.707-4.285C42.127,14.012,42.235,11.351,40.311,8.7"
    ></path>
    <path
      fill="#010101"
      d="M19.64,45.946c-1.064,0-2.149-0.13-3.234-0.393c-3.425-0.831-6.42-2.871-8.433-5.744	c-1.962-2.754-2.745-6.244-2.147-9.572c0.216-1.297,1.316-2.837,2.201-4.074c0.172-0.24,0.336-0.47,0.484-0.684	c-0.101-0.185-0.203-0.37-0.304-0.553c-1.14-2.065-2.319-4.2-1.872-6.709c0.566-3.284,2.523-6.192,5.367-7.974l9.984-6.39	c5.748-3.648,14.804-1.465,19.003,4.579c1.957,2.698,1.94,5.418,1.277,8.93c-0.251,1.501-0.798,2.922-1.627,4.23	c1.198,2.357,1.596,5.112,1.119,7.792c-0.566,3.281-2.519,6.187-5.36,7.969l-9.906,6.72c-0.004,0.003-0.008,0.005-0.012,0.008	C24.236,45.314,21.987,45.946,19.64,45.946z M28.218,2.986c-2.167,0-4.269,0.527-6.034,1.647l-9.986,6.391	c-2.625,1.645-4.429,4.324-4.951,7.352c-0.39,2.189,0.66,4.09,1.77,6.102c0.148,0.268,0.297,0.537,0.443,0.809	c0.081,0.151,0.072,0.334-0.022,0.476c-0.192,0.288-0.418,0.604-0.657,0.939c-0.829,1.159-1.86,2.602-2.042,3.693	c-0.556,3.09,0.17,6.325,1.991,8.88c3.953,5.642,11.553,7.446,16.948,4.027l9.907-6.72c0.005-0.003,0.009-0.006,0.014-0.009	c2.622-1.643,4.425-4.322,4.947-7.349c0.458-2.57,0.049-5.211-1.15-7.438c-0.081-0.151-0.072-0.334,0.022-0.476	c0.842-1.263,1.392-2.644,1.636-4.105c0.001-0.003,0.001-0.007,0.002-0.01c0.634-3.359,0.655-5.781-1.119-8.223	c-0.002-0.003-0.004-0.005-0.006-0.008C37.295,5.166,32.624,2.986,28.218,2.986z"
    ></path>
    <path
      fill="#d6e5e5"
      d="M20.974,40.088c-3.232,0.835-6.61-0.436-8.498-3.16c-1.162-1.598-1.598-3.595-1.271-5.557	c0.073-0.327,0.145-0.617,0.218-0.944l0.256-0.938l0.508,0.363c1.198,0.872,2.432,1.882,3.848,2.318l0.363,0.109l-0.036,0.363	c-0.036,0.508,0.109,1.053,0.399,1.489c0.581,0.835,2.086,1.3,3.067,1.046c0.218-0.073,0.436-0.145,0.617-0.254l10.19-6.182	c0.508-0.327,0.567-1.206,0.676-1.787c0.109-0.581-0.036-1.198-0.363-1.671c-0.581-0.835-1.598-1.198-2.579-0.944	c-0.218,0.073-0.895,0.313-1.077,0.422l-3.813,2.433c-0.617,0.399-1.307,0.69-2.034,0.872c-3.232,0.835-6.61-0.436-8.498-3.16	c-1.126-1.598-1.531-4.31-1.168-6.271c0.327-1.889,1.489-3.595,3.123-4.612l9.92-5.641c0.617-0.399,1.307-0.69,2.034-0.908	c3.232-0.835,6.61,0.436,8.498,3.16c1.162,1.598,1.598,3.595,1.271,5.557c-0.073,0.327-0.145,0.617-0.254,0.944l-0.034,0.107	c-0.073,0.234-0.353,0.327-0.552,0.185l-0.105-0.075c-1.198-0.872-2.506-1.525-3.922-1.961l-0.363-0.109l0.036-0.363	c0.036-0.508-0.109-1.053-0.399-1.489c-0.581-0.835-1.688-1.122-2.668-0.868c-0.218,0.073-0.436,0.145-0.617,0.254l-9.861,6.279	c-0.508,0.327-0.835,0.799-0.944,1.38c-0.109,0.581,0.036,1.198,0.363,1.671c0.581,0.835,1.598,1.198,2.579,0.944	c0.218-0.073,0.436-0.145,0.617-0.254l3.813-2.433c0.617-0.399,1.307-0.69,2.034-0.908c3.232-0.835,6.986-0.553,8.875,2.171	c1.162,1.598,1.929,4.257,1.602,6.218c-0.327,1.889-1.489,3.595-3.123,4.612L23.007,39.18C22.39,39.58,21.7,39.87,20.974,40.088"
    ></path>
    <path
      fill="#010101"
      d="M18.981,40.806c-0.991,0-1.977-0.177-2.921-0.529c-1.609-0.6-2.979-1.665-3.961-3.08	c-1.224-1.685-1.704-3.781-1.35-5.901c0.001-0.008,0.003-0.016,0.005-0.024c0.037-0.165,0.073-0.322,0.11-0.478	c0.036-0.152,0.072-0.305,0.108-0.467c0.002-0.007,0.003-0.014,0.005-0.021l0.256-0.938c0.04-0.146,0.149-0.263,0.291-0.314	c0.143-0.051,0.301-0.029,0.424,0.059l0.508,0.363c0.17,0.123,0.336,0.247,0.505,0.371c1.015,0.752,2.065,1.529,3.21,1.881	l0.36,0.108c0.212,0.064,0.35,0.269,0.328,0.489l-0.036,0.356c-0.027,0.403,0.093,0.848,0.323,1.193	c0.439,0.63,1.724,1.064,2.551,0.858c0.194-0.065,0.376-0.126,0.51-0.207l4.798-3.358l5.384-2.818	c0.253-0.168,0.348-0.754,0.417-1.182c0.017-0.105,0.033-0.205,0.051-0.298c0.084-0.446-0.024-0.94-0.289-1.322	c-0.462-0.664-1.272-0.963-2.067-0.763c-0.344,0.115-0.855,0.309-0.965,0.372l-3.807,2.429c-0.647,0.419-1.378,0.732-2.17,0.93	c-1.672,0.432-3.412,0.342-5.027-0.261c-1.611-0.601-2.602-1.841-3.584-3.258c-1.282-1.82-1.976-4.535-1.622-6.446	c0.345-1.995,1.592-3.837,3.334-4.921c0.005-0.003,0.01-0.006,0.016-0.009l9.909-5.635c0.612-0.394,1.313-0.707,2.141-0.955	c0.006-0.002,0.011-0.003,0.017-0.005c1.675-0.433,3.415-0.343,5.031,0.26c1.609,0.6,2.979,1.665,3.961,3.08	c1.224,1.685,1.704,3.781,1.35,5.901c-0.001,0.008-0.003,0.016-0.005,0.024c-0.066,0.295-0.144,0.62-0.267,0.99l-0.031,0.099	c-0.078,0.251-0.274,0.451-0.523,0.534c-0.249,0.084-0.526,0.042-0.74-0.11l-0.105-0.075c-1.155-0.84-2.428-1.477-3.789-1.895	l-0.36-0.108c-0.212-0.064-0.35-0.269-0.328-0.489l0.036-0.356c0.028-0.409-0.09-0.843-0.323-1.193	c-0.432-0.621-1.298-0.897-2.152-0.681c-0.192,0.064-0.372,0.125-0.505,0.204l-5.253,3.042l-4.603,3.233	c-0.404,0.26-0.653,0.622-0.738,1.075c-0.084,0.446,0.024,0.94,0.289,1.322c0.462,0.664,1.273,0.964,2.067,0.763	c0.191-0.064,0.371-0.125,0.505-0.204l3.703-2.077c0.612-0.396,1.316-0.711,2.15-0.961c0.006-0.002-0.006,0.001,0,0	c1.814-0.469,3.61-0.562,5.162-0.26c1.824,0.354,3.284,1.256,4.223,2.606c1.308,1.801,2.119,4.207,1.786,6.21	c-0.347,2.004-1.594,3.845-3.335,4.929l-10.694,6.683c-0.608,0.394-1.312,0.709-2.146,0.959c-0.006,0.002-0.011,0.003-0.017,0.005	C20.394,40.716,19.686,40.806,18.981,40.806z M11.66,31.46c-0.309,1.871,0.114,3.716,1.191,5.196	c0.002,0.003,0.004,0.006,0.006,0.008c1.772,2.556,4.983,3.751,7.993,2.977c0.745-0.224,1.369-0.503,1.907-0.851l10.701-6.687	c1.522-0.947,2.611-2.554,2.913-4.299c0.292-1.75-0.466-3.922-1.625-5.515c-0.002-0.003-0.004-0.006-0.006-0.009	c-2.26-3.26-6.966-2.35-8.37-1.988c-0.745,0.224-1.368,0.502-1.907,0.851l-3.711,2.083c-0.004,0.002-0.007,0.005-0.011,0.007	c-0.225,0.135-0.471,0.217-0.709,0.296c-0.01,0.003-0.02,0.006-0.03,0.009c-1.178,0.305-2.385-0.137-3.075-1.128	c-0.409-0.59-0.568-1.326-0.438-2.02c0.132-0.703,0.529-1.286,1.149-1.684l4.613-3.24l5.25-3.04c0.003-0.002,0.007-0.004,0.01-0.006	c0.225-0.135,0.471-0.217,0.709-0.296c0.01-0.003,0.021-0.006,0.031-0.009c1.233-0.32,2.504,0.103,3.164,1.052	c0.351,0.526,0.524,1.173,0.481,1.783c1.455,0.448,2.815,1.127,4.045,2.019c0.1-0.304,0.165-0.567,0.232-0.866	c0.309-1.871-0.114-3.716-1.191-5.196c-0.002-0.003-0.004-0.006-0.006-0.009c-1.772-2.556-4.983-3.751-7.994-2.977	c-0.745,0.224-1.369,0.502-1.907,0.851c-0.007,0.005-0.015,0.009-0.023,0.014l-9.912,5.636c-1.517,0.947-2.603,2.552-2.904,4.294	c-0.366,1.979,0.482,4.351,1.47,5.752c1.776,2.561,4.611,3.93,7.624,3.152c0.697-0.174,1.334-0.447,1.898-0.812l3.816-2.435	c0.004-0.002,0.007-0.005,0.011-0.007c0.273-0.164,1.16-0.461,1.169-0.464c0.01-0.003,0.02-0.006,0.03-0.009	c1.178-0.305,2.385,0.137,3.075,1.128c0.409,0.59,0.568,1.326,0.438,2.02c-0.016,0.086-0.031,0.179-0.047,0.275	c-0.103,0.636-0.23,1.427-0.834,1.816c-0.003,0.002-0.007,0.004-0.01,0.006l-5.382,2.96l-4.809,3.222	c-0.227,0.136-0.472,0.218-0.71,0.297c-0.01,0.003-0.021,0.007-0.032,0.009c-1.201,0.311-2.899-0.275-3.563-1.229	c-0.351-0.526-0.524-1.173-0.481-1.783c-1.299-0.4-2.413-1.225-3.49-2.022c-0.154-0.114-0.307-0.227-0.46-0.339l-0.078,0.286	c-0.036,0.161-0.072,0.314-0.108,0.467C11.729,31.155,11.695,31.303,11.66,31.46z"
    ></path>
  </svg>
);

export const PostgresIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    width="30"
    height="30"
    viewBox="0 0 48 48"
  >
    <path
      fill="#fff"
      d="M44.083,29.79c-0.183-0.829-0.935-1.796-2.452-1.796c-0.31,0-0.649,0.039-1.035,0.119c-0.708,0.146-1.311,0.217-1.842,0.241c4.133-7.04,6.816-16.819,4.159-20.214c-3.501-4.473-8.214-5.141-10.711-5.141L31.967,3c-0.929,0.015-1.893,0.129-2.863,0.339l-3.583,0.774C25.033,4.052,24.536,4.009,24.018,4l-0.03,0l-0.016,0l-0.152-0.001c-1.593,0-3.046,0.338-4.341,0.973l-1.251-0.493c-1.72-0.678-4.308-1.485-6.868-1.485c-0.144,0-0.287,0.003-0.431,0.008C8.407,3.093,6.241,4.05,4.664,5.769C2.696,7.915,1.8,11.054,2.003,15.1C2.013,15.309,4.461,36,11.4,36h0.025l0.064-0.001c0.901-0.022,1.76-0.384,2.563-1.077c0.613,0.46,1.406,0.732,2.145,0.84c0.488,0.115,1.366,0.278,2.418,0.278c1.284,0,2.442-0.263,3.44-0.738c-0.001,0.88-0.006,1.994-0.016,3.418l-0.001,0.075l0.005,0.075c0.097,1.419,0.342,2.698,0.711,3.701c1.051,2.859,2.866,4.434,5.111,4.434c0.093,0,0.188-0.003,0.284-0.009c1.846-0.114,3.717-1.151,5.004-2.772c1.393-1.755,1.715-3.607,1.839-5.026L35,39.111v-0.088v-4.079l0.103,0.01l0.436,0.038l0.042,0.004l0.042,0.002c0.124,0.006,0.252,0.008,0.381,0.008c1.507,0,3.362-0.391,4.616-0.974C41.819,33.476,44.559,31.948,44.083,29.79z"
    ></path>
    <path
      fill="#0277bd"
      d="M33,34c0-0.205,0.012-0.376,0.018-0.565C33.008,33.184,33,33,33,33s0.012-0.009,0.032-0.022c0.149-2.673,0.886-3.703,1.675-4.29c-0.11-0.153-0.237-0.318-0.356-0.475c-0.333-0.437-0.748-0.979-1.192-1.674l-0.082-0.158c-0.067-0.164-0.229-0.447-0.435-0.819c-1.183-2.14-3.645-6.592-1.96-9.404c0.738-1.232,2.122-1.942,4.121-2.117C33.986,11.718,30.925,6.115,23.985,6c-0.002,0-0.004,0-0.006,0c-6.041-0.098-8.026,5.392-8.672,8.672c0.89-0.377,1.906-0.606,2.836-0.606c0.014,0,0.029,0,0.043,0c2.29,0.017,3.865,1.239,4.323,3.354c0.335,1.552,0.496,2.91,0.492,4.153c-0.01,2.719-0.558,4.149-1.042,5.411l-0.154,0.408c-0.124,0.334-0.255,0.645-0.379,0.937c-0.126,0.298-0.237,0.563-0.318,0.802c0.484,0.11,0.864,0.265,1.125,0.38l0.151,0.066c0.047,0.02,0.094,0.043,0.137,0.069c0.848,0.516,1.376,1.309,1.489,2.233c0.061,0.498,0.051,3.893,0.03,6.855c0.087,1.285,0.305,2.364,0.593,3.146c0.409,1.114,1.431,3.241,3.394,3.119c1.37-0.085,2.687-0.919,3.561-2.019c0.938-1.181,1.284-2.487,1.414-3.958V34z"
    ></path>
    <path
      fill="#0277bd"
      d="M15.114 28.917c-1.613-1.683-2.399-3.947-2.104-6.056.285-2.035.124-4.027.037-5.098-.029-.357-.048-.623-.047-.77 0-.008.002-.015.003-.023 0-.004-.002-.007-.002-.011.121-3.021 1.286-7.787 4.493-10.62C15.932 5.724 13.388 4.913 11 5 7.258 5.136 3.636 7.724 4 15c.137 2.73 3.222 19.103 7.44 19 .603-.015 1.229-.402 1.872-1.176 1.017-1.223 2.005-2.332 2.708-3.104C15.705 29.481 15.401 29.217 15.114 28.917zM37.023 14.731c.015.154.002.286-.022.408.031.92-.068 1.813-.169 2.677-.074.636-.15 1.293-.171 1.952-.021.645.07 1.282.166 1.956.225 1.578.459 3.359-.765 5.437.225.296.423.571.581.837 4.61-7.475 6.468-16.361 4.695-18.626C38.655 5.944 34.941 4.952 31.999 5c-.921.015-1.758.139-2.473.294C34.602 7.754 36.863 13.026 37.023 14.731zM41 30.071c-2.665.55-3.947.257-4.569-.126-.1.072-.2.133-.293.19-.372.225-.961.583-1.105 2.782.083.016.156.025.246.044L35.714 33c1.32.06 3.049-.31 4.063-.781C41.962 31.205 43.153 29.627 41 30.071zM22.023 32.119c-.037-.298-.198-.539-.492-.732l-.108-.047C21.062 31.181 20.653 31 20 31h-.004c-.127.01-.253.019-.38.019-.052 0-.103-.007-.155-.009-.474.365-1.148.647-2.816.99-2.98.759-1.221 1.655-.078 1.794 1.106.277 3.735.614 5.481-.809C22.043 32.537 22.035 32.229 22.023 32.119z"
    ></path>
    <path
      fill="#0277bd"
      d="M20.681 18.501c-.292.302-.753.566-1.262.484-.828-.134-1.463-1.133-1.417-1.508h0c.044-.374.751-.569 1.578-.435.287.047.548.128.768.228-.32-.688-.899-1.085-1.782-1.182-1.565-.174-3.226.644-3.56 1.097.007.11.02.251.033.417.093 1.147.265 3.284-.05 5.537-.208 1.485.393 3.169 1.567 4.395.757.79 1.641 1.29 2.513 1.438.111-.478.309-.944.513-1.425.113-.265.233-.547.346-.852l.162-.427c.443-1.155.9-2.35.909-4.703C21.003 20.66 20.892 19.627 20.681 18.501zM34.847 22.007c-.104-.729-.211-1.484-.185-2.303.023-.742.105-1.442.184-2.119.062-.533.11-1.045.138-1.55-1.289.107-2.145.479-2.551 1.108.168-.057.358-.102.568-.129.892-.116 1.543.141 1.618.637.055.363-.253.705-.388.836-.277.269-.626.442-.981.488-.064.008-.129.012-.192.012-.353 0-.69-.121-.949-.3.112 1.973 1.567 4.612 2.283 5.907.153.277.271.498.369.688C35.154 24.163 35.009 23.143 34.847 22.007z"
    ></path>
  </svg>
);

export const MongoDBIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    width="30"
    height="30"
    viewBox="0 0 48 48"
  >
    <path
      fill="#5d4037"
      d="M42,17.3C42,37.8,24,44,24,44S6,37.8,6,17.3c0-2.5,0.2-4.6,0.4-6.3c0.3-2.5,2-4.5,4.4-5.1 C13.9,5,18.8,4,24,4s10.1,1,13.3,1.9c2.4,0.6,4.1,2.7,4.4,5.1C41.8,12.7,42,14.9,42,17.3z"
    ></path>
    <path
      fill="#4caf50"
      d="M24,7c4.9,0,9.5,1,12.5,1.8c1.2,0.3,2,1.3,2.2,2.6c0.2,1.9,0.3,3.9,0.3,5.9c0,15.6-11.5,21.9-15,23.4 c-3.5-1.6-15-7.9-15-23.4c0-2,0.1-4,0.3-5.9c0.1-1.3,1-2.3,2.2-2.6C14.5,8,19.1,7,24,7 M24,4c-5.2,0-10.1,1-13.3,1.9 C8.4,6.5,6.6,8.6,6.4,11C6.2,12.7,6,14.9,6,17.3C6,37.8,24,44,24,44s18-6.2,18-26.7c0-2.5-0.2-4.6-0.4-6.3c-0.3-2.5-2-4.5-4.4-5.1 C34.1,5,29.2,4,24,4L24,4z"
    ></path>
    <path fill="#dcedc8" d="M23 28H25V36H23z"></path>
    <path
      fill="#4caf50"
      d="M24,10c0,0-6,5-6,13c0,5.2,3.3,8.5,5,10l1-3l1,3c1.7-1.5,5-4.8,5-10C30,15,24,10,24,10z"
    ></path>
    <path
      fill="#81c784"
      d="M24,10c0,0-6,5-6,13c0,5.2,3.3,8.5,5,10l1-3V10z"
    ></path>
  </svg>
);

export const GithubIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    width="30"
    height="30"
    viewBox="0 0 24 24"
  >
    <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6c0-0.4,0-0.9,0.2-1.3 C7.2,6.1,7.4,6,7.5,6c0,0,0.1,0,0.1,0C8.1,6.1,9.1,6.4,10,7.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3c0.9-0.9,2-1.2,2.5-1.3 c0,0,0.1,0,0.1,0c0.2,0,0.3,0.1,0.4,0.3C17,6.7,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4 c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3C22,6.1,16.9,1.4,10.9,2.1z"></path>
  </svg>
);

export const FigmaIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    width="30"
    height="30"
    viewBox="0 0 48 48"
  >
    <path
      fill="#e64a19"
      d="M26,17h-8c-3.866,0-7-3.134-7-7v0c0-3.866,3.134-7,7-7h8V17z"
    ></path>
    <path
      fill="#7c4dff"
      d="M25,31h-7c-3.866,0-7-3.134-7-7v0c0-3.866,3.134-7,7-7h7V31z"
    ></path>
    <path
      fill="#66bb6a"
      d="M18,45L18,45c-3.866,0-7-3.134-7-7v0c0-3.866,3.134-7,7-7h7v7C25,41.866,21.866,45,18,45z"
    ></path>
    <path
      fill="#ff7043"
      d="M32,17h-7V3h7c3.866,0,7,3.134,7,7v0C39,13.866,35.866,17,32,17z"
    ></path>
    <circle cx="32" cy="24" r="7" fill="#29b6f6"></circle>
  </svg>
);

export const SupabaseIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    width="30"
    height="30"
    viewBox="0 0 48 48"
  >
    <g id="Ð¡Ð»Ð¾Ð¹_1">
      <linearGradient
        id="SVGID_1__sH0rW2TvYdr9_gr1"
        x1="14.073"
        x2="14.073"
        y1="8.468"
        y2="36.033"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#7dffce"></stop>
        <stop offset="1" stopColor="#50c08d"></stop>
      </linearGradient>
      <path
        fill="url(#SVGID_1__sH0rW2TvYdr9_gr1)"
        d="M24.2,30V6.3c0-1.8-2.3-2.6-3.4-1.2L4.5,25.9c-1.3,1.7-0.1,4.1,2,4.1H24.2z"
      ></path>
      <linearGradient
        id="SVGID_00000140728474547789280440000018204366184369975479__sH0rW2TvYdr9_gr2"
        x1="34.249"
        x2="34.249"
        y1="48.404"
        y2="19.425"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#7dffce"></stop>
        <stop offset="1" stopColor="#50c08d"></stop>
      </linearGradient>
      <path
        fill="url(#SVGID_00000140728474547789280440000018204366184369975479__sH0rW2TvYdr9_gr2)"
        d="M24,18.4v23.7c0,1.8,2.4,2.6,3.5,1.2 l16.4-20.7c1.3-1.7,0.1-4.1-2.1-4.1H24z"
      ></path>
    </g>
  </svg>
);

export const FirebaseIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    width="30"
    height="30"
    viewBox="0 0 48 48"
  >
    <path
      fill="#ff8f00"
      d="M8,37L23.234,8.436c0.321-0.602,1.189-0.591,1.494,0.02L30,19L8,37z"
    ></path>
    <path
      fill="#ffa000"
      d="M8,36.992l5.546-34.199c0.145-0.895,1.347-1.089,1.767-0.285L26,22.992L8,36.992z"
    ></path>
    <path
      fill="#ff6f00"
      d="M8.008 36.986L8.208 36.829 25.737 22.488 20.793 13.012z"
    ></path>
    <path
      fill="#ffc400"
      d="M8,37l26.666-25.713c0.559-0.539,1.492-0.221,1.606,0.547L40,37l-15,8.743 c-0.609,0.342-1.352,0.342-1.961,0L8,37z"
    ></path>
  </svg>
);
