__d(
  "WASmaxInMessageDeliverNewsletterRequest",
  [
    "WAResultOrError",
    "WASmaxInMessageDeliverNewsletterMessageWithJIDMixin",
    "WASmaxInMessageDeliverReceiverContentTypeMediaRCATMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o(
        "WASmaxInMessageDeliverNewsletterMessageWithJIDMixin",
      ).parseNewsletterMessageWithJIDMixin(e);
      if (!n.success) return n;
      var r = o(
        "WASmaxInMessageDeliverReceiverContentTypeMediaRCATMixin",
      ).parseReceiverContentTypeMediaRCATMixin(e);
      return o("WAResultOrError").makeResult(
        babelHelpers.extends({}, n.value, {
          receiverContentTypeMediaRCATMixin: r.success ? r.value : null,
        }),
      );
    }
    l.parseNewsletterRequest = e;
  },
  98,
);
