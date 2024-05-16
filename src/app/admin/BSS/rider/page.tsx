import { NextPage } from 'next';
import RiderRegForm from '@/components/form';

const Home: NextPage = () => {
  return (
    <div>
      <h1>Welcome to the Rider Registration Page</h1>
      <RiderRegForm />
    </div>
  );
};

export default Home;