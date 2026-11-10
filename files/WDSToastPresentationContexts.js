__d(
  "WDSToastPresentationContexts",
  ["WDSPresentationObservers"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new WeakMap();
    function s(t) {
      e.set(t, o("WDSPresentationObservers").captureWDSPresentationContext());
    }
    function u(t) {
      if (!e.has(t))
        return o("WDSPresentationObservers").captureWDSPresentationContext();
      var n = e.get(t);
      return (e.delete(t), n);
    }
    function c(t, n) {
      e.set(
        n,
        o("WDSPresentationObservers").combineWDSPresentationContexts(
          e.get(t),
          e.get(n),
        ),
      );
    }
    ((l.rememberToastPresentationContext = s),
      (l.takeToastPresentationContext = u),
      (l.carryToastPresentationContext = c));
  },
  98,
);
