import { Injectable, NotFoundException } from '@nestjs/common';

// DTO
export class CreateScreeningDto {
  customer: string;
  item: string;
}


export interface Order {
  id: number;
  customer: string;
  item: string;
  status: 'pending' | 'ready' | string;
}

@Injectable()
export class ScreeningService {
  private orders: Order[] = [
    { id: 1, customer: 'Laura', item: 'Café latte', status: 'pending' },
    { id: 2, customer: 'Mateo', item: 'Sándwich', status: 'ready' },
  ];

  findAll(status?: string): Order[] {
    if (!status) {
      return this.orders;
    }

    return this.orders.filter((order) => order.status === status);
  }

  findOne(id: number): Order {
    const order = this.orders.find((currentOrder) => currentOrder.id === id);

    if (!order) {
      throw new NotFoundException(`Order with id ${id} was not found`);
    }

    return order;
  }

  create(createScreeningDto: CreateScreeningDto): Order {
    const newOrder: Order = {
      id: this.orders.length + 1,
      customer: createScreeningDto.customer,
      item: createScreeningDto.item,
      status: 'pending',
    };

    this.orders.push(newOrder);
    return newOrder;
  }
}