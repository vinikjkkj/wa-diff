__d(
  "WAWebSendHatchMetadataRequest",
  [
    "WAJobOrchestratorTypes",
    "WALogger",
    "WAWebBackendRuntime",
    "WAWebBotUtils",
    "WAWebChatCollection",
    "WAWebChatModel",
    "WAWebDBProcessMessage",
    "WAWebHatchFrontendGating",
    "WAWebHatchMetadataExchangeManager",
    "WAWebMessageSendService",
    "WAWebMessageStoreService",
    "WAWebMsgDataUtils",
    "WAWebMsgModel",
    "WAWebMsgType",
    "WAWebOrchestratorNonPersistedJob",
    "WAWebPonyfillsCryptoRandomUUID",
    "WAWebSendMsgRecordAction",
    "cr:17681",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s;
    function u(t, n) {
      if (!o("WAWebHatchFrontendGating").isHatchIntegrationEnabled())
        return Promise.resolve({ outcome: "send_failed" });
      var a = r("WAWebPonyfillsCryptoRandomUUID")(),
        i = r("WAWebHatchMetadataExchangeManager").register(a, n);
      return (
        c(a, t).catch(function (t) {
          (o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "hatch-metadata: dispatch failed id=",
                  "",
                ])),
              a,
            )
            .catching(r("getErrorSafe")(t))
            .sendLogs("hatch-metadata-dispatch-failed"),
            r("WAWebHatchMetadataExchangeManager").failRequest(
              a,
              "send_failed",
            ));
        }),
        i
      );
    }
    async function c(e, t) {
      var r,
        a =
          (r = o("WAWebChatCollection").ChatCollection.get(
            o("WAWebBotUtils").HATCH_BOT_FBID_WID,
          )) != null
            ? r
            : new (o("WAWebChatModel").Chat)({
                id: o("WAWebBotUtils").HATCH_BOT_FBID_WID,
              }),
        i = babelHelpers.extends(
          {},
          await o("WAWebMsgDataUtils").genOutgoingMsgData(
            a,
            o("WAWebMsgType").MSG_TYPE.PROTOCOL,
          ),
          {
            type: o("WAWebMsgType").MSG_TYPE.PROTOCOL,
            kind: o("WAWebMsgType").MsgKind.Protocol,
            subtype: "hatch_metadata_sync",
            hatchMetadataSync: { type: "req", requestId: e, request: t },
            messageSecret: self.crypto.getRandomValues(new Uint8Array(32)),
          },
        ),
        l = new (o("WAWebMsgModel").Msg)(i);
      (n("cr:17681") == null ||
        n("cr:17681").noteOutboundMsgId(e, l.id.toString()),
        o("WALogger").LOG(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "hatch-metadata: sending req method=",
              " id=",
              "",
            ])),
          t.method,
          e,
        ),
        o("WAWebOrchestratorNonPersistedJob")
          .createNonPersistedJob(
            "sendMessage",
            async function () {
              return (
                await (
                  o("WAWebBackendRuntime").isWebDiBackendEnabled()
                    ? o("WAWebBackendRuntime").runtime(
                        o("WAWebMessageStoreService").MessageStoreService,
                      ).storeMessages
                    : o("WAWebDBProcessMessage").storeMessages
                )([i], a.id),
                (o("WAWebBackendRuntime").isWebDiBackendEnabled()
                  ? o("WAWebBackendRuntime").runtime(
                      o("WAWebMessageSendService").MessageSendService,
                    ).sendMsgRecord
                  : o("WAWebSendMsgRecordAction").sendMsgRecord)(l)
              );
            },
            { priority: o("WAJobOrchestratorTypes").JobPriority.UI_ACTION },
          )
          .fireAndForget());
    }
    l.sendHatchMetadataRequest = u;
  },
  98,
);
