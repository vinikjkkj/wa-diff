__d(
  "WASmaxInNewslettersStatusMyAddOnsResponseSuccess",
  [
    "WAResultOrError",
    "WASmaxInNewslettersIQResultResponseMixin",
    "WASmaxInNewslettersStatusNewsletterMyAddOnsMixin",
    "WASmaxParseJid",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "status");
      if (!t.success) return t;
      var n = o(
        "WASmaxInNewslettersStatusNewsletterMyAddOnsMixin",
      ).parseStatusNewsletterMyAddOnsMixin(e);
      return (n.success, n);
    }
    function s(t) {
      var n = o("WASmaxParseUtils").assertTag(t, "statuses");
      if (!n.success) return n;
      var r = o("WASmaxParseJid").attrNewsletterJid(t, "jid");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").mapChildrenWithTag(t, "status", 0, 5e3, e);
      return a.success
        ? o("WAResultOrError").makeResult({ jid: r.value, status: a.value })
        : a;
    }
    function u(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(e, "my_addons");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        r.value,
        "type",
        "status",
      );
      if (!a.success) return a;
      var i = o(
        "WASmaxInNewslettersIQResultResponseMixin",
      ).parseIQResultResponseMixin(e, t);
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").mapChildrenWithTag(
        r.value,
        "statuses",
        0,
        5e3,
        s,
      );
      return l.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({ myAddonsType: a.value }, i.value, {
              myAddonsStatuses: l.value,
            }),
          )
        : l;
    }
    ((l.parseStatusMyAddOnsResponseSuccessMyAddonsStatusesStatus = e),
      (l.parseStatusMyAddOnsResponseSuccessMyAddonsStatuses = s),
      (l.parseStatusMyAddOnsResponseSuccess = u));
  },
  98,
);
