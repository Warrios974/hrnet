import { getMonth, getYear } from "date-fns"; // Importez getYear et getMonth depuis date-fns
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; // Importez le fichier CSS de react-datepicker

type DatePickerFormProps = {
  id: string;
  handleInputChange: (name: string, value: string) => void;
  valueProps: string;
};

export default function DatePickerForm({
  id,
  handleInputChange,
  valueProps,
}: DatePickerFormProps) {
  const [startDate, setStartDate] = useState<Date>(new Date(valueProps));
  const years = range(1990, getYear(new Date()) + 1, 1);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  function range(start: number, end: number, step: number): number[] {
    const array = [];
    for (let i = start; i < end; i += step) {
      array.push(i);
    }
    return array;
  }

  function formatDateToString(date: Date): string {
    const year = date.getFullYear();
    const month = addZero(date.getMonth() + 1);
    const day = addZero(date.getDate());
    return `${year}-${month}-${day}`;
  }

  function addZero(num: number): string {
    return num < 10 ? `0${num}` : num.toString();
  }

  return (
    <div className="w-full relative">
      <svg
        className="absolute right-3 top-3 z-10"
        xmlns="http://www.w3.org/2000/svg"
        height="1em"
        viewBox="0 0 448 512"
      >
        <path d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192H400V448c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192z" />
      </svg>
      <DatePicker
        id={id}
        name={id}
        value={valueProps}
        renderCustomHeader={({ date, changeYear, changeMonth }) => (
          <div className="w-full flex justify-center items-center p-4">
            <select
              value={getYear(date)}
              onChange={({ target: { value } }) => changeYear(Number(value))}
              className="p-2 border rounded"
            >
              {years.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>

            <select
              value={months[getMonth(date)]}
              onChange={({ target: { value } }) =>
                changeMonth(months.indexOf(value))
              }
              className="p-2 border rounded"
            >
              {months.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        )}
        selected={startDate}
        onChange={(date: Date) => {
          setStartDate(date);
          handleInputChange(id, formatDateToString(date));
        }}
        className="w-full px-4 py-2 rounded border shadow-sm focus:outline-none focus:ring-2 focus:ring-lime-500"
      />
    </div>
  );
}
