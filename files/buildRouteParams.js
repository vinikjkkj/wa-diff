__d(
  "buildRouteParams",
  ["coerceRouteParam"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      return Object.keys(e).reduce(function (o, a) {
        var i = e[a];
        if (i != null && (n == null || i[n] === !0)) {
          var l = r("coerceRouteParam")(t[a], i.coercibleType),
            s = l.valid,
            u = l.value,
            c = u != null ? u : i.default;
          (s && (o[a] = c),
            i.legacyNames.forEach(function (e) {
              o[e] = c;
            }));
        }
        return o;
      }, {});
    }
    l.default = e;
  },
  98,
);
