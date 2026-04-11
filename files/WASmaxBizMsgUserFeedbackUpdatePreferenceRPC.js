__d(
  "WASmaxBizMsgUserFeedbackUpdatePreferenceRPC",
  [
    "WAComms",
    "WASmaxInBizMsgUserFeedbackUpdatePreferenceResponseInvalidRequest",
    "WASmaxInBizMsgUserFeedbackUpdatePreferenceResponseServerError",
    "WASmaxInBizMsgUserFeedbackUpdatePreferenceResponseSuccess",
    "WASmaxOutBizMsgUserFeedbackUpdatePreferenceRequest",
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
              "WASmaxOutBizMsgUserFeedbackUpdatePreferenceRequest",
            ).makeUpdatePreferenceRequest(e),
            r = yield o("WAComms").sendSmaxStanza(n, t),
            a = o(
              "WASmaxInBizMsgUserFeedbackUpdatePreferenceResponseSuccess",
            ).parseUpdatePreferenceResponseSuccess(r, n);
          if (a.success)
            return { name: "UpdatePreferenceResponseSuccess", value: a.value };
          var i = o(
            "WASmaxInBizMsgUserFeedbackUpdatePreferenceResponseInvalidRequest",
          ).parseUpdatePreferenceResponseInvalidRequest(r, n);
          if (i.success)
            return {
              name: "UpdatePreferenceResponseInvalidRequest",
              value: i.value,
            };
          var l = o(
            "WASmaxInBizMsgUserFeedbackUpdatePreferenceResponseServerError",
          ).parseUpdatePreferenceResponseServerError(r, n);
          if (l.success)
            return {
              name: "UpdatePreferenceResponseServerError",
              value: l.value,
            };
          throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
            o("WASmaxRpcUtils").errorMessageRpcParsing("UpdatePreference", {
              Success: a,
              InvalidRequest: i,
              ServerError: l,
            }),
          );
        })),
        s.apply(this, arguments)
      );
    }
    l.sendUpdatePreferenceRPC = e;
  },
  98,
);
