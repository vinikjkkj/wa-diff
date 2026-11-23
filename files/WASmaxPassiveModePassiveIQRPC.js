__d(
  "WASmaxPassiveModePassiveIQRPC",
  [
    "WAComms",
    "WAResultOrError",
    "WASmaxJsx",
    "WASmaxParseJid",
    "WASmaxParseReference",
    "WASmaxParseUtils",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
    "WAWap",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      var t = u(),
        n = await o("WAComms").sendSmaxStanza(t, e),
        r = s(n, t);
      if (r.success)
        return { name: "PassiveIQResponseSuccess", value: r.value };
      throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
        o("WASmaxRpcUtils").errorMessageRpcParsing("PassiveIQ", { Success: r }),
      );
    }
    function s(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(e, "passive");
      if (!r.success) return r;
      var a = o("WASmaxParseReference").attrStringFromReference(t, ["id"]);
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "id",
        a.value,
      );
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "type",
        "result",
      );
      if (!l.success) return l;
      var s = o("WASmaxParseJid").literalJid(
        o("WASmaxParseJid").attrDomainJid,
        e,
        "from",
        "s.whatsapp.net",
      );
      return s.success
        ? o("WAResultOrError").makeResult({ type: l.value, from: s.value })
        : s;
    }
    function u() {
      var e = o("WASmaxJsx").smax(
        "iq",
        {
          id: o("WAWap").generateId(),
          type: "set",
          xmlns: "passive",
          to: o("WAWap").S_WHATSAPP_NET,
        },
        o("WASmaxJsx").smax("passive", null),
      );
      return e;
    }
    ((l.sendPassiveIQRPC = e),
      (l.parsePassiveIQResponseSuccess = s),
      (l.makePassiveIQRequest = u));
  },
  98,
);
