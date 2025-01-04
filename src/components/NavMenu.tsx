import { ActionIcon, Button, Menu, Modal, NavLink } from "@mantine/core";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import { IconCircleXFilled, IconMenu2 } from "@tabler/icons-react";
import * as React from "react";
import SvgIcon from "./SvgIcon";




const NavMenu: React.FC = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const isMobile = useMediaQuery("(max-width: 42em)");
  const isDesktop = useMediaQuery("(min-width: 64em)");


  const menu = (target: React.ReactNode) => {
    return (
      <Menu
        shadow="md"
        width={327}
        radius={0}
        offset={20}
        opened={opened}
        onChange={(isOpen) => (isOpen ? open() : close())}
        position="bottom-end"
        classNames={{
          dropdown: "py-4",
          item: "text-woodsmoke hover:text-cobalt",
        }}
      >
        <Menu.Target>{target}</Menu.Target>
        <Menu.Dropdown>
          <Menu.Item
            fz={17}
            lh="25.5px"
            leftSection={<SvgIcon iconName="home" />}
          >
            Home
          </Menu.Item>
          <Menu.Item
            fz={17}
            lh="25.5px"
            leftSection={<SvgIcon iconName="dashboard" />}
          >
            About
          </Menu.Item>
          <Menu.Item
            fz={17}
            lh="25.5px"
            leftSection={<SvgIcon iconName="question" />}
          >
            FAQ
          </Menu.Item>
          <Menu.Item
            fz={17}
            lh="25.5px"
            leftSection={<SvgIcon iconName="support" />}
          >
            Support
          </Menu.Item>
          <Menu.Divider />
          <Menu.Item fz={17} lh="25.5px">
            Netflix
          </Menu.Item>
          <Menu.Item fz={17} lh="25.5px">
            YouTube
          </Menu.Item>
          <Menu.Item fz={17} lh="25.5px">
            Spotify
          </Menu.Item>
          <Menu.Divider />
          <Button
            variant="outline"
            c="cobalt.8"
            color="cobalt.8"
            fullWidth
            radius={12}
            mt={8}
            fw={700}
            fz={15}
            lh="19.5px"
          >
            Login
          </Button>
          <Button
            c="white"
            color="cobalt.8"
            fullWidth
            radius={12}
            mt={8}
            fw={700}
            fz={15}
            lh="19.5px"
          >
            Sign up
          </Button>
        </Menu.Dropdown>
      </Menu>
    );
  }

  const modal = (target: React.ReactNode) => {
    return (
      <>
        <Modal
          opened={opened}
          onClose={close}
          transitionProps={{ transition: "fade", duration: 200 }}
          withCloseButton={false}
          classNames={{ header: "p-0", content: "bg-transparent" }}
        >
          <>
            <div className="p-6 bg-white rounded-[12px]">
              <NavLink
                fz={17}
                lh="25.5px"
                label="Home"
                leftSection={<SvgIcon iconName="home" />}
              ></NavLink>
              <NavLink
                fz={17}
                lh="25.5px"
                label="About"
                leftSection={<SvgIcon iconName="dashboard" />}
              ></NavLink>
              <NavLink
                fz={17}
                lh="25.5px"
                label="FAQ"
                leftSection={<SvgIcon iconName="question" />}
              ></NavLink>
              <NavLink
                fz={17}
                lh="25.5px"
                label="Support"
                leftSection={<SvgIcon iconName="support" />}
              ></NavLink>
            </div>
            <div className="p-6 bg-white mt-4 rounded-[12px]">
              <NavLink fz={17} lh="25.5px" label="Netflix"></NavLink>
              <NavLink fz={17} lh="25.5px" label="YouTube"></NavLink>
              <NavLink fz={17} lh="25.5px" label="Spotify"></NavLink>
            </div>
            <div className="p-6 bg-white mt-4 rounded-[12px]">
              <Button
                variant="outline"
                c="cobalt.8"
                color="cobalt.8"
                fullWidth
                radius={12}
                mt={8}
                fw={700}
                fz={15}
                lh="19.5px"
              >
                Login
              </Button>
              <Button
                c="white"
                color="cobalt.8"
                fullWidth
                radius={12}
                mt={8}
                fw={700}
                fz={15}
                lh="19.5px"
              >
                Sign up
              </Button>
            </div>
          </>
        </Modal>
        {target}
      </>
    );
  }

  const targetEl = (
    <ActionIcon
      variant="transparent"
      onClick={open}
      c={opened ? "cobalt.8" : "woodsmoke.10"}
    >
      {opened ? <IconCircleXFilled /> : <IconMenu2 />}
    </ActionIcon>
  );
  return (
    <>
      {isMobile ? modal(targetEl): (!isDesktop ? (menu(targetEl)): null)}
    </>
  );
};

export default NavMenu;

