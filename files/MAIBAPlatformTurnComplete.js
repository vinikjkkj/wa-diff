__d(
  "MAIBAPlatformTurnComplete",
  ["XFBMAIBAMessageOrigin.facebook", "relay-runtime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "maiba_platform_turn_complete";
    function s(t, n, r) {
      for (var o of n) {
        var a;
        (a = t.get(o)) == null || a.setValue(r, e);
      }
    }
    function u(e, t) {
      s(e, t, !1);
    }
    function c(e, t) {
      s(e, t, !0);
    }
    function d(e, t, n) {
      return t === !0 || e === "error" || e === "CLIENT_STOP"
        ? !0
        : e === "done" && (t !== !1 || n === "HISTORICAL");
    }
    function m(t, n) {
      var a = t.getStore().getSource().get(n),
        i =
          a != null
            ? o("relay-runtime").Record.getValue(a, "streaming_state")
            : null;
      if (a == null || typeof i != "string") return !1;
      var l = o("relay-runtime").Record.getValue(a, e),
        s = o("relay-runtime").Record.getValue(a, "message_origin");
      return !d(
        i,
        typeof l == "boolean" ? l : null,
        typeof s == "string"
          ? r("XFBMAIBAMessageOrigin.facebook").cast(s)
          : null,
      );
    }
    function p(e, t) {
      var n,
        r = e.getStore().getSource(),
        a = r.get(t),
        i =
          a != null
            ? (n = o("relay-runtime").Record.getLinkedRecordIDs(a, "edges")) ==
              null
              ? void 0
              : n.at(-1)
            : null,
        l = i != null ? r.get(i) : null,
        s =
          l != null
            ? o("relay-runtime").Record.getLinkedRecordID(l, "node")
            : null;
      return s != null && m(e, s);
    }
    ((l.markMAIBAPlatformTurnInFlight = u),
      (l.markMAIBAPlatformTurnComplete = c),
      (l.isMAIBAPlatformTurnComplete = d),
      (l.isMAIBAPlatformNodeInFlight = m),
      (l.isMAIBAPlatformTurnInFlight = p));
  },
  98,
);
