import ArrowSVG from "@/components/ArrowSVG";
import CustomInput from "@/components/CustomInput";
import Results from "@/components/Results";
import { isValidDate, isPastDate, calculatePastTime } from "@/utils";
import Head from "next/head";
import { useState } from "react";

const initialState = {
  error: { year: "", month: "", day: "", date: "", inPast: "" },
  required: { year: "", month: "", day: "" },
};

export default function Home() {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [timePassed, setTimePassed] = useState(null);
  const [required, setRequired] = useState(initialState.required);
  const [error, setError] = useState(initialState.error);

  const handleSubmit = () => {
    const validDate = isValidDate(day, month, year);
    const pastDate = isPastDate(day, month, year);

    setRequired(initialState.required);
    setError(initialState.error);

    if (!day)
      setRequired((prevState) => ({
        ...prevState,
        day: "This field is required",
      }));

    if (!month)
      setRequired((prevState) => ({
        ...prevState,
        month: "This field is required",
      }));

    if (!year)
      setRequired((prevState) => ({
        ...prevState,
        year: "This field is required",
      }));

    if (validDate.isValid === false && validDate.isInvalidMonth === true) {
      setError((prevError) => ({
        ...prevError,
        month: "Must be a valid month",
      }));
      setTimePassed(null);
    }
    if (validDate.isValid === false && validDate.isInvalidDay === true) {
      setError((prevError) => ({
        ...prevError,
        day: "Must be a valid day",
      }));
      setTimePassed(null);
    }
    if (validDate.isValid === false && validDate.isInvalidYear === true) {
      setError((prevError) => ({
        ...prevError,
        year: "Must be a valid year",
      }));
      setTimePassed(null);
    }
    if (validDate.isValid === false) {
      setError((prevError) => ({
        ...prevError,
        date: "Must be a valid date",
      }));
      setTimePassed(null);
    }
    if (!pastDate) {
      setError((prevError) => ({
        ...prevError,
        inPast: "Must be in the past",
      }));
      setTimePassed(null);
    }
    if (day && month && year && validDate.isValid === true && pastDate) {
      const results = calculatePastTime(day, month, year);
      setRequired(initialState.required);
      setError(initialState.error);
      setTimePassed(results);
    }
  };

  console.log(error);

  return (
    <>
    <Head>
      <title>Age Calculator App</title>
    </Head>
      <main className="container">
        <div className="form-group">
          <CustomInput
            label="Day"
            name="day"
            type="number"
            value={day}
            setValue={setDay}
            placeholder="DD"
            error={error}
            required={required?.day}
          />
          <CustomInput
            label="Month"
            name="month"
            type="number"
            value={month}
            setValue={setMonth}
            placeholder="MM"
            error={error}
            required={required?.month}
          />
          <CustomInput
            label="Year"
            name="year"
            type="number"
            value={year}
            setValue={setYear}
            placeholder="YYYY"
            error={error}
            required={required?.year}
          />
        </div>
        <div className="divider">
          {/* Large Divider */}
          <div className="hidden h-[1px] bg-[#DCDCDC] lg:block lg:w-[632px]" />
          {/* Small/Medium Divider */}
          <div className="h-[1px] w-full absolute inset-x-0 bg-[#DCDCDC] lg:hidden" />
          <button type="button" className="btn" onClick={handleSubmit}>
            <ArrowSVG />
          </button>
        </div>
        <Results results={timePassed} error={error} />
      </main>
    </>
  );
}
