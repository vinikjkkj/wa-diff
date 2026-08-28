__d(
  "ZenonPeerID",
  ["invariant"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = "MW_PEER_ID";
    function u(t) {
      return (
        t.length > 0 || s(0, 33504),
        t === "MW_PEER_ID" ? e : (isNaN(t) === !1 || s(0, 33551, t), t)
      );
    }
    function c(t) {
      return isNaN(t) || t === e ? null : t;
    }
    ((l.ZenonMWPeerID = e),
      (l.convertStringToPeerID = u),
      (l.convertPeerIDForLogging = c));
  },
  98,
);
