__d(
  "WAWebHandlePlaceholderMsgKeyHashUtils",
  ["WABase64", "WACryptoHmac", "WAWebABProps", "WAWebUserPrefsMultiDevice"],
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
    async function d(e) {
      var t,
        n,
        r,
        a,
        i = await c();
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
        s = await o("WACryptoHmac").hmacSha256(i, l);
      return o("WABase64").encodeB64(s);
    }
    function m() {
      return o("WAWebABProps").getABPropConfigValue(
        "placeholder_message_key_hash_logging",
      );
    }
    ((l.getMessageKeyHash = d), (l.messageKeyHashEnabled = m));
  },
  98,
);
