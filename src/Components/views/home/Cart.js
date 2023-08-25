import React,{useState} from 'react';
import { useEffect } from 'react';
import {
    MDBBtn,
    MDBCardBody,
    MDBCol,
    MDBIcon,
    MDBInput,
    MDBRadio,
    MDBRow,
  } from "mdb-react-ui-kit";

const Cart = ({cart, setCart, handleChange}) => {
    const [price, setPrice] = useState(0);
    var price1;

    const handlePrice = ()=>{
        let ans = 0;
        cart.map((item)=>(
            ans += item.amount * item.price
        ))
        setPrice(ans);
    }

    const handleRemove = (id) =>{
        const arr = cart.filter((item)=>item.id !== id);
        setCart(arr);
        // handlePrice();
    }

    useEffect(()=>{
        handlePrice();
    },[cart] );
    // [cart]
  return (
    <>
    <article>
        {
            cart?.map((item)=>(
                <div key={item.id} className="cart_box" >
                    <div className="cart_img">
                        <img src={item.img} />
                        <p>{item.title}</p>
                    </div>
                    <div className=''>
                        <button onClick={()=>handleChange(item, +1)}> + </button>
                        <button>{item.amount}</button>
                        <button onClick={()=>handleChange(item, -1)}> - </button>
                    </div>
                    <div>
                        <span>{item.price}</span>
                        <button onClick={()=>handleRemove(item.id)} >Remove</button>
                    </div>
                </div>
            ))}
    </article>
    <MDBCardBody className="p-4">
    <MDBRow>
      <MDBCol md="6" lg="4" xl="3" className="mb-4 mb-md-0">
        <form>
          <div className="d-flex flex-row pb-3">
            <div className="d-flex align-items-center pe-2">
              <MDBRadio
                type="radio"
                name="radio1"
                checked
                value=""
                aria-label="..."
              />
            </div>
            <div className="rounded border w-100 p-3">
              <p className="d-flex align-items-center mb-0">
                <MDBIcon
                  fab
                  icon="cc-mastercard fa-2x text-dark pe-2"
                />
                Credit Card
              </p>
            </div>
          </div>
          <div className="d-flex flex-row pb-3">
            <div className="d-flex align-items-center pe-2">
              <MDBRadio
                type="radio"
                name="radio1"
                checked
                value=""
                aria-label="..."
              />
            </div>
            <div className="rounded border w-100 p-3">
              <p className="d-flex align-items-center mb-0">
                <MDBIcon fab icon="cc-visa fa-2x text-dark pe-2" />
                Debit Card
              </p>
            </div>
          </div>
          <div className="d-flex flex-row pb-3">
            <div className="d-flex align-items-center pe-2">
              <MDBRadio
                type="radio"
                name="radio1"
                checked
                value=""
                aria-label="..."
              />
            </div>
            <div className="rounded border w-100 p-3">
              <p className="d-flex align-items-center mb-0">
                <MDBIcon fab icon="cc-paypal fa-2x text-dark pe-2" />
                PayPal
              </p>
            </div>
          </div>
        </form>
      </MDBCol>
      <MDBCol md="6" lg="4" xl="6">
        <MDBRow>
          <MDBCol size="12" xl="6">
            <MDBInput
              className="mb-4 mb-xl-5"
              label="Name on card"
              placeholder="John Smiths"
              size="lg"
            />
            <MDBInput
              className="mb-4 mb-xl-5"
              label="Expiration"
              placeholder="MM/YY"
              size="lg"
              maxLength={7}
              minLength={7}
            />
          </MDBCol>

          <MDBCol size="12" xl="6">
            <MDBInput
              className="mb-4 mb-xl-5"
              label="Card Number"
              placeholder="1111 2222 3333 4444"
              size="lg"
              minlength="19"
              maxlength="19"
            />
            <MDBInput
              className="mb-4 mb-xl-5"
              label="Cvv"
              placeholder="&#9679;&#9679;&#9679;"
              size="lg"
              minlength="3"
              maxlength="3"
              type="password"
            />
          </MDBCol>
        </MDBRow>
      </MDBCol>
      <MDBCol lg="4" xl="3">
        <div
          className="d-flex justify-content-between"
          style={{ fontWeight: "500" }}
        >
          <p className="mb-2">Subtotal</p>
          <p className="mb-2"> Rs- {price}</p>
        </div>

        <div
          className="d-flex justify-content-between"
          style={{ fontWeight: "500" }}
        >
          <p className="mb-0">Shipping</p>
          <p className="mb-0">{price>0 && price<500 ? (40) : 0 }</p>
        </div>

        <hr className="my-4" />

        <div
          className="d-flex justify-content-between mb-4"
          style={{ fontWeight: "500" }}
        >
          <p className="mb-2">Total (tax included)</p>
          <p className="mb-2">Rs- {price1 = price>0 && price<500 ? (price+40) : price }</p>
        </div>

        <MDBBtn block size="lg">
          <div className="d-flex justify-content-between">
            <span>Checkout</span>
            <span>Rs. {price1}</span>
          </div>
        </MDBBtn>
      </MDBCol>
    </MDBRow>
  </MDBCardBody>
  </>
  )
}

export default Cart;