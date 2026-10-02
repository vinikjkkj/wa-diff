__d(
  "WASmaxInMessageDeliverUnavailableMixin",
  ["WAResultOrError", "WASmaxInMessageDeliverEnums", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "unavailable");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrStringEnum,
        n.value,
        "type",
        o("WASmaxInMessageDeliverEnums").ENUM_HOSTED_VIEWONCE,
      );
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").optionalLiteral(
        o("WASmaxParseUtils").attrString,
        n.value,
        "hosted",
        "true",
      );
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").countChildrenWithTag(
        e,
        "enc",
        0,
        1 / 0,
        o("WAResultOrError").makeResult,
      );
      return i.success
        ? o("WAResultOrError").makeResult({
            unavailableType: r.value,
            unavailableHosted: a.value,
            countEnc: i.value,
          })
        : i;
    }
    l.parseUnavailableMixin = e;
  },
  98,
);
