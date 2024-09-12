import NotifyOfDeliveryBtn from "@/components/elements/notifyOfDelivery/NotifyOfDeliveryBtn"
import EmailInput from "../profilePage/EmailInput"
import NameInput from "../profilePage/NameInput"
import PhoneInput from "../profilePage/PhoneInput"
import { closeNotifyMeModal } from "@/context/modals"
import { removeOverflowHiddenFromBody } from "@/lib/utils/common"
import styles from '@/styles/notifyMeModal/index.module.css'
import { IAmInput } from "@/types/authPopup"
import { useNotifyMeForm } from "@/hooks/useNotifyMeForm"
import { handleNotifyMe } from "@/context/notify"
import { useLang } from "@/hooks/useLang"

const handleCloseModal = () => {
    removeOverflowHiddenFromBody()
    closeNotifyMeModal()
}

const NotifyMeModal = () => {
    const { lang, translations } = useLang()
    const { register, errors, handleSubmit} =
    useNotifyMeForm(handleNotifyMe)

    const submitForm = (data: IAmInput) =>
    handleNotifyMe({
      email: data.email,
    })

    return (
          <div className={styles.modal}>
            <button className={styles.modal_close} onClick={handleCloseModal} />
            <h4>{translations[lang].wishlist.alert_me}</h4>
            <form onSubmit={handleSubmit(submitForm)}>
                <EmailInput register={register} errors={errors} />
                <NotifyOfDeliveryBtn 
                    text={translations[lang].wishlist.notify_of_delivery} 
                    handleNotifyMe={handleNotifyMe}
                    className={styles.notify_btn} />
            </form>
        </div>
    );
};

export default NotifyMeModal