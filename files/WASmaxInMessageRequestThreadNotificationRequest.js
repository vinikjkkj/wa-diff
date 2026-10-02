__d(
  "WASmaxInMessageRequestThreadNotificationRequest",
  [
    "WAResultOrError",
    "WASmaxInMessageRequestConnectedMixin",
    "WASmaxInMessageRequestFolderMixin",
    "WASmaxInMessageRequestServerNotificationMixin",
    "WASmaxParseJid",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "notification");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "thread_actions");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "type",
        "fbid:thread",
      );
      if (!r.success) return r;
      var a = o("WASmaxParseJid").literalJid(
        o("WASmaxParseJid").attrDomainJid,
        e,
        "from",
        "s.whatsapp.net",
      );
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").optional(
        o("WASmaxParseJid").attrUserJid,
        e,
        "to",
      );
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").attrString(n.value, "thread_id");
      if (!l.success) return l;
      var s = o("WASmaxInMessageRequestFolderMixin").parseFolderMixin(n.value),
        u = o("WASmaxInMessageRequestConnectedMixin").parseConnectedMixin(
          n.value,
        ),
        c = o(
          "WASmaxInMessageRequestServerNotificationMixin",
        ).parseServerNotificationMixin(e);
      return c.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends(
              {
                type: r.value,
                from: a.value,
                to: i.value,
                threadActionsThreadId: l.value,
                threadActionsFolderMixin: s.success ? s.value : null,
                hasThreadActionsConnectedMixin: u.success,
              },
              c.value,
            ),
          )
        : c;
    }
    l.parseThreadNotificationRequest = e;
  },
  98,
);
