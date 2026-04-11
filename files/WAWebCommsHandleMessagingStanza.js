__d(
  "WAWebCommsHandleMessagingStanza",
  [
    "WAParsableWapNode",
    "WAWebCommsHandleStanzaUtils",
    "WAWebCreateNackFromStanza",
    "WAWebHandleMsg",
    "WAWebHandleMsgReceipt",
    "WAWebPostUnknownStanzaMetric",
    "WAWebWid",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.attrs;
      switch (e.tag) {
        case "message":
          {
            var n = e.attrs.from;
            if (!r("WAWebWid").isNewsletter(n == null ? void 0 : n.toString()))
              return r("WAWebHandleMsg")(e).catch(function (t) {
                return o(
                  "WAWebCommsHandleStanzaUtils",
                ).handleMessageParsingFailure(e, t);
              });
          }
          break;
        case "receipt":
          try {
            if (
              !o("WAWebCommsHandleStanzaUtils").isCallReceipt(e) &&
              t.type !== "retry"
            )
              return r("WAWebHandleMsgReceipt")(e);
          } catch (t) {
            return t instanceof o("WAParsableWapNode").XmppParsingFailure
              ? (o("WAWebPostUnknownStanzaMetric").postUnknownStanzaMetric(e),
                o("WAWebCreateNackFromStanza").createNackFromStanza(
                  e,
                  o("WAWebCreateNackFromStanza").NackReason.ParsingError,
                ))
              : o("WAWebCreateNackFromStanza").createNackFromStanza(
                  e,
                  o("WAWebCreateNackFromStanza").NackReason.UnhandledError,
                );
          }
      }
    }
    l.handleMessagingStanza = e;
  },
  98,
);
