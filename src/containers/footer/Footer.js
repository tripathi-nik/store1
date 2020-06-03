import React from 'react';
import classes from '../global.module.css';
class Footer extends React.Component{
  render=()=>{
    let classCont = [classes.addCss,'footer','text-center'];
    return(
      <footer className={classCont.join(' ')}>
        <div class="footer-top">
          <div class="row">
            <div class="col-md-offset-3 col-md-6 text-center">
              <div class="widget">
                <h4 class="widget-title">Delicious</h4>
                <address>324 Ellte Road Delhi, DL 110013</address>
                <div class="social-list">
                  <a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a>
                  <a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a>
                </div>
                <p class="copyright clear-float">
                  © Delicious Theme. All Rights Reserved
                  <div class="credits">
                    Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
                  </div>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
export default Footer;
