__d(
  "ZenonMqttMWThriftMessageSender",
  [
    "Promise",
    "RpZenonBinaryThriftSignalingSitevarConfig.experimental",
    "ZenonActorHooks",
    "ZenonMWThriftMessageDebugLogger",
    "ZenonMWThriftMessageLogger",
    "ZenonMWThriftMessageMap",
    "ZenonMWThriftMessageReliabilityLogger",
    "ZenonMWThriftMessageSerializer",
    "ZenonMWThriftMessageTranslator",
    "ZenonSignalingConstants",
    "ZenonUserActionLogger",
    "ZenonValidateMWThriftMessage",
    "asyncToGeneratorRuntime",
    "err",
    "filterNulls",
    "getErrorSafe",
    "getZenonMqttChannel",
    "waitForZenonMqttConnected",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (function () {
        function t() {
          var e = r(
            "RpZenonBinaryThriftSignalingSitevarConfig.experimental",
          ).supported_message_types_mqtt.map(function (e) {
            return o("ZenonMWThriftMessageMap").messageTypeFromString(e);
          });
          this.$3 = new Set(r("filterNulls")(e));
        }
        var a = t.prototype;
        return (
          (a.$4 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = this,
                  n = !0;
                if (
                  (yield r("waitForZenonMqttConnected")().catch(function (e) {
                    (r("ZenonUserActionLogger").logCheckpoint({
                      checkpoint:
                        "Not sending MWS Thrift message through MQTT because MQTT could not connect. Error: " +
                        e,
                    }),
                      (n = !1));
                  }),
                  !!n)
                ) {
                  (o("ZenonMWThriftMessageReliabilityLogger").logSendingMessage(
                    e,
                  ),
                    r("ZenonMWThriftMessageDebugLogger").logMWThriftMessage(
                      "SENDING",
                      "MQTT Thrift",
                      e,
                    ),
                    this.$2 &&
                      o("ZenonMWThriftMessageLogger").logSentMessage(
                        e,
                        this.$2,
                      ));
                  var a = r("getZenonMqttChannel")();
                  try {
                    yield a
                      .publishBinary(
                        o("ZenonSignalingConstants").T_RTC_MULTI_MQTT_TOPIC,
                        o(
                          "ZenonMWThriftMessageSerializer",
                        ).serializeMWThriftMessage(e),
                      )
                      .then(
                        function () {
                          (o(
                            "ZenonMWThriftMessageReliabilityLogger",
                          ).logSentMessage(e),
                            t.$2 &&
                              t.$2({
                                mwThriftMessage: e,
                                name: "mwThriftMessageSent",
                              }));
                        },
                        function (n) {
                          t.$5(e, n.toString());
                        },
                      );
                  } catch (t) {
                    this.$5(e, r("getErrorSafe")(t).toString());
                  }
                }
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.$5 = function (t, n) {
            var e = n != null ? n : "MQTT Thrift Message Send Error";
            (o("ZenonMWThriftMessageReliabilityLogger").logSendMessageFailed(
              t,
              "[MQTT Thrift] " + e,
            ),
              r(
                "ZenonMWThriftMessageDebugLogger",
              ).logSendMultiwayThriftMessageFailure(
                e,
                o("ZenonMWThriftMessageMap").messageTypeToString(
                  t.messageHeader.type,
                ),
              ));
          }),
          (a.sendMessage = function (a) {
            var t = o("ZenonMWThriftMessageTranslator").toMWThriftMessage(a);
            return !t || !r("ZenonValidateMWThriftMessage")(t)
              ? (e || (e = n("Promise"))).reject(
                  r("err")("Invalid MW Thrift message"),
                )
              : t.messageHeader.type != null &&
                  !this.$3.has(t.messageHeader.type)
                ? (e || (e = n("Promise"))).resolve()
                : a.getHeader().userInfo.userID !==
                      o("ZenonActorHooks").ZenonActor.getAccountID() &&
                    !o("ZenonActorHooks").ZenonActor.isInstagramUser() &&
                    !o("ZenonActorHooks").ZenonActor.isOculusUser() &&
                    !o("ZenonActorHooks").ZenonActor.isKadabraUser() &&
                    !o("ZenonActorHooks").ZenonActor.isLiveChatOnlyPerson()
                  ? (e || (e = n("Promise"))).reject(
                      r("err")("MQTT doesn't work with Page users yet"),
                    )
                  : this.$4(t);
          }),
          (a.setMessageReceiver = function (t) {
            this.$1 = t;
          }),
          (a.setLoggingEventHandler = function (t) {
            this.$2 = t;
          }),
          t
        );
      })();
    l.default = s;
  },
  98,
);
