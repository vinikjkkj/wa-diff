__d(
  "MDCMqttChannel",
  [
    "CurrentUser",
    "MqttChannel",
    "MqttEnv",
    "MqttEnvInitializer",
    "MqttWebConfig",
    "uuidv4",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    r("MqttEnvInitializer").initialize();
    function e(e) {
      o("MqttEnv").setIsUserLoggedInNow(r("CurrentUser").isLoggedIn);
      var t =
        r("CurrentUser").getAppID() == null
          ? 0xc7269b363f3c
          : Number(r("CurrentUser").getAppID());
      return new (r("MqttChannel"))({
        appId: t,
        capabilities: r("MqttWebConfig").capabilities,
        chatVisibility: !0,
        clientCapabilities: r("MqttWebConfig").clientCapabilities,
        clientType: "websocket",
        deviceId: r("uuidv4")(),
        endpoint: r("MqttWebConfig").endpoint,
        initialSubscribedTopics: r("MqttWebConfig").subscribedTopics,
        phpOverride: r("MqttWebConfig").hostNameOverride,
        pollingEndpoint: r("MqttWebConfig").pollingEndpoint,
        userFbid: r("CurrentUser").getPossiblyNonFacebookUserID(),
      });
    }
    var s = null;
    function u(t) {
      return (s == null && (s = e(t)), s);
    }
    function c() {
      return s;
    }
    function d() {
      s != null && (s.shutdown(), (s = null));
    }
    ((l.getMDCMqttChannelInstance = u),
      (l.getMDCMqttChannelInstanceDoNotCreate = c),
      (l.shutdownAndClear = d));
  },
  98,
);
