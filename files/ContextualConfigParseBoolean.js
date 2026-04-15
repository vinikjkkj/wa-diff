__d(
  "ContextualConfigParseBoolean",
  ["ContextualConfigConstants"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      switch (e.toUpperCase()) {
        case "TRUE":
          return !0;
        case "FALSE":
          return !1;
        default: {
          var t = new Error(
            o("ContextualConfigConstants").ERROR.BAD_BOOLEAN_FORMAT,
          );
          throw (t.stack, t);
        }
      }
    }
    l.default = e;
  },
  98,
);
