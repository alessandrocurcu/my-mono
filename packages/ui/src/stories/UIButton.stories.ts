import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { Button } from '../components/ui/button/index.js';

const meta = {
  title: 'UI/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'],
      description: 'The visual style variant of the button',
    },
    size: {
      control: 'select',
      options: ['default', 'sm', 'lg', 'icon'],
      description: 'The size of the button',
    },
  },
  args: {
    variant: 'default',
    size: 'default',
  },
} as Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: args => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: '<Button v-bind="args">Click me</Button>',
  }),
};

export const Primary: Story = {
  args: {
    variant: 'default',
  },
  render: args => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: '<Button v-bind="args">Primary Button</Button>',
  }),
};

export const Destructive: Story = {
  args: {
    variant: 'destructive',
  },
  render: args => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: '<Button v-bind="args">Delete</Button>',
  }),
};

export const Outline: Story = {
  args: {
    variant: 'outline',
  },
  render: args => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: '<Button v-bind="args">Outline</Button>',
  }),
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
  },
  render: args => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: '<Button v-bind="args">Secondary</Button>',
  }),
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
  },
  render: args => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: '<Button v-bind="args">Ghost</Button>',
  }),
};

export const Link: Story = {
  args: {
    variant: 'link',
  },
  render: args => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: '<Button v-bind="args">Link</Button>',
  }),
};

export const Small: Story = {
  args: {
    size: 'sm',
  },
  render: args => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: '<Button v-bind="args">Small Button</Button>',
  }),
};

export const Large: Story = {
  args: {
    size: 'lg',
  },
  render: args => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: '<Button v-bind="args">Large Button</Button>',
  }),
};

export const Icon: Story = {
  args: {
    size: 'icon',
  },
  render: args => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: '<Button v-bind="args">✓</Button>',
  }),
};

export const Disabled: Story = {
  render: args => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: '<Button v-bind="args" disabled>Disabled</Button>',
  }),
};

export const AllVariants: Story = {
  render: () => ({
    components: { Button },
    template: `
      <div class="flex flex-wrap gap-4">
        <Button variant="default">Default</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="link">Link</Button>
      </div>
    `,
  }),
};

export const AllSizes: Story = {
  render: () => ({
    components: { Button },
    template: `
      <div class="flex items-center gap-4">
        <Button size="sm">Small</Button>
        <Button size="default">Default</Button>
        <Button size="lg">Large</Button>
        <Button size="icon">✓</Button>
      </div>
    `,
  }),
};
