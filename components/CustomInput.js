const CustomInput = ({
  label,
  type,
  name,
  placeholder,
  value,
  setValue,
  error,
  required,
}) => {
  return (
    <div className="flex flex-col items-start gap-2 md:max-w-[160px]">
      <label
        htmlFor={name}
        className={`
        flex text-[12px] font-bold uppercase leading-[18px] text-[#716F6F] lg:text-[14px] lg:leading-[21px]
        ${
          error.inPast && error.date === '' ? "text-[#FF5959]" : "text-[#716F6F]"
        }
        ${
          error.date && error.day && name === "day"
            ? "text-[#FF5959]"
            : "text-[#716F6F]"
        }
        ${
          error.date && error.month && name === "month"
            ? "text-[#FF5959]"
            : "text-[#716F6F]"
        }
        ${error.date ? "text-[#FF5959]" : "text-[#716F6F]"}
        ${required ? "text-[#FF5959]" : "text-[#716F6F]"}
        `}
      >
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        className={`flex w-full items-center rounded-[8px] border-[1px] px-4 py-3 text-[20px] font-bold leading-[30px] text-[#151515] shadow-sm placeholder:text-[20px] placeholder:leading-[30px] placeholder:text-[#151515]/50 focus:border focus:border-[#854DFF] md:px-6 md:text-[32px] md:leading-[48px] md:placeholder:text-[32px] md:placeholder:leading-[48px] ${
          error.inPast && error.date === '' ? "border-[#FF5959]" : "border-[#DCDCDC]"
        }
        ${
          error.date && error.day && name === "day"
            ? "border-[#FF5959]"
            : "border-[#DCDCDC]"
        }
        ${
          error.date && error.month && name === "month"
            ? "border-[#FF5959]"
            : "border-[#DCDCDC]"
        }
        ${error.date ? "border-[#FF5959]" : "border-[#DCDCDC]"}
        ${required ? "border-[#FF5959]" : "border-[#DCDCDC]"}
        `}
        placeholder={placeholder}
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      {required && (
        <div className="text-sm italic text-[#FF5959]">{required}</div>
      )}
      {!required && error.inPast && error.date === '' && (
        <div className="text-sm italic text-[#FF5959]">{error.inPast}</div>
      )}
      {!required && error && error.date && (
        <div className="text-sm italic text-[#FF5959]">{error.date}</div>
      )}
    </div>
  );
};

export default CustomInput;
