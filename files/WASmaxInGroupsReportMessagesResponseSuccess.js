__d(
  "WASmaxInGroupsReportMessagesResponseSuccess",
  ["WASmaxInGroupsIQResultResponseMixin", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o(
        "WASmaxInGroupsIQResultResponseMixin",
      ).parseIQResultResponseMixin(e, t);
      return (r.success, r);
    }
    l.parseReportMessagesResponseSuccess = e;
  },
  98,
);
