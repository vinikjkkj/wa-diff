__d(
  "WAWebGetInteractiveActions",
  [
    "fbt",
    "WALogger",
    "WAWebAddPromotionToPaymentsActionLoader",
    "WAWebBizAiAgentGating",
    "WAWebBizAiAgentStatusUtils",
    "WAWebBizEntryPoint",
    "WAWebBizFrontendGatingUtils",
    "WAWebBizOrderDetailAction",
    "WAWebBizTemplateAndInteractiveMessagesUtils",
    "WAWebBrAddPixKeyDeepLinkGating",
    "WAWebBrAddPixKeyMessageGating",
    "WAWebBrAddPixKeyMessageOffer",
    "WAWebBrAddPixKeyOfferDialogsLoadable",
    "WAWebBrAddPixKeyOfferLoggerLoadable",
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
    "WAWebGetMultiStepFormAction",
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
      c = [
        "interactivePayload",
        "interactiveType",
        "isCarouselCard",
        "sender",
        "t",
        "type",
      ],
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
        m = s.isCarouselCard,
        p = s.sender,
        f = s.t,
        C = s.type,
        b = babelHelpers.objectWithoutPropertiesLoose(s, c),
        R = b.chat,
        I = b.isSentByMe,
        T = b.nativeFlowName;
      if (!u) return null;
      if (d == null) return [];
      var D = {
          interactivePayload: u,
          interactiveType: d,
          nativeFlowName: T,
          type: C,
        },
        x = babelHelpers.extends({}, D, { nativeFlowButtons: null }),
        $ = [];
      switch (d) {
        case r("WAWebInteractiveMessageType").SHOPS_STOREFRONT: {
          $.push(r("WAWebGetShopStorefrontInteractiveAction")(u));
          break;
        }
        case r("WAWebInteractiveMessageType").NATIVE_FLOW:
          if (_(n, s, t)) {
            if (
              T === r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_INFO
            ) {
              var P = o("WAWebOrderDetails").getOrderInfoFor(x);
              if (!P) return null;
              $.push.apply($, k(n, s, P));
            } else if (
              T === r("WAWebInteractiveMessagesNativeFlowName").ORDER_DETAILS
            ) {
              var N = o("WAWebOrderDetails").getOrderInfoFor(x);
              if (!N) return null;
              var M = o("WAWebOrderStatus").findOrderStatus(R, N.referenceId),
                w = o("WAWebOrderExpansionAction").getOrderUpdateStatusAction({
                  chat: R,
                  msgKey: n,
                  orderInfo: N,
                  orderStatus: M,
                  uimContext: l,
                  values: {
                    interactivePayload: u,
                    interactiveType: d,
                    isSentByMe: I,
                    nativeFlowName: T,
                    type: C,
                  },
                });
              w && $.push(w);
              var A = M === o("WAWebOrderStatus").OrderStatus.Pending,
                F = i == null;
              if (L(R)) {
                var O = F ? y(N, n, R) : [v(n, s, l, !0)];
                O.length === 0 ? $.push(v(n, s, l, !A)) : $.push.apply($, O);
              } else if (o("WAWebOrderStatus").isPaymentRequest(R, N))
                $.push.apply($, E(n, s, N));
              else {
                var B = null;
                (o("WAWebPaymentsGatingUtils").isBrazilToBrazilOrder(R) &&
                  o("WAWebBrPaymentSettingsUtils").hasValidStaticPix(N) &&
                  (B = o(
                    "WAWebGetBrazilnteractiveActions",
                  ).getCopyPixStaticCodeInteractiveAction(n, N)),
                  $.push(B != null ? B : v(n, s, l, !A)));
              }
              var W = S(n, s, N, A);
              W && $.push(W);
            } else if (
              T ===
              r("WAWebInteractiveMessagesNativeFlowName").MESSAGE_WITH_LINK
            ) {
              var q = o(
                "WAWebGetMessageWithLinkAction",
              ).getOpenMessageWithLinkActionFor(D);
              q && $.push(q);
            } else if (
              T ===
              r("WAWebInteractiveMessagesNativeFlowName").OFFER_PAYMENT_ACCOUNT
            ) {
              var U = g(n, {
                interactivePayload: u,
                interactiveType: d,
                type: C,
              });
              U && $.push(U);
            } else if (
              T === r("WAWebInteractiveMessagesNativeFlowName").FORM_MESSAGE
            ) {
              var V = o(
                "WAWebGetMultiStepFormAction",
              ).getOpenMultiStepFormAction(n, s, l);
              V && $.push(V);
            }
            if (
              T != null &&
              o(
                "WAWebBizTemplateAndInteractiveMessagesUtils",
              ).supportedNativeFlowButtonNamesForInteractiveMsg.includes(T)
            ) {
              var H = o("WAWebGetInteractiveCtaActions").getNativeFlowCtasFor({
                interactivePayload: u,
                interactiveType: d,
                nativeFlowName: T,
                t: f,
                type: C,
              });
              H != null && $.push.apply($, h(H, n, b));
            }
            var G = o(
              "WAWebAddPromotionToPaymentsActionLoader",
            ).getAddPromotionToPaymentsActionIfLoaded(
              n,
              {
                caption: null,
                fromMe: n.fromMe,
                interactivePayload: u,
                interactiveType: d,
                isCarouselCard: m,
                isFromTemplate: b.isFromTemplate,
                nativeFlowName: T,
                type: C,
              },
              f,
              $.length,
            );
            G && $.push(G);
          }
          break;
        case r("WAWebInteractiveMessageType").CAROUSEL:
          break;
      }
      return $;
    }
    function _(e, t, n) {
      return typeof n != "boolean"
        ? !1
        : n ||
            t.nativeFlowName ===
              r("WAWebInteractiveMessagesNativeFlowName").CTA_URL ||
            o("WAWebGetMultiStepFormAction").isOutgoingBizBotForm(t)
          ? !0
          : f(e, t);
    }
    function f(e, t) {
      var n = t.chat,
        a = t.nativeFlowName;
      return !e.fromMe ||
        (a !==
          r("WAWebInteractiveMessagesNativeFlowName").BOOKING_CONFIRMATION &&
          a !== r("WAWebInteractiveMessagesNativeFlowName").CTA_FLOW)
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
              label: s._(/*BTDS*/ ""),
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
              label: s._(/*BTDS*/ ""),
              onClick: function () {
                var n = o("WAWebMsgCollection").MsgCollection.get(t);
                if (
                  !o(
                    "WAWebBrAddPixKeyMessageGating",
                  ).isAddPixKeyMessageEnabled()
                ) {
                  o(
                    "WAWebBrAddPixKeyOfferLoggerLoadable",
                  ).logAddPixKeyMessageDiscarded(
                    "killswitch_off",
                    "tap",
                    n == null
                      ? null
                      : o(
                          "WAWebBrAddPixKeyPartnerDirectory",
                        ).addPixKeyPartnerCatalogIdForSender([
                          o("WAWebMsgGetters").getSender(n),
                        ]),
                  );
                  return;
                }
                if (n == null) {
                  o("WALogger").WARN(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[add-pix-key] offer click skipped, message left the collection",
                      ])),
                  );
                  return;
                }
                var a = o(
                  "WAWebBrAddPixKeyPartnerDirectory",
                ).addPixKeyPartnerCatalogIdForSender([
                  o("WAWebMsgGetters").getSender(n),
                ]);
                if (
                  !o("WAWebBizFrontendGatingUtils").isPixOnWebEnabled() ||
                  !o("WAWebBrAddPixKeyDeepLinkGating").isSelfInBrazil()
                ) {
                  (o(
                    "WAWebBrAddPixKeyOfferLoggerLoadable",
                  ).logAddPixKeyMessageDiscarded(
                    "payments_unavailable",
                    "tap",
                    a,
                  ),
                    o(
                      "WAWebBrAddPixKeyOfferDialogsLoadable",
                    ).openAddPixKeyBlockedDialogLazily());
                  return;
                }
                o("WAWebBrSavePartnerPixKeyFeature").openAddPixKeyMessageScreen(
                  r,
                  o(
                    "WAWebBrSenderPixKeyAttribution",
                  ).resolveSenderPixKeyAttribution(n.senderObj),
                  a,
                  function (e) {
                    o("WAWebBrAddPixKeySavedMarker").markAddPixKeyMessageSaved(
                      t,
                      e,
                    );
                  },
                );
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
        label: s._(/*BTDS*/ ""),
        onClick: function () {
          r("WAWebShowMessageActionFallbackErrorAction")({
            title: s._(/*BTDS*/ "", [
              s._implicitParam(
                "=m1",
                m.jsx(o("WAWebFbtAppName").WAWebAppShortName, {
                  children: s._(/*BTDS*/ ""),
                }),
              ),
            ]),
            body: s._(/*BTDS*/ ""),
          });
        },
      };
    }
    function v(e, t, n, a) {
      var i = t.isSentByMe,
        l = t.sender,
        c = function () {
          return i || a
            ? s._(/*BTDS*/ "")
            : o("WAWebPaymentsGatingUtils").isWidInPaymentsCountry(l) &&
                o("WAWebPaymentsGatingUtils").isWidInPaymentsCountry(
                  o("WAWebUserPrefsMeUser").getMaybeMePnUser(),
                )
              ? s._(/*BTDS*/ "")
              : s._(/*BTDS*/ "");
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
              title: s._(/*BTDS*/ "", [
                s._implicitParam(
                  "=m1",
                  m.jsx(o("WAWebFbtAppName").WAWebAppShortName, {
                    children: s._(/*BTDS*/ ""),
                  }),
                ),
              ]),
              body: s._(/*BTDS*/ ""),
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
