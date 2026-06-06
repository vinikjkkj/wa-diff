__d(
  "P2XFunnelIdGenerator",
  ["WABase64", "WACryptoHmac", "WAEncodeString", "WAWebUserPrefsMultiDevice"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e(e, t) {
        ((this.$1 = e), (this.$2 = t));
      }
      var t = e.prototype;
      return (
        (t.genFunnelInfo = async function () {
          var e = await o(
            "WAWebUserPrefsMultiDevice",
          ).getChatThreadLoggingSecretB64();
          return e == null || e.trim().length === 0
            ? { funnel_id: "", is_logging_secret_available: !1 }
            : {
                funnel_id: o("WABase64").encodeB64(
                  await o("WACryptoHmac").hmacSha256(
                    o("WAEncodeString").toUtf8(e + this.$1),
                    o("WAEncodeString").toUtf8(this.$2),
                  ),
                ),
                is_logging_secret_available: !0,
              };
        }),
        e
      );
    })();
    l.P2XFunnelIdGenerator = e;
  },
  98,
);
