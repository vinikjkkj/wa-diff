__d(
  "WASmaxSmbMeteredMessagingAccountGetSMBMeteredMessagingCheckoutRPC",
  [
    "WAComms",
    "WAResultOrError",
    "WASmaxAttrs",
    "WASmaxChildren",
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxParseJid",
    "WASmaxParseReference",
    "WASmaxParseUtils",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
    "WAWap",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = N(e),
            r = yield o("WAComms").sendSmaxStanza(n, t),
            a = _(r, n);
          if (a.success)
            return {
              name: "GetSMBMeteredMessagingCheckoutResponseSuccess",
              value: a.value,
            };
          var i = u(r, n);
          if (i.success)
            return {
              name: "GetSMBMeteredMessagingCheckoutResponseError",
              value: i.value,
            };
          throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
            o("WASmaxRpcUtils").errorMessageRpcParsing(
              "GetSMBMeteredMessagingCheckout",
              { Success: a, Error: i },
            ),
          );
        })),
        s.apply(this, arguments)
      );
    }
    function u(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(e, "error");
      if (!r.success) return r;
      var a = g(e, t);
      if (!a.success) return a;
      var i = f(r.value);
      return i.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({}, a.value, {
              errorGetSmbMeteredMessagingCheckoutIqErrors: i.value,
            }),
          )
        : i;
    }
    function c(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "discount");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrStringEnum(e, "type", W);
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
    function d(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "discounts");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").mapChildrenWithTag(e, "discount", 0, 10, c);
      return n.success
        ? o("WAResultOrError").makeResult({ discount: n.value })
        : n;
    }
    function m(e) {
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
    function p(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "offer_status");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrStringEnum(e, "value", O);
      return n.success
        ? o("WAResultOrError").makeResult({ value: n.value })
        : n;
    }
    function _(e, t) {
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
        d,
      );
      if (!l.success) return l;
      var s = o("WASmaxParseUtils").optionalChildWithTag(e, "quota", m);
      if (!s.success) return s;
      var u = o("WASmaxParseUtils").optionalChildWithTag(e, "offer_status", p);
      if (!u.success) return u;
      var c = o("WASmaxParseUtils").attrInt(r.value, "before_tax");
      if (!c.success) return c;
      var _ = o("WASmaxParseUtils").attrInt(r.value, "tax");
      if (!_.success) return _;
      var f = o("WASmaxParseUtils").attrInt(r.value, "offset");
      if (!f.success) return f;
      var g = o("WASmaxParseUtils").attrString(r.value, "currency");
      if (!g.success) return g;
      var y = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrInt,
        r.value,
        "base",
      );
      if (!y.success) return y;
      var C = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        r.value,
        "base_formatted",
      );
      if (!C.success) return C;
      var b = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrInt,
        r.value,
        "discount_percent",
      );
      if (!b.success) return b;
      var v = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrInt,
        r.value,
        "before_discount",
      );
      if (!v.success) return v;
      var S = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        r.value,
        "before_discount_formatted",
      );
      if (!S.success) return S;
      var R = o("WASmaxParseUtils").attrStringEnum(a.value, "is_eligible", B);
      if (!R.success) return R;
      var L = o("WASmaxParseUtils").attrInt(i.value, "billing");
      if (!L.success) return L;
      var E = o("WASmaxParseUtils").attrInt(i.value, "available");
      if (!E.success) return E;
      var k = o("WASmaxParseUtils").attrInt(i.value, "offset");
      if (!k.success) return k;
      var I = h(e, t);
      return I.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends(
              {
                costBeforeTax: c.value,
                costTax: _.value,
                costOffset: f.value,
                costCurrency: g.value,
                costBase: y.value,
                costBaseFormatted: C.value,
                costDiscountPercent: b.value,
                costBeforeDiscount: v.value,
                costBeforeDiscountFormatted: S.value,
                integrityIsEligible: R.value,
                accountBalanceBilling: L.value,
                accountBalanceAvailable: E.value,
                accountBalanceOffset: k.value,
              },
              I.value,
              { costDiscounts: l.value, quota: s.value, offerStatus: u.value },
            ),
          )
        : I;
    }
    function f(e) {
      var t = b(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorInternalServerError",
          value: t.value,
        });
      var n = y(e);
      if (n.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorBadRequest",
          value: n.value,
        });
      var r = S(e);
      if (r.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorNotAuthorized",
          value: r.value,
        });
      var a = v(e);
      if (a.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorNotAllowed",
          value: a.value,
        });
      var i = R(e);
      if (i.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorRateOverlimit",
          value: i.value,
        });
      var l = C(e);
      if (l.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorFeatureLimit",
          value: l.value,
        });
      var s = E(e);
      return s.success
        ? o("WAResultOrError").makeResult({
            name: "IQErrorServiceUnavailable",
            value: s.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            [
              "IQErrorInternalServerError",
              "IQErrorBadRequest",
              "IQErrorNotAuthorized",
              "IQErrorNotAllowed",
              "IQErrorRateOverlimit",
              "IQErrorFeatureLimit",
              "IQErrorServiceUnavailable",
            ],
            [t, n, r, a, i, l, s],
          );
    }
    function g(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").optional(
        o("WASmaxParseJid").attrUserJid,
        e,
        "to",
      );
      if (!r.success) return r;
      var a = L(e, t);
      return a.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({ to: r.value }, a.value),
          )
        : a;
    }
    function h(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").optional(
        o("WASmaxParseJid").attrUserJid,
        e,
        "to",
      );
      if (!r.success) return r;
      var a = k(e, t);
      return a.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({ to: r.value }, a.value),
          )
        : a;
    }
    function y(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "error");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "text",
        "bad-request",
      );
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrInt,
        e,
        "code",
        400,
      );
      return r.success
        ? o("WAResultOrError").makeResult({ text: n.value, code: r.value })
        : r;
    }
    function C(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "error");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "text",
        "feature-limit",
      );
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrInt,
        e,
        "code",
        482,
      );
      return r.success
        ? o("WAResultOrError").makeResult({ text: n.value, code: r.value })
        : r;
    }
    function b(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "error");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "text",
        "internal-server-error",
      );
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrInt,
        e,
        "code",
        500,
      );
      return r.success
        ? o("WAResultOrError").makeResult({ text: n.value, code: r.value })
        : r;
    }
    function v(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "error");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "text",
        "not-allowed",
      );
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrInt,
        e,
        "code",
        405,
      );
      return r.success
        ? o("WAResultOrError").makeResult({ text: n.value, code: r.value })
        : r;
    }
    function S(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "error");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "text",
        "not-authorized",
      );
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrInt,
        e,
        "code",
        401,
      );
      return r.success
        ? o("WAResultOrError").makeResult({ text: n.value, code: r.value })
        : r;
    }
    function R(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "error");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "text",
        "rate-overlimit",
      );
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrInt,
        e,
        "code",
        429,
      );
      return r.success
        ? o("WAResultOrError").makeResult({ text: n.value, code: r.value })
        : r;
    }
    function L(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseReference").attrStringFromReference(t, ["id"]);
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "id",
        r.value,
      );
      if (!a.success) return a;
      var i = o("WASmaxParseReference").attrStringFromReference(t, ["to"]);
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "from",
        i.value,
      );
      if (!l.success) return l;
      var s = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "type",
        "error",
      );
      return s.success ? o("WAResultOrError").makeResult({ type: s.value }) : s;
    }
    function E(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "error");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "text",
        "service-unavailable",
      );
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrInt,
        e,
        "code",
        503,
      );
      return r.success
        ? o("WAResultOrError").makeResult({ text: n.value, code: r.value })
        : r;
    }
    function k(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseReference").attrStringFromReference(t, ["id"]);
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "id",
        r.value,
      );
      if (!a.success) return a;
      var i = o("WASmaxParseReference").attrStringFromReference(t, ["to"]);
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "from",
        i.value,
      );
      if (!l.success) return l;
      var s = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "type",
        "result",
      );
      return s.success ? o("WAResultOrError").makeResult({ type: s.value }) : s;
    }
    function I(e) {
      var t = F(o("WASmaxJsx").smax("to", null), e);
      return t;
    }
    function T() {
      var e = o("WASmaxJsx").smax("use_ad_account", null);
      return e;
    }
    function D() {
      var e = o("WASmaxJsx").smax("skip_dedupe", null);
      return e;
    }
    function x(e) {
      var t = e.offerId,
        n = o("WASmaxJsx").smax("offer", { id: o("WAWap").CUSTOM_STRING(t) });
      return n;
    }
    function $(e) {
      var t = e.campaignFreeReservedMsgs,
        n = e.campaignSendTimestamp,
        r = o("WASmaxJsx").smax("campaign", {
          free_reserved_msgs: o("WAWap").INT(t),
          send_timestamp: o("WASmaxAttrs").OPTIONAL(o("WAWap").INT, n),
        });
      return r;
    }
    function P(e) {
      var t = e.campaignArgs,
        n = o("WASmaxJsx").smax(
          "pending_campaigns",
          null,
          o("WASmaxChildren").REPEATED_CHILD($, t, 0, 200),
        );
      return n;
    }
    function N(e) {
      var t,
        n = e.toArgs,
        r = e.hasUseAdAccount,
        a = e.hasSkipDedupe,
        i = e.offerArgs,
        l = e.pendingCampaignsArgs,
        s = w(
          o("WASmaxJsx").smax(
            "iq",
            { xmlns: "w:biz", smax_id: o("WAWap").INT(120) },
            o("WASmaxJsx").smax(
              "participants",
              null,
              (t = o("WASmaxChildren")).REPEATED_CHILD(I, n, 1, 2e3),
            ),
            t.HAS_OPTIONAL_CHILD(T, r),
            t.HAS_OPTIONAL_CHILD(D, a),
            t.OPTIONAL_CHILD(x, i),
            t.OPTIONAL_CHILD(P, l),
          ),
          e,
        );
      return s;
    }
    function M(e) {
      var t = e.iqFrom,
        n = U(
          o("WASmaxJsx").smax("iq", {
            from: o("WASmaxAttrs").OPTIONAL(o("WAWap").USER_JID, t),
            to: o("WAWap").S_WHATSAPP_NET,
          }),
        );
      return n;
    }
    function w(e, t) {
      var n = M(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function A(e) {
      var t = e.toJid,
        n = o("WASmaxJsx").smax("to", { jid: o("WAWap").USER_JID(t) });
      return n;
    }
    function F(e, t) {
      var n = A(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    var O = {
        already_claimed: "already_claimed",
        expired: "expired",
        invalid: "invalid",
        not_found: "not_found",
        not_owned: "not_owned",
        valid: "valid",
      },
      B = { false: "false", true: "true" },
      W = { free_msg: "free_msg", percentage: "percentage" };
    function q() {
      var e = o("WASmaxJsx").smax("iq", {
        id: o("WAWap").generateId(),
        type: "get",
      });
      return e;
    }
    function U(e) {
      var t = q();
      return o("WASmaxMixins").mergeStanzas(e, t);
    }
    ((l.sendGetSMBMeteredMessagingCheckoutRPC = e),
      (l.parseGetSMBMeteredMessagingCheckoutResponseError = u),
      (l.parseGetSMBMeteredMessagingCheckoutResponseSuccessCostDiscountsDiscount =
        c),
      (l.parseGetSMBMeteredMessagingCheckoutResponseSuccessCostDiscounts = d),
      (l.parseGetSMBMeteredMessagingCheckoutResponseSuccessQuota = m),
      (l.parseGetSMBMeteredMessagingCheckoutResponseSuccessOfferStatus = p),
      (l.parseGetSMBMeteredMessagingCheckoutResponseSuccess = _),
      (l.parseGetSmbMeteredMessagingCheckoutIqErrors = f),
      (l.parseHackBaseIQErrorResponseMixin = g),
      (l.parseHackBaseIQResultResponseMixin = h),
      (l.parseIQErrorBadRequestMixin = y),
      (l.parseIQErrorFeatureLimitMixin = C),
      (l.parseIQErrorInternalServerErrorMixin = b),
      (l.parseIQErrorNotAllowedMixin = v),
      (l.parseIQErrorNotAuthorizedMixin = S),
      (l.parseIQErrorRateOverlimitMixin = R),
      (l.parseIQErrorResponseMixin = L),
      (l.parseIQErrorServiceUnavailableMixin = E),
      (l.parseIQResultResponseMixin = k),
      (l.makeGetSMBMeteredMessagingCheckoutRequestParticipantsTo = I),
      (l.makeGetSMBMeteredMessagingCheckoutRequestUseAdAccount = T),
      (l.makeGetSMBMeteredMessagingCheckoutRequestSkipDedupe = D),
      (l.makeGetSMBMeteredMessagingCheckoutRequestOffer = x),
      (l.makeGetSMBMeteredMessagingCheckoutRequestPendingCampaignsCampaign = $),
      (l.makeGetSMBMeteredMessagingCheckoutRequestPendingCampaigns = P),
      (l.makeGetSMBMeteredMessagingCheckoutRequest = N),
      (l.mergeHackBaseIQGetRequestMixin = w),
      (l.mergeToUserMixin = F),
      (l.ENUM_ALREADYCLAIMED_EXPIRED_INVALID_NOTFOUND_NOTOWNED_VALID = O),
      (l.ENUM_FALSE_TRUE = B),
      (l.ENUM_FREEMSG_PERCENTAGE = W),
      (l.mergeBaseIQGetRequestMixin = U));
  },
  98,
);
