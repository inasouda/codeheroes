import { Button } from '@chakra-ui/react';

interface Props {
  colorScheme: string;
  color: string;
  size: string;
  text: string;
  leftIcon?: React.ReactElement;
  onClick?:()=>void;
  type?:'button' | 'submit' | 'reset'
  width?:string;

}

const CHButton = ({ colorScheme, color, size, text,onClick,leftIcon,width='7rem',type="button"}: Props) => {
  return (
    <div>
      <Button 
        colorScheme={colorScheme} 
        color={color} 
        size={size} 
        type={type} 
        leftIcon={leftIcon}
        onClick={onClick}
        width={width}
        >
        {text}
      </Button>
    </div>
  );
};

export default CHButton;
