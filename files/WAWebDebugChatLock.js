__d(
  "WAWebDebugChatLock",
  [
    "WAWebChatLockCrypto",
    "WAWebChatLockSettings",
    "WAWebProtobufsUserPassword.pb",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return btoa(
        Array.from(new Uint8Array(e), function (e) {
          return String.fromCodePoint(e);
        }).join(""),
      );
    }
    function s(e, t) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          var r = yield o("WAWebChatLockCrypto")._deriveBitsFromSecretCode(
              t,
              n,
            ),
            a;
          if (r != null)
            switch (n.encoding) {
              case o("WAWebProtobufsUserPassword.pb").UserPassword$Encoding
                .UTF8:
                a = e(r);
                break;
              case o("WAWebProtobufsUserPassword.pb").UserPassword$Encoding
                .UTF8_BROKEN:
                a = e(r);
                break;
            }
          return { derived: r, base64: a };
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
