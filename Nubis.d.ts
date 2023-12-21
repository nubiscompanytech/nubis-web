declare namespace Nubis {
  export interface User {
    phoneNumber: string;
    image: string;
    countryCode: string;
    email: string;
    residentialAddress: string;
    isVerified: boolean;
    userId: string;
    firstName: string;
    lastName: string;
    kycStatus: string;
    gender: string;
    dateOfBirth: string;
    isEmailVerified: boolean;
    middleName: string;
    twoFAType: VerificationType;
  }

  export type UseFormFields = object;

  type F = object;

  export type FormGroupProps<P = keyof F> = {
    name: string;
    value?: string;
    label?: string;
    options?: object[];
    required?: boolean;
    withLabel?: boolean;
    error?: boolean;
    placeholder?: string;
    htmlRef?: any;
    inputType?: string;
    rows?: number;
    maxLength?: number;
    max?: number;
    autoComplete?: boolean;
    addonBefore?: React.ReactNode;
    addonAfter?: React.ReactNode;
    onChange?(value: React.ChangeEvent | string): void;
    onBlur?(e: React.FormEvent): void;
    setFormState?: BusinessRouteProps["setFormState"];
  };
}
