__d(
  "WAWebGetBrazilnteractiveActions",
  [
    "fbt",
    "WAWebBizOrderDetailsParams",
    "WAWebBrLastUsedPaymentMethodStoreLazy",
    "WAWebBrPaymentInteractionLogger",
    "WAWebBrPaymentMethodKey",
    "WAWebBrPaymentMethodSurface",
    "WAWebBrPaymentSettingsUtils",
    "WAWebBrazilPixKeyFormattingUtils",
    "WAWebCopyTextWithToast",
    "WAWebExternalLink.react",
    "WAWebInteractiveMessagesNativeFlowName",
    "WAWebLaunchIcon.react",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebNoop",
    "WAWebOrderDetails",
    "WAWebOrderPaymentStatus",
    "WAWebPixCodeUtils",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebUserPrefsTypes",
    "WDSIconIcContentCopy.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e, t) {
      return {
        label: s._(/*BTDS*/ "Copy Pix key"),
        onClick: function () {
          var n = o("WAWebBrPaymentSettingsUtils").getFirstPixStaticKey(e),
            r = o("WAWebUserPrefsTypes").PixKeyType.cast(
              o("WAWebBrPaymentSettingsUtils").getFirstPixStaticKeyType(e),
            );
          g({
            code:
              n == null
                ? null
                : o("WAWebBrazilPixKeyFormattingUtils").getCopiedPixKey(n, r),
            failureMsg: s._(/*BTDS*/ "Couldn't copy Pix key"),
            onCopy: function () {
              o(
                "WAWebBrPaymentInteractionLogger",
              ).logPaymentInfoOrderDetailsInteractiveActionForRecepient(t);
            },
            successMsg: s._(/*BTDS*/ "Pix key copied"),
          });
        },
        Icon: r("WDSIconIcContentCopy.react"),
      };
    }
    function d(e) {
      var t = e.msg,
        n = e.orderInfo,
        a = e.surface,
        i =
          a === void 0
            ? o("WAWebBrPaymentMethodSurface").BrPaymentMethodSurface.INLINE_CTA
            : a;
      return {
        label: s._(/*BTDS*/ "Open payment link"),
        onClick: function () {
          var e = o("WAWebBrPaymentSettingsUtils").getPaymentLinkUri(n);
          if (e == null) {
            f(s._(/*BTDS*/ "Couldn't open payment link"));
            return;
          }
          (o("WAWebExternalLink.react").openExternalLink(e),
            o("WAWebBrPaymentInteractionLogger")
              .logAPIMerchantPaymentMethodClickEvent({
                msg: t,
                orderAcceptedPaymentMethod: o("WAWebOrderPaymentStatus")
                  .OrderAcceptedPaymentMethods.PAYMENT_LINK,
                orderInfo: n,
                surface: i,
              })
              .catch(r("WAWebNoop")),
            o(
              "WAWebBrLastUsedPaymentMethodStoreLazy",
            ).recordLastUsedBrPaymentMethodLazy(
              t,
              o("WAWebBrPaymentMethodKey").BrPaymentMethodKey.PAYMENT_LINK,
            ));
        },
        Icon: o("WAWebLaunchIcon.react").LaunchIcon,
      };
    }
    function m(e) {
      var t = e.msg,
        n = e.orderInfo,
        a = e.surface,
        i =
          a === void 0
            ? o("WAWebBrPaymentMethodSurface").BrPaymentMethodSurface.INLINE_CTA
            : a;
      return {
        label: s._(/*BTDS*/ "Copy boleto code"),
        onClick: function () {
          g({
            code: o("WAWebBrPaymentSettingsUtils").getBoletoCode(n),
            failureMsg: s._(/*BTDS*/ "Couldn't copy boleto code"),
            onCopy: function () {
              (o("WAWebBrPaymentInteractionLogger")
                .logAPIMerchantPaymentMethodClickEvent({
                  msg: t,
                  orderAcceptedPaymentMethod: o("WAWebOrderPaymentStatus")
                    .OrderAcceptedPaymentMethods.BOLETO,
                  orderInfo: n,
                  surface: i,
                })
                .catch(r("WAWebNoop")),
                o(
                  "WAWebBrLastUsedPaymentMethodStoreLazy",
                ).recordLastUsedBrPaymentMethodLazy(
                  t,
                  o("WAWebBrPaymentMethodKey").BrPaymentMethodKey.BOLETO,
                ));
            },
            successMsg: s._(/*BTDS*/ "Boleto code copied"),
          });
        },
        Icon: r("WDSIconIcContentCopy.react"),
      };
    }
    function p(e, t) {
      var n = o("WAWebBrPaymentSettingsUtils").getPixStaticCodeSetting(t);
      if (n == null) return null;
      var a =
          n[o("WAWebBizOrderDetailsParams").PaymentSettingType.PIX_STATIC_CODE]
            .key,
        i =
          n[o("WAWebBizOrderDetailsParams").PaymentSettingType.PIX_STATIC_CODE]
            .merchant_name,
        l = t.totalAmount,
        u = t.referenceId;
      if (a == null || i == null || l == null) return null;
      var c = o("WAWebPixCodeUtils").getPixStaticCode({
          merchantName: i,
          pixKey: a,
          referenceId: u,
          transactionAmount: l.toFixed(2),
        }),
        d = s._(/*BTDS*/ "Pix code copied"),
        m = s._(/*BTDS*/ "Could not copy Pix code");
      return {
        label: s._(/*BTDS*/ "Copy Pix code"),
        onClick: function () {
          g({
            code: c,
            failureMsg: m,
            onCopy: function () {
              o(
                "WAWebBrPaymentInteractionLogger",
              ).logPaymentRequestInteractiveAction(e, t);
            },
            successMsg: d,
          });
        },
        Icon: r("WDSIconIcContentCopy.react"),
      };
    }
    function _(e) {
      var t = e.msg,
        n = e.orderInfo,
        a = e.surface,
        i =
          a === void 0
            ? o("WAWebBrPaymentMethodSurface").BrPaymentMethodSurface.INLINE_CTA
            : a;
      return {
        label: s._(/*BTDS*/ "Copy Pix code"),
        onClick: function () {
          var e = o("WAWebBrPaymentSettingsUtils").getDynamicPixCode(n);
          g({
            code:
              e == null
                ? null
                : o("WAWebBrazilPixKeyFormattingUtils").getCopiedPixKey(e),
            failureMsg: s._(/*BTDS*/ "Couldn't copy Pix Code"),
            onCopy: function () {
              (o("WAWebBrPaymentInteractionLogger")
                .logAPIMerchantPaymentMethodClickEvent({
                  msg: t,
                  orderAcceptedPaymentMethod: o("WAWebOrderPaymentStatus")
                    .OrderAcceptedPaymentMethods.PIX,
                  orderInfo: n,
                  surface: i,
                })
                .catch(r("WAWebNoop")),
                o(
                  "WAWebBrLastUsedPaymentMethodStoreLazy",
                ).recordLastUsedBrPaymentMethodLazy(
                  t,
                  o("WAWebBrPaymentMethodKey").getPixMethodKeyForServerOrdering(
                    o("WAWebBrPaymentMethodKey").getPixFlowType(
                      n.paymentSettings,
                    ),
                  ),
                ));
            },
            successMsg: s._(/*BTDS*/ "Pix Code copied"),
          });
        },
        Icon: r("WDSIconIcContentCopy.react"),
      };
    }
    function f(e) {
      o("WAWebToastManager").ToastManager.open(
        u.jsx(o("WAWebToast.react").Toast, { msg: e }),
      );
    }
    function g(e) {
      var t = e.code,
        n = e.failureMsg,
        r = e.onCopy,
        a = e.successMsg;
      if (t == null) {
        f(n);
        return;
      }
      o("WAWebCopyTextWithToast").copyTextWithToast({
        failureMsg: n,
        onSuccess: r,
        successMsg: a,
        text: t,
      });
    }
    function h(e) {
      var t,
        n,
        r = o("WAWebOrderDetails").getOrderInfo(e);
      if (r == null || r.paymentSettings == null) return !1;
      var a =
        (t =
          (n = r.paymentSettings) == null
            ? void 0
            : n.some(function (e) {
                return e[
                  o("WAWebBizOrderDetailsParams").PaymentSettingType
                    .OFFSITE_CARD_PAY
                ];
              })) != null
          ? t
          : !1;
      return a;
    }
    function y(e) {
      var t;
      if (
        e.nativeFlowName ===
          r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_METHOD &&
        ((t = e.interactivePayload) == null ||
        (t = t.buttons) == null ||
        (t = t[0]) == null
          ? void 0
          : t.buttonParamsJson) != null
      ) {
        var n,
          a = JSON.parse(
            (n = e.interactivePayload) == null ||
              (n = n.buttons) == null ||
              (n = n[0]) == null
              ? void 0
              : n.buttonParamsJson,
          );
        if (
          a.payment_method ===
          o("WAWebBizOrderDetailsParams").PaymentSettingType.OFFSITE_CARD_PAY
        )
          return !0;
      }
      return !1;
    }
    function C(e) {
      return (
        e.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE &&
        y(e) &&
        o("WAWebMsgGetters").getIsSentByMe(e.unsafe())
      );
    }
    ((l.getPaymentInfoOrderDetailsInteractiveAction = c),
      (l.getOpenPaymentLinkInteractiveAction = d),
      (l.getCopyBoletoCodeInteractiveAction = m),
      (l.getCopyPixStaticCodeInteractiveAction = p),
      (l.getCopyPixCodeInteractiveAction = _),
      (l.hasOrderOffsiteCardPay = h),
      (l.shouldHideOffsiteCardPayConfirmation = C));
  },
  226,
);
