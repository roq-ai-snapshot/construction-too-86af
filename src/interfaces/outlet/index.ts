import { StockInterface } from 'interfaces/stock';
import { CompanyInterface } from 'interfaces/company';
import { GetQueryInterface } from 'interfaces';

export interface OutletInterface {
  id?: string;
  name: string;
  address: string;
  company_id: string;
  created_at?: any;
  updated_at?: any;
  stock?: StockInterface[];
  company?: CompanyInterface;
  _count?: {
    stock?: number;
  };
}

export interface OutletGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  address?: string;
  company_id?: string;
}
