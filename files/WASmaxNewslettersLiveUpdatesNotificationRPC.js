__d(
  "WASmaxNewslettersLiveUpdatesNotificationRPC",
  [
    "WAResultOrError",
    "WASmaxInNewslettersCommonNotificationMixin",
    "WASmaxInNewslettersNewsletterMessageResponsePayloadMixin",
    "WASmaxJsx",
    "WASmaxOutNewslettersNotificationClientAckMixin",
    "WASmaxParseUtils",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = s(e);
      if (!t.success)
        throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
          o("WASmaxRpcUtils").errorMessageRpcParsing(
            "LiveUpdatesNotification",
            { Request: t },
          ),
        );
      return {
        parsedRequest: t.value,
        makeLiveUpdatesNotificationResponseAck: function () {
          return u(e);
        },
      };
    }
    function s(e) {
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
    function u(e) {
      var t = o(
        "WASmaxOutNewslettersNotificationClientAckMixin",
      ).mergeNotificationClientAckMixin(o("WASmaxJsx").smax("ack", null), e);
      return t;
    }
    ((l.receiveLiveUpdatesNotificationRPC = e),
      (l.parseLiveUpdatesNotificationRequest = s),
      (l.makeLiveUpdatesNotificationResponseAck = u));
  },
  98,
);
