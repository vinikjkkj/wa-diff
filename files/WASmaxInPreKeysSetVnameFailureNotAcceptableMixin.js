__d(
  "WASmaxInPreKeysSetVnameFailureNotAcceptableMixin",
  ["WAResultOrError", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "error");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "violation");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "text",
        "not-acceptable",
      );
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").attrString(n.value, "reason");
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrInt,
        n.value,
        "max",
      );
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrInt,
        n.value,
        "length",
      );
      return l.success
        ? o("WAResultOrError").makeResult({
            text: r.value,
            violationReason: a.value,
            violationMax: i.value,
            violationLength: l.value,
          })
        : l;
    }
    l.parseSetVnameFailureNotAcceptableMixin = e;
  },
  98,
);
