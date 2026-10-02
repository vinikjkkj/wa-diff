__d(
  "WASmaxInAbPropsRefreshRequest",
  [
    "WAResultOrError",
    "WASmaxInAbPropsServerNotificationMixin",
    "WASmaxParseJid",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "notification");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "abprops");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "type",
        "server",
      );
      if (!r.success) return r;
      var a = o("WASmaxParseJid").attrDeviceJid(e, "from");
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").attrIntRange(n.value, "protocol", 1, 10);
      if (!i.success) return i;
      var l = o(
        "WASmaxInAbPropsServerNotificationMixin",
      ).parseServerNotificationMixin(e);
      return l.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends(
              { type: r.value, from: a.value, abpropsProtocol: i.value },
              l.value,
            ),
          )
        : l;
    }
    l.parseRefreshRequest = e;
  },
  98,
);
