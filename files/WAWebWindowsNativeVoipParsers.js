__d(
  "WAWebWindowsNativeVoipParsers",
  [
    "WAWebWindowsNativeBridgeParseCallEndingData",
    "WAWebWindowsNativeBridgeParseCallMissedData",
    "WAWebWindowsNativeBridgeParseCallStateChangedData",
    "WAWebWindowsNativeBridgeParseGroupInfoChangedData",
    "WAWebWindowsNativeBridgeParseRejectedDecryptionFailureData",
    "WAWebWindowsNativeBridgeParseSyncDeviceData",
    "WAWebWindowsNativeBridgeParseUpdate1to1CallLogData",
    "WAWebWindowsNativeBridgeParseUpdateJoinableCallLogData",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        parseUpdateJoinableCallLogData: o(
          "WAWebWindowsNativeBridgeParseUpdateJoinableCallLogData",
        ).parseWindowsNativeUpdateJoinableCallLogData,
        parseRejectedDecryptionFailureData: o(
          "WAWebWindowsNativeBridgeParseRejectedDecryptionFailureData",
        ).parseWindowsRejectedDecryptionFailureData,
        parseSyncDeviceData: o("WAWebWindowsNativeBridgeParseSyncDeviceData")
          .parseWindowsSyncDeviceData,
        parseCallEndingData: o("WAWebWindowsNativeBridgeParseCallEndingData")
          .parseWindowsCallEndingData,
        parseCallMissedData: o("WAWebWindowsNativeBridgeParseCallMissedData")
          .parseWindowsCallMissedData,
        parseCallStateChangedData: o(
          "WAWebWindowsNativeBridgeParseCallStateChangedData",
        ).parseWindowsCallStateChangedData,
        parseUpdate1to1CallLogData: o(
          "WAWebWindowsNativeBridgeParseUpdate1to1CallLogData",
        ).parseWindowsUpdate1to1CallLogData,
        parseGroupInfoChangedData: o(
          "WAWebWindowsNativeBridgeParseGroupInfoChangedData",
        ).parseWindowsGroupInfoChangedData,
        parseRelayListUpdateData: function (t) {
          throw r("err")(
            "Relay list updates are not supported on Windows platform",
          );
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
