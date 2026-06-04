__d(
  "WASmaxMdSetPrimaryEphemeralIdentityNotificationRPC",
  [
    "WASmaxInMdSetPrimaryEphemeralIdentityNotificationRequest",
    "WASmaxOutMdSetPrimaryEphemeralIdentityNotificationResponseAck",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o(
        "WASmaxInMdSetPrimaryEphemeralIdentityNotificationRequest",
      ).parseSetPrimaryEphemeralIdentityNotificationRequest(e);
      if (!t.success)
        throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
          o("WASmaxRpcUtils").errorMessageRpcParsing(
            "SetPrimaryEphemeralIdentityNotification",
            { Request: t },
          ),
        );
      return {
        parsedRequest: t.value,
        makeSetPrimaryEphemeralIdentityNotificationResponseAck: function () {
          return o(
            "WASmaxOutMdSetPrimaryEphemeralIdentityNotificationResponseAck",
          ).makeSetPrimaryEphemeralIdentityNotificationResponseAck(e);
        },
      };
    }
    l.receiveSetPrimaryEphemeralIdentityNotificationRPC = e;
  },
  98,
);
