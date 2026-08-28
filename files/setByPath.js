__d(
  "setByPath",
  ["invariant"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      for (var r = e, o = 0; o < t.length; o++) {
        var a = t[o];
        if (o === t.length - 1) {
          r[a] = n;
          return;
        }
        (Object.prototype.hasOwnProperty.call(r, a)
          ? r[a] == null
            ? (r[a] = {})
            : Array.isArray(r[a]) ||
              {}.toString.call(r[a]) === "[object Object]" ||
              l(0, 1041, r[a])
          : (r[a] = {}),
          (r = r[a]));
      }
    }
    i.default = e;
  },
  66,
);
