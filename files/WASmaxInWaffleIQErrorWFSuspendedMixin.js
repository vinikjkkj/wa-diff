__d(
  "WASmaxInWaffleIQErrorWFSuspendedMixin",
  ["WAResultOrError", "WASmaxInWaffleEnums", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "error");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "text",
        "wf-suspended",
      );
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrInt,
        e,
        "code",
        484,
      );
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrStringEnum,
        e,
        "ndc",
        o("WASmaxInWaffleEnums").ENUM_FALSE_TRUE,
      );
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrStringEnum,
        e,
        "npr",
        o("WASmaxInWaffleEnums").ENUM_FALSE_TRUE,
      );
      return i.success
        ? o("WAResultOrError").makeResult({
            text: n.value,
            code: r.value,
            ndc: a.value,
            npr: i.value,
          })
        : i;
    }
    l.parseIQErrorWFSuspendedMixin = e;
  },
  98,
);
