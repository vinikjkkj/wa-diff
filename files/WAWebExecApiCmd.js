__d(
  "WAWebExecApiCmd",
  [
    "fbt",
    "JSResourceForInteraction",
    "WALogger",
    "WAWebABProps",
    "WAWebAboutWamLogger",
    "WAWebActiveAccountInfoContext.react",
    "WAWebAdaptiveLayoutGatingUtils",
    "WAWebAddEditPixFeature",
    "WAWebApi",
    "WAWebBizAIOAuthCallbackEventBus",
    "WAWebBizBotLogging",
    "WAWebBizBotProfileUtils",
    "WAWebBizBroadcastDeviceCapabilityCommon",
    "WAWebBizBroadcastProOnboardingStatus",
    "WAWebBizFrontendGatingUtils",
    "WAWebBizNativeAdsEntryPointUtils",
    "WAWebBotGenTypingIndicatorMsg",
    "WAWebBotUtils",
    "WAWebBrAddPixKeyCodeLinkLoadable",
    "WAWebBrAddPixKeyDeepLinkGating",
    "WAWebBrAddPixKeyLinkErrorDialogLoadable",
    "WAWebBrAddPixKeyLinkPixOnWebGate",
    "WAWebBrAddPixKeyOfferLoggerLoadable",
    "WAWebBrPixPaymentsHomeDeepLink",
    "WAWebBroadcastApiParse",
    "WAWebBusinessAdCreationUtils",
    "WAWebBusinessBroadcastHomeFlowLoadable",
    "WAWebBusinessBroadcastUserJourneyLogger",
    "WAWebCTWATrackingPayloadUtils",
    "WAWebCallUserJourneyGating",
    "WAWebCallingDeepLinkNoticeLoadable",
    "WAWebCatalogManagementFlowLoadable",
    "WAWebChatEntryPoint",
    "WAWebChatSearchFilters",
    "WAWebChatlistUtils",
    "WAWebCmd",
    "WAWebCommunityCreationFlowMetricUtils",
    "WAWebCommunityGatingUtils",
    "WAWebComposeBoxActions",
    "WAWebConfirmPopup.react",
    "WAWebConnModel",
    "WAWebContactCollection",
    "WAWebCreateTextStatusFlowLoadable",
    "WAWebCustomUrlLogEvents",
    "WAWebDeepLinkMsgSentWamEvent",
    "WAWebDrawerManager",
    "WAWebExecApiCmdHelpers",
    "WAWebExecApiCmdNewCall",
    "WAWebExecApiCmdNewGroup",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebFindChatAction",
    "WAWebGetCTWAEligibilityFromConversion",
    "WAWebGroupInviteLinkModalLoadable.react",
    "WAWebHatchFrontendGating",
    "WAWebHatchPairingUnavailableDialog.react",
    "WAWebInboxFiltersGatingUtils",
    "WAWebInfoFlowLoadable",
    "WAWebInjectSignupGreetingMessage",
    "WAWebKeyboardTabUtils",
    "WAWebMdLinkedDevicesWindowsXdrWamEvent",
    "WAWebMobilePlatforms",
    "WAWebModalManager",
    "WAWebNavBarTypes",
    "WAWebNewChatFlowLoadable",
    "WAWebNewCommunityInfoDrawerLoadable",
    "WAWebNewsletterExecApiCmd",
    "WAWebNoop",
    "WAWebOIDCCallbackEventBus",
    "WAWebOpenChatFlow.react",
    "WAWebOpenChatWithContactAction",
    "WAWebOpenNewsletterTab",
    "WAWebPrimaryFeaturesModel",
    "WAWebProfilePicThumbCollection",
    "WAWebReleaseToEventLoop",
    "WAWebSMBDataSharingDrawer.react",
    "WAWebSendBotRequestWelcomeAction",
    "WAWebSendMsgModalImplLoadable",
    "WAWebSendMsgMultiModalLoadable",
    "WAWebSendStickerToActiveChatStickersAction",
    "WAWebSharableEventGatingUtils",
    "WAWebSignupGating",
    "WAWebSignupLoadingState",
    "WAWebStatusApiParse",
    "WAWebStatusAttachMediaFlowLoadable",
    "WAWebStatusNavigateTo",
    "WAWebStickerStoreFlowLoadable",
    "WAWebTextStatusEditModalLoadable",
    "WAWebUpdateUtmAction",
    "WAWebUserUtils",
    "WAWebUsernameManagementDrawerLoadable",
    "WAWebUsernameTypes",
    "WAWebUsernameWorkerCompatibleGatingUtils",
    "WAWebVoipGatingUtils",
    "WAWebVoipOutgoingCallConsent",
    "WAWebVoipStartCall",
    "WAWebWamEnumCallFromUi",
    "WAWebWamEnumCatalogEntryPoint",
    "WAWebWamEnumCommunityCreationCurrentScreenType",
    "WAWebWamEnumDeepLinkAction",
    "WAWebWamEnumDeepLinkType",
    "WAWebWamEnumEntryPoint",
    "WAWebWamEnumLobbyEntryPointType",
    "WAWebWamEnumLwiEntryPoint",
    "WAWebWamEnumMdLinkedDevicesWindowsXdrStage",
    "WAWebWamEnumProfileEntryPoint",
    "WAWebWamEnumSmbDataSharingConsentSettingEntryPoint",
    "WAWebWidFactory",
    "WDSDialogBridge",
    "cr:12407",
    "cr:17104",
    "cr:1923",
    "cr:19328",
    "cr:2679",
    "cr:9382",
    "getErrorSafe",
    "gkx",
    "isStringNullOrEmpty",
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
      f,
      g,
      h,
      y,
      C,
      b,
      v,
      S,
      R,
      L,
      E,
      k,
      I,
      T,
      D,
      x,
      $,
      P,
      N,
      M,
      w,
      A,
      F,
      O,
      B = O || (O = o("react")),
      W = (e = n("cr:19328")) != null ? e : {},
      q = W.handleCallActiveDeeplink,
      U = (u = n("cr:17104")) != null ? u : {},
      V = U.handleClickCallLink;
    function H(e, t) {
      return t === !0 &&
        o("WAWebCallUserJourneyGating").isCallUserJourneyLoggingEnabled()
        ? o("WAWebWamEnumLobbyEntryPointType").LOBBY_ENTRY_POINT_TYPE
            .CALL_LINK_CREATE
        : e
          ? o("WAWebWamEnumLobbyEntryPointType").LOBBY_ENTRY_POINT_TYPE
              .CALL_LINK_EXTERNAL
          : o("WAWebWamEnumLobbyEntryPointType").LOBBY_ENTRY_POINT_TYPE
              .CALL_LINK_INTERNAL;
    }
    function G(e, t) {
      var n =
        e != null ||
        t ===
          o("WAWebGetCTWAEligibilityFromConversion")
            .SMB_DATA_SHARING_ALLOWED_SOURCE;
      return n ? null : "WA_ME_LINK";
    }
    async function z(e, t) {
      var n;
      try {
        n = o("WAWebWidFactory").createUserWidOrThrow(e + "@c.us");
      } catch (e) {
        o("WALogger")
          .ERROR(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "CALL_USER deep-link: unusable phone number",
              ])),
          )
          .catching(r("getErrorSafe")(e))
          .sendLogs("calling-deep-link-bad-phone");
        return;
      }
      if (o("WAWebUserUtils").isMeAccount(n)) {
        (o("WALogger")
          .LOG(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "CALL_USER deep-link: redirecting self-call to self chat",
              ])),
          )
          .sendLogs("calling-deep-links-self-call"),
          await j(n));
        return;
      }
      if (
        o("WAWebVoipOutgoingCallConsent").canStartDeepLinkCall(
          n,
          "before_ask",
        ) &&
        (await o("WAWebVoipOutgoingCallConsent").confirmDeepLinkCall(n, t)) &&
        o("WAWebVoipOutgoingCallConsent").canStartDeepLinkCall(
          n,
          "after_ask",
        ) &&
        (await j(n)) &&
        o("WAWebVoipOutgoingCallConsent").canStartDeepLinkCall(n, "after_ask")
      )
        try {
          await o("WAWebVoipStartCall").startWAWebVoipCall(
            n,
            t,
            o("WAWebCallUserJourneyGating").isCallUserJourneyLoggingEnabled()
              ? o("WAWebWamEnumCallFromUi").CALL_FROM_UI
                  .CALL_PHONE_NUMBER_DEEPLINK
              : 0,
            0,
            null,
            { entryTrust: "user_gesture" },
          );
        } catch (e) {
          o("WALogger")
            .ERROR(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "CALL_USER deep-link: startWAWebVoipCall failed",
                ])),
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs("calling-deep-link-start-call-failed");
        }
    }
    async function j(e) {
      try {
        var t = await o("WAWebFindChatAction").findOrCreateLatestChat(
            e,
            "callUserDeeplink",
          ),
          n = t.chat;
        return (
          await o("WAWebCmd").Cmd.openChatAt({
            chat: n,
            msgContext: null,
            chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.Deeplink,
          }),
          !0
        );
      } catch (e) {
        return (
          o("WALogger")
            .ERROR(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
                  "CALL_USER deep-link: failed to open chat",
                ])),
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs("calling-deep-link-open-chat-failed"),
          !1
        );
      }
    }
    function K(e) {
      var t,
        a = e.cmdData,
        i = e.isCallLinkCreationJoin,
        l = e.isExternal,
        u = e.preserveAttribution,
        c = e.sessionId;
      switch (
        (a.resultType !== "BRAZIL_PIX_HOME" &&
          o(
            "WAWebBrPixPaymentsHomeDeepLink",
          ).cancelPendingBrPixPaymentsHomeDeepLink(),
        a.resultType)
      ) {
        case "GROUP_INVITE": {
          var d;
          o("WAWebCmd").Cmd.closeStatusViewer();
          var m = a.data;
          return (
            o("WAWebModalManager").ModalManager.open(
              B.jsx(
                o("WAWebGroupInviteLinkModalLoadable.react")
                  .WAWebGroupInviteLinkModalLoadable,
                { groupCode: m.code, source: "invite_link" },
              ),
            ),
            o("WAWebExecApiCmdHelpers").submitDeepLinkOpenWamEvent({
              deepLinkType: o("WAWebWamEnumDeepLinkType").DEEP_LINK_TYPE
                .DEEP_LINK_GROUP_INVITE,
              isExternal: l,
              campaign: (d = m.utm) == null ? void 0 : d.campaign,
            }),
            !0
          );
        }
        case "CATALOG": {
          o("WAWebCmd").Cmd.closeStatusViewer();
          var p = a.data,
            O = p.catalogOwnerJid,
            W = p.partnertoken,
            U = p.utm;
          return (
            o("WAWebExecApiCmdHelpers").externalCtxAuthoriseWAChatIfEnabled({
              chatId: o("WAWebWidFactory").createWid(O),
              deepLinkType: a.resultType,
              isExternal: l,
              partnerToken: W,
            }),
            o("WAWebExecApiCmdHelpers").openChatAndCatalog(O, U),
            o("WAWebExecApiCmdHelpers").submitDeepLinkOpenWamEvent({
              deepLinkType: o("WAWebWamEnumDeepLinkType").DEEP_LINK_TYPE
                .DEEP_LINK_CATALOG,
              isExternal: l,
            }),
            !0
          );
        }
        case "PRODUCT": {
          o("WAWebCmd").Cmd.closeStatusViewer();
          var j = a.data,
            K = j.businessOwnerJid,
            Q = j.partnertoken,
            X = j.productId,
            Y = j.utm;
          return (
            o("WAWebExecApiCmdHelpers").externalCtxAuthoriseWAChatIfEnabled({
              chatId: o("WAWebWidFactory").createWid(K),
              deepLinkType: a.resultType,
              isExternal: l,
              partnerToken: Q,
            }),
            o("WAWebExecApiCmdHelpers").openChatAndProduct(K, X, Y),
            o("WAWebExecApiCmdHelpers").submitDeepLinkOpenWamEvent({
              deepLinkType: o("WAWebWamEnumDeepLinkType").DEEP_LINK_TYPE
                .DEEP_LINK_PRODUCT,
              isExternal: l,
            }),
            !0
          );
        }
        case "MSG_SEND": {
          o("WAWebCmd").Cmd.closeStatusViewer();
          var J = a.data,
            Z = J.attachmentUris,
            ee = J.conversionTuple,
            te = J.ctwaContextLinkData,
            ne = J.customUrl,
            re = J.fromDefaultProtocol,
            oe = J.lid,
            ae = J.phone,
            ie = J.text,
            le = J.type,
            se = J.username,
            ue = J.utm,
            ce = null;
          (ee == null ? void 0 : ee.conversionSource) === "sharesheet" &&
            (ce = oe);
          var de = ne != null || le === "business_profile",
            me = se != null;
          if (!r("isStringNullOrEmpty")(ae) || de || me) {
            var pe = function (t) {
                var e = t.chat,
                  n = t.widLookupMethod;
                ee &&
                  o(
                    "WAWebCTWATrackingPayloadUtils",
                  ).handleChatConversationOpenedWithNewMessage(e, ee);
                var r = n === "customUrl";
                (r &&
                  (o("WAWebCustomUrlLogEvents").logClickOnCustomUrl(e),
                  o("WAWebCustomUrlLogEvents").logMessageSentByCustomUrl(e)),
                  ue && o("WAWebUpdateUtmAction").addUtmToChat(e.id, ue),
                  o("WAWebBizBotProfileUtils").isBizBot3pBusinessProfile(
                    e.contact.businessProfile,
                  ) && o("WAWebBizBotLogging").logBizBot3pDeepLinkClickEvent(),
                  o(
                    "WAWebExecApiCmdHelpers",
                  ).externalCtxAuthoriseWAChatIfEnabled({
                    chatId: e.id,
                    deepLinkType: a.resultType,
                    isExternal: l,
                    partnerToken: a.data.partnertoken,
                  }),
                  ie && (e.urlText = !0),
                  (e.urlNumber = !0),
                  r &&
                    o("WAWebDrawerManager").DrawerManager.openDrawerRight(
                      o(
                        "WAWebAdaptiveLayoutGatingUtils",
                      ).shouldUseDrawerDescriptor()
                        ? {
                            descriptorType: "info_flow",
                            chat: e,
                            profileEntryPoint: o(
                              "WAWebWamEnumProfileEntryPoint",
                            ).PROFILE_ENTRY_POINT.CUSTOM_URL_LINK,
                          }
                        : B.jsx(
                            o("WAWebInfoFlowLoadable").InfoFlowLoadable,
                            {
                              chat: e,
                              profileEntryPoint: o(
                                "WAWebWamEnumProfileEntryPoint",
                              ).PROFILE_ENTRY_POINT.CUSTOM_URL_LINK,
                            },
                            "info-" + e.id.toString(),
                          ),
                      {
                        transition: "slide-left",
                        focusType: o("WAWebKeyboardTabUtils").FocusType
                          .TABBABLE,
                      },
                    ));
                var i = J.signupId;
                if (
                  i != null &&
                  ae != null &&
                  o("WAWebSignupGating").isSignupAGMEnabled()
                ) {
                  var s;
                  (o("WAWebSignupLoadingState").setSignupLoading(
                    e.id.toString(),
                    !0,
                  ),
                    o(
                      "WAWebInjectSignupGreetingMessage",
                    ).injectSignupGreetingMessage(
                      ae,
                      i,
                      (s = J.conversionTuple) == null
                        ? void 0
                        : s.conversionSource,
                    ));
                }
                o("WAWebExecApiCmdHelpers").logDefaultProtocolNavigation(
                  re,
                  !0,
                );
              },
              _e =
                c != null
                  ? {
                      handleOnce: function () {
                        new (o(
                          "WAWebDeepLinkMsgSentWamEvent",
                        ).DeepLinkMsgSentWamEvent)({
                          deepLinkAction: o("WAWebWamEnumDeepLinkAction")
                            .DEEP_LINK_ACTION.MSG_SENT,
                          deepLinkSessionId: c,
                        }).commit();
                      },
                    }
                  : void 0,
              fe = me
                ? {
                    deepLinkHasPhoneNumber: !r("isStringNullOrEmpty")(ae),
                    deepLinkHasText: !r("isStringNullOrEmpty")(ie),
                    deepLinkHasUsername: !0,
                    deepLinkHasUsernamePin:
                      !r("isStringNullOrEmpty")(J.usernameKey) ||
                      J.invalidUsernameKey === !0,
                    deepLinkSessionId: c,
                  }
                : void 0;
            (o("WAWebModalManager").ModalManager.open(
              B.jsx(o("WAWebOpenChatFlow.react").OpenChatFlow, {
                target: o("WAWebExecApiCmdHelpers").getOpenChatFlowProps(J),
                msgText: ie,
                onSuccess: pe,
                onError: function () {
                  return o(
                    "WAWebExecApiCmdHelpers",
                  ).logDefaultProtocolNavigation(re, !1);
                },
                ctwaContextLinkData: te,
                sendLogAttributes: _e,
                deepLinkLoggingData: fe,
                startChatContextEntryPoint: G(
                  te,
                  ee == null ? void 0 : ee.conversionSource,
                ),
              }),
              { transition: "modal-flow" },
            ),
              o("WAWebExecApiCmdHelpers").submitDeepLinkOpenWamEvent({
                deepLinkType: te
                  ? o("WAWebWamEnumDeepLinkType").DEEP_LINK_TYPE.DEEP_LINK_CTWA
                  : o("WAWebWamEnumDeepLinkType").DEEP_LINK_TYPE.DEEP_LINK_CHAT,
                isExternal: l,
                deepLinkSessionId: c,
                campaign: ue == null ? void 0 : ue.campaign,
              }));
          } else {
            var ge = function (t) {
              if (
                (ee == null ? void 0 : ee.conversionSource) === "sharesheet"
              ) {
                var e = { msgText: ie, urlText: !0 };
                (t && (e.attachments = t),
                  ce != null && ce.length > 0 && (e.preSelectedContactLid = ce),
                  o("WAWebModalManager").ModalManager.open(
                    B.jsx(
                      o("WAWebSendMsgModalImplLoadable")
                        .SendMsgModalImplLoadable,
                      babelHelpers.extends({}, e),
                    ),
                    { transition: "modal-flow" },
                  ));
              } else {
                var n = { msgText: ie, urlText: !0 };
                (t && (n.attachments = t),
                  o("WAWebModalManager").ModalManager.open(
                    B.jsx(
                      o("WAWebSendMsgMultiModalLoadable")
                        .SendMsgMultiModalLoadable,
                      babelHelpers.extends({}, n),
                    ),
                    { transition: "modal-flow" },
                  ));
              }
            };
            Z != null && Z.length > 0
              ? o("WAWebExecApiCmdHelpers")
                  .downloadAttachments(Z)
                  .then(function (e) {
                    ge(e);
                  })
                  .finally(r("WAWebNoop"))
              : ge();
            var he =
              (ee == null ? void 0 : ee.conversionSource) === "sharesheet"
                ? o("WAWebWamEnumDeepLinkType").DEEP_LINK_TYPE
                    .DEEP_LINK_SHARESHEET
                : o("WAWebWamEnumDeepLinkType").DEEP_LINK_TYPE
                    .DEEP_LINK_MSG_FORWARD;
            o("WAWebExecApiCmdHelpers").submitDeepLinkOpenWamEvent({
              deepLinkType: he,
              isExternal: l,
              deepLinkSessionId: void 0,
              campaign: ue == null ? void 0 : ue.campaign,
            });
          }
          return !0;
        }
        case "PUSH_NOTIFICATION":
          return !0;
        case "CREATE_COMMUNITY": {
          if (!o("WAWebCommunityGatingUtils").communitiesCreationEnabled())
            return !1;
          (o("WAWebCmd").Cmd.closeStatusViewer(),
            o("WAWebDrawerManager").DrawerManager.openDrawerLeft(
              B.jsx(r("WAWebNewCommunityInfoDrawerLoadable"), {}),
              { focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE },
            ));
          var ye = a.data.entrypointType;
          return (
            o(
              "WAWebCommunityCreationFlowMetricUtils",
            ).UiCommunityCreationAction.startSession(
              o(
                "WAWebCommunityCreationFlowMetricUtils",
              ).getDeeplinkEntrypointType(ye),
            ),
            o(
              "WAWebCommunityCreationFlowMetricUtils",
            ).UiCommunityCreationAction.enter(
              o("WAWebWamEnumCommunityCreationCurrentScreenType")
                .COMMUNITY_CREATION_CURRENT_SCREEN_TYPE.DEEP_LINK,
            ),
            o("WAWebExecApiCmdHelpers").submitDeepLinkOpenWamEvent({
              deepLinkType: o("WAWebWamEnumDeepLinkType").DEEP_LINK_TYPE
                .DEEP_LINK_CREATE_COMMUNITY,
              isExternal: l,
            }),
            !0
          );
        }
        case "NEWSLETTER":
          return (
            o("WAWebCmd").Cmd.closeStatusViewer(),
            o("WAWebNewsletterExecApiCmd").execNewsletterApiCmd(a.data),
            o("WAWebExecApiCmdHelpers").submitDeepLinkOpenWamEvent({
              deepLinkType: o("WAWebWamEnumDeepLinkType").DEEP_LINK_TYPE
                .DEEP_LINK_CHANNEL,
              isExternal: l,
            }),
            !0
          );
        case "AVATAR_STICKERPACK": {
          var Ce = o("WAWebFaqUrl").getAvatarFaqUrl();
          return (window.location.replace(Ce), !0);
        }
        case "ADVERTISE": {
          if (!o("WAWebMobilePlatforms").isSMB())
            return (
              o("WALogger")
                .WARN(
                  _ ||
                    (_ = babelHelpers.taggedTemplateLiteralLoose([
                      "[API] ",
                      " command rejected: not SMB",
                    ])),
                  a.resultType,
                )
                .sendLogs("ads-api-command-rejected"),
              !1
            );
          var be = o(
            "WAWebActiveAccountInfoContext.react",
          ).getActiveAccountInfo();
          if (be == null || be === "not-linked")
            return (
              o("WALogger")
                .WARN(
                  f ||
                    (f = babelHelpers.taggedTemplateLiteralLoose([
                      "[API] ",
                      " command rejected: active account state=",
                      "",
                    ])),
                  a.resultType,
                  be,
                )
                .sendLogs("ads-api-command-rejected"),
              !1
            );
          var ve = a.data,
            Se = ve.campaignId,
            Re = ve.campaignType;
          return (
            o("WAWebChatlistUtils").handleAdCreation({
              adCreationUrlInput: {
                activeAccountInfo: be,
                sourceAdCreation: o(
                  "WAWebBusinessAdCreationUtils",
                ).getAdCreationTypeFromCampaignType(Re),
              },
              lwiEntryPoint: o(
                "WAWebBizNativeAdsEntryPointUtils",
              ).getLwiEntryPointFromCampaignType(Re),
              waCampaignId: Se,
            }),
            !0
          );
        }
        case "MANAGE_ADS": {
          if (!o("WAWebMobilePlatforms").isSMB())
            return (
              o("WALogger")
                .WARN(
                  g ||
                    (g = babelHelpers.taggedTemplateLiteralLoose([
                      "[API] ",
                      " command rejected: not SMB",
                    ])),
                  a.resultType,
                )
                .sendLogs("ads-api-command-rejected"),
              !1
            );
          var Le = o(
            "WAWebActiveAccountInfoContext.react",
          ).getActiveAccountInfo();
          if (Le == null || Le === "not-linked")
            return (
              o("WALogger")
                .WARN(
                  h ||
                    (h = babelHelpers.taggedTemplateLiteralLoose([
                      "[API] ",
                      " command rejected: active account state=",
                      "",
                    ])),
                  a.resultType,
                  Le,
                )
                .sendLogs("ads-api-command-rejected"),
              !1
            );
          switch (a.trigger) {
            case "chatListBanner":
              o("WAWebChatlistUtils").handleManageAds({
                activeAccountInfo: Le,
                entryPoint: o("WAWebWamEnumLwiEntryPoint").LWI_ENTRY_POINT
                  .SMB_CHAT_LIST_BANNER_MANAGE_AD,
                sourceManageAdsType:
                  "whatsapp_smb_web_manage_ads_chat_list_banner",
              });
              break;
            default:
              (a.trigger,
                o("WAWebChatlistUtils").handleManageAds({
                  activeAccountInfo: Le,
                  entryPoint: o("WAWebWamEnumLwiEntryPoint").LWI_ENTRY_POINT
                    .SMB_BUSINESS_HOME_MANAGE_AD,
                  sourceManageAdsType: "whatsapp_smb_web_manage_ads_native",
                }));
              break;
          }
          return !0;
        }
        case "MESSAGE_YOURSELF": {
          try {
            var Ee = o("WAWebUserUtils").getMeUserOrThrow();
            o("WAWebOpenChatWithContactAction").openChatWithContact({
              chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.Deeplink,
              findChatOrigin: "newChatFlow",
              targetId: Ee,
            });
          } catch (e) {
            o("WALogger").ERROR(
              y ||
                (y = babelHelpers.taggedTemplateLiteralLoose([
                  "Opening self chat failed with exceptions",
                ])),
            );
          }
          return !0;
        }
        case "BRAZIL_PAYMENTS": {
          if (
            a.data.subType !==
            o("WAWebApi").BrazilPaymentResultSubtype.PIX_ONBOARDING
          )
            return !1;
          var ke =
            a.data.campaignType === "chatlist_banner"
              ? "chatlist_banner"
              : a.data.campaignType === "aymt_email"
                ? "aymt_email"
                : a.data.campaignType === "aymt_ads_manager_notification"
                  ? "aymt_ads_manager_notification"
                  : "chatlist_banner";
          return o("WAWebBizFrontendGatingUtils").isPixOnWebEnabled()
            ? (o("WAWebAddEditPixFeature").openPixCredentialManagementModal(
                ke,
                ke,
              ),
              !0)
            : (o("WAWebPrimaryFeaturesModel").PrimaryFeatures.on(
                "change:customPaymentMethodsSyncSupport",
                function () {
                  if (o("WAWebBizFrontendGatingUtils").isPixOnWebEnabled())
                    return (
                      o(
                        "WAWebAddEditPixFeature",
                      ).openPixCredentialManagementModal(ke, ke),
                      !0
                    );
                },
              ),
              !1);
        }
        case "BRAZIL_PIX_HOME":
          return (
            o("WAWebExecApiCmdHelpers").submitDeepLinkOpenWamEvent({
              deepLinkType: o("WAWebWamEnumDeepLinkType").DEEP_LINK_TYPE
                .DEEP_LINK_PAYMENT,
              isExternal: l,
            }),
            o("WAWebBrPixPaymentsHomeDeepLink").openBrPixPaymentsHomeDeepLink(),
            !0
          );
        case "BRAZIL_ADD_PIX_KEY": {
          var Ie = a.data.code;
          o("WAWebExecApiCmdHelpers").submitDeepLinkOpenWamEvent({
            deepLinkType: o("WAWebWamEnumDeepLinkType").DEEP_LINK_TYPE
              .DEEP_LINK_PAYMENT_BR_ADD_PIX_KEY,
            isExternal: l,
          });
          var Te = function () {
            return o("WAWebBrAddPixKeyDeepLinkGating").isSelfInBrazil()
              ? o("WAWebBrAddPixKeyDeepLinkGating").isAddPixKeyDeepLinkEnabled()
                ? Ie != null
                  ? (o(
                      "WAWebBrAddPixKeyCodeLinkLoadable",
                    ).openAddPixKeyCodeLinkLazily(Ie),
                    !0)
                  : (o(
                      "WAWebBrAddPixKeyOfferLoggerLoadable",
                    ).logAddPixKeyLinkDiscarded("link_unusable", null),
                    o(
                      "WAWebBrAddPixKeyLinkErrorDialogLoadable",
                    ).openPaymentsHomeWithUnusableLinkDialogLazily(),
                    !0)
                : (o(
                    "WAWebBrAddPixKeyOfferLoggerLoadable",
                  ).logAddPixKeyLinkDiscarded("killswitch_off", null),
                  !1)
              : (o(
                  "WAWebBrAddPixKeyOfferLoggerLoadable",
                ).logAddPixKeyLinkDiscarded("payments_unavailable", null),
                !1);
          };
          return o(
            "WAWebBrAddPixKeyLinkPixOnWebGate",
          ).openWhenPixOnWebAvailable(Te);
        }
        case "EDIT_PROFILE_PICTURE": {
          try {
            o("WAWebCmd").Cmd.closeStatusViewer();
            var De = o("WAWebUserUtils").getMeUserOrThrow(),
              xe = o("WAWebContactCollection").ContactCollection.assertGet(De),
              $e = o(
                "WAWebProfilePicThumbCollection",
              ).ProfilePicThumbCollection.assertGet(De);
            return (
              o("WAWebDrawerManager").DrawerManager.openDrawerLeft(
                B.jsx(n("cr:1923"), {
                  profilePicThumb: $e,
                  contact: xe,
                  conn: o("WAWebConnModel").Conn,
                  onClose: o("WAWebDrawerManager").closeDrawerLeft,
                  isInitialStep: !0,
                }),
                { focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE },
              ),
              o("WAWebExecApiCmdHelpers").submitDeepLinkOpenWamEvent({
                deepLinkType: o("WAWebWamEnumDeepLinkType").DEEP_LINK_TYPE
                  .DEEP_LINK_EDIT_PROFILE_PIC,
                isExternal: l,
              }),
              !0
            );
          } catch (e) {
            o("WALogger").ERROR(
              C ||
                (C = babelHelpers.taggedTemplateLiteralLoose([
                  "Opening profile drawer with exceptions",
                ])),
            );
          }
          return !0;
        }
        case "PROFILE_USERNAME": {
          if (
            !o(
              "WAWebUsernameWorkerCompatibleGatingUtils",
            ).usernameCreationOrReservationEnabled()
          )
            return (
              o("WALogger").LOG(
                b ||
                  (b = babelHelpers.taggedTemplateLiteralLoose([
                    "PROFILE_USERNAME deep link - username feature disabled",
                  ])),
              ),
              !1
            );
          try {
            o("WAWebCmd").Cmd.closeStatusViewer();
            var Pe = o("WAWebUserUtils").getMeLidUserOrThrow(),
              Ne = o("WAWebContactCollection").ContactCollection.assertGet(Pe),
              Me = o("WAWebUsernameTypes").serializeMaybeUsername(Ne.username);
            return (
              r("isStringNullOrEmpty")(Me)
                ? (o("WAWebModalManager").ModalManager.open(
                    B.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
                      onOK: o("WAWebModalManager").closeModalManager,
                      children: s._(/*BTDS*/ ""),
                    }),
                  ),
                  o("WALogger").LOG(
                    S ||
                      (S = babelHelpers.taggedTemplateLiteralLoose([
                        "PROFILE_USERNAME deep link - use primary device alert",
                      ])),
                  ))
                : (o("WAWebDrawerManager").DrawerManager.openDrawerLeft(
                    B.jsx(r("WAWebUsernameManagementDrawerLoadable"), {
                      contactId: Ne.id,
                      username: Me,
                    }),
                    {
                      focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
                    },
                  ),
                  o("WALogger").LOG(
                    v ||
                      (v = babelHelpers.taggedTemplateLiteralLoose([
                        "PROFILE_USERNAME deep link - opened username drawer",
                      ])),
                  )),
              !0
            );
          } catch (e) {
            return (
              o("WALogger").ERROR(
                R ||
                  (R = babelHelpers.taggedTemplateLiteralLoose([
                    "PROFILE_USERNAME deep link failed with exception",
                  ])),
              ),
              !1
            );
          }
        }
        case "BROADCAST": {
          var we = a.data.feature;
          switch (we) {
            case o("WAWebBroadcastApiParse").BroadcastFeatureType.Newsletter:
              o("WAWebOpenNewsletterTab").openNewsletterTab();
              break;
            case o("WAWebBroadcastApiParse").BroadcastFeatureType.Status:
              (o("WAWebCmd").Cmd.setActiveNavBarItem(
                o("WAWebNavBarTypes").NavBarItems.Status,
              ),
                o("WAWebStatusNavigateTo").navigateToStatus());
          }
          return !0;
        }
        case "STATUS_POST": {
          var Ae = a.data.postType;
          switch (Ae) {
            case o("WAWebStatusApiParse").StatusPostType.Text:
              o("WAWebModalManager").ModalManager.openMedia(
                B.jsx(
                  o("WAWebCreateTextStatusFlowLoadable")
                    .CreateTextStatusFlowLoadable,
                  {},
                ),
                { transition: "status-modal" },
              );
              break;
            case o("WAWebStatusApiParse").StatusPostType.Media:
              o("WAWebModalManager").ModalManager.open(
                B.jsx(
                  o("WAWebStatusAttachMediaFlowLoadable")
                    .StatusAttachMediaFlowLoadable,
                  {},
                ),
              );
              break;
          }
          return !0;
        }
        case "CALL_USER": {
          var Fe = a.data.phone,
            Oe = a.data.video === !0;
          return (
            o("WAWebExecApiCmdHelpers").submitDeepLinkOpenWamEvent({
              deepLinkType: o("WAWebWamEnumDeepLinkType").DEEP_LINK_TYPE
                .DEEP_LINK_CALL,
              isExternal: l,
            }),
            o("WAWebVoipGatingUtils").isCallingEnabled()
              ? Fe == null
                ? (o("WALogger")
                    .LOG(
                      E ||
                        (E = babelHelpers.taggedTemplateLiteralLoose([
                          "CALL_USER deep-link missing phone",
                        ])),
                    )
                    .sendLogs("calling-deep-link-missing-phone"),
                  o("WAWebModalManager").ModalManager.close(),
                  o("WDSDialogBridge").openWDSDialog(
                    B.jsx(r("WAWebCallingDeepLinkNoticeLoadable"), {
                      description: s._(/*BTDS*/ ""),
                      title: s._(/*BTDS*/ ""),
                    }),
                  ),
                  !0)
                : (z(Fe, Oe), !0)
              : (o("WAWebModalManager").ModalManager.close(),
                o("WDSDialogBridge").openWDSDialog(
                  B.jsx(r("WAWebCallingDeepLinkNoticeLoadable"), {
                    description: s._(/*BTDS*/ ""),
                    title: s._(/*BTDS*/ ""),
                  }),
                ),
                o("WALogger")
                  .LOG(
                    L ||
                      (L = babelHelpers.taggedTemplateLiteralLoose([
                        "Calling deep-links are not supported on WA Web Client",
                      ])),
                  )
                  .sendLogs("calling-deep-links-not-supported"),
                !0)
          );
        }
        case "PAYMENT_LINK":
          return !0;
        case "FAVORITES":
          return o("WAWebInboxFiltersGatingUtils").inboxFavoritesEnabled()
            ? (o("WAWebCmd").Cmd.closeStatusViewer(),
              o("WAWebDrawerManager").DrawerManager.closeDrawerLeft(),
              o("WAWebCmd").Cmd.setActiveNavBarItem(
                o("WAWebNavBarTypes").NavBarItems.Chats,
              ),
              o("WAWebCmd").Cmd.setActiveFilter(
                o("WAWebChatSearchFilters").SearchFilters.FAVORITES,
              ),
              o("WAWebExecApiCmdHelpers").submitDeepLinkOpenWamEvent({
                deepLinkType: o("WAWebWamEnumDeepLinkType").DEEP_LINK_TYPE
                  .DEEP_LINK_FAVORITE_CHAT_FILTER,
                isExternal: l,
              }),
              !0)
            : !1;
        case "OPEN_CATALOG": {
          if (l || !o("WAWebMobilePlatforms").isSMB()) return !1;
          var Be = {
            entryPoint: o("WAWebWamEnumCatalogEntryPoint").CATALOG_ENTRY_POINT
              .CATALOG_ENTRY_POINT_DEEPLINK,
            isInitialStep: !0,
          };
          return (
            (a.data.campaignType === "chat_psa" ||
              a.data.campaignType === "banner") &&
              (Be.promotionCampaign = "video-upload"),
            o("WAWebCatalogManagementFlowLoadable").openCatalogManagementFlow(
              Be,
            ),
            !0
          );
        }
        case "CATALOG_LINKING_CHAT_PSA": {
          var We = a.data.deepLinkType;
          return (
            o("WAWebExecApiCmdHelpers").submitDeepLinkOpenWamEvent({
              deepLinkType: We,
              isExternal: l,
            }),
            o("WAWebExternalLink.react").openExternalLink(
              o("WAWebFaqUrl").getWhatsappUsePhoneFallbackUrl(),
            ),
            !0
          );
        }
        case "HATCH_LINK": {
          if (!o("WAWebHatchFrontendGating").isHatchIntegrationEnabled())
            return !1;
          if (
            !o("WAWebABProps").getABPropConfigValue(
              "hatch_pairing_from_companion_enabled",
            )
          )
            return (
              o("WAWebModalManager").ModalManager.open(
                B.jsx(r("WAWebHatchPairingUnavailableDialog.react"), {}),
              ),
              o("WALogger")
                .LOG(
                  k ||
                    (k = babelHelpers.taggedTemplateLiteralLoose([
                      "Hatch pairing deep-link not supported on companion device",
                    ])),
                )
                .sendLogs("hatch-pairing-not-supported-on-companion"),
              !0
            );
          o("WAWebCmd").Cmd.closeStatusViewer();
          var qe = async function (t) {
            var e = await o("WAWebFindChatAction").findOrCreateLatestChat(
                o("WAWebBotUtils").HATCH_BOT_FBID_WID,
                "hatchDeeplink",
              ),
              n = e.chat;
            (await o("WAWebCmd").Cmd.openChatAt({
              chat: n,
              msgContext: null,
              chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.Deeplink,
            }),
              t != null &&
                (o("WAWebSendBotRequestWelcomeAction").sendBotRequestWelcome(
                  n,
                  t,
                ),
                o("WAWebBotGenTypingIndicatorMsg").showBotTypingIndicator(n)));
          };
          return (qe(a.data.token), !0);
        }
        case "UGC_BOT": {
          var Ue = async function (t) {
              var e = o("WAWebWidFactory").createUserWidOrThrow(t + "@bot"),
                n = await o("WAWebFindChatAction").findOrCreateLatestChat(
                  e,
                  "ugcBotDeeplink",
                ),
                r = n.chat;
              await o("WAWebCmd").Cmd.openChatAt({
                chat: r,
                msgContext: null,
                chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint
                  .Deeplink,
              });
            },
            Ve = function (t) {
              (t === o("WAWebBotUtils").HATCH_BOT_FBID_WID.user &&
                !o("WAWebHatchFrontendGating").isHatchIntegrationEnabled()) ||
                (o("WAWebCmd").Cmd.closeStatusViewer(), Ue(t));
            };
          return (Ve(a.data.fbid), !0);
        }
        case "STICKER_PACK": {
          var He = a.data.url;
          return (
            o("WAWebDrawerManager").DrawerManager.openDrawerRight(
              B.jsx(
                r("WAWebStickerStoreFlowLoadable").StickerStoreFlowLoadable,
                {
                  stickerPackId: He,
                  onSticker: r("WAWebSendStickerToActiveChatStickersAction"),
                },
              ),
              { focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE },
            ),
            !0
          );
        }
        case "CALL_LINK": {
          !l &&
            i !== !0 &&
            r("JSResourceForInteraction")("WAWebPreCallUserJourneyLogger")
              .__setRef("WAWebExecApiCmd")
              .load()
              .then(function (e) {
                return new e.PreCallUserJourneyLogger().clickCallLinkFromChat();
              })
              .catch(function (e) {
                o("WALogger")
                  .ERROR(
                    I ||
                      (I = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: failed to log click_call_link for an in-app call link",
                      ])),
                  )
                  .catching(r("getErrorSafe")(e))
                  .sendLogs("voip-click-call-link-log-failed");
              });
          var Ge = V;
          return (
            Ge == null &&
              n("cr:9382") != null &&
              (Ge = n("cr:9382").handleClickCallLink),
            Ge == null || Ge(a, H(l, i)),
            !0
          );
        }
        case "CTWA_ADS_DATA_SHARING": {
          if (!o("WAWebMobilePlatforms").isSMB()) return !1;
          var ze = a.source,
            je;
          switch (ze) {
            case "ads_manager_3pd_guidance_card":
              je = o("WAWebWamEnumSmbDataSharingConsentSettingEntryPoint")
                .SMB_DATA_SHARING_CONSENT_SETTING_ENTRY_POINT
                .ENTRY_POINT_DEEP_LINK_ADS_MANAGER_3PD_GUIDANCE_CARD;
              break;
            default:
              je = o("WAWebWamEnumSmbDataSharingConsentSettingEntryPoint")
                .SMB_DATA_SHARING_CONSENT_SETTING_ENTRY_POINT
                .ENTRY_POINT_UNKNOWN;
              break;
          }
          return (
            o("WAWebDrawerManager").DrawerManager.openDrawerLeft(
              B.jsx(r("WAWebSMBDataSharingDrawer.react"), {
                onClose: o("WAWebDrawerManager").closeDrawerLeft,
                entrypoint: je,
              }),
            ),
            !0
          );
        }
        case "BIZ_AGENTS_ONBOARDING":
          return o("WAWebMobilePlatforms").isSMB()
            ? (o("WAWebExternalLink.react").openExternalLink(
                "https://wa.me/biz-agents-onboarding",
              ),
              !0)
            : !1;
        case "BIZ_BROADCAST_AUDIENCE_MODAL":
          return o("WAWebMobilePlatforms").isSMB()
            ? (r("JSResourceForInteraction")(
                "openWAWebBizBroadcastChatBannerAudienceImport",
              )
                .__setRef("WAWebExecApiCmd")
                .load()
                .then(function (e) {
                  return e();
                })
                .catch(function (e) {
                  o("WALogger")
                    .ERROR(
                      T ||
                        (T = babelHelpers.taggedTemplateLiteralLoose([
                          "Failed to load or open the chat banner audience import",
                        ])),
                    )
                    .catching(r("getErrorSafe")(e))
                    .sendLogs("bb-chat-banner-audience-import-load-failed");
                }),
              !0)
            : !1;
        case "BIZ_BROADCAST_HOME": {
          var Ke;
          if (
            (o("WAWebExecApiCmdHelpers").submitDeepLinkOpenWamEvent({
              deepLinkType: o("WAWebWamEnumDeepLinkType").DEEP_LINK_TYPE
                .DEEP_LINK_MARKETING_MESSAGE,
              isExternal: l,
            }),
            !o("WAWebMobilePlatforms").isSMB() ||
              (!o(
                "WAWebBizBroadcastDeviceCapabilityCommon",
              ).isBizBroadcastProEntrypointEnabledForStatus(
                o(
                  "WAWebBizBroadcastProOnboardingStatus",
                ).getBizBroadcastProNuxOnboardingStatus(),
              ) &&
                !o(
                  "WAWebBizBroadcastDeviceCapabilityCommon",
                ).isBizBroadcastEnabledAndDeviceSupported(!1)))
          )
            return !1;
          var Qe = a.data.source,
            Xe;
          switch (Qe) {
            case "qp_chat_list_banner":
              Xe = o("WAWebWamEnumEntryPoint").ENTRY_POINT.CHAT_BANNER;
              break;
            default:
              Xe = o("WAWebWamEnumEntryPoint").ENTRY_POINT.DEEP_LINK;
              break;
          }
          var Ye = u !== !0;
          Ye &&
            o(
              "WAWebBusinessBroadcastUserJourneyLogger",
            ).BusinessBroadcastUserJourneyLogger.setDeeplinkAttribution(
              Xe,
              a.data.moment,
            );
          var Je = Ye
              ? Xe
              : (Ke = o(
                    "WAWebBusinessBroadcastUserJourneyLogger",
                  ).BusinessBroadcastUserJourneyLogger.getEntryPoint()) != null
                ? Ke
                : Xe,
            Ze = function () {
              o("WAWebDrawerManager").DrawerManager.openDrawerFullscreen(
                B.jsx(
                  o("WAWebBusinessBroadcastHomeFlowLoadable")
                    .WAWebBusinessBroadcastHomeFlowLoadable,
                  {
                    entryPoint: Je,
                    onClose: function () {
                      return o(
                        "WAWebDrawerManager",
                      ).DrawerManager.closeDrawerFullscreen();
                    },
                  },
                ),
                { focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE },
              );
            };
          return (
            l
              ? o("WAWebReleaseToEventLoop")
                  .releaseToEventLoop()
                  .then(Ze)
                  .catch(function (e) {
                    o("WALogger")
                      .ERROR(
                        D ||
                          (D = babelHelpers.taggedTemplateLiteralLoose([
                            "BizBroadcastHome external deeplink drawer open failed",
                          ])),
                      )
                      .catching(r("getErrorSafe")(e))
                      .sendLogs("bb-home-deeplink-drawer-fail");
                  })
              : Ze(),
            !0
          );
        }
        case "WEB_REGISTRATION":
        case "WEB_REGISTRATION_CAMPAIGN":
          return !1;
        case "CALL_ACTIVE":
          return (t = q == null ? void 0 : q()) != null ? t : !1;
        case "CHAT_OPEN": {
          var et = a.data,
            tt = et.fromDefaultProtocol,
            nt = et.lid,
            rt = et.session;
          try {
            (o("WAWebCmd").Cmd.closeStatusViewer(),
              o("WAWebDrawerManager").DrawerManager.closeDrawerLeft(),
              o("WAWebDrawerManager").DrawerManager.closeDrawerMid(),
              o("WAWebCmd").Cmd.setActiveNavBarItem(
                o("WAWebNavBarTypes").NavBarItems.Chats,
              ));
            var ot = o("WAWebWidFactory").createWid(nt);
            o("WAWebFindChatAction")
              .findOrCreateLatestChat(ot, "newChatFlow")
              .then(function (e) {
                var t = e.chat;
                o("WAWebCmd")
                  .Cmd.openChatFromUnread({
                    chat: t,
                    chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint
                      .Deeplink,
                  })
                  .then(function (e) {
                    (e &&
                      (o("WAWebComposeBoxActions").ComposeBoxActions.focus(t),
                      o("WAWebCmd").Cmd.trigger("scroll_to_active_chat")),
                      rt != null &&
                        new (o(
                          "WAWebMdLinkedDevicesWindowsXdrWamEvent",
                        ).MdLinkedDevicesWindowsXdrWamEvent)({
                          mdLinkedDevicesWindowsXdrStage: e
                            ? o("WAWebWamEnumMdLinkedDevicesWindowsXdrStage")
                                .MD_LINKED_DEVICES_WINDOWS_XDR_STAGE
                                .DEEPLINK_NAVIGATION_SUCCESS
                            : o("WAWebWamEnumMdLinkedDevicesWindowsXdrStage")
                                .MD_LINKED_DEVICES_WINDOWS_XDR_STAGE
                                .DEEPLINK_NAVIGATION_FAILURE,
                          mdXdrSessionUuid: rt,
                        }).commit(),
                      o("WAWebExecApiCmdHelpers").logDefaultProtocolNavigation(
                        tt,
                        e,
                      ));
                  });
              })
              .catch(function (e) {
                (o("WALogger").ERROR(
                  x ||
                    (x = babelHelpers.taggedTemplateLiteralLoose([
                      "Opening chat via chatOpen failed with async exception",
                    ])),
                ),
                  rt != null &&
                    new (o(
                      "WAWebMdLinkedDevicesWindowsXdrWamEvent",
                    ).MdLinkedDevicesWindowsXdrWamEvent)({
                      mdLinkedDevicesWindowsXdrStage: o(
                        "WAWebWamEnumMdLinkedDevicesWindowsXdrStage",
                      ).MD_LINKED_DEVICES_WINDOWS_XDR_STAGE
                        .DEEPLINK_NAVIGATION_FAILURE,
                      mdXdrSessionUuid: rt,
                    }).commit(),
                  o("WAWebExecApiCmdHelpers").logDefaultProtocolNavigation(
                    tt,
                    !1,
                  ));
              });
          } catch (e) {
            (o("WALogger").ERROR(
              $ ||
                ($ = babelHelpers.taggedTemplateLiteralLoose([
                  "Opening chat via chatOpen failed with exceptions",
                ])),
            ),
              rt != null &&
                new (o(
                  "WAWebMdLinkedDevicesWindowsXdrWamEvent",
                ).MdLinkedDevicesWindowsXdrWamEvent)({
                  mdLinkedDevicesWindowsXdrStage: o(
                    "WAWebWamEnumMdLinkedDevicesWindowsXdrStage",
                  ).MD_LINKED_DEVICES_WINDOWS_XDR_STAGE
                    .DEEPLINK_NAVIGATION_FAILURE,
                  mdXdrSessionUuid: rt,
                }).commit(),
              o("WAWebExecApiCmdHelpers").logDefaultProtocolNavigation(tt, !1));
          }
          return !0;
        }
        case "APP_OPEN": {
          var at,
            it = (at = a.data) == null ? void 0 : at.session;
          try {
            var lt;
            (o("WAWebCmd").Cmd.closeStatusViewer(),
              o("WAWebCmd").Cmd.closeActiveChat(),
              (lt = o("WAWebDrawerManager")).DrawerManager.closeDrawerLeft(),
              lt.DrawerManager.closeDrawerMid(),
              lt.DrawerManager.closeDrawerRight(),
              lt.DrawerManager.closeDrawerFullscreen(),
              o("WAWebCmd").Cmd.setActiveNavBarItem(
                o("WAWebNavBarTypes").NavBarItems.Chats,
              ),
              it != null &&
                new (o(
                  "WAWebMdLinkedDevicesWindowsXdrWamEvent",
                ).MdLinkedDevicesWindowsXdrWamEvent)({
                  mdLinkedDevicesWindowsXdrStage: o(
                    "WAWebWamEnumMdLinkedDevicesWindowsXdrStage",
                  ).MD_LINKED_DEVICES_WINDOWS_XDR_STAGE
                    .DEEPLINK_NAVIGATION_SUCCESS,
                  mdXdrSessionUuid: it,
                }).commit());
          } catch (e) {
            (o("WALogger").ERROR(
              P ||
                (P = babelHelpers.taggedTemplateLiteralLoose([
                  "Handling appOpen failed with exceptions",
                ])),
            ),
              it != null &&
                new (o(
                  "WAWebMdLinkedDevicesWindowsXdrWamEvent",
                ).MdLinkedDevicesWindowsXdrWamEvent)({
                  mdLinkedDevicesWindowsXdrStage: o(
                    "WAWebWamEnumMdLinkedDevicesWindowsXdrStage",
                  ).MD_LINKED_DEVICES_WINDOWS_XDR_STAGE
                    .DEEPLINK_NAVIGATION_FAILURE,
                  mdXdrSessionUuid: it,
                }).commit());
          }
          return !0;
        }
        case "NEW_CHAT": {
          try {
            (o("WAWebCmd").Cmd.closeStatusViewer(),
              o("WAWebDrawerManager").DrawerManager.closeDrawerLeft(),
              o("WAWebDrawerManager").DrawerManager.closeDrawerMid(),
              o("WAWebCmd").Cmd.setActiveNavBarItem(
                o("WAWebNavBarTypes").NavBarItems.Chats,
              ),
              o("WAWebDrawerManager").DrawerManager.openDrawerLeft(
                o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor()
                  ? { descriptorType: "new_chat" }
                  : B.jsx(
                      o("WAWebNewChatFlowLoadable").NewChatFlowLoadable,
                      {},
                    ),
                { focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE },
              ));
          } catch (e) {
            o("WALogger").ERROR(
              N ||
                (N = babelHelpers.taggedTemplateLiteralLoose([
                  "Opening new chat flow failed with exceptions",
                ])),
            );
          }
          return !0;
        }
        case "NEW_GROUP": {
          try {
            o("WAWebExecApiCmdNewGroup").handleNewGroupDeeplink();
          } catch (e) {
            o("WALogger")
              .ERROR(
                M ||
                  (M = babelHelpers.taggedTemplateLiteralLoose([
                    "Opening new group flow failed with exceptions",
                  ])),
              )
              .catching(r("getErrorSafe")(e))
              .sendLogs("new-group-deeplink-open-failed");
          }
          return !0;
        }
        case "NEW_CALL": {
          try {
            (o("WAWebCmd").Cmd.closeStatusViewer(),
              o("WAWebExecApiCmdNewCall").handleNewCallDeeplink(a.data));
          } catch (e) {
            o("WALogger").ERROR(
              w ||
                (w = babelHelpers.taggedTemplateLiteralLoose([
                  "Opening new call flow failed with exceptions",
                ])),
            );
          }
          return !0;
        }
        case "WORK_CONTACT_SYNC": {
          var st;
          return r("gkx")("26258") ||
            !((st = a.data) != null && st.compressedData)
            ? !1
            : (n("cr:2679") == null ||
                n("cr:2679").handleWorkContactSync(a.data.compressedData),
              !0);
        }
        case "SEND_FILE": {
          var ut;
          return (ut =
            n("cr:12407") == null ? void 0 : n("cr:12407")(a.data)) != null
            ? ut
            : !1;
        }
        case "NEWSLETTER_STATUS_DEEPLINK":
          return (
            r("JSResourceForInteraction")("WAWebNewsletterStatusExecApiCmd")
              .__setRef("WAWebExecApiCmd")
              .load()
              .then(function (e) {
                return e.execNewsletterStatusDeeplinkCmd(a.data);
              })
              .catch(function () {
                o("WALogger").ERROR(
                  A ||
                    (A = babelHelpers.taggedTemplateLiteralLoose([
                      "Failed to load or execute newsletter status deeplink handler",
                    ])),
                );
              }),
            o("WAWebExecApiCmdHelpers").submitDeepLinkOpenWamEvent({
              deepLinkType: o("WAWebWamEnumDeepLinkType").DEEP_LINK_TYPE
                .DEEP_LINK_CHANNEL_STATUS,
              isExternal: l,
            }),
            !0
          );
        case "SHARABLE_EVENT_LINK":
          return !l &&
            !o("WAWebSharableEventGatingUtils").isEventsV2OnCompanionEnabled()
            ? !1
            : (r("JSResourceForInteraction")(
                "WAWebOpenSharableEventFromLinkAction",
              )
                .__setRef("WAWebExecApiCmd")
                .load()
                .then(function (e) {
                  return e.openSharableEventFromLink(a.data.token);
                })
                .catch(function (e) {
                  o("WALogger")
                    .ERROR(
                      F ||
                        (F = babelHelpers.taggedTemplateLiteralLoose([
                          "[sharable_event] failed to load the event link handler",
                        ])),
                    )
                    .catching(r("getErrorSafe")(e))
                    .sendLogs("sharable-event-link-load-failed");
                }),
              o("WAWebExecApiCmdHelpers").submitDeepLinkOpenWamEvent({
                deepLinkType: o("WAWebWamEnumDeepLinkType").DEEP_LINK_TYPE
                  .DEEP_LINK_EVENT,
                isExternal: l,
              }),
              !0);
        case "OIDC_CALLBACK":
          return (
            o("WAWebOIDCCallbackEventBus").WAWebOIDCCallbackEventBus.trigger(
              o("WAWebOIDCCallbackEventBus").OIDCCallbackEvent.OIDC_CALLBACK,
              a.data,
            ),
            !0
          );
        case "BIZ_AI_OAUTH_CALLBACK":
          return (
            o(
              "WAWebBizAIOAuthCallbackEventBus",
            ).WAWebBizAIOAuthCallbackEventBus.trigger(
              o("WAWebBizAIOAuthCallbackEventBus").BizAIOAuthCallbackEvent
                .BIZ_AI_OAUTH_CALLBACK,
              a.data,
            ),
            !0
          );
        case "SET_ABOUT":
          return (
            o("WAWebCmd").Cmd.closeStatusViewer(),
            o("WAWebModalManager").ModalManager.open(
              B.jsx(
                o("WAWebTextStatusEditModalLoadable")
                  .TextStatusEditModalLoadable,
                {
                  entrypoint: o("WAWebAboutWamLogger").ABOUT_ENTRYPOINT_TYPE
                    .DEEP_LINK,
                },
              ),
            ),
            o("WAWebExecApiCmdHelpers").submitDeepLinkOpenWamEvent({
              deepLinkType: o("WAWebWamEnumDeepLinkType").DEEP_LINK_TYPE
                .DEEP_LINK_SET_ABOUT,
              isExternal: l,
            }),
            !0
          );
        default:
          return (a.resultType, !1);
      }
    }
    l.default = K;
  },
  226,
);
