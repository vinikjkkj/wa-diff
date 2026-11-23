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
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e, t) {
      var n = P(e),
        r = await o("WAComms").sendSmaxStanza(n, t),
        a = p(r, n);
      if (a.success)
        return {
          name: "GetSMBMeteredMessagingCheckoutResponseSuccess",
          value: a.value,
        };
      var i = s(r, n);
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
    }
    function s(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(e, "error");
      if (!r.success) return r;
      var a = f(e, t);
      if (!a.success) return a;
      var i = _(r.value);
      return i.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({}, a.value, {
              errorGetSmbMeteredMessagingCheckoutIqErrors: i.value,
            }),
          )
        : i;
    }
    function u(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "discount");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrStringEnum(e, "type", B);
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
    function c(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "discounts");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").mapChildrenWithTag(e, "discount", 0, 10, u);
      return n.success
        ? o("WAResultOrError").makeResult({ discount: n.value })
        : n;
    }
    function d(e) {
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
    function m(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "offer_status");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrStringEnum(e, "value", F);
      return n.success
        ? o("WAResultOrError").makeResult({ value: n.value })
        : n;
    }
    function p(e, t) {
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
        c,
      );
      if (!l.success) return l;
      var s = o("WASmaxParseUtils").optionalChildWithTag(e, "quota", d);
      if (!s.success) return s;
      var u = o("WASmaxParseUtils").optionalChildWithTag(e, "offer_status", m);
      if (!u.success) return u;
      var p = o("WASmaxParseUtils").attrInt(r.value, "before_tax");
      if (!p.success) return p;
      var _ = o("WASmaxParseUtils").attrInt(r.value, "tax");
      if (!_.success) return _;
      var f = o("WASmaxParseUtils").attrInt(r.value, "offset");
      if (!f.success) return f;
      var h = o("WASmaxParseUtils").attrString(r.value, "currency");
      if (!h.success) return h;
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
      var R = o("WASmaxParseUtils").attrStringEnum(a.value, "is_eligible", O);
      if (!R.success) return R;
      var L = o("WASmaxParseUtils").attrInt(i.value, "billing");
      if (!L.success) return L;
      var E = o("WASmaxParseUtils").attrInt(i.value, "available");
      if (!E.success) return E;
      var k = o("WASmaxParseUtils").attrInt(i.value, "offset");
      if (!k.success) return k;
      var I = g(e, t);
      return I.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends(
              {
                costBeforeTax: p.value,
                costTax: _.value,
                costOffset: f.value,
                costCurrency: h.value,
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
    function _(e) {
      var t = C(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorInternalServerError",
          value: t.value,
        });
      var n = h(e);
      if (n.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorBadRequest",
          value: n.value,
        });
      var r = v(e);
      if (r.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorNotAuthorized",
          value: r.value,
        });
      var a = b(e);
      if (a.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorNotAllowed",
          value: a.value,
        });
      var i = S(e);
      if (i.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorRateOverlimit",
          value: i.value,
        });
      var l = y(e);
      if (l.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorFeatureLimit",
          value: l.value,
        });
      var s = L(e);
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
    function f(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").optional(
        o("WASmaxParseJid").attrUserJid,
        e,
        "to",
      );
      if (!r.success) return r;
      var a = R(e, t);
      return a.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({ to: r.value }, a.value),
          )
        : a;
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
      var a = E(e, t);
      return a.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({ to: r.value }, a.value),
          )
        : a;
    }
    function h(e) {
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
    function y(e) {
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
    function C(e) {
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
    function b(e) {
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
    function v(e) {
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
    function S(e) {
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
    function R(e, t) {
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
    function L(e) {
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
    function E(e, t) {
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
    function k(e) {
      var t = A(o("WASmaxJsx").smax("to", null), e);
      return t;
    }
    function I() {
      var e = o("WASmaxJsx").smax("use_ad_account", null);
      return e;
    }
    function T() {
      var e = o("WASmaxJsx").smax("skip_dedupe", null);
      return e;
    }
    function D(e) {
      var t = e.offerId,
        n = o("WASmaxJsx").smax("offer", { id: o("WAWap").CUSTOM_STRING(t) });
      return n;
    }
    function x(e) {
      var t = e.campaignFreeReservedMsgs,
        n = e.campaignSendTimestamp,
        r = o("WASmaxJsx").smax("campaign", {
          free_reserved_msgs: o("WAWap").INT(t),
          send_timestamp: o("WASmaxAttrs").OPTIONAL(o("WAWap").INT, n),
        });
      return r;
    }
    function $(e) {
      var t = e.campaignArgs,
        n = o("WASmaxJsx").smax(
          "pending_campaigns",
          null,
          o("WASmaxChildren").REPEATED_CHILD(x, t, 0, 200),
        );
      return n;
    }
    function P(e) {
      var t,
        n = e.toArgs,
        r = e.hasUseAdAccount,
        a = e.hasSkipDedupe,
        i = e.offerArgs,
        l = e.pendingCampaignsArgs,
        s = M(
          o("WASmaxJsx").smax(
            "iq",
            { xmlns: "w:biz", smax_id: o("WAWap").INT(120) },
            o("WASmaxJsx").smax(
              "participants",
              null,
              (t = o("WASmaxChildren")).REPEATED_CHILD(k, n, 1, 2e3),
            ),
            t.HAS_OPTIONAL_CHILD(I, r),
            t.HAS_OPTIONAL_CHILD(T, a),
            t.OPTIONAL_CHILD(D, i),
            t.OPTIONAL_CHILD($, l),
          ),
          e,
        );
      return s;
    }
    function N(e) {
      var t = e.iqFrom,
        n = q(
          o("WASmaxJsx").smax("iq", {
            from: o("WASmaxAttrs").OPTIONAL(o("WAWap").USER_JID, t),
            to: o("WAWap").S_WHATSAPP_NET,
          }),
        );
      return n;
    }
    function M(e, t) {
      var n = N(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function w(e) {
      var t = e.toJid,
        n = o("WASmaxJsx").smax("to", { jid: o("WAWap").USER_JID(t) });
      return n;
    }
    function A(e, t) {
      var n = w(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    var F = {
        already_claimed: "already_claimed",
        expired: "expired",
        invalid: "invalid",
        not_found: "not_found",
        not_owned: "not_owned",
        valid: "valid",
      },
      O = { false: "false", true: "true" },
      B = { free_msg: "free_msg", percentage: "percentage" };
    function W() {
      var e = o("WASmaxJsx").smax("iq", {
        id: o("WAWap").generateId(),
        type: "get",
      });
      return e;
    }
    function q(e) {
      var t = W();
      return o("WASmaxMixins").mergeStanzas(e, t);
    }
    ((l.sendGetSMBMeteredMessagingCheckoutRPC = e),
      (l.parseGetSMBMeteredMessagingCheckoutResponseError = s),
      (l.parseGetSMBMeteredMessagingCheckoutResponseSuccess = p),
      (l.makeGetSMBMeteredMessagingCheckoutRequest = P),
      (l.ENUM_ALREADYCLAIMED_EXPIRED_INVALID_NOTFOUND_NOTOWNED_VALID = F),
      (l.ENUM_FALSE_TRUE = O),
      (l.ENUM_FREEMSG_PERCENTAGE = B));
  },
  98,
);
