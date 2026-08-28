__d(
  "HorizonWebMqttChannel",
  [
    "CurrentUser",
    "MqttChannel",
    "MqttEnv",
    "MqttEnvInitializer",
    "MqttWebConfig",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    r("MqttEnvInitializer").initialize();
    function e() {
      var e;
      return (
        o("MqttEnv").setIsUserLoggedInNow(r("CurrentUser").isLoggedIn),
        new (r("MqttChannel"))({
          appId: (e = r("MqttWebConfig")).appID,
          capabilities: e.capabilities,
          chatVisibility: !0,
          clientCapabilities: e.clientCapabilities,
          endpoint: e.endpoint,
          initialSubscribedTopics: e.subscribedTopics,
          pageId: null,
          phpOverride: e.hostNameOverride,
          pollingEndpoint: e.pollingEndpoint,
          userFbid: e.fbid,
        })
      );
    }
    var s = null;
    function u() {
      return (s == null && (s = e()), s);
    }
    function c() {
      s != null && (s.shutdown(), (s = null));
    }
    ((l.getHorizonWebMqttChannelInstance = u), (l.shutdownAndClear = c));
  },
  98,
);
