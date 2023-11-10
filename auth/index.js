import {default as $decode,one as $one,li as $li} from '@3-/proto/decode.js'
import {uint64 as $uint64,string as $string,bool as $bool} from '@3-/proto/decode/types.js'

export const Uid /*
  0 id	uint64
*/ = $one($uint64,0)
export const User /*
  0 id  	uint64
  1 name	string
*/ = $decode(
  [$uint64,$string],
  [0,""]
)

export const UserState /*
  0 id     	uint64
  1 name   	string
  2 account	string
  3 exit   	bool
*/ = $decode(
  [$uint64,$string,$string,$bool],
  [0,"","",false]
)

export const UserStateLi /*
  0 li	[UserState]
*/ = $li(UserState)