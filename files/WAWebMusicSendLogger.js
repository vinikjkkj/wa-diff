__d(
  "WAWebMusicSendLogger",
  [
    "WALogger",
    "WAWebChatThreadLogging",
    "WAWebWamEnumMusicProduct",
    "WamMusicSendFalcoEvent",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = yield d(t);
          if (n != null)
            try {
              r("WamMusicSendFalcoEvent").log(function () {
                return {
                  message_key_hash: n,
                  music_product: o("WAWebWamEnumMusicProduct").MUSIC_PRODUCT
                    .CHATS,
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
        })),
        c.apply(this, arguments)
      );
    }
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          try {
            return yield o("WAWebChatThreadLogging").getMessageIDHMAC(
              e.toString(),
            );
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
        })),
        m.apply(this, arguments)
      );
    }
    l.logMusicSend = u;
  },
  98,
);
