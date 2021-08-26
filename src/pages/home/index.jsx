import React from 'react';
import { Link } from 'react-router-dom';
import foodabout from '../../assets/foodabout.jpg';
import './style.scss';

function HomePage(props) {

  return (
    <main>
      <section id="home" className="home-page">
        <div class="container">
          <div class="slogan">
            <h1 className="left-to-right freshfood">
              Freshfood
            </h1>
            <p class="left-to-right play-on-scroll delay-2">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae eveniet ullam perferendis
              eos, nobis corrupti similique fuga ipsa minus at eius ipsam expedita quam aliquam
              perspiciatis voluptate qui dolore soluta.
            </p>
            <div class="left-to-right play-on-scroll delay-4">
              <Link to='/order'>
                <button>Order now</button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section class="about fullheight align-items-center" id="about">
        <div class="container grid-about">
          <img src={foodabout} alt=""
            class="fullwidth left-to-right play-on-scroll" />
          <div className="about-content">
            <div class="about-slogan right-to-left play-on-scroll">
              <h3>
                <span class="primary-color">We</span> create <span class="primary-color">delicious</span>
                memories for <span class="primary-color">you</span>
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio natus placeat et eos,
                dignissimos voluptatem tempora necessitatibus doloribus! Eum qui doloribus odio dolor
                tenetur nihil impedit vero magni, distinctio soluta!
              </p>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}

export default HomePage;