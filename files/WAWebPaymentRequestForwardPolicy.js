__d(
  "WAWebPaymentRequestForwardPolicy",
  [
    "WAWebBrPaymentRequest",
    "WAWebBusinessHSMTypes",
    "WAWebPaymentRequestForwarding",
    "WAWebPaymentRequestForwardingDestination",
    "WAWebPrivacyModeSystemMsg",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      if (!o("WAWebBrPaymentRequest").isPaymentRequestFeatureEnabled(!1, !0))
        return !1;
      var t = d(e);
      return (
        m(e, t) &&
        p(e) &&
        o("WAWebPaymentRequestForwarding").getForwardedPixPaymentRequestPayload(
          t,
        ) != null &&
        o("WAWebBrPaymentRequest").isPaymentRequestFeatureEnabled(
          e.isFromTemplate,
        )
      );
    }
    function s(e) {
      return o("WAWebPaymentRequestForwarding").isPaymentRequestForForwarding(
        d(e),
      );
    }
    function u(e, t) {
      var n;
      (n = c(e, t)) == null || n();
    }
    function c(t, n) {
      if (s(t)) {
        var a = n.id;
        return function () {
          if (
            !n.id.equals(a) ||
            !e(t) ||
            !o(
              "WAWebPaymentRequestForwardingDestination",
            ).isPaymentRequestForwardDestination(a)
          )
            throw r("err")("Payment forward");
        };
      }
    }
    function d(e) {
      return {
        type: e.type,
        interactiveType: e.interactiveType,
        nativeFlowName: e.nativeFlowName,
        interactivePayload: e.interactivePayload,
        isForwarded: e.isForwarded,
      };
    }
    function m(e, t) {
      var n, r;
      return (
        o("WAWebPaymentRequestForwarding").isPaymentRequestForForwarding(t) &&
        !e.id.fromMe &&
        o(
          "WAWebPaymentRequestForwardingDestination",
        ).isPaymentRequestForwardDestination(e.id.remote) &&
        !o("WAWebPaymentRequestForwarding").isForwardedPaymentRequest(t) &&
        ((n = e.forwardingScore) != null ? n : 0) === 0 &&
        !e.isViewOnce &&
        e.subtype !== "view_once_unavailable_fanout" &&
        e.hsmTag !== o("WAWebBusinessHSMTypes").HSM_TAG_TYPE.AUTHENTICATION &&
        ((r = e.interactiveHeader) == null ? void 0 : r.hasMediaAttachment) !==
          !0 &&
        o(
          "WAWebPaymentRequestForwardingDestination",
        ).isSupportedPaymentRequestForwardHeader(e.interactiveHeader)
      );
    }
    function p(e) {
      var t,
        n = e.senderObj,
        r = o("WAWebPrivacyModeSystemMsg").getReducedPrivacyMode(
          (t = e.privacyModeWhenSent) != null
            ? t
            : n == null
              ? void 0
              : n.privacyMode,
        );
      return (
        (n == null ? void 0 : n.isEnterprise) === !0 &&
        (r === o("WAWebPrivacyModeSystemMsg").ReducedPrivacyMode.FB ||
          r === o("WAWebPrivacyModeSystemMsg").ReducedPrivacyMode.HOSTED_GROUP)
      );
    }
    ((l.canForwardOriginalCapiPixPaymentRequest = e),
      (l.isPaymentRequestMsgModel = s),
      (l.assertCanForwardPaymentRequest = u),
      (l.getPaymentRequestForwardValidation = c),
      (l.getPaymentRequestSource = d));
  },
  98,
);
