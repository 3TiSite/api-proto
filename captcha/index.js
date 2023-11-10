import {nodefault as $nodefault} from '@3-/proto/decode.js'
import {uint64 as $uint64,bytes as $bytes,string as $string} from '@3-/proto/decode/types.js'

export const Captcha /*
  0 id   	uint64
  1 img  	bytes
  2 svgLi	[string]
*/ = $nodefault([$uint64,$bytes,$string],[2])