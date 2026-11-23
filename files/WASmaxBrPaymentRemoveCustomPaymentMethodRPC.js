__d(
  "WASmaxBrPaymentRemoveCustomPaymentMethodRPC",
  [
    "WAComms",
    "WAResultOrError",
    "WASmaxInBrPaymentCustomPaymentMethodMixin",
    "WASmaxInBrPaymentEnums",
    "WASmaxInBrPaymentIQErrorGenericResponseMixin",
    "WASmaxInBrPaymentIQResultResponseMixin",
    "WASmaxInBrPaymentMethodBaseMixin",
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxOutBrPaymentSetIQMixin",
    "WASmaxOutBrPaymentSignedChallengeMixin",
    "WASmaxParseReference",
    "WASmaxParseUtils",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
    "WAWap",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e, t) {
      var n = c(e),
        r = await o("WAComms").sendSmaxStanza(n, t),
        a = u(r, n);
      if (a.success)
        return {
          name: "RemoveCustomPaymentMethodResponseSuccess",
          value: a.value,
        };
      var i = s(r, n);
      if (i.success)
        return {
          name: "RemoveCustomPaymentMethodResponseError",
          value: i.value,
        };
      throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
        o("WASmaxRpcUtils").errorMessageRpcParsing(
          "RemoveCustomPaymentMethod",
          { Success: a, Error: i },
        ),
      );
    }
    function s(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o(
        "WASmaxInBrPaymentIQErrorGenericResponseMixin",
      ).parseIQErrorGenericResponseMixin(e, t);
      return (r.success, r);
    }
    function u(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(e, "account");
      if (!r.success) return r;
      var a = g(r.value, t);
      if (!a.success) return a;
      var i = o(
        "WASmaxInBrPaymentIQResultResponseMixin",
      ).parseIQResultResponseMixin(e, t);
      return i.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends(
              { accountPaymentMethodsMixin: a.value },
              i.value,
            ),
          )
        : i;
    }
    function c(e) {
      var t = e.accountCredentialId,
        n = e.signedChallengeMixinArgs,
        r = o("WASmaxOutBrPaymentSetIQMixin").mergeSetIQMixin(
          o("WASmaxJsx").smax(
            "iq",
            null,
            o("WASmaxMixins").optionalMerge(
              o("WASmaxOutBrPaymentSignedChallengeMixin")
                .mergeSignedChallengeMixin,
              o("WASmaxJsx").smax("account", {
                action: "remove-custom-payment-method",
                credential_id: o("WAWap").CUSTOM_STRING(t),
                country: "BR",
              }),
              n,
            ),
          ),
        );
      return r;
    }
    function d(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "card");
      if (!t.success) return t;
      var n = C(e);
      return (n.success, n);
    }
    function m(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "bank");
      if (!t.success) return t;
      var n = y(e);
      return (n.success, n);
    }
    function p(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "merchant");
      if (!t.success) return t;
      var n = b(e);
      return (n.success, n);
    }
    function _(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "alias");
      if (!t.success) return t;
      var n = h(e);
      return (n.success, n);
    }
    function f(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "custom_payment_method");
      if (!t.success) return t;
      var n = o(
        "WASmaxInBrPaymentCustomPaymentMethodMixin",
      ).parseCustomPaymentMethodMixin(e);
      return (n.success, n);
    }
    function g(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "account");
      if (!n.success) return n;
      var r = o("WASmaxParseReference").attrStringFromReference(t, [
        "account",
        "action",
      ]);
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "action",
        r.value,
      );
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrIntRange,
        e,
        "version",
        0,
        void 0,
      );
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "instance-id",
      );
      if (!l.success) return l;
      var s = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "wa-support-phone-number",
      );
      if (!s.success) return s;
      var u = o("WASmaxParseUtils").mapChildrenWithTag(e, "card", 0, 1 / 0, d);
      if (!u.success) return u;
      var c = o("WASmaxParseUtils").mapChildrenWithTag(e, "bank", 0, 1 / 0, m);
      if (!c.success) return c;
      var g = o("WASmaxParseUtils").mapChildrenWithTag(
        e,
        "merchant",
        0,
        1 / 0,
        p,
      );
      if (!g.success) return g;
      var h = o("WASmaxParseUtils").mapChildrenWithTag(e, "alias", 0, 100, _);
      if (!h.success) return h;
      var y = o("WASmaxParseUtils").mapChildrenWithTag(
        e,
        "custom_payment_method",
        0,
        5,
        f,
      );
      return y.success
        ? o("WAResultOrError").makeResult({
            version: i.value,
            instanceId: l.value,
            waSupportPhoneNumber: s.value,
            card: u.value,
            bank: c.value,
            merchant: g.value,
            alias: h.value,
            customPaymentMethod: y.value,
          })
        : y;
    }
    function h(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "alias");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "type",
      );
      if (!n.success) return n;
      var r = v(e);
      return r.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({ type: n.value }, r.value),
          )
        : r;
    }
    function y(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "bank");
      if (!t.success) return t;
      var n = S(e);
      return (n.success, n);
    }
    function C(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "card");
      if (!t.success) return t;
      var n = E(e);
      return n.success
        ? o("WAResultOrError").makeResult({ bROrMXOrESCardMixinGroup: n.value })
        : n;
    }
    function b(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "merchant");
      if (!t.success) return t;
      var n = L(e);
      return (n.success, n);
    }
    function v(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "alias");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrString(e, "alias_value");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrString(e, "alias_id");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").attrStringEnum(
        e,
        "alias_type",
        o("WASmaxInBrPaymentEnums").ENUM_MOBILENUMBER_NUMERICID,
      );
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrStringEnum,
        e,
        "alias_status",
        o("WASmaxInBrPaymentEnums")
          .ENUM_ACTIVE_ACTIVEPENDING_ACTIVESTATUSPENDING_AVAILABLE_AVAILABLEPENDING_AVAILABLESTATUSPENDING_BLOCKED_DEREGISTERED_DEREGISTEREDPENDING_INACTIVE_INACTIVEPENDING_INACTIVESTATUSPENDING_UNKNOWN,
      );
      return i.success
        ? o("WAResultOrError").makeResult({
            aliasValue: n.value,
            aliasId: r.value,
            aliasType: a.value,
            aliasStatus: i.value,
          })
        : i;
    }
    function S(e) {
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
        "bank-reference-id",
      );
      if (!R.success) return R;
      var L = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "ifsc-code",
      );
      if (!L.success) return L;
      var E = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "account-ref-id",
      );
      if (!E.success) return E;
      var k = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrStringEnum,
        e,
        "is-aadhaar-enabled",
        o("WASmaxInBrPaymentEnums").ENUM_0_1,
      );
      if (!k.success) return k;
      var I = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrStringEnum,
        e,
        "is-upi-lite-enabled",
        o("WASmaxInBrPaymentEnums").ENUM_0_1,
      );
      if (!I.success) return I;
      var T = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrStringEnum,
        e,
        "is_international_pay_enabled",
        o("WASmaxInBrPaymentEnums").ENUM_0_1,
      );
      if (!T.success) return T;
      var D = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrStringEnum,
        e,
        "incentive-type",
        o("WASmaxInBrPaymentEnums")
          .ENUM_QRSHAREANDPAY_QRSHAREANDPAYDORMANT_QRSHAREANDPAYNEVERACTIVATED_QRSHAREANDPAYUNREGISTERED_REFERRAL,
      );
      if (!D.success) return D;
      var x = w(e);
      return x.success
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
                bankReferenceId: R.value,
                ifscCode: L.value,
                accountRefId: E.value,
                isAadhaarEnabled: k.value,
                isUpiLiteEnabled: I.value,
                isInternationalPayEnabled: T.value,
                incentiveType: D.value,
              },
              x.value,
            ),
          )
        : x;
    }
    function R(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "payout");
      if (!t.success) return t;
      var n = D(e);
      return n.success
        ? o("WAResultOrError").makeResult({
            payoutBankOrPrepaidCardMixinGroup: n.value,
          })
        : n;
    }
    function L(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "merchant");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "gateway-name",
      );
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrStringEnum(
        e,
        "display-state",
        o("WASmaxInBrPaymentEnums")
          .ENUM_ACCOUNTPENDINGLINKING_ACTIVE_EXTERNALLYDISABLED_HARDBLOCKED_INACTIVE_INITED_INTEGRITYBLOCKED_PENDING_SOFTBLOCKED,
      );
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "dashboard-url",
      );
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "logo-uri",
      );
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrIntRange,
        e,
        "max_installment_count",
        0,
        50,
      );
      if (!l.success) return l;
      var s = T(e);
      if (!s.success) return s;
      var u = o("WASmaxParseUtils").mapChildrenWithTag(
        e,
        "payout",
        0,
        1 / 0,
        R,
      );
      return u.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends(
              {
                gatewayName: n.value,
                displayState: r.value,
                dashboardUrl: a.value,
                logoUri: i.value,
                maxInstallmentCount: l.value,
              },
              s.value,
              { payout: u.value },
            ),
          )
        : u;
    }
    function E(e) {
      var t = $(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "BRCard",
          value: t.value,
        });
      var n = I(e);
      if (n.success)
        return o("WAResultOrError").makeResult({
          name: "MXCard",
          value: n.value,
        });
      var r = k(e);
      return r.success
        ? o("WAResultOrError").makeResult({ name: "ESCard", value: r.value })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            ["BRCard", "MXCard", "ESCard"],
            [t, n, r],
          );
    }
    function k(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "card");
      if (!t.success) return t;
      var n = P(e);
      return (n.success, n);
    }
    function I(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "card");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrString(e, "image");
      if (!n.success) return n;
      var r = P(e);
      return r.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({ image: n.value }, r.value),
          )
        : r;
    }
    function T(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "merchant");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "merchant-id",
      );
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "business-name",
      );
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrStringEnum,
        e,
        "can-sell",
        o("WASmaxInBrPaymentEnums").ENUM_0_1,
      );
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrStringEnum,
        e,
        "can-payout",
        o("WASmaxInBrPaymentEnums").ENUM_0_1,
      );
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrStringEnum,
        e,
        "can-add-payout",
        o("WASmaxInBrPaymentEnums").ENUM_0_1,
      );
      if (!l.success) return l;
      var s = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "support-phone-number",
      );
      if (!s.success) return s;
      var u = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "provider-type",
      );
      if (!u.success) return u;
      var c = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrStringEnum,
        e,
        "pix-onboarding-state",
        o("WASmaxInBrPaymentEnums").ENUM_0_1_2,
      );
      if (!c.success) return c;
      var d = o("WASmaxInBrPaymentMethodBaseMixin").parseMethodBaseMixin(e);
      return d.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends(
              {
                merchantId: n.value,
                businessName: r.value,
                canSell: a.value,
                canPayout: i.value,
                canAddPayout: l.value,
                supportPhoneNumber: s.value,
                providerType: u.value,
                pixOnboardingState: c.value,
              },
              d.value,
            ),
          )
        : d;
    }
    function D(e) {
      var t = A(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "PayoutBank",
          value: t.value,
        });
      var n = x(e);
      return n.success
        ? o("WAResultOrError").makeResult({
            name: "PayoutPrepaidCard",
            value: n.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            ["PayoutBank", "PayoutPrepaidCard"],
            [t, n],
          );
    }
    function x(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "payout");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "type",
        "prepaid-card",
      );
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrString(e, "last4");
      if (!r.success) return r;
      var a = o("WASmaxInBrPaymentMethodBaseMixin").parseMethodBaseMixin(e);
      return a.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({ type: n.value, last4: r.value }, a.value),
          )
        : a;
    }
    function $(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "card");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrString(e, "image-content-id");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrString(e, "binding-type");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").attrStringEnum(
        e,
        "needs-device-binding",
        o("WASmaxInBrPaymentEnums").ENUM_0_1,
      );
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrStringEnum,
        e,
        "state",
        o("WASmaxInBrPaymentEnums")
          .ENUM_ACTIVE_DELETED_INACTIVE_NEEDSRETOKENIZATION_NEEDSRETOKENIZATIONDELETED_SUSPENDED,
      );
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "bank-name",
      );
      if (!l.success) return l;
      var s = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "bank-phone-number",
      );
      if (!s.success) return s;
      var u = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrStringEnum,
        e,
        "automatic-binding",
        o("WASmaxInBrPaymentEnums").ENUM_0_1,
      );
      if (!u.success) return u;
      var c = P(e);
      if (!c.success) return c;
      var d = M(e);
      return o("WAResultOrError").makeResult(
        babelHelpers.extends(
          {
            imageContentId: n.value,
            bindingType: r.value,
            needsDeviceBinding: a.value,
            state: i.value,
            bankName: l.value,
            bankPhoneNumber: s.value,
            automaticBinding: u.value,
          },
          c.value,
          { comboCardCapabilitiesMixin: d.success ? d.value : null },
        ),
      );
    }
    function P(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "card");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrString(e, "last4");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrStringEnum(
        e,
        "verified",
        o("WASmaxInBrPaymentEnums").ENUM_0_1,
      );
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").attrString(e, "type");
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").attrString(e, "network-type");
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").attrString(e, "time-last-added");
      if (!l.success) return l;
      var s = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrStringEnum,
        e,
        "display-state",
        o("WASmaxInBrPaymentEnums").ENUM_ACTIVE_EXPIRED_SUSPENDED_VOIDED,
      );
      if (!s.success) return s;
      var u = w(e);
      if (!u.success) return u;
      var c = N(e);
      return c.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends(
              {
                last4: n.value,
                verified: r.value,
                type: a.value,
                networkType: i.value,
                timeLastAdded: l.value,
                displayState: s.value,
              },
              u.value,
              c.value,
            ),
          )
        : c;
    }
    function N(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "card");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "capabilities");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrStringEnum(
        n.value,
        "editable",
        o("WASmaxInBrPaymentEnums").ENUM_0_1,
      );
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").attrStringEnum(
        n.value,
        "verifiable",
        o("WASmaxInBrPaymentEnums").ENUM_0_1,
      );
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").attrStringEnum(
        n.value,
        "default-eligible",
        o("WASmaxInBrPaymentEnums").ENUM_0_1,
      );
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrStringEnum,
        n.value,
        "default-eligible-p2p",
        o("WASmaxInBrPaymentEnums").ENUM_0_1,
      );
      if (!l.success) return l;
      var s = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrStringEnum,
        n.value,
        "default-eligible-p2m",
        o("WASmaxInBrPaymentEnums").ENUM_0_1,
      );
      if (!s.success) return s;
      var u = o("WASmaxParseUtils").attrStringEnum(
        n.value,
        "p2p-send",
        o("WASmaxInBrPaymentEnums").ENUM_DISABLED_ENABLED_REQUIRESVERIFICATION,
      );
      if (!u.success) return u;
      var c = o("WASmaxParseUtils").attrStringEnum(
        n.value,
        "p2p-receive",
        o("WASmaxInBrPaymentEnums").ENUM_DISABLED_ENABLED_REQUIRESVERIFICATION,
      );
      if (!c.success) return c;
      var d = o("WASmaxParseUtils").attrStringEnum(
        n.value,
        "p2m-send",
        o("WASmaxInBrPaymentEnums").ENUM_DISABLED_ENABLED_REQUIRESVERIFICATION,
      );
      if (!d.success) return d;
      var m = o("WASmaxParseUtils").attrStringEnum(
        n.value,
        "p2m-receive",
        o("WASmaxInBrPaymentEnums").ENUM_DISABLED_ENABLED_REQUIRESVERIFICATION,
      );
      return m.success
        ? o("WAResultOrError").makeResult({
            capabilitiesEditable: r.value,
            capabilitiesVerifiable: a.value,
            capabilitiesDefaultEligible: i.value,
            capabilitiesDefaultEligibleP2p: l.value,
            capabilitiesDefaultEligibleP2m: s.value,
            capabilitiesP2pSend: u.value,
            capabilitiesP2pReceive: c.value,
            capabilitiesP2mSend: d.value,
            capabilitiesP2mReceive: m.value,
          })
        : m;
    }
    function M(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "card");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "capabilities");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrStringEnum(
        n.value,
        "p2m-credit-eligible",
        o("WASmaxInBrPaymentEnums").ENUM_0_1,
      );
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").attrStringEnum(
        n.value,
        "p2m-debit-eligible",
        o("WASmaxInBrPaymentEnums").ENUM_0_1,
      );
      return a.success
        ? o("WAResultOrError").makeResult({
            capabilitiesP2mCreditEligible: r.value,
            capabilitiesP2mDebitEligible: a.value,
          })
        : a;
    }
    function w(e) {
      var t = o("WASmaxParseUtils").attrStringEnum(
        e,
        "default-credit",
        o("WASmaxInBrPaymentEnums").ENUM_0_1,
      );
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrStringEnum(
        e,
        "default-debit",
        o("WASmaxInBrPaymentEnums").ENUM_0_1,
      );
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrStringEnum,
        e,
        "default-credit-p2p",
        o("WASmaxInBrPaymentEnums").ENUM_0_1,
      );
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrStringEnum,
        e,
        "default-credit-p2m",
        o("WASmaxInBrPaymentEnums").ENUM_0_1,
      );
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrStringEnum,
        e,
        "default-debit-p2p",
        o("WASmaxInBrPaymentEnums").ENUM_0_1,
      );
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrStringEnum,
        e,
        "default-debit-p2m",
        o("WASmaxInBrPaymentEnums").ENUM_0_1,
      );
      if (!l.success) return l;
      var s = o("WASmaxInBrPaymentMethodBaseMixin").parseMethodBaseMixin(e);
      return s.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends(
              {
                defaultCredit: t.value,
                defaultDebit: n.value,
                defaultCreditP2p: r.value,
                defaultCreditP2m: a.value,
                defaultDebitP2p: i.value,
                defaultDebitP2m: l.value,
              },
              s.value,
            ),
          )
        : s;
    }
    function A(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "payout");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "type",
        "bank",
      );
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "account-number",
      );
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").attrString(e, "bank-name");
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "code",
      );
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").attrStringEnum(
        e,
        "verification-status",
        o("WASmaxInBrPaymentEnums").ENUM_FAILED_PENDING_VERIFIED,
      );
      if (!l.success) return l;
      var s = o("WASmaxInBrPaymentMethodBaseMixin").parseMethodBaseMixin(e);
      return s.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends(
              {
                type: n.value,
                accountNumber: r.value,
                bankName: a.value,
                code: i.value,
                verificationStatus: l.value,
              },
              s.value,
            ),
          )
        : s;
    }
    ((l.sendRemoveCustomPaymentMethodRPC = e),
      (l.parseRemoveCustomPaymentMethodResponseError = s),
      (l.parseRemoveCustomPaymentMethodResponseSuccess = u),
      (l.makeRemoveCustomPaymentMethodRequest = c));
  },
  98,
);
