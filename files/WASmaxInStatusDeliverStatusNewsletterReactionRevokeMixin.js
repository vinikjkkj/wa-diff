__d(
  "WASmaxInStatusDeliverStatusNewsletterReactionRevokeMixin",
  [
    "WAResultOrError",
    "WASmaxInStatusDeliverStatusContentTypeReactionMixin",
    "WASmaxInStatusDeliverStatusRevokeMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "status");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "reaction");
      if (!n.success) return n;
      var r = o(
        "WASmaxInStatusDeliverStatusRevokeMixin",
      ).parseStatusRevokeMixin(e);
      if (!r.success) return r;
      var a = o(
        "WASmaxInStatusDeliverStatusContentTypeReactionMixin",
      ).parseStatusContentTypeReactionMixin(e);
      return a.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({}, r.value, a.value),
          )
        : a;
    }
    l.parseStatusNewsletterReactionRevokeMixin = e;
  },
  98,
);
