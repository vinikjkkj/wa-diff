__d(
  "adsSelectorDisposal",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = new WeakMap();
    function l(t, n) {
      e.set(t, n);
    }
    function s(t) {
      var n;
      (n = e.get(t)) == null || n();
    }
    ((i.registerAdsSelectorDisposer = l), (i.disposeAdsSelector = s));
  },
  66,
);
