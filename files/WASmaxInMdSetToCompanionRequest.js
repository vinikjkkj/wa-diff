__d(
  "WASmaxInMdSetToCompanionRequest",
  [
    "WAResultOrError",
    "WASmaxInMdBaseIQSetRequestMixin",
    "WASmaxParseJid",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "ref");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").contentBytes(e);
      return n.success
        ? o("WAResultOrError").makeResult({ elementValue: n.value })
        : n;
    }
    function s(t) {
      var n = o("WASmaxParseUtils").assertTag(t, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(t, "pair-device");
      if (!r.success) return r;
      var a = o("WASmaxParseJid").literalJid(
        o("WASmaxParseJid").attrDomainJid,
        t,
        "from",
        "s.whatsapp.net",
      );
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        t,
        "xmlns",
        "md",
      );
      if (!i.success) return i;
      var l = o("WASmaxInMdBaseIQSetRequestMixin").parseBaseIQSetRequestMixin(
        t,
      );
      if (!l.success) return l;
      var s = o("WASmaxParseUtils").mapChildrenWithTag(r.value, "ref", 6, 6, e);
      return s.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({ from: a.value, xmlns: i.value }, l.value, {
              pairDeviceRef: s.value,
            }),
          )
        : s;
    }
    ((l.parseSetToCompanionRequestPairDeviceRef = e),
      (l.parseSetToCompanionRequest = s));
  },
  98,
);
