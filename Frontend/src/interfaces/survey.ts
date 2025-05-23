export interface FormDataType {
  name: string;
  gender: string;
  nationality: string;
  email: string;
  phone: string;
  address: string;
  message: string;
}

export interface SubmissionType extends FormDataType {
  _id: number;
}

export interface SubmissionProps {
  role: 'user' | 'admin'
}

export type CountryName = {
  name: string;
  flag: string;
};

export type RawCountry = {
  name: { common: string };
  flags: { png: string };
};

export interface HeaderProps {
  title: string;
  role: string;
}

export interface SurveyDetialsProps {
  submission: SubmissionType;
  isOpen: boolean;
  onClose: () => void;
}