__d(
  "WAWebGetBrazilnteractiveActions",
  [
    "fbt",
    "WALogger",
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
    "WAWebMsgCollection",
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
    "WDSIconIcOpenInNew.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c,
      d,
      m = d || (d = o("react"));
    function p(e, t) {
      return {
        label: s._(/*BTDS*/ "Copy Pix key"),
        onClick: function () {
          var n = o("WAWebBrPaymentSettingsUtils").getFirstPixStaticKey(e),
            r = o("WAWebUserPrefsTypes").PixKeyType.cast(
              o("WAWebBrPaymentSettingsUtils").getFirstPixStaticKeyType(e),
            );
          v({
            code:
              n == null
                ? null
                : o("WAWebBrazilPixKeyFormattingUtils").getCopiedPixKey(n, r),
            failureMsg: s._(/*BTDS*/ "Couldn't copy Pix key"),
            onCopy: function () {
              _(t);
            },
            successMsg: s._(/*BTDS*/ "Pix key copied"),
          });
        },
        Icon: r("WDSIconIcContentCopy.react"),
      };
    }
    function _(t) {
      var n,
        r =
          (n = o("WAWebMsgCollection").MsgCollection.get(t)) == null
            ? void 0
            : n.safe();
      if (r == null) {
        o("WALogger").WARN(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[br-payments] copy Pix key log skipped, message left the collection",
            ])),
        );
        return;
      }
      if (r.type !== o("WAWebMsgType").MSG_TYPE.INTERACTIVE) {
        o("WALogger").WARN(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "[br-payments] copy Pix key log skipped, unexpected message type ",
              "",
            ])),
          r.type,
        );
        return;
      }
      o(
        "WAWebBrPaymentInteractionLogger",
      ).logPaymentInfoOrderDetailsInteractiveActionForRecepient(r);
    }
    function f(e) {
      var t,
        n =
          (t = o("WAWebMsgCollection").MsgCollection.get(e)) == null
            ? void 0
            : t.safe();
      return n != null && n.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE
        ? n
        : (o("WALogger").WARN(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "[br-payments] payment action log skipped, message left the collection",
              ])),
          ),
          null);
    }
    function g(e) {
      var t = e.msgKey,
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
            b(s._(/*BTDS*/ "Couldn't open payment link"));
            return;
          }
          o("WAWebExternalLink.react").openExternalLink(e);
          var a = f(t);
          a != null &&
            (o("WAWebBrPaymentInteractionLogger")
              .logAPIMerchantPaymentMethodClickEvent({
                msg: a,
                orderAcceptedPaymentMethod: o("WAWebOrderPaymentStatus")
                  .OrderAcceptedPaymentMethods.PAYMENT_LINK,
                orderInfo: n,
                surface: i,
              })
              .catch(r("WAWebNoop")),
            o(
              "WAWebBrLastUsedPaymentMethodStoreLazy",
            ).recordLastUsedBrPaymentMethodLazy(
              a,
              o("WAWebBrPaymentMethodKey").BrPaymentMethodKey.PAYMENT_LINK,
            ));
        },
        Icon: r("WDSIconIcOpenInNew.react"),
      };
    }
    function h(e) {
      var t = e.msgKey,
        n = e.orderInfo,
        a = e.surface,
        i =
          a === void 0
            ? o("WAWebBrPaymentMethodSurface").BrPaymentMethodSurface.INLINE_CTA
            : a;
      return {
        label: s._(/*BTDS*/ "Copy boleto code"),
        onClick: function () {
          v({
            code: o("WAWebBrPaymentSettingsUtils").getBoletoCode(n),
            failureMsg: s._(/*BTDS*/ "Couldn't copy boleto code"),
            onCopy: function () {
              var e = f(t);
              e != null &&
                (o("WAWebBrPaymentInteractionLogger")
                  .logAPIMerchantPaymentMethodClickEvent({
                    msg: e,
                    orderAcceptedPaymentMethod: o("WAWebOrderPaymentStatus")
                      .OrderAcceptedPaymentMethods.BOLETO,
                    orderInfo: n,
                    surface: i,
                  })
                  .catch(r("WAWebNoop")),
                o(
                  "WAWebBrLastUsedPaymentMethodStoreLazy",
                ).recordLastUsedBrPaymentMethodLazy(
                  e,
                  o("WAWebBrPaymentMethodKey").BrPaymentMethodKey.BOLETO,
                ));
            },
            successMsg: s._(/*BTDS*/ "Boleto code copied"),
          });
        },
        Icon: r("WDSIconIcContentCopy.react"),
      };
    }
    function y(e, t) {
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
          v({
            code: c,
            failureMsg: m,
            onCopy: function () {
              var n = f(e);
              n != null &&
                o(
                  "WAWebBrPaymentInteractionLogger",
                ).logPaymentRequestInteractiveAction(n, t);
            },
            successMsg: d,
          });
        },
        Icon: r("WDSIconIcContentCopy.react"),
      };
    }
    function C(e) {
      var t = e.msgKey,
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
          v({
            code:
              e == null
                ? null
                : o("WAWebBrazilPixKeyFormattingUtils").getCopiedPixKey(e),
            failureMsg: s._(/*BTDS*/ "Couldn't copy Pix Code"),
            onCopy: function () {
              var e = f(t);
              e != null &&
                (o("WAWebBrPaymentInteractionLogger")
                  .logAPIMerchantPaymentMethodClickEvent({
                    msg: e,
                    orderAcceptedPaymentMethod: o("WAWebOrderPaymentStatus")
                      .OrderAcceptedPaymentMethods.PIX,
                    orderInfo: n,
                    surface: i,
                  })
                  .catch(r("WAWebNoop")),
                o(
                  "WAWebBrLastUsedPaymentMethodStoreLazy",
                ).recordLastUsedBrPaymentMethodLazy(
                  e,
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
    function b(e) {
      o("WAWebToastManager").ToastManager.open(
        m.jsx(o("WAWebToast.react").Toast, { msg: e }),
      );
    }
    function v(e) {
      var t = e.code,
        n = e.failureMsg,
        r = e.onCopy,
        a = e.successMsg;
      if (t == null) {
        b(n);
        return;
      }
      o("WAWebCopyTextWithToast").copyTextWithToast({
        failureMsg: n,
        onSuccess: r,
        successMsg: a,
        text: t,
      });
    }
    function S(e) {
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
    function R(e) {
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
    function L(e) {
      return (
        e.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE &&
        R(e) &&
        o("WAWebMsgGetters").getIsSentByMe(e.unsafe())
      );
    }
    ((l.getPaymentInfoOrderDetailsInteractiveAction = p),
      (l.getOpenPaymentLinkInteractiveAction = g),
      (l.getCopyBoletoCodeInteractiveAction = h),
      (l.getCopyPixStaticCodeInteractiveAction = y),
      (l.getCopyPixCodeInteractiveAction = C),
      (l.hasOrderOffsiteCardPay = S),
      (l.shouldHideOffsiteCardPayConfirmation = L));
  },
  226,
);
