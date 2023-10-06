import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBInput
} from "mdb-react-ui-kit";

export default function Footer() {
  return (
    <MDBFooter bgColor="dark" className="text-center text-white text-lg-left">
      <MDBContainer className="p-4 pb-0">
        <form action="">
          <MDBRow className="d-flex justify-content-center">
            <MDBCol size="auto" className="mb-4 mb-md-0">
              <p className="pt-2">
                <strong>Sign up for our newsletter</strong>
              </p>
            </MDBCol>

            <MDBCol md="5" size="12" className="mb-4 mb-md-0">
              <MDBInput
                type="text"
                id="form5Example2"
                label="Email address"
                contrast
              />
            </MDBCol>

            <MDBCol size="auto" className="mb-4 mb-md-0">
              <button
                class="footer-subscribe"
                onClick={(e) => {
                  e.preventDefault();
                }}
              >
                Subscribe
              </button>
            </MDBCol>
          </MDBRow>
        </form>
      </MDBContainer>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        &copy; {new Date().getFullYear()} Copyright:{" "}
        <a className="text-white" href="https://humber.ca/">
          Humber.ca
        </a>
      </div>
    </MDBFooter>
  );
}
