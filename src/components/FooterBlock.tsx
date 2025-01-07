import * as React from "react";
import Container from "./Container";
import TextComponent from "./TextComponent";
import { ActionIcon, Button, Menu, Text } from "@mantine/core";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { IconBrandWhatsappFilled, IconChevronDown } from "@tabler/icons-react";
import SvgIcon from "./SvgIcon";

interface FooterBlockProps {
  className?: string;
}

const FooterBlock: React.FC<FooterBlockProps> = ({ className }) => {
  const classNameValue = className ? `${className}` : "";
  return (
    <div className="bg-cobalt mt-[120px]">
      <Container className={`${classNameValue}`}>
        <div className="block md:grid md:grid-cols-3 gap-8 text-white py-10">
          <div>
            <div className="flex items-center gap-2">
              <StaticImage
                src="../images/big_logo.png"
                alt="Logo"
                width={60}
                height={60}
              />
              <TextComponent type="p" className="md:hidden lg:block">
                DiscountsOnServices
              </TextComponent>
            </div>
            <TextComponent type="p" className="w-full 2xl:max-w-[179px] mt-6 mb-10 md:mb-0">
              It's simple, fast and economical
            </TextComponent>
          </div>
          <div className="flex justify-between gap-8">
            <div>
              <Text className="text-[18px] leading-[27px] mb-5">
                Subscriptions
              </Text>
              <Link to="/">
                <TextComponent type="p">Netflix</TextComponent>
              </Link>
              <Link to="/">
                <TextComponent type="p" className="mt-3">
                  YouTube Premium
                </TextComponent>
              </Link>
              <Link to="/">
                <TextComponent type="p" className="mt-3">
                  Spotify
                </TextComponent>
              </Link>
            </div>
            <div>
              <Text className="text-[18px] leading-[27px] mb-5">
                Site navigation
              </Text>
              <Link to="/">
                <TextComponent type="p">About</TextComponent>
              </Link>
              <Link to="/">
                <TextComponent type="p" className="mt-3">
                  FAQ
                </TextComponent>
              </Link>
              <Link to="/">
                <TextComponent type="p" className="mt-3">
                  Support
                </TextComponent>
              </Link>
            </div>
          </div>
          <div className="flex justify-between md:block md:text-right mt-10 md:mt-0">
            <div className="flex items-center justify-end mb-6">
              <ActionIcon
                variant="transparent"
                c="white"
                className="w-12 h-auto"
              >
                <IconBrandWhatsappFilled size={24} className="w-10 h-auto" />
              </ActionIcon>
              <ActionIcon
                variant="transparent"
                c="white"
                className="w-12 h-auto"
              >
                <SvgIcon iconName="telegram" className="w-10 h-auto" />
              </ActionIcon>
            </div>
            <Menu
              width={114}
              radius={16}
              shadow="md"
              offset={16}
              classNames={{
                item: "bg-transparent hover:bg-transparent text-woodsmoke hover:text-cobalt",
                dropdown: "py-4",
              }}
            >
              <Menu.Target>
                <Button
                  variant="transparent"
                  rightSection={<IconChevronDown size={12} />}
                  c="white"
                  px={5}
                >
                  <TextComponent type="menu">EN</TextComponent>
                </Button>
              </Menu.Target>
              <Menu.Dropdown>
                <Menu.Item fz={17} lh="25.5px">
                  English
                </Menu.Item>
                <Menu.Item fz={17} lh="25.5px">
                  Ukraine
                </Menu.Item>
                <Menu.Item fz={17} lh="25.5px">
                  Russian
                </Menu.Item>
              </Menu.Dropdown>
            </Menu>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default FooterBlock;
