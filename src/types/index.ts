export interface Property {
  id: string
  address: string
  price: number
  imageUri: string
}

export interface AddPropertyForm {
  address: string;
  price: number;
  image?: File;
}