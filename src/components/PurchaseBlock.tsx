import * as React from "react";
import TextComponent from "./TextComponent";
import { Button, Modal, ScrollArea, Select, Text, TextInput } from "@mantine/core";
import { IconBrandAppleFilled, IconBrandGoogleFilled, IconChevronDown } from "@tabler/icons-react";

interface PurchaseBlockProps {
  opened: boolean;
  onClose: () => void;
  isMobile: boolean;
  className?: string;
}

const PurchaseBlock: React.FC<PurchaseBlockProps> = ({ className, opened, onClose, isMobile }) => {
  const classNameValue = className ? `${className}` : "";
  return (
    <Modal
      opened={opened}
      onClose={onClose}
      withCloseButton
      title="Purchase payment"
      size="580px"
      scrollAreaComponent={ScrollArea.Autosize}
      yOffset="1vh"
      xOffset={0}
      radius={32}
      fullScreen={isMobile}
      classNames={{
        title:
          "font-normal text-[22px] leading-[30.8px] 2xl:text-[26px] 2xl:leading-[36.4px]",
      }}
    >
      <div className={` ${classNameValue}`}>
        <div className="flex flex-nowrap gap-5 text-white">
          <Button className="min-h-[54px] text-[23px] leading-[27.45px] bg-woodsmoke hover:bg-woodsmoke-900 w-full rounded-[4px]">
            <IconBrandAppleFilled />
            Pay
          </Button>
          <Button className="min-h-[54px] text-[23px] leading-[27.45px] bg-woodsmoke hover:bg-woodsmoke-900 w-full rounded-[4px]">
            <IconBrandGoogleFilled />
            Pay
          </Button>
        </div>
        <TextInput
          label="Card Number"
          placeholder="1234 1234 1234 1234"
          classNames={{
            label:
              "text-[14px] leading-[18.2px] 2xl:text-[15px] 2xl:leading-[19.5px] mb-3 text-[#070033]",
            root: "mt-8 2xl:mt-10",
            input:
              "rounded-[12px] bg-[#F1F4F8] border-none text-woodsmoke placeholder:text-[#8F8F8F]",
          }}
        />
        <div className="2xl:flex 2xl:gap-5 2xl:mt-8">
          <TextInput
            label="Expiration Date"
            placeholder="MM/ГГ"
            classNames={{
              label:
                "text-[14px] leading-[18.2px] 2xl:text-[15px] 2xl:leading-[19.5px] mb-3 text-[#070033]",
              root: "mt-[25px] 2xl:mt-0 w-full",
              input:
                "rounded-[12px] bg-[#F1F4F8] border-none text-woodsmoke placeholder:text-[#8F8F8F]",
            }}
          />
          <TextInput
            label="СVC"
            placeholder="CVC"
            classNames={{
              label:
                "text-[14px] leading-[18.2px] 2xl:text-[15px] 2xl:leading-[19.5px] mb-3 text-[#070033]",
              root: "mt-[25px] 2xl:mt-0 w-full",
              input:
                "rounded-[12px] bg-[#F1F4F8] border-none text-woodsmoke placeholder:text-[#8F8F8F]",
            }}
          />
        </div>
        <Button className="min-h-[54px] w-full text-white bg-cobalt hover:bg-cobalt-950 rounded-[12px] mt-8 2xl:mt-10">
          Pay with card
        </Button>
        <Text className="text-[14px] leading-[18.2px] 2xl:text-[15px] 2xl:leading-[19.5px] text-[#7F7F7F] mt-3 2xl:mt-4">
          We do not collect information on your cards, everything is safe
        </Text>
        <TextComponent type="h4" className="text-woodsmoke mt-8 2xl:mt-[60px]">
          Purchase payment
        </TextComponent>
        <Select
          data={["Bitcoin", "Ethereum", "Bittensor"]}
          rightSectionPointerEvents="none"
          rightSection={<IconChevronDown />}
          label="Select currency"
          defaultValue="Bitcoin"
          classNames={{
            input:
              "rounded-[12px] bg-[#F1F4F8] border-none placeholder:text-[#8F8F8F]",
            root: "mt-7 2xl:mt-8",
          }}
        />
        <Button className="min-h-[54px] w-full text-white bg-cobalt hover:bg-cobalt-950 rounded-[12px] mt-8 2xl:mt-10">
          Pay
        </Button>
      </div>
    </Modal>
  );
};

export default PurchaseBlock;
