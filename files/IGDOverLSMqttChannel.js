__d(
  "IGDOverLSMqttChannel",
  [
    "CurrentUser",
    "Env",
    "MqttChannel",
    "MqttEnv",
    "MqttEnvInitializer",
    "MqttWebConfig",
    "Promise",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s;
    r("MqttEnvInitializer").initialize();
    function u(e) {
      o("MqttEnv").setIsUserLoggedInNow(r("CurrentUser").isLoggedIn);
      var t =
        r("CurrentUser").getAppID() == null
          ? 936619743392459
          : Number(r("CurrentUser").getAppID());
      return new (r("MqttChannel"))({
        appId: t,
        capabilities: r("MqttWebConfig").capabilities,
        chatVisibility: !0,
        clientCapabilities: r("MqttWebConfig").clientCapabilities,
        clientType: "cookie_auth",
        deviceId: e,
        endpoint:
          (s || (s = r("Env"))).ig_mqtt_wss_endpoint ||
          "wss://edge-chat.instagram.com/chat",
        initialSubscribedTopics: r("MqttWebConfig").subscribedTopics,
        phpOverride: r("MqttWebConfig").hostNameOverride,
        pollingEndpoint:
          (s || (s = r("Env"))).ig_mqtt_polling_endpoint ||
          "https://edge-chat.instagram.com/mqtt/pull",
        userFbid: r("CurrentUser").getPossiblyNonFacebookUserID(),
      });
    }
    var c = null,
      d;
    function m(e) {
      c == null && (c = u(e));
      var t = c;
      return (d == null || d(t), t);
    }
    function p() {
      return new (e || (e = n("Promise")))(function (e) {
        c
          ? e(m())
          : (d = function (n) {
              e(n);
            });
      });
    }
    function _() {
      c != null && (c.shutdown(), (c = null));
    }
    ((l.getInstance = m), (l.waitAndGetInstance = p), (l.shutdownAndClear = _));
  },
  98,
);
