// components/RegisterForm.jsx
import {
  UserIcon,
  EnvelopeIcon,
  PhoneIcon,
  LockClosedIcon,
  MapPinIcon,
  GlobeAltIcon,
  BuildingOffice2Icon,
} from '@heroicons/react/24/outline';

import FormInput from './FormInput';
import useRegister from '../hooks/useRegister';

export default function RegisterForm() {
  const {
    formData,
    error,
    success,
    handleChange,
    handleSubmit
  } = useRegister();

  return (
    <>
      {error && <p className="text-red-600 text-center mb-2">{error}</p>}
      {success && <p className="text-green-600 text-center mb-2">{success}</p>}

      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
        <FormInput Icon={UserIcon} name="full_name" value={formData.full_name} onChange={handleChange} placeholder="Full Name" full />
        <FormInput Icon={EnvelopeIcon} name="email" type="email" value={formData.email} onChange={handleChange} placeholder="Email" />
        <FormInput Icon={PhoneIcon} name="phone_number" value={formData.phone_number} onChange={handleChange} placeholder="Phone Number" />
        <FormInput Icon={LockClosedIcon} name="password" type="password" value={formData.password} onChange={handleChange} placeholder="Password" full />
        <FormInput Icon={MapPinIcon} name="address_line1" value={formData.address_line1} onChange={handleChange} placeholder="Address Line 1" full />
        <FormInput Icon={MapPinIcon} name="address_line2" value={formData.address_line2} onChange={handleChange} placeholder="Address Line 2" full />
        <FormInput Icon={BuildingOffice2Icon} name="city" value={formData.city} onChange={handleChange} placeholder="City" />
        <FormInput Icon={BuildingOffice2Icon} name="state" value={formData.state} onChange={handleChange} placeholder="State" />
        <FormInput Icon={MapPinIcon} name="postal_code" value={formData.postal_code} onChange={handleChange} placeholder="Postal Code" />
        <FormInput Icon={GlobeAltIcon} name="country" value={formData.country} onChange={handleChange} placeholder="Country" />

        <button
          type="submit"
          className="col-span-2 bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white font-bold py-2 rounded transition duration-300"
        >
          Register
        </button>
      </form>
    </>
  );
}
