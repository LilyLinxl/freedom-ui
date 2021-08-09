import { getType, isObject, isString } from './type';

export function isEmpty(value: any) {
  return value === null || value === undefined || value === '';
}

export function formatField(value: any) {
  return isEmpty(value) ? '--' : value;
}

export function getTimeZone() {
  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const timeZoneOffset = 0 - new Date().getTimezoneOffset() / 60;
  return `(${timeZone} UTC${
    timeZoneOffset > 0 ? '+' + timeZoneOffset : timeZoneOffset
  }:00)`;
}

export function getTimestamp(time: any) {
  let timestamp = new Date(time).getTime();
  return isNaN(timestamp) ? '' : timestamp;
}

export function floor(num: any) {
  num = Number(num);
  return num && Math.floor(num);
}

export function trimObject(obj: object) {
  let trimObj: any = isObject(obj) ? obj : {};

  Object.entries(obj).map((_) => {
    const [key, value] = _;
    trimObj[key] = isString(value) ? value.trim() : value;
  });
  return trimObj;
}

export function stringify(obj: Object) {
  if (!isObject(obj)) {
    return null;
  }
  let cache: any = [];

  const str = JSON.stringify(obj, function (key, value) {
    if (typeof value === 'object' && value !== null) {
      if (cache.indexOf(value) !== -1) {
        return;
      }
      cache.push(value);
    }
    return value;
  });

  cache = null;

  return str;
}

export function convertRadix(num: any, baseRadix = 10, toRadix = 2) {
  return parseInt(num.toString(), baseRadix).toString(toRadix);
}

export function setCookie(name: any, value: any, day = 30) {
  const exp = new Date();
  exp.setTime(exp.getTime() + day * 24 * 60 * 60 * 1000);
  document.cookie =
    name + '=' + value + '; expires=' + exp.toUTCString() + '; path=/';
}

export function getCookie(name: any) {
  let arr,
    reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)');
  if ((arr = document.cookie.match(reg))) {
    return unescape(arr[2]);
  } else {
    return null;
  }
}

export function syntaxHighlight(json: any) {
  json = json
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
  return json.replace(
    /("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+-]?\d+)?)/g,
    function (match: any) {
      let cls = 'Number';
      if (/^"/.test(match)) {
        if (/:$/.test(match)) {
          cls = 'key';
        } else {
          cls = 'string';
        }
      } else if (/true|false/.test(match)) {
        cls = 'boolean';
      } else if (/null/.test(match)) {
        cls = 'null';
      }
      return '<span class="' + cls + '">' + match + '</span>';
    },
  );
}
export function formatJson(json: any) {
  const jsonBack = JSON.stringify(JSON.parse(json), null, 4);
  return syntaxHighlight(jsonBack);
}

export function getLocaleLanguage() {
  return getCookie('x-lang') || 'zh-CN';
}

export const setKeyNameValue = (dataIndex: string, record: any, value: any) => {
  const arr = dataIndex ? dataIndex.split('.') : [];
  if (arr.length) {
    const obj = arr.reduceRight((p, c) => ({ [c]: p }), value);
    const res = {
      ...record,
      ...obj,
    };
    return res;
  } else {
    return record;
  }
};

export const getKeyNameValue = (dataIndex: string, record: any) => {
  const arr = dataIndex ? dataIndex.split('.') : [];
  return arr.reduce((p, c) => p[c], record);
};

export function reRenderTable() {
  const evt: any = document.createEvent('MouseEvents');
  evt.initMouseEvent('resize');
  window.dispatchEvent(evt);
}

/**
 * 是否为正则表达式
 */
export function isRegExp(v: string) {
  try {
    return getType(eval(v)) === 'RegExp';
  } catch (err) {
    return false;
  }
}
