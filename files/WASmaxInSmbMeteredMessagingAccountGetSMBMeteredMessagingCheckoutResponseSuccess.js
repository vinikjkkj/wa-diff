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
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrInt,
        e,
        "total_available_credits",
      );
      return i.success
        ? o("WAResultOrError").makeResult({
            remaining: n.value,
            totalMonthly: r.value,
            singleCredits: a.value,
            totalAvailableCredits: i.value,
          })
        : i;
    }
    function c(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "offer_status");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrStringEnum(
        e,
        "value",
        o("WASmaxInSmbMeteredMessagingAccountEnums")
          .ENUM_ALREADYCLAIMED_EXPIRED_INVALID_NOTFOUND_NOTOWNED_VALID,
      );
      return n.success
        ? o("WAResultOrError").makeResult({ value: n.value })
        : n;
    }
    function d(e, t) {
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
      var d = o("WASmaxParseUtils").optionalChildWithTag(e, "quota", u);
      if (!d.success) return d;
      var m = o("WASmaxParseUtils").optionalChildWithTag(e, "offer_status", c);
      if (!m.success) return m;
      var p = o("WASmaxParseUtils").attrInt(r.value, "before_tax");
      if (!p.success) return p;
      var _ = o("WASmaxParseUtils").attrInt(r.value, "tax");
      if (!_.success) return _;
      var f = o("WASmaxParseUtils").attrInt(r.value, "offset");
      if (!f.success) return f;
      var g = o("WASmaxParseUtils").attrString(r.value, "currency");
      if (!g.success) return g;
      var h = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrInt,
        r.value,
        "base",
      );
      if (!h.success) return h;
      var y = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        r.value,
        "base_formatted",
      );
      if (!y.success) return y;
      var C = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrInt,
        r.value,
        "discount_percent",
      );
      if (!C.success) return C;
      var b = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrInt,
        r.value,
        "before_discount",
      );
      if (!b.success) return b;
      var v = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        r.value,
        "before_discount_formatted",
      );
      if (!v.success) return v;
      var S = o("WASmaxParseUtils").attrStringEnum(
        a.value,
        "is_eligible",
        o("WASmaxInSmbMeteredMessagingAccountEnums").ENUM_FALSE_TRUE,
      );
      if (!S.success) return S;
      var R = o("WASmaxParseUtils").attrInt(i.value, "billing");
      if (!R.success) return R;
      var L = o("WASmaxParseUtils").attrInt(i.value, "available");
      if (!L.success) return L;
      var E = o("WASmaxParseUtils").attrInt(i.value, "offset");
      if (!E.success) return E;
      var k = o(
        "WASmaxInSmbMeteredMessagingAccountHackBaseIQResultResponseMixin",
      ).parseHackBaseIQResultResponseMixin(e, t);
      return k.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends(
              {
                costBeforeTax: p.value,
                costTax: _.value,
                costOffset: f.value,
                costCurrency: g.value,
                costBase: h.value,
                costBaseFormatted: y.value,
                costDiscountPercent: C.value,
                costBeforeDiscount: b.value,
                costBeforeDiscountFormatted: v.value,
                integrityIsEligible: S.value,
                accountBalanceBilling: R.value,
                accountBalanceAvailable: L.value,
                accountBalanceOffset: E.value,
              },
              k.value,
              { costDiscounts: l.value, quota: d.value, offerStatus: m.value },
            ),
          )
        : k;
    }
    ((l.parseGetSMBMeteredMessagingCheckoutResponseSuccessCostDiscountsDiscount =
      e),
      (l.parseGetSMBMeteredMessagingCheckoutResponseSuccessCostDiscounts = s),
      (l.parseGetSMBMeteredMessagingCheckoutResponseSuccessQuota = u),
      (l.parseGetSMBMeteredMessagingCheckoutResponseSuccessOfferStatus = c),
      (l.parseGetSMBMeteredMessagingCheckoutResponseSuccess = d));
  },
  98,
);
