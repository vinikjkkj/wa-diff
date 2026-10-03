__d(
  "WAWebMsgInfoAction",
  ["WAWebAck", "WAWebStateUtils", "WAWebWid"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.ack,
        n = e.msgInfoParam,
        a = e.participant,
        i = e.ts,
        l = o("WAWebStateUtils").unproxy(n),
        c = l.id,
        d = r("WAWebWid").isUser(c.remote);
      d ? s({ ack: t, msgInfo: l, participant: a, ts: i }) : u(l, t, a, i);
    }
    function s(e) {
      var t = e.ack,
        n = e.msgInfo,
        r = e.participant,
        a = e.ts;
      t === o("WAWebAck").ACK.PLAYED
        ? (n.played.get(r) || (n.playedRemaining -= 1),
          n.played.add({ id: r, t: a }))
        : t === o("WAWebAck").ACK.READ
          ? (n.read.get(r) || (n.readRemaining -= 1),
            n.read.add({ id: r, t: a }))
          : t === o("WAWebAck").ACK.RECEIVED &&
            (n.delivery.get(r) || (n.deliveryRemaining -= 1),
            n.delivery.add({ id: r, t: a }));
    }
    function u(e, t, n, r) {
      var a = o("WAWebAck").ACK.CLOCK;
      if (
        (e.played.get(n)
          ? (a = o("WAWebAck").ACK.PLAYED)
          : e.read.get(n)
            ? (a = o("WAWebAck").ACK.READ)
            : e.delivery.get(n) && (a = o("WAWebAck").ACK.RECEIVED),
        !(t <= a))
      ) {
        var i = c(e, n) ? 1 : 0;
        if (t > o("WAWebAck").ACK.RECEIVED) {
          var l = e.delivery.get(n);
          l ? e.delivery.remove(l) : (e.deliveryRemaining -= i);
        }
        if (t > o("WAWebAck").ACK.READ) {
          var s = e.read.get(n);
          s ? e.read.remove(s) : (e.readRemaining -= i);
        }
        t === o("WAWebAck").ACK.PLAYED
          ? (e.played.get(n) || (e.playedRemaining -= i),
            e.played.add({ id: n, t: r }))
          : t === o("WAWebAck").ACK.READ
            ? (e.read.get(n) || (e.readRemaining -= i),
              e.read.add({ id: n, t: r }))
            : t === o("WAWebAck").ACK.RECEIVED &&
              (e.delivery.get(n) || (e.deliveryRemaining -= i),
              e.delivery.add({ id: n, t: r }));
      }
    }
    function c(e, t) {
      var n;
      return (
        !t.isBot() ||
        ((n = e.countedAgents) == null
          ? void 0
          : n.some(function (e) {
              return e.equals(t);
            })) === !0
      );
    }
    l.updateMsgInfo = e;
  },
  98,
);
