import {
    HTTP, HTTPS, SWAPI_ROOT, SWAPI_COMICS,
    GUIDE_IMG_EXTENSION, URL_IMG_COMICS
} from '@constants/api';

//-----------------------------------------------
// Проверка протокола: HTTP или HTTPS
//-----------------------------------------------
const checkProtocol = url => {
    if (url.indexOf(HTTPS) !== -1) {
        return HTTPS;
    }

    return HTTP;
}

//-----------------------------------------------
// Получить ID персонажа по URL
//-----------------------------------------------
const getId = (url, category) => {
    const protocol = checkProtocol(url);

    const id = url
        .replace(protocol+SWAPI_ROOT+category, '')
        .replace(/\//g, '')

    return id;
}

export const getComicsId = url => getId(url, SWAPI_COMICS);

export const getComicsImage = id => `${URL_IMG_COMICS}/${id+GUIDE_IMG_EXTENSION}`;