__d(
  "WASmaxInMessageDeliverDeprecatedPayTypeMixin",
  ["WAResultOrError", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "enc");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "mediatype",
        "pay",
      );
      return n.success
        ? o("WAResultOrError").makeResult({ mediatype: n.value })
        : n;
    }
    function s(t) {
      var n = o("WASmaxParseUtils").assertTag(t, "message");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").mapHomogeneousChildrenWithTag(t, "enc", e);
      return r.success ? o("WAResultOrError").makeResult({ enc: r.value }) : r;
    }
    ((l.parseDeprecatedPayTypeEnc = e), (l.parseDeprecatedPayTypeMixin = s));
  },
  98,
);
