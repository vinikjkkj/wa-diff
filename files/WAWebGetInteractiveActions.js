__d(
  "WAWebGetInteractiveActions",
  [
    "fbt",
    "WAWebBizEntryPoint",
    "WAWebBizFrontendGatingUtils",
    "WAWebBizGatingUtils",
    "WAWebBizOrderDetailAction",
    "WAWebBizShopsAction",
    "WAWebBizTemplateAndInteractiveMessagesUtils",
    "WAWebBrazilPaymentsGeoGating",
    "WAWebFbtAppName",
    "WAWebFrontendMsgGetters",
    "WAWebGetBrazilnteractiveActions",
    "WAWebGetInteractiveActionsFromButtons",
    "WAWebGetInteractiveCtaActions",
    "WAWebGetMessageWithLinkAction",
    "WAWebGetQuickPayAction",
    "WAWebInteractiveMessageType",
    "WAWebInteractiveMessagesNativeFlowName",
    "WAWebMsgGetters",
    "WAWebOrderDetails",
    "WAWebOrderExpansionAction",
    "WAWebOrderStatus",
    "WAWebOrdersExpansionCountries",
    "WAWebShowMessageActionFallbackErrorAction",
    "WAWebUserPrefsMeUser",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = e.canCompose,
        n = e.msg,
        a = e.orderPaymentStatus,
        i = a === void 0 ? null : a,
        l = e.uimContext,
        s = n.interactivePayload,
        u = n.interactiveType,
        c = n.nativeFlowName;
      if (!s) return null;
      var f = [];
      switch (u) {
        case r("WAWebInteractiveMessageType").SHOPS_STOREFRONT: {
          var g = s;
          f.push(_(g));
          break;
        }
        case r("WAWebInteractiveMessageType").NATIVE_FLOW:
          if (
            typeof t == "boolean" &&
            (t || c === r("WAWebInteractiveMessagesNativeFlowName").CTA_URL)
          ) {
            if (
              c === r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_INFO
            ) {
              var h = o("WAWebOrderDetails").getOrderInfo(n);
              if (!h) return null;
              f.push(
                o(
                  "WAWebGetBrazilnteractiveActions",
                ).getPaymentInfoOrderDetailsInteractiveAction(h, n),
              );
            } else if (
              c === r("WAWebInteractiveMessagesNativeFlowName").ORDER_DETAILS
            ) {
              var y,
                C = o("WAWebOrderDetails").getOrderInfo(n);
              if (!C) return null;
              var b = o("WAWebFrontendMsgGetters").getChat(n.unsafe()),
                v = o("WAWebOrderStatus").findOrderStatus(b, C.referenceId),
                S = o("WAWebOrderExpansionAction").getOrderUpdateStatusAction(
                  n,
                  v,
                  l,
                  b,
                  C,
                );
              S && f.push(S);
              var R = v === o("WAWebOrderStatus").OrderStatus.Pending,
                L = i == null;
              if (
                (b.contact.isEnterprise ||
                  ((y = b.contact) == null ? void 0 : y.isHosted) === !0) &&
                o("WAWebBizGatingUtils").isBrazilToBrazilOrder(b)
              ) {
                var E = [],
                  k = 2,
                  I = o("WAWebBizFrontendGatingUtils").isAPICopyPixCTAEnabled();
                (L
                  ? (I &&
                      o("WAWebGetBrazilnteractiveActions").hasValidDynamicPix(
                        C,
                      ) &&
                      E.push(
                        o(
                          "WAWebGetBrazilnteractiveActions",
                        ).getCopyPixCodeInteractiveAction(C, n),
                      ),
                    o("WAWebBrazilPaymentsGeoGating").isPaymentLinkEnabled(b) &&
                      o("WAWebGetBrazilnteractiveActions").hasValidPaymentLink(
                        C,
                      ) &&
                      E.push(
                        o(
                          "WAWebGetBrazilnteractiveActions",
                        ).getOpenPaymentLinkInteractiveAction(C, n),
                      ),
                    E.length < k &&
                      o("WAWebBrazilPaymentsGeoGating").isBoletoEnabled(b) &&
                      o("WAWebGetBrazilnteractiveActions").hasValidBoletoCode(
                        C,
                      ) &&
                      E.push(
                        o(
                          "WAWebGetBrazilnteractiveActions",
                        ).getCopyBoletoCodeInteractiveAction(C, n),
                      ),
                    E.length < k &&
                      I &&
                      o("WAWebGetBrazilnteractiveActions").hasValidCard(C) &&
                      E.push(d()))
                  : E.push(m(n, l, !0)),
                  E.length === 0 && E.push(m(n, l, !R)),
                  f.push.apply(f, E));
              } else if (o("WAWebOrderStatus").isPaymentRequest(b, C)) {
                var T = p(n, C);
                T != null && f.push(T);
              } else f.push(m(n, l, !R));
              if (!o("WAWebMsgGetters").getIsSentByMe(n)) {
                var D = o("WAWebGetQuickPayAction").getQuickPayAction(
                  n,
                  C.type,
                  !R,
                );
                D && f.push(D);
              }
            } else if (
              c ===
              r("WAWebInteractiveMessagesNativeFlowName").MESSAGE_WITH_LINK
            ) {
              var x = o(
                "WAWebGetMessageWithLinkAction",
              ).getOpenMessageWithLinkAction(n);
              x && f.push(x);
            }
            if (
              c != null &&
              o(
                "WAWebBizTemplateAndInteractiveMessagesUtils",
              ).supportedNativeFlowButtonNamesForInteractiveMsg.includes(c)
            ) {
              var $ = o(
                "WAWebGetInteractiveCtaActions",
              ).getNativeFlowCtasFromInteractiveMsg(n);
              $ != null &&
                f.push.apply(
                  f,
                  r("WAWebGetInteractiveActionsFromButtons")($, n),
                );
            }
          }
          break;
        case r("WAWebInteractiveMessageType").CAROUSEL:
          break;
      }
      return f;
    }
    function d() {
      return {
        label: s._(/*BTDS*/ "Pay with card"),
        onClick: function () {
          r("WAWebShowMessageActionFallbackErrorAction")({
            title: s._(/*BTDS*/ "Charges can't be paid with cards on {=m1}", [
              s._implicitParam(
                "=m1",
                u.jsx(o("WAWebFbtAppName").WAWebAppShortName, {
                  children: s._(/*BTDS*/ ""),
                }),
              ),
            ]),
            body: s._(
              /*BTDS*/ "Use WhatsApp on your mobile device to pay for this charge with a card.",
            ),
          });
        },
      };
    }
    function m(e, t, n) {
      var a = function () {
        return o("WAWebMsgGetters").getIsSentByMe(e) || n
          ? s._(/*BTDS*/ "View details")
          : o("WAWebBizGatingUtils").isWidInPaymentsCountry(
                o("WAWebMsgGetters").getSender(e),
              ) &&
              o("WAWebBizGatingUtils").isWidInPaymentsCountry(
                o("WAWebUserPrefsMeUser").getMaybeMePnUser(),
              )
            ? s._(/*BTDS*/ "Review and pay")
            : s._(/*BTDS*/ "View details");
      };
      return {
        label: a(),
        onClick: function () {
          o("WAWebMsgGetters").getIsSentByMe(e) ||
          o(
            "WAWebOrdersExpansionCountries",
          ).getConsumerOrdersExpansionAllowedCountries()
            ? o("WAWebBizOrderDetailAction").openOrderDetailDrawer(
                e,
                t,
                r("WAWebBizEntryPoint").FROM_CHAT,
              )
            : r("WAWebShowMessageActionFallbackErrorAction")({
                title: s._(/*BTDS*/ "Orders can't be viewed on {=m1}", [
                  s._implicitParam(
                    "=m1",
                    u.jsx(o("WAWebFbtAppName").WAWebAppShortName, {
                      children: s._(/*BTDS*/ ""),
                    }),
                  ),
                ]),
                body: s._(
                  /*BTDS*/ "Use WhatsApp on your mobile device to view this order.",
                ),
              });
        },
      };
    }
    function p(e, t) {
      return o("WAWebMsgGetters").getIsSentByMe(e)
        ? null
        : o(
            "WAWebGetBrazilnteractiveActions",
          ).getCopyPixStaticCodeInteractiveAction(e, t);
    }
    function _(e) {
      var t = e.id;
      return {
        label: s._(/*BTDS*/ "View shop"),
        onClick: function () {
          if (t == null)
            return void r("WAWebShowMessageActionFallbackErrorAction")();
          o("WAWebBizShopsAction").openShopStorefront(t);
        },
      };
    }
    l.default = c;
  },
  226,
);
