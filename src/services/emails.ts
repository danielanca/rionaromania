import { orderProps } from "./../utils/OrderInterfaces";

export const sendReviewToBack = async (reviewObj: any) => {
  return await fetch("http://localhost:5000/sapunmontan/us-central1/sendReviewToServer", {
    method: "POST",
    mode: "no-cors",
    body: JSON.stringify({
      name: reviewObj.name,
      starsNumber: reviewObj.starsNumber,
      reviewActual: reviewObj.reviewActual,
      email: reviewObj.email,
      reviewProductID: reviewObj.reviewProductID
    })
  })
    .then(() => true)
    .catch(() => false);
};
//https://us-central1-sapunmontan.cloudfunctions.net/sendEmail
//http://localhost:5000/sapunmontan/us-central1/sendEmail
export const sendOrderConfirmation = async (data: orderProps) => {
  return await fetch("https://us-central1-sapunmontan.cloudfunctions.net/sendEmail", {
    method: "POST",
    mode: "no-cors",
    body: JSON.stringify({
      firstName: data.firstName,
      lastName: data.lastName,
      emailAddress: data.emailAddress,
      city: data.city,
      county: data.county,
      phoneNo: data.phoneNo,
      paymentMethod: data.paymentMethod,
      deliveryName: data.deliveryName,
      deliveryAddress: data.deliveryAddress,
      orderNotes: data.orderNotes,
      cartSum: data.cartSum,
      shippingTax: data.shippingTax,
      cartProducts: data.cartProducts
    })
  })
    .then(() => true)
    .catch(() => false);
};

export const requestLoginAccess = async (email: string, password: string) => {
  return await fetch("https://us-central1-sapunmontan.cloudfunctions.net/requestAuth", {
    method: "POST",
    mode: "cors",
    body: JSON.stringify({ email: email, password: password })
  })
    .then((res) => res)
    .catch((error) => error);
};

export const sendReservationMail = async (
  name: string,
  email: string,
  phone: string,
  details: string,
  dates: string,
  persons: number
) => {
  return await fetch("https://us-central1-oasisresidenceweb-b7f37.cloudfunctions.net/sendEmail", {
    method: "POST",
    mode: "no-cors",
    body: JSON.stringify({ email: email, name: name, phone: phone, details: details, dates: dates, persons: persons })
  })
    .then((res) => res)
    .catch((error) => error);
};
