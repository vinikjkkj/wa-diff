__d(
  "WASmaxInClientLogLogRequest",
  [
    "WAResultOrError",
    "WASmaxInClientLogServerNotificationMixin",
    "WASmaxParseJid",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "notification");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "log");
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
      var i = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrIntRange,
        n.value,
        "start_t",
        1577865600,
        4102473600,
      );
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrIntRange,
        n.value,
        "end_t",
        1577865600,
        4102473600,
      );
      if (!l.success) return l;
      var s = o(
        "WASmaxInClientLogServerNotificationMixin",
      ).parseServerNotificationMixin(e);
      return s.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends(
              {
                type: r.value,
                from: a.value,
                logStartT: i.value,
                logEndT: l.value,
              },
              s.value,
            ),
          )
        : s;
    }
    l.parseLogRequest = e;
  },
  98,
);
