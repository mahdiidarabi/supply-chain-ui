
import React from "react";
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBIcon, MDBBtn, MDBInput } from "mdbreact";
import {FaEnvelope,Fauser,FaPhone,FaMapMarkerAlt} from "react-icons/fa";


var sectionStyle = {
  width: "100%",
  height: "741px",
 
  position:"relative",
  backgroundImage: "url(https://imgurl.ir/uploads/z375216_.png)"
};
const ContactPage = () => {
  return (<section style={sectionStyle}>
    <section style={{position:"absolute",top:"120px",left:"350px"}} className="my-5">
      
      <p3 style={{position:"absolute",top:"-100px",left:"50px",color:"rgb(255, 255, 255)"}} className="text-center w-responsive mx-auto pb-5">
        We would be happy hearing from you ;) 
      </p3>
      <MDBRow>
        <MDBCol lg="5" className="lg-0 mb-4">
          <MDBCard>
            <MDBCardBody>
              <div className="form-header blue accent-1">
                <h3 className="mt-2">
                  
                </h3>
              </div>
              <p className="dark-grey-text">
              <FaEnvelope /> Write to us:
              </p>
              <div className="md-form">
                <MDBInput
                  icon="react-icons/fa/Fauser"
                  label="Your name"
                  iconClass="grey-text"
                  type="text"
                  id="form-name"
                />
              </div>
              <div className="md-form">
                <MDBInput
                  icon="envelope"
                  label="Your email"
                  iconClass="grey-text"
                  type="text"
                  id="form-email"
                />
              </div>
              <div className="md-form">
                <MDBInput
                  icon="tag"
                  label="Subject"
                  iconClass="grey-text"
                  type="text"
                  id="form-subject"
                />
              </div>
              <div className="md-form">
                <MDBInput
                  icon="pencil-alt"
                  label="Message"
                  iconClass="grey-text"
                  type="textarea"
                  id="form-text"
                />
              </div>
              <div className="text-center">
                <MDBBtn color="light-blue">Submit</MDBBtn>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol lg="7">
          <div
            id="map-container"
            className="rounded z-depth-1-half map-container"
            style={{ height: "400px" }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.9362997390785!2d51.35132490756017!3d35.703185135299385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e00a8bc1a7e63%3A0x61a5a909b878501!2sSharif+University+of+Technology!5e0!3m2!1sen!2sus!4v1556384543626!5m2!1sen!2sus"
              title="This is a unique title"
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 0 }}
            />
          </div>
          <br />
          <MDBRow className="text-center">
            <MDBCol style={{position:"relative",left:"30px"}} md="4">
              {/* <MDBBtn tag="a" floating color="blue" className="accent-1">
               
              </MDBBtn> */}
              <FaMapMarkerAlt style={{color:"rgb(255, 255, 255)"}}/>
              <p4>Sharif University of Technology</p4>
              {/* <p4 className="mb-md-0">Iran</p4> */}
            </MDBCol>
            <MDBCol style={{position:"relative",left:"30px"}} md="4">
              {/* <MDBBtn tag="a" floating color="blue" className="accent-1">
               
              </MDBBtn> */}
              <FaPhone style={{color:"rgb(255, 255, 255)"}}/>
              <p4>+ 01 244 567 89</p4>
              {/* <p4 className="mb-md-0">Mon - Fri, 8:00-22:00</p4> */}
            </MDBCol>
            <MDBCol style={{position:"relative",left:"30px"}} md="4">
              {/* <MDBBtn tag="a" floating color="blue" className="accent-1">
                <FaEnvelope />
              </MDBBtn> */}
              <FaEnvelope style={{color:"rgb(255, 255, 255)"}}/>
              <p4 >info@gmail.com</p4>
              {/* <p4 className="mb-md-0">sale@gmail.com</p4> */}
            </MDBCol>
          </MDBRow>
        </MDBCol>
      </MDBRow>
     
    </section>

    </section>
  );
}

export default ContactPage;