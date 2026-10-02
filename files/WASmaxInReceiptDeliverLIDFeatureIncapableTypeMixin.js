__d(
  "WASmaxInReceiptDeliverLIDFeatureIncapableTypeMixin",
  [
    "WAResultOrError",
    "WASmaxInReceiptDeliverFeatureIncapableErrorTypeMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "receipt");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "error");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        n.value,
        "type",
        "feature-incapable",
      );
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        n.value,
        "reason",
        "lid",
      );
      if (!a.success) return a;
      var i = o(
        "WASmaxInReceiptDeliverFeatureIncapableErrorTypeMixin",
      ).parseDeliverFeatureIncapableErrorTypeMixin(e);
      return i.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends(
              { errorType: r.value, errorReason: a.value },
              i.value,
            ),
          )
        : i;
    }
    l.parseDeliverLIDFeatureIncapableTypeMixin = e;
  },
  98,
);
