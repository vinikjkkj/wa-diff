__d(
  "WASmaxStreamErrorBadMacRPC",
  ["WASmaxParseUtils", "WASmaxParsingFailure", "WASmaxRpcUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = s(e);
      if (!t.success)
        throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
          o("WASmaxRpcUtils").errorMessageRpcParsing("BadMac", { Request: t }),
        );
      return { parsedRequest: t.value };
    }
    function s(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "stream:error");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "bad-mac");
      return n.success ? o("WASmaxParseUtils").voidSuccess : n;
    }
    ((l.receiveBadMacRPC = e), (l.parseBadMacRequest = s));
  },
  98,
);
