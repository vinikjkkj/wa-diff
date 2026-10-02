__d(
  "WASmaxInMessageDeliverInstallmentMixin",
  ["WAResultOrError", "WASmaxInMessageDeliverMoneyMixin", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "due_amount");
      if (!t.success) return t;
      var n = o("WASmaxInMessageDeliverMoneyMixin").parseMoneyMixin(e);
      return (n.success, n);
    }
    function s(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "interest");
      if (!t.success) return t;
      var n = o("WASmaxInMessageDeliverMoneyMixin").parseMoneyMixin(e);
      return (n.success, n);
    }
    function u(t) {
      var n = o("WASmaxParseUtils").flattenedChildWithTag(t, "installment");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").optionalChildWithTag(
        n.value,
        "due_amount",
        e,
      );
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").optionalChildWithTag(
        n.value,
        "interest",
        s,
      );
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrIntRange,
        n.value,
        "max_count",
        1,
        50,
      );
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").attrIntRange(
        n.value,
        "selected_count",
        1,
        50,
      );
      return l.success
        ? o("WAResultOrError").makeResult({
            installmentMaxCount: i.value,
            installmentSelectedCount: l.value,
            installmentDueAmount: r.value,
            installmentInterest: a.value,
          })
        : l;
    }
    ((l.parseInstallmentInstallmentDueAmount = e),
      (l.parseInstallmentInstallmentInterest = s),
      (l.parseInstallmentMixin = u));
  },
  98,
);
