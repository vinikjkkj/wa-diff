__d(
  "WDSDialogBridge",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = 150,
      l = null,
      s = null,
      u = null;
    function c(e) {
      l != null ? l(e) : (u = e);
    }
    function d() {
      s != null ? s() : u != null && (u = null);
    }
    function m(e, t) {
      if (((l = e), (s = t), u != null)) {
        var n = u;
        ((u = null), e(n));
      }
      return function () {
        ((l = null), (s = null));
      };
    }
    ((i.DIALOG_EXIT_ANIMATION_DURATION = e),
      (i.openWDSDialog = c),
      (i.closeWDSDialog = d),
      (i.registerDialogManager = m));
  },
  66,
);
