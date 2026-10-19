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
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = m(e),
            r = yield o("WAComms").sendSmaxStanza(n, t),
            a = c(r, n);
          if (a.success)
            return { name: "SetPaymentsTOSv3ResponseSuccess", value: a.value };
          var i = u(r, n);
          if (i.success)
            return { name: "SetPaymentsTOSv3ResponseError", value: i.value };
          throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
            o("WASmaxRpcUtils").errorMessageRpcParsing("SetPaymentsTOSv3", {
              Success: a,
              Error: i,
            }),
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
      var a = o(
        "WASmaxInAccountIQErrorResponseMixin",
      ).parseIQErrorResponseMixin(e, t);
      if (!a.success) return a;
      var i = d(r.value);
      return i.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({}, a.value, {
              errorSetPaymentsTosErrors: i.value,
            }),
          )
        : i;
    }
    function c(e, t) {
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
      var s = h(r.value);
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
    function d(e) {
      var t = o(
        "WASmaxInAccountIQErrorInternalServerErrorMixin",
      ).parseIQErrorInternalServerErrorMixin(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorInternalServerError",
          value: t.value,
        });
      var n = g(e);
      if (n.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorServiceUnavailable",
          value: n.value,
        });
      var r = f(e);
      if (r.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorPayUpgradeRequired",
          value: r.value,
        });
      var a = _(e);
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
      var l = p(e);
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
    function m(e) {
      var t = e.acceptPayTosVersion,
        n =
          e.setPaymentsTOSv3BRConsumerOrSetPaymentsTOSv3UPIConsumerOrSetPaymentsTOSv3USConsumerPaymentsTOSv3MixinGroupArgs,
        r = E(
          o("WASmaxJsx").smax(
            "iq",
            null,
            k(
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
    function p(e) {
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
    function _(e) {
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
    function f(e) {
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
    function g(e) {
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
    function h(e) {
      var t = C(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "SetPaymentsTOSv3BRConsumerPaymentsTOSv3Response",
          value: t.value,
        });
      var n = v(e);
      if (n.success)
        return o("WAResultOrError").makeResult({
          name: "SetPaymentsTOSv3UPIConsumerPaymentsTOSv3Response",
          value: n.value,
        });
      var r = R(e);
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
    function y(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "additional_notice");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrStringEnum(e, "notice", A);
      return n.success
        ? o("WAResultOrError").makeResult({ notice: n.value })
        : n;
    }
    function C(e) {
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
        y,
      );
      return r.success
        ? o("WAResultOrError").makeResult({
            service: n.value,
            additionalNotice: r.value,
          })
        : r;
    }
    function b(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "additional_notice");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrStringEnum(e, "notice", F);
      return n.success
        ? o("WAResultOrError").makeResult({ notice: n.value })
        : n;
    }
    function v(e) {
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
        b,
      );
      return r.success
        ? o("WAResultOrError").makeResult({
            service: n.value,
            additionalNotice: r.value,
          })
        : r;
    }
    function S(e) {
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
    function R(e) {
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
        S,
      );
      return r.success
        ? o("WAResultOrError").makeResult({
            service: n.value,
            additionalNotice: r.value,
          })
        : r;
    }
    function L() {
      var e = B(
        o("WASmaxJsx").smax("iq", {
          to: o("WAWap").S_WHATSAPP_NET,
          xmlns: "urn:xmpp:whatsapp:account",
        }),
      );
      return e;
    }
    function E(e) {
      var t = L();
      return o("WASmaxMixins").mergeStanzas(e, t);
    }
    function k(e, t) {
      if (t.setPaymentsTOSv3BRConsumerPaymentsTOSv3)
        return D(e, t.setPaymentsTOSv3BRConsumerPaymentsTOSv3);
      if (t.setPaymentsTOSv3UPIConsumerPaymentsTOSv3)
        return P(e, t.setPaymentsTOSv3UPIConsumerPaymentsTOSv3);
      if (t.setPaymentsTOSv3USConsumerPaymentsTOSv3)
        return w(e, t.setPaymentsTOSv3USConsumerPaymentsTOSv3);
      throw new (o(
        "WASmaxMixinGroupExhaustiveError",
      ).SmaxMixinGroupExhaustiveError)();
    }
    function I(e) {
      var t = e.additionalNoticeNotice,
        n = o("WASmaxJsx").smax("additional_notice", {
          notice: o("WAWap").CUSTOM_STRING(t),
        });
      return n;
    }
    function T(e) {
      var t = e.additionalNoticeArgs,
        n = o("WASmaxJsx").smax(
          "accept_pay",
          { service: "FBPAY" },
          o("WASmaxChildren").REPEATED_CHILD(I, t, 1, 10),
        );
      return n;
    }
    function D(e, t) {
      var n = T(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function x(e) {
      var t = e.additionalNoticeNotice,
        n = o("WASmaxJsx").smax("additional_notice", {
          notice: o("WAWap").CUSTOM_STRING(t),
        });
      return n;
    }
    function $(e) {
      var t = e.additionalNoticeArgs,
        n = o("WASmaxJsx").smax(
          "accept_pay",
          { service: "UPI" },
          o("WASmaxChildren").REPEATED_CHILD(x, t, 1, 10),
        );
      return n;
    }
    function P(e, t) {
      var n = $(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function N() {
      var e = o("WASmaxJsx").smax("additional_notice", {
        notice: "us_pay_tos",
      });
      return e;
    }
    function M(e) {
      var t = e.additionalNoticeCount,
        n = o("WASmaxJsx").smax(
          "accept_pay",
          { service: "FBPAY" },
          o("WASmaxChildren").REPEATED_CHILD_COUNT(N, t, 1, 10),
        );
      return n;
    }
    function w(e, t) {
      var n = M(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    var A = {
        br_p2p_consent: "br_p2p_consent",
        br_pay_privacy_policy: "br_pay_privacy_policy",
        br_pay_tos: "br_pay_tos",
        br_pay_wa_tos: "br_pay_wa_tos",
      },
      F = {
        pay_tos_v3: "pay_tos_v3",
        upi_pay_privacy_policy: "upi_pay_privacy_policy",
      };
    function O() {
      var e = o("WASmaxJsx").smax("iq", {
        id: o("WAWap").generateId(),
        type: "set",
      });
      return e;
    }
    function B(e) {
      var t = O();
      return o("WASmaxMixins").mergeStanzas(e, t);
    }
    ((l.sendSetPaymentsTOSv3RPC = e),
      (l.parseSetPaymentsTOSv3ResponseError = u),
      (l.parseSetPaymentsTOSv3ResponseSuccess = c),
      (l.parseSetPaymentsTosErrors = d),
      (l.makeSetPaymentsTOSv3Request = m),
      (l.parseIQErrorBadRequestMixin = p),
      (l.parseIQErrorConfigMismatchMixin = _),
      (l.parseIQErrorPayUpgradeRequiredMixin = f),
      (l.parseIQErrorServiceUnavailableMixin = g),
      (l.parseSetPaymentsTOSv3BRConsumerOrSetPaymentsTOSv3UPIConsumerOrSetPaymentsTOSv3USConsumerPaymentsTOSv3ResponseMixinGroup =
        h),
      (l.parseSetPaymentsTOSv3BRConsumerPaymentsTOSv3ResponseAdditionalNotice =
        y),
      (l.parseSetPaymentsTOSv3BRConsumerPaymentsTOSv3ResponseMixin = C),
      (l.parseSetPaymentsTOSv3UPIConsumerPaymentsTOSv3ResponseAdditionalNotice =
        b),
      (l.parseSetPaymentsTOSv3UPIConsumerPaymentsTOSv3ResponseMixin = v),
      (l.parseSetPaymentsTOSv3USConsumerPaymentsTOSv3ResponseAdditionalNotice =
        S),
      (l.parseSetPaymentsTOSv3USConsumerPaymentsTOSv3ResponseMixin = R),
      (l.mergeSetIQMixin = E),
      (l.mergeSetPaymentsTOSv3BRConsumerOrSetPaymentsTOSv3UPIConsumerOrSetPaymentsTOSv3USConsumerPaymentsTOSv3MixinGroup =
        k),
      (l.makeSetPaymentsTOSv3BRConsumerPaymentsTOSv3AdditionalNotice = I),
      (l.mergeSetPaymentsTOSv3BRConsumerPaymentsTOSv3Mixin = D),
      (l.makeSetPaymentsTOSv3UPIConsumerPaymentsTOSv3AdditionalNotice = x),
      (l.mergeSetPaymentsTOSv3UPIConsumerPaymentsTOSv3Mixin = P),
      (l.makeSetPaymentsTOSv3USConsumerPaymentsTOSv3AdditionalNotice = N),
      (l.mergeSetPaymentsTOSv3USConsumerPaymentsTOSv3Mixin = w),
      (l.ENUM_BRP2PCONSENT_BRPAYPRIVACYPOLICY_BRPAYTOS_BRPAYWATOS = A),
      (l.ENUM_PAYTOSV3_UPIPAYPRIVACYPOLICY = F),
      (l.mergeBaseIQSetRequestMixin = B));
  },
  98,
);
