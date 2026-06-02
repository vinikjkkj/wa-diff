__d(
  "WAWebDebugChatLock",
  [
    "WAWebChatLockCrypto",
    "WAWebChatLockSettings",
    "WAWebProtobufsUserPassword.pb",
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
    async function s(t, n) {
      var r = await o("WAWebChatLockCrypto")._deriveBitsFromSecretCode(t, n),
        a;
      if (r != null)
        switch (n.encoding) {
          case o("WAWebProtobufsUserPassword.pb").UserPassword$Encoding.UTF8:
            a = e(r);
            break;
          case o("WAWebProtobufsUserPassword.pb").UserPassword$Encoding
            .UTF8_BROKEN:
            a = e(r);
            break;
        }
      return { derived: r, base64: a };
    }
    var u = {
      validateChatLockSecretCode: o("WAWebChatLockCrypto")
        .validateChatLockSecretCode,
      getChatLockSettings: o("WAWebChatLockSettings").getChatLockSettings,
      evaluateChatLockSecretCode: s,
    };
    l.default = u;
  },
  98,
);
