__d(
  "sdk.safelyParseResponse",
  ["errorCode", "getErrorSafe", "nullthrows"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = function (t, n, r, o) {
      return c;
    };
    function u(t, n, o) {
      (n === void 0 && (n = null), o === void 0 && (o = null));
      try {
        return t === null ? c : JSON.parse(r("nullthrows")(t));
      } catch (i) {
        var a = r("getErrorSafe")(i);
        return e(a, t, n, o);
      }
    }
    var c = {
      error: {
        code: 1,
        error_subcode: 1357046,
        message: "Received Invalid JSON reply.",
        type: "http",
      },
    };
    ((u.ERROR = c),
      (u.setErrorHandler = function (t) {
        e = t;
      }));
    var d = u;
    l.default = d;
  },
  98,
);
