__d(
  "WASmaxInMessageDeliverUPIMandateBaseMixin",
  [
    "WAResultOrError",
    "WASmaxInMessageDeliverEnums",
    "WASmaxInMessageDeliverFrequencyRuleMixin",
    "WASmaxInMessageDeliverMoneyMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "mandate");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "original-amount");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrString(e, "mandate-no");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").attrStringEnum(
        e,
        "amount-rule",
        o("WASmaxInMessageDeliverEnums").ENUM_EXACT_MAX,
      );
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").attrIntRange(e, "start-ts", 0, void 0);
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").attrIntRange(e, "end-ts", 0, void 0);
      if (!l.success) return l;
      var s = o("WASmaxParseUtils").attrStringEnum(
        e,
        "is-revocable",
        o("WASmaxInMessageDeliverEnums").ENUM_0_1,
      );
      if (!s.success) return s;
      var u = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "purpose-code",
      );
      if (!u.success) return u;
      var c = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "mandate-name",
      );
      if (!c.success) return c;
      var d = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrIntRange,
        e,
        "error-code",
        1,
        1e7,
      );
      if (!d.success) return d;
      var m = o("WASmaxInMessageDeliverMoneyMixin").parseMoneyMixin(n.value);
      if (!m.success) return m;
      var p = o(
        "WASmaxInMessageDeliverFrequencyRuleMixin",
      ).parseFrequencyRuleMixin(e);
      return p.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends(
              {
                mandateNo: r.value,
                amountRule: a.value,
                startTs: i.value,
                endTs: l.value,
                isRevocable: s.value,
                purposeCode: u.value,
                mandateName: c.value,
                errorCode: d.value,
                originalAmountMoneyMixin: m.value,
              },
              p.value,
            ),
          )
        : p;
    }
    l.parseUPIMandateBaseMixin = e;
  },
  98,
);
