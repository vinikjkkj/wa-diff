__d(
  "ZenonMqttChannel",
  [
    "CurrentUser",
    "FBLogger",
    "MqttChannel",
    "MqttEnv",
    "MqttEnvInitializer",
    "MqttWebConfig",
    "getErrorSafe",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      var e = -1;
      try {
        if (
          (r("MqttEnvInitializer").initialize(),
          o("MqttEnv").setIsUserLoggedInNow(r("CurrentUser").isLoggedIn),
          r("gkx")("11152") &&
            r("CurrentUser").getAppID() === String(0x4d31ba8e7e89d))
        )
          e = 949958857019662;
        else {
          var t;
          e = Number(
            (t = r("CurrentUser").getAppID()) != null
              ? t
              : r("MqttWebConfig").appID,
          );
        }
        return new (r("MqttChannel"))({
          appId: e,
          capabilities: r("MqttWebConfig").capabilities,
          chatVisibility: !1,
          clientCapabilities: r("MqttWebConfig").clientCapabilities,
          endpoint: r("MqttWebConfig").endpoint,
          initialSubscribedTopics: r("MqttWebConfig").subscribedTopics,
          phpOverride: r("MqttWebConfig").hostNameOverride,
          pollingEndpoint: r("MqttWebConfig").pollingEndpoint,
          userFbid: r("MqttWebConfig").fbid,
        });
      } catch (t) {
        var n = r("getErrorSafe")(t);
        throw (
          r("FBLogger")("rtc_www")
            .catching(n)
            .warn("[ZenonMqttChannel][%d] failed to create MqttChannel", e),
          n
        );
      }
    }
    var s = e(),
      u = s;
    l.default = u;
  },
  98,
);
