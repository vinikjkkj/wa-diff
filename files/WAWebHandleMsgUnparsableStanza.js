__d(
  "WAWebHandleMsgUnparsableStanza",
  [
    "WALogger",
    "WAWebCreateNackFromStanza",
    "WAWebHandleMsgParser",
    "WAWebMessageInsertDebugPlaceholderWorkerCompatible",
    "WAWebPostIncomingMessageDropMetric",
    "WAWebPostUnknownStanzaMetric",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c;
    function d(t, n) {
      (r("gkx")("26258")
        ? o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "handleMsg: error while parsing message stanza",
                ])),
            )
            .tags("messaging")
        : o("WALogger")
            .ERROR(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "handleMsg: error while parsing message stanza: ",
                  ", node: ",
                  "",
                ])),
              n,
              t.toString(),
            )
            .tags("messaging"),
        o("WAWebPostUnknownStanzaMetric").postUnknownStanzaMetric(t));
      var a = o("WAWebHandleMsgParser").incomingMsgParserForAckOnly.parse(t);
      if (a.error)
        return (
          p(a.error),
          o(
            "WAWebPostIncomingMessageDropMetric",
          ).postIncomingMessageDropInvalidStanza(t),
          o("WAWebCreateNackFromStanza").NackReason.ParsingError
        );
      var i = a.success,
        l = i.externalId,
        u = i.msgInfo,
        c = i.offline,
        d = m(t, n, a.success);
      return (
        o(
          "WAWebMessageInsertDebugPlaceholderWorkerCompatible",
        ).maybeInsertDebugPlaceholder({
          externalId: l,
          nackReason: d,
          msgInfo: u,
          offline: c,
        }),
        _(n),
        d
      );
    }
    function m(e, t, n) {
      var r = n.from,
        a = n.type;
      return a == null
        ? (o(
            "WAWebPostIncomingMessageDropMetric",
          ).postIncomingMessageDropUnknownMessageType(e),
          o("WAWebCreateNackFromStanza").NackReason.UnrecognizedStanzaType)
        : t.reason ===
            "" +
              o("WAWebCreateNackFromStanza").NackReason
                .InvalidHostedCompanionStanza
          ? (o(
              "WAWebPostIncomingMessageDropMetric",
            ).postIncomingMessageDropForCoexV2RelayOrHostedCompanion(e, r),
            o("WAWebCreateNackFromStanza").NackReason
              .InvalidHostedCompanionStanza)
          : (o(
              "WAWebPostIncomingMessageDropMetric",
            ).postIncomingMessageDropInvalidStanza(e),
            o("WAWebCreateNackFromStanza").NackReason.ParsingError);
    }
    function p(e) {
      o("WALogger")
        .WARN(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "failedParsingMessage: ",
              "",
            ])),
          e,
        )
        .tags("messaging")
        .sendLogs("msg-stanza-parsing-failed-xmpp-no-ack", { sampling: 0.01 });
    }
    function _(e) {
      o("WALogger")
        .WARN(
          c ||
            (c = babelHelpers.taggedTemplateLiteralLoose([
              "failedParsingMessage: ",
              "",
            ])),
          e,
        )
        .tags("messaging")
        .sendLogs("msg-stanza-parsing-failed-xmpp", { sampling: 0.01 });
    }
    l.handleUnparsableMsgStanza = d;
  },
  98,
);
