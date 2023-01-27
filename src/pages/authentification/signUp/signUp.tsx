import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useChange } from "../../../helpers/hooks/form";
import { useAppDispatch } from '../../../helpers/hooks/redux';
import { userSchema } from '../../../helpers/schemas/user';
import { FormDataChangedHook } from "../../../shared/interfaces/form";
import { UserAPI } from '../../../shared/interfaces/user';
import { signUp } from '../../../stores/actions';

type SignUpForm = Omit<UserAPI, 'id'> & { confirm_password: string };

const signUpSchema = userSchema.pick(["firstName", "lastName", "email", "phone", "adress", "password", "confirmPassword"]);

export default function SignUp() {
    const { t } = useTranslation();
    const { register, handleSubmit, formState: { errors } } = useForm<SignUpForm>({
        resolver: yupResolver(signUpSchema)
    });

    const dispatch = useAppDispatch();


    const [state, setState] = useState({
        firstName: '',
        lastName: '',
        email: '',
        adress: '',
        password: '',
        confirmPassword: '',
    })

    const handleChange = useChange((fieldUpdated: FormDataChangedHook) => {
        setState({ ...state, ...fieldUpdated })
    });


    const onSubmit = handleSubmit(data => {
        dispatch(signUp({
            first_name: data.first_name,
            last_name: data.last_name,
            email: data.email,
            phone: data.phone,
            adress: data.adress,
            password: data.password,
        }))
    })

    return (
        <form onSubmit={onSubmit}>
            <div>
                <label htmlFor="first_name">{t('FirstName')}</label>
                <input {...register("first_name")} id="first_name" name="first_name" type="text" onChange={handleChange} />
                {errors?.first_name && <p>{errors.first_name.message}</p>}
            </div>

            <div>
                <label htmlFor="last_name">{t('LastName')}</label>
                <input {...register("last_name")} id="last_name" name="last_name" type="text" onChange={handleChange} />
                {errors?.last_name && <p>{errors.last_name.message}</p>}
            </div>

            <div>
                <label htmlFor="email">{t('Email')}</label>
                <input {...register("email")} id="email" name="email" type="email" onChange={handleChange} />
                {errors?.email && <p>{errors.email.message}</p>}
            </div>

            <div>
                <label htmlFor="phone">{t('Phone')}</label>
                <input {...register("phone")} id="phone" name="phone" type="tel" onChange={handleChange} />
                {errors?.adress && <p>{errors.adress.message}</p>}
            </div>

            <div>
                <label htmlFor="adress">{t('Adress')}</label>
                <input {...register("adress")} id="adress" name="adress" type="text" onChange={handleChange} />
                {errors?.adress && <p>{errors.adress.message}</p>}
            </div>

            <div>
                <label htmlFor="password">{t('Password')}</label>
                <input {...register("password")} id="password" name="password" type="password" onChange={handleChange} />
                {errors?.password && <p>{errors.password.message}</p>}
            </div>

            <div>
                <label htmlFor="confirm_password">{t('ConfirmPassword')}</label>
                <input {...register("confirm_password")} id="confirm_password" name="confirm_password" type="password" onChange={handleChange} />
                {errors?.confirm_password && <p>{errors.confirm_password.message}</p>}
            </div>

            <button type="submit">Envoyer</button>
        </form>
    )
}