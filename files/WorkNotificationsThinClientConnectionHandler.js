__d(
  "WorkNotificationsThinClientConnectionHandler",
  ["CometNotificationsThinClientConnectionHandler", "relay-runtime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "work_notifications_thin_client";
    function s(e, t) {
      o("CometNotificationsThinClientConnectionHandler").update(e, t);
    }
    function u(t, n, r) {
      var a = o("relay-runtime").getRelayHandleKey(e, n, null);
      return t.getLinkedRecord(a, r);
    }
    ((l.update = s), (l.getConnection = u));
  },
  98,
);
