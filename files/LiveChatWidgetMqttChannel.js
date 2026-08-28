__d(
  "LiveChatWidgetMqttChannel",
  ["MqttChannel", "MqttEnv", "MqttEnvInitializer", "MqttWebConfig"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    r("MqttEnvInitializer").initialize();
    function e() {
      var e;
      return (
        o("MqttEnv").setIsUserLoggedInNow(function () {
          return !0;
        }),
        new (r("MqttChannel"))({
          appId: 0x70127cc7da0a0,
          capabilities: (e = r("MqttWebConfig")).capabilities,
          chatVisibility: !1,
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
    ((l.getLiveChatWidgetMqttChannelInstance = u), (l.shutdownAndClear = c));
  },
  98,
);
