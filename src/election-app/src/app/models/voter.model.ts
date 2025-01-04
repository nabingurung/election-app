export interface Voter {
  id: number;
  firstName: string;
  middleName: string;
  lastName: string;
  email: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  phoneNumber: string;
  isRegistered: boolean;
  hasVoted: boolean;
  dateOfBirth: Date;
  referredBy: string;
  createdAt: Date;
  updatedAt: Date;
}