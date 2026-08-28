__d(
  "mcdsSelectStylesForEveryDevice",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t) {
      var n,
        r,
        o,
        a = t.desktop,
        i = t.mobile,
        l = t.tablet;
      return [
        i != null && ((n = e(i)) == null ? void 0 : n.mobile),
        l != null && ((r = e(l)) == null ? void 0 : r.tablet),
        a != null && ((o = e(a)) == null ? void 0 : o.desktop),
      ];
    }
    i.default = e;
  },
  66,
);
