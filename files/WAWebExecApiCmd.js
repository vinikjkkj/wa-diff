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
    "WAWebTextStatusGatingUtils",
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
    "WDSText.react",
    "asyncToGeneratorRuntime",
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
      V = U.handleClickCallLink,
      H = {
        callPopupTitle: {
          marginTop: "xw7yly9",
          marginBottom: "x1yztbdb",
          $$css: !0,
        },
      };
    function G(e, t) {
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
    function z(e, t) {
      var n =
        e != null ||
        t ===
          o("WAWebGetCTWAEligibilityFromConversion")
            .SMB_DATA_SHARING_ALLOWED_SOURCE;
      return n ? null : "WA_ME_LINK";
    }
    function j(e, t) {
      return K.apply(this, arguments);
    }
    function K() {
      return (
        (K = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n;
          try {
            n = o("WAWebWidFactory").createUserWidOrThrow(e + "@c.us");
          } catch (e) {
            o("WALogger")
              .ERROR(
                M ||
                  (M = babelHelpers.taggedTemplateLiteralLoose([
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
                w ||
                  (w = babelHelpers.taggedTemplateLiteralLoose([
                    "CALL_USER deep-link: redirecting self-call to self chat",
                  ])),
              )
              .sendLogs("calling-deep-links-self-call"),
              yield Q(n));
            return;
          }
          if (
            o("WAWebVoipOutgoingCallConsent").canStartDeepLinkCall(
              n,
              "before_ask",
            ) &&
            (yield o("WAWebVoipOutgoingCallConsent").confirmDeepLinkCall(
              n,
              t,
            )) &&
            o("WAWebVoipOutgoingCallConsent").canStartDeepLinkCall(
              n,
              "after_ask",
            ) &&
            (yield Q(n)) &&
            o("WAWebVoipOutgoingCallConsent").canStartDeepLinkCall(
              n,
              "after_ask",
            )
          )
            try {
              yield o("WAWebVoipStartCall").startWAWebVoipCall(
                n,
                t,
                o(
                  "WAWebCallUserJourneyGating",
                ).isCallUserJourneyLoggingEnabled()
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
                  A ||
                    (A = babelHelpers.taggedTemplateLiteralLoose([
                      "CALL_USER deep-link: startWAWebVoipCall failed",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("calling-deep-link-start-call-failed");
            }
        })),
        K.apply(this, arguments)
      );
    }
    function Q(e) {
      return X.apply(this, arguments);
    }
    function X() {
      return (
        (X = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          try {
            var t = yield o("WAWebFindChatAction").findOrCreateLatestChat(
                e,
                "callUserDeeplink",
              ),
              n = t.chat;
            return (
              yield o("WAWebCmd").Cmd.openChatAt({
                chat: n,
                msgContext: null,
                chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint
                  .Deeplink,
              }),
              !0
            );
          } catch (e) {
            return (
              o("WALogger")
                .ERROR(
                  F ||
                    (F = babelHelpers.taggedTemplateLiteralLoose([
                      "CALL_USER deep-link: failed to open chat",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("calling-deep-link-open-chat-failed"),
              !1
            );
          }
        })),
        X.apply(this, arguments)
      );
    }
    function Y(e) {
      var t,
        a = e.cmdData,
        i = e.isCallLinkCreationJoin,
        l = e.isExternal,
        u = e.preserveAttribution,
        M = e.sessionId;
      switch (
        (a.resultType !== "BRAZIL_PIX_HOME" &&
          o(
            "WAWebBrPixPaymentsHomeDeepLink",
          ).cancelPendingBrPixPaymentsHomeDeepLink(),
        a.resultType)
      ) {
        case "GROUP_INVITE": {
          var w;
          o("WAWebCmd").Cmd.closeStatusViewer();
          var A = a.data;
          return (
            o("WAWebModalManager").ModalManager.open(
              B.jsx(
                o("WAWebGroupInviteLinkModalLoadable.react")
                  .WAWebGroupInviteLinkModalLoadable,
                { groupCode: A.code, source: "invite_link" },
              ),
            ),
            o("WAWebExecApiCmdHelpers").submitDeepLinkOpenWamEvent({
              deepLinkType: o("WAWebWamEnumDeepLinkType").DEEP_LINK_TYPE
                .DEEP_LINK_GROUP_INVITE,
              isExternal: l,
              campaign: (w = A.utm) == null ? void 0 : w.campaign,
            }),
            !0
          );
        }
        case "CATALOG": {
          o("WAWebCmd").Cmd.closeStatusViewer();
          var F = a.data,
            O = F.catalogOwnerJid,
            W = F.partnertoken,
            U = F.utm;
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
          var K = a.data,
            Q = K.businessOwnerJid,
            X = K.partnertoken,
            Y = K.productId,
            J = K.utm;
          return (
            o("WAWebExecApiCmdHelpers").externalCtxAuthoriseWAChatIfEnabled({
              chatId: o("WAWebWidFactory").createWid(Q),
              deepLinkType: a.resultType,
              isExternal: l,
              partnerToken: X,
            }),
            o("WAWebExecApiCmdHelpers").openChatAndProduct(Q, Y, J),
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
          var Z = a.data,
            ee = Z.attachmentUris,
            te = Z.conversionTuple,
            ne = Z.ctwaContextLinkData,
            re = Z.customUrl,
            oe = Z.fromDefaultProtocol,
            ae = Z.lid,
            ie = Z.phone,
            le = Z.text,
            se = Z.type,
            ue = Z.username,
            ce = Z.utm,
            de = null;
          (te == null ? void 0 : te.conversionSource) === "sharesheet" &&
            (de = ae);
          var me = re != null || se === "business_profile",
            pe = ue != null;
          if (!r("isStringNullOrEmpty")(ie) || me || pe) {
            var _e = function (t) {
                var e = t.chat,
                  n = t.widLookupMethod;
                te &&
                  o(
                    "WAWebCTWATrackingPayloadUtils",
                  ).handleChatConversationOpenedWithNewMessage(e, te);
                var r = n === "customUrl";
                (r &&
                  (o("WAWebCustomUrlLogEvents").logClickOnCustomUrl(e),
                  o("WAWebCustomUrlLogEvents").logMessageSentByCustomUrl(e)),
                  ce && o("WAWebUpdateUtmAction").addUtmToChat(e.id, ce),
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
                  le && (e.urlText = !0),
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
                var i = Z.signupId;
                if (
                  i != null &&
                  ie != null &&
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
                      ie,
                      i,
                      (s = Z.conversionTuple) == null
                        ? void 0
                        : s.conversionSource,
                    ));
                }
                o("WAWebExecApiCmdHelpers").logDefaultProtocolNavigation(
                  oe,
                  !0,
                );
              },
              fe =
                M != null
                  ? {
                      handleOnce: function () {
                        new (o(
                          "WAWebDeepLinkMsgSentWamEvent",
                        ).DeepLinkMsgSentWamEvent)({
                          deepLinkAction: o("WAWebWamEnumDeepLinkAction")
                            .DEEP_LINK_ACTION.MSG_SENT,
                          deepLinkSessionId: M,
                        }).commit();
                      },
                    }
                  : void 0,
              ge = pe
                ? {
                    deepLinkHasPhoneNumber: !r("isStringNullOrEmpty")(ie),
                    deepLinkHasText: !r("isStringNullOrEmpty")(le),
                    deepLinkHasUsername: !0,
                    deepLinkHasUsernamePin:
                      !r("isStringNullOrEmpty")(Z.usernameKey) ||
                      Z.invalidUsernameKey === !0,
                    deepLinkSessionId: M,
                  }
                : void 0;
            (o("WAWebModalManager").ModalManager.open(
              B.jsx(o("WAWebOpenChatFlow.react").OpenChatFlow, {
                target: o("WAWebExecApiCmdHelpers").getOpenChatFlowProps(Z),
                msgText: le,
                onSuccess: _e,
                onError: function () {
                  return o(
                    "WAWebExecApiCmdHelpers",
                  ).logDefaultProtocolNavigation(oe, !1);
                },
                ctwaContextLinkData: ne,
                sendLogAttributes: fe,
                deepLinkLoggingData: ge,
                startChatContextEntryPoint: z(
                  ne,
                  te == null ? void 0 : te.conversionSource,
                ),
              }),
              { transition: "modal-flow" },
            ),
              o("WAWebExecApiCmdHelpers").submitDeepLinkOpenWamEvent({
                deepLinkType: ne
                  ? o("WAWebWamEnumDeepLinkType").DEEP_LINK_TYPE.DEEP_LINK_CTWA
                  : o("WAWebWamEnumDeepLinkType").DEEP_LINK_TYPE.DEEP_LINK_CHAT,
                isExternal: l,
                deepLinkSessionId: M,
                campaign: ce == null ? void 0 : ce.campaign,
              }));
          } else {
            var he = function (t) {
              if (
                (te == null ? void 0 : te.conversionSource) === "sharesheet"
              ) {
                var e = { msgText: le, urlText: !0 };
                (t && (e.attachments = t),
                  de != null && de.length > 0 && (e.preSelectedContactLid = de),
                  o("WAWebModalManager").ModalManager.open(
                    B.jsx(
                      o("WAWebSendMsgModalImplLoadable")
                        .SendMsgModalImplLoadable,
                      babelHelpers.extends({}, e),
                    ),
                    { transition: "modal-flow" },
                  ));
              } else {
                var n = { msgText: le, urlText: !0 };
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
            ee != null && ee.length > 0
              ? o("WAWebExecApiCmdHelpers")
                  .downloadAttachments(ee)
                  .then(function (e) {
                    he(e);
                  })
                  .finally(r("WAWebNoop"))
              : he();
            var ye =
              (te == null ? void 0 : te.conversionSource) === "sharesheet"
                ? o("WAWebWamEnumDeepLinkType").DEEP_LINK_TYPE
                    .DEEP_LINK_SHARESHEET
                : o("WAWebWamEnumDeepLinkType").DEEP_LINK_TYPE
                    .DEEP_LINK_MSG_FORWARD;
            o("WAWebExecApiCmdHelpers").submitDeepLinkOpenWamEvent({
              deepLinkType: ye,
              isExternal: l,
              deepLinkSessionId: void 0,
              campaign: ce == null ? void 0 : ce.campaign,
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
          var Ce = a.data.entrypointType;
          return (
            o(
              "WAWebCommunityCreationFlowMetricUtils",
            ).UiCommunityCreationAction.startSession(
              o(
                "WAWebCommunityCreationFlowMetricUtils",
              ).getDeeplinkEntrypointType(Ce),
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
          var be = o("WAWebFaqUrl").getAvatarFaqUrl();
          return (window.location.replace(be), !0);
        }
        case "ADVERTISE": {
          if (!o("WAWebMobilePlatforms").isSMB())
            return (
              o("WALogger")
                .WARN(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "[API] ",
                      " command rejected: not SMB",
                    ])),
                  a.resultType,
                )
                .sendLogs("ads-api-command-rejected"),
              !1
            );
          var ve = o(
            "WAWebActiveAccountInfoContext.react",
          ).getActiveAccountInfo();
          if (ve == null || ve === "not-linked")
            return (
              o("WALogger")
                .WARN(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "[API] ",
                      " command rejected: active account state=",
                      "",
                    ])),
                  a.resultType,
                  ve,
                )
                .sendLogs("ads-api-command-rejected"),
              !1
            );
          var Se = a.data,
            Re = Se.campaignId,
            Le = Se.campaignType;
          return (
            o("WAWebChatlistUtils").handleAdCreation({
              adCreationUrlInput: {
                activeAccountInfo: ve,
                sourceAdCreation: o(
                  "WAWebBusinessAdCreationUtils",
                ).getAdCreationTypeFromCampaignType(Le),
              },
              lwiEntryPoint: o(
                "WAWebBizNativeAdsEntryPointUtils",
              ).getLwiEntryPointFromCampaignType(Le),
              waCampaignId: Re,
            }),
            !0
          );
        }
        case "MANAGE_ADS": {
          if (!o("WAWebMobilePlatforms").isSMB())
            return (
              o("WALogger")
                .WARN(
                  m ||
                    (m = babelHelpers.taggedTemplateLiteralLoose([
                      "[API] ",
                      " command rejected: not SMB",
                    ])),
                  a.resultType,
                )
                .sendLogs("ads-api-command-rejected"),
              !1
            );
          var Ee = o(
            "WAWebActiveAccountInfoContext.react",
          ).getActiveAccountInfo();
          if (Ee == null || Ee === "not-linked")
            return (
              o("WALogger")
                .WARN(
                  p ||
                    (p = babelHelpers.taggedTemplateLiteralLoose([
                      "[API] ",
                      " command rejected: active account state=",
                      "",
                    ])),
                  a.resultType,
                  Ee,
                )
                .sendLogs("ads-api-command-rejected"),
              !1
            );
          switch (a.trigger) {
            case "chatListBanner":
              o("WAWebChatlistUtils").handleManageAds({
                activeAccountInfo: Ee,
                entryPoint: o("WAWebWamEnumLwiEntryPoint").LWI_ENTRY_POINT
                  .SMB_CHAT_LIST_BANNER_MANAGE_AD,
                sourceManageAdsType:
                  "whatsapp_smb_web_manage_ads_chat_list_banner",
              });
              break;
            default:
              (a.trigger,
                o("WAWebChatlistUtils").handleManageAds({
                  activeAccountInfo: Ee,
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
            var ke = o("WAWebUserUtils").getMeUserOrThrow();
            o("WAWebOpenChatWithContactAction").openChatWithContact({
              chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.Deeplink,
              findChatOrigin: "newChatFlow",
              targetId: ke,
            });
          } catch (e) {
            o("WALogger").ERROR(
              _ ||
                (_ = babelHelpers.taggedTemplateLiteralLoose([
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
          var Ie =
            a.data.campaignType === "chatlist_banner"
              ? "chatlist_banner"
              : a.data.campaignType === "aymt_email"
                ? "aymt_email"
                : a.data.campaignType === "aymt_ads_manager_notification"
                  ? "aymt_ads_manager_notification"
                  : "chatlist_banner";
          return o("WAWebBizFrontendGatingUtils").isPixOnWebEnabled()
            ? (o("WAWebAddEditPixFeature").openPixCredentialManagementModal(
                Ie,
                Ie,
              ),
              !0)
            : (o("WAWebPrimaryFeaturesModel").PrimaryFeatures.on(
                "change:customPaymentMethodsSyncSupport",
                function () {
                  if (o("WAWebBizFrontendGatingUtils").isPixOnWebEnabled())
                    return (
                      o(
                        "WAWebAddEditPixFeature",
                      ).openPixCredentialManagementModal(Ie, Ie),
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
          var Te = a.data.code;
          o("WAWebExecApiCmdHelpers").submitDeepLinkOpenWamEvent({
            deepLinkType: o("WAWebWamEnumDeepLinkType").DEEP_LINK_TYPE
              .DEEP_LINK_PAYMENT_BR_ADD_PIX_KEY,
            isExternal: l,
          });
          var De = function () {
            return o("WAWebBrAddPixKeyDeepLinkGating").isSelfInBrazil()
              ? o("WAWebBrAddPixKeyDeepLinkGating").isAddPixKeyDeepLinkEnabled()
                ? Te != null
                  ? (o(
                      "WAWebBrAddPixKeyCodeLinkLoadable",
                    ).openAddPixKeyCodeLinkLazily(Te),
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
          ).openWhenPixOnWebAvailable(De);
        }
        case "EDIT_PROFILE_PICTURE": {
          try {
            o("WAWebCmd").Cmd.closeStatusViewer();
            var xe = o("WAWebUserUtils").getMeUserOrThrow(),
              $e = o("WAWebContactCollection").ContactCollection.assertGet(xe),
              Pe = o(
                "WAWebProfilePicThumbCollection",
              ).ProfilePicThumbCollection.assertGet(xe);
            return (
              o("WAWebDrawerManager").DrawerManager.openDrawerLeft(
                B.jsx(n("cr:1923"), {
                  profilePicThumb: Pe,
                  contact: $e,
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
              f ||
                (f = babelHelpers.taggedTemplateLiteralLoose([
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
                g ||
                  (g = babelHelpers.taggedTemplateLiteralLoose([
                    "PROFILE_USERNAME deep link - username feature disabled",
                  ])),
              ),
              !1
            );
          try {
            o("WAWebCmd").Cmd.closeStatusViewer();
            var Ne = o("WAWebUserUtils").getMeLidUserOrThrow(),
              Me = o("WAWebContactCollection").ContactCollection.assertGet(Ne),
              we = o("WAWebUsernameTypes").serializeMaybeUsername(Me.username);
            return (
              r("isStringNullOrEmpty")(we)
                ? (o("WAWebModalManager").ModalManager.open(
                    B.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
                      onOK: o("WAWebModalManager").closeModalManager,
                      children: s._(
                        /*BTDS*/ "You can set up your username from your primary device.",
                      ),
                    }),
                  ),
                  o("WALogger").LOG(
                    y ||
                      (y = babelHelpers.taggedTemplateLiteralLoose([
                        "PROFILE_USERNAME deep link - use primary device alert",
                      ])),
                  ))
                : (o("WAWebDrawerManager").DrawerManager.openDrawerLeft(
                    B.jsx(r("WAWebUsernameManagementDrawerLoadable"), {
                      contactId: Me.id,
                      username: we,
                    }),
                    {
                      focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
                    },
                  ),
                  o("WALogger").LOG(
                    h ||
                      (h = babelHelpers.taggedTemplateLiteralLoose([
                        "PROFILE_USERNAME deep link - opened username drawer",
                      ])),
                  )),
              !0
            );
          } catch (e) {
            return (
              o("WALogger").ERROR(
                C ||
                  (C = babelHelpers.taggedTemplateLiteralLoose([
                    "PROFILE_USERNAME deep link failed with exception",
                  ])),
              ),
              !1
            );
          }
        }
        case "BROADCAST": {
          var Ae = a.data.feature;
          switch (Ae) {
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
          var Fe = a.data.postType;
          switch (Fe) {
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
          var Oe = a.data.phone,
            Be = a.data.video === !0;
          return (
            o("WAWebExecApiCmdHelpers").submitDeepLinkOpenWamEvent({
              deepLinkType: o("WAWebWamEnumDeepLinkType").DEEP_LINK_TYPE
                .DEEP_LINK_CALL,
              isExternal: l,
            }),
            o("WAWebVoipGatingUtils").isCallingEnabled()
              ? Oe == null
                ? (o("WALogger")
                    .LOG(
                      v ||
                        (v = babelHelpers.taggedTemplateLiteralLoose([
                          "CALL_USER deep-link missing phone",
                        ])),
                    )
                    .sendLogs("calling-deep-link-missing-phone"),
                  o("WAWebModalManager").ModalManager.open(
                    B.jsxs(o("WAWebConfirmPopup.react").ConfirmPopup, {
                      onOK: o("WAWebModalManager").closeModalManager,
                      children: [
                        B.jsx(r("WDSText.react"), {
                          type: "Headline2",
                          colorName: "contentDefault",
                          textAlign: "center",
                          xstyle: H.callPopupTitle,
                          children: s._(/*BTDS*/ "Couldn't place the call"),
                        }),
                        B.jsx(r("WDSText.react"), {
                          type: "Body2",
                          colorName: "contentDeemphasized",
                          textAlign: "center",
                          children: s._(
                            /*BTDS*/ "The call link appears to be invalid. Please check it and try again.",
                          ),
                        }),
                      ],
                    }),
                  ),
                  !0)
                : (j(Oe, Be), !0)
              : (o("WAWebModalManager").ModalManager.open(
                  B.jsxs(o("WAWebConfirmPopup.react").ConfirmPopup, {
                    onOK: o("WAWebModalManager").closeModalManager,
                    children: [
                      B.jsx(r("WDSText.react"), {
                        type: "Headline2",
                        colorName: "contentDefault",
                        textAlign: "center",
                        xstyle: H.callPopupTitle,
                        children: s._(/*BTDS*/ "Your call can't be completed"),
                      }),
                      B.jsx(r("WDSText.react"), {
                        type: "Body2",
                        colorName: "contentDeemphasized",
                        textAlign: "center",
                        children: s._(
                          /*BTDS*/ "This feature isn't supported on your device. Log into WhatsApp on your phone and try again.",
                        ),
                      }),
                    ],
                  }),
                ),
                o("WALogger")
                  .LOG(
                    b ||
                      (b = babelHelpers.taggedTemplateLiteralLoose([
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
          var We = {
            entryPoint: o("WAWebWamEnumCatalogEntryPoint").CATALOG_ENTRY_POINT
              .CATALOG_ENTRY_POINT_DEEPLINK,
            isInitialStep: !0,
          };
          return (
            (a.data.campaignType === "chat_psa" ||
              a.data.campaignType === "banner") &&
              (We.promotionCampaign = "video-upload"),
            o("WAWebCatalogManagementFlowLoadable").openCatalogManagementFlow(
              We,
            ),
            !0
          );
        }
        case "CATALOG_LINKING_CHAT_PSA": {
          var qe = a.data.deepLinkType;
          return (
            o("WAWebExecApiCmdHelpers").submitDeepLinkOpenWamEvent({
              deepLinkType: qe,
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
                  S ||
                    (S = babelHelpers.taggedTemplateLiteralLoose([
                      "Hatch pairing deep-link not supported on companion device",
                    ])),
                )
                .sendLogs("hatch-pairing-not-supported-on-companion"),
              !0
            );
          o("WAWebCmd").Cmd.closeStatusViewer();
          var Ue = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = yield o("WAWebFindChatAction").findOrCreateLatestChat(
                    o("WAWebBotUtils").HATCH_BOT_FBID_WID,
                    "hatchDeeplink",
                  ),
                  n = t.chat;
                (yield o("WAWebCmd").Cmd.openChatAt({
                  chat: n,
                  msgContext: null,
                  chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint
                    .Deeplink,
                }),
                  e != null &&
                    (o(
                      "WAWebSendBotRequestWelcomeAction",
                    ).sendBotRequestWelcome(n, e),
                    o("WAWebBotGenTypingIndicatorMsg").showBotTypingIndicator(
                      n,
                    )));
              },
            );
            return function (n) {
              return e.apply(this, arguments);
            };
          })();
          return (Ue(a.data.token), !0);
        }
        case "UGC_BOT": {
          o("WAWebCmd").Cmd.closeStatusViewer();
          var Ve = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = o("WAWebWidFactory").createUserWidOrThrow(e + "@bot"),
                  n = yield o("WAWebFindChatAction").findOrCreateLatestChat(
                    t,
                    "ugcBotDeeplink",
                  ),
                  r = n.chat;
                yield o("WAWebCmd").Cmd.openChatAt({
                  chat: r,
                  msgContext: null,
                  chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint
                    .Deeplink,
                });
              },
            );
            return function (n) {
              return e.apply(this, arguments);
            };
          })();
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
                    R ||
                      (R = babelHelpers.taggedTemplateLiteralLoose([
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
            Ge == null || Ge(a, G(l, i)),
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
                      L ||
                        (L = babelHelpers.taggedTemplateLiteralLoose([
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
                        E ||
                          (E = babelHelpers.taggedTemplateLiteralLoose([
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
                  k ||
                    (k = babelHelpers.taggedTemplateLiteralLoose([
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
              I ||
                (I = babelHelpers.taggedTemplateLiteralLoose([
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
              T ||
                (T = babelHelpers.taggedTemplateLiteralLoose([
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
              D ||
                (D = babelHelpers.taggedTemplateLiteralLoose([
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
                x ||
                  (x = babelHelpers.taggedTemplateLiteralLoose([
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
              $ ||
                ($ = babelHelpers.taggedTemplateLiteralLoose([
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
                  P ||
                    (P = babelHelpers.taggedTemplateLiteralLoose([
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
                      N ||
                        (N = babelHelpers.taggedTemplateLiteralLoose([
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
          return o("WAWebTextStatusGatingUtils").sendTextStatusEnabled()
            ? (o("WAWebCmd").Cmd.closeStatusViewer(),
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
              !0)
            : !1;
        default:
          return (a.resultType, !1);
      }
    }
    l.default = Y;
  },
  226,
);
