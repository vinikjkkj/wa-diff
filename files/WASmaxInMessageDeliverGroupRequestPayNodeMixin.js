__d(
  "WASmaxInMessageDeliverGroupRequestPayNodeMixin",
  [
    "WAResultOrError",
    "WASmaxInMessageDeliverIndividualRequestPayNodeMixin",
    "WASmaxParseJid",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "pay");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").optional(
        o("WASmaxParseJid").attrGroupJid,
        e,
        "group",
      );
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").optional(
        o("WASmaxParseJid").attrUserJid,
        e,
        "receiver",
      );
      if (!r.success) return r;
      var a = o(
        "WASmaxInMessageDeliverIndividualRequestPayNodeMixin",
      ).parseIndividualRequestPayNodeMixin(e);
      return a.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends(
              { group: n.value, receiver: r.value },
              a.value,
            ),
          )
        : a;
    }
    l.parseGroupRequestPayNodeMixin = e;
  },
  98,
);
