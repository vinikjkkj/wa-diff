__d(
  "WASmaxInStatsSendBufferResponseErrorRetry",
  [
    "WAResultOrError",
    "WASmaxInStatsIQErrorResponseMixin",
    "WASmaxInStatsIQErrorServiceUnavailableMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(e, "error");
      if (!r.success) return r;
      var a = o(
        "WASmaxInStatsIQErrorServiceUnavailableMixin",
      ).parseIQErrorServiceUnavailableMixin(r.value);
      if (!a.success) return a;
      var i = o("WASmaxInStatsIQErrorResponseMixin").parseIQErrorResponseMixin(
        e,
        t,
      );
      return i.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends(
              { errorIQErrorServiceUnavailableMixin: a.value },
              i.value,
            ),
          )
        : i;
    }
    l.parseSendBufferResponseErrorRetry = e;
  },
  98,
);
