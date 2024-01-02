//src/
import AuthForm from '@/components/AuthForm';
import SubHeading from '@/components/ui/SubHeading';

const AuthPage = () => {
  return (
    <div>
      <SubHeading title='Login or register' iconClass='fas fa-sign-in-alt' />
      <AuthForm />
    </div>
  );
};

export default AuthPage;
