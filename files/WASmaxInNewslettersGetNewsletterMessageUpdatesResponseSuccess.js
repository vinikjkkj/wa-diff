__d(
  "WASmaxInNewslettersGetNewsletterMessageUpdatesResponseSuccess",
  [
    "WAResultOrError",
    "WASmaxInNewslettersIQResultResponseMixin",
    "WASmaxInNewslettersNewsletterMessageResponsePayloadMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(e, "message_updates");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").flattenedChildWithTag(r.value, "messages");
      if (!a.success) return a;
      var i = o(
        "WASmaxInNewslettersNewsletterMessageResponsePayloadMixin",
      ).parseNewsletterMessageResponsePayloadMixin(a.value);
      if (!i.success) return i;
      var l = o(
        "WASmaxInNewslettersIQResultResponseMixin",
      ).parseIQResultResponseMixin(e, t);
      return l.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends(
              {
                messageUpdatesMessagesNewsletterMessageResponsePayloadMixin:
                  i.value,
              },
              l.value,
            ),
          )
        : l;
    }
    l.parseGetNewsletterMessageUpdatesResponseSuccess = e;
  },
  98,
);
