__d(
  "WASmaxInNewslettersUnauthorizedIQErrorResponseMixin",
  [
    "WAResultOrError",
    "WASmaxInNewslettersIQErrorNotAuthorizedMixin",
    "WASmaxInNewslettersIQErrorResponseMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(e, "error");
      if (!r.success) return r;
      var a = o(
        "WASmaxInNewslettersIQErrorNotAuthorizedMixin",
      ).parseIQErrorNotAuthorizedMixin(r.value);
      if (!a.success) return a;
      var i = o(
        "WASmaxInNewslettersIQErrorResponseMixin",
      ).parseIQErrorResponseMixin(e, t);
      return i.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends(
              { errorIQErrorNotAuthorizedMixin: a.value },
              i.value,
            ),
          )
        : i;
    }
    l.parseUnauthorizedIQErrorResponseMixin = e;
  },
  98,
);
