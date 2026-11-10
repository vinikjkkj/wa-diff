__d(
  "WAWebGetBrazilnteractiveActions",
  [
    "fbt",
    "WALogger",
    "WAWebBizOrderDetailsParams",
    "WAWebBrLastUsedPaymentMethodCache",
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
          R({
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
      ).logPaymentInfoOrderDetailsInteractiveActionForRecipient(r);
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
            : a,
        l = e.paymentMethodSnapshot;
      return {
        label: s._(/*BTDS*/ "Open payment link"),
        onClick: function () {
          var e = o("WAWebBrPaymentSettingsUtils").getPaymentLinkUri(n);
          if (e == null) {
            S(s._(/*BTDS*/ "Couldn't open payment link"));
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
                renderedSnapshot: l,
              })
              .catch(r("WAWebNoop")),
            o(
              "WAWebBrLastUsedPaymentMethodCache",
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
            : a,
        l = e.paymentMethodSnapshot;
      return {
        label: s._(/*BTDS*/ "Copy boleto code"),
        onClick: function () {
          R({
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
                    renderedSnapshot: l,
                  })
                  .catch(r("WAWebNoop")),
                o(
                  "WAWebBrLastUsedPaymentMethodCache",
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
      return b(t) == null
        ? null
        : {
            label: s._(/*BTDS*/ "Copy Pix code"),
            onClick: function () {
              C(t, function () {
                var n = f(e);
                n != null &&
                  o(
                    "WAWebBrPaymentInteractionLogger",
                  ).logPaymentRequestInteractiveAction(n, t);
              });
            },
            Icon: r("WDSIconIcContentCopy.react"),
          };
    }
    function C(e, t) {
      R({
        code: e != null ? b(e) : null,
        failureMsg: s._(/*BTDS*/ "Could not copy Pix code"),
        onCopy: t,
        successMsg: s._(/*BTDS*/ "Pix code copied"),
      });
    }
    function b(e) {
      var t = o("WAWebBrPaymentSettingsUtils").getPixStaticCodeSetting(e);
      if (t == null) return null;
      var n =
          t[o("WAWebBizOrderDetailsParams").PaymentSettingType.PIX_STATIC_CODE]
            .key,
        r =
          t[o("WAWebBizOrderDetailsParams").PaymentSettingType.PIX_STATIC_CODE]
            .merchant_name,
        a = e.totalAmount;
      return n == null || r == null || a == null
        ? null
        : o("WAWebPixCodeUtils").getPixStaticCode({
            merchantName: r,
            pixKey: n,
            referenceId: e.referenceId,
            transactionAmount: a.toFixed(2),
          });
    }
    function v(e) {
      var t = e.msgKey,
        n = e.orderInfo,
        a = e.surface,
        i =
          a === void 0
            ? o("WAWebBrPaymentMethodSurface").BrPaymentMethodSurface.INLINE_CTA
            : a,
        l = e.paymentMethodSnapshot;
      return {
        label: s._(/*BTDS*/ "Copy Pix code"),
        onClick: function () {
          var e = o("WAWebBrPaymentSettingsUtils").getDynamicPixCode(n);
          R({
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
                    renderedSnapshot: l,
                  })
                  .catch(r("WAWebNoop")),
                o(
                  "WAWebBrLastUsedPaymentMethodCache",
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
    function S(e) {
      o("WAWebToastManager").ToastManager.open(
        m.jsx(o("WAWebToast.react").Toast, { msg: e }),
      );
    }
    function R(e) {
      var t = e.code,
        n = e.failureMsg,
        r = e.onCopy,
        a = e.successMsg;
      if (t == null) {
        S(n);
        return;
      }
      o("WAWebCopyTextWithToast").copyTextWithToast({
        failureMsg: n,
        onSuccess: r,
        successMsg: a,
        text: t,
      });
    }
    function L(e) {
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
    function E(e) {
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
    function k(e) {
      return (
        e.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE &&
        E(e) &&
        o("WAWebMsgGetters").getIsSentByMe(e.unsafe())
      );
    }
    ((l.getPaymentInfoOrderDetailsInteractiveAction = p),
      (l.getOpenPaymentLinkInteractiveAction = g),
      (l.getCopyBoletoCodeInteractiveAction = h),
      (l.getCopyPixStaticCodeInteractiveAction = y),
      (l.copyPixStaticCode = C),
      (l.getCopyPixCodeInteractiveAction = v),
      (l.hasOrderOffsiteCardPay = L),
      (l.shouldHideOffsiteCardPayConfirmation = k));
  },
  226,
);
