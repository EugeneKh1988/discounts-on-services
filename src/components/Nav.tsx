import * as React from "react";
import Container from "./Container";
import { ActionIcon, Button, Menu, Text } from "@mantine/core";
import TextComponent from "./TextComponent";
import { IconBrandWhatsappFilled, IconChevronDown } from "@tabler/icons-react";
import { Link } from "gatsby";
import SvgIcon from "./SvgIcon";
import { StaticImage } from "gatsby-plugin-image";
import NavMenu from "./NavMenu";

interface NavProps {
    className?: string,
}


const Nav: React.FC<NavProps> = ({ className }) => {
  const classNameValue = className ? `${className}` : "";
  return (
    <div className={`bg-white ${classNameValue}`}>
      <Container className="py-[3px] hidden lg:flex">
        <div className="flex items-center gap-2">
          <StaticImage
            src="../images/logo.png"
            alt="Logo"
            width={55}
            height={55}
          />
          <Text fw={600} fz={16} lh="20.8px" c="woodsmoke.10">
            DiscountsOnServices
          </Text>
        </div>
        <div className="flex justify-center items-center gap-7 flex-auto">
          <Menu
            shadow="md"
            width={205}
            radius={16}
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
                c="mine-shaft.9"
                px={5}
              >
                <TextComponent type="menu">Subscriptions</TextComponent>
              </Button>
            </Menu.Target>
            <Menu.Dropdown>
              <Menu.Item fz={17} lh="25.5px">
                Netflix
              </Menu.Item>
              <Menu.Item fz={17} lh="25.5px">
                YouTube Premium
              </Menu.Item>
              <Menu.Item fz={17} lh="25.5px">
                Spotify
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
          <Button
            variant="transparent"
            c="mine-shaft.9"
            component={Link}
            to="/"
            px={5}
          >
            <TextComponent type="menu">FAQ</TextComponent>
          </Button>
          <Button
            variant="transparent"
            c="mine-shaft.9"
            component={Link}
            to="/"
            px={5}
          >
            <TextComponent type="menu">Support</TextComponent>
          </Button>
          <Button
            variant="transparent"
            c="mine-shaft.9"
            component={Link}
            to="/"
            px={5}
          >
            <TextComponent type="menu">About</TextComponent>
          </Button>
        </div>
        <div className="flex justify-end items-center flex-auto gap-4">
          <div className="flex items-center">
            <ActionIcon variant="transparent" c="mine-shaft.9">
              <IconBrandWhatsappFilled size={24} />
            </ActionIcon>
            <ActionIcon variant="transparent" c="mine-shaft.9">
              <SvgIcon iconName="telegram" className="" />
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
                c="mine-shaft.9"
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
          <Button color="cobalt.8" c="white" radius={12} px={41}>
            Log in
          </Button>
        </div>
      </Container>
      <Container className="flex justify-between items-center py-[3px] lg:hidden">
        <div className="flex items-center gap-2">
          <StaticImage
            src="../images/logo.png"
            alt="Logo"
            width={55}
            height={55}
          />
          <Text fw={600} fz={16} lh="20.8px" c="woodsmoke.10">
            DiscountsOnServices
          </Text>
        </div>
        <NavMenu />
      </Container>
    </div>
  );
};

export default Nav;

