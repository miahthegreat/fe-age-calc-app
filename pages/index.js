import ArrowSVG from "@/components/ArrowSVG";
import CustomInput from "@/components/CustomInput";
import Results from "@/components/Results";
import { Inter } from "next/font/google";
import { useState } from "react";

export default function Home() {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  return (
    <main className="flex h-[651px] flex-col items-start rounded rounded-t-3xl rounded-br-[200px] bg-white p-[56px] shadow-sm ring-1 ring-gray-900 ring-opacity-5 md:w-96 lg:w-[840px]">
      <div className="form-group">
        <CustomInput
          label="Day"
          name="day"
          type="number"
          value={day}
          setValue={setDay}
          placeholder="DD"
        />
        <CustomInput
          label="Month"
          name="month"
          type="number"
          value={month}
          setValue={setMonth}
          placeholder="MM"
        />
        <CustomInput
          label="Year"
          name="year"
          type="number"
          value={year}
          setValue={setYear}
          placeholder="YYYY"
        />
      </div>
      <div className="flex flex-grow-0 items-center">
        <div className="h-[1px] w-[632px] bg-[#DCDCDC]"></div>
        <button className="grid aspect-1 w-[96px] content-center justify-center rounded-full bg-[#854DFF] transition-colors duration-200 ease-in hover:bg-[#151515]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="46"
            height="44"
            viewBox="0 0 46 44"
          >
            <g fill="none" stroke="#FFF" stroke-width="2">
              <path d="M1 22.019C8.333 21.686 23 25.616 23 44M23 44V0M45 22.019C37.667 21.686 23 25.616 23 44" />
            </g>
          </svg>
        </button>
      </div>
      <Results />
    </main>
  );
}
