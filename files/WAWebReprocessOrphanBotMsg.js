__d(
  "WAWebReprocessOrphanBotMsg",
  [
    "Promise",
    "WALogger",
    "WAWap",
    "WAWebHandleMsgParser",
    "WAWebHandleMsgProcess",
    "WAWebHandleMsgTypes.flow",
    "WAWebMsgProcessingDecryptApi",
    "WAWebProcessMsgInfoForLid",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p;
    function _(e, t) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, a) {
          o("WALogger")
            .LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "reprocessOrphanBotMsg: stanza=",
                  "",
                ])),
              t,
            )
            .tags("messaging");
          var i;
          try {
            i = yield o("WAWap").decodeStanza(a, function (e) {
              return (p || (p = n("Promise"))).resolve(e);
            });
          } catch (e) {
            return (
              o("WALogger")
                .ERROR(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "reprocessOrphanBotMsg: failed to decode stanza=",
                      "",
                    ])),
                  t,
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("bot-orphan-replay-decode-failed"),
              "unrecoverable"
            );
          }
          var l;
          try {
            l = o("WAWebHandleMsgParser").incomingMsgParser.parse(i).success;
          } catch (e) {
            return (
              o("WALogger")
                .ERROR(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "reprocessOrphanBotMsg: failed to parse stanza=",
                      "",
                    ])),
                  t,
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("bot-orphan-replay-parse-failed"),
              "unrecoverable"
            );
          }
          if (l == null)
            return (
              o("WALogger")
                .ERROR(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "reprocessOrphanBotMsg: parser returned no result for stanza=",
                      "",
                    ])),
                  t,
                )
                .sendLogs("bot-orphan-replay-parse-empty"),
              "unrecoverable"
            );
          (delete l.msgInfo.offline,
            yield o("WAWebProcessMsgInfoForLid").maybeProcessMsgInfoForLid({
              msgInfo: l.msgInfo,
              msgMeta: l.msgMeta,
            }));
          var _ = yield o("WAWebMsgProcessingDecryptApi").decryptE2EPayload(
              l,
              o("WAWebHandleMsgProcess").processDecryptedMessageProto,
            ),
            f = _.result;
          if (f !== o("WAWebHandleMsgTypes.flow").E2EProcessResult.SUCCESS) {
            var h = g(f);
            return (
              h === "unrecoverable"
                ? o("WALogger")
                    .ERROR(
                      d ||
                        (d = babelHelpers.taggedTemplateLiteralLoose([
                          "reprocessOrphanBotMsg: replay cannot succeed stanza=",
                          " result=",
                          "",
                        ])),
                      t,
                      String(f),
                    )
                    .sendLogs("bot-orphan-replay-unsuccessful")
                : o("WALogger")
                    .WARN(
                      m ||
                        (m = babelHelpers.taggedTemplateLiteralLoose([
                          "reprocessOrphanBotMsg: replay did not succeed stanza=",
                          " result=",
                          "",
                        ])),
                      t,
                      String(f),
                    )
                    .sendLogs("bot-orphan-replay-retryable", {
                      sampling: 0.01,
                    }),
              h
            );
          }
          return "replayed";
        })),
        f.apply(this, arguments)
      );
    }
    function g(e) {
      return e ===
        o("WAWebHandleMsgTypes.flow").E2EProcessResult.PARSE_VALIDATION_ERROR ||
        e === o("WAWebHandleMsgTypes.flow").E2EProcessResult.HSM_MISMATCH
        ? "unrecoverable"
        : "retryable";
    }
    l.reprocessOrphanBotMsg = _;
  },
  98,
);
