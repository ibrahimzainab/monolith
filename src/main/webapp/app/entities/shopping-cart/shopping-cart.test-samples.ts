import dayjs from 'dayjs/esm';

import { OrderStatus } from 'app/entities/enumerations/order-status.model';
import { PaymentMethod } from 'app/entities/enumerations/payment-method.model';

import { IShoppingCart, NewShoppingCart } from './shopping-cart.model';

export const sampleWithRequiredData: IShoppingCart = {
  id: 126,
  placedDate: dayjs('2022-12-16T07:09'),
  status: OrderStatus['PENDING'],
  totalPrice: 14283,
  paymentMethod: PaymentMethod['CREDIT_CARD'],
};

export const sampleWithPartialData: IShoppingCart = {
  id: 36543,
  placedDate: dayjs('2022-12-16T02:09'),
  status: OrderStatus['COMPLETED'],
  totalPrice: 96105,
  paymentMethod: PaymentMethod['CREDIT_CARD'],
  paymentReference: 'invoice b',
};

export const sampleWithFullData: IShoppingCart = {
  id: 91317,
  placedDate: dayjs('2022-12-16T06:02'),
  status: OrderStatus['PENDING'],
  totalPrice: 84584,
  paymentMethod: PaymentMethod['IDEAL'],
  paymentReference: 'Mouse generate mint',
};

export const sampleWithNewData: NewShoppingCart = {
  placedDate: dayjs('2022-12-16T01:17'),
  status: OrderStatus['CANCELLED'],
  totalPrice: 38442,
  paymentMethod: PaymentMethod['CREDIT_CARD'],
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
