__d(
  "WASmaxInMessageDeliverLIDSessionDeprecationMixin",
  ["WAResultOrError", "WASmaxInMessageDeliverEnums", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "meta");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrStringEnum(
        n.value,
        "deprecated_lid_session",
        o("WASmaxInMessageDeliverEnums").ENUM_FALSE_TRUE,
      );
      return r.success
        ? o("WAResultOrError").makeResult({ metaDeprecatedLidSession: r.value })
        : r;
    }
    l.parseLIDSessionDeprecationMixin = e;
  },
  98,
);
