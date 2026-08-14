__d(
  "WASmaxInStatusDeliverEncStateMixin",
  ["WAResultOrError", "WASmaxInStatusDeliverEnums", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "enc");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrStringEnum(
        e,
        "state",
        o("WASmaxInStatusDeliverEnums").ENUM_FALSE_TRUE,
      );
      return n.success
        ? o("WAResultOrError").makeResult({ state: n.value })
        : n;
    }
    l.parseEncStateMixin = e;
  },
  98,
);
