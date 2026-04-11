__d(
  "WASmaxInBizMsgUserFeedbackUpdatePreferenceResponseInvalidRequest",
  [
    "WAResultOrError",
    "WASmaxInBizMsgUserFeedbackIQErrorResponseMixin",
    "WASmaxInBizMsgUserFeedbackUpdatePreferenceReqErrors",
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
        "WASmaxInBizMsgUserFeedbackUpdatePreferenceReqErrors",
      ).parseUpdatePreferenceReqErrors(r.value);
      return i.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({}, a.value, {
              errorUpdatePreferenceReqErrors: i.value,
            }),
          )
        : i;
    }
    l.parseUpdatePreferenceResponseInvalidRequest = e;
  },
  98,
);
