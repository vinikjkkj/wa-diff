__d(
  "MAIBASendMessageObservers",
  ["FBLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new Set();
    function s(t) {
      return (
        e.add(t),
        function () {
          e.delete(t);
        }
      );
    }
    function u(t) {
      e.forEach(function (e) {
        try {
          t(e);
        } catch (e) {
          var n = r("FBLogger")("axp_maiba_foundations_ux");
          e instanceof Error
            ? n.catching(e).warn("A send message observer failed")
            : n.warn("A send message observer failed: %s", String(e));
        }
      });
    }
    ((l.addMAIBASendMessageObserver = s),
      (l.notifyMAIBASendMessageObservers = u));
  },
  98,
);
