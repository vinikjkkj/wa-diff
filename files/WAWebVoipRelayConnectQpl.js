__d(
  "WAWebVoipRelayConnectQpl",
  ["WAWebQplFlow", "qpl"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("qpl")._(891431646, "1606"),
      s = 6e4,
      u = null,
      c = !1;
    function d() {
      u == null &&
        !c &&
        (u = o("WAWebQplFlow").startQplFlow(e, { timeoutInMs: s }));
    }
    function m() {
      u != null && (u.endSuccess(), (u = null), (c = !0));
    }
    function p() {
      var e;
      ((e = u) == null ||
        e.endCancel(void 0, { string: { cancel_reason: "call_ended" } }),
        (u = null),
        (c = !1));
    }
    ((l.maybeStartVoipRelayConnectQpl = d),
      (l.endVoipRelayConnectQplSuccess = m),
      (l.resetVoipRelayConnectQpl = p));
  },
  98,
);
