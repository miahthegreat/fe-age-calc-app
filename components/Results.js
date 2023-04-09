const Results = ({ results }) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2 text-[65px] font-bold italic leading-[71.6px] md:text-[70px] md:leading-[75px] lg:text-[104px] lg:leading-[114.4px]">
        <span className="text-[#854DFF]">
          {results && results.years && <>{results.years}</>}
          {!results && "--"}
        </span>
        <span className="text-[#151515]">
          {((results && (results.years > 1 || results.years === 0)) || !results) && `years`}
          {results && results.years === 1 && "year"}
        </span>
      </div>
      <div className="flex gap-2 text-[65px] font-bold italic leading-[71.6px] md:text-[70px] md:leading-[75px] lg:text-[104px] lg:leading-[114.4px]">
        <span className="text-[#854DFF]">
        {results && results.months && <>{results.months}</>}
          {!results && "--"}
        </span>
        <span className="text-[#151515]">
        {((results && (results.months > 1 || results.months === 0)) || !results) && `months`}
          {results && results.months === 1 && "month"}
        </span>
      </div>
      <div className="flex gap-2 text-[65px] font-bold italic leading-[71.6px] md:text-[70px] md:leading-[75px] lg:text-[104px] lg:leading-[114.4px]">
        <span className="text-[#854DFF]">
        {results && results.days && <>{results.days}</>}
          {!results && "--"}
        </span>
        <span className="text-[#151515]">
        {((results && (results.days > 1 || results.days === 0)) || !results) && `days`}
          {results && results.days === 1 && "day"}
        </span>
      </div>
    </div>
  );
};

export default Results;
