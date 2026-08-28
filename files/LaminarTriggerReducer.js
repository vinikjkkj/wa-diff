__d(
  "LaminarTriggerReducer",
  ["AdsDataAtomShared"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      var o = function (r, o) {
          var t = n.select(r);
          return e.reduce(t, o);
        },
        a = function (t) {
          return o(r("AdsDataAtomShared").getAlteredState(), t);
        };
      return { provider: n.provider, reduce: a, triggerReducer: t };
    }
    l.create = e;
  },
  98,
);
