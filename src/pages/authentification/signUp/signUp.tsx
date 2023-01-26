import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useChange } from "../../../helpers/hooks/form";
import { useAppDispatch } from '../../../helpers/hooks/redux';
import { userSchema } from '../../../helpers/schemas/user';
import { FormDataChangedHook } from "../../../shared/interfaces/form";
import { signUp } from '../../../stores/actions';
import { AuthFormValue } from "../models/formValue";

const signUpSchema = userSchema.pick(["firstName", "lastName", "email", "phone", "password", "confirmPassword"]);

export default function SignUp() {
    const { t } = useTranslation();
    const { register, handleSubmit, formState: { errors } } = useForm<AuthFormValue>({
        resolver: yupResolver(signUpSchema)
    });

    const dispatch = useAppDispatch();


    const [state, setState] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        formsErrors: {
            isValidFirstName: false,
            isValidLastName: false,
            isValidEmail: false,
            isValidPassword: false,
            isValidConfirmPassword: false
        }
    })

    const handleChange = useChange((fieldUpdated: FormDataChangedHook) => {
        setState({ ...state, ...fieldUpdated })
    });


    const onSubmit = handleSubmit(data => {
        dispatch(signUp({
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            phone: data.phone,
            password: data.password,
            confirmPassword: data.confirmPassword
        }))
    })

    return (
        <form onSubmit={onSubmit}>
            <div>
                <label htmlFor="firstName">{t('FirstName')}</label>
                <input {...register("firstName")} id="firstName" name="firstName" type="text" onChange={handleChange} />
                {errors?.firstName && <p>{errors.firstName.message}</p>}
            </div>

            <div>
                <label htmlFor="lastName">{t('LastName')}</label>
                <input {...register("lastName")} id="lastName" name="lastName" type="text" onChange={handleChange} />
                {errors?.lastName && <p>{errors.lastName.message}</p>}
            </div>

            <div>
                <label htmlFor="email">{t('Email')}</label>
                <input {...register("email")} id="email" name="email" type="email" onChange={handleChange} />
                {errors?.email && <p>{errors.email.message}</p>}
            </div>

            <div>
                <label htmlFor="password">{t('Password')}</label>
                <input {...register("password")} id="password" name="password" type="password" onChange={handleChange} />
                {errors?.password && <p>{errors.password.message}</p>}
            </div>

            <div>
                <label htmlFor="confirmPassword">{t('ConfirmPassword')}</label>
                <input {...register("confirmPassword")} id="confirmPassword" name="confirmPassword" type="password" onChange={handleChange} />
                {errors?.confirmPassword && <p>{errors.confirmPassword.message}</p>}
            </div>

            <button type="submit">Envoyer</button>
        </form>
    )
}