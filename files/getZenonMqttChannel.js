__d(
  "getZenonMqttChannel",
  [
    "CurrentUser",
    "FBMqttChannel",
    "HorizonWebMqttChannel",
    "IGDOverLSMqttChannel",
    "LiveChatWidgetMqttChannel",
    "MDCMqttChannel",
    "OculusMqttChannel",
    "RpWebMqttEnabledAppIds.experimental",
    "ZenonAppProvider",
    "ZenonMqttChannel",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new Set(r("RpWebMqttEnabledAppIds.experimental").APP_IDS);
    function s() {
      return o("ZenonAppProvider").isInstagramApp()
        ? o("IGDOverLSMqttChannel").getInstance()
        : o("ZenonAppProvider").isOculusCastingSite()
          ? o("OculusMqttChannel").getOculusMqttChannelInstance()
          : o("ZenonAppProvider").isHorizonApp()
            ? o("HorizonWebMqttChannel").getHorizonWebMqttChannelInstance()
            : o("ZenonAppProvider").isMDCApp()
              ? o("MDCMqttChannel").getMDCMqttChannelInstance()
              : o("ZenonAppProvider").isWidgetLiveChatApp()
                ? o(
                    "LiveChatWidgetMqttChannel",
                  ).getLiveChatWidgetMqttChannelInstance()
                : e.has(Number(r("CurrentUser").getAppID()))
                  ? r("ZenonMqttChannel")
                  : r("FBMqttChannel");
    }
    l.default = s;
  },
  98,
);
