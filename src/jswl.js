import { obj } from './obj';
import { array } from './array';
import { common } from './common';
import { file } from './file';
import { str } from './string';

const jswl = {
    ...common,
    obj: obj,
    arr: array,
    file: file,
    str: str,
}

export default jswl;