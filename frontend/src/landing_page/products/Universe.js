import React from 'react';

function Universe() {
  const imageStyle = {
    width: '50%',   // Adjust the width to fit the container
    height: '50px', // Set a uniform height for all images
    objectFit: 'contain' // Ensures the image scales while maintaining aspect ratio
  };

  return ( 
    <div className='container'>
      <div className='row text-center'>
        <h1>The Zerodha Universe</h1>
        <h5 className='text-muted'>
          Extend your trading and investment experience even further with our partner platforms
        </h5>
      </div>

      <div className='row'>
        <div className='col-4 p-3 mt-4'>
          <img src="media/images/smallcaseLogo.png" style={imageStyle} alt="Smallcase" />
          <p className="text-small text-muted">Thematic investment platform</p>
        </div>

        <div className='col-4 p-3 mt-4'>
          <img src="media/images/streakLogo.png" style={imageStyle} alt="Streak" />
          <p className="text-small text-muted">Algo & strategy platform</p>
        </div>

        <div className='col-4 p-3 mt-4'>
          <img src="media/images/sensibullLogo.svg" style={imageStyle} alt="Sensibull" />
          <p className="text-small text-muted">Options trading platform</p>
        </div>
      </div>

      <div className='row'>
        <div className='col-4 p-3 mt-4'>
          <img src="media/images/zerodhaFundhouse.png" style={imageStyle} alt="Zerodha Fundhouse" />
          <p className="text-small text-muted">Asset management</p>
        </div>

        <div className='col-4 p-3 mt-4'>
          <img src="media/images/goldenpiLogo.png" style={imageStyle} alt="GoldenPi" />
          <p className="text-small text-muted">Bonds trading platform</p>
        </div>

        <div className='col-4 p-3 mt-4'>
          <img src="media/images/dittoLogo.png" style={imageStyle} alt="Ditto" />
          <p className="text-small text-muted">Insurance</p>
        </div>
      </div>
      <div className='d-flex justify-content-center mt-5'>
  <button className='p-3 btn btn-primary fs-5 mb-5' style={{width: "20%"}}>
    Signup Now
  </button>
</div>

    </div>
  );
}

export default Universe;
