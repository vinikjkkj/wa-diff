__d(
  "WASmaxInMessageDeliverBasePayNodeMixin",
  [
    "WAResultOrError",
    "WASmaxInMessageDeliverEnums",
    "WASmaxInMessageDeliverPayNodeTypeMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "pay");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "country",
      );
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrIntRange,
        e,
        "version",
        0,
        void 0,
      );
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrStringEnum,
        e,
        "is_first_send",
        o("WASmaxInMessageDeliverEnums").ENUM_0_1,
      );
      if (!a.success) return a;
      var i = o("WASmaxInMessageDeliverPayNodeTypeMixin").parsePayNodeTypeMixin(
        e,
      );
      return i.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends(
              { country: n.value, version: r.value, isFirstSend: a.value },
              i.value,
            ),
          )
        : i;
    }
    l.parseBasePayNodeMixin = e;
  },
  98,
);
