import { Request, Response, NextFunction } from 'express';
import { CreateVendorInput } from '../dto';
import { Vendor } from '../models';
import { GenerateSalt, GeneratePassword } from '../utility';

export const CreateVendor = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const {
    name,
    address,
    pincode,
    foodType,
    email,
    password,
    ownerName,
    phone,
  } = <CreateVendorInput>req.body;

  const existingVendor = await Vendor.findOne({ email });

  if (existingVendor) {
    return res.json({ message: 'Vendor already exists with this email ID' });
  }

  const salt = await GenerateSalt();

  const hashedPassword = await GeneratePassword(password, salt);

  const createdVendor = await Vendor.create({
    name,
    ownerName,
    foodType,
    pincode,
    address,
    phone,
    email,
    password: hashedPassword,
    salt,
    serviceAvailable: false,
    coverImages: ['1'],
    rating: 1,
  });

  return res.json(createdVendor);
};

export const GetVendors = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const vendors = await Vendor.find();

  return res.json(vendors);
};

export const GetVendorByID = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {};
