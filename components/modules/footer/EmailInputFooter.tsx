import { useLang } from '@/hooks/useLang'
import { emailValidationRules } from '@/lib/utils/auth'
import { IAmAuthInput } from '@/types/authPopup'
import styles from '@/styles/authPopup/index.module.css'
import { EmailFooterInput } from '@/types/common'

const EmailInputFooter = ({ register, errors }: EmailFooterInput) => {
  const { lang, translations } = useLang()

  return (
    <div className='input_wrapper'>
      <h5><input
        type='email'
        className='email_input'
        placeholder={translations[lang].footer.give_an_email}
        {...register(
          'email',
          emailValidationRules(
            translations[lang].validation.invalid_email,
            translations[lang].validation.required_email
          )
        )}
      /></h5>
      {errors.email && (
        <span className={styles.error_alert}>{errors.email?.message}</span>
      )}
    </div>
  )
}

export default EmailInputFooter
