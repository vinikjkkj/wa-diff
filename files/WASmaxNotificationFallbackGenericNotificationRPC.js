__d(
  "WASmaxNotificationFallbackGenericNotificationRPC",
  [
    "WASmaxInNotificationFallbackGenericNotificationRequest",
    "WASmaxOutNotificationFallbackGenericNotificationResponseAck",
    "WASmaxOutNotificationFallbackGenericNotificationResponseBadStanza",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o(
        "WASmaxInNotificationFallbackGenericNotificationRequest",
      ).parseGenericNotificationRequest(e);
      if (!t.success)
        throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
          o("WASmaxRpcUtils").errorMessageRpcParsing("GenericNotification", {
            Request: t,
          }),
        );
      return {
        parsedRequest: t.value,
        makeGenericNotificationResponseBadStanza: function (n) {
          return o(
            "WASmaxOutNotificationFallbackGenericNotificationResponseBadStanza",
          ).makeGenericNotificationResponseBadStanza(n, e);
        },
        makeGenericNotificationResponseAck: function () {
          return o(
            "WASmaxOutNotificationFallbackGenericNotificationResponseAck",
          ).makeGenericNotificationResponseAck(e);
        },
      };
    }
    l.receiveGenericNotificationRPC = e;
  },
  98,
);
