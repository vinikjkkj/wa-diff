__d(
  "WASmaxInSyncdNewPatchRequest",
  [
    "WAResultOrError",
    "WASmaxInSyncdServerNotificationMixin",
    "WASmaxParseJid",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "collection");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrString(e, "name");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrIntRange(e, "version", 0, void 0);
      return r.success
        ? o("WAResultOrError").makeResult({ name: n.value, version: r.value })
        : r;
    }
    function s(t) {
      var n = o("WASmaxParseUtils").assertTag(t, "notification");
      if (!n.success) return n;
      var r = o("WASmaxParseJid").literalJid(
        o("WASmaxParseJid").attrDomainJid,
        t,
        "from",
        "s.whatsapp.net",
      );
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        t,
        "type",
        "server_sync",
      );
      if (!a.success) return a;
      var i = o(
        "WASmaxInSyncdServerNotificationMixin",
      ).parseServerNotificationMixin(t);
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").mapChildrenWithTag(
        t,
        "collection",
        1,
        20,
        e,
      );
      return l.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({ from: r.value, type: a.value }, i.value, {
              collection: l.value,
            }),
          )
        : l;
    }
    ((l.parseNewPatchRequestCollection = e), (l.parseNewPatchRequest = s));
  },
  98,
);
