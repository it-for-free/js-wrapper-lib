import { obj } from './obj';
import { array } from './array';
import { common } from './common';
import { file } from './file';

const jswl = {
    ...common,
    obj: obj,
    arr: array,
    file: file,
}

export default jswl;