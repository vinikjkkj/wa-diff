__d(
  "WAWebSendBotRequestWelcomeAction",
  [
    "WAJobOrchestratorTypes",
    "WAMemoizeConcurrent",
    "WAWebBotMessageSecret",
    "WAWebBotUtils",
    "WAWebBotWelcomeRequestSync",
    "WAWebDBProcessMessage",
    "WAWebHatchLogging",
    "WAWebMsgDataUtils",
    "WAWebMsgModel",
    "WAWebMsgType",
    "WAWebOrchestratorNonPersistedJob",
    "WAWebSendMsgRecordAction",
    "WAWebSendMsgResultAction",
    "WAWebSyncdCoreApi",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          return t != null
            ? c(e, t)
            : u({ chat: e, signal: new AbortController().signal });
        })),
        s.apply(this, arguments)
      );
    }
    var u = r("WAMemoizeConcurrent")(
      function (e) {
        var t = e.chat;
        return t.id.toString();
      },
      (function () {
        var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.chat;
          return c(t);
        });
        return function (t) {
          return e.apply(this, arguments);
        };
      })(),
    );
    function c(e, t) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var a = e.id,
            i = self.crypto.getRandomValues(new Uint8Array(32)),
            l = yield o("WAWebBotMessageSecret").genBotMsgSecretFromMsgSecret(
              i,
            ),
            s = babelHelpers.extends(
              {},
              yield o("WAWebMsgDataUtils").genOutgoingMsgData(
                e,
                o("WAWebMsgType").MSG_TYPE.PROTOCOL,
              ),
              {
                type: o("WAWebMsgType").MSG_TYPE.PROTOCOL,
                kind: o("WAWebMsgType").MsgKind.Protocol,
                subtype: "bot_request_welcome",
                messageSecret: i,
                botMessageSecret: new Uint8Array(l),
              },
            ),
            u = new (o("WAWebMsgModel").Msg)(
              babelHelpers.extends({}, s, { botDeepLinkToken: t }),
            );
          ((e.hasRequestedWelcomeMsg = !0),
            yield o("WAWebOrchestratorNonPersistedJob")
              .createNonPersistedJob(
                "sendMessage",
                n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                  yield o("WAWebDBProcessMessage").storeMessages([s], a);
                  var e = yield o("WAWebSendMsgRecordAction").sendMsgRecord(u);
                  if (
                    e.messageSendResult ===
                    o("WAWebSendMsgResultAction").SendMsgResult.OK
                  ) {
                    o("WAWebBotUtils").isHatchBot(a) &&
                      o("WAWebHatchLogging").logHatchRequestWelcomeMsgSent();
                    var t = yield r(
                      "WAWebBotWelcomeRequestSync",
                    ).getBotWelcomeRequestSetMutation(a, !0);
                    yield o("WAWebSyncdCoreApi").lockForSync(
                      ["chat"],
                      [t],
                      (function () {
                        var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                          function* (e) {
                            var t = e[0];
                            return t.merge(a.toString(), {
                              hasRequestedWelcomeMsg: !0,
                            });
                          },
                        );
                        return function (t) {
                          return e.apply(this, arguments);
                        };
                      })(),
                    );
                  }
                  return e;
                }),
                {
                  priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION,
                },
              )
              .waitUntilCompleted());
        })),
        d.apply(this, arguments)
      );
    }
    l.sendBotRequestWelcome = e;
  },
  98,
);
