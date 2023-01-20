import { useTranslation } from "react-i18next";

export default function Header() {
    const { t } = useTranslation();

    return (
        <div className="bg-blue text-white flex justify-between py-4 px-8">
            <span className="font-extrabold">{t('AppName').toUpperCase()}</span>
            <div className="flex">
                <span>{t('Menu.Login')}</span>
            </div>

        </div>
    )
}