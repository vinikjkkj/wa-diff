__d(
  "WASmaxOutMessagePublishInstallmentMixin",
  [
    "WASmaxAttrs",
    "WASmaxChildren",
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxOutMessagePublishMoneyMixin",
    "WAWap",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxOutMessagePublishMoneyMixin").mergeMoneyMixin(
        o("WASmaxJsx").smax("due_amount", null),
        e,
      );
      return t;
    }
    function s(e) {
      var t = o("WASmaxOutMessagePublishMoneyMixin").mergeMoneyMixin(
        o("WASmaxJsx").smax("interest", null),
        e,
      );
      return t;
    }
    function u(t) {
      var n = t.dueAmountArgs,
        r = t.interestArgs,
        a = t.installmentMaxCount,
        i = t.installmentSelectedCount,
        l = o("WASmaxJsx").smax(
          "smax$any",
          null,
          o("WASmaxJsx").smax(
            "installment",
            {
              max_count: o("WASmaxAttrs").OPTIONAL(o("WAWap").INT, a),
              selected_count: o("WAWap").INT(i),
            },
            o("WASmaxChildren").OPTIONAL_CHILD(e, n),
            o("WASmaxChildren").OPTIONAL_CHILD(s, r),
          ),
        );
      return l;
    }
    function c(e, t) {
      var n = u(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    ((l.makeInstallmentInstallmentDueAmount = e),
      (l.makeInstallmentInstallmentInterest = s),
      (l.mergeInstallmentMixin = c));
  },
  98,
);
