import { obj } from './obj';
import { array } from './array';
import { common } from './common';
import { file } from './file';
import { str } from './string';
import { i18n } from './i18n/i18n';

const jswl = {
    ...common,
    obj: obj,
    arr: array,
    file: file,
    str: str,
    i18n: i18n,
}

export default jswl;