__d(
  "WAWebHandleBizThreadDataBulkNotification",
  [
    "WALogger",
    "WASmaxBizThreadDataNotifyBulkRPC",
    "WASmaxNotificationFallbackGenericNotificationRPC",
    "WASmaxParsingFailure",
    "WAWebBackendApi",
    "WAWebCreateNackFromStanza",
    "WAWebCustomerManagerGating",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = 0.01;
    function u(t) {
      try {
        var n = o("WASmaxBizThreadDataNotifyBulkRPC").receiveNotifyBulkRPC(t),
          a = n.parsedRequest;
        a.threadDataBulkSubtypeMixin.notifSubType === "lead_stage" &&
          o("WAWebCustomerManagerGating").customerManagerEnabled() &&
          o("WAWebBackendApi").frontendFireAndForget(
            "repullServerLeadStages",
            {},
          );
      } catch (n) {
        if (n instanceof o("WASmaxParsingFailure").SmaxParsingFailure)
          return (
            o("WALogger")
              .ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "handleBizThreadDataBulkNotification: parse failed",
                  ])),
              )
              .catching(r("getErrorSafe")(n))
              .sendLogs("biz-thread-data-bulk-parse-failed", { sampling: s }),
            o(
              "WASmaxNotificationFallbackGenericNotificationRPC",
            ).makeGenericNotificationResponseBadStanza(
              {
                ackError: o("WAWebCreateNackFromStanza").NackReason
                  .ParsingError,
              },
              t,
            )
          );
        throw n;
      }
      return o(
        "WASmaxNotificationFallbackGenericNotificationRPC",
      ).makeGenericNotificationResponseAck(t);
    }
    l.handleBizThreadDataBulkNotification = u;
  },
  98,
);
