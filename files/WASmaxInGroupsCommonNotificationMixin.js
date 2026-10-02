__d(
  "WASmaxInGroupsCommonNotificationMixin",
  [
    "WAResultOrError",
    "WASmaxInGroupsServerNotificationMixin",
    "WASmaxParseJid",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "notification");
      if (!t.success) return t;
      var n = o("WASmaxParseJid").attrGroupJid(e, "from");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "type",
        "w:gp2",
      );
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "notify",
      );
      if (!a.success) return a;
      var i = o(
        "WASmaxInGroupsServerNotificationMixin",
      ).parseServerNotificationMixin(e);
      return i.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends(
              { from: n.value, type: r.value, notify: a.value },
              i.value,
            ),
          )
        : i;
    }
    l.parseCommonNotificationMixin = e;
  },
  98,
);
