import { Story } from "@storybook/react";
import { Button, ButtonProps } from "../ui/Button";

export default {
  title: "Button",
  argTypes: { onClick: { action: "clicked" } },
};

const TheButton: Story<ButtonProps & { exampleIcon?: boolean }> = ({}) => {
  return <Button></Button>;
};

export const Main = TheButton.bind({});
