__d(
  "MqttEnvInitializer",
  [
    "CurrentMessengerUser",
    "MqttEnv",
    "MqttEnvConfigStorage",
    "MqttEnvGk",
    "MqttLogger",
    "Random",
    "clearTimeout",
    "setTimeoutAcrossTransitions",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      o("MqttEnv").Env.initialize(
        r("Random").random,
        o("CurrentMessengerUser").isLoggedInNow,
        r("clearTimeout"),
        r("setTimeoutAcrossTransitions"),
        function () {
          return r("MqttLogger").getInstance();
        },
        r("MqttEnvGk"),
        e != null ? e : null,
        null,
        null,
        o("MqttEnvConfigStorage").configRead,
        o("MqttEnvConfigStorage").configWrite,
      );
    }
    var s = { genGk: r("MqttEnvGk"), initialize: e };
    l.default = s;
  },
  98,
);
