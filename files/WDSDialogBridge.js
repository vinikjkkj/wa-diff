__d(
  "WDSDialogBridge",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = 150,
      l = null,
      s = null;
    function u(e) {
      l == null || l(e);
    }
    function c() {
      s == null || s();
    }
    function d(e, t) {
      return (
        (l = e),
        (s = t),
        function () {
          ((l = null), (s = null));
        }
      );
    }
    ((i.DIALOG_EXIT_ANIMATION_DURATION = e),
      (i.openWDSDialog = u),
      (i.closeWDSDialog = c),
      (i.registerDialogManager = d));
  },
  66,
);
