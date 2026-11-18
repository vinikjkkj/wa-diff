__d(
  "WAWebHandlePlaceholderMsgKeyHashUtils",
  [
    "WABase64",
    "WACryptoHmac",
    "WAWebMessageKeyHashInput",
    "WAWebUserPrefsMultiDevice",
    "asyncToGeneratorRuntime",
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
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield c();
          if (!t) return null;
          var n = u(o("WAWebMessageKeyHashInput").getMessageKeyHashInput(e.id)),
            r = yield o("WACryptoHmac").hmacSha256(t, n);
          return o("WABase64").encodeB64(r);
        })),
        m.apply(this, arguments)
      );
    }
    l.getMessageKeyHash = d;
  },
  98,
);
