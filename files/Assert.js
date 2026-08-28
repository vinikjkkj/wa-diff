__d(
  "Assert",
  ["AssertionError", "sprintf"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      if (typeof e != "boolean" || e === !1) throw new (r("AssertionError"))(t);
      return e;
    }
    function s(t, n, o) {
      var a;
      if (n === void 0) a = "undefined";
      else if (n === null) a = "null";
      else {
        var i = {}.toString.call(n),
          l = /\s(\w*)/.exec(i);
        a = l == null ? typeof l : l[1].toLowerCase();
      }
      return (
        e(
          t.indexOf(a) !== -1,
          o != null
            ? o
            : r("sprintf")("Expression is of type %s, not %s", a, t),
        ),
        n
      );
    }
    function u(t, n, r) {
      return (
        e(n instanceof t, r != null ? r : "Expression not instance of type"),
        n
      );
    }
    var c = {
        isInstanceOf: u,
        isTrue: e,
        isTruthy: function (n, r) {
          return e(!!n, r);
        },
        isBoolean: function (t, n) {
          return s("boolean", t, n);
        },
        isFunction: function (t, n) {
          return s("function", t, n);
        },
        isNumber: function (t, n) {
          return s("number", t, n);
        },
        isObject: function (t, n) {
          return s("object", t, n);
        },
        isString: function (t, n) {
          return s("string", t, n);
        },
        isUndefined: function (t, n) {
          return s("undefined", t, n);
        },
        maybeObject: function (t, n) {
          return t == null ? t : s("object", t, n);
        },
        maybeNumber: function (t, n) {
          return t == null ? t : s("number", t, n);
        },
        maybeFunction: function (t, n) {
          return t == null ? t : s("function", t, n);
        },
      },
      d = c;
    l.default = d;
  },
  98,
);
