__d(
  "ContextualConfigValidators",
  ["ContextualConfigConstants"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = function (t) {
        return Array.isArray(t);
      },
      s = function (t) {
        return typeof t == "boolean";
      },
      u = function (t) {
        return t != null;
      },
      c = function (t) {
        return function (e) {
          return Object.prototype.hasOwnProperty.call(t, e);
        };
      },
      d = function (t) {
        return p(t) && t % 1 === 0;
      },
      m = function (t) {
        return _(t) && t.length > 0;
      },
      p = function (t) {
        return typeof t == "number" && !isNaN(t) && t !== 1 / 0 && t !== -1 / 0;
      },
      _ = function (t) {
        return typeof t == "string";
      },
      f = function (t) {
        switch (t) {
          case o("ContextualConfigConstants").TYPE.BOOL:
          case o("ContextualConfigConstants").TYPE.FLOAT:
          case o("ContextualConfigConstants").TYPE.INT:
          case o("ContextualConfigConstants").TYPE.STRING:
            return !0;
          default:
            return !1;
        }
      };
    ((l.isArray = e),
      (l.isBoolean = s),
      (l.isDefined = u),
      (l.isKey = c),
      (l.isInteger = d),
      (l.isNonEmptyString = m),
      (l.isNumber = p),
      (l.isString = _),
      (l.isType = f));
  },
  98,
);
