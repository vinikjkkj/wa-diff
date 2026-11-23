__d(
  "WASmaxMessageRequestSpamMarkerRPC",
  [
    "WAResultOrError",
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
          o("WASmaxRpcUtils").errorMessageRpcParsing("SpamMarker", {
            Request: t,
          }),
        );
      return { parsedRequest: t.value };
    }
    function s(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "ib");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "spam");
      if (!n.success) return n;
      var r = o("WASmaxParseJid").literalJid(
        o("WASmaxParseJid").attrDomainJid,
        e,
        "from",
        "s.whatsapp.net",
      );
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").attrStringEnum(n.value, "state", u);
      return a.success
        ? o("WAResultOrError").makeResult({ from: r.value, spamState: a.value })
        : a;
    }
    var u = { complete: "complete", continue: "continue" };
    ((l.receiveSpamMarkerRPC = e),
      (l.parseSpamMarkerRequest = s),
      (l.ENUM_COMPLETE_CONTINUE = u));
  },
  98,
);
