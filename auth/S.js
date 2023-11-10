import {User,UserStateLi,Uid} from './index.js'
import S from '~/lib/S.js'

export const authMe = async ()=>User(await S.authMe())

/**
 * @param {u8} action
 * @param {String} account
 * @param {String} password
*/
export const auth = async (action,account,password)=>User(await S.auth(action,account,password))

export const authLi = async ()=>UserStateLi(await S.authLi())

/**
 * @param {String} account
 * @param {String} password
 * @param {String} verify_code
 * @param {String} name
*/
export const authSignUp = async (account,password,verify_code,name)=>Uid(await S.authSignUp(account,password,verify_code,name))
