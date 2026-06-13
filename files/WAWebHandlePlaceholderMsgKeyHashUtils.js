__d(
  "WAWebHandlePlaceholderMsgKeyHashUtils",
  [
    "WABase64",
    "WACryptoHmac",
    "WAWebUserPrefsMultiDevice",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e = null,
      s = new TextEncoder(),
      u = function (t) {
        return s.encode(t).buffer;
      };
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
          var t,
            n,
            r,
            a,
            i = yield c();
          if (!i) return null;
          var l = u(
              e.id.id +
                (e.id.fromMe ? "1" : "0") +
                ((t =
                  (n = e.id.remote) == null
                    ? void 0
                    : n.toString({ legacy: !0 })) != null
                  ? t
                  : "") +
                ((r =
                  (a = e.id.participant) == null
                    ? void 0
                    : a.toString({ legacy: !0 })) != null
                  ? r
                  : ""),
            ),
            s = yield o("WACryptoHmac").hmacSha256(i, l);
          return o("WABase64").encodeB64(s);
        })),
        m.apply(this, arguments)
      );
    }
    l.getMessageKeyHash = d;
  },
  98,
);
