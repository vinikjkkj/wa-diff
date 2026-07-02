__d(
  "WASmaxInMessageDeliverNewsletterMessageWithJIDMixin",
  [
    "WAResultOrError",
    "WASmaxInMessageDeliverNewsletterMessageFanoutMixin",
    "WASmaxInMessageDeliverOfflineMixin",
    "WASmaxInMessageDeliverStsMixin",
    "WASmaxParseJid",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseJid").attrNewsletterJid(e, "from");
      if (!n.success) return n;
      var r = o(
        "WASmaxInMessageDeliverNewsletterMessageFanoutMixin",
      ).parseNewsletterMessageFanoutMixin(e);
      if (!r.success) return r;
      var a = o("WASmaxInMessageDeliverOfflineMixin").parseOfflineMixin(e),
        i = o("WASmaxInMessageDeliverStsMixin").parseStsMixin(e);
      return o("WAResultOrError").makeResult(
        babelHelpers.extends({ from: n.value }, r.value, {
          offlineMixin: a.success ? a.value : null,
          stsMixin: i.success ? i.value : null,
        }),
      );
    }
    l.parseNewsletterMessageWithJIDMixin = e;
  },
  98,
);
