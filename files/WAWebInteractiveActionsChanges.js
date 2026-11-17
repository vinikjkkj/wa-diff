__d(
  "WAWebInteractiveActionsChanges",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = new Set(),
      l = 0;
    function s() {
      l++;
      for (var t of e) t();
    }
    function u(t) {
      return (
        e.add(t),
        function () {
          e.delete(t);
        }
      );
    }
    function c() {
      return l;
    }
    ((i.notifyInteractiveActionsChanged = s),
      (i.subscribeToInteractiveActionsChanges = u),
      (i.getInteractiveActionsChangeCount = c));
  },
  66,
);
