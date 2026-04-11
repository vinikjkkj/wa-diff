__d(
  "WASmaxInUserNoticeSetResultResponseClientError",
  [
    "WAResultOrError",
    "WASmaxInUserNoticeIQErrorBadRequestMixin",
    "WASmaxInUserNoticeIQErrorResponseMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(e, "error");
      if (!r.success) return r;
      var a = o(
        "WASmaxInUserNoticeIQErrorBadRequestMixin",
      ).parseIQErrorBadRequestMixin(r.value);
      if (!a.success) return a;
      var i = o(
        "WASmaxInUserNoticeIQErrorResponseMixin",
      ).parseIQErrorResponseMixin(e, t);
      return i.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends(
              { errorIQErrorBadRequestMixin: a.value },
              i.value,
            ),
          )
        : i;
    }
    l.parseSetResultResponseClientError = e;
  },
  98,
);
