__d(
  "WMIWABridgeApi",
  ["MAWBridgeSendAndReceive"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return function () {
        for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
          n[r] = arguments[r];
        return o("MAWBridgeSendAndReceive").sendAndReceive("backend", "waapi", {
          args: n,
          type: e,
        });
      };
    }
    var s = {
        debugGetSignalDbDump: e("debugGetSignalDbDump"),
        getCurrentUserDeviceList: e("getCurrentUserDeviceList"),
        getDevices: e("getDevices"),
        getIdentityKeys: e("getIdentityKeys"),
        queryGroups: e("queryGroups"),
        removeCurrentDevice: e("removeCurrentDevice"),
        removeDevice: e("removeDevice"),
      },
      u = s;
    l.default = u;
  },
  98,
);
