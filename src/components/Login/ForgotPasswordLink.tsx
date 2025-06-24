import React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface ForgotPasswordLinkProps {
    className?: string;
}

const ForgotPasswordLink: React.FC<ForgotPasswordLinkProps> = ({ className }) => {
  return (
    <Button 
      variant="link" 
      className={cn(
        "h-auto self-start p-0 text-xs font-normal text-muted-foreground hover:text-primary hover:no-underline",
        className
      )}
    >
      Forgot Password
    </Button>
  );
};

export default ForgotPasswordLink;
