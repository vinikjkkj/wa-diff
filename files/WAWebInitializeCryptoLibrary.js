__d(
  "WAWebInitializeCryptoLibrary",
  ["WACryptoLibraryConfig", "WAWebABProps", "WAWebPQGatingUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      o("WACryptoLibraryConfig").setCryptoLibraryConfig({
        signalFutureMessagesMax: o("WAWebABProps").getABPropConfigValue(
          "web_signal_future_messages_max",
        ),
        S508658AutoAcknowledgeStaleSessions: !0,
        isPqKeysUploadEnabled: o("WAWebPQGatingUtils").isPqKeysUploadEnabled(),
        isPq1on1MessageEnabled:
          o("WAWebPQGatingUtils").isPq1on1MessageEnabled(),
        loadPqKeysForDigest: e,
      });
    }
    l.initializeCryptoLibrary = e;
  },
  98,
);
