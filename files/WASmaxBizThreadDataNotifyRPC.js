__d(
  "WASmaxBizThreadDataNotifyRPC",
  [
    "WAResultOrError",
    "WASmaxInBizThreadDataServerNotificationMixin",
    "WASmaxInBizThreadDataSubtypeMixin",
    "WASmaxParseJid",
    "WASmaxParseUtils",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = s(e);
      if (!t.success)
        throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
          o("WASmaxRpcUtils").errorMessageRpcParsing("Notify", { Request: t }),
        );
      return { parsedRequest: t.value };
    }
    function s(e) {
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
      var s = o("WASmaxParseUtils").attrStringEnum(n.value, "origin", u);
      if (!s.success) return s;
      var c = o("WASmaxParseUtils").attrIntRange(
        n.value,
        "update_ts",
        1577865600,
        4102473600,
      );
      if (!c.success) return c;
      var d = o("WASmaxParseUtils").contentBytesRange(r.value, 1, 4096);
      if (!d.success) return d;
      var m = o("WASmaxInBizThreadDataSubtypeMixin").parseSubtypeMixin(n.value);
      if (!m.success) return m;
      var p = o(
        "WASmaxInBizThreadDataServerNotificationMixin",
      ).parseServerNotificationMixin(e);
      return p.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends(
              {
                from: a.value,
                type: i.value,
                threadDataThreadLid: l.value,
                threadDataOrigin: s.value,
                threadDataUpdateTs: c.value,
                threadDataPayloadElementValue: d.value,
                threadDataSubtypeMixin: m.value,
              },
              p.value,
            ),
          )
        : p;
    }
    var u = { generated: "generated", manual: "manual" };
    ((l.receiveNotifyRPC = e),
      (l.parseNotifyRequest = s),
      (l.ENUM_GENERATED_MANUAL = u));
  },
  98,
);
