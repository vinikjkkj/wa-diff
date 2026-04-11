__d(
  "WAWebGetInteractiveActionsFromButtons",
  [
    "fbt",
    "WALogger",
    "WANullthrows",
    "WAWebBizAiAgentGating",
    "WAWebBizAiKnowledgeReivewDrawerLoadable.react",
    "WAWebBizGatingUtils",
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
    "WAWebMmSignalSharingLoggingEvents",
    "WAWebMmSignalSharingModelUtils",
    "WAWebMmSignalSharingShowDisclosureModal",
    "WAWebMmSignalSharingUIUtils",
    "WAWebModalManager",
    "WAWebMsgCollection",
    "WAWebMsgGetters",
    "WAWebMsgModel",
    "WAWebOrderStatus",
    "WAWebPaymentRequestWamLogger",
    "WAWebPhoneIcon.react",
    "WAWebQbmMessageClickLogEvent",
    "WAWebReplyChatIcon.react",
    "WAWebRichOrderStatusLogger",
    "WAWebSendTextMsgChatAction",
    "WAWebSmbPaidMessagesButtonLoggerWamEvent",
    "WAWebWamEnumDisclosureEventType",
    "WAWebWamEnumPmButtonEventType",
    "WAWebWamEnumPmButtonType",
    "WAWebWamEnumQbmMessageClickButtonClickedType",
    "WDSIconIcOpenInNew.react",
    "asyncToGeneratorRuntime",
    "err",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c,
      d = c || (c = o("react"));
    function m(e, t) {
      var n = [];
      for (var a of e) {
        var i = void 0,
          l = o(
            "WAWebBizTemplateAndInteractiveMessagesUtils",
          ).getNativeFlowNameByButtonName(a.name);
        if (l != null) {
          switch (l) {
            case r("WAWebInteractiveMessagesNativeFlowName").CTA_URL:
              i = p(a, t);
              break;
            case r("WAWebInteractiveMessagesNativeFlowName").CTA_CALL:
              i = h(a, t);
              break;
            case r("WAWebInteractiveMessagesNativeFlowName").QUICK_REPLY:
              i = g(a, t);
              break;
            case r("WAWebInteractiveMessagesNativeFlowName").CTA_CATALOG:
              i = y(a, t);
              break;
            case r("WAWebInteractiveMessagesNativeFlowName").CATALOG_MESSAGE:
              i = y(a, t);
              break;
            case r("WAWebInteractiveMessagesNativeFlowName").CTA_COPY_CODE:
              i = C(a, t);
              break;
            case r("WAWebInteractiveMessagesNativeFlowName").CTA_FLOW:
              i = o(
                "WAWebGetGalaxyFlowsActionFromButton",
              ).getCtaFlowInteractiveAction(a, t);
              break;
            case r("WAWebInteractiveMessagesNativeFlowName").ORDER_STATUS:
              i = b(a, t);
              break;
            case r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_REMINDER:
              i = E(a);
              break;
            case r("WAWebInteractiveMessagesNativeFlowName")
              .BOOKING_CONFIRMATION:
              i = k(a, t);
              break;
            case r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_REQUEST:
              i = I(a, t);
              break;
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
    function p(e, t) {
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
                  d.jsx(
                    o("WAWebBizAiKnowledgeReivewDrawerLoadable.react")
                      .WAWebBizAiKnowledgeReivewDrawerLoadable,
                    {},
                  ),
                );
              },
            }
          : n && o("WAWebBizAiAgentGating").isAiHubTapCtaShowAlertEnabled()
            ? {
                label: e.data.label,
                onClick: function () {
                  o("WAWebModalManager").ModalManager.open(
                    d.jsx(r("WAWebMAIBAPrimaryRedirectPopup.react"), {}),
                  );
                },
              }
            : {
                label: e.data.label,
                onClick: function () {
                  var n = o("WAWebFrontendMsgGetters").getChat(t.unsafe());
                  o("WAWebMmSignalSharingShowDisclosureModal")
                    .showDisclosureModalForMm(
                      n,
                      t.unsafe(),
                      o("WAWebWamEnumDisclosureEventType").DISCLOSURE_EVENT_TYPE
                        .CTA_URL_CLICK,
                    )
                    .then(function (r) {
                      var a = o(
                        "WAWebMmSignalSharingModelUtils",
                      ).getCTALinkForMmSignalSharing({
                        chat: n,
                        msg: t.unsafe(),
                        btnIndex: e.index,
                        isMmSignalSharingDisclosureTosAccepted: !0,
                        defaultUrl: e.data.url,
                      });
                      a != null &&
                        (r
                          ? o(
                              "WAWebMmSignalSharingUIUtils",
                            ).openMmSignalSharingDisclosureModal({
                              eventType: o("WAWebWamEnumDisclosureEventType")
                                .DISCLOSURE_EVENT_TYPE.CTA_URL_CLICK,
                              chat: n,
                              onOk: function () {
                                var r = o(
                                  "WAWebMmSignalSharingModelUtils",
                                ).getCTALinkForMmSignalSharing({
                                  chat: n,
                                  msg: t.unsafe(),
                                  btnIndex: e.index,
                                  isMmSignalSharingDisclosureTosAccepted: !0,
                                  defaultUrl: e.data.url,
                                });
                                r != null && _(n, t, e, r, !0);
                              },
                              onCancel: function (r) {
                                return o(
                                  "WAWebMmSignalSharingLoggingEvents",
                                ).logMmSignalSharingDisclosureCancelEvent({
                                  eventType: o(
                                    "WAWebWamEnumDisclosureEventType",
                                  ).DISCLOSURE_EVENT_TYPE.CTA_URL_CLICK,
                                  chat: n,
                                  msg: t.unsafe(),
                                  isExplicitCancel: r,
                                });
                              },
                              onDismissed: function () {
                                var r = o(
                                  "WAWebMmSignalSharingModelUtils",
                                ).getCTALinkForMmSignalSharing({
                                  chat: n,
                                  msg: t.unsafe(),
                                  btnIndex: e.index,
                                  isMmSignalSharingDisclosureTosAccepted: !0,
                                  defaultUrl: e.data.url,
                                });
                                r != null && _(n, t, e, r);
                              },
                            })
                          : _(n, t, e, a));
                    });
                },
                Icon: o("WAWebLaunchIcon.react").LaunchIcon,
              };
      }
    }
    function _(e, t, n, r, a) {
      if (
        (a === void 0 && (a = !1),
        o("WAWebBizGatingUtils").isPremiumMessagesUrlCtaDialogEnabled() && !a)
      )
        f(e, t, n, r, a);
      else {
        if (r == null) return;
        (o("WAWebExternalLink.react").openExternalLink(r),
          v(n, t),
          o("WAWebQbmMessageClickLogEvent").logQbmMessageClick({
            msg: t.unsafe(),
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
            msg: t.unsafe(),
            chat: e,
            hasShownDisclosure: a,
          }));
      }
    }
    function f(e, t, n, a, i) {
      var l;
      o("WAWebModalManager").ModalManager.open(
        d.jsx(r("WAWebExternalLinkPopup.react"), {
          url: a,
          merchantUrl: (l = n.data.merchantUrl) != null ? l : n.data.url,
          verifyTrackableLink: o("WAWebMsgGetters").getIsMarketingMessage(t),
          onOkClick: function () {
            (v(n, t),
              o("WAWebQbmMessageClickLogEvent").logQbmMessageClick({
                msg: t.unsafe(),
                chat: e,
                buttonClickedType: o(
                  "WAWebWamEnumQbmMessageClickButtonClickedType",
                ).QBM_MESSAGE_CLICK_BUTTON_CLICKED_TYPE.URL,
                nativeFlowName: n.name,
              }),
              o(
                "WAWebMmSignalSharingLoggingEvents",
              ).logMmSignalSharingLinkClickEvent({
                eventType: o("WAWebWamEnumDisclosureEventType")
                  .DISCLOSURE_EVENT_TYPE.CTA_URL_CLICK,
                linkTypeIndex: n.index,
                msg: t.unsafe(),
                chat: e,
                hasShownDisclosure: i,
              }));
          },
        }),
        { transition: "modal-flow" },
      );
    }
    function g(t, n) {
      if (n.id.fromMe && o("WAWebMsgGetters").getBizBotType(n) != null)
        return null;
      var r = o("WAWebFrontendMsgGetters").getChat(n.unsafe()),
        a = n.unsafe();
      return {
        label: t.data.label,
        Icon: o("WAWebReplyChatIcon.react").ReplyChatIcon,
        disabled: t.data.disabled,
        onClick: function () {
          if (n.isCarouselCard) R(t, a);
          else {
            var i, l;
            (o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "getQuickReplyInteractiveAction called",
                ])),
            ),
              o("WAWebSendTextMsgChatAction").sendTextMsgToChat(
                r,
                (i = t.data) == null ? void 0 : i.label,
                {
                  quotedMsg: a,
                  selectedIndex: t.index,
                  selectedId: (l = t.data) == null ? void 0 : l.selectionId,
                },
              ));
          }
          (v(t, n),
            o("WAWebQbmMessageClickLogEvent").logQbmMessageClick({
              msg: n.unsafe(),
              chat: r,
              buttonClickedType: o(
                "WAWebWamEnumQbmMessageClickButtonClickedType",
              ).QBM_MESSAGE_CLICK_BUTTON_CLICKED_TYPE.QUICK_REPLY,
              nativeFlowName: t.name,
            }));
          var s = o("WAWebMsgCollection").MsgCollection.get(n.id);
          s != null &&
            o(
              "WAWebBizInteractiveMessageQuickReplyAction",
            ).markInteractiveButtonClicked(s, t.index);
        },
      };
    }
    function h(e, t) {
      var n;
      return {
        label: (n = e.data) == null ? void 0 : n.label,
        onClick: function () {
          (r("WAWebBizMessageOpenCallModal")(),
            v(e, t),
            o("WAWebQbmMessageClickLogEvent").logQbmMessageClick({
              msg: t.unsafe(),
              chat: o("WAWebFrontendMsgGetters").getChat(t.unsafe()),
              buttonClickedType: o(
                "WAWebWamEnumQbmMessageClickButtonClickedType",
              ).QBM_MESSAGE_CLICK_BUTTON_CLICKED_TYPE.PHONE_NUMBER,
              nativeFlowName: e.name,
            }));
        },
        Icon: o("WAWebPhoneIcon.react").PhoneIcon,
      };
    }
    function y(e, t) {
      return {
        label: e.data.label,
        onClick: function () {
          e.data.catalogUrl != null &&
            (o("WAWebExternalLink.react").openExternalLink(e.data.catalogUrl),
            o("WAWebQbmMessageClickLogEvent").logQbmMessageClick({
              msg: t.unsafe(),
              chat: o("WAWebFrontendMsgGetters").getChat(t.unsafe()),
              buttonClickedType: o(
                "WAWebWamEnumQbmMessageClickButtonClickedType",
              ).QBM_MESSAGE_CLICK_BUTTON_CLICKED_TYPE.CATALOG,
              nativeFlowName: e.name,
            }));
        },
      };
    }
    function C(e, t) {
      return {
        label: e.data.label,
        onClick: function () {
          (o("WAWebCouponCodeHelper").copyCouponCodeGivenCode(e.data.copyCode),
            o("WAWebQbmMessageClickLogEvent").logQbmMessageClick({
              msg: t.unsafe(),
              chat: o("WAWebFrontendMsgGetters").getChat(t.unsafe()),
              buttonClickedType: o(
                "WAWebWamEnumQbmMessageClickButtonClickedType",
              ).QBM_MESSAGE_CLICK_BUTTON_CLICKED_TYPE.COPY_CODE,
              nativeFlowName: e.name,
            }));
        },
        Icon: o("WAWebCopyRefreshedIcon.react").CopyRefreshedIcon,
      };
    }
    function b(e, t) {
      var n = e.data,
        a = n.label,
        i = n.orderStatusButton;
      if (i != null) {
        var l = i.order.tracking;
        return l == null || !o("WAWebOrderStatus").shouldShowTrackingInfo(i)
          ? {
              label: a,
              onClick: function () {
                var e = o("WAWebFrontendMsgGetters").getChat(t.unsafe());
                (o("WAWebRichOrderStatusLogger").logRichOrderStatusInteraction(
                  t.unsafe(),
                  o("WAWebRichOrderStatusLogger").RichOrderStatusActionType
                    .MESSAGE_CTA_CLICK,
                ),
                  o(
                    "WAWebBizOpenOrderStatusDrawer.react",
                  ).openOrderStatusDrawer(i, e, t));
              },
            }
          : {
              label: a,
              Icon: function (t) {
                return d.jsx(
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
    function v(e, t) {
      var n;
      o("WAWebBizGatingUtils").isPremiumMessagesClickLoggingEnabled() &&
        o("WAWebMsgGetters").getIsMarketingMessage(t) &&
        new (o(
          "WAWebSmbPaidMessagesButtonLoggerWamEvent",
        ).SmbPaidMessagesButtonLoggerWamEvent)({
          businessPhoneNumber: Number(t.from.user),
          pmButtonCount: (n = t.buttons) == null ? void 0 : n.length,
          pmButtonEventType: o("WAWebWamEnumPmButtonEventType")
            .PM_BUTTON_EVENT_TYPE.CLICK,
          pmButtonIndex: e.index,
          pmButtonType: S(e),
          pmServerCampaignId: t.pmCampaignId,
        }).commit();
    }
    function S(e) {
      switch (e.name) {
        case "cta_url":
          return o("WAWebWamEnumPmButtonType").PM_BUTTON_TYPE.CTA_URL;
        case "cta_call":
          return o("WAWebWamEnumPmButtonType").PM_BUTTON_TYPE.CTA_CALL;
        case "quick_reply":
          return o("WAWebWamEnumPmButtonType").PM_BUTTON_TYPE.QUICK_REPLY;
        case "cta_catalog":
          return o("WAWebWamEnumPmButtonType").PM_BUTTON_TYPE.CTA_CATALOG;
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
    function R(e, t) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
            c = s.indexOf(t);
          if (c === -1) {
            o("WALogger").WARN(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
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
                selectedCarouselCardIndex: c,
              },
            )
          );
        })),
        L.apply(this, arguments)
      );
    }
    function E(e) {
      var t = e.data,
        n = t.label,
        a = t.paymentReminderInfo;
      return a == null || a.url == null
        ? null
        : {
            label: n,
            Icon: function (t) {
              return d.jsx(
                r("WDSIconIcOpenInNew.react"),
                babelHelpers.extends({}, t, { height: 18 }),
              );
            },
            onClick: function () {
              o("WAWebExternalLink.react").openExternalLink(a.url);
            },
          };
    }
    function k(e, t) {
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
    function I(e, t) {
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
                  o("WAWebCopyTextWithToast").copyTextWithToast(
                    r,
                    s._(/*BTDS*/ "Boleto code copied"),
                    s._(/*BTDS*/ "Couldn't copy boleto code"),
                    function () {
                      o(
                        "WAWebPaymentRequestWamLogger",
                      ).logPaymentRequestInteractionWAMEvent(
                        t,
                        o("WAWebBrPaymentRequest").PaymentRequestCtaType.BOLETO,
                      );
                    },
                  );
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
                  o("WAWebCopyTextWithToast").copyTextWithToast(
                    a,
                    s._(/*BTDS*/ "Pix Code copied"),
                    s._(/*BTDS*/ "Couldn't copy Pix Code"),
                    function () {
                      o(
                        "WAWebPaymentRequestWamLogger",
                      ).logPaymentRequestInteractionWAMEvent(
                        t,
                        o("WAWebBrPaymentRequest").PaymentRequestCtaType
                          .PIX_DYNAMIC_CODE,
                      );
                    },
                  );
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
    l.default = m;
  },
  226,
);
