__d(
  "WDSDialogBridge",
  ["WDSDialogDismissRegistry", "WDSPresentationObservers"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 150,
      s = null,
      u = null,
      c = null,
      d = null;
    function m(e) {
      ((d = o("WDSPresentationObservers").captureWDSPresentationContext()),
        s != null ? s(e) : (c = e));
    }
    function p() {
      (o("WDSDialogDismissRegistry").clearDialogDismissHandler(),
        u != null ? u() : c != null && ((c = null), (d = null)));
    }
    function _(e, t) {
      if (((s = e), (u = t), c != null)) {
        var n = c;
        ((c = null), e(n));
      }
      return function () {
        ((s = null), (u = null));
      };
    }
    function f() {
      var e = d;
      return ((d = null), e);
    }
    ((l.DIALOG_EXIT_ANIMATION_DURATION = e),
      (l.openWDSDialog = m),
      (l.closeWDSDialog = p),
      (l.registerDialogManager = _),
      (l.takeOpenedDialogPresentationContext = f));
  },
  98,
);
