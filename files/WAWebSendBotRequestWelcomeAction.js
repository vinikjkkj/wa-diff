__d(
  "WAWebSendBotRequestWelcomeAction",
  [
    "WAJobOrchestratorTypes",
    "WAMemoizeConcurrent",
    "WAWebBackendRuntime",
    "WAWebBotMessageSecret",
    "WAWebBotUtils",
    "WAWebBotWelcomeRequestSync",
    "WAWebDBProcessMessage",
    "WAWebHatchLogging",
    "WAWebMessageSendService",
    "WAWebMessageStoreService",
    "WAWebMsgDataUtils",
    "WAWebMsgModel",
    "WAWebMsgType",
    "WAWebOrchestratorNonPersistedJob",
    "WAWebSendMsgRecordAction",
    "WAWebSendMsgResultAction",
    "WAWebSyncdCoreApi",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e, t) {
      return t != null
        ? u(e, t)
        : s({ chat: e, signal: new AbortController().signal });
    }
    var s = r("WAMemoizeConcurrent")(
      function (e) {
        var t = e.chat;
        return t.id.toString();
      },
      async function (e) {
        var t = e.chat;
        return u(t);
      },
    );
    async function u(e, t) {
      var n = e.id,
        a = self.crypto.getRandomValues(new Uint8Array(32)),
        i = await o("WAWebBotMessageSecret").genBotMsgSecretFromMsgSecret(a),
        l = babelHelpers.extends(
          {},
          await o("WAWebMsgDataUtils").genOutgoingMsgData(
            e,
            o("WAWebMsgType").MSG_TYPE.PROTOCOL,
          ),
          {
            type: o("WAWebMsgType").MSG_TYPE.PROTOCOL,
            kind: o("WAWebMsgType").MsgKind.Protocol,
            subtype: "bot_request_welcome",
            messageSecret: a,
            botMessageSecret: new Uint8Array(i),
            botDeepLinkToken: t,
          },
        ),
        s = new (o("WAWebMsgModel").Msg)(l);
      ((e.hasRequestedWelcomeMsg = !0),
        await o("WAWebOrchestratorNonPersistedJob")
          .createNonPersistedJob(
            "sendMessage",
            async function () {
              await (
                o("WAWebBackendRuntime").isWebDiBackendEnabled()
                  ? o("WAWebBackendRuntime").runtime(
                      o("WAWebMessageStoreService").MessageStoreService,
                    ).storeMessages
                  : o("WAWebDBProcessMessage").storeMessages
              )([l], n);
              var e = await (
                o("WAWebBackendRuntime").isWebDiBackendEnabled()
                  ? o("WAWebBackendRuntime").runtime(
                      o("WAWebMessageSendService").MessageSendService,
                    ).sendMsgRecord
                  : o("WAWebSendMsgRecordAction").sendMsgRecord
              )(s);
              if (
                e.messageSendResult ===
                o("WAWebSendMsgResultAction").SendMsgResult.OK
              ) {
                o("WAWebBotUtils").isHatchBot(n) &&
                  o("WAWebHatchLogging").logHatchRequestWelcomeMsgSent();
                var t = await r(
                  "WAWebBotWelcomeRequestSync",
                ).getBotWelcomeRequestSetMutation(n, !0);
                await o("WAWebSyncdCoreApi").lockForSync(
                  ["chat"],
                  [t],
                  async function (e) {
                    var t = e[0];
                    return t.merge(n.toString(), {
                      hasRequestedWelcomeMsg: !0,
                    });
                  },
                );
              }
              return e;
            },
            { priority: o("WAJobOrchestratorTypes").JobPriority.UI_ACTION },
          )
          .waitUntilCompleted());
    }
    l.sendBotRequestWelcome = e;
  },
  98,
);
