__d(
  "WASmaxMdSetToCompanionRPC",
  [
    "WAResultOrError",
    "WASmaxInMdBaseIQSetRequestMixin",
    "WASmaxJsx",
    "WASmaxParseJid",
    "WASmaxParseReference",
    "WASmaxParseUtils",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
    "WAWap",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = u(e);
      if (!t.success)
        throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
          o("WASmaxRpcUtils").errorMessageRpcParsing("SetToCompanion", {
            Request: t,
          }),
        );
      return {
        parsedRequest: t.value,
        makeSetToCompanionResponseClientResponse: function () {
          return c(e);
        },
      };
    }
    function s(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "ref");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").contentBytes(e);
      return n.success
        ? o("WAResultOrError").makeResult({ elementValue: n.value })
        : n;
    }
    function u(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "pair-device");
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
        "xmlns",
        "md",
      );
      if (!a.success) return a;
      var i = o("WASmaxInMdBaseIQSetRequestMixin").parseBaseIQSetRequestMixin(
        e,
      );
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").mapChildrenWithTag(n.value, "ref", 6, 6, s);
      return l.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({ from: r.value, xmlns: a.value }, i.value, {
              pairDeviceRef: l.value,
            }),
          )
        : l;
    }
    function c(e) {
      var t = o("WASmaxParseReference").attrFromReference(
        o("WASmaxParseUtils").attrStanzaId,
        e,
        ["id"],
      );
      if (!t.success)
        throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(t.error);
      var n = o("WASmaxParseReference").attrFromReference(
        o("WASmaxParseJid").attrDomainJid,
        e,
        ["from"],
      );
      if (!n.success)
        throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(n.error);
      var r = o("WASmaxJsx").smax("iq", {
        id: o("WAWap").STANZA_ID(t.value),
        to: o("WAWap").DOMAIN_JID(n.value),
        type: "result",
      });
      return r;
    }
    ((l.receiveSetToCompanionRPC = e),
      (l.parseSetToCompanionRequestPairDeviceRef = s),
      (l.parseSetToCompanionRequest = u),
      (l.makeSetToCompanionResponseClientResponse = c));
  },
  98,
);
