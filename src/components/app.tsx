import MainPage from '../page/main/main-page';

type AppScreenProps = {
  rentCount: number;
}

export default function App ({rentCount}: AppScreenProps): JSX.Element {
  return (
    <MainPage rentCount={rentCount}/>
  );
}
