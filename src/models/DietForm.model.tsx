export interface ClientRegisterForm {
  services: String[];
  forname: String;
  lastname: String;
  phone: Number;
  email?: String;
  birthdate?: Date;
  descriptions?: String;
  weight: Number;
  height: Number;
}
