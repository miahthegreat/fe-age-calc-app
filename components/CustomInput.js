const CustomInput = ({ label, type, name, placeholder, value, setValue }) => {
  return (
    <div className="flex max-w-[160px] flex-col items-start gap-2">
      <label
        htmlFor={name}
        className="flex text-[14px] font-bold uppercase leading-[21px] text-[#716F6F]"
      >
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        className="flex w-full items-center rounded-[8px] border-[1px] border-[#DCDCDC] px-6 py-3 text-[32px] font-bold leading-[48px] text-gray-900 shadow-sm placeholder:text-[32px] placeholder:leading-[48px] placeholder:text-gray-400 focus:border focus:border-[#854DFF] "
        placeholder={placeholder}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export default CustomInput;
