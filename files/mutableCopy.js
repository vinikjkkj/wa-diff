__d(
  "mutableCopy",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      if (Array.isArray(e)) {
        var t = [].concat(e);
        for (var n of Object.keys(e)) /^\d+$/.test(n) || (t[n] = e[n]);
        return t;
      }
      var r = {};
      for (var o of Object.getOwnPropertyNames(e)) {
        var a = Object.getOwnPropertyDescriptor(e, o);
        a != null &&
          ("get" in a || "set" in a
            ? Object.defineProperty(
                r,
                o,
                babelHelpers.extends({}, a, { configurable: !0 }),
              )
            : Object.defineProperty(r, o, {
                value: a.value,
                enumerable: a.enumerable,
                configurable: !0,
                writable: !0,
              }));
      }
      return r;
    }
    i.default = e;
  },
  66,
);
