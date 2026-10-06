__d(
  "WAWebSubscriptionNotificationStore",
  ["react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (e || (e = o("react"))).useSyncExternalStore,
      u = null,
      c = new Set();
    function d(e) {
      (u != null && (e.stanzaId === u.stanzaId || e.timestamp < u.timestamp)) ||
        ((u = e),
        c.forEach(function (e) {
          return e();
        }));
    }
    function m() {
      u != null &&
        ((u = null),
        c.forEach(function (e) {
          return e();
        }));
    }
    function p(e) {
      return (
        c.add(e),
        function () {
          c.delete(e);
        }
      );
    }
    function _() {
      return u;
    }
    function f() {
      return s(p, _);
    }
    ((l.updateSubscriptionNotification = d),
      (l.clearSubscriptionNotification = m),
      (l.getSubscriptionNotification = _),
      (l.useWAWebSubscriptionNotification = f));
  },
  98,
);
