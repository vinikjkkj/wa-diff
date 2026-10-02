__d(
  "WABridgedAPIHandler",
  ["WAAPI"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
      queryGroups: function () {
        return r("WAAPI").queryGroups.apply(r("WAAPI"), arguments);
      },
      getDevices: function () {
        return r("WAAPI").getDevices.apply(r("WAAPI"), arguments);
      },
      removeCurrentDevice: function () {
        return r("WAAPI").removeCurrentDevice();
      },
      removeDevice: function () {
        return r("WAAPI").removeDevice.apply(r("WAAPI"), arguments);
      },
      getCurrentUserDeviceList: function () {
        return r("WAAPI").getCurrentUserDeviceList();
      },
      getIdentityKeys: function () {
        return r("WAAPI").getIdentityKeys();
      },
      debugGetSignalDbDump: function () {
        return r("WAAPI").debugGetSignalDbDump();
      },
    };
    l.waapi = e;
  },
  98,
);
