__d(
  "WAWebWindowsNativeBridgeParseCallAutoSwitchData",
  [
    "WAWebVoipJsonParserNative",
    "WAWebVoipWaCallEnums",
    "err",
    "isStringNullOrEmpty",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = o("WAWebVoipJsonParserNative").parseJsonFromNativeBridge(e);
      if (t == null) throw r("err")("Invalid call auto switch data");
      var n = t.CurrentCallId,
        a = t.OldCallId;
      if (a == null && n == null) return null;
      if (r("isStringNullOrEmpty")(a) || r("isStringNullOrEmpty")(n))
        throw r("err")("Invalid call auto switch data");
      return {
        oldCallId: a,
        currentCallId: n,
        reason: o("WAWebVoipWaCallEnums").CallAutoSwitchReason.cast(t.Reason),
      };
    }
    l.parseWindowsCallAutoSwitchData = e;
  },
  98,
);
