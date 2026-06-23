__d(
  "WAWebSendHatchMetadataRequest",
  [
    "Promise",
    "WAJobOrchestratorTypes",
    "WALogger",
    "WATimeUtils",
    "WAWebBotUtils",
    "WAWebHatchFrontendGating",
    "WAWebHatchMetadataExchangeManager",
    "WAWebMsgKey",
    "WAWebMsgModel",
    "WAWebMsgType",
    "WAWebOrchestratorNonPersistedJob",
    "WAWebPonyfillsCryptoRandomUUID",
    "WAWebSendMsgRecordAction",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s, u;
    function c(t, a) {
      if (!o("WAWebHatchFrontendGating").isHatchIntegrationEnabled())
        return (u || (u = n("Promise"))).resolve({ outcome: "send_failed" });
      var i = r("WAWebPonyfillsCryptoRandomUUID")(),
        l = r("WAWebHatchMetadataExchangeManager").register(i, a);
      return (
        d(i, t).catch(function (t) {
          (o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "hatch-metadata: dispatch failed id=",
                  "",
                ])),
              i,
            )
            .catching(r("getErrorSafe")(t))
            .sendLogs("hatch-metadata-dispatch-failed"),
            r("WAWebHatchMetadataExchangeManager").failRequest(
              i,
              "send_failed",
            ));
        }),
        l
      );
    }
    function d(e, t) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = o("WAWebBotUtils").HATCH_BOT_FBID_WID,
            a = new (o("WAWebMsgModel").Msg)({
              id: new (r("WAWebMsgKey"))({
                fromMe: !0,
                remote: n,
                id: yield r("WAWebMsgKey").newId(),
                participant: void 0,
              }),
              from: o("WAWebUserPrefsMeUser").getMeUserOrThrow(),
              to: n,
              t: o("WATimeUtils").unixTime(),
              type: o("WAWebMsgType").MSG_TYPE.PROTOCOL,
              subtype: "hatch_metadata_sync",
              hatchMetadataSync: { type: "req", requestId: e, request: t },
            });
          (o("WALogger").LOG(
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
                function () {
                  return o("WAWebSendMsgRecordAction").sendMsgRecord(a);
                },
                {
                  priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION,
                },
              )
              .fireAndForget());
        })),
        m.apply(this, arguments)
      );
    }
    l.sendHatchMetadataRequest = c;
  },
  98,
);
