import  Entity from "./entity";

export default interface Merchant extends Entity {
    name: string,
    address: number,
    openTime: string,
    closeTime: string;
}


