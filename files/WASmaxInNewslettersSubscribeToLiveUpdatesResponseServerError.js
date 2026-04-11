__d(
  "WASmaxInNewslettersSubscribeToLiveUpdatesResponseServerError",
  [
    "WASmaxInNewslettersInternalServerErrorIQErrorResponseMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o(
        "WASmaxInNewslettersInternalServerErrorIQErrorResponseMixin",
      ).parseInternalServerErrorIQErrorResponseMixin(e, t);
      return (r.success, r);
    }
    l.parseSubscribeToLiveUpdatesResponseServerError = e;
  },
  98,
);
