import { RentalInterface } from 'interfaces/rental';
import { StockInterface } from 'interfaces/stock';
import { GetQueryInterface } from 'interfaces';

export interface ToolInterface {
  id?: string;
  name: string;
  description?: string;
  price_per_day: number;
  available?: boolean;
  created_at?: any;
  updated_at?: any;
  rental?: RentalInterface[];
  stock?: StockInterface[];

  _count?: {
    rental?: number;
    stock?: number;
  };
}

export interface ToolGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
}
