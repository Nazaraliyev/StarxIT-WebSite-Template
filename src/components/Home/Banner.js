import React from "react";
import bannerImg from "../../Image/Home/Banner/animate-banner-img1.jpg";

function Banner() {
  return (
    <section id="home-banner">
      <div id="home-banner-container" className="my-container">
        <article id="home-banner-text" >
          <h1>Secure IT Solutions for a more secure environment</h1>
          <p className="py-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor dolore magna aliqua. Quis ipsum suspendisse ultrices
            gravida. Risus commodo viverra maecenas accumsan lacus vel
            facilisis.
          </p>
          <button id="btn-1" className="btn text-light px-4 p-2">
            <i class="fas fa-fire pr-2"></i>Try It Free Now
          </button>
        </article>
      </div>
      <div id="img-block">
          <img id = 'animation-img' src={bannerImg}></img>
    </div>
    </section>
  );
}

export default Banner;
