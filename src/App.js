import React from 'react';
import Header from './components/Header';
import Body from './components/Body';
import TodoItem from './components/TodoItem';
// import Form from './components/Form';
import {
  ChartBarIcon,
  CursorClickIcon,
  RefreshIcon,
  ShieldCheckIcon,
  ViewGridIcon,
} from '@heroicons/react/outline';
import CallAPI from './components/CallAPI';
import FormHook from './components/FormHook';

const solutions = [
  {
    name: 'Analytics',
    description:
      'Get a better understanding of where your traffic is coming from.',
    href: '#',
    icon: ChartBarIcon,
  },
  {
    name: 'Engagement',
    description: 'Speak directly to your customers in a more meaningful way.',
    href: '#',
    icon: CursorClickIcon,
  },
  {
    name: 'Security',
    description: "Your customers' data will be safe and secure.",
    href: '#',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Integrations',
    description: "Connect with third-party tools that you're already using.",
    href: '#',
    icon: ViewGridIcon,
  },
  {
    name: 'Automations',
    description:
      'Build strategic funnels that will drive your customers to convert',
    href: '#',
    icon: RefreshIcon,
  },
];
function App() {
  return (
    <div class="container mx-auto">
      <Header />
      <Body />
      {solutions.map((item) => (
        <TodoItem key={item.name} dataItem={item} />
      ))}
      <FormHook />
      <CallAPI/>
    </div>
  );
}


export default App;
