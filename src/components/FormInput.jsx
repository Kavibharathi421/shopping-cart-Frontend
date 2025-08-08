export default function FormInput({ Icon, name, type = 'text', value, onChange, placeholder, full = false }) {
  return (
    <div className={`${full ? 'col-span-2' : 'col-span-1'} relative`}>
      <Icon className="w-5 h-5 text-gray-400 absolute left-3 top-3.5" />
      <input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required
        className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
    </div>
  );
}
