__d(
  "WASmaxInNewslettersGetNewsletterStatusUpdatesResponseSuccess",
  [
    "WAResultOrError",
    "WASmaxInNewslettersIQResultResponseMixin",
    "WASmaxInNewslettersNewsletterStatusResponsePayloadMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(e, "status_updates");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").flattenedChildWithTag(r.value, "statuses");
      if (!a.success) return a;
      var i = o(
        "WASmaxInNewslettersNewsletterStatusResponsePayloadMixin",
      ).parseNewsletterStatusResponsePayloadMixin(a.value);
      if (!i.success) return i;
      var l = o(
        "WASmaxInNewslettersIQResultResponseMixin",
      ).parseIQResultResponseMixin(e, t);
      return l.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends(
              {
                statusUpdatesStatusesNewsletterStatusResponsePayloadMixin:
                  i.value,
              },
              l.value,
            ),
          )
        : l;
    }
    l.parseGetNewsletterStatusUpdatesResponseSuccess = e;
  },
  98,
);
