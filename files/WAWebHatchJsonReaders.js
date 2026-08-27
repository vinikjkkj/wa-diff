__d(
  "WAWebHatchJsonReaders",
  ["WATypeUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return e != null && typeof e == "object" && !Array.isArray(e);
    }
    function s(e, t) {
      return e == null || typeof e != "object" || Array.isArray(e)
        ? null
        : e[t];
    }
    function u(e, t) {
      var n = s(e, t);
      return o("WATypeUtils").isString(n) ? n : null;
    }
    function c(e, t) {
      var n = s(e, t);
      return o("WATypeUtils").isNumber(n) ? n : null;
    }
    function d(e, t) {
      var n = s(e, t);
      return typeof n == "boolean" ? n : null;
    }
    function m(e, t) {
      var n;
      return (n = u(e, t)) != null ? n : "";
    }
    function p(t, n) {
      var r = s(t, n);
      return e(r) ? r : null;
    }
    function _(e) {
      return e.trim() === "";
    }
    function f(e) {
      return _(e)
        ? ""
        : /(?:[!\.\?\u0589\u061D-\u061F\u06D4\u0700-\u0702\u07F9\u0837\u0839\u083D\u083E\u0964\u0965\u104A\u104B\u1362\u1367\u1368\u166E\u1735\u1736\u17D4\u17D5\u1803\u1809\u1944\u1945\u1AA8-\u1AAB\u1B4E\u1B4F\u1B5A\u1B5B\u1B5E\u1B5F\u1B7D-\u1B7F\u1C3B\u1C3C\u1C7E\u1C7F\u2024\u2026\u203C\u203D\u2047-\u2049\u2CF9-\u2CFB\u2E2E\u2E3C\u2E53\u2E54\u3002\uA4FF\uA60E\uA60F\uA6F3\uA6F7\uA876\uA877\uA8CE\uA8CF\uA92F\uA9C8\uA9C9\uAA5D-\uAA5F\uAAF0\uAAF1\uABEB\uFE12\uFE15\uFE16\uFE52\uFE56\uFE57\uFF01\uFF0E\uFF1F\uFF61]|\uD802[\uDE56\uDE57]|\uD803[\uDF55-\uDF59\uDF86-\uDF89]|\uD804[\uDC47\uDC48\uDCBE-\uDCC1\uDD41-\uDD43\uDDC5\uDDC6\uDDCD\uDDDE\uDDDF\uDE38\uDE39\uDE3B\uDE3C\uDEA9\uDFD4\uDFD5]|\uD805[\uDC4B\uDC4C\uDDC2\uDDC3\uDDC9-\uDDD7\uDE41\uDE42\uDF3C-\uDF3E]|\uD806[\uDD44\uDD46\uDE42\uDE43\uDE9B\uDE9C]|\uD807[\uDC41\uDC42\uDEF7\uDEF8\uDF43\uDF44]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37\uDF38\uDF44]|\uD81B[\uDD6E\uDD6F\uDE98]|\uD82F\uDC9F|\uD836\uDE88)$/.test(
              e.trimEnd(),
            )
          ? " "
          : ". ";
    }
    function g(e) {
      var t = e.trim();
      return t === "" ? null : t;
    }
    function h(e, t) {
      var n = m(e, t);
      if (!_(n)) return n;
      var r = c(e, t);
      return r != null ? String(r) : "";
    }
    function y(e, t) {
      var n = s(e, t);
      return Array.isArray(n) ? n : null;
    }
    ((l.isObject = e),
      (l.readField = s),
      (l.readString = u),
      (l.readNumber = c),
      (l.readBool = d),
      (l.readStringOrEmpty = m),
      (l.readObject = p),
      (l.isBlankText = _),
      (l.sentenceGap = f),
      (l.trimToNull = g),
      (l.readTextOrNumber = h),
      (l.readArray = y));
  },
  98,
);
