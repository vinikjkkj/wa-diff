__d(
  "WASmaxInMessageDeliverNewsletterWAMOEmptyMixin",
  [
    "WAResultOrError",
    "WASmaxInMessageDeliverAdminEditMixin",
    "WASmaxInMessageDeliverAdminRevokeMixin",
    "WASmaxInMessageDeliverContentTypeTextOrMediaOrPollCreationOrQuizCreationMixinGroup",
    "WASmaxInMessageDeliverWAMOSubMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "plaintext");
      if (!n.success) return n;
      var r = o("WASmaxInMessageDeliverWAMOSubMixin").parseWAMOSubMixin(e);
      if (!r.success) return r;
      var a = o("WASmaxInMessageDeliverAdminRevokeMixin").parseAdminRevokeMixin(
          e,
        ),
        i = o("WASmaxInMessageDeliverAdminEditMixin").parseAdminEditMixin(e),
        l = o(
          "WASmaxInMessageDeliverContentTypeTextOrMediaOrPollCreationOrQuizCreationMixinGroup",
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
