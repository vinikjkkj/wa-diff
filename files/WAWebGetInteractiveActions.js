__d(
  "WAWebGetInteractiveActions",
  [
    "fbt",
    "WALogger",
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
    "WAWebGetBrazilnteractiveActions",
    "WAWebGetInteractiveActionsFromButtons",
    "WAWebGetInteractiveCtaActions",
    "WAWebGetMessageWithLinkAction",
    "WAWebGetQuickPayAction",
    "WAWebGetShopStorefrontInteractiveAction",
    "WAWebInteractiveMessageType",
    "WAWebInteractiveMessagesNativeFlowName",
    "WAWebLimitSharingGatingUtils",
    "WAWebMsgCollection",
    "WAWebMsgGetters",
    "WAWebMsgType",
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
      u,
      c = ["interactivePayload", "interactiveType", "sender", "t", "type"],
      d,
      m = d || (d = o("react"));
    function p(e) {
      var t = e.canCompose,
        n = e.msgKey,
        a = e.orderPaymentStatus,
        i = a === void 0 ? null : a,
        l = e.uimContext,
        s = e.values,
        u = s.interactivePayload,
        d = s.interactiveType,
        m = s.sender,
        p = s.t,
        f = s.type,
        C = babelHelpers.objectWithoutPropertiesLoose(s, c),
        b = C.chat,
        R = C.isSentByMe,
        I = C.nativeFlowName;
      if (!u) return null;
      if (d == null) return [];
      var T = {
          interactivePayload: u,
          interactiveType: d,
          nativeFlowName: I,
          type: f,
        },
        D = babelHelpers.extends({}, T, { nativeFlowButtons: null }),
        x = [];
      switch (d) {
        case r("WAWebInteractiveMessageType").SHOPS_STOREFRONT: {
          x.push(r("WAWebGetShopStorefrontInteractiveAction")(u));
          break;
        }
        case r("WAWebInteractiveMessageType").NATIVE_FLOW:
          if (_(n, s, t)) {
            if (
              I === r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_INFO
            ) {
              var $ = o("WAWebOrderDetails").getOrderInfoFor(D);
              if (!$) return null;
              x.push.apply(x, k(n, s, $));
            } else if (
              I === r("WAWebInteractiveMessagesNativeFlowName").ORDER_DETAILS
            ) {
              var P = o("WAWebOrderDetails").getOrderInfoFor(D);
              if (!P) return null;
              var N = o("WAWebOrderStatus").findOrderStatus(b, P.referenceId),
                M = o("WAWebOrderExpansionAction").getOrderUpdateStatusAction({
                  chat: b,
                  msgKey: n,
                  orderInfo: P,
                  orderStatus: N,
                  uimContext: l,
                  values: {
                    interactivePayload: u,
                    interactiveType: d,
                    isSentByMe: R,
                    nativeFlowName: I,
                    type: f,
                  },
                });
              M && x.push(M);
              var w = N === o("WAWebOrderStatus").OrderStatus.Pending,
                A = i == null;
              if (L(b)) {
                var F = A ? y(P, n, b) : [v(n, s, l, !0)];
                F.length === 0 ? x.push(v(n, s, l, !w)) : x.push.apply(x, F);
              } else if (o("WAWebOrderStatus").isPaymentRequest(b, P))
                x.push.apply(x, E(n, s, P));
              else {
                var O = null;
                (o("WAWebPaymentsGatingUtils").isBrazilToBrazilOrder(b) &&
                  o("WAWebBrPaymentSettingsUtils").hasValidStaticPix(P) &&
                  (O = o(
                    "WAWebGetBrazilnteractiveActions",
                  ).getCopyPixStaticCodeInteractiveAction(n, P)),
                  x.push(O != null ? O : v(n, s, l, !w)));
              }
              var B = S(n, s, P, w);
              B && x.push(B);
            } else if (
              I ===
              r("WAWebInteractiveMessagesNativeFlowName").MESSAGE_WITH_LINK
            ) {
              var W = o(
                "WAWebGetMessageWithLinkAction",
              ).getOpenMessageWithLinkActionFor(T);
              W && x.push(W);
            } else if (
              I ===
              r("WAWebInteractiveMessagesNativeFlowName").OFFER_PAYMENT_ACCOUNT
            ) {
              var q = g(n, {
                interactivePayload: u,
                interactiveType: d,
                type: f,
              });
              q && x.push(q);
            }
            if (
              I != null &&
              o(
                "WAWebBizTemplateAndInteractiveMessagesUtils",
              ).supportedNativeFlowButtonNamesForInteractiveMsg.includes(I)
            ) {
              var U = o("WAWebGetInteractiveCtaActions").getNativeFlowCtasFor({
                interactivePayload: u,
                interactiveType: d,
                nativeFlowName: I,
                t: p,
                type: f,
              });
              U != null && x.push.apply(x, h(U, n, C));
            }
          }
          break;
        case r("WAWebInteractiveMessageType").CAROUSEL:
          break;
      }
      return x;
    }
    function _(e, t, n) {
      return typeof n != "boolean"
        ? !1
        : n ||
            t.nativeFlowName ===
              r("WAWebInteractiveMessagesNativeFlowName").CTA_URL
          ? !0
          : f(e, t);
    }
    function f(e, t) {
      var n = t.chat,
        a = t.nativeFlowName;
      return !e.fromMe ||
        a !== r("WAWebInteractiveMessagesNativeFlowName").BOOKING_CONFIRMATION
        ? !1
        : n != null &&
            o("WAWebBizAiAgentGating").isAiAgentAutoReplyEnabled() &&
            o("WAWebBizAiAgentStatusUtils").shouldShowAiAgentBlockBar(n) &&
            !n.isSuspendedOrTerminated() &&
            !o("WAWebLimitSharingGatingUtils").isChatAcp2Restricted(n) &&
            o("WAWebChatGroupUtils").canSendIgnoringAiAgentBlock(n);
    }
    function g(t, n) {
      if (t.fromMe || !o("WAWebBizFrontendGatingUtils").isPixOnWebEnabled())
        return null;
      var r = o("WAWebBrAddPixKeyMessageOffer").getAddPixKeyMessageOfferFor(n);
      return r == null
        ? null
        : o("WAWebBrAddPixKeyMessageOffer").isAddPixKeyMessageOfferSavedFor({
              interactivePayload: n.interactivePayload,
              type: n.type,
            })
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
                if (
                  o("WAWebBrAddPixKeyMessageGating").isAddPixKeyMessageEnabled()
                ) {
                  var n = o("WAWebMsgCollection").MsgCollection.get(t);
                  if (n == null) {
                    o("WALogger").WARN(
                      e ||
                        (e = babelHelpers.taggedTemplateLiteralLoose([
                          "[add-pix-key] offer click skipped, message left the collection",
                        ])),
                    );
                    return;
                  }
                  o(
                    "WAWebBrSavePartnerPixKeyFeature",
                  ).openAddPixKeyMessageScreen(
                    r,
                    o(
                      "WAWebBrSenderPixKeyAttribution",
                    ).resolveSenderPixKeyAttribution(n.senderObj),
                    o(
                      "WAWebBrAddPixKeyPartnerDirectory",
                    ).addPixKeyPartnerCatalogIdForSender([
                      o("WAWebMsgGetters").getSender(n),
                    ]),
                    function (e) {
                      o(
                        "WAWebBrAddPixKeySavedMarker",
                      ).markAddPixKeyMessageSaved(t, e);
                    },
                  );
                }
              },
              testid: "br_add_pix_key_message_action",
            };
    }
    function h(e, t, n) {
      var a;
      return (a = o(
        "WAWebBrOptionsToPayActions",
      ).getPaymentRequestOptionsToPayActions(e, t, n)) != null
        ? a
        : r("WAWebGetInteractiveActionsFromButtons")(e, t, n);
    }
    function y(e, t, n) {
      var r;
      return (r = o(
        "WAWebBrOptionsToPayActions",
      ).getOrderDetailsOptionsToPayActions(e, t, n)) != null
        ? r
        : C(e, t, n);
    }
    function C(e, t, n) {
      var r = [],
        a = 2;
      return (
        o("WAWebBrPaymentSettingsUtils").hasValidDynamicPix(e) &&
          r.push(
            o(
              "WAWebGetBrazilnteractiveActions",
            ).getCopyPixCodeInteractiveAction({ msgKey: t, orderInfo: e }),
          ),
        o("WAWebBrazilPaymentsGeoGating").isPaymentLinkEnabled(n) &&
          o("WAWebBrPaymentSettingsUtils").hasValidPaymentLink(e) &&
          r.push(
            o(
              "WAWebGetBrazilnteractiveActions",
            ).getOpenPaymentLinkInteractiveAction({ msgKey: t, orderInfo: e }),
          ),
        r.length < a &&
          o("WAWebBrazilPaymentsGeoGating").isBoletoEnabled(n) &&
          o("WAWebBrPaymentSettingsUtils").hasValidBoletoCode(e) &&
          r.push(
            o(
              "WAWebGetBrazilnteractiveActions",
            ).getCopyBoletoCodeInteractiveAction({ msgKey: t, orderInfo: e }),
          ),
        r.length < a &&
          o("WAWebBrPaymentSettingsUtils").hasValidCard(e) &&
          r.push(b()),
        r
      );
    }
    function b() {
      return {
        label: s._(/*BTDS*/ "Pay with card"),
        onClick: function () {
          r("WAWebShowMessageActionFallbackErrorAction")({
            title: s._(/*BTDS*/ "Charges can't be paid with cards on {=m1}", [
              s._implicitParam(
                "=m1",
                m.jsx(o("WAWebFbtAppName").WAWebAppShortName, {
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
    function v(e, t, n, a) {
      var i = t.isSentByMe,
        l = t.sender,
        c = function () {
          return i || a
            ? s._(/*BTDS*/ "View details")
            : o("WAWebPaymentsGatingUtils").isWidInPaymentsCountry(l) &&
                o("WAWebPaymentsGatingUtils").isWidInPaymentsCountry(
                  o("WAWebUserPrefsMeUser").getMaybeMePnUser(),
                )
              ? s._(/*BTDS*/ "Review and pay")
              : s._(/*BTDS*/ "View details");
        };
      return {
        label: c(),
        onClick: function () {
          if (
            i ||
            o(
              "WAWebOrdersExpansionCountries",
            ).getConsumerOrdersExpansionAllowedCountries()
          ) {
            var t,
              a =
                (t = o("WAWebMsgCollection").MsgCollection.get(e)) == null
                  ? void 0
                  : t.safe();
            if (
              a == null ||
              a.type !== o("WAWebMsgType").MSG_TYPE.INTERACTIVE
            ) {
              o("WALogger").WARN(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[interactive-actions] order details skipped, message left the collection",
                  ])),
              );
              return;
            }
            o("WAWebBizOrderDetailAction").openOrderDetailDrawer(
              a,
              n,
              r("WAWebBizEntryPoint").FROM_CHAT,
            );
          } else
            r("WAWebShowMessageActionFallbackErrorAction")({
              title: s._(/*BTDS*/ "Orders can't be viewed on {=m1}", [
                s._implicitParam(
                  "=m1",
                  m.jsx(o("WAWebFbtAppName").WAWebAppShortName, {
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
    function S(e, t, n, r) {
      return t.isSentByMe || R(e, t, n)
        ? null
        : o("WAWebGetQuickPayAction").getQuickPayAction(n.type, !r);
    }
    function R(e, t, n) {
      return (
        !L(t.chat) &&
        o("WAWebOrderStatus").isPaymentRequest(t.chat, n) &&
        I(e, t)
      );
    }
    function L(e) {
      var t;
      return (
        (e.contact.isEnterprise ||
          ((t = e.contact) == null ? void 0 : t.isHosted) === !0) &&
        o("WAWebPaymentsGatingUtils").isBrazilToBrazilOrder(e)
      );
    }
    function E(e, t, n) {
      var r = o(
        "WAWebGetBrazilnteractiveActions",
      ).getCopyPixStaticCodeInteractiveAction(e, n);
      return I(e, t)
        ? o("WAWebPaymentDetailsBubbleActions").getPaymentDetailsBubbleActions(
            { interactivePayload: t.interactivePayload, msgKey: e },
            r,
          )
        : t.isSentByMe || r == null
          ? []
          : [r];
    }
    function k(e, t, n) {
      var r = o(
        "WAWebGetBrazilnteractiveActions",
      ).getPaymentInfoOrderDetailsInteractiveAction(n, e);
      return I(e, t)
        ? o("WAWebPaymentDetailsBubbleActions").getPaymentDetailsBubbleActions(
            { interactivePayload: t.interactivePayload, msgKey: e },
            r,
          )
        : [r];
    }
    function I(e, t) {
      var n = t.interactivePayload,
        r = t.interactiveType,
        a = t.nativeFlowName,
        i = t.type;
      return o("WAWebPaymentDetailsGating").isPaymentDetailsEnabledFor({
        interactivePayload: n,
        interactiveType: r,
        msgKey: e,
        nativeFlowName: a,
        type: i,
      });
    }
    l.default = p;
  },
  226,
);
