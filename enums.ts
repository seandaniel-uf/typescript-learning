// enums allow us to define a set of named constants

// UP
// DOWN
// LEFT
// RIGHT

// PENDING
// SHIPPED
// DELIVERED
// RETURNED

// list of values we want to include
enum Responses {
  no, 
  yes,
  maybe
}

// assigns a numeric value by default 0, 1, 2, 3, 4

enum OrderStatus {
  PENDING,
  SHIPPED,
  DELIVERED,
  RETURNED
}

type OrderStatus2 = {
  PENDING: 'PENDING',
  SHIPPED: 'SHIPPED',
  DELIVERED: 'DELIVERED',
  RETURNED: 'RETURNED'
}

const MyOrderStatus: OrderStatus2 = {
  PENDING: 'PENDING',
  SHIPPED: 'SHIPPED',
  DELIVERED: 'DELIVERED',
  RETURNED: 'RETURNED',
}

const myStatus = OrderStatus.DELIVERED;

function isDelivered(status: OrderStatus) {
  return status === OrderStatus.DELIVERED;
}

isDelivered(OrderStatus.RETURNED);

enum ArrowKeys {
  UP = "up",
  DOWN = "down",
  LEFT = "left",
  RIGHT = "right"
