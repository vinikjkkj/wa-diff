__d(
  "LaminarLogger",
  ["AdsDataAtomShared", "Laminar"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, a) {
      var i = o("Laminar").__createExperimentalSelector(n, function (e) {
          return e;
        }),
        l = function (n, r) {
          var e = i.select(n);
          t.log(r, e);
        },
        s = function (t) {
          return l(r("AdsDataAtomShared").getAlteredState(), t);
        };
      return ((s.id = e), (s.log = l), (s.registries = a == null ? [] : a), s);
    }
    l.create = e;
  },
  98,
);
