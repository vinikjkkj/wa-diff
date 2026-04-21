__d(
  "WACryptoLibraryConfig",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      signalFutureMessagesMax: 2e3,
      S508658AutoAcknowledgeStaleSessions: !1,
    };
    function l() {
      return e;
    }
    function s(t) {
      e = t;
    }
    ((i.getCryptoLibraryConfig = l), (i.setCryptoLibraryConfig = s));
  },
  66,
);
