__d(
  "WASmaxInMessageDeliverNewsletterEditMixin",
  [
    "WAResultOrError",
    "WASmaxInMessageDeliverAdminEditMixin",
    "WASmaxInMessageDeliverNewsletterQuestionReplyOrTextOrMediaMixinGroup",
    "WASmaxInMessageDeliverWAMOSubMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxInMessageDeliverAdminEditMixin").parseAdminEditMixin(e);
      if (!n.success) return n;
      var r = o("WASmaxInMessageDeliverWAMOSubMixin").parseWAMOSubMixin(e),
        a = o(
          "WASmaxInMessageDeliverNewsletterQuestionReplyOrTextOrMediaMixinGroup",
        ).parseNewsletterQuestionReplyOrTextOrMediaMixinGroup(e);
      return a.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({}, n.value, {
              wAMOSubMixin: r.success ? r.value : null,
              newsletterQuestionReplyOrTextOrMediaMixinGroup: a.value,
            }),
          )
        : a;
    }
    l.parseNewsletterEditMixin = e;
  },
  98,
);
