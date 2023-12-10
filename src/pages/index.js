import React from 'react';

import { TitleText } from '../components/TitleText/TitleText';
import { AppHeader } from '../components/AppHeader/AppHeader';
import { CheckContent } from '../components/CheckContent/CheckContent';
import {Counter} from "../components/Counter/Counter";
import {DynamicList} from "../components/DynamicList/DynamicList";
import {TaskList} from "../components/TaskList/TaskList";
import {SimpleForm} from "../components/SimpleForm/SimpleForm";

const IndexPage = () => (
  <>
    <TitleText />
    <AppHeader />
    <CheckContent />
    <Counter />
    <DynamicList />
    <TaskList />
    <SimpleForm />
  </>
);

export default IndexPage;

export const Head = () => <title>Home Page</title>;
