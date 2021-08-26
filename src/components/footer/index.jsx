import React from 'react';
import './style.scss'
function Footer(props) {
  return (
    <footer class="footer bg-img">
      <div class="container">
            <div class="row">
                <div class="col-6 col-xs-12">
                    <h1>
                        Freshfood
                    </h1>
                    <br />
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, quas harum? Atque eius
                        quaerat fuga sint molestiae illo corrupti vitae voluptatibus. Dicta rerum est delectus
                        perspiciatis nemo nihil autem! Doloremque?</p>
                    <br />
                    <p>Email: example@mail.com</p>
                    <p>Phone: +00 123 456 789</p>
                    <p>Website: freshfood.com</p>
                </div>
                <div class="col-2 col-xs-12">
                    <h1>
                        About us
                    </h1>
                    <br />
                    <p>
                        <a href="#">
                            Chefs
                        </a>
                    </p>
                    <p>
                        <a href="#">
                            Menu
                        </a>
                    </p>
                    <p>
                        <a href="#">
                            Testimonials
                        </a>
                    </p>
                    <p>
                        <a href="#">
                            Lorem ipsum
                        </a>
                    </p>
                </div>
                <div class="col-4 col-xs-12">
                    <h1>
                        Subscribe & media
                    </h1>
                    <br />
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto aspernatur doloremque rerum nam
                        ullam obcaecati error asperiores temporibus quo eum eaque sed odio vitae accusantium, dolorem
                        nihil molestiae deserunt maxime!</p>
                    <div class="input-group">
                        <input type="text" placeholder="Enter your email" />
                        <button>
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </footer>
);
}

export default Footer;