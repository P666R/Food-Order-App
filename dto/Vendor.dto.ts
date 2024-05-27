// Interfaces in TypeScript are used to define the shape of an object. They do not generate any JavaScript code and are only used for type checking at compile time. Interfaces can describe the structure of Data Transfer Objects (DTOs), ensuring that objects conform to a particular shape or contract.

export interface CreateVendorInput {
  name: string;
  ownerName: string;
  foodType: [string];
  pincode: string;
  address: string;
  phone: string;
  email: string;
  password: string;
}

export interface EditVendorInput {
  name: string;
  address: string;
  phone: string;
  foodType: [string];
}

export interface VendorLoginInput {
  email: string;
  password: string;
}

export interface VendorPayload {
  _id: string;
  email: string;
  name: string;
}

export interface CreateOfferInputs {
  offerType: string;
  vendors: [any];
  title: string;
  description: string;
  minValue: number;
  offerAmount: number;
  startValidity: Date;
  endValidity: Date;
  promoCode: string;
  promoType: string;
  bank: [any];
  bins: [any];
  pincode: string;
  isActive: boolean;
}
