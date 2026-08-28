__d(
  "LaminarReducer",
  ["AdsDataAtomShared", "Laminar"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, a, i) {
      var l = o("Laminar").__createExperimentalSelector(a, function (e) {
          return e;
        }),
        s = function (r, o) {
          var e = l.select(r),
            a = n.select(r);
          return t.reduce(a, o, e);
        },
        u = function (t) {
          return s(r("AdsDataAtomShared").getAlteredState(), t);
        };
      return (
        (u.isDisabled = !e && n.shouldLegacyFluxReduceOnly),
        (u.provider = n.provider),
        (u.providerInitialState = function () {
          return n.getInitialState();
        }),
        (u.reduce = s),
        (u.registries = n.registries),
        (u.triggerReducers = n.triggerReducers),
        (u.reducerName = i),
        u
      );
    }
    function s(t, n, r, o) {
      return e(!1, t, n, r, o);
    }
    function u(t, n, r, o) {
      return e(!0, t, n, r, o);
    }
    ((l.create = s), (l.createLegacy = u));
  },
  98,
);
