import S from '~/lib/S.js'
import {Translated} from './index.js'
/**
 * @param {String} from_lang
 * @param {String} to_lang
 * @param {Vec<String>} htm
 * @param {Vec<String>} txt
*/
export const tran = async (from_lang,to_lang,htm,txt)=>Translated(await S.tran(from_lang,to_lang,htm,txt))
