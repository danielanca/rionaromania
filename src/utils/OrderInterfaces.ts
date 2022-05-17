interface DayTime {
  day: number;
  month: number;
  year: number;
}

export interface orderProps {
  firstName: string;
  lastName: string;
  deliveryAddress: string;
  city: string;
  county: string;
  phoneNo?: string;
  emailAddress?: string;
  orderNotes?: string;
  cartProducts: string;
  cartSum?: number;
  shippingTax?: number;
  paymentMethod: string;
  deliveryName?: string;
}
