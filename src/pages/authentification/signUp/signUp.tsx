import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useChange, useSubmit } from "../../../helpers/hooks/form";
import { isValidName } from "../../../helpers/regex/form";
import { FormDataChangedHook, FormDataSubmitHook } from "../../../shared/interfaces/form";

export default function SignUp() {
    const { t } = useTranslation();
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

    const validateField = (fieldUpdated: FormDataChangedHook) => {
        Object.entries(fieldUpdated).forEach(([key, value]) => {
            switch (key) {
                case 'firstName':
                    const isValidFirstName = isValidName(value as string);
                    const formsErrors = { ...state.formsErrors, isValidFirstName }
                    setState({
                        ...state,
                        formsErrors
                    })

                    break;
            }
        })
    }

    const handleChange = useChange((fieldUpdated: FormDataChangedHook) => {
        validateField(fieldUpdated)
        setState({ ...state, ...fieldUpdated })
    });


    const handleSubmit = useSubmit((value: FormDataSubmitHook) => {
        console.log(state);
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