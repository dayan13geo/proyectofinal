import { Payment } from "./pago.model";
import { Client } from "./userClient.model";

export interface Sale{
    id: string;
    costo: number;
    delivery: string;
    dateDelivery: Date;
    dateSale: Date;
    client?: Client;
    pago?: Payment;
}