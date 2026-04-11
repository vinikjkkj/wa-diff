__d(
  "WAWebWindowsNativeBridgeParseRejectedDecryptionFailureData",
  ["WAWebVoipJsonParserNative", "WAWebWidFactory", "err"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = o("WAWebVoipJsonParserNative").parseJsonFromNativeBridge(e);
      if (t == null) throw r("err")("Invalid rejected decryption data");
      return babelHelpers.extends({}, t, {
        PeerDeviceJid: o("WAWebWidFactory").createWid(t.PeerDeviceJid),
      });
    }
    l.parseWindowsRejectedDecryptionFailureData = e;
  },
  98,
);
