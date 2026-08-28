__d(
  "pickDeep",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(t, n, r) {
      var o = babelHelpers.extends({}, n);
      return (
        Object.keys(n).forEach(function (a) {
          var i = n[a];
          if (l(i) && (!r || r(i))) {
            var s = t[a];
            o[a] = e(l(s) ? s : {}, i, r);
          } else o[a] = t[a];
        }),
        o
      );
    }
    function l(e) {
      return (
        typeof e == "object" &&
        e !== null &&
        {}.toString.call(e) === "[object Object]"
      );
    }
    i.default = e;
  },
  66,
);
