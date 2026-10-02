__d(
  "WASmaxInBizThreadDataNotifyRequest",
  [
    "WAResultOrError",
    "WASmaxInBizThreadDataEnums",
    "WASmaxInBizThreadDataServerNotificationMixin",
    "WASmaxInBizThreadDataSubtypeMixin",
    "WASmaxParseJid",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "notification");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "thread_data");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(n.value, "payload");
      if (!r.success) return r;
      var a = o("WASmaxParseJid").literalJid(
        o("WASmaxParseJid").attrDomainJid,
        e,
        "from",
        "s.whatsapp.net",
      );
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "type",
        "biz_thread_data",
      );
      if (!i.success) return i;
      var l = o("WASmaxParseJid").attrLidUserJid(n.value, "thread_lid");
      if (!l.success) return l;
      var s = o("WASmaxParseUtils").attrStringEnum(
        n.value,
        "origin",
        o("WASmaxInBizThreadDataEnums").ENUM_GENERATED_MANUAL,
      );
      if (!s.success) return s;
      var u = o("WASmaxParseUtils").attrIntRange(
        n.value,
        "update_ts",
        1577865600,
        4102473600,
      );
      if (!u.success) return u;
      var c = o("WASmaxParseUtils").contentBytesRange(r.value, 1, 4096);
      if (!c.success) return c;
      var d = o("WASmaxInBizThreadDataSubtypeMixin").parseSubtypeMixin(n.value);
      if (!d.success) return d;
      var m = o(
        "WASmaxInBizThreadDataServerNotificationMixin",
      ).parseServerNotificationMixin(e);
      return m.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends(
              {
                from: a.value,
                type: i.value,
                threadDataThreadLid: l.value,
                threadDataOrigin: s.value,
                threadDataUpdateTs: u.value,
                threadDataPayloadElementValue: c.value,
                threadDataSubtypeMixin: d.value,
              },
              m.value,
            ),
          )
        : m;
    }
    l.parseNotifyRequest = e;
  },
  98,
);
