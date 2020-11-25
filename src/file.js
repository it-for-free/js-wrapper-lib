import regeneratorRuntime from "regenerator-runtime";

/**
 * Скачает файл в base64 или получит ошибку в JSON.
 *
 * Попробует выполнить GET запрос на url, если статус в диапазоне 200-299,
 * то передаст ответ в формает blob в successCallback(),
 * иначе передаст json в failCallback.
 * 
 * @param {string} url                 url откуда качать файл
 * @param {function} successCallback   вызов в случае успешной закачки
 * @param {function} failCallback      вызов на случай, если сервер сообщит об ошибке
 */
export const downloadBlobOrGetErrorInJson = async (url, successCallback, failCallback = () => { }) => {

    let response = await fetch(url);

    if (response.ok) { // если код ответа в диапазоне 200-299
        let file = await response.blob();
        successCallback(file);
    } else {
        let json = await response.json();
        failCallback(json);
    }
}

const file = {
    downloadBlobOrGetErrorInJson,
};

export { file };
