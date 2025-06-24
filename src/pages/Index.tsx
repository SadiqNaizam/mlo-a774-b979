import React from 'react';
import MainAppLayout from '@/components/layout/MainAppLayout';
import LoginForm from '@/components/Login/LoginForm';

/**
 * The main index page of the application, which serves as the login page.
 * It utilizes a central layout to display the login form.
 * This component composes the overall page structure by combining the layout
 * and the primary form component.
 */
const IndexPage: React.FC = () => {
  return (
    <MainAppLayout>
      <LoginForm />
    </MainAppLayout>
  );
};

export default IndexPage;
