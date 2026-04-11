__d(
  "WASmaxInNewslettersMyAddOnsResponseSuccess",
  [
    "WAResultOrError",
    "WASmaxInNewslettersIQResultResponseMixin",
    "WASmaxInNewslettersNewsletterMessageMyAddOnsMixin",
    "WASmaxParseJid",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o(
        "WASmaxInNewslettersNewsletterMessageMyAddOnsMixin",
      ).parseNewsletterMessageMyAddOnsMixin(e);
      return (n.success, n);
    }
    function s(t) {
      var n = o("WASmaxParseUtils").assertTag(t, "messages");
      if (!n.success) return n;
      var r = o("WASmaxParseJid").attrNewsletterJid(t, "jid");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").mapChildrenWithTag(t, "message", 0, 5e3, e);
      return a.success
        ? o("WAResultOrError").makeResult({ jid: r.value, message: a.value })
        : a;
    }
    function u(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(e, "my_addons");
      if (!r.success) return r;
      var a = o(
        "WASmaxInNewslettersIQResultResponseMixin",
      ).parseIQResultResponseMixin(e, t);
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").mapChildrenWithTag(
        r.value,
        "messages",
        0,
        5e3,
        s,
      );
      return i.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({}, a.value, { myAddonsMessages: i.value }),
          )
        : i;
    }
    ((l.parseMyAddOnsResponseSuccessMyAddonsMessagesMessage = e),
      (l.parseMyAddOnsResponseSuccessMyAddonsMessages = s),
      (l.parseMyAddOnsResponseSuccess = u));
  },
  98,
);
