__d(
  "WAWebGetInteractiveActionsFromButtons",
  [
    "fbt",
    "WALogger",
    "WAWebApiVerifiedBusinessName",
    "WAWebBizAiAgentGating",
    "WAWebBizAiHubDeeplinkScheme",
    "WAWebBizAiHubReplyButtonUtils",
    "WAWebBizAiKnowledgeReviewDrawerLoadable.react",
    "WAWebBizAiPaymentRequestWamLogger",
    "WAWebBizInteractiveMessageQuickReplyAction",
    "WAWebBizMessageOpenCallModal",
    "WAWebBizOpenBookingConfirmationDrawer.react",
    "WAWebBizOpenOrderStatusDrawer.react",
    "WAWebBizTemplateAndInteractiveMessagesUtils",
    "WAWebBrLastUsedPaymentMethodStoreLazy",
    "WAWebBrPaymentMethodKey",
    "WAWebBrPaymentMethodSurface",
    "WAWebBrPaymentRequest",
    "WAWebCarouselMsgUtils",
    "WAWebChatGetters",
    "WAWebCloudApiSignalLogger",
    "WAWebConfirmPopup.react",
    "WAWebContactGetters",
    "WAWebCopyTextWithToast",
    "WAWebCouponCodeHelper",
    "WAWebDrawerManager",
    "WAWebExternalLink.react",
    "WAWebExternalLinkPopup.react",
    "WAWebFbtCommon",
    "WAWebFrontendMsgGetters",
    "WAWebGetGalaxyFlowsActionFromButton",
    "WAWebInAppSignupConfirmation",
    "WAWebInteractiveMessagesNativeFlowName",
    "WAWebMAIBAPrimaryRedirectPopup.react",
    "WAWebMmSignalSharingGatingUtils",
    "WAWebMmSignalSharingLoggingEvents",
    "WAWebMmSignalSharingModelUtils",
    "WAWebMmSignalSharingShowDisclosureModal",
    "WAWebMmSignalSharingTos",
    "WAWebMmSignalSharingUIUtils",
    "WAWebModalManager",
    "WAWebMsgCollection",
    "WAWebMsgGetters",
    "WAWebMsgModel",
    "WAWebMsgType",
    "WAWebMuseCtaLinkOverride",
    "WAWebOpenBizAiHubDeeplink",
    "WAWebOrderStatus",
    "WAWebPaymentRequestWamLogger",
    "WAWebPremiumMessagesGatingUtils",
    "WAWebQbmMessageClickLogEvent",
    "WAWebQbmMessageLevelActionEvent",
    "WAWebRichOrderStatusLogger",
    "WAWebSendNativeFlowMenuOptionsResponse",
    "WAWebSendSignupResponseAction",
    "WAWebSendTextMsgChatAction",
    "WAWebSignupFlowLoggerLazy",
    "WAWebSmbPaidMessagesButtonLoggerWamEvent",
    "WAWebWamEnumCloudApiSignalCtaAction",
    "WAWebWamEnumCloudApiSignalTemplateType",
    "WAWebWamEnumDisclosureEventType",
    "WAWebWamEnumMessageActionEntryPoint",
    "WAWebWamEnumMessageLevelAction",
    "WAWebWamEnumPmButtonEventType",
    "WAWebWamEnumPmButtonType",
    "WAWebWamEnumQbmMessageClickButtonClickedType",
    "WDSIconIcCall.react",
    "WDSIconIcContentCopy.react",
    "WDSIconIcOpenInNew.react",
    "WDSIconIcReply.react",
    "asyncToGeneratorRuntime",
    "err",
    "getErrorSafe",
    "nullthrows",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c,
      d,
      m,
      p,
      _,
      f = _ || (_ = o("react"));
    function g(e, t, n, a) {
      a === void 0 &&
        (a = o("WAWebBrPaymentMethodSurface").BrPaymentMethodSurface
          .INLINE_CTA);
      var i = [];
      for (var l of e) {
        var s = void 0,
          u = o(
            "WAWebBizTemplateAndInteractiveMessagesUtils",
          ).getNativeFlowNameByButtonName(l.name);
        if (u != null) {
          switch (u) {
            case r("WAWebInteractiveMessagesNativeFlowName").CTA_URL:
              s = y(l, t, n);
              break;
            case r("WAWebInteractiveMessagesNativeFlowName").CTA_CALL:
              s = k(l, t);
              break;
            case r("WAWebInteractiveMessagesNativeFlowName").QUICK_REPLY:
              s = E(l, t, n);
              break;
            case r("WAWebInteractiveMessagesNativeFlowName").CTA_CATALOG:
              s = I(l, t);
              break;
            case r("WAWebInteractiveMessagesNativeFlowName").CATALOG_MESSAGE:
              s = I(l, t);
              break;
            case r("WAWebInteractiveMessagesNativeFlowName").CTA_COPY_CODE:
              s = T(l, t);
              break;
            case r("WAWebInteractiveMessagesNativeFlowName").CTA_APP:
              s = b(l, t);
              break;
            case r("WAWebInteractiveMessagesNativeFlowName").CTA_FLOW:
              s = o(
                "WAWebGetGalaxyFlowsActionFromButton",
              ).getCtaFlowInteractiveActionFor(l, t, {
                chat: n.chat,
                galaxyFlowDisabled: n.galaxyFlowDisabled,
                isFlowDisabledForSender: n.isSentByMe,
              });
              break;
            case r("WAWebInteractiveMessagesNativeFlowName").ORDER_STATUS:
              s = D(l, t);
              break;
            case r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_REMINDER:
              s = w(l);
              break;
            case r("WAWebInteractiveMessagesNativeFlowName")
              .BOOKING_CONFIRMATION:
              s = A(l, t);
              break;
            case r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_REQUEST:
              s = F(l, t, n, a);
              break;
            case r("WAWebInteractiveMessagesNativeFlowName").API_SIGNUP:
              s = L(l, t, n);
              break;
            case r("WAWebInteractiveMessagesNativeFlowName")
              .OFFER_PAYMENT_ACCOUNT:
            case r("WAWebInteractiveMessagesNativeFlowName").FORM_MESSAGE:
            case r("WAWebInteractiveMessagesNativeFlowName").ORDER_DETAILS:
            case r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_STATUS:
            case r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_METHOD:
            case r("WAWebInteractiveMessagesNativeFlowName").MESSAGE_WITH_LINK:
            case r("WAWebInteractiveMessagesNativeFlowName")
              .MESSAGE_WITH_LINK_STATUS:
            case r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_INFO:
            case r("WAWebInteractiveMessagesNativeFlowName").BR_PAYMENT_STATE:
            case r("WAWebInteractiveMessagesNativeFlowName").MIXED:
            case r("WAWebInteractiveMessagesNativeFlowName")
              .CALL_PERMISSION_REQUEST:
            case r("WAWebInteractiveMessagesNativeFlowName").INAPP_SIGNUP:
            case r("WAWebInteractiveMessagesNativeFlowName").MENU_OPTIONS:
            case r("WAWebInteractiveMessagesNativeFlowName").A2UI_REPLY_ACTION:
              break;
          }
          s != null && i.push(s);
        }
      }
      return i;
    }
    function h(t) {
      var n,
        r =
          (n = o("WAWebMsgCollection").MsgCollection.get(t)) == null
            ? void 0
            : n.safe();
      return r != null && r.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE
        ? r
        : (o("WALogger").WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[interactive-actions] button click skipped, message left the collection",
              ])),
          ),
          null);
    }
    function y(e, t, n) {
      var a = n.chat,
        i = e.data.url;
      if (i != null) {
        var l = i.startsWith(
            o("WAWebBizAiHubDeeplinkScheme").BIZ_AI_HUB_DEEPLINK_SCHEME,
          ),
          s =
            i.startsWith("whatsapp-smb://") &&
            o("WAWebContactGetters").getIsAiHub(a.contact),
          u = i.startsWith(
            o("WAWebBizAiHubDeeplinkScheme")
              .BIZ_AI_HUB_REVIEW_KNOWLEDGE_DEEPLINK,
          );
        return u && o("WAWebBizAiAgentGating").isAiAgentAutoSaveEnabled()
          ? {
              label: e.data.label,
              onClick: function () {
                o("WAWebDrawerManager").DrawerManager.openDrawerRight(
                  f.jsx(
                    o("WAWebBizAiKnowledgeReviewDrawerLoadable.react")
                      .WAWebBizAiKnowledgeReviewDrawerLoadable,
                    { url: i },
                  ),
                );
              },
              testid: "biz-ai-review-knowledge-cta",
            }
          : l || s
            ? {
                label: e.data.label,
                onClick: function () {
                  if (
                    !(
                      l &&
                      o("WAWebOpenBizAiHubDeeplink").openBizAiHubDeeplink(i)
                    )
                  ) {
                    if (s) {
                      o("WAWebModalManager").ModalManager.open(
                        f.jsx(r("WAWebMAIBAPrimaryRedirectPopup.react"), {}),
                      );
                      return;
                    }
                    var n = h(t);
                    n != null &&
                      v({
                        btn: e,
                        msg: n,
                        eventType: o("WAWebWamEnumDisclosureEventType")
                          .DISCLOSURE_EVENT_TYPE.CTA_URL_CLICK,
                        defaultUrl: i,
                        onLinkReady: function (r, o, a) {
                          S({
                            btn: e,
                            chat: r,
                            ctaLink: o,
                            hasShownDisclosure: a,
                            msg: n,
                          });
                        },
                      });
                  }
                },
                Icon: r("WDSIconIcOpenInNew.react"),
                testid: "cta-url-button",
              }
            : {
                label: e.data.label,
                onClick: function () {
                  var n = h(t);
                  n != null &&
                    (C(n),
                    v({
                      btn: e,
                      msg: n,
                      eventType: o("WAWebWamEnumDisclosureEventType")
                        .DISCLOSURE_EVENT_TYPE.CTA_URL_CLICK,
                      defaultUrl: e.data.url,
                      onLinkReady: function (r, o, a) {
                        S({
                          btn: e,
                          chat: r,
                          ctaLink: o,
                          hasShownDisclosure: a,
                          msg: n,
                        });
                      },
                    }));
                },
                Icon: r("WDSIconIcOpenInNew.react"),
                testid: "cta-url-button",
              };
      }
    }
    function C(e) {
      if (
        e.nativeFlowName ===
        r("WAWebInteractiveMessagesNativeFlowName").INAPP_SIGNUP
      ) {
        var t = o(
          "WAWebInAppSignupConfirmation",
        ).getInAppSignupConfirmationInfo(e);
        if (t != null) {
          var n = o("WAWebFrontendMsgGetters").getChat(e.unsafe());
          o("WAWebSignupFlowLoggerLazy").logWebsiteCtaClicked({
            signupId: t.signupId,
            businessWid: n.id,
            chatTimestamp: n.t,
          });
        }
      }
    }
    function b(e, t) {
      if (
        o("WAWebMmSignalSharingGatingUtils").isMmSignalSharingAppCtaEnabled()
      ) {
        var n;
        try {
          var a,
            i,
            l = JSON.parse((a = e.data.buttonParamsJson) != null ? a : "{}");
          n = (i = l.url) != null ? i : e.data.url;
        } catch (t) {
          (o("WALogger").WARN(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "getCtaAppInteractiveAction: buttonParamsJson parse failed",
              ])),
          ),
            (n = e.data.url));
        }
        if (n != null)
          return {
            label: e.data.label,
            onClick: function () {
              var r = h(t);
              r != null &&
                v({
                  btn: e,
                  msg: r,
                  eventType: o("WAWebWamEnumDisclosureEventType")
                    .DISCLOSURE_EVENT_TYPE.CTA_APP_CLICK,
                  defaultUrl: n,
                  skipUrlRewrite: !0,
                  onLinkReady: function (n, a, i) {
                    (o("WAWebExternalLink.react").openExternalLink(a),
                      x(e, r),
                      o(
                        "WAWebMmSignalSharingLoggingEvents",
                      ).logMmSignalSharingLinkClickEvent({
                        eventType: o("WAWebWamEnumDisclosureEventType")
                          .DISCLOSURE_EVENT_TYPE.CTA_APP_CLICK,
                        linkTypeIndex: e.index,
                        msg: r.unsafe(),
                        chat: n,
                        hasShownDisclosure: i,
                        mmCarouselCardIndex: P(r.unsafe()),
                      }));
                  },
                });
            },
            Icon: r("WDSIconIcOpenInNew.react"),
            testid: "cta-app-button",
          };
      }
    }
    function v(e) {
      var t = e.btn,
        n = e.defaultUrl,
        r = e.eventType,
        a = e.msg,
        i = e.onLinkReady,
        l = e.skipUrlRewrite,
        s = l === void 0 ? !1 : l,
        u = o("WAWebFrontendMsgGetters").getChat(a.unsafe());
      o("WAWebMmSignalSharingShowDisclosureModal")
        .showDisclosureModalForMm(u, a.unsafe(), r)
        .then(function (e) {
          var l = function () {
              return s
                ? n
                : o(
                    "WAWebMmSignalSharingModelUtils",
                  ).getCTALinkForMmSignalSharing({
                    chat: u,
                    msg: a.unsafe(),
                    btnIndex: t.index,
                    isMmSignalSharingDisclosureTosAccepted: o(
                      "WAWebMmSignalSharingTos",
                    ).isMmSignalSharingDisclosureTosAccepted(),
                    defaultUrl: n,
                  });
            },
            c = l();
          c != null &&
            (e
              ? o(
                  "WAWebMmSignalSharingUIUtils",
                ).openMmSignalSharingDisclosureModal({
                  eventType: r,
                  chat: u,
                  onOk: function () {
                    var e = l();
                    e != null && i(u, e, !0);
                  },
                  onCancel: function (t) {
                    return o(
                      "WAWebMmSignalSharingLoggingEvents",
                    ).logMmSignalSharingDisclosureCancelEvent({
                      eventType: r,
                      chat: u,
                      msg: a.unsafe(),
                      isExplicitCancel: t,
                    });
                  },
                  onDismissed: function () {
                    var e = l();
                    e != null && i(u, e, !1);
                  },
                })
              : i(u, c, !1));
        });
    }
    function S(e) {
      var t = e.btn,
        n = e.chat,
        r = e.ctaLink,
        a = e.hasShownDisclosure,
        i = a === void 0 ? !1 : a,
        l = e.msg;
      if (
        o(
          "WAWebPremiumMessagesGatingUtils",
        ).isPremiumMessagesUrlCtaDialogEnabled() &&
        !i
      )
        R({ btn: t, chat: n, ctaLink: r, hasShownDisclosure: i, msg: l });
      else {
        if (r == null) return;
        (o("WAWebExternalLink.react").openExternalLink(r), x(t, l));
        var s = l.unsafe();
        (o("WAWebQbmMessageClickLogEvent").logQbmMessageClick({
          msg: s,
          chat: n,
          buttonClickedType: o("WAWebWamEnumQbmMessageClickButtonClickedType")
            .QBM_MESSAGE_CLICK_BUTTON_CLICKED_TYPE.URL,
          nativeFlowName: t.name,
        }),
          o(
            "WAWebMmSignalSharingLoggingEvents",
          ).logMmSignalSharingLinkClickEvent({
            eventType: o("WAWebWamEnumDisclosureEventType")
              .DISCLOSURE_EVENT_TYPE.CTA_URL_CLICK,
            linkTypeIndex: t.index,
            msg: s,
            chat: n,
            hasShownDisclosure: i,
            mmCarouselCardIndex: P(s),
          }),
          o("WAWebQbmMessageLevelActionEvent").logQbmMessageLevelAction({
            msg: s,
            chat: n,
            messageLevelAction: o("WAWebWamEnumMessageLevelAction")
              .MESSAGE_LEVEL_ACTION.BUTTON_CLICK,
            messageActionEntryPoint: o("WAWebWamEnumMessageActionEntryPoint")
              .MESSAGE_ACTION_ENTRY_POINT.CHATLIST,
          }));
      }
    }
    function R(e) {
      var t,
        n,
        a = e.btn,
        i = e.chat,
        l = e.ctaLink,
        s = e.hasShownDisclosure,
        u = e.msg;
      o("WAWebModalManager").ModalManager.open(
        f.jsx(r("WAWebExternalLinkPopup.react"), {
          url: o("WAWebMuseCtaLinkOverride").overrideCtaUrlIfNeeded(l),
          merchantUrl:
            (t = (n = a.data.merchantUrl) != null ? n : a.data.url) != null
              ? t
              : "",
          verifyTrackableLink: o("WAWebMsgGetters").getIsMarketingMessage(u),
          onOkClick: function () {
            x(a, u);
            var e = u.unsafe();
            (o("WAWebQbmMessageClickLogEvent").logQbmMessageClick({
              msg: e,
              chat: i,
              buttonClickedType: o(
                "WAWebWamEnumQbmMessageClickButtonClickedType",
              ).QBM_MESSAGE_CLICK_BUTTON_CLICKED_TYPE.URL,
              nativeFlowName: a.name,
            }),
              o(
                "WAWebMmSignalSharingLoggingEvents",
              ).logMmSignalSharingLinkClickEvent({
                eventType: o("WAWebWamEnumDisclosureEventType")
                  .DISCLOSURE_EVENT_TYPE.CTA_URL_CLICK,
                linkTypeIndex: a.index,
                msg: e,
                chat: i,
                hasShownDisclosure: s,
                mmCarouselCardIndex: P(e),
              }),
              o("WAWebQbmMessageLevelActionEvent").logQbmMessageLevelAction({
                msg: e,
                chat: i,
                messageLevelAction: o("WAWebWamEnumMessageLevelAction")
                  .MESSAGE_LEVEL_ACTION.BUTTON_CLICK,
                messageActionEntryPoint: o(
                  "WAWebWamEnumMessageActionEntryPoint",
                ).MESSAGE_ACTION_ENTRY_POINT.CHATLIST,
              }));
          },
        }),
        { transition: "modal-flow" },
      );
    }
    function L(e, t, n) {
      var a = n.chat,
        i = n.signupCtaTapped,
        l = e.data.signupId;
      return l == null
        ? null
        : {
            label: e.data.label,
            Icon: r("WDSIconIcReply.react"),
            disabled: i === !0,
            onClick: function () {
              var e = h(t);
              e != null &&
                o("WAWebSendSignupResponseAction").sendSignupResponse(a, e, l);
            },
            testid: "signup-prompt-cta",
          };
    }
    function E(e, t, n) {
      var a = n.chat,
        i = n.isOutgoingBizBot,
        l = n.nativeFlowName,
        u = e.data.disabled === !0 || i,
        d = o(
          "WAWebSendNativeFlowMenuOptionsResponse",
        ).shouldUseNativeFlowMenuOptionsResponse(a.id, l),
        m =
          e.data.selectionId != null &&
          o("WAWebBizAiHubReplyButtonUtils").isPrimaryOnlyBizAiHubReplyButton(
            e.data.selectionId,
          );
      return {
        label: e.data.label,
        Icon: d ? void 0 : r("WDSIconIcReply.react"),
        disabled: u,
        onClick: function () {
          var n = h(t);
          if (n != null) {
            var i = n.unsafe();
            if (i.id.fromMe && o("WAWebChatGetters").getIsBroadcast(a)) {
              o("WAWebModalManager").ModalManager.openAlert(
                f.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
                  okText: r("WAWebFbtCommon")("OK"),
                  onOK: function () {
                    return o("WAWebModalManager").ModalManager.closeAlert();
                  },
                  testid: "broadcast_quick_reply_info_alert",
                  children: s._(
                    /*BTDS*/ "When your receiver taps this button, they'll send you a reply message with the same text.",
                  ),
                }),
              );
              return;
            }
            if (m && o("WAWebContactGetters").getIsAiHub(a.contact)) {
              o("WAWebModalManager").ModalManager.open(
                f.jsx(r("WAWebMAIBAPrimaryRedirectPopup.react"), {}),
              );
              return;
            }
            if (n.isCarouselCard) N(e, i);
            else if (d) {
              var l, u;
              o(
                "WAWebSendNativeFlowMenuOptionsResponse",
              ).sendNativeFlowMenuOptionsResponse(a, i, {
                label: (l = e.data) == null ? void 0 : l.label,
                selectionId: (u = e.data) == null ? void 0 : u.selectionId,
              });
            } else {
              var p, _;
              (o("WALogger").LOG(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "getQuickReplyInteractiveAction called",
                  ])),
              ),
                o("WAWebSendTextMsgChatAction").sendTextMsgToChat(
                  a,
                  (p = e.data) == null ? void 0 : p.label,
                  {
                    quotedMsg: i,
                    selectedIndex: e.index,
                    selectedId: (_ = e.data) == null ? void 0 : _.selectionId,
                  },
                ));
            }
            (x(e, n),
              o("WAWebQbmMessageClickLogEvent").logQbmMessageClick({
                msg: i,
                chat: a,
                buttonClickedType: o(
                  "WAWebWamEnumQbmMessageClickButtonClickedType",
                ).QBM_MESSAGE_CLICK_BUTTON_CLICKED_TYPE.QUICK_REPLY,
                nativeFlowName: e.name,
              }),
              o("WAWebQbmMessageLevelActionEvent").logQbmMessageLevelAction({
                msg: i,
                chat: a,
                messageLevelAction: o("WAWebWamEnumMessageLevelAction")
                  .MESSAGE_LEVEL_ACTION.BUTTON_CLICK,
                messageActionEntryPoint: o(
                  "WAWebWamEnumMessageActionEntryPoint",
                ).MESSAGE_ACTION_ENTRY_POINT.CHATLIST,
              }),
              o(
                "WAWebBizInteractiveMessageQuickReplyAction",
              ).markInteractiveButtonClicked(i, e.index));
          }
        },
      };
    }
    function k(e, t) {
      var n;
      return {
        label: (n = e.data) == null ? void 0 : n.label,
        onClick: function () {
          r("WAWebBizMessageOpenCallModal")();
          var n = h(t);
          if (n != null) {
            x(e, n);
            var a = n.unsafe(),
              i = o("WAWebFrontendMsgGetters").getChat(a);
            (o("WAWebQbmMessageClickLogEvent").logQbmMessageClick({
              msg: a,
              chat: i,
              buttonClickedType: o(
                "WAWebWamEnumQbmMessageClickButtonClickedType",
              ).QBM_MESSAGE_CLICK_BUTTON_CLICKED_TYPE.PHONE_NUMBER,
              nativeFlowName: e.name,
            }),
              o("WAWebQbmMessageLevelActionEvent").logQbmMessageLevelAction({
                msg: a,
                chat: i,
                messageLevelAction: o("WAWebWamEnumMessageLevelAction")
                  .MESSAGE_LEVEL_ACTION.BUTTON_CLICK,
                messageActionEntryPoint: o(
                  "WAWebWamEnumMessageActionEntryPoint",
                ).MESSAGE_ACTION_ENTRY_POINT.CHATLIST,
              }));
          }
        },
        Icon: r("WDSIconIcCall.react"),
      };
    }
    function I(e, t) {
      return {
        label: e.data.label,
        onClick: function () {
          if (e.data.catalogUrl != null) {
            o("WAWebExternalLink.react").openExternalLink(e.data.catalogUrl);
            var n = h(t);
            if (n != null) {
              var r = n.unsafe(),
                a = o("WAWebFrontendMsgGetters").getChat(r);
              (o("WAWebQbmMessageClickLogEvent").logQbmMessageClick({
                msg: r,
                chat: a,
                buttonClickedType: o(
                  "WAWebWamEnumQbmMessageClickButtonClickedType",
                ).QBM_MESSAGE_CLICK_BUTTON_CLICKED_TYPE.CATALOG,
                nativeFlowName: e.name,
              }),
                o("WAWebQbmMessageLevelActionEvent").logQbmMessageLevelAction({
                  msg: r,
                  chat: a,
                  messageLevelAction: o("WAWebWamEnumMessageLevelAction")
                    .MESSAGE_LEVEL_ACTION.BUTTON_CLICK,
                  messageActionEntryPoint: o(
                    "WAWebWamEnumMessageActionEntryPoint",
                  ).MESSAGE_ACTION_ENTRY_POINT.CHATLIST,
                }));
            }
          }
        },
      };
    }
    function T(e, t) {
      return {
        label: e.data.label,
        onClick: function () {
          o("WAWebCouponCodeHelper").copyCouponCodeGivenCode(e.data.copyCode);
          var n = h(t);
          if (n != null) {
            var r = n.unsafe(),
              a = o("WAWebFrontendMsgGetters").getChat(r);
            (o("WAWebQbmMessageClickLogEvent").logQbmMessageClick({
              msg: r,
              chat: a,
              buttonClickedType: o(
                "WAWebWamEnumQbmMessageClickButtonClickedType",
              ).QBM_MESSAGE_CLICK_BUTTON_CLICKED_TYPE.COPY_CODE,
              nativeFlowName: e.name,
            }),
              o("WAWebQbmMessageLevelActionEvent").logQbmMessageLevelAction({
                msg: r,
                chat: a,
                messageLevelAction: o("WAWebWamEnumMessageLevelAction")
                  .MESSAGE_LEVEL_ACTION.COPY,
                messageActionEntryPoint: o(
                  "WAWebWamEnumMessageActionEntryPoint",
                ).MESSAGE_ACTION_ENTRY_POINT.CHATLIST,
              }));
          }
        },
        Icon: r("WDSIconIcContentCopy.react"),
      };
    }
    function D(e, t) {
      var n = e.data,
        a = n.label,
        i = n.orderStatusButton;
      if (i != null) {
        var l = i.order.tracking;
        return l == null || !o("WAWebOrderStatus").shouldShowTrackingInfo(i)
          ? {
              label: a,
              onClick: function () {
                var e = h(t);
                if (e != null) {
                  var n = e.unsafe(),
                    r = o("WAWebFrontendMsgGetters").getChat(n);
                  (o(
                    "WAWebRichOrderStatusLogger",
                  ).logRichOrderStatusInteraction(
                    n,
                    o("WAWebRichOrderStatusLogger").RichOrderStatusActionType
                      .MESSAGE_CTA_CLICK,
                  ),
                    o(
                      "WAWebBizOpenOrderStatusDrawer.react",
                    ).openOrderStatusDrawer(i, r, e));
                }
              },
            }
          : {
              label: a,
              Icon: function (t) {
                return f.jsx(
                  r("WDSIconIcOpenInNew.react"),
                  babelHelpers.extends({}, t, { height: 18 }),
                );
              },
              onClick: function () {
                var e = h(t);
                (e != null &&
                  o("WAWebRichOrderStatusLogger").logRichOrderStatusInteraction(
                    e.unsafe(),
                    o("WAWebRichOrderStatusLogger").RichOrderStatusActionType
                      .MESSAGE_CTA_CLICK,
                  ),
                  o("WAWebExternalLink.react").openExternalLink(
                    l.tracking_url,
                  ));
              },
            };
      }
    }
    function x(e, t) {
      var n;
      o("WAWebMsgGetters").getIsMarketingMessage(t) &&
        new (o(
          "WAWebSmbPaidMessagesButtonLoggerWamEvent",
        ).SmbPaidMessagesButtonLoggerWamEvent)({
          businessPhoneNumber: Number(t.from.user),
          pmButtonCount: (n = t.buttons) == null ? void 0 : n.length,
          pmButtonEventType: o("WAWebWamEnumPmButtonEventType")
            .PM_BUTTON_EVENT_TYPE.CLICK,
          pmButtonIndex: e.index,
          pmButtonType: $(e),
          pmServerCampaignId: t.pmCampaignId,
        }).commit();
    }
    function $(e) {
      switch (e.name) {
        case "cta_url":
          return o("WAWebWamEnumPmButtonType").PM_BUTTON_TYPE.CTA_URL;
        case "cta_call":
          return o("WAWebWamEnumPmButtonType").PM_BUTTON_TYPE.CTA_CALL;
        case "quick_reply":
          return o("WAWebWamEnumPmButtonType").PM_BUTTON_TYPE.QUICK_REPLY;
        case "cta_catalog":
          return o("WAWebWamEnumPmButtonType").PM_BUTTON_TYPE.CTA_CATALOG;
        case "cta_app":
          return o("WAWebWamEnumPmButtonType").PM_BUTTON_TYPE.CTA_URL;
        case "cta_copy":
          throw r("err")(
            "CTA_COPY is not supported for Paid Messaging logging yet",
          );
        case "galaxy_message":
          throw r("err")(
            "GALAXY_MESSAGE is not supported for WA Web logging yet",
          );
        case "order_status":
          throw r("err")(
            "ORDER_STATUS is not supported for WA Web logging yet",
          );
        case "payment_reminder":
          throw r("err")(
            "PAYMENT_REMINDER is not supported for WA Web logging yet",
          );
        case "booking_confirmation":
          throw r("err")(
            "BOOKING_CONFIRMATION is not supported for WA Web logging yet",
          );
        case "payment_request":
          throw r("err")(
            "PAYMENT_REQUEST is not supported for WA Web logging yet",
          );
        case "api_signup":
          throw r("err")("API_SIGNUP is not supported for WA Web logging yet");
      }
    }
    function P(e) {
      if (e.isCarouselCard) {
        var t = o("WAWebCarouselMsgUtils").getParentMsgFromCarouselCard(e);
        if (t != null) {
          var n = t.carouselCards;
          if (n != null) {
            var r = n.indexOf(e);
            return r === -1 ? void 0 : r;
          }
        }
      }
    }
    function N(e, t) {
      return M.apply(this, arguments);
    }
    function M() {
      return (
        (M = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n,
            a,
            i = r("nullthrows")(
              o("WAWebCarouselMsgUtils").getParentMsgFromCarouselCard(t),
            ),
            l = o("WAWebFrontendMsgGetters").getChat(i),
            s = r("nullthrows")(
              i.carouselCards,
              "Parent of carousel card does not have carouselCards field.",
            ).slice(),
            u = s.indexOf(t);
          if (u === -1) {
            o("WALogger").WARN(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "sendTextMsgToChatForReplyToCarouselCard: card not found",
                ])),
            );
            return;
          }
          var c = new (o("WAWebMsgModel").Msg)(t);
          return (
            (c.id = i.id),
            o("WAWebSendTextMsgChatAction").sendTextMsgToChat(
              l,
              (n = e.data) == null ? void 0 : n.label,
              {
                quotedMsg: c,
                selectedIndex: e.index,
                selectedId: (a = e.data) == null ? void 0 : a.selectionId,
                selectedCarouselCardIndex: u,
              },
            )
          );
        })),
        M.apply(this, arguments)
      );
    }
    function w(e) {
      var t = e.data,
        n = t.label,
        a = t.paymentReminderInfo;
      return a == null || a.url == null
        ? null
        : {
            label: n,
            Icon: function (t) {
              return f.jsx(
                r("WDSIconIcOpenInNew.react"),
                babelHelpers.extends({}, t, { height: 18 }),
              );
            },
            onClick: function () {
              o("WAWebExternalLink.react").openExternalLink(a.url);
            },
          };
    }
    function A(e, t) {
      var n = e.data,
        r = n.bookingInfo,
        a = n.label;
      return r == null
        ? null
        : {
            label: a,
            onClick: function () {
              var e = h(t);
              e != null &&
                o(
                  "WAWebBizOpenBookingConfirmationDrawer.react",
                ).openBookingConfirmationDrawer(r, e);
            },
            testid: "booking-confirmation-view-details-button",
          };
    }
    function F(e, t, n, a) {
      var i = n.isFromTemplate;
      if (!o("WAWebBrPaymentRequest").isPaymentRequestFeatureEnabled(i === !0))
        return null;
      var l = e.data.paymentRequestInfo;
      if (l == null) return null;
      switch (l.paymentType) {
        case o("WAWebBrPaymentRequest").PaymentRequestCtaType.BOLETO: {
          var u = l.digitableLine;
          return u == null
            ? null
            : {
                label: s._(/*BTDS*/ "Copy boleto code"),
                onClick: function () {
                  var n = h(t);
                  n != null &&
                    o("WAWebCopyTextWithToast").copyTextWithToast({
                      failureMsg: s._(/*BTDS*/ "Couldn't copy boleto code"),
                      onSuccess: function () {
                        (O(
                          n,
                          o("WAWebBrPaymentRequest").PaymentRequestCtaType
                            .BOLETO,
                          a,
                        ),
                          o(
                            "WAWebBrLastUsedPaymentMethodStoreLazy",
                          ).recordLastUsedBrPaymentMethodLazy(
                            n,
                            o("WAWebBrPaymentMethodKey").BrPaymentMethodKey
                              .BOLETO,
                          ),
                          q(
                            e,
                            n,
                            o("WAWebWamEnumCloudApiSignalCtaAction")
                              .CLOUD_API_SIGNAL_CTA_ACTION.COPY_BOLETO_CODE,
                          ));
                      },
                      successMsg: s._(/*BTDS*/ "Boleto code copied"),
                      text: u,
                    });
                },
                Icon: r("WDSIconIcContentCopy.react"),
              };
        }
        case o("WAWebBrPaymentRequest").PaymentRequestCtaType
          .PIX_DYNAMIC_CODE: {
          var c = l.code,
            d = l.pixFlowType;
          return c == null
            ? null
            : {
                label: s._(/*BTDS*/ "Copy Pix code"),
                onClick: function () {
                  var n = h(t);
                  n != null &&
                    o("WAWebCopyTextWithToast").copyTextWithToast({
                      failureMsg: s._(/*BTDS*/ "Couldn't copy Pix Code"),
                      onSuccess: function () {
                        (O(
                          n,
                          o("WAWebBrPaymentRequest").PaymentRequestCtaType
                            .PIX_DYNAMIC_CODE,
                          a,
                        ),
                          o(
                            "WAWebBrLastUsedPaymentMethodStoreLazy",
                          ).recordLastUsedBrPaymentMethodLazy(
                            n,
                            o(
                              "WAWebBrPaymentMethodKey",
                            ).getPixMethodKeyForServerOrdering(d),
                          ),
                          q(
                            e,
                            n,
                            o("WAWebWamEnumCloudApiSignalCtaAction")
                              .CLOUD_API_SIGNAL_CTA_ACTION.COPY_PIX_CODE,
                          ));
                      },
                      successMsg: s._(/*BTDS*/ "Pix Code copied"),
                      text: c,
                    });
                },
                Icon: r("WDSIconIcContentCopy.react"),
              };
        }
        case o("WAWebBrPaymentRequest").PaymentRequestCtaType.PAYMENT_LINK: {
          var m = l.psp,
            p = l.uri;
          return p == null
            ? null
            : {
                label:
                  m === "mercadopago"
                    ? s._(/*BTDS*/ "Open in Mercado Pago")
                    : s._(/*BTDS*/ "Open payment link"),
                onClick: function () {
                  o("WAWebExternalLink.react").openExternalLink(p);
                  var n = h(t);
                  n != null &&
                    (O(
                      n,
                      o("WAWebBrPaymentRequest").PaymentRequestCtaType
                        .PAYMENT_LINK,
                      a,
                    ),
                    o(
                      "WAWebBrLastUsedPaymentMethodStoreLazy",
                    ).recordLastUsedBrPaymentMethodLazy(
                      n,
                      o("WAWebBrPaymentMethodKey").BrPaymentMethodKey
                        .PAYMENT_LINK,
                    ),
                    q(
                      e,
                      n,
                      o("WAWebWamEnumCloudApiSignalCtaAction")
                        .CLOUD_API_SIGNAL_CTA_ACTION.OPEN_PAYMENT_LINK,
                    ));
                },
                Icon: r("WDSIconIcOpenInNew.react"),
              };
        }
        case o("WAWebBrPaymentRequest").PaymentRequestCtaType.OFFSITE_CARD_PAY:
          return null;
      }
    }
    function O(e, t, n) {
      B(e)
        .then(function (r) {
          r
            ? t ===
                o("WAWebBrPaymentRequest").PaymentRequestCtaType
                  .PIX_DYNAMIC_CODE &&
              o(
                "WAWebBizAiPaymentRequestWamLogger",
              ).logBizAiPaymentRequestPixCopyWAMEvent(e)
            : o(
                "WAWebPaymentRequestWamLogger",
              ).logPaymentRequestInteractionWAMEvent(e, t, n);
        })
        .catch(function (e) {
          o("WALogger")
            .WARN(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "[WAM:PAYMENT_REQUEST] tap log err",
                ])),
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs("payment-request-tap-log-failed");
        });
    }
    function B(e) {
      return W.apply(this, arguments);
    }
    function W() {
      return (
        (W = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (
            !o(
              "WAWebBizAiPaymentRequestWamLogger",
            ).hasBizAiPixPaymentRequestMarkers(e)
          )
            return !1;
          var t = o("WAWebMsgGetters").getSender(e.unsafe());
          if (t == null) return !1;
          try {
            var n = yield o(
              "WAWebApiVerifiedBusinessName",
            ).getVerifiedBusinessNameRecordLidAware(t);
            return o(
              "WAWebBizAiPaymentRequestWamLogger",
            ).isBizAiPixPaymentRequestMsg(e, n);
          } catch (e) {
            return (
              o("WALogger")
                .WARN(
                  p ||
                    (p = babelHelpers.taggedTemplateLiteralLoose([
                      "[WAM:BIZ_AI_PAYMENT_REQUEST] sender lookup err",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("biz-ai-payment-request-sender-lookup-failed"),
              !1
            );
          }
        })),
        W.apply(this, arguments)
      );
    }
    function q(e, t, n) {
      var r = t.unsafe();
      o("WAWebCloudApiSignalLogger").logCloudApiPaymentTemplateClick({
        carouselCardIndex: P(r),
        chat: o("WAWebFrontendMsgGetters").getChat(r),
        ctaAction: n,
        ctaButtonIndex: e.index,
        msg: r,
        templateType: o("WAWebWamEnumCloudApiSignalTemplateType")
          .CLOUD_API_SIGNAL_TEMPLATE_TYPE.PAYMENT_REQUEST,
      });
    }
    l.default = g;
  },
  226,
);
