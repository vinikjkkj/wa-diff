__d(
  "WASmaxInBizAccessTokenRequestSilentNonceResponseSuccess",
  [
    "WAResultOrError",
    "WASmaxInBizAccessTokenHackBaseIQResultResponseMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(e, "result");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        r.value,
        "status",
        "Success",
      );
      if (!a.success) return a;
      var i = o(
        "WASmaxInBizAccessTokenHackBaseIQResultResponseMixin",
      ).parseHackBaseIQResultResponseMixin(e, t);
      return i.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({ resultStatus: a.value }, i.value),
          )
        : i;
    }
    l.parseRequestSilentNonceResponseSuccess = e;
  },
  98,
);
