__d(
  "WAWebWindowsNativeBridgeParseUpdate1to1CallLogData",
  ["WAWebVoipJsonParserNative", "WAWebWidFactory", "err"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = o("WAWebVoipJsonParserNative").parseJsonFromNativeBridge(e);
      if (t == null) throw r("err")("Invalid update 1to1 call log data");
      return {
        CallId: t.CallId,
        Result: t.Result,
        PeerJid: o("WAWebWidFactory").createWid(t.PeerJid.str),
      };
    }
    l.parseWindowsUpdate1to1CallLogData = e;
  },
  98,
);
