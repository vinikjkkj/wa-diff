__d(
  "WASmaxMdPasskeyPrologueRequestNotificationRPC",
  [
    "WASmaxInMdPasskeyPrologueRequestNotificationRequest",
    "WASmaxOutMdPasskeyPrologueRequestNotificationResponseAck",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o(
        "WASmaxInMdPasskeyPrologueRequestNotificationRequest",
      ).parsePasskeyPrologueRequestNotificationRequest(e);
      if (!t.success)
        throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
          o("WASmaxRpcUtils").errorMessageRpcParsing(
            "PasskeyPrologueRequestNotification",
            { Request: t },
          ),
        );
      return {
        parsedRequest: t.value,
        makePasskeyPrologueRequestNotificationResponseAck: function () {
          return o(
            "WASmaxOutMdPasskeyPrologueRequestNotificationResponseAck",
          ).makePasskeyPrologueRequestNotificationResponseAck(e);
        },
      };
    }
    l.receivePasskeyPrologueRequestNotificationRPC = e;
  },
  98,
);
