__d(
  "WAWebInstantStackGrouping",
  ["WAWebAck", "WAWebInstantMsgTypes", "WAWebMessageListDayOfMsg"],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n) {
      return !s(e) || !s(t) || e.id.fromMe !== t.id.fromMe || !u(e, t)
        ? !1
        : r("WAWebMessageListDayOfMsg")(e) ===
            r("WAWebMessageListDayOfMsg")(t) && t !== n;
    }
    function s(e) {
      return (
        o("WAWebInstantMsgTypes").isInstantMsgType(e.type) &&
        e.ack != null &&
        e.ack >= o("WAWebAck").ACK.CLOCK
      );
    }
    function u(e, t) {
      var n, r;
      return ((n = e.author) != null ? n : e.from).equals(
        (r = t.author) != null ? r : t.from,
      );
    }
    l.canFormInstantStack = e;
  },
  98,
);
