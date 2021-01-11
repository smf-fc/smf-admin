export interface MatchModel {
  id: number;
  dateTime: string;
  pitch: {
    id: number;
    name: string;
    address: string;
    phoneNumber: string;
  };
  status: string;
}
