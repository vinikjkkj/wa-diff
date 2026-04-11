__d(
  "WASmaxInBizMsgUserFeedbackUpdatePreferenceResponseSuccess",
  ["WASmaxInBizMsgUserFeedbackIQResultResponseMixin", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o(
        "WASmaxInBizMsgUserFeedbackIQResultResponseMixin",
      ).parseIQResultResponseMixin(e, t);
      return (r.success, r);
    }
    l.parseUpdatePreferenceResponseSuccess = e;
  },
  98,
);
