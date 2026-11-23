__d(
  "WAWebMusicSendLogger",
  [
    "WALogger",
    "WAWebChatThreadLogging",
    "WAWebWamEnumMusicProduct",
    "WamMusicSendFalcoEvent",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    async function u(t) {
      var n = await c(t);
      if (n != null)
        try {
          r("WamMusicSendFalcoEvent").log(function () {
            return {
              message_key_hash: n,
              music_product: o("WAWebWamEnumMusicProduct").MUSIC_PRODUCT.CHATS,
            };
          });
        } catch (t) {
          o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[music] send not logged: Falco log failed",
                ])),
            )
            .catching(r("getErrorSafe")(t))
            .sendLogs("music-send-log-failed");
        }
    }
    async function c(e) {
      try {
        return await o("WAWebChatThreadLogging").getMessageIDHMAC(e.toString());
      } catch (e) {
        return (
          o("WALogger")
            .WARN(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[music] send not logged: message key hash failed",
                ])),
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs("music-send-log-hash-failed"),
          null
        );
      }
    }
    l.logMusicSend = u;
  },
  98,
);
