__d(
  "WAWebStatusUtils",
  ["fbt", "WAWebAck"],
  function (t, n, r, o, a, i, l, s) {
    function e(e) {
      var t;
      return (
        e < o("WAWebAck").ACK.SENT
          ? (t = s._(/*BTDS*/ "Pending"))
          : e === o("WAWebAck").ACK.SENT
            ? (t = s._(/*BTDS*/ "Sent"))
            : e === o("WAWebAck").ACK.RECEIVED
              ? (t = s._(/*BTDS*/ "Delivered"))
              : (t = s._(/*BTDS*/ "Read")),
        t
      );
    }
    l.getMessageStatusLabel = e;
  },
  226,
);
