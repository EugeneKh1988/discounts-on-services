import * as React from "react";
import { Text } from '@mantine/core';

interface TextProps {
    children: string,
    type: string,
    fontWeight?: number,
    color?: string,
    className?: string,
}


const TextComponent: React.FC<TextProps> = ({children, type, fontWeight, color, className}) => {

    const returnCode = () => {
        const colorValue = color ? {c: color} : {};
        const fontWeightValue = fontWeight ? {fw: fontWeight} : {};
        const classNameValue = className ? `${className}` : "";     
        switch (type) {
          case "h1":
            return (
              <Text
                component="h1"
                {...colorValue}
                {...fontWeightValue}
                className={`font-bold text-[28px] leading-[39.2px] desktop:text-[36px] desktop:leading-[50.4px] ${classNameValue}`}
              >
                {children}
              </Text>
            );
          case "h2":
            return (
              <Text
                component="h2"
                {...colorValue}
                {...fontWeightValue}
                className={`font-bold text-[25px] leading-[35px] desktop:text-[32px] desktop:leading-[44.8px] ${classNameValue}`}
              >
                {children}
              </Text>
            );
          case "h3":
            return (
              <Text
                component="h3"
                {...colorValue}
                {...fontWeightValue}
                className={`font-normal text-[22px] leading-[30.8px] desktop:text-[26px] desktop:leading-[36.4px] ${classNameValue}`}
              >
                {children}
              </Text>
            );
          case "h4":
            return (
              <Text
                component="h4"
                {...colorValue}
                {...fontWeightValue}
                className={`font-bold text-[19px] leading-[26.6px] desktop:text-[22px] desktop:leading-[30.8px] ${classNameValue}`}
              >
                {children}
              </Text>
            );
          case "h5":
            return (
              <Text
                component="h5"
                {...colorValue}
                {...fontWeightValue}
                className={`font-normal text-[18px] leading-[25.2px] desktop:text-[20px] desktop:leading-[28px] ${classNameValue}`}
              >
                {children}
              </Text>
            );
          case "button":
            return (
              <Text
                component="span"
                {...colorValue}
                {...fontWeightValue}
                className={`font-bold text-[15px] leading-[19.5px] desktop:text-[17px] desktop:leading-[22.1px] ${classNameValue}`}
              >
                {children}
              </Text>
            );
          case "blog":
            return (
              <Text
                component="p"
                {...colorValue}
                {...fontWeightValue}
                className={`font-normal text-[17px] leading-[25.5px] desktop:text-[18px] desktop:leading-[27px] ${classNameValue}`}
              >
                {children}
              </Text>
            );
          case "p":
            return (
              <Text
                component="p"
                {...colorValue}
                {...fontWeightValue}
                className={`font-normal text-[16px] leading-[24px] ${classNameValue}`}
              >
                {children}
              </Text>
            );
            default: 
            return (
              <Text
                component="p"
                {...colorValue}
                {...fontWeightValue}
                {...{className}}
              >
                {children}
              </Text>
            );
        }
    };
  return (
    <>
        {returnCode()}
    </>
  )
}

export default TextComponent;

