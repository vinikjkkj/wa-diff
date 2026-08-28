__d(
  "LaminarReducerWithFluxSelectors",
  ["AdsDataAtomShared", "AdsSelectorUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t, n) {
      return function (a, i) {
        var l = Object.keys(t),
          s = l.map(function (e) {
            return t[e];
          });
        r("AdsDataAtomShared").waitFor(
          (e || (e = o("AdsSelectorUtils"))).getStoreDispatchTokens(s),
        );
        var u = l.reduce(function (e, n) {
          var r;
          return Object.assign(e, ((r = {}), (r[n] = t[n]()), r));
        }, {});
        return n(a, i, u);
      };
    }
    l.default = s;
  },
  98,
);
