__d(
  "WASmaxPassiveModeActiveIQRPC",
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
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = c(),
            n = yield o("WAComms").sendSmaxStanza(t, e),
            r = u(n, t);
          if (r.success)
            return { name: "ActiveIQResponseSuccess", value: r.value };
          throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
            o("WASmaxRpcUtils").errorMessageRpcParsing("ActiveIQ", {
              Success: r,
            }),
          );
        })),
        s.apply(this, arguments)
      );
    }
    function u(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(e, "active");
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
    function c() {
      var e = o("WASmaxJsx").smax(
        "iq",
        {
          id: o("WAWap").generateId(),
          type: "set",
          xmlns: "passive",
          to: o("WAWap").S_WHATSAPP_NET,
        },
        o("WASmaxJsx").smax("active", null),
      );
      return e;
    }
    ((l.sendActiveIQRPC = e),
      (l.parseActiveIQResponseSuccess = u),
      (l.makeActiveIQRequest = c));
  },
  98,
);
