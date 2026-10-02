__d(
  "WAPreKeysStanzaUtils",
  ["WAWap"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t;
      return (t = o("WAWap")).wap(
        "key",
        null,
        t.wap("id", null, t.BIG_ENDIAN_CONTENT(e.id, 3)),
        t.wap("value", null, e.keyPair.publicKey),
      );
    }
    function s(e) {
      var t;
      return (t = o("WAWap")).wap(
        "skey",
        null,
        t.wap("id", null, t.BIG_ENDIAN_CONTENT(e.id, 3)),
        t.wap("value", null, e.keyPair.publicKey),
        t.wap("signature", null, e.signature),
      );
    }
    ((l.xmppPreKey = e), (l.xmppSignedPreKey = s));
  },
  98,
);
