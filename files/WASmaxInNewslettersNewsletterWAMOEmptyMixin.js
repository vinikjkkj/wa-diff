__d(
  "WASmaxInNewslettersNewsletterWAMOEmptyMixin",
  [
    "WAResultOrError",
    "WASmaxInNewslettersAdminEditMixin",
    "WASmaxInNewslettersAdminRevokeMixin",
    "WASmaxInNewslettersContentTypeTextOrMediaOrPollCreationOrQuizCreationMixinGroup",
    "WASmaxInNewslettersWAMOSubMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "plaintext");
      if (!n.success) return n;
      var r = o("WASmaxInNewslettersWAMOSubMixin").parseWAMOSubMixin(e);
      if (!r.success) return r;
      var a = o("WASmaxInNewslettersAdminRevokeMixin").parseAdminRevokeMixin(e),
        i = o("WASmaxInNewslettersAdminEditMixin").parseAdminEditMixin(e),
        l = o(
          "WASmaxInNewslettersContentTypeTextOrMediaOrPollCreationOrQuizCreationMixinGroup",
        ).parseContentTypeTextOrMediaOrPollCreationOrQuizCreationMixinGroup(e);
      return l.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({}, r.value, {
              adminRevokeMixin: a.success ? a.value : null,
              adminEditMixin: i.success ? i.value : null,
              contentTypeTextOrMediaOrPollCreationOrQuizCreationMixinGroup:
                l.value,
            }),
          )
        : l;
    }
    l.parseNewsletterWAMOEmptyMixin = e;
  },
  98,
);
