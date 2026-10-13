__d(
  "WAWebSilentPaymentMsg",
  ["WAWebBrazilPaymentStateUpdatePayload", "justknobx"],
  function (t, n, r, o, a, i, l) {
    var e = 32,
      s = new Set();
    function u(t) {
      var n = t.toString();
      if (!s.has(n) && s.size >= e) {
        var r = s.values().next().value;
        r != null && s.delete(r);
      }
      s.add(n);
    }
    function c(e) {
      return (
        (o(
          "WAWebBrazilPaymentStateUpdatePayload",
        ).isBrazilPaymentStateUpdateMsg(e) ||
          s.has(e.id.toString())) &&
        r("justknobx")._("6395")
      );
    }
    ((l.markSilentPaymentReceipt = u), (l.isSilentPaymentMsg = c));
  },
  98,
);
