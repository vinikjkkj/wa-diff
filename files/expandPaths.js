__d(
  "expandPaths",
  ["getByPath", "setByPath"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n = [],
        o = {};
      (e.sort(function (e, t) {
        return t.length - e.length;
      }),
        e.forEach(function (e) {
          var t = r("getByPath")(o, e);
          t || (n.push(e), r("setByPath")(o, e, !0));
        }));
      var a = t === void 0 ? null : t,
        i = {};
      return (
        n.forEach(function (e) {
          r("setByPath")(i, e, a);
        }),
        i
      );
    }
    l.default = e;
  },
  98,
);
