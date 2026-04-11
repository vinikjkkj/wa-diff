__d(
  "WAWebLimitSharingPropMappingUtils",
  ["WAWebProtobufsProtocol.pb"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      switch (e) {
        case "1":
          return o("WAWebProtobufsProtocol.pb").LimitSharing$Trigger
            .CHAT_SETTING;
        case "2":
          return o("WAWebProtobufsProtocol.pb").LimitSharing$Trigger
            .BIZ_SUPPORTS_FB_HOSTING;
        case "3":
          return o("WAWebProtobufsProtocol.pb").LimitSharing$Trigger
            .UNKNOWN_GROUP;
        default:
          return o("WAWebProtobufsProtocol.pb").LimitSharing$Trigger.UNKNOWN;
      }
    }
    function s(e) {
      switch (e) {
        case "CHAT_SETTING":
          return o("WAWebProtobufsProtocol.pb").LimitSharing$Trigger
            .CHAT_SETTING;
        case "BIZ_SUPPORTS_FB_HOSTING":
          return o("WAWebProtobufsProtocol.pb").LimitSharing$Trigger
            .BIZ_SUPPORTS_FB_HOSTING;
        default:
          return o("WAWebProtobufsProtocol.pb").LimitSharing$Trigger.UNKNOWN;
      }
    }
    ((l.getLimitSharingTriggerFromHistorySyncStubParameter = e),
      (l.getLimitSharingTriggerFromGroupSettingsChange = s));
  },
  98,
);
