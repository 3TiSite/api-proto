import C from '@~3/captcha'
import S from '~/lib/S.js'
import {ConfMeta,User,UserStateLi,Mail,Uid} from './index.js'
/**
 * @param {u64} id
*/
export const authConfMeta = async (id)=>ConfMeta(await S.authConfMeta(id))

/**
 * @param {u64} id
*/
export const authExit = async (id)=>User(await S.authExit(id))

export const authExitAll = ()=>S.authExitAll()

export const authLang = ()=>S.authLang()

export const authLi = async ()=>UserStateLi(await S.authLi())

export const authMe = async ()=>User(await S.authMe())

/**
 * @param {u64} uid
 * @param {String} name
*/
export const authName = (uid,name)=>S.authName(uid,name)

/**
 * @param {u64} uid
 * @param {String} new_mail
*/
export const authNewMail = async (uid,new_mail)=>Mail(await C.authNewMail(uid,new_mail))

/**
 * @param {String} fingerprint
 * @param {String} account
 * @param {String} passwd
 * @param {String} code
*/
export const authPasswd = async (fingerprint,account,passwd,code)=>User(await S.authPasswd(fingerprint,account,passwd,code))

/**
 * @param {String} account
 * @param {String} password
*/
export const authReset = (account,password)=>C.authReset(account,password)

/**
 * @param {u64} id
*/
export const authRm = async (id)=>User(await S.authRm(id))

/**
 * @param {u64} id
*/
export const authSet = async (id)=>User(await S.authSet(id))

/**
 * @param {u64} uid
 * @param {String} new_mail
 * @param {Option<String>} old_code
 * @param {String} new_code
*/
export const authSetMail = (uid,new_mail,old_code,new_code)=>S.authSetMail(uid,new_mail,old_code,new_code)

/**
 * @param {String} fingerprint
 * @param {String} account
 * @param {String} passwd
 * @param {String} verify_code
 * @param {String} name
*/
export const authSignUp = async (fingerprint,account,passwd,verify_code,name)=>Uid(await S.authSignUp(fingerprint,account,passwd,verify_code,name))

/**
 * @param {String} fingerprint
 * @param {u8} action
 * @param {String} account
 * @param {String} password
*/
export const auth = async (fingerprint,action,account,password)=>User(await C.auth(fingerprint,action,account,password))
