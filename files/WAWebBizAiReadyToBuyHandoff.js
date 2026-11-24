__d(
  "WAWebBizAiReadyToBuyHandoff",
  ["WAWebProtobufsE2E.pb"],
  function (t, n, r, o, a, i, l) {
    var e = "READY_TO_BUY",
      s = new Map(),
      u = new Set();
    function c(t, n) {
      var r = t.id.toString(),
        a = t.aiHandoffStartedAt;
      if (
        n === e &&
        t.capiThreadControl ===
          o("WAWebProtobufsE2E.pb")
            .Message$CloudAPIThreadControlNotification$CloudAPIThreadControl
            .CONTROL_PASSED &&
        a != null
      ) {
        if (s.get(r) === a) return;
        s.set(r, a);
      } else if (!s.delete(r)) return;
      u.forEach(function (e) {
        return e();
      });
    }
    function d(e) {
      var t = e.aiHandoffStartedAt;
      return t != null && s.get(e.id.toString()) === t;
    }
    function m(e) {
      return (
        u.add(e),
        function () {
          u.delete(e);
        }
      );
    }
    ((l.recordAiHandoffReason = c),
      (l.isReadyToBuyHandoff = d),
      (l.subscribeToReadyToBuyHandoffs = m));
  },
  98,
);
