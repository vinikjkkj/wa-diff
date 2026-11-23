__d(
  "MAIBAWorkspaceCanvasReopenRegistry",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = new Map();
    function l(t, n) {
      return (
        e.set(t, n),
        function () {
          e.get(t) === n && e.delete(t);
        }
      );
    }
    function s(t) {
      var n = t.conversationID,
        r = t.workspaceID,
        o = t.workspaceType,
        a = e.get(n);
      return a != null && a(o, r);
    }
    function u() {
      e.clear();
    }
    ((i.registerMAIBAWorkspaceCanvasReopenHandler = l),
      (i.reopenMAIBAWorkspaceCanvas = s),
      (i.resetMAIBAWorkspaceCanvasReopenRegistryForTest = u));
  },
  66,
);
