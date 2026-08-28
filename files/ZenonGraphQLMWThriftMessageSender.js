__d(
  "ZenonGraphQLMWThriftMessageSender",
  [
    "ChannelClientID",
    "FBLogger",
    "MultiwayCommonTypes",
    "Promise",
    "RpZenonBinaryThriftSignalingSitevarConfig.experimental",
    "ZenonActorHooks",
    "ZenonMWThriftMessageDebugLogger",
    "ZenonMWThriftMessageLogger",
    "ZenonMWThriftMessageMap",
    "ZenonMWThriftMessageReliabilityLogger",
    "ZenonMWThriftMessageTranslator",
    "ZenonMWThriftSendMessageMutation",
    "ZenonMWTranslatorUtils",
    "ZenonValidateMWThriftMessage",
    "asyncToGeneratorRuntime",
    "err",
    "filterNulls",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (function () {
        function t(e) {
          this.$3 = e;
          var t = r(
            "RpZenonBinaryThriftSignalingSitevarConfig.experimental",
          ).supported_message_types_mqtt.map(function (e) {
            return o("ZenonMWThriftMessageMap").messageTypeFromString(e);
          });
          this.$4 = new Set(r("filterNulls")(t));
        }
        var a = t.prototype;
        return (
          (a.handleResponse = function (t) {
            var e = this.$1;
            if (e == null)
              throw r("FBLogger")("rtc_www").mustfixThrow(
                "Should never have null message receiver",
              );
            var n = t.header || null,
              a = t.body || null;
            if (n != null && a != null) {
              var i = { messageBody: a, messageHeader: n };
              (r("ZenonMWThriftMessageDebugLogger").logMWThriftMessage(
                "RECEIVED",
                "GraphQL Thrift",
                i,
              ),
                o("ZenonMWThriftMessageReliabilityLogger").logReceivedMessage(
                  i,
                ),
                this.$2 &&
                  this.$2({ mwThriftMessage: i, name: "mwThriftMessageRecv" }));
              var l = o("ZenonMWThriftMessageTranslator").toSignalingMessage(i);
              if (l == null) return;
              (e(l),
                o("ZenonMWThriftMessageReliabilityLogger").logProcessingMessage(
                  i,
                ));
            }
          }),
          (a.$5 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t) {
                (o("ZenonMWThriftMessageReliabilityLogger").logSendingMessage(
                  t,
                ),
                  r("ZenonMWThriftMessageDebugLogger").logMWThriftMessage(
                    "SENDING",
                    "GraphQL Thrift",
                    t,
                  ),
                  this.$2 &&
                    o("ZenonMWThriftMessageLogger").logSentMessage(t, this.$2));
                try {
                  var n = yield o(
                    "ZenonMWThriftSendMessageMutation",
                  ).sendMessage(e, t, this.$3);
                  (o("ZenonMWThriftMessageReliabilityLogger").logSentMessage(t),
                    this.$2 &&
                      this.$2({
                        mwThriftMessage: t,
                        name: "mwThriftMessageSent",
                      }),
                    this.handleResponse(n));
                } catch (e) {
                  var a = r("getErrorSafe")(e),
                    i = a.message || "Message Send Error";
                  o(
                    "ZenonMWThriftMessageReliabilityLogger",
                  ).logSendMessageFailed(t, "[GraphQL Thrift] " + i);
                  var l = o("ZenonMWThriftMessageMap").messageTypeToString(
                    t.messageHeader.type,
                  );
                  r(
                    "ZenonMWThriftMessageDebugLogger",
                  ).logSendMultiwayThriftMessageFailure(i, l, a);
                }
              },
            );
            function t(t, n) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.sendMessage = function (a) {
            var t = o("ZenonMWThriftMessageTranslator").toMWThriftMessage(a);
            if (!t || !r("ZenonValidateMWThriftMessage")(t))
              return (e || (e = n("Promise"))).reject(
                r("err")("Invalid MW Thrift message"),
              );
            if (
              t.messageHeader.type != null &&
              !this.$4.has(t.messageHeader.type)
            )
              return (e || (e = n("Promise"))).resolve();
            var i = t.messageHeader.type,
              l = {
                appId: o("ZenonMWTranslatorUtils").getMWAppID(),
                deviceId: r("ChannelClientID").getID(),
                userId: a.getHeader().userInfo.userID,
              };
            return l.userId !==
              o("ZenonActorHooks").ZenonActor.getAccountID() ||
              i !== o("MultiwayCommonTypes").MessageType.DATA_MESSAGE
              ? this.$5(l, t)
              : (e || (e = n("Promise"))).reject(
                  r("err")("GraphQL only sends DATA_MESSAGE for Page users"),
                );
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
