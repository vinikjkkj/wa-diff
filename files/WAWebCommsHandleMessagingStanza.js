__d(
  "WAWebCommsHandleMessagingStanza",
  [
    "WAParsableWapNode",
    "WAWebCommsHandleStanzaUtils",
    "WAWebCreateNackFromStanza",
    "WAWebHandleMsg",
    "WAWebHandleMsgReceipt",
    "WAWebPostUnknownStanzaMetric",
    "WAWebStatusGatingUtils",
    "WAWebWid",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t,
        n = e.attrs;
      switch (
        (e.tag === "status" &&
          !r("WAWebWid").isNewsletter(
            (t = n.from) == null ? void 0 : t.toString(),
          ) &&
          o("WAWebStatusGatingUtils").isStatusStanzaReceiveEnabled() &&
          (e.tag = "message"),
        e.tag)
      ) {
        case "message":
          {
            var a = e.attrs.from;
            if (!r("WAWebWid").isNewsletter(a == null ? void 0 : a.toString()))
              return r("WAWebHandleMsg")(e).catch(function (t) {
                return o(
                  "WAWebCommsHandleStanzaUtils",
                ).handleMessageParsingFailure(e, r("getErrorSafe")(t));
              });
          }
          break;
        case "receipt":
          try {
            if (
              !o("WAWebCommsHandleStanzaUtils").isCallReceipt(e) &&
              n.type !== "retry" &&
              n.type !== "enc_rekey_retry"
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
