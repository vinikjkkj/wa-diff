__d(
  "WAWebHandleBizThreadDataNotification",
  [
    "WALogger",
    "WASmaxBizThreadDataNotifyRPC",
    "WASmaxOutNotificationFallbackGenericNotificationResponseAck",
    "WASmaxOutNotificationFallbackGenericNotificationResponseBadStanza",
    "WASmaxParseUtils",
    "WASmaxParsingFailure",
    "WAWebBackendApi",
    "WAWebCreateNackFromStanza",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = 0.01;
    function c(t) {
      o("WALogger").LOG(
        e ||
          (e = babelHelpers.taggedTemplateLiteralLoose([
            "handleBizThreadDataNotification: notification received",
          ])),
      );
      var n = t.content,
        a = Array.isArray(n)
          ? n.find(function (e) {
              return String(e.tag) === "thread_data";
            })
          : null;
      if (a != null) {
        var i = o("WASmaxParseUtils").attrString(a, "notif_sub_type");
        if (i.success && i.value !== "detected_outcome")
          return o(
            "WASmaxOutNotificationFallbackGenericNotificationResponseAck",
          ).makeGenericNotificationResponseAck(t);
      }
      try {
        var l = o("WASmaxBizThreadDataNotifyRPC").receiveNotifyRPC(t),
          c = l.parsedRequest;
        c.threadDataSubtypeMixin.notifSubType === "detected_outcome" &&
          c.threadDataOrigin === "generated" &&
          o("WAWebBackendApi").frontendFireAndForget(
            "emitDetectedOutcomeNotificationSignal",
            {
              payloadJson: new TextDecoder("utf-8").decode(
                c.threadDataPayloadElementValue,
              ),
              threadLid: c.threadDataThreadLid.toString(),
            },
          );
      } catch (e) {
        if (e instanceof o("WASmaxParsingFailure").SmaxParsingFailure)
          return (
            o("WALogger")
              .ERROR(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "handleBizThreadDataNotification: parse failed",
                  ])),
              )
              .catching(r("getErrorSafe")(e))
              .sendLogs("biz-thread-data-parse-failed", { sampling: u }),
            o(
              "WASmaxOutNotificationFallbackGenericNotificationResponseBadStanza",
            ).makeGenericNotificationResponseBadStanza(
              {
                ackError: o("WAWebCreateNackFromStanza").NackReason
                  .ParsingError,
              },
              t,
            )
          );
        throw e;
      }
      return o(
        "WASmaxOutNotificationFallbackGenericNotificationResponseAck",
      ).makeGenericNotificationResponseAck(t);
    }
    l.handleBizThreadDataNotification = c;
  },
  98,
);
