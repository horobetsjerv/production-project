import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { Modal } from "shared/ui/Modal/Modal";

export default {
  title: "shared/Modal",
  component: Modal,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  isOpen: true,
  children:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus\n" +
    "        aliquid architecto atque deserunt ex inventore ipsum laboriosam nobis\n" +
    "        perspiciatis provident quam quas quia quos recusandae, reprehenderit\n" +
    "        sint veniam veritatis vero! ",
};

export const Dark = Template.bind({});
Dark.args = {
  isOpen: true,
  children:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus\n" +
    "        aliquid architecto atque deserunt ex inventore ipsum laboriosam nobis\n" +
    "        perspiciatis provident quam quas quia quos recusandae, reprehenderit\n" +
    "        sint veniam veritatis vero! ",
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
