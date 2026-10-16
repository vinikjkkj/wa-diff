__d(
  "WAWebGetInteractiveActions",
  [
    "fbt",
    "WAWebBizAiAgentGating",
    "WAWebBizAiAgentStatusUtils",
    "WAWebBizEntryPoint",
    "WAWebBizFrontendGatingUtils",
    "WAWebBizOrderDetailAction",
    "WAWebBizTemplateAndInteractiveMessagesUtils",
    "WAWebBrAddPixKeyMessageGating",
    "WAWebBrAddPixKeyMessageOffer",
    "WAWebBrAddPixKeyPartnerDirectory",
    "WAWebBrAddPixKeySavedMarker",
    "WAWebBrOptionsToPayActions",
    "WAWebBrPaymentSettingsUtils",
    "WAWebBrSavePartnerPixKeyFeature",
    "WAWebBrSenderPixKeyAttribution",
    "WAWebBrazilPaymentsGeoGating",
    "WAWebChatGroupUtils",
    "WAWebFbtAppName",
    "WAWebFrontendMsgGetters",
    "WAWebGetBrazilnteractiveActions",
    "WAWebGetInteractiveActionsFromButtons",
    "WAWebGetInteractiveButtonActionValues",
    "WAWebGetInteractiveCtaActions",
    "WAWebGetMessageWithLinkAction",
    "WAWebGetQuickPayAction",
    "WAWebGetShopStorefrontInteractiveAction",
    "WAWebInteractiveMessageType",
    "WAWebInteractiveMessagesNativeFlowName",
    "WAWebLimitSharingGatingUtils",
    "WAWebMsgGetters",
    "WAWebOrderDetails",
    "WAWebOrderExpansionAction",
    "WAWebOrderStatus",
    "WAWebOrdersExpansionCountries",
    "WAWebPaymentDetailsBubbleActions",
    "WAWebPaymentDetailsGating",
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
      var m = [];
      switch (u) {
        case r("WAWebInteractiveMessageType").SHOPS_STOREFRONT: {
          m.push(r("WAWebGetShopStorefrontInteractiveAction")(s));
          break;
        }
        case r("WAWebInteractiveMessageType").NATIVE_FLOW:
          if (d(n, t)) {
            if (
              c === r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_INFO
            ) {
              var g = o("WAWebOrderDetails").getOrderInfo(n);
              if (!g) return null;
              m.push.apply(m, R(n, g));
            } else if (
              c === r("WAWebInteractiveMessagesNativeFlowName").ORDER_DETAILS
            ) {
              var h = o("WAWebOrderDetails").getOrderInfo(n);
              if (!h) return null;
              var b = o("WAWebFrontendMsgGetters").getChat(n.unsafe()),
                L = o("WAWebOrderStatus").findOrderStatus(b, h.referenceId),
                E = o("WAWebOrderExpansionAction").getOrderUpdateStatusAction({
                  chat: b,
                  msg: n,
                  orderInfo: h,
                  orderStatus: L,
                  uimContext: l,
                });
              E && m.push(E);
              var k = L === o("WAWebOrderStatus").OrderStatus.Pending,
                I = i == null;
              if (v(b)) {
                var T = I ? f(h, n, b) : [y(n, l, !0)];
                T.length === 0 ? m.push(y(n, l, !k)) : m.push.apply(m, T);
              } else if (o("WAWebOrderStatus").isPaymentRequest(b, h))
                m.push.apply(m, S(n, h));
              else {
                var D = null;
                (o("WAWebPaymentsGatingUtils").isBrazilToBrazilOrder(b) &&
                  o("WAWebBrPaymentSettingsUtils").hasValidStaticPix(h) &&
                  (D = o(
                    "WAWebGetBrazilnteractiveActions",
                  ).getCopyPixStaticCodeInteractiveAction(n, h)),
                  m.push(D != null ? D : y(n, l, !k)));
              }
              var x = C(b, n, h, k);
              x && m.push(x);
            } else if (
              c ===
              r("WAWebInteractiveMessagesNativeFlowName").MESSAGE_WITH_LINK
            ) {
              var $ = o(
                "WAWebGetMessageWithLinkAction",
              ).getOpenMessageWithLinkAction(n);
              $ && m.push($);
            } else if (
              c ===
              r("WAWebInteractiveMessagesNativeFlowName").OFFER_PAYMENT_ACCOUNT
            ) {
              var P = p(n);
              P && m.push(P);
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
              N != null && m.push.apply(m, _(N, n));
            }
          }
          break;
        case r("WAWebInteractiveMessageType").CAROUSEL:
          break;
      }
      return m;
    }
    function d(e, t) {
      return typeof t != "boolean"
        ? !1
        : t ||
            e.nativeFlowName ===
              r("WAWebInteractiveMessagesNativeFlowName").CTA_URL
          ? !0
          : m(e);
    }
    function m(e) {
      if (
        !e.id.fromMe ||
        e.nativeFlowName !==
          r("WAWebInteractiveMessagesNativeFlowName").BOOKING_CONFIRMATION
      )
        return !1;
      var t = o("WAWebFrontendMsgGetters").getMaybeChat(e.unsafe());
      return (
        t != null &&
        o("WAWebBizAiAgentGating").isAiAgentAutoReplyEnabled() &&
        o("WAWebBizAiAgentStatusUtils").shouldShowAiAgentBlockBar(t) &&
        !t.isSuspendedOrTerminated() &&
        !o("WAWebLimitSharingGatingUtils").isChatAcp2Restricted(t) &&
        o("WAWebChatGroupUtils").canSendIgnoringAiAgentBlock(t)
      );
    }
    function p(e) {
      if (e.id.fromMe || !o("WAWebBizFrontendGatingUtils").isPixOnWebEnabled())
        return null;
      var t = o("WAWebBrAddPixKeyMessageOffer").getAddPixKeyMessageOffer(e);
      return t == null
        ? null
        : o("WAWebBrAddPixKeyMessageOffer").isAddPixKeyMessageOfferSaved(e)
          ? {
              label: s._(/*BTDS*/ "View Pix key"),
              onClick: function () {
                o(
                  "WAWebBrAddPixKeyMessageGating",
                ).isAddPixKeyMessageEnabled() &&
                  o(
                    "WAWebBrSavePartnerPixKeyFeature",
                  ).openSavedPixKeyFromMessage();
              },
              testid: "br_view_pix_key_message_action",
            }
          : {
              label: s._(/*BTDS*/ "Add Pix key"),
              onClick: function () {
                o(
                  "WAWebBrAddPixKeyMessageGating",
                ).isAddPixKeyMessageEnabled() &&
                  o(
                    "WAWebBrSavePartnerPixKeyFeature",
                  ).openAddPixKeyMessageScreen(
                    t,
                    o(
                      "WAWebBrSenderPixKeyAttribution",
                    ).resolveSenderPixKeyAttribution(e.senderObj),
                    o(
                      "WAWebBrAddPixKeyPartnerDirectory",
                    ).addPixKeyPartnerCatalogIdForSender([
                      o("WAWebMsgGetters").getSender(e.unsafe()),
                    ]),
                    function (t) {
                      o(
                        "WAWebBrAddPixKeySavedMarker",
                      ).markAddPixKeyMessageSaved(e.id, t);
                    },
                  );
              },
              testid: "br_add_pix_key_message_action",
            };
    }
    function _(e, t) {
      var n;
      return (n = o(
        "WAWebBrOptionsToPayActions",
      ).getPaymentRequestOptionsToPayActions(e, t)) != null
        ? n
        : r("WAWebGetInteractiveActionsFromButtons")(
            e,
            t.id,
            r("WAWebGetInteractiveButtonActionValues")(t),
          );
    }
    function f(e, t, n) {
      var r;
      return (r = o(
        "WAWebBrOptionsToPayActions",
      ).getOrderDetailsOptionsToPayActions(e, t, n)) != null
        ? r
        : g(e, t, n);
    }
    function g(e, t, n) {
      var r = [],
        a = 2;
      return (
        o("WAWebBrPaymentSettingsUtils").hasValidDynamicPix(e) &&
          r.push(
            o(
              "WAWebGetBrazilnteractiveActions",
            ).getCopyPixCodeInteractiveAction({ msg: t, orderInfo: e }),
          ),
        o("WAWebBrazilPaymentsGeoGating").isPaymentLinkEnabled(n) &&
          o("WAWebBrPaymentSettingsUtils").hasValidPaymentLink(e) &&
          r.push(
            o(
              "WAWebGetBrazilnteractiveActions",
            ).getOpenPaymentLinkInteractiveAction({ msg: t, orderInfo: e }),
          ),
        r.length < a &&
          o("WAWebBrazilPaymentsGeoGating").isBoletoEnabled(n) &&
          o("WAWebBrPaymentSettingsUtils").hasValidBoletoCode(e) &&
          r.push(
            o(
              "WAWebGetBrazilnteractiveActions",
            ).getCopyBoletoCodeInteractiveAction({ msg: t, orderInfo: e }),
          ),
        r.length < a &&
          o("WAWebBrPaymentSettingsUtils").hasValidCard(e) &&
          r.push(h()),
        r
      );
    }
    function h() {
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
    function y(e, t, n) {
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
    function C(e, t, n, r) {
      return o("WAWebMsgGetters").getIsSentByMe(t.unsafe()) ||
        b(e, n, t.unsafe())
        ? null
        : o("WAWebGetQuickPayAction").getQuickPayAction(n.type, !r);
    }
    function b(e, t, n) {
      return (
        !v(e) &&
        o("WAWebOrderStatus").isPaymentRequest(e, t) &&
        o("WAWebPaymentDetailsGating").isPaymentDetailsEnabledForMsg(n)
      );
    }
    function v(e) {
      var t;
      return (
        (e.contact.isEnterprise ||
          ((t = e.contact) == null ? void 0 : t.isHosted) === !0) &&
        o("WAWebPaymentsGatingUtils").isBrazilToBrazilOrder(e)
      );
    }
    function S(e, t) {
      var n = o(
        "WAWebGetBrazilnteractiveActions",
      ).getCopyPixStaticCodeInteractiveAction(e, t);
      return o("WAWebPaymentDetailsGating").isPaymentDetailsEnabledForMsg(
        e.unsafe(),
      )
        ? o("WAWebPaymentDetailsBubbleActions").getPaymentDetailsBubbleActions(
            { interactivePayload: e.interactivePayload, msgKey: e.id },
            n,
          )
        : o("WAWebMsgGetters").getIsSentByMe(e.unsafe()) || n == null
          ? []
          : [n];
    }
    function R(e, t) {
      var n = o(
        "WAWebGetBrazilnteractiveActions",
      ).getPaymentInfoOrderDetailsInteractiveAction(t, e.id);
      return o("WAWebPaymentDetailsGating").isPaymentDetailsEnabledForMsg(
        e.unsafe(),
      )
        ? o("WAWebPaymentDetailsBubbleActions").getPaymentDetailsBubbleActions(
            { interactivePayload: e.interactivePayload, msgKey: e.id },
            n,
          )
        : [n];
    }
    l.default = c;
  },
  226,
);
