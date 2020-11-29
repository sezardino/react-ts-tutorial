import React from 'react';

type TitleType = {
  title: string
}

const Title = ({title}: TitleType) => <h1>{title}</h1>

const App = () => <Title title={'Hello World'} />

export default App;
