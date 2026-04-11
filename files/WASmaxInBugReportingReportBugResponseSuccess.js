__d(
  "WASmaxInBugReportingReportBugResponseSuccess",
  [
    "WAResultOrError",
    "WASmaxInBugReportingHackBaseIQResultResponseMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(e, "task_id");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").contentString(r.value);
      if (!a.success) return a;
      var i = o(
        "WASmaxInBugReportingHackBaseIQResultResponseMixin",
      ).parseHackBaseIQResultResponseMixin(e, t);
      return i.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({ taskIdElementValue: a.value }, i.value),
          )
        : i;
    }
    l.parseReportBugResponseSuccess = e;
  },
  98,
);
