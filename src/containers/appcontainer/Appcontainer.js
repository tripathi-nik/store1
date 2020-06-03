import React from 'react';
import TopComponent from './appcomponent/topComponent';
import Products from '../products/Products';
class Appcontainer extends React.Component{
  render=()=>{
    return(
      <React.Fragment>
      <section id="about" class="section-padding">
        <div class="container">
          <div class="row">
            <TopComponent/>
          </div>
        </div>
      </section>

      <section id="event">
        <div class="bg-color" class="section-padding">
          <div class="container">
            <div class="row">
              <div class="col-xs-12 text-center">
                <h1 class="header-h">Up Coming events</h1>
                <p class="header-p">Decorations 100% complete here</p>
              </div>
              <div class="col-md-12">
                <div class="item active left">
                  <div class="col-md-6 col-sm-6 left-images">
                    <img src="img/res02.jpg" class="img-responsive"/>
                  </div>
                  <div class="col-md-6 col-sm-6 details-text">
                    <div class="content-holder">
                      <h2>Joyful party</h2>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore eos suscipit earum voluptas aliquam recusandae, quae iure adipisci, inventore quia, quos delectus quaerat praesentium id expedita nihil illo accusantium, tempora.</p>
                      <address>
                                  <strong>Place: </strong>
                                  1612 Collins Str, Victoria 8007
                                  <br/>
                                  <strong>Time: </strong>
                                  07:30pm
                                </address>
                      <a class="btn btn-imfo btn-read-more" href="events-details.html">Read more</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="menu-list" class="section-padding">
       <Products/>
      </section>

      <section id="contact" class="section-padding">
        <div class="container">
          <div class="row">
            <div class="col-md-12 text-center">
              <h1 class="header-h">Book Your table</h1>
              <p class="header-p">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
                <br/>nibh euismod tincidunt ut laoreet dolore magna aliquam. </p>
            </div>
          </div>
          <div class="row msg-row">
            <div class="col-md-4 col-sm-4 mr-15">
              <div class="media-2">
                <div class="media-left">
                  <div class="contact-phone bg-1 text-center"><span class="phone-in-talk fa fa-phone"></span></div>
                </div>
                <div class="media-body">
                  <h4 class="dark-blue regular">Phone Numbers</h4>
                  <p class="light-blue regular alt-p">+440 875369208 - <span class="contacts-sp">Phone Booking</span></p>
                </div>
              </div>
              <div class="media-2">
                <div class="media-left">
                  <div class="contact-email bg-14 text-center"><span class="hour-icon fa fa-clock-o"></span></div>
                </div>
                <div class="media-body">
                  <h4 class="dark-blue regular">Opening Hours</h4>
                  <p class="light-blue regular alt-p"> Monday to Friday 09.00 - 24:00</p>
                  <p class="light-blue regular alt-p">
                    Friday and Sunday 08:00 - 03.00
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-8 col-sm-8">
              <form action="" method="post" role="form" class="contactForm">
                <div id="sendmessage">Your booking request has been sent. Thank you!</div>
                <div id="errormessage"></div>
                <div class="col-md-6 col-sm-6 contact-form pad-form">
                  <div class="form-group label-floating is-empty">
                    <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                    <div class="validation"></div>
                  </div>

                </div>
                <div class="col-md-6 col-sm-6 contact-form">
                  <div class="form-group">
                    <input type="date" class="form-control label-floating is-empty" name="date" id="date" placeholder="Date" data-rule="required" data-msg="This field is required" />
                    <div class="validation"></div>
                  </div>
                </div>
                <div class="col-md-6 col-sm-6 contact-form pad-form">
                  <div class="form-group">
                    <input type="email" class="form-control label-floating is-empty" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                    <div class="validation"></div>
                  </div>
                </div>
                <div class="col-md-6 col-sm-6 contact-form">
                  <div class="form-group">
                    <input type="time" class="form-control label-floating is-empty" name="time" id="time" placeholder="Time" data-rule="required" data-msg="This field is required" />
                    <div class="validation"></div>
                  </div>
                </div>
                <div class="col-md-6 col-sm-6 contact-form">
                  <div class="form-group">
                    <input type="text" class="form-control label-floating is-empty" name="phone" id="phone" placeholder="Phone" data-rule="required" data-msg="This field is required" />
                    <div class="validation"></div>
                  </div>
                </div>
                <div class="col-md-6 col-sm-6 contact-form">
                  <div class="form-group">
                    <input type="text" class="form-control label-floating is-empty" name="people" id="people" placeholder="People" data-rule="required" data-msg="This field is required" />
                    <div class="validation"></div>
                  </div>
                </div>
                <div class="col-md-12 contact-form">
                  <div class="form-group label-floating is-empty">
                    <textarea class="form-control" name="message" rows="5" rows="3" data-rule="required" data-msg="Please write something for us" placeholder="Message"></textarea>
                    <div class="validation"></div>
                  </div>

                </div>
                <div class="col-md-12 btnpad">
                  <div class="contacts-btn-pad">
                    <button class="contacts-btn">Book Table</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      </React.Fragment>
    );
  }
}
export default Appcontainer;
