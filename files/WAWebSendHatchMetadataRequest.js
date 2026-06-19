__d(
  "WAWebSendHatchMetadataRequest",
  [
    "WAJobOrchestratorTypes",
    "WALogger",
    "WATimeUtils",
    "WAWebBotUtils",
    "WAWebHatchFrontendGating",
    "WAWebMsgKey",
    "WAWebMsgModel",
    "WAWebMsgType",
    "WAWebOrchestratorNonPersistedJob",
    "WAWebPonyfillsCryptoRandomUUID",
    "WAWebSendMsgRecordAction",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          if (o("WAWebHatchFrontendGating").isHatchIntegrationEnabled()) {
            var n = o("WAWebBotUtils").HATCH_BOT_FBID_WID,
              a = r("WAWebPonyfillsCryptoRandomUUID")(),
              i = new (r("WAWebMsgKey"))({
                fromMe: !0,
                remote: n,
                id: yield r("WAWebMsgKey").newId(),
                participant: void 0,
              }),
              l = new (o("WAWebMsgModel").Msg)({
                id: i,
                from: o("WAWebUserPrefsMeUser").getMeUserOrThrow(),
                to: n,
                t: o("WATimeUtils").unixTime(),
                type: o("WAWebMsgType").MSG_TYPE.PROTOCOL,
                subtype: "hatch_metadata_sync",
                hatchMetadataSync: { type: "req", requestId: a, request: t },
              });
            (o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "hatch-metadata: sending req method=",
                  " id=",
                  "",
                ])),
              t.method,
              a,
            ),
              o("WAWebOrchestratorNonPersistedJob")
                .createNonPersistedJob(
                  "sendMessage",
                  function () {
                    return o("WAWebSendMsgRecordAction").sendMsgRecord(l);
                  },
                  {
                    priority: o("WAJobOrchestratorTypes").JOB_PRIORITY
                      .UI_ACTION,
                  },
                )
                .fireAndForget());
          }
        })),
        u.apply(this, arguments)
      );
    }
    l.sendHatchMetadataRequest = s;
  },
  98,
);
