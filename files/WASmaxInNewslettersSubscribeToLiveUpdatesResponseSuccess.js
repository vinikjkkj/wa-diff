__d(
  "WASmaxInNewslettersSubscribeToLiveUpdatesResponseSuccess",
  [
    "WAResultOrError",
    "WASmaxInNewslettersIQResultResponseMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(e, "live_updates");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").attrIntRange(r.value, "duration", 30, 600);
      if (!a.success) return a;
      var i = o(
        "WASmaxInNewslettersIQResultResponseMixin",
      ).parseIQResultResponseMixin(e, t);
      return i.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({ liveUpdatesDuration: a.value }, i.value),
          )
        : i;
    }
    l.parseSubscribeToLiveUpdatesResponseSuccess = e;
  },
  98,
);
