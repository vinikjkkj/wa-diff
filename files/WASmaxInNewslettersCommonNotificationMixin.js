__d(
  "WASmaxInNewslettersCommonNotificationMixin",
  [
    "WAResultOrError",
    "WASmaxInNewslettersServerNotificationMixin",
    "WASmaxParseJid",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "notification");
      if (!t.success) return t;
      var n = o("WASmaxParseJid").attrNewsletterJid(e, "from");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "type",
        "newsletter",
      );
      if (!r.success) return r;
      var a = o(
        "WASmaxInNewslettersServerNotificationMixin",
      ).parseServerNotificationMixin(e);
      return a.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({ from: n.value, type: r.value }, a.value),
          )
        : a;
    }
    l.parseCommonNotificationMixin = e;
  },
  98,
);
