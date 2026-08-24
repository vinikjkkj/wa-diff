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
      var a,
        i = o("WAWebAck").ACK.CLOCK;
      if (
        (e.played.get(n)
          ? (i = o("WAWebAck").ACK.PLAYED)
          : e.read.get(n)
            ? (i = o("WAWebAck").ACK.READ)
            : e.delivery.get(n) && (i = o("WAWebAck").ACK.RECEIVED),
        !(t <= i))
      ) {
        if (t > o("WAWebAck").ACK.RECEIVED) {
          var l = e.delivery.get(n);
          l ? e.delivery.remove(l) : (e.deliveryRemaining -= 1);
        }
        if (t > o("WAWebAck").ACK.READ) {
          var s = e.read.get(n);
          s ? e.read.remove(s) : (e.readRemaining -= 1);
        }
        (t === o("WAWebAck").ACK.READ &&
          e != null &&
          (a = e.id) != null &&
          (a = a.remote) != null &&
          a.isGroup() &&
          n != null &&
          n.isBot() &&
          (e.readRemaining += 1),
          t === o("WAWebAck").ACK.PLAYED
            ? (e.played.get(n) || (e.playedRemaining -= 1),
              e.played.add({ id: n, t: r }))
            : t === o("WAWebAck").ACK.READ
              ? (e.read.get(n) || (e.readRemaining -= 1),
                e.read.add({ id: n, t: r }))
              : t === o("WAWebAck").ACK.RECEIVED &&
                (e.delivery.get(n) || (e.deliveryRemaining -= 1),
                e.delivery.add({ id: n, t: r })));
      }
    }
    l.updateMsgInfo = e;
  },
  98,
);
