__d(
  "WAWebReprocessOrphanBotMsg",
  [
    "WALogger",
    "WAWap",
    "WAWebHandleMsgParser",
    "WAWebHandleMsgProcess",
    "WAWebHandleMsgTypes",
    "WAWebMessageInsertDeferredPlaceholder",
    "WAWebMsgProcessingDecryptApi",
    "WAWebProcessMsgInfoForLid",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m;
    async function p(t, n) {
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
      var a;
      try {
        a = await o("WAWap").decodeStanza(n, function (e) {
          return Promise.resolve(e);
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
      var i;
      try {
        i = o("WAWebHandleMsgParser").incomingMsgParser.parse(a).success;
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
      if (i == null)
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
      (delete i.msgInfo.offline,
        await o("WAWebProcessMsgInfoForLid").maybeProcessMsgInfoForLid({
          entryPoint: "reprocess-orphan-bot-msg",
          msgInfo: i.msgInfo,
          msgMeta: i.msgMeta,
        }),
        await o(
          "WAWebMessageInsertDeferredPlaceholder",
        ).maybeRemoveDeferredPlaceholder(i.msgInfo));
      var l = await o("WAWebMsgProcessingDecryptApi").decryptE2EPayload(
          i,
          o("WAWebHandleMsgProcess").processDecryptedMessageProto,
        ),
        p = l.result;
      if (p !== o("WAWebHandleMsgTypes").E2EProcessResult.SUCCESS) {
        var f = _(p);
        return (
          f === "unrecoverable"
            ? o("WALogger")
                .ERROR(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "reprocessOrphanBotMsg: replay cannot succeed stanza=",
                      " result=",
                      "",
                    ])),
                  t,
                  String(p),
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
                  String(p),
                )
                .sendLogs("bot-orphan-replay-retryable", { sampling: 0.01 }),
          f
        );
      }
      return "replayed";
    }
    function _(e) {
      return e ===
        o("WAWebHandleMsgTypes").E2EProcessResult.PARSE_VALIDATION_ERROR ||
        e === o("WAWebHandleMsgTypes").E2EProcessResult.HSM_MISMATCH
        ? "unrecoverable"
        : "retryable";
    }
    l.reprocessOrphanBotMsg = p;
  },
  98,
);
