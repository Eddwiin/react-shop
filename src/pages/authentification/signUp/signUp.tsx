import { useTranslation } from "react-i18next"

export default function SignUp() {
    const { t } = useTranslation();

    function handleSubmit() {

    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="firstName">{t('FirstName')}</label>
                <input id="firstName" type="text" />
            </div>

            <div>
                <label htmlFor="lastName">{t('LastName')}</label>
                <input id="lastName" type="text" />
            </div>

            <div>
                <label htmlFor="email">{t('Email')}</label>
                <input id="email" type="email" />
            </div>

            <div>
                <label htmlFor="password">{t('Password')}</label>
                <input id="password" type="password" />
            </div>

            <div>
                <label htmlFor="confirmPassword">{t('ConfirmPassword')}</label>
                <input id="confirmPassword" type="password" />
            </div>
        </form>
    )
}