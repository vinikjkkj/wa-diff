__d(
  "WAWebBrOptionsToPayActions",
  [
    "fbt",
    "WAWebABProps",
    "WAWebBrLastUsedPaymentMethodCache",
    "WAWebBrOptionsToPayResolver",
    "WAWebBrPaymentInteractionLogger",
    "WAWebBrPaymentMethodKey",
    "WAWebBrPaymentMethodSurface",
    "WAWebBrPaymentRequest",
    "WAWebBrPaymentSettingsUtils",
    "WAWebBrazilPaymentsGeoGating",
    "WAWebGetBrazilnteractiveActions",
    "WAWebGetInteractiveActionsFromButtons",
    "WAWebGetInteractiveCtaActions",
    "WAWebMsgCollection",
    "WAWebMsgType",
    "WAWebOrderDetails",
    "WAWebOrderStatus",
    "WAWebPaymentRequestWamLogger",
    "WAWebShowMessageActionRetryErrorAction",
    "filterNulls",
  ],
  function (t, n, r, o, a, i, l, s) {
    function e(e, t, n) {
      if (o("WAWebBrPaymentSettingsUtils").hasValidCard(e)) return null;
      var r = o("WAWebBrOptionsToPayResolver").resolveOptionsToPay({
        candidates: p(e, t, n),
        lastUsedMethodKey: y(t),
        hasUnusableServerOrdering:
          e.hasUnusableServerPaymentMethodOrdering === !0,
        isSettled: !1,
        orderedMethods: e.orderedPaymentMethods,
        serverRankSource: e.paymentMethodRankSource,
      });
      return r == null
        ? null
        : c(
            r,
            function () {
              var e = C(t);
              return e != null && d(e, n);
            },
            function (e, n) {
              var r = h(t);
              r != null &&
                o(
                  "WAWebBrPaymentInteractionLogger",
                ).logAPIMerchantPaymentOptionsShownEvent({
                  msg: r,
                  renderedSnapshot: e,
                  weights: n,
                });
            },
          );
    }
    function u(e, t, n) {
      if (
        n.isFromTemplate !== !0 ||
        !e.every(function (e) {
          return e.name === "payment_request";
        })
      )
        return null;
      var a = o("WAWebBrOptionsToPayResolver").resolveOptionsToPay({
        candidates: r("filterNulls")(
          e.map(function (e) {
            return f(e, t, n);
          }),
        ),
        isSettled: !1,
        lastUsedMethodKey: y(t),
      });
      return a == null
        ? null
        : c(
            a,
            function () {
              var e;
              return (
                ((e = h(t)) == null ? void 0 : e.isFromTemplate) === !0 &&
                o("WAWebBrPaymentRequest").isPaymentRequestFeatureEnabled(!0)
              );
            },
            function (e, n) {
              var r = h(t);
              r != null &&
                o(
                  "WAWebPaymentRequestWamLogger",
                ).logPaymentRequestOptionsShownWAMEvent(r, e, n);
            },
          );
    }
    function c(e, t, n) {
      var a = e.inline,
        i = e.sheet,
        l = {
          orderedMethodKeys: [a].concat(i).map(function (e) {
            return e.methodKey;
          }),
          rankSource: e.rankSource,
        },
        s = function (n, r) {
          return t() ? n.getAction(r, !0, l) : null;
        },
        u = function (t) {
          return o("WAWebABProps").getABPropConfigValue(
            "br_payments_options_to_pay_sheet_enabled",
          ) === !0
            ? s(
                t,
                o("WAWebBrPaymentMethodSurface").BrPaymentMethodSurface
                  .OPTIONS_SHEET,
              )
            : null;
        },
        c = function (t) {
          if ((t == null ? void 0 : t.onClick) == null) {
            r("WAWebShowMessageActionRetryErrorAction")();
            return;
          }
          t.onClick();
        },
        d = i.map(function (e) {
          return {
            key: e.methodKey,
            label: v(e.kind),
            isEligible: function () {
              return u(e) != null;
            },
            onSelect: function () {
              return c(u(e));
            },
            testid: S(e.kind),
          };
        });
      return [
        babelHelpers.extends({}, a.action, {
          onClick: function () {
            return c(
              s(
                a,
                o("WAWebBrPaymentMethodSurface").BrPaymentMethodSurface
                  .INLINE_CTA,
              ),
            );
          },
        }),
        m(
          d,
          function () {
            return d.some(function (e) {
              return e.isEligible();
            });
          },
          function () {
            return n(l, {
              weightsVersion: e.weightsVersion,
              rankChanged: e.rankChanged,
              pinnedEntry: e.pinnedEntry,
            });
          },
        ),
      ];
    }
    function d(e, t) {
      return (
        !o("WAWebBrPaymentSettingsUtils").hasValidCard(e) &&
        o("WAWebOrderStatus").findOrderPaymentStatus(
          t,
          e.referenceId,
          o("WAWebOrderStatus").isSimplifiedOrder(e),
        ) == null
      );
    }
    function m(e, t, n) {
      return {
        label: s._(/*BTDS*/ "Options to pay"),
        menu: {
          title: s._(/*BTDS*/ "Options to pay"),
          items: e,
          isEligible: t,
          onRender: n,
        },
        testid: "br-options-to-pay-button",
      };
    }
    function p(e, t, n) {
      var a,
        i = [
          {
            key: (a = o(
              "WAWebBrPaymentMethodKey",
            )).getPixMethodKeyForServerOrdering(
              a.getPixFlowType(e.paymentSettings),
            ),
            kind: "pix",
          },
          { key: a.BrPaymentMethodKey.PAYMENT_LINK, kind: "payment_link" },
          { key: a.BrPaymentMethodKey.BOLETO, kind: "boleto" },
        ];
      return r("filterNulls")(
        i.map(function (r) {
          var a = r.key,
            i = r.kind;
          return g(a, i, function (r, l, s) {
            var u = l === !0 ? C(t) : e;
            return u == null || !_(u, n, i, a)
              ? null
              : i === "pix"
                ? o(
                    "WAWebGetBrazilnteractiveActions",
                  ).getCopyPixCodeInteractiveAction({
                    msgKey: t,
                    orderInfo: u,
                    surface: r,
                    paymentMethodSnapshot: s,
                  })
                : i === "payment_link"
                  ? o(
                      "WAWebGetBrazilnteractiveActions",
                    ).getOpenPaymentLinkInteractiveAction({
                      msgKey: t,
                      orderInfo: u,
                      surface: r,
                      paymentMethodSnapshot: s,
                    })
                  : i === "boleto"
                    ? o(
                        "WAWebGetBrazilnteractiveActions",
                      ).getCopyBoletoCodeInteractiveAction({
                        msgKey: t,
                        orderInfo: u,
                        surface: r,
                        paymentMethodSnapshot: s,
                      })
                    : (function () {
                        throw Error(
                          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                            i,
                        );
                      })();
          });
        }),
      );
    }
    function _(e, t, n, r) {
      return n === "pix"
        ? o("WAWebBrPaymentSettingsUtils").hasValidDynamicPix(e) &&
            o("WAWebBrPaymentMethodKey").getPixMethodKeyForServerOrdering(
              o("WAWebBrPaymentMethodKey").getPixFlowType(e.paymentSettings),
            ) === r
        : n === "payment_link"
          ? o("WAWebBrazilPaymentsGeoGating").isPaymentLinkEnabled(t) &&
            o("WAWebBrPaymentSettingsUtils").hasValidPaymentLink(e)
          : n === "boleto"
            ? o("WAWebBrazilPaymentsGeoGating").isBoletoEnabled(t) &&
              o("WAWebBrPaymentSettingsUtils").hasValidBoletoCode(e)
            : (function () {
                throw Error(
                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                    n,
                );
              })();
    }
    function f(e, t, n) {
      var a = function (i, l, s) {
          var a,
            u,
            c,
            d =
              l === !0
                ? (a = b(t)) == null
                  ? void 0
                  : a.find(function (t) {
                      return t.index === e.index;
                    })
                : e,
            m = d == null ? void 0 : d.data.paymentRequestInfo;
          return d == null ||
            m == null ||
            m.paymentType !==
              ((u = e.data.paymentRequestInfo) == null
                ? void 0
                : u.paymentType) ||
            o("WAWebBrPaymentMethodKey").getPixMethodKeyForServerOrdering(
              m.pixFlowType,
            ) !==
              o("WAWebBrPaymentMethodKey").getPixMethodKeyForServerOrdering(
                (c = e.data.paymentRequestInfo) == null
                  ? void 0
                  : c.pixFlowType,
              )
            ? null
            : r("WAWebGetInteractiveActionsFromButtons")([d], t, n, i, s).at(0);
        },
        i = e.data.paymentRequestInfo;
      return i == null
        ? null
        : i.paymentType ===
            o("WAWebBrPaymentRequest").PaymentRequestCtaType.PIX_DYNAMIC_CODE
          ? g(
              o("WAWebBrPaymentMethodKey").getPixMethodKeyForServerOrdering(
                i.pixFlowType,
              ),
              "pix",
              a,
            )
          : i.paymentType ===
              o("WAWebBrPaymentRequest").PaymentRequestCtaType.PAYMENT_LINK
            ? g(
                o("WAWebBrPaymentMethodKey").BrPaymentMethodKey.PAYMENT_LINK,
                "payment_link",
                a,
              )
            : i.paymentType ===
                o("WAWebBrPaymentRequest").PaymentRequestCtaType.BOLETO
              ? g(
                  o("WAWebBrPaymentMethodKey").BrPaymentMethodKey.BOLETO,
                  "boleto",
                  a,
                )
              : i.paymentType ===
                  o("WAWebBrPaymentRequest").PaymentRequestCtaType
                    .OFFSITE_CARD_PAY
                ? null
                : (function () {
                    throw Error(
                      "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                        i.paymentType,
                    );
                  })();
    }
    function g(e, t, n) {
      var r = n(
        o("WAWebBrPaymentMethodSurface").BrPaymentMethodSurface.INLINE_CTA,
      );
      return r == null
        ? null
        : {
            methodKey: e,
            value: { action: r, methodKey: e, kind: t, getAction: n },
          };
    }
    function h(e) {
      var t,
        n =
          (t = o("WAWebMsgCollection").MsgCollection.get(e)) == null
            ? void 0
            : t.safe();
      return n != null && n.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE
        ? n
        : null;
    }
    function y(e) {
      var t = h(e);
      return t == null
        ? null
        : o(
            "WAWebBrLastUsedPaymentMethodCache",
          ).getCachedLastUsedBrPaymentMethod(t);
    }
    function C(e) {
      var t = h(e);
      return t == null ? null : o("WAWebOrderDetails").getOrderInfo(t);
    }
    function b(e) {
      var t = h(e);
      return t == null
        ? null
        : o(
            "WAWebGetInteractiveCtaActions",
          ).getNativeFlowCtasFromInteractiveMsg(t);
    }
    function v(e) {
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
    function S(e) {
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
