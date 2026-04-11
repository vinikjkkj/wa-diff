__d(
  "WASmaxInNewslettersLiveUpdatesNotificationRequest",
  [
    "WAResultOrError",
    "WASmaxInNewslettersCommonNotificationMixin",
    "WASmaxInNewslettersNewsletterMessageResponsePayloadMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "notification");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "live_updates");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(n.value, "messages");
      if (!r.success) return r;
      var a = o(
        "WASmaxInNewslettersNewsletterMessageResponsePayloadMixin",
      ).parseNewsletterMessageResponsePayloadMixin(r.value);
      if (!a.success) return a;
      var i = o(
        "WASmaxInNewslettersCommonNotificationMixin",
      ).parseCommonNotificationMixin(e);
      return i.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends(
              {
                liveUpdatesMessagesNewsletterMessageResponsePayloadMixin:
                  a.value,
              },
              i.value,
            ),
          )
        : i;
    }
    l.parseLiveUpdatesNotificationRequest = e;
  },
  98,
);
