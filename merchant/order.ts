import Entity  from "./entity"

enum Currency {
    CAD = "CAD",
    USD = "USD",
    BTC = "BTC"
}

type STATUS = "SUCCESS" | "FAILED"

export default interface Order extends Entity {
    status: string,
    items: Item[],
    payment: Payment,
    Complete?: boolean,
}

interface Payment {
    couponCode?: string
    amount: number,
    currency: Currency,
}

interface Item extends Entity {
    Name: string,
    ItemCategory: string,
    Price: number,
    Unit: string,
}

export interface GetOrdersResponse {
    status: STATUS,
    data: Order[]
}