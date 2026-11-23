__d(
  "WAWebHandlePlaceholderMsgKeyHashUtils",
  [
    "WABase64",
    "WACryptoHmac",
    "WAWebMessageKeyHashInput",
    "WAWebUserPrefsMultiDevice",
  ],
  function (t, n, r, o, a, i, l) {
    var e = null,
      s = new TextEncoder();
    function u(e) {
      return s.encode(e).buffer;
    }
    function c() {
      return (
        e ||
          (e = o("WAWebUserPrefsMultiDevice")
            .getChatThreadLoggingSecretB64()
            .then(function (e) {
              return e == null ? null : o("WABase64").decodeB64(e);
            })),
        e
      );
    }
    async function d(e) {
      var t = await c();
      if (!t) return null;
      var n = u(o("WAWebMessageKeyHashInput").getMessageKeyHashInput(e.id)),
        r = await o("WACryptoHmac").hmacSha256(t, n);
      return o("WABase64").encodeB64(r);
    }
    l.getMessageKeyHash = d;
  },
  98,
);
