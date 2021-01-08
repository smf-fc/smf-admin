export interface CheckInModel {
  id: number;
  player: {
    id: number;
    name: string;
    number: number;
  };
  wasJoin: boolean;
}
