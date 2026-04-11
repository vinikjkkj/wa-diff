__d(
  "WASmaxInSmbMeteredMessagingAccountGetSMBMeteredMessagingCheckoutResponseSuccess",
  [
    "WAResultOrError",
    "WASmaxInSmbMeteredMessagingAccountEnums",
    "WASmaxInSmbMeteredMessagingAccountHackBaseIQResultResponseMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "discount");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrStringEnum(
        e,
        "type",
        o("WASmaxInSmbMeteredMessagingAccountEnums").ENUM_FREEMSG_PERCENTAGE,
      );
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrInt,
        e,
        "percentage",
      );
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").attrInt(e, "amount");
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").attrString(e, "amount_formatted");
      return i.success
        ? o("WAResultOrError").makeResult({
            type: n.value,
            percentage: r.value,
            amount: a.value,
            amountFormatted: i.value,
          })
        : i;
    }
    function s(t) {
      var n = o("WASmaxParseUtils").assertTag(t, "discounts");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").mapChildrenWithTag(t, "discount", 0, 10, e);
      return r.success
        ? o("WAResultOrError").makeResult({ discount: r.value })
        : r;
    }
    function u(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "quota");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrInt(e, "remaining");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrInt(e, "total_monthly");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrInt,
        e,
        "single_credits",
      );
      return a.success
        ? o("WAResultOrError").makeResult({
            remaining: n.value,
            totalMonthly: r.value,
            singleCredits: a.value,
          })
        : a;
    }
    function c(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(e, "cost");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").flattenedChildWithTag(e, "integrity");
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").flattenedChildWithTag(e, "account_balance");
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").optionalChildWithTag(
        r.value,
        "discounts",
        s,
      );
      if (!l.success) return l;
      var c = o("WASmaxParseUtils").optionalChildWithTag(e, "quota", u);
      if (!c.success) return c;
      var d = o("WASmaxParseUtils").attrInt(r.value, "before_tax");
      if (!d.success) return d;
      var m = o("WASmaxParseUtils").attrInt(r.value, "tax");
      if (!m.success) return m;
      var p = o("WASmaxParseUtils").attrInt(r.value, "offset");
      if (!p.success) return p;
      var _ = o("WASmaxParseUtils").attrString(r.value, "currency");
      if (!_.success) return _;
      var f = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrInt,
        r.value,
        "base",
      );
      if (!f.success) return f;
      var g = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        r.value,
        "base_formatted",
      );
      if (!g.success) return g;
      var h = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrInt,
        r.value,
        "discount_percent",
      );
      if (!h.success) return h;
      var y = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrInt,
        r.value,
        "before_discount",
      );
      if (!y.success) return y;
      var C = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        r.value,
        "before_discount_formatted",
      );
      if (!C.success) return C;
      var b = o("WASmaxParseUtils").attrStringEnum(
        a.value,
        "is_eligible",
        o("WASmaxInSmbMeteredMessagingAccountEnums").ENUM_FALSE_TRUE,
      );
      if (!b.success) return b;
      var v = o("WASmaxParseUtils").attrInt(i.value, "billing");
      if (!v.success) return v;
      var S = o("WASmaxParseUtils").attrInt(i.value, "available");
      if (!S.success) return S;
      var R = o("WASmaxParseUtils").attrInt(i.value, "offset");
      if (!R.success) return R;
      var L = o(
        "WASmaxInSmbMeteredMessagingAccountHackBaseIQResultResponseMixin",
      ).parseHackBaseIQResultResponseMixin(e, t);
      return L.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends(
              {
                costBeforeTax: d.value,
                costTax: m.value,
                costOffset: p.value,
                costCurrency: _.value,
                costBase: f.value,
                costBaseFormatted: g.value,
                costDiscountPercent: h.value,
                costBeforeDiscount: y.value,
                costBeforeDiscountFormatted: C.value,
                integrityIsEligible: b.value,
                accountBalanceBilling: v.value,
                accountBalanceAvailable: S.value,
                accountBalanceOffset: R.value,
              },
              L.value,
              { costDiscounts: l.value, quota: c.value },
            ),
          )
        : L;
    }
    ((l.parseGetSMBMeteredMessagingCheckoutResponseSuccessCostDiscountsDiscount =
      e),
      (l.parseGetSMBMeteredMessagingCheckoutResponseSuccessCostDiscounts = s),
      (l.parseGetSMBMeteredMessagingCheckoutResponseSuccessQuota = u),
      (l.parseGetSMBMeteredMessagingCheckoutResponseSuccess = c));
  },
  98,
);
