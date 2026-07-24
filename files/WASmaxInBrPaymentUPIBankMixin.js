__d(
  "WASmaxInBrPaymentUPIBankMixin",
  [
    "WAResultOrError",
    "WASmaxInBrPaymentConsumerBaseMixin",
    "WASmaxInBrPaymentEnums",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "bank");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "type",
        "upi",
      );
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "vpa",
      );
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").attrString(e, "provider");
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "vpa-id",
      );
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").attrString(e, "account-number");
      if (!l.success) return l;
      var s = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "mmid",
      );
      if (!s.success) return s;
      var u = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "account-name",
      );
      if (!u.success) return u;
      var c = o("WASmaxParseUtils").attrStringEnum(
        e,
        "is-mpin-set",
        o("WASmaxInBrPaymentEnums").ENUM_0_1,
      );
      if (!c.success) return c;
      var d = o("WASmaxParseUtils").attrIntRange(e, "atm-pin-length", 0, 100);
      if (!d.success) return d;
      var m = o("WASmaxParseUtils").attrIntRange(e, "mpin-length", 0, 100);
      if (!m.success) return m;
      var p = o("WASmaxParseUtils").attrIntRange(e, "otp-length", 0, 100);
      if (!p.success) return p;
      var _ = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "image",
      );
      if (!_.success) return _;
      var f = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "bank-name",
      );
      if (!f.success) return f;
      var g = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "bank-phone-number",
      );
      if (!g.success) return g;
      var h = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "code",
      );
      if (!h.success) return h;
      var y = o("WASmaxParseUtils").attrStringEnum(
        e,
        "pin-format-version",
        o("WASmaxInBrPaymentEnums").ENUM_1_2,
      );
      if (!y.success) return y;
      var C = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "upi-bank-info",
      );
      if (!C.success) return C;
      var b = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "transaction-prefix",
      );
      if (!b.success) return b;
      var v = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "account-type",
      );
      if (!v.success) return v;
      var S = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrIntRange,
        e,
        "bank-ref-id",
        0,
        void 0,
      );
      if (!S.success) return S;
      var R = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "ifsc-code",
      );
      if (!R.success) return R;
      var L = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "account-ref-id",
      );
      if (!L.success) return L;
      var E = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrStringEnum,
        e,
        "is-aadhaar-enabled",
        o("WASmaxInBrPaymentEnums").ENUM_0_1,
      );
      if (!E.success) return E;
      var k = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrStringEnum,
        e,
        "is_international_pay_enabled",
        o("WASmaxInBrPaymentEnums").ENUM_0_1,
      );
      if (!k.success) return k;
      var I = o("WASmaxInBrPaymentConsumerBaseMixin").parseConsumerBaseMixin(e);
      return I.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends(
              {
                type: n.value,
                vpa: r.value,
                provider: a.value,
                vpaId: i.value,
                accountNumber: l.value,
                mmid: s.value,
                accountName: u.value,
                isMpinSet: c.value,
                atmPinLength: d.value,
                mpinLength: m.value,
                otpLength: p.value,
                image: _.value,
                bankName: f.value,
                bankPhoneNumber: g.value,
                code: h.value,
                pinFormatVersion: y.value,
                upiBankInfo: C.value,
                transactionPrefix: b.value,
                accountType: v.value,
                bankRefId: S.value,
                ifscCode: R.value,
                accountRefId: L.value,
                isAadhaarEnabled: E.value,
                isInternationalPayEnabled: k.value,
              },
              I.value,
            ),
          )
        : I;
    }
    l.parseUPIBankMixin = e;
  },
  98,
);
