__d(
  "WAWebCommsHandleMessagingStanza",
  [
    "WAParsableWapNode",
    "WAWap",
    "WAWebCommsClassifyStatusStanza",
    "WAWebCommsHandleStanzaUtils",
    "WAWebCreateNackFromStanza",
    "WAWebHandleMsg",
    "WAWebHandleMsgReceipt",
    "WAWebPostUnknownStanzaMetric",
    "WAWebStanzaHandlersV2",
    "WAWebStatusGatingUtils",
    "WAWebWid",
    "cr:22472",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t,
        n = e.attrs,
        a = !1,
        i = !1;
      if (
        e.tag === "status" &&
        !r("WAWebWid").isNewsletter(
          (t = n.from) == null ? void 0 : t.toString(),
        )
      ) {
        var l,
          u,
          c = o("WAWebStatusGatingUtils").isStatusDeliverViaSmaxEnabled()
            ? o("WAWebCommsClassifyStatusStanza").classifyIncomingStatusStanza(
                e,
              )
            : null;
        ((a =
          (l = c == null ? void 0 : c.isGroupStatus) != null
            ? l
            : r("WAWebWid").isGroup(
                (u = n.from) == null ? void 0 : u.toString(),
              )),
          (i = !0),
          (e.tag = "message"));
      }
      switch (e.tag) {
        case "message":
          {
            var d = e.attrs.from;
            if (
              !r("WAWebWid").isNewsletter(d == null ? void 0 : d.toString())
            ) {
              var m = s();
              return m(e, { isGroupStatusStanza: a, isStatusStanza: i }).catch(
                function (t) {
                  var n = i
                    ? new (o("WAWap").WapNode)("status", e.attrs, e.content)
                    : e;
                  return o(
                    "WAWebCommsHandleStanzaUtils",
                  ).handleMessageParsingFailure(n, r("getErrorSafe")(t));
                },
              );
            }
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
    function s() {
      return n("cr:22472") != null &&
        o("WAWebStanzaHandlersV2").shouldHandleStanzaV2()
        ? n("cr:22472")
        : r("WAWebHandleMsg");
    }
    l.handleMessagingStanza = e;
  },
  98,
);
