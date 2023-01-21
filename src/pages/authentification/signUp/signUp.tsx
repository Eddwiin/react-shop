import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useChange, useSubmit } from "../../../helpers/formHooks";

export default function SignUp() {
    const { t } = useTranslation();
    const [state, setState] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const handleChange = useChange((fieldUpdated: { [k: string]: string }) => {
        setState({ ...state, ...fieldUpdated })
    });

    const handleSubmit = useSubmit((value: { [k: string]: FormDataEntryValue }) => {
        console.log(value);
    });

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="firstName">{t('FirstName')}</label>
                <input id="firstName" name="firstName" type="text" onChange={handleChange} />
            </div>

            <div>
                <label htmlFor="lastName">{t('LastName')}</label>
                <input id="lastName" name="lastName" type="text" onChange={handleChange} />
            </div>

            <div>
                <label htmlFor="email">{t('Email')}</label>
                <input id="email" name="email" type="email" onChange={handleChange} />
            </div>

            <div>
                <label htmlFor="password">{t('Password')}</label>
                <input id="password" name="password" type="password" onChange={handleChange} />
            </div>

            <div>
                <label htmlFor="confirmPassword">{t('ConfirmPassword')}</label>
                <input id="confirmPassword" name="confirmPassword" type="password" onChange={handleChange} />
            </div>

            <button type="submit">Envoyer</button>
        </form>
    )
}