__d(
  "WASmaxInMessagePublishNewsletterQuestionResponseAckMixin",
  ["WAResultOrError", "WASmaxInMessagePublishAckMixin", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "ack");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrString(e, "response_server_id");
      if (!r.success) return r;
      var a = o("WASmaxInMessagePublishAckMixin").parseAckMixin(e, t);
      return a.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({ responseServerId: r.value }, a.value),
          )
        : a;
    }
    l.parseNewsletterQuestionResponseAckMixin = e;
  },
  98,
);
