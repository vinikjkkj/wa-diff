__d(
  "LaminarExperimentalSelector",
  ["AdsDataAtomShared", "AdsDataPluginsInternalUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = new Set();
      for (var n in e) for (var r of e[n].providers) t.add(r);
      return Array.from(t);
    }
    function s(e) {
      var t = new Set();
      for (var n in e)
        for (var r of e[n].toFluxSelector().getStores()) t.add(r);
      return Array.from(t);
    }
    function u(e, t, n) {
      var r = {};
      for (var o in e) r[o] = e[o].select(t, n);
      return r;
    }
    function c(e, t) {
      var n = Object.keys(e);
      if (n.length !== Object.keys(t).length) return !1;
      for (var r of n)
        if (!Object.prototype.hasOwnProperty.call(t, r) || e[r] !== t[r])
          return !1;
      return !0;
    }
    function d(t, n) {
      var a = null,
        i = function (r, o) {
          var e = u(t, r, o);
          return (
            (!a || !c(e, a.inputs)) && (a = { inputs: e, result: n(e) }),
            a.result
          );
        },
        l = function (t) {
          return i(r("AdsDataAtomShared").getAlteredState(), t);
        },
        d = Object.assign(l, {
          providers: e(t),
          select: i,
          toFluxSelector: o("AdsDataPluginsInternalUtils").memoize(function () {
            return Object.assign(
              function () {
                return d(r("AdsDataAtomShared").getAlteredState());
              },
              {
                getStores: function () {
                  return s(t);
                },
                isGetStoresStatic: !0,
                isGetStoresPure: !0,
                rawSelectFn: function () {
                  return d(r("AdsDataAtomShared").getAlteredState());
                },
              },
            );
          }),
        });
      return d;
    }
    l.create = d;
  },
  98,
);
