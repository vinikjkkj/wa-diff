__d(
  "WASmaxInPingsClientResponseServerResponse",
  [
    "WAResultOrError",
    "WASmaxInPingsEnums",
    "WASmaxParseJid",
    "WASmaxParseReference",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseJid").attrJidEnum(
        e,
        "from",
        o("WASmaxInPingsEnums").DOMAINJID_USERJID,
      );
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "type",
        "result",
      );
      if (!a.success) return a;
      var i = o("WASmaxParseReference").attrStringFromReference(t, ["id"]);
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "id",
        i.value,
      );
      if (!l.success) return l;
      var s = o("WASmaxParseUtils").attrInt(e, "t");
      return s.success
        ? o("WAResultOrError").makeResult({
            from: r.value,
            type: a.value,
            t: s.value,
          })
        : s;
    }
    l.parseClientResponseServerResponse = e;
  },
  98,
);
