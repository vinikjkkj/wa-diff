__d(
  "WASmaxInMessageDeliverProductListDeprecatedMixin",
  ["WAResultOrError", "WASmaxInMessageDeliverEnums", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "biz");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(n.value, "list");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        r.value,
        "type",
        "product_list",
      );
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").attrStringEnum(
        r.value,
        "v",
        o("WASmaxInMessageDeliverEnums").ENUM_1_2,
      );
      return i.success
        ? o("WAResultOrError").makeResult({
            bizListType: a.value,
            bizListV: i.value,
          })
        : i;
    }
    l.parseProductListDeprecatedMixin = e;
  },
  98,
);
