__d(
  "WAWebSendPixPaymentRequestModal.react",
  [
    "fbt",
    "PixWamLogger",
    "WAWebBizSendOrderAction",
    "WAWebConfirmPopup.react",
    "WAWebCurrencyUtils",
    "WAWebFbtCommon",
    "WAWebGroupInfoSeparator.react",
    "WAWebModal.react",
    "WAWebModalManager",
    "WAWebOrderDetailMath",
    "WAWebPaymentsPixBannerUtils",
    "WAWebSendPixPaymentRequestAmountInputRow.react",
    "WAWebSendPixPaymentRequestCustomerProfileRow.react",
    "WAWebSendPixPaymentRequestModalHeader.react",
    "WAWebSendPixPaymentRequestPixCredentialsRow.react",
    "WAWebWamEnumPaymentActionTargets",
    "WAWebWamEnumPaymentActionTypes",
    "asyncToGeneratorRuntime",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useEffect,
      m = c.useState,
      p = "0",
      _ = 0.01 * o("WAWebOrderDetailMath").DEFAULT_OFFSET,
      f = 5e3 * o("WAWebOrderDetailMath").DEFAULT_OFFSET,
      g = "BRL";
    function h(e) {
      var t = e.chat,
        a = e.headerButton,
        i = e.onEditCredential,
        l = e.pixData,
        c = e.previousScreenName,
        h = e.referral,
        C = "pix_payment_request",
        b = m(!0),
        v = b[0],
        S = b[1],
        R = m(p),
        L = R[0],
        E = R[1],
        k = function (t, n) {
          (E(t.trim()), S(n));
        };
      return (
        d(
          function () {
            o("PixWamLogger").logPixSenderEvent(
              o("WAWebWamEnumPaymentActionTargets").PAYMENT_ACTION_TARGETS
                .VIEW_PIX_PAYMENT_REQUEST,
              o("WAWebWamEnumPaymentActionTypes").PAYMENT_ACTION_TYPES.VIEW,
              c,
              h,
              C,
              t,
              l,
            );
          },
          [t, l, l.key_type, c, h],
        ),
        u.jsxs(o("WAWebConfirmPopup.react").ConfirmPopup, {
          tsNavigationData: {
            surface: "unknown",
            viewName: "send-pix-payment-request",
          },
          title: u.jsx(r("WAWebSendPixPaymentRequestModalHeader.react"), {
            headerButton: a,
          }),
          okText: s._(/*BTDS*/ "Send request"),
          cancelText: r("WAWebFbtCommon")("Cancel"),
          onOK: n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            (yield o("WAWebBizSendOrderAction").sendPixPaymentRequestMessage(
              t,
              l,
              o("WAWebCurrencyUtils").valueFromString(g, L),
              o("WAWebOrderDetailMath").DEFAULT_OFFSET,
            ),
              o("PixWamLogger").logPixSenderEvent(
                o("WAWebWamEnumPaymentActionTargets").PAYMENT_ACTION_TARGETS
                  .PIX_PAYMENT_REQUEST_SEND_BUTTON,
                o("WAWebWamEnumPaymentActionTypes").PAYMENT_ACTION_TYPES.ENTER,
                c,
                h,
                C,
                t,
                l,
                { amount: L, currency: g },
              ),
              o("WAWebPaymentsPixBannerUtils").shouldDismissTryItPixKeyPromo(),
              o("WAWebModalManager").ModalManager.close());
          }),
          okDisabled: v,
          onCancel: y,
          type: o("WAWebModal.react").ModalTheme.PaymentsFlow,
          children: [
            u.jsx(r("WAWebSendPixPaymentRequestCustomerProfileRow.react"), {
              chat: t,
            }),
            u.jsx(r("WAWebSendPixPaymentRequestPixCredentialsRow.react"), {
              onEditCredential: i,
              pixData: l,
            }),
            u.jsx(r("WAWebGroupInfoSeparator.react"), {
              animation: !1,
              padding: !1,
            }),
            u.jsx(r("WAWebSendPixPaymentRequestAmountInputRow.react"), {
              chat: t,
              defaultAmount: p,
              maxAmount: f,
              minAmount: _,
              currency: g,
              onValueChange: k,
              referral: h,
              pixData: l,
              previousScreenName: c,
              screen: C,
            }),
          ],
        })
      );
    }
    h.displayName = h.name + " [from " + i.id + "]";
    function y() {
      o("WAWebModalManager").ModalManager.close();
    }
    l.default = h;
  },
  226,
);
