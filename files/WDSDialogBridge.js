__d(
  "WDSDialogBridge",
  ["WDSDialogDismissRegistry"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 150,
      s = null,
      u = null,
      c = null;
    function d(e) {
      s != null ? s(e) : (c = e);
    }
    function m() {
      (o("WDSDialogDismissRegistry").clearDialogDismissHandler(),
        u != null ? u() : c != null && (c = null));
    }
    function p(e, t) {
      if (((s = e), (u = t), c != null)) {
        var n = c;
        ((c = null), e(n));
      }
      return function () {
        ((s = null), (u = null));
      };
    }
    ((l.DIALOG_EXIT_ANIMATION_DURATION = e),
      (l.openWDSDialog = d),
      (l.closeWDSDialog = m),
      (l.registerDialogManager = p));
  },
  98,
);
