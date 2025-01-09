import * as React from "react";
import { Text } from '@mantine/core';

interface TextProps {
    children: React.ReactNode,
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
                className={`font-bold text-[28px] leading-[39.2px] 2xl:text-[36px] 2xl:leading-[50.4px] ${classNameValue}`}
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
                className={`font-bold text-[25px] leading-[35px] 2xl:text-[32px] 2xl:leading-[44.8px] ${classNameValue}`}
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
                className={`font-normal text-[22px] leading-[30.8px] 2xl:text-[26px] 2xl:leading-[36.4px] ${classNameValue}`}
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
                className={`font-bold text-[19px] leading-[26.6px] 2xl:text-[22px] 2xl:leading-[30.8px] ${classNameValue}`}
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
                className={`font-normal text-[18px] leading-[25.2px] 2xl:text-[20px] 2xl:leading-[28px] ${classNameValue}`}
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
                className={`font-bold text-[15px] leading-[19.5px] 2xl:text-[17px] 2xl:leading-[22.1px] ${classNameValue}`}
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
                className={`font-normal text-[17px] leading-[25.5px] 2xl:text-[18px] 2xl:leading-[27px] ${classNameValue}`}
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
          case "menu":
            return (
              <Text
                component="span"
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
                component="span"
                {...colorValue}
                {...fontWeightValue}
                {...{ className }}
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

