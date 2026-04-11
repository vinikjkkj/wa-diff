__d(
  "WAWebMsgInfoAction",
  ["WAWebAck", "WAWebStateUtils", "WAWebWid"],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n, a) {
      var i = o("WAWebStateUtils").unproxy(e),
        l = i.id,
        c = r("WAWebWid").isUser(l.remote);
      c ? s(i, t, n, a) : u(i, t, n, a);
    }
    function s(e, t, n, r) {
      t === o("WAWebAck").ACK.PLAYED
        ? (e.played.get(n) || (e.playedRemaining -= 1),
          e.played.add({ id: n, t: r }))
        : t === o("WAWebAck").ACK.READ
          ? (e.read.get(n) || (e.readRemaining -= 1),
            e.read.add({ id: n, t: r }))
          : t === o("WAWebAck").ACK.RECEIVED &&
            (e.delivery.get(n) || (e.deliveryRemaining -= 1),
            e.delivery.add({ id: n, t: r }));
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
