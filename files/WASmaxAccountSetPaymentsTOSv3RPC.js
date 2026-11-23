__d(
  "WASmaxAccountSetPaymentsTOSv3RPC",
  [
    "WAComms",
    "WAResultOrError",
    "WASmaxChildren",
    "WASmaxInAccountIQErrorForbiddenMixin",
    "WASmaxInAccountIQErrorInternalServerErrorMixin",
    "WASmaxInAccountIQErrorResponseMixin",
    "WASmaxInAccountIQResultResponseMixin",
    "WASmaxJsx",
    "WASmaxMixinGroupExhaustiveError",
    "WASmaxMixins",
    "WASmaxParseUtils",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
    "WAWap",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e, t) {
      var n = d(e),
        r = await o("WAComms").sendSmaxStanza(n, t),
        a = u(r, n);
      if (a.success)
        return { name: "SetPaymentsTOSv3ResponseSuccess", value: a.value };
      var i = s(r, n);
      if (i.success)
        return { name: "SetPaymentsTOSv3ResponseError", value: i.value };
      throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
        o("WASmaxRpcUtils").errorMessageRpcParsing("SetPaymentsTOSv3", {
          Success: a,
          Error: i,
        }),
      );
    }
    function s(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(e, "error");
      if (!r.success) return r;
      var a = o(
        "WASmaxInAccountIQErrorResponseMixin",
      ).parseIQErrorResponseMixin(e, t);
      if (!a.success) return a;
      var i = c(r.value);
      return i.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({}, a.value, {
              errorSetPaymentsTosErrors: i.value,
            }),
          )
        : i;
    }
    function u(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(e, "accept_pay");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").optionalLiteral(
        o("WASmaxParseUtils").attrString,
        r.value,
        "outage",
        "1",
      );
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").optionalLiteral(
        o("WASmaxParseUtils").attrString,
        r.value,
        "sandbox",
        "1",
      );
      if (!i.success) return i;
      var l = o(
        "WASmaxInAccountIQResultResponseMixin",
      ).parseIQResultResponseMixin(e, t);
      if (!l.success) return l;
      var s = g(r.value);
      return s.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends(
              { acceptPayOutage: a.value, acceptPaySandbox: i.value },
              l.value,
              {
                acceptPaySetPaymentsTOSv3BRConsumerOrSetPaymentsTOSv3UPIConsumerOrSetPaymentsTOSv3USConsumerPaymentsTOSv3ResponseMixinGroup:
                  s.value,
              },
            ),
          )
        : s;
    }
    function c(e) {
      var t = o(
        "WASmaxInAccountIQErrorInternalServerErrorMixin",
      ).parseIQErrorInternalServerErrorMixin(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorInternalServerError",
          value: t.value,
        });
      var n = f(e);
      if (n.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorServiceUnavailable",
          value: n.value,
        });
      var r = _(e);
      if (r.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorPayUpgradeRequired",
          value: r.value,
        });
      var a = p(e);
      if (a.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorConfigMismatch",
          value: a.value,
        });
      var i = o(
        "WASmaxInAccountIQErrorForbiddenMixin",
      ).parseIQErrorForbiddenMixin(e);
      if (i.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorForbidden",
          value: i.value,
        });
      var l = m(e);
      return l.success
        ? o("WAResultOrError").makeResult({
            name: "IQErrorBadRequest",
            value: l.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            [
              "IQErrorInternalServerError",
              "IQErrorServiceUnavailable",
              "IQErrorPayUpgradeRequired",
              "IQErrorConfigMismatch",
              "IQErrorForbidden",
              "IQErrorBadRequest",
            ],
            [t, n, r, a, i, l],
          );
    }
    function d(e) {
      var t = e.acceptPayTosVersion,
        n =
          e.setPaymentsTOSv3BRConsumerOrSetPaymentsTOSv3UPIConsumerOrSetPaymentsTOSv3USConsumerPaymentsTOSv3MixinGroupArgs,
        r = L(
          o("WASmaxJsx").smax(
            "iq",
            null,
            E(
              o("WASmaxJsx").smax("accept_pay", {
                version: "3",
                tos_version: o("WAWap").INT(t),
              }),
              n,
            ),
          ),
        );
      return r;
    }
    function m(e) {
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
    function p(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "error");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "text",
        "config-mismatch",
      );
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrInt,
        e,
        "code",
        453,
      );
      return r.success
        ? o("WAResultOrError").makeResult({ text: n.value, code: r.value })
        : r;
    }
    function _(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "error");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "text",
        "upgrade-required",
      );
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrInt,
        e,
        "code",
        443,
      );
      return r.success
        ? o("WAResultOrError").makeResult({ text: n.value, code: r.value })
        : r;
    }
    function f(e) {
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
    function g(e) {
      var t = y(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "SetPaymentsTOSv3BRConsumerPaymentsTOSv3Response",
          value: t.value,
        });
      var n = b(e);
      if (n.success)
        return o("WAResultOrError").makeResult({
          name: "SetPaymentsTOSv3UPIConsumerPaymentsTOSv3Response",
          value: n.value,
        });
      var r = S(e);
      return r.success
        ? o("WAResultOrError").makeResult({
            name: "SetPaymentsTOSv3USConsumerPaymentsTOSv3Response",
            value: r.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            [
              "BRConsumerPaymentsTOSv3Response",
              "UPIConsumerPaymentsTOSv3Response",
              "USConsumerPaymentsTOSv3Response",
            ],
            [t, n, r],
          );
    }
    function h(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "additional_notice");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrStringEnum(e, "notice", w);
      return n.success
        ? o("WAResultOrError").makeResult({ notice: n.value })
        : n;
    }
    function y(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "accept_pay");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "service",
        "FBPAY",
      );
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").mapChildrenWithTag(
        e,
        "additional_notice",
        1,
        10,
        h,
      );
      return r.success
        ? o("WAResultOrError").makeResult({
            service: n.value,
            additionalNotice: r.value,
          })
        : r;
    }
    function C(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "additional_notice");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrStringEnum(e, "notice", A);
      return n.success
        ? o("WAResultOrError").makeResult({ notice: n.value })
        : n;
    }
    function b(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "accept_pay");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "service",
        "UPI",
      );
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").mapChildrenWithTag(
        e,
        "additional_notice",
        1,
        10,
        C,
      );
      return r.success
        ? o("WAResultOrError").makeResult({
            service: n.value,
            additionalNotice: r.value,
          })
        : r;
    }
    function v(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "additional_notice");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "notice",
        "us_pay_tos",
      );
      return n.success
        ? o("WAResultOrError").makeResult({ notice: n.value })
        : n;
    }
    function S(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "accept_pay");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "service",
        "FBPAY",
      );
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").mapChildrenWithTag(
        e,
        "additional_notice",
        1,
        10,
        v,
      );
      return r.success
        ? o("WAResultOrError").makeResult({
            service: n.value,
            additionalNotice: r.value,
          })
        : r;
    }
    function R() {
      var e = O(
        o("WASmaxJsx").smax("iq", {
          to: o("WAWap").S_WHATSAPP_NET,
          xmlns: "urn:xmpp:whatsapp:account",
        }),
      );
      return e;
    }
    function L(e) {
      var t = R();
      return o("WASmaxMixins").mergeStanzas(e, t);
    }
    function E(e, t) {
      if (t.setPaymentsTOSv3BRConsumerPaymentsTOSv3)
        return T(e, t.setPaymentsTOSv3BRConsumerPaymentsTOSv3);
      if (t.setPaymentsTOSv3UPIConsumerPaymentsTOSv3)
        return $(e, t.setPaymentsTOSv3UPIConsumerPaymentsTOSv3);
      if (t.setPaymentsTOSv3USConsumerPaymentsTOSv3)
        return M(e, t.setPaymentsTOSv3USConsumerPaymentsTOSv3);
      throw new (o(
        "WASmaxMixinGroupExhaustiveError",
      ).SmaxMixinGroupExhaustiveError)();
    }
    function k(e) {
      var t = e.additionalNoticeNotice,
        n = o("WASmaxJsx").smax("additional_notice", {
          notice: o("WAWap").CUSTOM_STRING(t),
        });
      return n;
    }
    function I(e) {
      var t = e.additionalNoticeArgs,
        n = o("WASmaxJsx").smax(
          "accept_pay",
          { service: "FBPAY" },
          o("WASmaxChildren").REPEATED_CHILD(k, t, 1, 10),
        );
      return n;
    }
    function T(e, t) {
      var n = I(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function D(e) {
      var t = e.additionalNoticeNotice,
        n = o("WASmaxJsx").smax("additional_notice", {
          notice: o("WAWap").CUSTOM_STRING(t),
        });
      return n;
    }
    function x(e) {
      var t = e.additionalNoticeArgs,
        n = o("WASmaxJsx").smax(
          "accept_pay",
          { service: "UPI" },
          o("WASmaxChildren").REPEATED_CHILD(D, t, 1, 10),
        );
      return n;
    }
    function $(e, t) {
      var n = x(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function P() {
      var e = o("WASmaxJsx").smax("additional_notice", {
        notice: "us_pay_tos",
      });
      return e;
    }
    function N(e) {
      var t = e.additionalNoticeCount,
        n = o("WASmaxJsx").smax(
          "accept_pay",
          { service: "FBPAY" },
          o("WASmaxChildren").REPEATED_CHILD_COUNT(P, t, 1, 10),
        );
      return n;
    }
    function M(e, t) {
      var n = N(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    var w = {
        br_p2p_consent: "br_p2p_consent",
        br_pay_privacy_policy: "br_pay_privacy_policy",
        br_pay_tos: "br_pay_tos",
        br_pay_wa_tos: "br_pay_wa_tos",
      },
      A = {
        pay_tos_v3: "pay_tos_v3",
        upi_pay_privacy_policy: "upi_pay_privacy_policy",
      };
    function F() {
      var e = o("WASmaxJsx").smax("iq", {
        id: o("WAWap").generateId(),
        type: "set",
      });
      return e;
    }
    function O(e) {
      var t = F();
      return o("WASmaxMixins").mergeStanzas(e, t);
    }
    ((l.sendSetPaymentsTOSv3RPC = e),
      (l.parseSetPaymentsTOSv3ResponseError = s),
      (l.parseSetPaymentsTOSv3ResponseSuccess = u),
      (l.makeSetPaymentsTOSv3Request = d),
      (l.ENUM_BRP2PCONSENT_BRPAYPRIVACYPOLICY_BRPAYTOS_BRPAYWATOS = w),
      (l.ENUM_PAYTOSV3_UPIPAYPRIVACYPOLICY = A));
  },
  98,
);
