__d(
  "AYMTTipDismissalNotifier",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = new Set();
    function l(t) {
      return (
        e.add(t),
        function () {
          e.delete(t);
        }
      );
    }
    function s(t) {
      if (!(t == null || t === ""))
        for (var n of Array.from(e))
          try {
            n(t);
          } catch (e) {}
    }
    ((i.subscribeToTipDismissals = l), (i.notifyTipDismissal = s));
  },
  66,
);
