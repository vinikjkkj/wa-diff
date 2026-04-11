__d(
  "WASmaxInBugReportingReportBugResponseError",
  [
    "WAResultOrError",
    "WASmaxInBugReportingHackBaseIQErrorResponseMixin",
    "WASmaxInBugReportingReportBugErrors",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(e, "error");
      if (!r.success) return r;
      var a = o(
        "WASmaxInBugReportingHackBaseIQErrorResponseMixin",
      ).parseHackBaseIQErrorResponseMixin(e, t);
      if (!a.success) return a;
      var i = o("WASmaxInBugReportingReportBugErrors").parseReportBugErrors(
        r.value,
      );
      return i.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({}, a.value, {
              errorReportBugErrors: i.value,
            }),
          )
        : i;
    }
    l.parseReportBugResponseError = e;
  },
  98,
);
