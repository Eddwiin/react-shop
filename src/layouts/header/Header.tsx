import { useTranslation } from "react-i18next"

export default function Header() {
    const { t } = useTranslation();

    return (
        <div className="bg-blue p-4">
            {t('Header.AppName')}
        </div>
    )
}