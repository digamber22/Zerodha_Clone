import React from 'react';

function Hero() {
    return ( 
   <section className='container-fluid' id="supportHero">
    <div className='row p-5 mt-5 mb-5' id="supportWrapper">
   <h5>Support Portal</h5>
   <a href="">Track Tickets</a>
    </div>

    <div className='row p-3 mx-5'>
  <div className='col-6 p-5'>
    <h1 className='fs-3 mb-4'>Search for an answer or browse help topic to create a ticket</h1>
    <input placeholder='Eg. how do I active F&O,why is my order getting rejected' className='mb-3' /><br />
    <a href="" className='p-2'>Track account openingf</a>
    <a href=""className='p-2'>Track segment activationf</a>
    <a href=""className='p-2'>Intraday marginsf</a>
    <a href=""className='p-2'>Kite user manualf</a>
  </div>

  <div className='col-6 p-5 mt-4 mb-5'>
 <h3>Featured</h3>
 <ol>
  <li> <a href="">Suspension of trading - IDFC Limited</a>
  </li>
  <li> <a href="">Rights Entitlements listing in October 2024</a>
  </li>
 </ol>

  </div>

    </div>

   </section>

     );
}

export default Hero;