import React from 'react';
import { Input, type InputProps } from '@/components/ui/input';
import { cn } from '@/lib/utils';

const InputField: React.FC<InputProps> = ({ className, ...props }) => {
  return (
    <Input
      className={cn(
        'h-auto border-0 border-b border-input bg-transparent px-1 py-2 text-base text-card-foreground shadow-none rounded-none',
        'placeholder:text-muted-foreground',
        'focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-primary',
        className
      )}
      {...props}
    />
  );
};

export default InputField;
