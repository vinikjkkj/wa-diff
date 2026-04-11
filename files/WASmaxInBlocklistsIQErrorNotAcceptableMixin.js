__d(
  "WASmaxInBlocklistsIQErrorNotAcceptableMixin",
  ["WAResultOrError", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "field");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrString(e, "name");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrString(e, "reason");
      return r.success
        ? o("WAResultOrError").makeResult({ name: n.value, reason: r.value })
        : r;
    }
    function s(t) {
      var n = o("WASmaxParseUtils").assertTag(t, "error");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").optionalChildWithTag(t, "field", e);
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        t,
        "text",
        "not-acceptable",
      );
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrInt,
        t,
        "code",
        406,
      );
      return i.success
        ? o("WAResultOrError").makeResult({
            text: a.value,
            code: i.value,
            field: r.value,
          })
        : i;
    }
    ((l.parseIQErrorNotAcceptableField = e),
      (l.parseIQErrorNotAcceptableMixin = s));
  },
  98,
);
