__d(
  "WAWebWindowsNativeBridgeParseSyncDeviceData",
  ["WAWebVoipJsonParserNative", "WAWebWidFactory", "err"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = o("WAWebVoipJsonParserNative").parseJsonFromNativeBridge(e);
      if (t == null) throw r("err")("Invalid call ending data");
      return t.map(function (e) {
        return babelHelpers.extends({}, e, {
          UserRawJid: o("WAWebWidFactory").createWid(e.UserRawJid),
        });
      });
    }
    l.parseWindowsSyncDeviceData = e;
  },
  98,
);
