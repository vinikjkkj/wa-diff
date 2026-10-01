__d(
  "WAWebGetInteractiveActions",
  [
    "fbt",
    "WAWebBizEntryPoint",
    "WAWebBizFrontendGatingUtils",
    "WAWebBizOrderDetailAction",
    "WAWebBizTemplateAndInteractiveMessagesUtils",
    "WAWebBrAddPixKeyMessageOffer",
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
      var g = [];
      switch (u) {
        case r("WAWebInteractiveMessageType").SHOPS_STOREFRONT: {
          var h = s;
          g.push(f(h));
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
              var y = o("WAWebOrderDetails").getOrderInfo(n);
              if (!y) return null;
              g.push(
                o(
                  "WAWebGetBrazilnteractiveActions",
                ).getPaymentInfoOrderDetailsInteractiveAction(y, n),
              );
            } else if (
              c === r("WAWebInteractiveMessagesNativeFlowName").ORDER_DETAILS
            ) {
              var C,
                b = o("WAWebOrderDetails").getOrderInfo(n);
              if (!b) return null;
              var v = o("WAWebFrontendMsgGetters").getChat(n.unsafe()),
                S = o("WAWebOrderStatus").findOrderStatus(v, b.referenceId),
                R = o("WAWebOrderExpansionAction").getOrderUpdateStatusAction({
                  chat: v,
                  msg: n,
                  orderInfo: b,
                  orderStatus: S,
                  uimContext: l,
                });
              R && g.push(R);
              var L = S === o("WAWebOrderStatus").OrderStatus.Pending,
                E = i == null;
              if (
                (v.contact.isEnterprise ||
                  ((C = v.contact) == null ? void 0 : C.isHosted) === !0) &&
                o("WAWebPaymentsGatingUtils").isBrazilToBrazilOrder(v)
              ) {
                var k = [],
                  I = 2;
                (E
                  ? (o("WAWebGetBrazilnteractiveActions").hasValidDynamicPix(
                      b,
                    ) &&
                      k.push(
                        o(
                          "WAWebGetBrazilnteractiveActions",
                        ).getCopyPixCodeInteractiveAction(b, n),
                      ),
                    o("WAWebBrazilPaymentsGeoGating").isPaymentLinkEnabled(v) &&
                      o("WAWebGetBrazilnteractiveActions").hasValidPaymentLink(
                        b,
                      ) &&
                      k.push(
                        o(
                          "WAWebGetBrazilnteractiveActions",
                        ).getOpenPaymentLinkInteractiveAction(b, n),
                      ),
                    k.length < I &&
                      o("WAWebBrazilPaymentsGeoGating").isBoletoEnabled(v) &&
                      o("WAWebGetBrazilnteractiveActions").hasValidBoletoCode(
                        b,
                      ) &&
                      k.push(
                        o(
                          "WAWebGetBrazilnteractiveActions",
                        ).getCopyBoletoCodeInteractiveAction(b, n),
                      ),
                    k.length < I &&
                      o("WAWebGetBrazilnteractiveActions").hasValidCard(b) &&
                      k.push(m()))
                  : k.push(p(n, l, !0)),
                  k.length === 0 && k.push(p(n, l, !L)),
                  g.push.apply(g, k));
              } else if (o("WAWebOrderStatus").isPaymentRequest(v, b)) {
                var T = _(n, b);
                T != null && g.push(T);
              } else {
                var D = null;
                (o("WAWebPaymentsGatingUtils").isBrazilToBrazilOrder(v) &&
                  o("WAWebGetBrazilnteractiveActions").hasValidStaticPix(b) &&
                  (D = o(
                    "WAWebGetBrazilnteractiveActions",
                  ).getCopyPixStaticCodeInteractiveAction(n, b)),
                  g.push(D != null ? D : p(n, l, !L)));
              }
              if (!o("WAWebMsgGetters").getIsSentByMe(n)) {
                var x = o("WAWebGetQuickPayAction").getQuickPayAction(
                  n,
                  b.type,
                  !L,
                );
                x && g.push(x);
              }
            } else if (
              c ===
              r("WAWebInteractiveMessagesNativeFlowName").MESSAGE_WITH_LINK
            ) {
              var $ = o(
                "WAWebGetMessageWithLinkAction",
              ).getOpenMessageWithLinkAction(n);
              $ && g.push($);
            } else if (
              c ===
              r("WAWebInteractiveMessagesNativeFlowName").OFFER_PAYMENT_ACCOUNT
            ) {
              var P = d(n);
              P && g.push(P);
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
              N != null &&
                g.push.apply(
                  g,
                  r("WAWebGetInteractiveActionsFromButtons")(N, n),
                );
            }
          }
          break;
        case r("WAWebInteractiveMessageType").CAROUSEL:
          break;
      }
      return g;
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
    function m() {
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
    function p(e, t, n) {
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
    function _(e, t) {
      return o("WAWebMsgGetters").getIsSentByMe(e)
        ? null
        : o(
            "WAWebGetBrazilnteractiveActions",
          ).getCopyPixStaticCodeInteractiveAction(e, t);
    }
    function f(e) {
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
