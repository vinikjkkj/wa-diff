__d(
  "FBMqttChannel",
  ["MqttChannel", "MqttConfig", "MqttEnvInitializer"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    r("MqttEnvInitializer").initialize();
    var s = new (r("MqttChannel"))({
      appId: (e = r("MqttConfig")).appID,
      capabilities: e.capabilities,
      chatVisibility: !1,
      clientCapabilities: e.clientCapabilities,
      endpoint: e.endpoint,
      initialSubscribedTopics: e.subscribedTopics,
      phpOverride: e.hostNameOverride,
      pollingEndpoint: e.pollingEndpoint,
      userFbid: e.fbid,
    });
    l.default = s;
  },
  98,
);
