__d(
  "WASmaxBizThreadDataNotifyBulkRPC",
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
          o("WASmaxRpcUtils").errorMessageRpcParsing("NotifyBulk", {
            Request: t,
          }),
        );
      return { parsedRequest: t.value };
    }
    function s(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "notification");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(
        e,
        "thread_data_bulk",
      );
      if (!n.success) return n;
      var r = o("WASmaxParseJid").literalJid(
        o("WASmaxParseJid").attrDomainJid,
        e,
        "from",
        "s.whatsapp.net",
      );
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "type",
        "biz_thread_data_bulk",
      );
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").attrIntRange(
        n.value,
        "update_ts",
        1577865600,
        4102473600,
      );
      if (!i.success) return i;
      var l = o("WASmaxInBizThreadDataSubtypeMixin").parseSubtypeMixin(n.value);
      if (!l.success) return l;
      var s = o(
        "WASmaxInBizThreadDataServerNotificationMixin",
      ).parseServerNotificationMixin(e);
      return s.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends(
              {
                from: r.value,
                type: a.value,
                threadDataBulkUpdateTs: i.value,
                threadDataBulkSubtypeMixin: l.value,
              },
              s.value,
            ),
          )
        : s;
    }
    ((l.receiveNotifyBulkRPC = e), (l.parseNotifyBulkRequest = s));
  },
  98,
);
