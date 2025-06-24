import React from 'react';
import { Button, type ButtonProps } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';

interface LoginButtonProps extends ButtonProps {
  isLoading?: boolean;
}

const LoginButton: React.FC<LoginButtonProps> = ({ isLoading = false, className, children, ...props }) => {
  return (
    <Button 
      disabled={isLoading}
      className={cn(
        "w-full rounded-lg py-2.5 text-sm font-semibold",
        className
      )}
      {...props}
    >
      {isLoading ? <Loader2 className="h-5 w-5 animate-spin" /> : children || 'Login'}
    </Button>
  );
};

export default LoginButton;
