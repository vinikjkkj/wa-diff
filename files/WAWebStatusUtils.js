__d(
  "WAWebStatusUtils",
  ["fbt", "WAWebAck"],
  function (t, n, r, o, a, i, l, s) {
    function e(e) {
      var t;
      return (
        e < o("WAWebAck").ACK.SENT
          ? (t = s._(/*BTDS*/ ""))
          : e === o("WAWebAck").ACK.SENT
            ? (t = s._(/*BTDS*/ ""))
            : e === o("WAWebAck").ACK.RECEIVED
              ? (t = s._(/*BTDS*/ ""))
              : (t = s._(/*BTDS*/ "")),
        t
      );
    }
    l.getMessageStatusLabel = e;
  },
  226,
);
