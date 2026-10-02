__d(
  "WASmaxInMessageDeliverContentTypePayMixin",
  [
    "WAResultOrError",
    "WASmaxInMessageDeliverDeprecatedPayTypeMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "type",
        "pay",
      );
      if (!n.success) return n;
      var r = o(
        "WASmaxInMessageDeliverDeprecatedPayTypeMixin",
      ).parseDeprecatedPayTypeMixin(e);
      return o("WAResultOrError").makeResult({
        type: n.value,
        deprecatedPayTypeMixin: r.success ? r.value : null,
      });
    }
    l.parseContentTypePayMixin = e;
  },
  98,
);
