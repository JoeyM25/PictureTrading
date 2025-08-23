export interface Meme {
  name: string;
  currentPrice: number;
  open: number;
  high: number;
  low: number;
  changePercent: number; // +/- %
  imgUrl: string;
}
