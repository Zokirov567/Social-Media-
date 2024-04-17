import { Link } from "react-router-dom";
import { AppButton } from "../../components/UI/AppButton/AppButton";
import { AppInput } from "../../components/UI/AppInput/AppInput";
// import "./LoginPage.scss";
import { LoginWith } from "../../components/LoginWith/LoginWith";
import { AppHeading } from "../../components/Typography/AppHeading";
import { SCLoginPage } from "./LoginPage.styled";
import * as yup from "yup";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

interface ILoginForm {
  useremail: string;
  password: string;
}

const loginFormSchema = yup.object({
  useremail: yup.string().required("Обязательное поле"),
  userpassword: yup
    .string()
    .required("Ведите пороль")
    .min(8, "Не менее 8 символов"),
});

export const LoginPage = () => {
  const {
    control,
    handleSubmit,
    fromState: { errors },
  } = useForm({
    resolver: yupResolver(loginFormSchema),
    defaultValues: { useremail: "", userpassword: "" },
  });

  return (
    <SCLoginPage>
      <AppHeading headingText="Авторизация" headingType={"h1"} />
      <form action="#">
     <Controller name="username" 
     control={control}
     render={(field) => (
      <AppInput inputType={"tel"} inputPlaceholder={"Номер телефона"}
    )} />
        <AppInput inputType={"password"} inputPlaceholder={"Пароль"} />

        <Link to={"/main"}>
          <AppButton buttonText={"Войти"} />
        </Link>
      </form>
      <Link to="#">Забыли пароль?</Link>
      <div className="registration">
        <span>
          У вас нет аккаунта? <Link to="/registration">Зарегистрироваться</Link>
        </span>
        <p>Войти с помощью</p>
        <LoginWith />
      </div>
    </SCLoginPage>
  );
};
