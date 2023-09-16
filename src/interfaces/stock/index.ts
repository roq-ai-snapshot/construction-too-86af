import { ToolInterface } from 'interfaces/tool';
import { OutletInterface } from 'interfaces/outlet';
import { GetQueryInterface } from 'interfaces';

export interface StockInterface {
  id?: string;
  quantity: number;
  tool_id: string;
  outlet_id: string;
  created_at?: any;
  updated_at?: any;

  tool?: ToolInterface;
  outlet?: OutletInterface;
  _count?: {};
}

export interface StockGetQueryInterface extends GetQueryInterface {
  id?: string;
  tool_id?: string;
  outlet_id?: string;
}
