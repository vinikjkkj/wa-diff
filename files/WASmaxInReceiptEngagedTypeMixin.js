__d(
  "WASmaxInReceiptEngagedTypeMixin",
  [
    "WAResultOrError",
    "WASmaxInReceiptRoiTemplateSourceMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "receipt");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "biz");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "type",
        "engaged",
      );
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").attrString(n.value, "value");
      if (!a.success) return a;
      var i = o(
        "WASmaxInReceiptRoiTemplateSourceMixin",
      ).parseRoiTemplateSourceMixin(n.value);
      return i.success
        ? o("WAResultOrError").makeResult({
            type: r.value,
            bizValue: a.value,
            bizRoiTemplateSourceMixin: i.value,
          })
        : i;
    }
    l.parseEngagedTypeMixin = e;
  },
  98,
);
