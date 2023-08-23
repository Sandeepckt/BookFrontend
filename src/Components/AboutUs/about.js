import {
    MDBFooter,
    MDBContainer,
    MDBIcon,
    MDBBtn
} from 'mdb-react-ui-kit';
import "react-multi-carousel/lib/styles.css";
import payment from "../../assets/img/payment.png";
export default function AboutUs() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12">
                    <h2 className="title text-center mb-2">About Us</h2>
                    <h6 className="card-title text-center mb-5">Welcome to Bookworm!</h6>
                </div>
                <div className="col-12">
                    <p>
                        Bookworm Is Your One-Stop Solution For All Your Book Needs.
                        With Exclusive Listings Found Only In The Local Markets,
                        The Wide Range Of Books Available Via Our App Is A Shortcut
                        To The Best Of Appa Balwant Chowk’s Bookstores In Pune.
                        The Hassle-Free Checkout Lets You Get Your Favourite Books
                        Delivered To Your Doorstep Bypassing The Traffic Snarls And
                        Parking Problems. BookStation Has One Of The Best Logistics
                        Networks In The City To Deliver Books Promptly. The Hyperlocal
                        Network Allows You To Get Your Books Delivered Within Pune
                        (Specified Limits) With An Option Of Cash On Delivery (COD).

                    </p>
                </div>
                <div className='col-md-12 text-center my-5'>
                    <MDBBtn
                        floating
                        className='m-1'
                        style={{ backgroundColor: '#3b5998' }}
                        href='#!'
                        role='button'
                    >
                        <MDBIcon fab icon='facebook-f' />
                    </MDBBtn>

                    <MDBBtn
                        floating
                        className='m-1'
                        style={{ backgroundColor: '#55acee' }}
                        href='#!'
                        role='button'
                    >
                        <MDBIcon fab icon='twitter' />
                    </MDBBtn>

                    <MDBBtn
                        floating
                        className='m-1'
                        style={{ backgroundColor: '#dd4b39' }}
                        href='#!'
                        role='button'
                    >
                        <MDBIcon fab icon='google' />
                    </MDBBtn>
                    <MDBBtn
                        floating
                        className='m-1'
                        style={{ backgroundColor: '#ac2bac' }}
                        href='#!'
                        role='button'
                    >
                        <MDBIcon fab icon='instagram' />
                    </MDBBtn>

                    <MDBBtn
                        floating
                        className='m-1'
                        style={{ backgroundColor: '#0082ca' }}
                        href='#!'
                        role='button'
                    >
                        <MDBIcon fab icon='linkedin-in' />
                    </MDBBtn>

                    <MDBBtn
                        floating
                        className='m-1'
                        style={{ backgroundColor: '#333333' }}
                        href='#!'
                        role='button'
                    >
                        <MDBIcon fab icon='github' />
                    </MDBBtn>
                </div>
                <div className='col-md-12 text-center mb-5'>

                <h6 className="card-title text-center mb-5">Payment methods accepted</h6>
                    <img className="mb-3" src={payment} alt="product image" />
                </div>
            </div>
        </div>
    );
}
