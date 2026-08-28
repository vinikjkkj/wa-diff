__d(
  "generatePaths",
  ["invariant", "ImmutableObject"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e(e) {
      return Object.prototype.toString.call(e) === "[object Object]";
    }
    function u(t) {
      var n = {};
      return (
        t.forEach(function (t) {
          var r = t.expandsTo,
            o = t.pathKeys,
            a = [],
            i = n;
          (o.forEach(function (t) {
            (Object.prototype.hasOwnProperty.call(i, t) ||
              s(0, 3319, o.join(",")),
              (a = i[t]),
              e(i[t]) || (i[t] = {}),
              (i = i[t]));
          }),
            Array.isArray(a) || s(0, 3320, o.join(",")),
            Object.keys(r).forEach(function (e) {
              i[e] = [].concat(a, [r[e]]);
            }),
            !Object.prototype.hasOwnProperty.call(i, "path") ||
              s(0, 3321, o.join(",")),
            (i.path = a));
        }),
        new (r("ImmutableObject"))(n)
      );
    }
    l.default = u;
  },
  98,
);
