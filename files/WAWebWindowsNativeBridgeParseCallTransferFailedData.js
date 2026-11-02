__d(
  "WAWebWindowsNativeBridgeParseCallTransferFailedData",
  ["WAWebVoipJsonParserNative", "WAWebVoipWaCallEnums", "err"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t,
        n = o("WAWebVoipJsonParserNative").parseJsonFromNativeBridge(e);
      if (n == null) throw r("err")("Invalid call transfer failed data");
      return {
        rootCallId: n.RootCallId,
        rootCallCreatorJid: n.RootCallCreator,
        failure:
          (t = o("WAWebVoipWaCallEnums").CallTransferFailure.cast(n.Failure)) !=
          null
            ? t
            : o("WAWebVoipWaCallEnums").CallTransferFailure.Terminal,
      };
    }
    l.parseWindowsCallTransferFailedData = e;
  },
  98,
);
