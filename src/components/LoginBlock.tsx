import * as React from "react";
import TextComponent from "./TextComponent";
import {
  Button,
  Modal,
  ScrollArea,
  Text,
  TextInput,
} from "@mantine/core";
import {
  IconEye,
  IconEyeClosed,
} from "@tabler/icons-react";
import { useMediaQuery } from "@mantine/hooks";
import { Link } from "gatsby";
import { useState } from "react";
import { StaticImage } from "gatsby-plugin-image";

interface LoginBlockProps {
  opened: boolean;
  onClose: () => void;
  className?: string;
}

const LoginBlock: React.FC<LoginBlockProps> = ({ className, opened, onClose }) => {
  const classNameValue = className ? `${className}` : "";
  const isMobile = useMediaQuery("(max-width: 42em)");
  const [isPasswordshown, setPasswordView] = useState(false);
  return (
    <Modal
      opened={opened}
      onClose={onClose}
      withCloseButton
      title="Log in"
      size="540px"
      scrollAreaComponent={ScrollArea.Autosize}
      yOffset="1vh"
      xOffset={0}
      radius={32}
      fullScreen={isMobile}
      classNames={{
        title:
          "font-bold text-[25px] leading-[35px] 2xl:text-[32px] 2xl:leading-[44.8px]",
      }}
    >
      <div className={` ${classNameValue}`}>
        <TextComponent type="p" className="text-blue">
          New user?
          <Link to="#"> Create an account</Link>
        </TextComponent>
        <TextInput
          name="email"
          label="Email Address"
          placeholder="Enter your e-mail"
          classNames={{
            label:
              "text-[14px] leading-[18.2px] 2xl:text-[17px] 2xl:leading-[22.1px] mb-3 text-[#1B1B29]",
            root: "mt-8 2xl:mt-10",
            input:
              "rounded-[12px] bg-[#F1F4F8] border-none text-woodsmoke placeholder:text-[#8F8F8F]",
          }}
        />
        <TextInput
          label="Password"
          name="password"
          placeholder="*******"
          type={isPasswordshown ? "text" : "password"}
          rightSectionPointerEvents="auto"
          rightSection={
            isPasswordshown ? (
              <IconEye
                onClick={() => setPasswordView((shown) => !shown)}
                className="cursor-pointer"
              />
            ) : (
              <IconEyeClosed
                onClick={() => setPasswordView((shown) => !shown)}
                className="cursor-pointer"
              />
            )
          }
          classNames={{
            label:
              "text-[14px] leading-[18.2px] 2xl:text-[17px] 2xl:leading-[22.1px] mb-3 text-[#1B1B29]",
            root: "mt-8 2xl:mt-10",
            input:
              "rounded-[12px] bg-[#F1F4F8] border-none text-woodsmoke placeholder:text-[#8F8F8F]",
          }}
        />
        <div className="flex flex-wrap md:flex-nowrap gap-2 justify-center md:justify-between items-center mt-[53px] 2xl:mt-10">
          <Link
            to="#"
            className="text-[15px] leading-[22.5px] 2xl:text-[16px] 2xl:leading-[24px] text-[#0F0F0F] mt-5 md:mt-0"
          >
            Forgot password?
          </Link>
          <Button className="min-h-[54px] min-w-[190px] w-full md:w-auto text-white bg-cobalt hover:bg-cobalt-950 rounded-[12px] order-first md:order-last">
            Log in
          </Button>
        </div>
        <div className="flex flex-nowrap gap-3 items-center mt-10">
          <div className="border-b border-b-[#DFDFDF] min-h-[1px] grow"></div>
          <Text
            component="p"
            className="text-[#909090] text-[15px] leading-[22.5px] 2xl:text-[16px] 2xl:leading-[24px]"
          >
            Or sign in with
          </Text>
          <div className="border-b border-b-[#DFDFDF] min-h-[1px] grow"></div>
        </div>
        <div className="flex flex-nowrap mt-6 gap-2">
          <Button
            variant="outline"
            className="min-h-[48px] md:min-h-[56px] 2xl:min-h-[70px] w-full rounded-[12px] border-[#DFDFDF]"
          >
            <StaticImage
              src="../images/google.png"
              alt="Google"
              width={32}
              height={32}
            />
          </Button>
          <Button
            variant="outline"
            className="min-h-[48px] md:min-h-[56px] 2xl:min-h-[70px] w-full rounded-[12px] border-[#DFDFDF]"
          >
            <StaticImage
              src="../images/facebook.png"
              alt="Facebook"
              width={32}
              height={32}
            />
          </Button>
          <Button
            variant="outline"
            className="min-h-[48px] md:min-h-[56px] 2xl:min-h-[70px] w-full rounded-[12px] border-[#DFDFDF]"
          >
            <StaticImage
              src="../images/apple.png"
              alt="Apple"
              width={32}
              height={40}
            />
          </Button>
        </div>
        <Text className="text-woodsmoke text-[14px] leading-[21px] mt-8 md:mt-9 2xl:mt-12">
          Protected by reCAPTCHA and subject to the Google Privacy Policy and
          Terms of Service.
        </Text>
      </div>
    </Modal>
  );
};

export default LoginBlock;
