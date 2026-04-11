__d(
  "WAWebCommsHandleStanzaUtils",
  [
    "WAJids",
    "WALogger",
    "WAParsableWapNode",
    "WAWeb-dexie",
    "WAWebCreateNackFromStanza",
    "WAWebPostIncomingMessageDropMetric",
    "WAWebPostUnknownStanzaMetric",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c;
    function d(t, n) {
      if (n instanceof o("WAParsableWapNode").XmppParsingFailure)
        return (
          o("WAWebPostUnknownStanzaMetric").postUnknownStanzaMetric(t),
          o(
            "WAWebPostIncomingMessageDropMetric",
          ).postIncomingMessageDropInvalidStanza(t),
          o("WALogger")
            .LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "handleMsg: error while parsing message: ",
                  "",
                ])),
              n,
            )
            .tags("messaging")
            .sendLogs("failedParsingMessageStanza", { sampling: 0.01 }),
          o("WAWebCreateNackFromStanza").createNackFromStanza(
            t,
            o("WAWebCreateNackFromStanza").NackReason.ParsingError,
          )
        );
      if (n instanceof r("WAWeb-dexie").DexieError) {
        (o(
          "WAWebPostIncomingMessageDropMetric",
        ).postIncomingMessageDropDBOperationFailed(t),
          o("WALogger")
            .ERROR(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "handleMsg: drop msg",
                ])),
            )
            .catching(n)
            .sendLogs("incoming-message-drop-db-operation-failed", {
              sampling: 0.01,
            }));
        return;
      }
      return (
        o("WALogger")
          .ERROR(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "handleMsg: drop msg, node: ",
                "",
              ])),
            o("WAJids").maybeSanitizeLogLineText(t.toString()),
          )
          .verbose(),
        o("WALogger")
          .ERROR(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "handleMsg: drop msg",
              ])),
          )
          .catching(n)
          .sendLogs("incoming-message-drop-internal-error", { sampling: 0.01 }),
        o(
          "WAWebPostIncomingMessageDropMetric",
        ).postIncomingMessageDropInternalError(t),
        o("WAWebCreateNackFromStanza").createNackFromStanza(
          t,
          o("WAWebCreateNackFromStanza").NackReason.UnhandledError,
        )
      );
    }
    function m(e) {
      if (Array.isArray(e.content) && e.content.length > 0) {
        var t = e.content[0].tag;
        return t === "offer" || t === "accept" || t === "reject";
      }
      return !1;
    }
    ((l.handleMessageParsingFailure = d), (l.isCallReceipt = m));
  },
  98,
);
