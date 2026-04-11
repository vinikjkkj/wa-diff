__d(
  "WASmaxInReceiptPublishSuccessMixin",
  [
    "WAResultOrError",
    "WASmaxInReceiptDeprecatedEditMixin",
    "WASmaxInReceiptEnums",
    "WASmaxParseReference",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "ack");
      if (!n.success) return n;
      var r = o("WASmaxParseReference").attrStringFromReference(t, ["id"]);
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "id",
        r.value,
      );
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "class",
        "receipt",
      );
      if (!i.success) return i;
      var l = o("WASmaxParseReference").attrStringFromReference(t, ["to"]);
      if (!l.success) return l;
      var s = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "from",
        l.value,
      );
      if (!s.success) return s;
      var u = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrIntRange,
        e,
        "t",
        0,
        void 0,
      );
      if (!u.success) return u;
      var c = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrStringEnum,
        e,
        "readreceipts",
        o("WASmaxInReceiptEnums").ENUM_ALL_NONE,
      );
      if (!c.success) return c;
      var d = o("WASmaxParseReference").attrStringFromReference(t, ["type"]);
      if (!d.success) return d;
      var m = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "type",
        d.value,
      );
      if (!m.success) return m;
      var p = o("WASmaxInReceiptDeprecatedEditMixin").parseDeprecatedEditMixin(
        e,
      );
      return o("WAResultOrError").makeResult({
        class: i.value,
        t: u.value,
        readreceipts: c.value,
        deprecatedEditMixin: p.success ? p.value : null,
      });
    }
    l.parsePublishSuccessMixin = e;
  },
  98,
);
