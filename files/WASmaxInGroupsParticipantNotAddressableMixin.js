__d(
  "WASmaxInGroupsParticipantNotAddressableMixin",
  ["WAResultOrError", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "participant");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "addressable",
        "false",
      );
      return n.success
        ? o("WAResultOrError").makeResult({ addressable: n.value })
        : n;
    }
    l.parseParticipantNotAddressableMixin = e;
  },
  98,
);
