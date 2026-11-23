__d(
  "WAAbPropConverters",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      if (!e) return {};
      var t = {};
      return (
        Object.keys(e).forEach(function (n) {
          var r = e[n];
          r != null && (t[n] = r);
        }),
        t
      );
    }
    i.convertAbPropsToPlainObject = e;
  },
  66,
);
