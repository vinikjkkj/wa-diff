__d(
  "WAWebGetInteractiveActionsFromButtons",
  [
    "fbt",
    "WALogger",
    "WANullthrows",
    "WAWebBizAiAgentGating",
    "WAWebBizAiKnowledgeReviewDrawerLoadable.react",
    "WAWebBizInteractiveMessageQuickReplyAction",
    "WAWebBizMessageOpenCallModal",
    "WAWebBizOpenBookingConfirmationDrawer.react",
    "WAWebBizOpenOrderStatusDrawer.react",
    "WAWebBizTemplateAndInteractiveMessagesUtils",
    "WAWebBrPaymentRequest",
    "WAWebCarouselMsgUtils",
    "WAWebCopyRefreshedIcon.react",
    "WAWebCopyTextWithToast",
    "WAWebCouponCodeHelper",
    "WAWebDrawerManager",
    "WAWebExternalLink.react",
    "WAWebExternalLinkPopup.react",
    "WAWebFrontendMsgGetters",
    "WAWebGetGalaxyFlowsActionFromButton",
    "WAWebInteractiveMessagesNativeFlowName",
    "WAWebLaunchIcon.react",
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
    "WAWebOpenBizAiHubDeeplink",
    "WAWebOrderStatus",
    "WAWebPaymentRequestWamLogger",
    "WAWebPhoneIcon.react",
    "WAWebPremiumMessagesGatingUtils",
    "WAWebQbmMessageClickLogEvent",
    "WAWebQbmMessageLevelActionEvent",
    "WAWebReplyChatIcon.react",
    "WAWebRichOrderStatusLogger",
    "WAWebSendTextMsgChatAction",
    "WAWebSmbPaidMessagesButtonLoggerWamEvent",
    "WAWebWamEnumDisclosureEventType",
    "WAWebWamEnumMessageActionEntryPoint",
    "WAWebWamEnumMessageLevelAction",
    "WAWebWamEnumPmButtonEventType",
    "WAWebWamEnumPmButtonType",
    "WAWebWamEnumQbmMessageClickButtonClickedType",
    "WDSIconIcOpenInNew.react",
    "err",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c,
      d,
      m = d || (d = o("react"));
    function p(e, t) {
      var n = [];
      for (var a of e) {
        var i = void 0,
          l = o(
            "WAWebBizTemplateAndInteractiveMessagesUtils",
          ).getNativeFlowNameByButtonName(a.name);
        if (l != null) {
          switch (l) {
            case r("WAWebInteractiveMessagesNativeFlowName").CTA_URL:
              i = _(a, t);
              break;
            case r("WAWebInteractiveMessagesNativeFlowName").CTA_CALL:
              i = b(a, t);
              break;
            case r("WAWebInteractiveMessagesNativeFlowName").QUICK_REPLY:
              i = C(a, t);
              break;
            case r("WAWebInteractiveMessagesNativeFlowName").CTA_CATALOG:
              i = v(a, t);
              break;
            case r("WAWebInteractiveMessagesNativeFlowName").CATALOG_MESSAGE:
              i = v(a, t);
              break;
            case r("WAWebInteractiveMessagesNativeFlowName").CTA_COPY_CODE:
              i = S(a, t);
              break;
            case r("WAWebInteractiveMessagesNativeFlowName").CTA_APP:
              i = f(a, t);
              break;
            case r("WAWebInteractiveMessagesNativeFlowName").CTA_FLOW:
              i = o(
                "WAWebGetGalaxyFlowsActionFromButton",
              ).getCtaFlowInteractiveAction(a, t);
              break;
            case r("WAWebInteractiveMessagesNativeFlowName").ORDER_STATUS:
              i = R(a, t);
              break;
            case r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_REMINDER:
              i = T(a);
              break;
            case r("WAWebInteractiveMessagesNativeFlowName")
              .BOOKING_CONFIRMATION:
              i = D(a, t);
              break;
            case r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_REQUEST:
              i = x(a, t);
              break;
            case r("WAWebInteractiveMessagesNativeFlowName").FORM_MESSAGE:
            case r("WAWebInteractiveMessagesNativeFlowName").ORDER_DETAILS:
            case r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_STATUS:
            case r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_METHOD:
            case r("WAWebInteractiveMessagesNativeFlowName").MESSAGE_WITH_LINK:
            case r("WAWebInteractiveMessagesNativeFlowName")
              .MESSAGE_WITH_LINK_STATUS:
            case r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_INFO:
            case r("WAWebInteractiveMessagesNativeFlowName").MIXED:
            case r("WAWebInteractiveMessagesNativeFlowName")
              .CALL_PERMISSION_REQUEST:
            case r("WAWebInteractiveMessagesNativeFlowName").API_SIGNUP:
            case r("WAWebInteractiveMessagesNativeFlowName").INAPP_SIGNUP:
              break;
          }
          i != null && n.push(i);
        }
      }
      return n;
    }
    function _(e, t) {
      if (e.data.url != null) {
        var n = e.data.url.startsWith("whatsapp-smb://biz-ai-hub"),
          a =
            e.data.url != null &&
            e.data.url.startsWith("whatsapp-smb://biz-ai-hub/review-knowledge");
        return a && o("WAWebBizAiAgentGating").isAiAgentAutoSaveEnabled()
          ? {
              label: e.data.label,
              onClick: function () {
                o("WAWebDrawerManager").DrawerManager.openDrawerRight(
                  m.jsx(
                    o("WAWebBizAiKnowledgeReviewDrawerLoadable.react")
                      .WAWebBizAiKnowledgeReviewDrawerLoadable,
                    {},
                  ),
                );
              },
              testid: "biz-ai-review-knowledge-cta",
            }
          : n
            ? {
                label: e.data.label,
                onClick: function () {
                  if (
                    !(
                      e.data.url != null &&
                      o("WAWebOpenBizAiHubDeeplink").openBizAiHubDeeplink(
                        e.data.url,
                      )
                    )
                  ) {
                    if (
                      o("WAWebBizAiAgentGating").isAiHubTapCtaShowAlertEnabled()
                    ) {
                      o("WAWebModalManager").ModalManager.open(
                        m.jsx(r("WAWebMAIBAPrimaryRedirectPopup.react"), {}),
                      );
                      return;
                    }
                    g({
                      btn: e,
                      msg: t,
                      eventType: o("WAWebWamEnumDisclosureEventType")
                        .DISCLOSURE_EVENT_TYPE.CTA_URL_CLICK,
                      defaultUrl: e.data.url,
                      onLinkReady: function (r, o, a) {
                        h(r, t, e, o, a);
                      },
                    });
                  }
                },
                Icon: o("WAWebLaunchIcon.react").LaunchIcon,
                testid: "cta-url-button",
              }
            : {
                label: e.data.label,
                onClick: function () {
                  g({
                    btn: e,
                    msg: t,
                    eventType: o("WAWebWamEnumDisclosureEventType")
                      .DISCLOSURE_EVENT_TYPE.CTA_URL_CLICK,
                    defaultUrl: e.data.url,
                    onLinkReady: function (r, o, a) {
                      h(r, t, e, o, a);
                    },
                  });
                },
                Icon: o("WAWebLaunchIcon.react").LaunchIcon,
                testid: "cta-url-button",
              };
      }
    }
    function f(t, n) {
      if (
        o("WAWebMmSignalSharingGatingUtils").isMmSignalSharingAppCtaEnabled()
      ) {
        var r;
        try {
          var a,
            i,
            l = JSON.parse((a = t.data.buttonParamsJson) != null ? a : "{}");
          r = (i = l.url) != null ? i : t.data.url;
        } catch (n) {
          (o("WALogger").WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "getCtaAppInteractiveAction: buttonParamsJson parse failed",
              ])),
          ),
            (r = t.data.url));
        }
        if (r != null)
          return {
            label: t.data.label,
            onClick: function () {
              g({
                btn: t,
                msg: n,
                eventType: o("WAWebWamEnumDisclosureEventType")
                  .DISCLOSURE_EVENT_TYPE.CTA_APP_CLICK,
                defaultUrl: r,
                skipUrlRewrite: !0,
                onLinkReady: function (r, a, i) {
                  (o("WAWebExternalLink.react").openExternalLink(a),
                    L(t, n),
                    o(
                      "WAWebMmSignalSharingLoggingEvents",
                    ).logMmSignalSharingLinkClickEvent({
                      eventType: o("WAWebWamEnumDisclosureEventType")
                        .DISCLOSURE_EVENT_TYPE.CTA_APP_CLICK,
                      linkTypeIndex: t.index,
                      msg: n.unsafe(),
                      chat: r,
                      hasShownDisclosure: i,
                      mmCarouselCardIndex: k(n.unsafe()),
                    }));
                },
              });
            },
            Icon: o("WAWebLaunchIcon.react").LaunchIcon,
            testid: "cta-app-button",
          };
      }
    }
    function g(e) {
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
    function h(e, t, n, r, a) {
      if (
        (a === void 0 && (a = !1),
        o(
          "WAWebPremiumMessagesGatingUtils",
        ).isPremiumMessagesUrlCtaDialogEnabled() && !a)
      )
        y({ btn: n, chat: e, ctaLink: r, hasShownDisclosure: a, msg: t });
      else {
        if (r == null) return;
        (o("WAWebExternalLink.react").openExternalLink(r), L(n, t));
        var i = t.unsafe();
        (o("WAWebQbmMessageClickLogEvent").logQbmMessageClick({
          msg: i,
          chat: e,
          buttonClickedType: o("WAWebWamEnumQbmMessageClickButtonClickedType")
            .QBM_MESSAGE_CLICK_BUTTON_CLICKED_TYPE.URL,
          nativeFlowName: n.name,
        }),
          o(
            "WAWebMmSignalSharingLoggingEvents",
          ).logMmSignalSharingLinkClickEvent({
            eventType: o("WAWebWamEnumDisclosureEventType")
              .DISCLOSURE_EVENT_TYPE.CTA_URL_CLICK,
            linkTypeIndex: n.index,
            msg: i,
            chat: e,
            hasShownDisclosure: a,
            mmCarouselCardIndex: k(i),
          }),
          o("WAWebQbmMessageLevelActionEvent").logQbmMessageLevelAction({
            msg: i,
            chat: e,
            messageLevelAction: o("WAWebWamEnumMessageLevelAction")
              .MESSAGE_LEVEL_ACTION.BUTTON_CLICK,
            messageActionEntryPoint: o("WAWebWamEnumMessageActionEntryPoint")
              .MESSAGE_ACTION_ENTRY_POINT.CHATLIST,
          }));
      }
    }
    function y(e) {
      var t,
        n,
        a = e.btn,
        i = e.chat,
        l = e.ctaLink,
        s = e.hasShownDisclosure,
        u = e.msg;
      o("WAWebModalManager").ModalManager.open(
        m.jsx(r("WAWebExternalLinkPopup.react"), {
          url: l,
          merchantUrl:
            (t = (n = a.data.merchantUrl) != null ? n : a.data.url) != null
              ? t
              : "",
          verifyTrackableLink: o("WAWebMsgGetters").getIsMarketingMessage(u),
          onOkClick: function () {
            L(a, u);
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
                mmCarouselCardIndex: k(e),
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
    function C(e, t) {
      if (t.id.fromMe && o("WAWebMsgGetters").getBizBotType(t) != null)
        return null;
      var n = o("WAWebFrontendMsgGetters").getChat(t.unsafe()),
        r = t.unsafe();
      return {
        label: e.data.label,
        Icon: o("WAWebReplyChatIcon.react").ReplyChatIcon,
        disabled: e.data.disabled,
        onClick: function () {
          if (t.isCarouselCard) I(e, r);
          else {
            var a, i;
            (o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "getQuickReplyInteractiveAction called",
                ])),
            ),
              o("WAWebSendTextMsgChatAction").sendTextMsgToChat(
                n,
                (a = e.data) == null ? void 0 : a.label,
                {
                  quotedMsg: r,
                  selectedIndex: e.index,
                  selectedId: (i = e.data) == null ? void 0 : i.selectionId,
                },
              ));
          }
          (L(e, t),
            o("WAWebQbmMessageClickLogEvent").logQbmMessageClick({
              msg: r,
              chat: n,
              buttonClickedType: o(
                "WAWebWamEnumQbmMessageClickButtonClickedType",
              ).QBM_MESSAGE_CLICK_BUTTON_CLICKED_TYPE.QUICK_REPLY,
              nativeFlowName: e.name,
            }),
            o("WAWebQbmMessageLevelActionEvent").logQbmMessageLevelAction({
              msg: r,
              chat: n,
              messageLevelAction: o("WAWebWamEnumMessageLevelAction")
                .MESSAGE_LEVEL_ACTION.BUTTON_CLICK,
              messageActionEntryPoint: o("WAWebWamEnumMessageActionEntryPoint")
                .MESSAGE_ACTION_ENTRY_POINT.CHATLIST,
            }));
          var l = o("WAWebMsgCollection").MsgCollection.get(t.id);
          l != null &&
            o(
              "WAWebBizInteractiveMessageQuickReplyAction",
            ).markInteractiveButtonClicked(l, e.index);
        },
      };
    }
    function b(e, t) {
      var n;
      return {
        label: (n = e.data) == null ? void 0 : n.label,
        onClick: function () {
          (r("WAWebBizMessageOpenCallModal")(), L(e, t));
          var n = t.unsafe(),
            a = o("WAWebFrontendMsgGetters").getChat(n);
          (o("WAWebQbmMessageClickLogEvent").logQbmMessageClick({
            msg: n,
            chat: a,
            buttonClickedType: o("WAWebWamEnumQbmMessageClickButtonClickedType")
              .QBM_MESSAGE_CLICK_BUTTON_CLICKED_TYPE.PHONE_NUMBER,
            nativeFlowName: e.name,
          }),
            o("WAWebQbmMessageLevelActionEvent").logQbmMessageLevelAction({
              msg: n,
              chat: a,
              messageLevelAction: o("WAWebWamEnumMessageLevelAction")
                .MESSAGE_LEVEL_ACTION.BUTTON_CLICK,
              messageActionEntryPoint: o("WAWebWamEnumMessageActionEntryPoint")
                .MESSAGE_ACTION_ENTRY_POINT.CHATLIST,
            }));
        },
        Icon: o("WAWebPhoneIcon.react").PhoneIcon,
      };
    }
    function v(e, t) {
      return {
        label: e.data.label,
        onClick: function () {
          if (e.data.catalogUrl != null) {
            o("WAWebExternalLink.react").openExternalLink(e.data.catalogUrl);
            var n = t.unsafe(),
              r = o("WAWebFrontendMsgGetters").getChat(n);
            (o("WAWebQbmMessageClickLogEvent").logQbmMessageClick({
              msg: n,
              chat: r,
              buttonClickedType: o(
                "WAWebWamEnumQbmMessageClickButtonClickedType",
              ).QBM_MESSAGE_CLICK_BUTTON_CLICKED_TYPE.CATALOG,
              nativeFlowName: e.name,
            }),
              o("WAWebQbmMessageLevelActionEvent").logQbmMessageLevelAction({
                msg: n,
                chat: r,
                messageLevelAction: o("WAWebWamEnumMessageLevelAction")
                  .MESSAGE_LEVEL_ACTION.BUTTON_CLICK,
                messageActionEntryPoint: o(
                  "WAWebWamEnumMessageActionEntryPoint",
                ).MESSAGE_ACTION_ENTRY_POINT.CHATLIST,
              }));
          }
        },
      };
    }
    function S(e, t) {
      return {
        label: e.data.label,
        onClick: function () {
          o("WAWebCouponCodeHelper").copyCouponCodeGivenCode(e.data.copyCode);
          var n = t.unsafe(),
            r = o("WAWebFrontendMsgGetters").getChat(n);
          (o("WAWebQbmMessageClickLogEvent").logQbmMessageClick({
            msg: n,
            chat: r,
            buttonClickedType: o("WAWebWamEnumQbmMessageClickButtonClickedType")
              .QBM_MESSAGE_CLICK_BUTTON_CLICKED_TYPE.COPY_CODE,
            nativeFlowName: e.name,
          }),
            o("WAWebQbmMessageLevelActionEvent").logQbmMessageLevelAction({
              msg: n,
              chat: r,
              messageLevelAction: o("WAWebWamEnumMessageLevelAction")
                .MESSAGE_LEVEL_ACTION.COPY,
              messageActionEntryPoint: o("WAWebWamEnumMessageActionEntryPoint")
                .MESSAGE_ACTION_ENTRY_POINT.CHATLIST,
            }));
        },
        Icon: o("WAWebCopyRefreshedIcon.react").CopyRefreshedIcon,
      };
    }
    function R(e, t) {
      var n = e.data,
        a = n.label,
        i = n.orderStatusButton;
      if (i != null) {
        var l = i.order.tracking;
        return l == null || !o("WAWebOrderStatus").shouldShowTrackingInfo(i)
          ? {
              label: a,
              onClick: function () {
                var e = t.unsafe(),
                  n = o("WAWebFrontendMsgGetters").getChat(e);
                (o("WAWebRichOrderStatusLogger").logRichOrderStatusInteraction(
                  e,
                  o("WAWebRichOrderStatusLogger").RichOrderStatusActionType
                    .MESSAGE_CTA_CLICK,
                ),
                  o(
                    "WAWebBizOpenOrderStatusDrawer.react",
                  ).openOrderStatusDrawer(i, n, t));
              },
            }
          : {
              label: a,
              Icon: function (t) {
                return m.jsx(
                  r("WDSIconIcOpenInNew.react"),
                  babelHelpers.extends({}, t, { height: 18 }),
                );
              },
              onClick: function () {
                (o("WAWebRichOrderStatusLogger").logRichOrderStatusInteraction(
                  t.unsafe(),
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
    function L(e, t) {
      var n;
      o(
        "WAWebPremiumMessagesGatingUtils",
      ).isPremiumMessagesClickLoggingEnabled() &&
        o("WAWebMsgGetters").getIsMarketingMessage(t) &&
        new (o(
          "WAWebSmbPaidMessagesButtonLoggerWamEvent",
        ).SmbPaidMessagesButtonLoggerWamEvent)({
          businessPhoneNumber: Number(t.from.user),
          pmButtonCount: (n = t.buttons) == null ? void 0 : n.length,
          pmButtonEventType: o("WAWebWamEnumPmButtonEventType")
            .PM_BUTTON_EVENT_TYPE.CLICK,
          pmButtonIndex: e.index,
          pmButtonType: E(e),
          pmServerCampaignId: t.pmCampaignId,
        }).commit();
    }
    function E(e) {
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
      }
    }
    function k(e) {
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
    async function I(e, t) {
      var n,
        a,
        i = r("WANullthrows")(
          o("WAWebCarouselMsgUtils").getParentMsgFromCarouselCard(t),
        ),
        l = o("WAWebFrontendMsgGetters").getChat(i),
        s = r("WANullthrows")(
          i.carouselCards,
          "Parent of carousel card does not have carouselCards field.",
        ).slice(),
        u = s.indexOf(t);
      if (u === -1) {
        o("WALogger").WARN(
          c ||
            (c = babelHelpers.taggedTemplateLiteralLoose([
              "sendTextMsgToChatForReplyToCarouselCard: card not found",
            ])),
        );
        return;
      }
      var d = new (o("WAWebMsgModel").Msg)(t);
      return (
        (d.id = i.id),
        o("WAWebSendTextMsgChatAction").sendTextMsgToChat(
          l,
          (n = e.data) == null ? void 0 : n.label,
          {
            quotedMsg: d,
            selectedIndex: e.index,
            selectedId: (a = e.data) == null ? void 0 : a.selectionId,
            selectedCarouselCardIndex: u,
          },
        )
      );
    }
    function T(e) {
      var t = e.data,
        n = t.label,
        a = t.paymentReminderInfo;
      return a == null || a.url == null
        ? null
        : {
            label: n,
            Icon: function (t) {
              return m.jsx(
                r("WDSIconIcOpenInNew.react"),
                babelHelpers.extends({}, t, { height: 18 }),
              );
            },
            onClick: function () {
              o("WAWebExternalLink.react").openExternalLink(a.url);
            },
          };
    }
    function D(e, t) {
      var n = e.data,
        r = n.bookingInfo,
        a = n.label;
      return r == null
        ? null
        : {
            label: a,
            onClick: function () {
              o(
                "WAWebBizOpenBookingConfirmationDrawer.react",
              ).openBookingConfirmationDrawer(r, t);
            },
            testid: "booking-confirmation-view-details-button",
          };
    }
    function x(e, t) {
      if (
        !o("WAWebBrPaymentRequest").isPaymentRequestFeatureEnabled(
          t.isFromTemplate === !0,
        )
      )
        return null;
      var n = e.data.paymentRequestInfo;
      if (n == null) return null;
      switch (n.paymentType) {
        case o("WAWebBrPaymentRequest").PaymentRequestCtaType.BOLETO: {
          var r = n.digitableLine;
          return r == null
            ? null
            : {
                label: s._(/*BTDS*/ "Copy boleto code"),
                onClick: function () {
                  o("WAWebCopyTextWithToast").copyTextWithToast({
                    failureMsg: s._(/*BTDS*/ "Couldn't copy boleto code"),
                    onSuccess: function () {
                      o(
                        "WAWebPaymentRequestWamLogger",
                      ).logPaymentRequestInteractionWAMEvent(
                        t,
                        o("WAWebBrPaymentRequest").PaymentRequestCtaType.BOLETO,
                      );
                    },
                    successMsg: s._(/*BTDS*/ "Boleto code copied"),
                    text: r,
                  });
                },
                Icon: o("WAWebCopyRefreshedIcon.react").CopyRefreshedIcon,
              };
        }
        case o("WAWebBrPaymentRequest").PaymentRequestCtaType
          .PIX_DYNAMIC_CODE: {
          var a = n.code;
          return a == null
            ? null
            : {
                label: s._(/*BTDS*/ "Copy Pix code"),
                onClick: function () {
                  o("WAWebCopyTextWithToast").copyTextWithToast({
                    failureMsg: s._(/*BTDS*/ "Couldn't copy Pix Code"),
                    onSuccess: function () {
                      o(
                        "WAWebPaymentRequestWamLogger",
                      ).logPaymentRequestInteractionWAMEvent(
                        t,
                        o("WAWebBrPaymentRequest").PaymentRequestCtaType
                          .PIX_DYNAMIC_CODE,
                      );
                    },
                    successMsg: s._(/*BTDS*/ "Pix Code copied"),
                    text: a,
                  });
                },
                Icon: o("WAWebCopyRefreshedIcon.react").CopyRefreshedIcon,
              };
        }
        case o("WAWebBrPaymentRequest").PaymentRequestCtaType.PAYMENT_LINK: {
          var i = n.uri;
          return i == null
            ? null
            : {
                label: s._(/*BTDS*/ "Open payment link"),
                onClick: function () {
                  (o("WAWebExternalLink.react").openExternalLink(i),
                    o(
                      "WAWebPaymentRequestWamLogger",
                    ).logPaymentRequestInteractionWAMEvent(
                      t,
                      o("WAWebBrPaymentRequest").PaymentRequestCtaType
                        .PAYMENT_LINK,
                    ));
                },
                Icon: o("WAWebLaunchIcon.react").LaunchIcon,
              };
        }
      }
    }
    l.default = p;
  },
  226,
);
