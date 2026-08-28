__d(
  "ConfigEngineStateConfigEngineStateTypes",
  ["$InternalEnum"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("$InternalEnum")({
        ERROR: 0,
        NONE: 1,
        LIGHT: 2,
        MODERATE: 3,
        SEVERE: 4,
        CRITICAL: 5,
        EMERGENCY: 6,
        SHUTDOWN: 7,
      }),
      l = n("$InternalEnum")({ UNKNOWN: 0, DEFAULT: 1, SCREEN_SHARE: 2 }),
      s = n("$InternalEnum")({ UNKNOWN: 0, CELL: 1, WIFI: 2 });
    a.exports = {
      DeviceStatsTriggerLevel: e,
      NetworkConnectionType: s,
      RenderedStreamType: l,
    };
  },
  null,
);
