import * as React from "react";


interface SegmentedButtonsProps {
  data: string[];
  value: string;
  onChangeValue: (value: string) => void;
  className?: string;
}

const SegmentedButtons: React.FC<SegmentedButtonsProps> = ({ className, data, value, onChangeValue }) => {
  const classNameValue = className ? `${className}` : "";
  
  const firstItemClasses = (index: number) => {
    if(index == 0) {
        return "rounded-l-[12px]";
    }
    return "";
  };

  const lastItemClasses = (index: number) => {
    if (index == (data.length - 1)) {
      return "rounded-r-[12px]";
    }
    return "";
  };

  const currentItemClasses = (item: string) => {
    if (item == value) {
      return "bg-cobalt text-white";
    }
    return "";
  };
  return (
    <div className={`flex gap-0 flex-nowrap justify-center ${classNameValue}`}>
      {data.map((item, index) => (
        <button
          key={index}
          onClick={() => (item !== value ? onChangeValue(item) : null)}
          className={`transition-all duration-500 border border-cobalt font-normal text-[17px] leading-[25.5px] 2xl:text-[18px] 2xl:leading-[27px] px-[47px] py-[17px] 
            ${firstItemClasses(index)} ${lastItemClasses(
            index
          )} ${currentItemClasses(item)}`}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default SegmentedButtons;
