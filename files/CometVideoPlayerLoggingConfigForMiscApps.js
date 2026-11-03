__d(
  "CometVideoPlayerLoggingConfigForMiscApps",
  [
    "CometVideoPlayerLoggingConfigForDisabledLogging",
    "FBVideoMetadataProvider",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return (e == null ? void 0 : e.disableLogging) === !0
        ? o(
            "CometVideoPlayerLoggingConfigForDisabledLogging",
          ).createCometVideoPlayerLoggingConfigForDisabledLogging()
        : {
            loggingToSNAPLCreateMetadataProvider: o("FBVideoMetadataProvider")
              .createFBVideoMetadataProvider,
            loggingToSNAPLEnabled: !1,
          };
    }
    l.createCometVideoPlayerLoggingConfigForMiscApps = e;
  },
  98,
);
