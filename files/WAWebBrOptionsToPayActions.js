__d(
  "WAWebBrOptionsToPayActions",
  [
    "fbt",
    "WAWebBrOptionsToPayResolver",
    "WAWebBrPaymentMethodKey",
    "WAWebBrPaymentMethodSurface",
    "WAWebBrPaymentRequest",
    "WAWebBrPaymentSettingsUtils",
    "WAWebBrazilPaymentsGeoGating",
    "WAWebGetBrazilnteractiveActions",
    "WAWebGetInteractiveActionsFromButtons",
    "filterNulls",
  ],
  function (t, n, r, o, a, i, l, s) {
    function e(e, t, n) {
      if (o("WAWebBrPaymentSettingsUtils").hasValidCard(e)) return null;
      var r = o("WAWebBrOptionsToPayResolver").resolveOptionsToPay({
        candidates: d(e, t, n),
        hasUnusableServerOrdering:
          e.hasUnusableServerPaymentMethodOrdering === !0,
        isSettled: !1,
        orderedMethods: e.orderedPaymentMethods,
        serverRankSource: e.paymentMethodRankSource,
      });
      return r == null ? null : [r.inline.action, c(r.sheet)];
    }
    function u(e, t) {
      if (
        t.isFromTemplate !== !0 ||
        !e.every(function (e) {
          return e.name === "payment_request";
        })
      )
        return null;
      var n = o("WAWebBrOptionsToPayResolver").resolveOptionsToPay({
        candidates: r("filterNulls")(
          e.map(function (e) {
            return m(e, t);
          }),
        ),
        isSettled: !1,
      });
      return n == null ? null : [n.inline.action, c(n.sheet)];
    }
    function c(e) {
      return {
        label: s._(/*BTDS*/ "Options to pay"),
        menu: {
          title: s._(/*BTDS*/ "Options to pay"),
          items: e.map(function (e) {
            return e.row;
          }),
        },
        testid: "br-options-to-pay-button",
      };
    }
    function d(e, t, n) {
      return r("filterNulls")([
        o("WAWebBrPaymentSettingsUtils").hasValidDynamicPix(e)
          ? p(
              o("WAWebBrPaymentMethodKey").getPixMethodKeyForServerOrdering(
                o("WAWebBrPaymentMethodKey").getPixFlowType(e.paymentSettings),
              ),
              "pix",
              function (n) {
                return o(
                  "WAWebGetBrazilnteractiveActions",
                ).getCopyPixCodeInteractiveAction({
                  msg: t,
                  orderInfo: e,
                  surface: n,
                });
              },
            )
          : null,
        o("WAWebBrazilPaymentsGeoGating").isPaymentLinkEnabled(n) &&
        o("WAWebBrPaymentSettingsUtils").hasValidPaymentLink(e)
          ? p(
              o("WAWebBrPaymentMethodKey").BrPaymentMethodKey.PAYMENT_LINK,
              "payment_link",
              function (n) {
                return o(
                  "WAWebGetBrazilnteractiveActions",
                ).getOpenPaymentLinkInteractiveAction({
                  msg: t,
                  orderInfo: e,
                  surface: n,
                });
              },
            )
          : null,
        o("WAWebBrazilPaymentsGeoGating").isBoletoEnabled(n) &&
        o("WAWebBrPaymentSettingsUtils").hasValidBoletoCode(e)
          ? p(
              o("WAWebBrPaymentMethodKey").BrPaymentMethodKey.BOLETO,
              "boleto",
              function (n) {
                return o(
                  "WAWebGetBrazilnteractiveActions",
                ).getCopyBoletoCodeInteractiveAction({
                  msg: t,
                  orderInfo: e,
                  surface: n,
                });
              },
            )
          : null,
      ]);
    }
    function m(e, t) {
      var n = function (o) {
          return r("WAWebGetInteractiveActionsFromButtons")([e], t, o).at(0);
        },
        a = e.data.paymentRequestInfo;
      return a == null
        ? null
        : a.paymentType ===
            o("WAWebBrPaymentRequest").PaymentRequestCtaType.PIX_DYNAMIC_CODE
          ? p(
              o("WAWebBrPaymentMethodKey").getPixMethodKeyForServerOrdering(
                a.pixFlowType,
              ),
              "pix",
              n,
            )
          : a.paymentType ===
              o("WAWebBrPaymentRequest").PaymentRequestCtaType.PAYMENT_LINK
            ? p(
                o("WAWebBrPaymentMethodKey").BrPaymentMethodKey.PAYMENT_LINK,
                "payment_link",
                n,
              )
            : a.paymentType ===
                o("WAWebBrPaymentRequest").PaymentRequestCtaType.BOLETO
              ? p(
                  o("WAWebBrPaymentMethodKey").BrPaymentMethodKey.BOLETO,
                  "boleto",
                  n,
                )
              : a.paymentType ===
                  o("WAWebBrPaymentRequest").PaymentRequestCtaType
                    .OFFSITE_CARD_PAY
                ? null
                : (function () {
                    throw Error(
                      "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                        a.paymentType,
                    );
                  })();
    }
    function p(e, t, n) {
      var r = n(
        o("WAWebBrPaymentMethodSurface").BrPaymentMethodSurface.INLINE_CTA,
      );
      return r == null
        ? null
        : {
            methodKey: e,
            value: {
              action: r,
              row: {
                key: t,
                label: _(t),
                onSelect: function () {
                  var e;
                  return (e = n(
                    o("WAWebBrPaymentMethodSurface").BrPaymentMethodSurface
                      .OPTIONS_SHEET,
                  )) == null || e.onClick == null
                    ? void 0
                    : e.onClick();
                },
                testid: f(t),
              },
            },
          };
    }
    function _(e) {
      return e === "pix"
        ? s._(/*BTDS*/ "Pix code")
        : e === "payment_link"
          ? s._(/*BTDS*/ "Payment link")
          : e === "boleto"
            ? s._(/*BTDS*/ "Boleto code")
            : (function () {
                throw Error(
                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                    e,
                );
              })();
    }
    function f(e) {
      return e === "pix"
        ? "br-options-to-pay-row-pix"
        : e === "payment_link"
          ? "br-options-to-pay-row-payment-link"
          : e === "boleto"
            ? "br-options-to-pay-row-boleto"
            : (function () {
                throw Error(
                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                    e,
                );
              })();
    }
    ((l.getOrderDetailsOptionsToPayActions = e),
      (l.getPaymentRequestOptionsToPayActions = u));
  },
  226,
);
