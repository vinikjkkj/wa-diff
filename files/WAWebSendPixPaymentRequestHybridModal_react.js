__d(
  "WAWebSendPixPaymentRequestHybridModal.react",
  [
    "fbt",
    "PixWamLogger",
    "WAWebBizSendOrderAction",
    "WAWebConfirmPopup.react",
    "WAWebCurrencyUtils",
    "WAWebFbtCommon",
    "WAWebModalManager",
    "WAWebOrderDetailMath",
    "WAWebPaymentsPixBannerUtils",
    "WAWebPixUserInfo.react",
    "WAWebSendPixPaymentRequestAmountInputHybridRow.react",
    "WAWebWamEnumPaymentActionTargets",
    "WAWebWamEnumPaymentActionTypes",
    "WDSText.react",
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
        l = e.orderReferral,
        c = l === void 0 ? null : l,
        h = e.pixData,
        y = e.previousScreenName,
        C = e.referral,
        b = "pix_payment_request",
        v = m(p),
        S = v[0],
        R = v[1];
      d(
        function () {
          o("PixWamLogger").logPixSenderEvent(
            o("WAWebWamEnumPaymentActionTargets").PAYMENT_ACTION_TARGETS
              .VIEW_PIX_PAYMENT_REQUEST,
            o("WAWebWamEnumPaymentActionTypes").PAYMENT_ACTION_TYPES.VIEW,
            y,
            C,
            b,
            t,
            h,
          );
        },
        [t, h, h.key_type, y, C],
      );
      var L = function () {
          i();
        },
        E = function (t) {
          R(t);
        },
        k = function () {
          if (S === "" || !o("WAWebCurrencyUtils").validateAmountString(g, S))
            return !1;
          var e = o("WAWebCurrencyUtils").valueFromString(g, S);
          return e >= _ && e <= f;
        },
        I = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            (k()
              ? (yield o(
                  "WAWebBizSendOrderAction",
                ).sendPixPaymentRequestMessage(
                  t,
                  h,
                  o("WAWebCurrencyUtils").valueFromString(g, S),
                  o("WAWebOrderDetailMath").DEFAULT_OFFSET,
                ),
                o("PixWamLogger").logPixSenderEvent(
                  o("WAWebWamEnumPaymentActionTargets").PAYMENT_ACTION_TARGETS
                    .PIX_PAYMENT_REQUEST_SEND_BUTTON,
                  o("WAWebWamEnumPaymentActionTypes").PAYMENT_ACTION_TYPES
                    .ENTER,
                  y,
                  C,
                  b,
                  t,
                  h,
                  { amount: S, currency: g },
                ),
                o(
                  "WAWebPaymentsPixBannerUtils",
                ).shouldDismissTryItPixKeyPromo())
              : (o(
                  "WAWebBizSendOrderAction",
                ).sendPixQuickReplyMessageAndDismissTryItPixKeyPromoBanner(
                  t,
                  c,
                ),
                o("PixWamLogger").logPixSenderEvent(
                  o("WAWebWamEnumPaymentActionTargets").PAYMENT_ACTION_TARGETS
                    .PIX_PAYMENT_REQUEST_SEND_BUTTON,
                  o("WAWebWamEnumPaymentActionTypes").PAYMENT_ACTION_TYPES
                    .CLICK,
                  y,
                  C,
                  b,
                  t,
                  h,
                )),
              o("WAWebModalManager").ModalManager.close());
          });
          return function () {
            return e.apply(this, arguments);
          };
        })();
      return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
        tsNavigationData: {
          surface: "unknown",
          viewName: "send-pix-payment-hybrid",
        },
        title: s._(/*BTDS*/ "Request payment"),
        okText: s._(/*BTDS*/ "Send"),
        cancelText: r("WAWebFbtCommon")("Cancel"),
        onOK: I,
        okDisabled: !1,
        onCancel: o("WAWebModalManager").closeModalManager,
        children: u.jsxs("div", {
          className: "x193iq5w xh8yej3",
          children: [
            u.jsx("div", {
              className: "xvhpnrs xdqhqc9",
              children: u.jsx(r("WDSText.react"), {
                type: "Body2",
                colorName: "accentEmphasized",
                children: s._(
                  /*BTDS*/ "{customer_name} will be able to copy your Pix key from the chat.",
                  [s._param("customer_name", t.formattedTitle)],
                ),
              }),
            }),
            u.jsx(r("WAWebPixUserInfo.react"), { onEdit: L, pixData: h }),
            u.jsx("div", {
              className: "x1nmyh1g xh8yej3",
              children: u.jsx(
                r("WAWebSendPixPaymentRequestAmountInputHybridRow.react"),
                {
                  currency: g,
                  defaultAmount: p,
                  maxAmount: f,
                  minAmount: _,
                  onValueChange: E,
                },
              ),
            }),
          ],
        }),
      });
    }
    ((h.displayName = h.name + " [from " + i.id + "]"),
      (l.WAWebSendPixPaymentRequestHybridModal = h));
  },
  226,
);
