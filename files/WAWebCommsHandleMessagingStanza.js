__d(
  "WAWebCommsHandleMessagingStanza",
  [
    "WALogger",
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
    var e;
    function s(t) {
      var n,
        a = t.attrs,
        i = !1;
      if (
        t.tag === "status" &&
        !r("WAWebWid").isNewsletter(
          (n = a.from) == null ? void 0 : n.toString(),
        )
      )
        if (o("WAWebStatusGatingUtils").isStatusStanzaReceiveEnabled()) {
          var l;
          ((i = r("WAWebWid").isGroup(
            (l = a.from) == null ? void 0 : l.toString(),
          )),
            (t.tag = "message"));
        } else {
          var s = o("WAWebCreateNackFromStanza").createNackFromStanza(
            t,
            o("WAWebCreateNackFromStanza").NackReason.UnsupportedMessage,
          );
          return (
            s !== "NO_ACK" &&
              o("WALogger")
                .WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "handleMessagingStanza: received <status> stanza while receive is disabled; nacking",
                    ])),
                )
                .sendLogs("status-stanza-recv-disabled"),
            s
          );
        }
      switch (t.tag) {
        case "message":
          {
            var u = t.attrs.from;
            if (!r("WAWebWid").isNewsletter(u == null ? void 0 : u.toString()))
              return r("WAWebHandleMsg")(t, { isGroupStatusStanza: i }).catch(
                function (e) {
                  return o(
                    "WAWebCommsHandleStanzaUtils",
                  ).handleMessageParsingFailure(t, r("getErrorSafe")(e));
                },
              );
          }
          break;
        case "receipt":
          try {
            if (
              !o("WAWebCommsHandleStanzaUtils").isCallReceipt(t) &&
              a.type !== "retry" &&
              a.type !== "enc_rekey_retry"
            )
              return r("WAWebHandleMsgReceipt")(t);
          } catch (e) {
            return e instanceof o("WAParsableWapNode").XmppParsingFailure
              ? (o("WAWebPostUnknownStanzaMetric").postUnknownStanzaMetric(t),
                o("WAWebCreateNackFromStanza").createNackFromStanza(
                  t,
                  o("WAWebCreateNackFromStanza").NackReason.ParsingError,
                ))
              : o("WAWebCreateNackFromStanza").createNackFromStanza(
                  t,
                  o("WAWebCreateNackFromStanza").NackReason.UnhandledError,
                );
          }
      }
    }
    l.handleMessagingStanza = s;
  },
  98,
);
