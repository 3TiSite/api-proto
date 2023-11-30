import S from '~/lib/S.js'
import {Captcha} from './index.js'
export const captcha = async ()=>Captcha(await S.captcha())
