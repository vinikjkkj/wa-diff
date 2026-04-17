__d(
  "isValidURL",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t) {
      t === void 0 && (t = !1);
      var n =
          /^(([\w-]+\.)+(xn--[\w-]+|\w+)|\[([\da-f]{0,4}:)*(?:[\da-f]{1,4}|(?:(?:\d{1,3}\.){3}\d{1,3}))\])(:[0-9]+)?([/\?].*)?$/,
        r =
          /^http(s)?:\/\/(([\w-]+\.)+(xn--[\w-]+|\w+)|\[([\da-f]{0,4}:)*(?:[\da-f]{1,4}|(?:(?:\d{1,3}\.){3}\d{1,3}))\])(:[0-9]+)?([/\?].*)?$/;
      return t
        ? e.match(r) !== null
        : e.match(n) !== null || e.match(r) !== null;
    }
    i.default = e;
  },
  66,
);
