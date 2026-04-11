__d(
  "WAWebSendPixPaymentRequestOptionalModal.react",
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
    "WAWebSendPixPaymentRequestAmountInputRowOptional.react",
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
      p = "",
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
        y = "pix_payment_request",
        C = m(p),
        b = C[0],
        v = C[1],
        S = function (t) {
          v(t.trim());
        };
      d(
        function () {
          o("PixWamLogger").logPixSenderEvent(
            o("WAWebWamEnumPaymentActionTargets").PAYMENT_ACTION_TARGETS
              .VIEW_PIX_PAYMENT_REQUEST,
            o("WAWebWamEnumPaymentActionTypes").PAYMENT_ACTION_TYPES.VIEW,
            c,
            h,
            y,
            t,
            l,
          );
        },
        [t, l, l.key_type, c, h],
      );
      var R = function () {
          if (b === "" || !o("WAWebCurrencyUtils").validateAmountString(g, b))
            return !1;
          var e = o("WAWebCurrencyUtils").valueFromString(g, b);
          return e >= _ && e <= f;
        },
        L = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            (R()
              ? (yield o(
                  "WAWebBizSendOrderAction",
                ).sendPixPaymentRequestMessage(
                  t,
                  l,
                  o("WAWebCurrencyUtils").valueFromString(g, b),
                  o("WAWebOrderDetailMath").DEFAULT_OFFSET,
                ),
                o("PixWamLogger").logPixSenderEvent(
                  o("WAWebWamEnumPaymentActionTargets").PAYMENT_ACTION_TARGETS
                    .PIX_PAYMENT_REQUEST_SEND_BUTTON,
                  o("WAWebWamEnumPaymentActionTypes").PAYMENT_ACTION_TYPES
                    .ENTER,
                  c,
                  h,
                  y,
                  t,
                  l,
                  { amount: b, currency: g },
                ),
                o(
                  "WAWebPaymentsPixBannerUtils",
                ).shouldDismissTryItPixKeyPromo())
              : (o(
                  "WAWebBizSendOrderAction",
                ).sendPixQuickReplyMessageAndDismissTryItPixKeyPromoBanner(
                  t,
                  null,
                ),
                o("PixWamLogger").logPixSenderEvent(
                  o("WAWebWamEnumPaymentActionTargets").PAYMENT_ACTION_TARGETS
                    .PIX_PAYMENT_REQUEST_SEND_BUTTON,
                  o("WAWebWamEnumPaymentActionTypes").PAYMENT_ACTION_TYPES
                    .CLICK,
                  c,
                  h,
                  y,
                  t,
                  l,
                )),
              o("WAWebModalManager").ModalManager.close());
          });
          return function () {
            return e.apply(this, arguments);
          };
        })();
      return u.jsxs(o("WAWebConfirmPopup.react").ConfirmPopup, {
        tsNavigationData: {
          surface: "unknown",
          viewName: "pix-payment-optional",
        },
        title: u.jsx(r("WAWebSendPixPaymentRequestModalHeader.react"), {
          headerButton: a,
        }),
        okText: s._(/*BTDS*/ "Send request"),
        cancelText: r("WAWebFbtCommon")("Cancel"),
        onOK: L,
        okDisabled: !1,
        onCancel: o("WAWebModalManager").closeModalManager,
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
          u.jsx(r("WAWebSendPixPaymentRequestAmountInputRowOptional.react"), {
            currency: g,
            defaultAmount: p,
            maxAmount: f,
            minAmount: _,
            onValueChange: S,
          }),
        ],
      });
    }
    ((h.displayName = h.name + " [from " + i.id + "]"),
      (l.WAWebSendPixPaymentRequestOptionalModal = h));
  },
  226,
);
