import React from 'react';
import InputField from './InputField';
import LoginButton from './LoginButton';
import ForgotPasswordLink from './ForgotPasswordLink';
import SignupLink from './SignupLink';

const LoginForm: React.FC = () => {
  const [email, setEmail] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email || !password) return;
    
    setIsLoading(true);
    console.log('Logging in with:', { email, password });
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="w-96 bg-card text-card-foreground rounded-lg shadow-md p-8">
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold">Welcome</h1>
      </div>
      <form onSubmit={handleLogin} className="space-y-6">
        <InputField 
          id="email"
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="email"
          required
        />
        <div className="space-y-2">
          <InputField 
            id="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
            required
          />
          <ForgotPasswordLink />
        </div>
        <LoginButton type="submit" isLoading={isLoading} />
      </form>
      <div className="mt-8">
        <SignupLink />
      </div>
    </div>
  );
};

export default LoginForm;
