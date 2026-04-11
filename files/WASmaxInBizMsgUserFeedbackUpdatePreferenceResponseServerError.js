__d(
  "WASmaxInBizMsgUserFeedbackUpdatePreferenceResponseServerError",
  [
    "WAResultOrError",
    "WASmaxInBizMsgUserFeedbackIQErrorResponseMixin",
    "WASmaxInBizMsgUserFeedbackUpdatePreferenceServerErrors",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(e, "error");
      if (!r.success) return r;
      var a = o(
        "WASmaxInBizMsgUserFeedbackIQErrorResponseMixin",
      ).parseIQErrorResponseMixin(e, t);
      if (!a.success) return a;
      var i = o(
        "WASmaxInBizMsgUserFeedbackUpdatePreferenceServerErrors",
      ).parseUpdatePreferenceServerErrors(r.value);
      return i.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({}, a.value, {
              errorUpdatePreferenceServerErrors: i.value,
            }),
          )
        : i;
    }
    l.parseUpdatePreferenceResponseServerError = e;
  },
  98,
);
