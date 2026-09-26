__d(
  "WASmaxInBrPaymentGetPixBankListResponseSuccess",
  [
    "WAResultOrError",
    "WASmaxInBrPaymentEnums",
    "WASmaxInBrPaymentIQResultResponseMixin",
    "WASmaxParseReference",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "bank");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrString(e, "bank_name");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrString(e, "image_url");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").attrString(e, "bank_ref_id");
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").attrString(e, "psp_routing");
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").attrInt(e, "ttl");
      if (!l.success) return l;
      var s = o("WASmaxParseUtils").attrStringEnum(
        e,
        "is_available",
        o("WASmaxInBrPaymentEnums").ENUM_FALSE_TRUE,
      );
      if (!s.success) return s;
      var u = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrStringEnum,
        e,
        "is_popular",
        o("WASmaxInBrPaymentEnums").ENUM_FALSE_TRUE,
      );
      return u.success
        ? o("WAResultOrError").makeResult({
            bankName: n.value,
            imageUrl: r.value,
            bankRefId: a.value,
            pspRouting: i.value,
            ttl: l.value,
            isAvailable: s.value,
            isPopular: u.value,
          })
        : u;
    }
    function s(t, n) {
      var r = o("WASmaxParseUtils").assertTag(t, "iq");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").flattenedChildWithTag(t, "account");
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").flattenedChildWithTag(a.value, "banks");
      if (!i.success) return i;
      var l = o("WASmaxParseReference").attrStringFromReference(n, [
        "account",
        "action",
      ]);
      if (!l.success) return l;
      var s = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        a.value,
        "action",
        l.value,
      );
      if (!s.success) return s;
      var u = o(
        "WASmaxInBrPaymentIQResultResponseMixin",
      ).parseIQResultResponseMixin(t, n);
      if (!u.success) return u;
      var c = o("WASmaxParseUtils").mapChildrenWithTag(
        i.value,
        "bank",
        0,
        1e3,
        e,
      );
      return c.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({}, u.value, { accountBanksBank: c.value }),
          )
        : c;
    }
    ((l.parseGetPixBankListResponseSuccessAccountBanksBank = e),
      (l.parseGetPixBankListResponseSuccess = s));
  },
  98,
);
