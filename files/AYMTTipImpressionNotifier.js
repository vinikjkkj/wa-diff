__d(
  "AYMTTipImpressionNotifier",
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
    ((i.subscribeToTipImpressions = l), (i.notifyTipImpression = s));
  },
  66,
);
