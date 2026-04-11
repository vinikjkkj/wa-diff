__d(
  "MqttEnvGk",
  ["MqttEnv", "MqttLogger", "gkx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      switch (e) {
        case o("MqttEnv").MqttGkNames.mqtt_waterfall_log_client_sampling:
          return r("gkx")("21119");
        case o("MqttEnv").MqttGkNames.mqtt_ws_polling_enabled:
          return !0;
        case o("MqttEnv").MqttGkNames.mqtt_lp_use_fetch:
          return r("gkx")("21120");
        case o("MqttEnv").MqttGkNames.mqtt_fast_lp:
          return !1;
        case o("MqttEnv").MqttGkNames.mqtt_lp_no_delay:
          return r("gkx")("21122");
        case o("MqttEnv").MqttGkNames.mqtt_enable_publish_over_polling:
          return r("gkx")("21123");
        case o("MqttEnv").MqttGkNames.mqttweb_global_connection_counter:
          return r("gkx")("21124");
        default:
          return (
            r("MqttLogger")
              .getInstance()
              .logError(new Error("unknown gk"), "Unknown GK value " + e),
            !1
          );
      }
    }
    l.default = e;
  },
  98,
);
