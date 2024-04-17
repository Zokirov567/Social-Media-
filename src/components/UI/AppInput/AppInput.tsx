import { SCAppInput } from "./AppInput.styled";

interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    errorMessage?: string;
    isError?: boolean;
  }  

export const AppInput = ({ type, placeholder, required, ...props }: AppInputProps) => {
    return (
        <SCAppInput type={Type} placeholder={Placeholder} />
    );
};


  