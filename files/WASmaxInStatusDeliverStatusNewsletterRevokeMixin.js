__d(
  "WASmaxInStatusDeliverStatusNewsletterRevokeMixin",
  [
    "WAResultOrError",
    "WASmaxInStatusDeliverStatusAdminRevokeMixin",
    "WASmaxInStatusDeliverStatusContentTypeTextMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "status");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "plaintext");
      if (!n.success) return n;
      var r = o(
        "WASmaxInStatusDeliverStatusAdminRevokeMixin",
      ).parseStatusAdminRevokeMixin(e);
      if (!r.success) return r;
      var a = o(
        "WASmaxInStatusDeliverStatusContentTypeTextMixin",
      ).parseStatusContentTypeTextMixin(e);
      return a.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({}, r.value, a.value),
          )
        : a;
    }
    l.parseStatusNewsletterRevokeMixin = e;
  },
  98,
);
