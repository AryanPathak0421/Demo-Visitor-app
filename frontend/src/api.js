// Mock front-end API: stores orders and places in localStorage so the app behaves like a real dynamic app.
// No server involved.

import initialPlaces from './data/placesData';
import { v4 as uuid } from 'uuid';

// keys for localStorage
const PLACES_KEY = 'imc_places_v1';
const ORDERS_KEY = 'imc_orders_v1';

// init places in localStorage if not present
function initPlaces() {
  if (!localStorage.getItem(PLACES_KEY)) {
    localStorage.setItem(PLACES_KEY, JSON.stringify(initialPlaces));
  }
}
initPlaces();

export async function fetchPlaces() {
  // simulate network delay
  await new Promise(r => setTimeout(r, 200));
  const raw = localStorage.getItem(PLACES_KEY);
  return JSON.parse(raw || '[]');
}

export async function updatePlace(place) {
  const places = await fetchPlaces();
  const idx = places.findIndex(p => p.id === place.id);
  if (idx >= 0) places[idx] = place;
  else places.push(place);
  localStorage.setItem(PLACES_KEY, JSON.stringify(places));
  return place;
}

export async function createOrder({ placeId, qty = 1, phone }) {
  if (!placeId || !phone) throw new Error('placeId and phone required');
  const places = await fetchPlaces();
  const place = places.find(p => p.id === placeId);
  if (!place) throw new Error('place not found');

  const amount = (place.price || 0) * Number(qty || 1);
  const orderId = uuid();
  const order = {
    id: orderId,
    placeId,
    qty: Number(qty),
    phone,
    amount,
    status: 'pending',
    createdAt: new Date().toISOString()
  };

  const raw = localStorage.getItem(ORDERS_KEY);
  const orders = raw ? JSON.parse(raw) : {};
  orders[orderId] = order;
  localStorage.setItem(ORDERS_KEY, JSON.stringify(orders));

  // simulate server response delay
  await new Promise(r => setTimeout(r, 500));
  return { orderId, amount };
}

export async function confirmPayment(orderId) {
  // simulate verifying payment and generating ticket payload
  const raw = localStorage.getItem(ORDERS_KEY);
  const orders = raw ? JSON.parse(raw) : {};
  const order = orders[orderId];
  if (!order) throw new Error('Order not found');

  // mark as paid
  order.status = 'paid';
  order.paidAt = new Date().toISOString();

  // generate ticket
  const ticketId = 'TICKET-' + uuid().split('-')[0].toUpperCase();
  const ticket = {
    ticketId,
    orderId,
    placeId: order.placeId,
    phone: order.phone,
    qty: order.qty,
    amount: order.amount,
    issuedAt: new Date().toISOString(),
    qrData: `INDORE|${ticketId}|${order.placeId}|${order.qty}|${order.paidAt}`
  };

  orders[orderId] = order;
  localStorage.setItem(ORDERS_KEY, JSON.stringify(orders));
  // store ticket separately (optional)
  localStorage.setItem(`imc_ticket_${ticketId}`, JSON.stringify(ticket));

  // simulate delay
  await new Promise(r => setTimeout(r, 400));
  return ticket;
}

export async function listOrders() {
  const raw = localStorage.getItem(ORDERS_KEY);
  return raw ? JSON.parse(raw) : {};
}
