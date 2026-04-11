__d(
  "WASmaxInSupportContactFormResponseRetryableError",
  [
    "WAResultOrError",
    "WASmaxInSupportHackBaseIQResultResponseMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(e, "response");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").attrInt(r.value, "error_code");
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        r.value,
        "next_retry_ts",
      );
      if (!i.success) return i;
      var l = o(
        "WASmaxInSupportHackBaseIQResultResponseMixin",
      ).parseHackBaseIQResultResponseMixin(e, t);
      return l.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends(
              { responseErrorCode: a.value, responseNextRetryTs: i.value },
              l.value,
            ),
          )
        : l;
    }
    l.parseContactFormResponseRetryableError = e;
  },
  98,
);
