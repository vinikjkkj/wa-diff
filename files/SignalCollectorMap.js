__d(
  "SignalCollectorMap",
  [
    "BDConnectionRTTSignalCollector",
    "BDHeartbeatSignalCollector",
    "BDHeartbeatV2SignalCollector",
    "BDKeyDownUpSignalCollector",
    "BDLanguagesSignalCollector",
    "BDMimeTypeCountSignalCollector",
    "BDMousePresenceSignalCollector",
    "BDNavigatorAppVersionSignalCollector",
    "BDNavigatorHardwareConcurrencySignalCollector",
    "BDNavigatorMaxTouchPointSignalCollector",
    "BDNavigatorNotificationPermissionSignalCollector",
    "BDNavigatorPlatformSignalCollector",
    "BDNavigatorPluginsFileExtensionsSignalCollector",
    "BDNavigatorUserAgentSignalCollector",
    "BDNavigatorVendorSignalCollector",
    "BDNotificationPermissionSignalCollector",
    "BDPluginCountSignalCollector",
    "BDTimezoneOffsetSignalCollector",
    "BDTouchPresenceSignalCollector",
    "BDWebdriverSignalCollector",
    "BDWebglSupportSignalCollector",
    "BDWindowHistoryLengthSignalCollector",
    "BDWindowOuterDimensionSignalCollector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        get: function (t) {
          switch (t) {
            case 3e4:
              return r("BDWebdriverSignalCollector").get();
            case 30001:
              return r("BDPluginCountSignalCollector").get();
            case 30002:
              return r("BDMimeTypeCountSignalCollector").get();
            case 30003:
              return r("BDLanguagesSignalCollector").get();
            case 30004:
              return r("BDConnectionRTTSignalCollector").get();
            case 30005:
              return r("BDWindowOuterDimensionSignalCollector").get();
            case 30007:
              return r("BDNotificationPermissionSignalCollector").get();
            case 30008:
              return r(
                "BDNavigatorNotificationPermissionSignalCollector",
              ).get();
            case 30012:
              return r("BDNavigatorVendorSignalCollector").get();
            case 30013:
              return r("BDNavigatorAppVersionSignalCollector").get();
            case 30015:
              return r("BDNavigatorPlatformSignalCollector").get();
            case 30018:
              return r("BDNavigatorHardwareConcurrencySignalCollector").get();
            case 30019:
              return r("BDNavigatorPluginsFileExtensionsSignalCollector").get();
            case 30022:
              return r("BDWebglSupportSignalCollector").get();
            case 30040:
              return r("BDTimezoneOffsetSignalCollector").get();
            case 30093:
              return r("BDNavigatorMaxTouchPointSignalCollector").get();
            case 30094:
              return r("BDNavigatorUserAgentSignalCollector").get();
            case 30095:
              return r("BDWindowHistoryLengthSignalCollector").get();
            case 30100:
              return r("BDKeyDownUpSignalCollector").get();
            case 30106:
              return r("BDMousePresenceSignalCollector").get();
            case 30107:
              return r("BDTouchPresenceSignalCollector").get();
            case 38e3:
              return r("BDHeartbeatSignalCollector").get();
            case 38001:
              return r("BDHeartbeatV2SignalCollector").get();
          }
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
