__d(
  "WAWebDebugChatLock",
  [
    "WAWebChatLockCrypto",
    "WAWebChatLockSettings",
    "WAWebProtobufsUserPassword.pb",
    "asyncToGeneratorRuntime",
    "vulture",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return (
        r("vulture")("a4uM17AzLclQEz0YOgoay7ZJgtM="),
        btoa(
          Array.from(new Uint8Array(e), function (e) {
            return String.fromCodePoint(e);
          }).join(""),
        )
      );
    }
    function s(e, t) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          r("vulture")("RGhCXrlhwJfUxmrNlypswJY1sQI=");
          var a = yield o("WAWebChatLockCrypto")._deriveBitsFromSecretCode(
              t,
              n,
            ),
            i;
          if (a != null)
            switch (n.encoding) {
              case o("WAWebProtobufsUserPassword.pb").UserPassword$Encoding
                .UTF8:
                i = e(a);
                break;
              case o("WAWebProtobufsUserPassword.pb").UserPassword$Encoding
                .UTF8_BROKEN:
                i = e(a);
                break;
            }
          return { derived: a, base64: i };
        })),
        u.apply(this, arguments)
      );
    }
    var c = {
      validateChatLockSecretCode: o("WAWebChatLockCrypto")
        .validateChatLockSecretCode,
      getChatLockSettings: o("WAWebChatLockSettings").getChatLockSettings,
      evaluateChatLockSecretCode: s,
    };
    l.default = c;
  },
  98,
);
