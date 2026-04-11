__d(
  "WASmaxInWaffleWFPingResponseSuccess",
  [
    "WAResultOrError",
    "WASmaxInWaffleIQResultResponseMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(e, "ping_interval");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").contentInt(r.value);
      if (!a.success) return a;
      var i = o(
        "WASmaxInWaffleIQResultResponseMixin",
      ).parseIQResultResponseMixin(e, t);
      return i.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends(
              { pingIntervalElementValue: a.value },
              i.value,
            ),
          )
        : i;
    }
    l.parseWFPingResponseSuccess = e;
  },
  98,
);
