__d(
  "WASmaxInMessageDeliverRegularRequest",
  [
    "WAResultOrError",
    "WASmaxInMessageDeliverBaseMixin",
    "WASmaxInMessageDeliverMessageDeliverTypes",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrStanzaId(e, "id");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrIntRange(e, "t", 0, void 0);
      if (!r.success) return r;
      var a = o("WASmaxInMessageDeliverBaseMixin").parseBaseMixin(e);
      if (!a.success) return a;
      var i = o(
        "WASmaxInMessageDeliverMessageDeliverTypes",
      ).parseMessageDeliverTypes(e);
      return i.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({ id: n.value, t: r.value }, a.value, {
              messageDeliverTypes: i.value,
            }),
          )
        : i;
    }
    l.parseRegularRequest = e;
  },
  98,
);
