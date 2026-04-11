__d(
  "WASmaxSupportMessageFeedbackSendFeedbackRPC",
  [
    "WAComms",
    "WASmaxInSupportMessageFeedbackSendFeedbackResponseError",
    "WASmaxInSupportMessageFeedbackSendFeedbackResponseSuccess",
    "WASmaxOutSupportMessageFeedbackSendFeedbackRequest",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = o(
              "WASmaxOutSupportMessageFeedbackSendFeedbackRequest",
            ).makeSendFeedbackRequest(e),
            r = yield o("WAComms").sendSmaxStanza(n, t),
            a = o(
              "WASmaxInSupportMessageFeedbackSendFeedbackResponseSuccess",
            ).parseSendFeedbackResponseSuccess(r, n);
          if (a.success)
            return { name: "SendFeedbackResponseSuccess", value: a.value };
          var i = o(
            "WASmaxInSupportMessageFeedbackSendFeedbackResponseError",
          ).parseSendFeedbackResponseError(r, n);
          if (i.success)
            return { name: "SendFeedbackResponseError", value: i.value };
          throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
            o("WASmaxRpcUtils").errorMessageRpcParsing("SendFeedback", {
              Success: a,
              Error: i,
            }),
          );
        })),
        s.apply(this, arguments)
      );
    }
    l.sendSendFeedbackRPC = e;
  },
  98,
);
