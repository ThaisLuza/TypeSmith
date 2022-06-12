import { Pool } from 'mysql2/promise';
import Order from '../interfaces/order.interface';

export default class OrderModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<Order[]> {
    const [result] = await this.connection.execute(
      `SELECT ord.id, ord.userId, pr.id AS productsIds FROM Trybesmith.Orders AS ord
      INNER JOIN Trybesmith.Products AS pr ON pr.orderId = ord.id`,
    );

    return result as Order[];
  }
}
