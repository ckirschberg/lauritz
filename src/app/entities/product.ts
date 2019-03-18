import { User, UserVm } from './user';

export class Product {
  _id: string;
  user: UserVm;
  name: string;
  description: string;
  startingPrice: number;
  minimumBid: number; // Increase in bid of ?
  images: string[];
  dateCreated: Date;
  endDate: Date;
  bids: Bid[];
  location: string;
}

export class Bid {
  _id: string;
  userId: string;
  amount: number;
  date: Date;
}