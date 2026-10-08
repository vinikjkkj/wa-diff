__d(
  "WAWebGetInteractiveActions",
  [
    "fbt",
    "WAWebBizEntryPoint",
    "WAWebBizFrontendGatingUtils",
    "WAWebBizOrderDetailAction",
    "WAWebBizTemplateAndInteractiveMessagesUtils",
    "WAWebBrAddPixKeyMessageGating",
    "WAWebBrAddPixKeyMessageOffer",
    "WAWebBrOptionsToPayActions",
    "WAWebBrSavePartnerPixKeyFeature",
    "WAWebBrSenderPixKeyAttribution",
    "WAWebBrazilPaymentsGeoGating",
    "WAWebExternalLink.react",
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
    "WAWebPaymentsGatingUtils",
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
      var _ = [];
      switch (u) {
        case r("WAWebInteractiveMessageType").SHOPS_STOREFRONT: {
          var f = s;
          _.push(y(f));
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
              var C = o("WAWebOrderDetails").getOrderInfo(n);
              if (!C) return null;
              _.push(
                o(
                  "WAWebGetBrazilnteractiveActions",
                ).getPaymentInfoOrderDetailsInteractiveAction(C, n),
              );
            } else if (
              c === r("WAWebInteractiveMessagesNativeFlowName").ORDER_DETAILS
            ) {
              var b,
                v = o("WAWebOrderDetails").getOrderInfo(n);
              if (!v) return null;
              var S = o("WAWebFrontendMsgGetters").getChat(n.unsafe()),
                R = o("WAWebOrderStatus").findOrderStatus(S, v.referenceId),
                L = o("WAWebOrderExpansionAction").getOrderUpdateStatusAction({
                  chat: S,
                  msg: n,
                  orderInfo: v,
                  orderStatus: R,
                  uimContext: l,
                });
              L && _.push(L);
              var E = R === o("WAWebOrderStatus").OrderStatus.Pending,
                k = i == null;
              if (
                (S.contact.isEnterprise ||
                  ((b = S.contact) == null ? void 0 : b.isHosted) === !0) &&
                o("WAWebPaymentsGatingUtils").isBrazilToBrazilOrder(S)
              ) {
                var I = k ? p(v, n, S) : [g(n, l, !0)];
                I.length === 0 ? _.push(g(n, l, !E)) : _.push.apply(_, I);
              } else if (o("WAWebOrderStatus").isPaymentRequest(S, v)) {
                var T = h(n, v);
                T != null && _.push(T);
              } else {
                var D = null;
                (o("WAWebPaymentsGatingUtils").isBrazilToBrazilOrder(S) &&
                  o("WAWebGetBrazilnteractiveActions").hasValidStaticPix(v) &&
                  (D = o(
                    "WAWebGetBrazilnteractiveActions",
                  ).getCopyPixStaticCodeInteractiveAction(n, v)),
                  _.push(D != null ? D : g(n, l, !E)));
              }
              if (!o("WAWebMsgGetters").getIsSentByMe(n)) {
                var x = o("WAWebGetQuickPayAction").getQuickPayAction(
                  n,
                  v.type,
                  !E,
                );
                x && _.push(x);
              }
            } else if (
              c ===
              r("WAWebInteractiveMessagesNativeFlowName").MESSAGE_WITH_LINK
            ) {
              var $ = o(
                "WAWebGetMessageWithLinkAction",
              ).getOpenMessageWithLinkAction(n);
              $ && _.push($);
            } else if (
              c ===
              r("WAWebInteractiveMessagesNativeFlowName").OFFER_PAYMENT_ACCOUNT
            ) {
              var P = d(n);
              P && _.push(P);
            }
            if (
              c != null &&
              o(
                "WAWebBizTemplateAndInteractiveMessagesUtils",
              ).supportedNativeFlowButtonNamesForInteractiveMsg.includes(c)
            ) {
              var N = o(
                "WAWebGetInteractiveCtaActions",
              ).getNativeFlowCtasFromInteractiveMsg(n);
              N != null && _.push.apply(_, m(N, n));
            }
          }
          break;
        case r("WAWebInteractiveMessageType").CAROUSEL:
          break;
      }
      return _;
    }
    function d(e) {
      if (e.id.fromMe || !o("WAWebBizFrontendGatingUtils").isPixOnWebEnabled())
        return null;
      var t = o("WAWebBrAddPixKeyMessageOffer").getAddPixKeyMessageOffer(e);
      return t == null
        ? null
        : {
            label: s._(/*BTDS*/ "Add Pix key"),
            onClick: function () {
              o("WAWebBrAddPixKeyMessageGating").isAddPixKeyMessageEnabled() &&
                o("WAWebBrSavePartnerPixKeyFeature").openAddPixKeyMessageScreen(
                  t,
                  o(
                    "WAWebBrSenderPixKeyAttribution",
                  ).resolveSenderPixKeyAttribution(e.senderObj),
                );
            },
            testid: "br_add_pix_key_message_action",
          };
    }
    function m(e, t) {
      var n;
      return (n = o(
        "WAWebBrOptionsToPayActions",
      ).getPaymentRequestOptionsToPayActions(e, t)) != null
        ? n
        : r("WAWebGetInteractiveActionsFromButtons")(e, t);
    }
    function p(e, t, n) {
      var r;
      return (r = o(
        "WAWebBrOptionsToPayActions",
      ).getOrderDetailsOptionsToPayActions(e, t, n)) != null
        ? r
        : _(e, t, n);
    }
    function _(e, t, n) {
      var r = [],
        a = 2;
      return (
        o("WAWebGetBrazilnteractiveActions").hasValidDynamicPix(e) &&
          r.push(
            o(
              "WAWebGetBrazilnteractiveActions",
            ).getCopyPixCodeInteractiveAction(e, t),
          ),
        o("WAWebBrazilPaymentsGeoGating").isPaymentLinkEnabled(n) &&
          o("WAWebGetBrazilnteractiveActions").hasValidPaymentLink(e) &&
          r.push(
            o(
              "WAWebGetBrazilnteractiveActions",
            ).getOpenPaymentLinkInteractiveAction(e, t),
          ),
        r.length < a &&
          o("WAWebBrazilPaymentsGeoGating").isBoletoEnabled(n) &&
          o("WAWebGetBrazilnteractiveActions").hasValidBoletoCode(e) &&
          r.push(
            o(
              "WAWebGetBrazilnteractiveActions",
            ).getCopyBoletoCodeInteractiveAction({ msg: t, orderInfo: e }),
          ),
        r.length < a &&
          o("WAWebGetBrazilnteractiveActions").hasValidCard(e) &&
          r.push(f()),
        r
      );
    }
    function f() {
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
              /*BTDS*/ "Use WhatsApp on your phone to pay for this charge with a card.",
            ),
          });
        },
      };
    }
    function g(e, t, n) {
      var a = function () {
        return o("WAWebMsgGetters").getIsSentByMe(e) || n
          ? s._(/*BTDS*/ "View details")
          : o("WAWebPaymentsGatingUtils").isWidInPaymentsCountry(
                o("WAWebMsgGetters").getSender(e),
              ) &&
              o("WAWebPaymentsGatingUtils").isWidInPaymentsCountry(
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
                  /*BTDS*/ "Use WhatsApp on your phone to view this order.",
                ),
              });
        },
      };
    }
    function h(e, t) {
      return o("WAWebMsgGetters").getIsSentByMe(e)
        ? null
        : o(
            "WAWebGetBrazilnteractiveActions",
          ).getCopyPixStaticCodeInteractiveAction(e, t);
    }
    function y(e) {
      var t = e.id;
      return {
        label: s._(/*BTDS*/ "View shop"),
        onClick: function () {
          if (t == null)
            return void r("WAWebShowMessageActionFallbackErrorAction")();
          o("WAWebExternalLink.react").openExternalLink(
            "https://facebook.com/" + t + "/shop/",
          );
        },
      };
    }
    l.default = c;
  },
  226,
);
