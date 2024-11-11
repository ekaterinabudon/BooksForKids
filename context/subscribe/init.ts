import { sample } from 'effector'
import { handleSubscribe, subscribeFx,} from '.'
import { $subscribe } from './state'
  
  sample({
    clock: handleSubscribe,
    source: $subscribe,
    fn: (_, { email }) => ({
      email,
    }),
    target: subscribeFx,
  })
