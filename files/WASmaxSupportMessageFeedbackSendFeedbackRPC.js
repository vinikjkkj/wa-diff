__d(
  "WASmaxSupportMessageFeedbackSendFeedbackRPC",
  [
    "WAComms",
    "WASmaxInSupportMessageFeedbackSendFeedbackResponseError",
    "WASmaxInSupportMessageFeedbackSendFeedbackResponseSuccess",
    "WASmaxOutSupportMessageFeedbackSendFeedbackRequest",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e, t) {
      var n = o(
          "WASmaxOutSupportMessageFeedbackSendFeedbackRequest",
        ).makeSendFeedbackRequest(e),
        r = await o("WAComms").sendSmaxStanza(n, t),
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
    }
    l.sendSendFeedbackRPC = e;
  },
  98,
);
