__d(
  "WDSDialogDismissRegistry",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = null;
    function l(t) {
      return (
        (e = t),
        function () {
          e === t && (e = null);
        }
      );
    }
    function s() {
      e = null;
    }
    function u() {
      var t = e;
      return ((e = null), t);
    }
    ((i.registerDialogDismissHandler = l),
      (i.clearDialogDismissHandler = s),
      (i.takeDialogDismissHandler = u));
  },
  66,
);
