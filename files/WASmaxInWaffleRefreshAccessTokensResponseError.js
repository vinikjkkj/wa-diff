__d(
  "WASmaxInWaffleRefreshAccessTokensResponseError",
  [
    "WAResultOrError",
    "WASmaxInWaffleIQErrorResponseMixin",
    "WASmaxInWaffleRefreshAccessTokensErrors",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(e, "error");
      if (!r.success) return r;
      var a = o("WASmaxInWaffleIQErrorResponseMixin").parseIQErrorResponseMixin(
        e,
        t,
      );
      if (!a.success) return a;
      var i = o(
        "WASmaxInWaffleRefreshAccessTokensErrors",
      ).parseRefreshAccessTokensErrors(r.value);
      return i.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({}, a.value, {
              errorRefreshAccessTokensErrors: i.value,
            }),
          )
        : i;
    }
    l.parseRefreshAccessTokensResponseError = e;
  },
  98,
);
