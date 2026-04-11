__d(
  "WASmaxInSupportMessageFeedbackSendFeedbackResponseError",
  [
    "WAResultOrError",
    "WASmaxInSupportMessageFeedbackHackBaseIQErrorResponseMixin",
    "WASmaxInSupportMessageFeedbackSendFeedbackError",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(e, "error");
      if (!r.success) return r;
      var a = o(
        "WASmaxInSupportMessageFeedbackHackBaseIQErrorResponseMixin",
      ).parseHackBaseIQErrorResponseMixin(e, t);
      if (!a.success) return a;
      var i = o(
        "WASmaxInSupportMessageFeedbackSendFeedbackError",
      ).parseSendFeedbackError(r.value);
      return i.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({}, a.value, {
              errorSendFeedbackError: i.value,
            }),
          )
        : i;
    }
    l.parseSendFeedbackResponseError = e;
  },
  98,
);
