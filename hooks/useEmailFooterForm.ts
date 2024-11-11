import { EventCallable, Store } from 'effector';
import { useForm } from 'react-hook-form';
import { InputEmailFooter, SubscribeFx } from '@/types/common';


export const useEmailFooterForm = (
    event: EventCallable<SubscribeFx>
  ) => {

    const {
        register,
        formState: { errors },
        handleSubmit,
      } = useForm<InputEmailFooter>()

      return {
        register,
        errors,
        handleSubmit,
      }
  }