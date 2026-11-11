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
    "WAWebUserPrefsMeUser",
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
    "cr:2679",
    "cr:38809",
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
      B,
      W = B || (B = o("react")),
      q = (e = n("cr:17104")) != null ? e : {},
      U = q.handleClickCallLink,
      V = {
        callPopupTitle: {
          marginTop: "xw7yly9",
          marginBottom: "x1yztbdb",
          $$css: !0,
        },
      };
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
    function z(e, t) {
      return j.apply(this, arguments);
    }
    function j() {
      return (
        (j = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n;
          try {
            n = o("WAWebWidFactory").createUserWidOrThrow(e + "@c.us");
          } catch (e) {
            o("WALogger")
              .ERROR(
                w ||
                  (w = babelHelpers.taggedTemplateLiteralLoose([
                    "CALL_USER deep-link: unusable phone number",
                  ])),
              )
              .catching(r("getErrorSafe")(e))
              .sendLogs("calling-deep-link-bad-phone");
            return;
          }
          if (o("WAWebUserPrefsMeUser").isMeAccount(n)) {
            (o("WALogger")
              .LOG(
                A ||
                  (A = babelHelpers.taggedTemplateLiteralLoose([
                    "CALL_USER deep-link: redirecting self-call to self chat",
                  ])),
              )
              .sendLogs("calling-deep-links-self-call"),
              yield K(n));
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
            (yield K(n)) &&
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
                  F ||
                    (F = babelHelpers.taggedTemplateLiteralLoose([
                      "CALL_USER deep-link: startWAWebVoipCall failed",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("calling-deep-link-start-call-failed");
            }
        })),
        j.apply(this, arguments)
      );
    }
    function K(e) {
      return Q.apply(this, arguments);
    }
    function Q() {
      return (
        (Q = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
                  O ||
                    (O = babelHelpers.taggedTemplateLiteralLoose([
                      "CALL_USER deep-link: failed to open chat",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("calling-deep-link-open-chat-failed"),
              !1
            );
          }
        })),
        Q.apply(this, arguments)
      );
    }
    function X(e) {
      var t = e.cmdData,
        a = e.isCallLinkCreationJoin,
        i = e.isExternal,
        l = e.preserveAttribution,
        w = e.sessionId;
      switch (
        (t.resultType !== "BRAZIL_PIX_HOME" &&
          o(
            "WAWebBrPixPaymentsHomeDeepLink",
          ).cancelPendingBrPixPaymentsHomeDeepLink(),
        t.resultType)
      ) {
        case "GROUP_INVITE": {
          var A;
          o("WAWebCmd").Cmd.closeStatusViewer();
          var F = t.data;
          return (
            o("WAWebModalManager").ModalManager.open(
              W.jsx(
                o("WAWebGroupInviteLinkModalLoadable.react")
                  .WAWebGroupInviteLinkModalLoadable,
                { groupCode: F.code, source: "invite_link" },
              ),
            ),
            o("WAWebExecApiCmdHelpers").submitDeepLinkOpenWamEvent({
              deepLinkType: o("WAWebWamEnumDeepLinkType").DEEP_LINK_TYPE
                .DEEP_LINK_GROUP_INVITE,
              isExternal: i,
              campaign: (A = F.utm) == null ? void 0 : A.campaign,
            }),
            !0
          );
        }
        case "CATALOG": {
          o("WAWebCmd").Cmd.closeStatusViewer();
          var O = t.data,
            B = O.catalogOwnerJid,
            q = O.partnertoken,
            j = O.utm;
          return (
            o("WAWebExecApiCmdHelpers").externalCtxAuthoriseWAChatIfEnabled({
              chatId: o("WAWebWidFactory").createWid(B),
              deepLinkType: t.resultType,
              isExternal: i,
              partnerToken: q,
            }),
            o("WAWebExecApiCmdHelpers").openChatAndCatalog(B, j),
            o("WAWebExecApiCmdHelpers").submitDeepLinkOpenWamEvent({
              deepLinkType: o("WAWebWamEnumDeepLinkType").DEEP_LINK_TYPE
                .DEEP_LINK_CATALOG,
              isExternal: i,
            }),
            !0
          );
        }
        case "PRODUCT": {
          o("WAWebCmd").Cmd.closeStatusViewer();
          var K = t.data,
            Q = K.businessOwnerJid,
            X = K.partnertoken,
            Y = K.productId,
            J = K.utm;
          return (
            o("WAWebExecApiCmdHelpers").externalCtxAuthoriseWAChatIfEnabled({
              chatId: o("WAWebWidFactory").createWid(Q),
              deepLinkType: t.resultType,
              isExternal: i,
              partnerToken: X,
            }),
            o("WAWebExecApiCmdHelpers").openChatAndProduct(Q, Y, J),
            o("WAWebExecApiCmdHelpers").submitDeepLinkOpenWamEvent({
              deepLinkType: o("WAWebWamEnumDeepLinkType").DEEP_LINK_TYPE
                .DEEP_LINK_PRODUCT,
              isExternal: i,
            }),
            !0
          );
        }
        case "MSG_SEND": {
          o("WAWebCmd").Cmd.closeStatusViewer();
          var Z = t.data,
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
            var _e = function (n) {
                var e = n.chat,
                  r = n.widLookupMethod;
                te &&
                  o(
                    "WAWebCTWATrackingPayloadUtils",
                  ).handleChatConversationOpenedWithNewMessage(e, te);
                var a = r === "customUrl";
                (a &&
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
                    deepLinkType: t.resultType,
                    isExternal: i,
                    partnerToken: t.data.partnertoken,
                  }),
                  le && (e.urlText = !0),
                  (e.urlNumber = !0),
                  a &&
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
                        : W.jsx(
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
                var l = Z.signupId;
                if (
                  l != null &&
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
                      l,
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
                w != null
                  ? {
                      handleOnce: function () {
                        new (o(
                          "WAWebDeepLinkMsgSentWamEvent",
                        ).DeepLinkMsgSentWamEvent)({
                          deepLinkAction: o("WAWebWamEnumDeepLinkAction")
                            .DEEP_LINK_ACTION.MSG_SENT,
                          deepLinkSessionId: w,
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
                    deepLinkSessionId: w,
                  }
                : void 0;
            (o("WAWebModalManager").ModalManager.open(
              W.jsx(o("WAWebOpenChatFlow.react").OpenChatFlow, {
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
                startChatContextEntryPoint: G(
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
                isExternal: i,
                deepLinkSessionId: w,
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
                    W.jsx(
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
                    W.jsx(
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
              isExternal: i,
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
              W.jsx(r("WAWebNewCommunityInfoDrawerLoadable"), {}),
              { focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE },
            ));
          var Ce = t.data.entrypointType;
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
              isExternal: i,
            }),
            !0
          );
        }
        case "NEWSLETTER":
          return (
            o("WAWebCmd").Cmd.closeStatusViewer(),
            o("WAWebNewsletterExecApiCmd").execNewsletterApiCmd(t.data),
            o("WAWebExecApiCmdHelpers").submitDeepLinkOpenWamEvent({
              deepLinkType: o("WAWebWamEnumDeepLinkType").DEEP_LINK_TYPE
                .DEEP_LINK_CHANNEL,
              isExternal: i,
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
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "[API] ",
                      " command rejected: not SMB",
                    ])),
                  t.resultType,
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
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "[API] ",
                      " command rejected: active account state=",
                      "",
                    ])),
                  t.resultType,
                  ve,
                )
                .sendLogs("ads-api-command-rejected"),
              !1
            );
          var Se = t.data,
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
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "[API] ",
                      " command rejected: not SMB",
                    ])),
                  t.resultType,
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
                  m ||
                    (m = babelHelpers.taggedTemplateLiteralLoose([
                      "[API] ",
                      " command rejected: active account state=",
                      "",
                    ])),
                  t.resultType,
                  Ee,
                )
                .sendLogs("ads-api-command-rejected"),
              !1
            );
          switch (t.trigger) {
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
              (t.trigger,
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
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
                  "Opening self chat failed with exceptions",
                ])),
            );
          }
          return !0;
        }
        case "BRAZIL_PAYMENTS": {
          if (
            t.data.subType !==
            o("WAWebApi").BrazilPaymentResultSubtype.PIX_ONBOARDING
          )
            return !1;
          var Ie =
            t.data.campaignType === "chatlist_banner"
              ? "chatlist_banner"
              : t.data.campaignType === "aymt_email"
                ? "aymt_email"
                : t.data.campaignType === "aymt_ads_manager_notification"
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
              isExternal: i,
            }),
            o("WAWebBrPixPaymentsHomeDeepLink").openBrPixPaymentsHomeDeepLink(),
            !0
          );
        case "BRAZIL_ADD_PIX_KEY": {
          var Te = t.data.code;
          o("WAWebExecApiCmdHelpers").submitDeepLinkOpenWamEvent({
            deepLinkType: o("WAWebWamEnumDeepLinkType").DEEP_LINK_TYPE
              .DEEP_LINK_PAYMENT_BR_ADD_PIX_KEY,
            isExternal: i,
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
                W.jsx(n("cr:1923"), {
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
                isExternal: i,
              }),
              !0
            );
          } catch (e) {
            o("WALogger").ERROR(
              _ ||
                (_ = babelHelpers.taggedTemplateLiteralLoose([
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
                f ||
                  (f = babelHelpers.taggedTemplateLiteralLoose([
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
                    W.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
                      onOK: o("WAWebModalManager").closeModalManager,
                      children: s._(
                        /*BTDS*/ "You can set up your username from your primary device.",
                      ),
                    }),
                  ),
                  o("WALogger").LOG(
                    h ||
                      (h = babelHelpers.taggedTemplateLiteralLoose([
                        "PROFILE_USERNAME deep link - use primary device alert",
                      ])),
                  ))
                : (o("WAWebDrawerManager").DrawerManager.openDrawerLeft(
                    W.jsx(r("WAWebUsernameManagementDrawerLoadable"), {
                      contactId: Me.id,
                      username: we,
                    }),
                    {
                      focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
                    },
                  ),
                  o("WALogger").LOG(
                    g ||
                      (g = babelHelpers.taggedTemplateLiteralLoose([
                        "PROFILE_USERNAME deep link - opened username drawer",
                      ])),
                  )),
              !0
            );
          } catch (e) {
            return (
              o("WALogger").ERROR(
                y ||
                  (y = babelHelpers.taggedTemplateLiteralLoose([
                    "PROFILE_USERNAME deep link failed with exception",
                  ])),
              ),
              !1
            );
          }
        }
        case "BROADCAST": {
          var Ae = t.data.feature;
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
          var Fe = t.data.postType;
          switch (Fe) {
            case o("WAWebStatusApiParse").StatusPostType.Text:
              o("WAWebModalManager").ModalManager.openMedia(
                W.jsx(
                  o("WAWebCreateTextStatusFlowLoadable")
                    .CreateTextStatusFlowLoadable,
                  {},
                ),
                { transition: "status-modal" },
              );
              break;
            case o("WAWebStatusApiParse").StatusPostType.Media:
              o("WAWebModalManager").ModalManager.open(
                W.jsx(
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
          var Oe = t.data.phone,
            Be = t.data.video === !0;
          return (
            o("WAWebExecApiCmdHelpers").submitDeepLinkOpenWamEvent({
              deepLinkType: o("WAWebWamEnumDeepLinkType").DEEP_LINK_TYPE
                .DEEP_LINK_CALL,
              isExternal: i,
            }),
            o("WAWebVoipGatingUtils").isCallingEnabled()
              ? Oe == null
                ? (o("WALogger")
                    .LOG(
                      b ||
                        (b = babelHelpers.taggedTemplateLiteralLoose([
                          "CALL_USER deep-link missing phone",
                        ])),
                    )
                    .sendLogs("calling-deep-link-missing-phone"),
                  o("WAWebModalManager").ModalManager.open(
                    W.jsxs(o("WAWebConfirmPopup.react").ConfirmPopup, {
                      onOK: o("WAWebModalManager").closeModalManager,
                      children: [
                        W.jsx(r("WDSText.react"), {
                          type: "Headline2",
                          colorName: "contentDefault",
                          textAlign: "center",
                          xstyle: V.callPopupTitle,
                          children: s._(/*BTDS*/ "Couldn't place the call"),
                        }),
                        W.jsx(r("WDSText.react"), {
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
                : (z(Oe, Be), !0)
              : (o("WAWebModalManager").ModalManager.open(
                  W.jsxs(o("WAWebConfirmPopup.react").ConfirmPopup, {
                    onOK: o("WAWebModalManager").closeModalManager,
                    children: [
                      W.jsx(r("WDSText.react"), {
                        type: "Headline2",
                        colorName: "contentDefault",
                        textAlign: "center",
                        xstyle: V.callPopupTitle,
                        children: s._(/*BTDS*/ "Your call can't be completed"),
                      }),
                      W.jsx(r("WDSText.react"), {
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
                    C ||
                      (C = babelHelpers.taggedTemplateLiteralLoose([
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
                isExternal: i,
              }),
              !0)
            : !1;
        case "OPEN_CATALOG": {
          if (i || !o("WAWebMobilePlatforms").isSMB()) return !1;
          var We = {
            entryPoint: o("WAWebWamEnumCatalogEntryPoint").CATALOG_ENTRY_POINT
              .CATALOG_ENTRY_POINT_DEEPLINK,
            isInitialStep: !0,
          };
          return (
            (t.data.campaignType === "chat_psa" ||
              t.data.campaignType === "banner") &&
              (We.promotionCampaign = "video-upload"),
            o("WAWebCatalogManagementFlowLoadable").openCatalogManagementFlow(
              We,
            ),
            !0
          );
        }
        case "CATALOG_LINKING_CHAT_PSA": {
          var qe = t.data.deepLinkType;
          return (
            o("WAWebExecApiCmdHelpers").submitDeepLinkOpenWamEvent({
              deepLinkType: qe,
              isExternal: i,
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
                W.jsx(r("WAWebHatchPairingUnavailableDialog.react"), {}),
              ),
              o("WALogger")
                .LOG(
                  v ||
                    (v = babelHelpers.taggedTemplateLiteralLoose([
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
          return (Ue(t.data.token), !0);
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
          return (Ve(t.data.fbid), !0);
        }
        case "STICKER_PACK": {
          var He = t.data.url;
          return (
            o("WAWebDrawerManager").DrawerManager.openDrawerRight(
              W.jsx(
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
          !i &&
            a !== !0 &&
            r("JSResourceForInteraction")("WAWebPreCallUserJourneyLogger")
              .__setRef("WAWebExecApiCmd")
              .load()
              .then(function (e) {
                return new e.PreCallUserJourneyLogger().clickCallLinkFromChat();
              })
              .catch(function (e) {
                o("WALogger")
                  .ERROR(
                    S ||
                      (S = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: failed to log click_call_link for an in-app call link",
                      ])),
                  )
                  .catching(r("getErrorSafe")(e))
                  .sendLogs("voip-click-call-link-log-failed");
              });
          var Ge = U;
          return (
            Ge == null &&
              n("cr:9382") != null &&
              (Ge = n("cr:9382").handleClickCallLink),
            Ge == null || Ge(t, H(i, a)),
            !0
          );
        }
        case "CTWA_ADS_DATA_SHARING": {
          if (!o("WAWebMobilePlatforms").isSMB()) return !1;
          var ze = t.source,
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
              W.jsx(r("WAWebSMBDataSharingDrawer.react"), {
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
                      R ||
                        (R = babelHelpers.taggedTemplateLiteralLoose([
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
              isExternal: i,
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
          var Qe = t.data.source,
            Xe;
          switch (Qe) {
            case "qp_chat_list_banner":
              Xe = o("WAWebWamEnumEntryPoint").ENTRY_POINT.CHAT_BANNER;
              break;
            default:
              Xe = o("WAWebWamEnumEntryPoint").ENTRY_POINT.DEEP_LINK;
              break;
          }
          var Ye = l !== !0;
          Ye &&
            o(
              "WAWebBusinessBroadcastUserJourneyLogger",
            ).BusinessBroadcastUserJourneyLogger.setDeeplinkAttribution(
              Xe,
              t.data.moment,
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
                W.jsx(
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
            i
              ? o("WAWebReleaseToEventLoop")
                  .releaseToEventLoop()
                  .then(Ze)
                  .catch(function (e) {
                    o("WALogger")
                      .ERROR(
                        L ||
                          (L = babelHelpers.taggedTemplateLiteralLoose([
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
        case "CALL_ACTIVE": {
          if (
            !o("WAWebVoipGatingUtils").isDeviceSwitchingEnabled() ||
            n("cr:38809") == null
          )
            return !1;
          var et = n("cr:38809").WAWebVoipOngoingCallCollection,
            tt = et.findOngoingCallActiveOnOtherSelfDevice();
          if (tt == null) return !0;
          try {
            o("WAWebVoipStartCall")
              .joinOngoingCallByCallId(
                tt.id.id,
                o("WAWebWamEnumLobbyEntryPointType").LOBBY_ENTRY_POINT_TYPE
                  .XDR_CALL_TRANSFER,
              )
              .catch(function (e) {
                o("WALogger").ERROR(
                  E ||
                    (E = babelHelpers.taggedTemplateLiteralLoose([
                      "callActive joinOngoingCall failed",
                    ])),
                );
              });
          } catch (e) {
            o("WALogger").ERROR(
              k ||
                (k = babelHelpers.taggedTemplateLiteralLoose([
                  "callActive joinOngoingCall failed",
                ])),
            );
          }
          return !0;
        }
        case "CHAT_OPEN": {
          var nt = t.data,
            rt = nt.fromDefaultProtocol,
            ot = nt.lid,
            at = nt.session;
          try {
            (o("WAWebCmd").Cmd.closeStatusViewer(),
              o("WAWebDrawerManager").DrawerManager.closeDrawerLeft(),
              o("WAWebDrawerManager").DrawerManager.closeDrawerMid(),
              o("WAWebCmd").Cmd.setActiveNavBarItem(
                o("WAWebNavBarTypes").NavBarItems.Chats,
              ));
            var it = o("WAWebWidFactory").createWid(ot);
            o("WAWebFindChatAction")
              .findOrCreateLatestChat(it, "newChatFlow")
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
                      at != null &&
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
                          mdXdrSessionUuid: at,
                        }).commit(),
                      o("WAWebExecApiCmdHelpers").logDefaultProtocolNavigation(
                        rt,
                        e,
                      ));
                  });
              })
              .catch(function (e) {
                (o("WALogger").ERROR(
                  I ||
                    (I = babelHelpers.taggedTemplateLiteralLoose([
                      "Opening chat via chatOpen failed with async exception",
                    ])),
                ),
                  at != null &&
                    new (o(
                      "WAWebMdLinkedDevicesWindowsXdrWamEvent",
                    ).MdLinkedDevicesWindowsXdrWamEvent)({
                      mdLinkedDevicesWindowsXdrStage: o(
                        "WAWebWamEnumMdLinkedDevicesWindowsXdrStage",
                      ).MD_LINKED_DEVICES_WINDOWS_XDR_STAGE
                        .DEEPLINK_NAVIGATION_FAILURE,
                      mdXdrSessionUuid: at,
                    }).commit(),
                  o("WAWebExecApiCmdHelpers").logDefaultProtocolNavigation(
                    rt,
                    !1,
                  ));
              });
          } catch (e) {
            (o("WALogger").ERROR(
              T ||
                (T = babelHelpers.taggedTemplateLiteralLoose([
                  "Opening chat via chatOpen failed with exceptions",
                ])),
            ),
              at != null &&
                new (o(
                  "WAWebMdLinkedDevicesWindowsXdrWamEvent",
                ).MdLinkedDevicesWindowsXdrWamEvent)({
                  mdLinkedDevicesWindowsXdrStage: o(
                    "WAWebWamEnumMdLinkedDevicesWindowsXdrStage",
                  ).MD_LINKED_DEVICES_WINDOWS_XDR_STAGE
                    .DEEPLINK_NAVIGATION_FAILURE,
                  mdXdrSessionUuid: at,
                }).commit(),
              o("WAWebExecApiCmdHelpers").logDefaultProtocolNavigation(rt, !1));
          }
          return !0;
        }
        case "APP_OPEN": {
          var lt,
            st = (lt = t.data) == null ? void 0 : lt.session;
          try {
            var ut;
            (o("WAWebCmd").Cmd.closeStatusViewer(),
              o("WAWebCmd").Cmd.closeActiveChat(),
              (ut = o("WAWebDrawerManager")).DrawerManager.closeDrawerLeft(),
              ut.DrawerManager.closeDrawerMid(),
              ut.DrawerManager.closeDrawerRight(),
              ut.DrawerManager.closeDrawerFullscreen(),
              o("WAWebCmd").Cmd.setActiveNavBarItem(
                o("WAWebNavBarTypes").NavBarItems.Chats,
              ),
              st != null &&
                new (o(
                  "WAWebMdLinkedDevicesWindowsXdrWamEvent",
                ).MdLinkedDevicesWindowsXdrWamEvent)({
                  mdLinkedDevicesWindowsXdrStage: o(
                    "WAWebWamEnumMdLinkedDevicesWindowsXdrStage",
                  ).MD_LINKED_DEVICES_WINDOWS_XDR_STAGE
                    .DEEPLINK_NAVIGATION_SUCCESS,
                  mdXdrSessionUuid: st,
                }).commit());
          } catch (e) {
            (o("WALogger").ERROR(
              D ||
                (D = babelHelpers.taggedTemplateLiteralLoose([
                  "Handling appOpen failed with exceptions",
                ])),
            ),
              st != null &&
                new (o(
                  "WAWebMdLinkedDevicesWindowsXdrWamEvent",
                ).MdLinkedDevicesWindowsXdrWamEvent)({
                  mdLinkedDevicesWindowsXdrStage: o(
                    "WAWebWamEnumMdLinkedDevicesWindowsXdrStage",
                  ).MD_LINKED_DEVICES_WINDOWS_XDR_STAGE
                    .DEEPLINK_NAVIGATION_FAILURE,
                  mdXdrSessionUuid: st,
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
                  : W.jsx(
                      o("WAWebNewChatFlowLoadable").NewChatFlowLoadable,
                      {},
                    ),
                { focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE },
              ));
          } catch (e) {
            o("WALogger").ERROR(
              x ||
                (x = babelHelpers.taggedTemplateLiteralLoose([
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
                $ ||
                  ($ = babelHelpers.taggedTemplateLiteralLoose([
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
              o("WAWebExecApiCmdNewCall").handleNewCallDeeplink(t.data));
          } catch (e) {
            o("WALogger").ERROR(
              P ||
                (P = babelHelpers.taggedTemplateLiteralLoose([
                  "Opening new call flow failed with exceptions",
                ])),
            );
          }
          return !0;
        }
        case "WORK_CONTACT_SYNC": {
          var ct;
          return r("gkx")("26258") ||
            !((ct = t.data) != null && ct.compressedData)
            ? !1
            : (n("cr:2679") == null ||
                n("cr:2679").handleWorkContactSync(t.data.compressedData),
              !0);
        }
        case "SEND_FILE": {
          var dt;
          return (dt =
            n("cr:12407") == null ? void 0 : n("cr:12407")(t.data)) != null
            ? dt
            : !1;
        }
        case "NEWSLETTER_STATUS_DEEPLINK":
          return (
            r("JSResourceForInteraction")("WAWebNewsletterStatusExecApiCmd")
              .__setRef("WAWebExecApiCmd")
              .load()
              .then(function (e) {
                return e.execNewsletterStatusDeeplinkCmd(t.data);
              })
              .catch(function () {
                o("WALogger").ERROR(
                  N ||
                    (N = babelHelpers.taggedTemplateLiteralLoose([
                      "Failed to load or execute newsletter status deeplink handler",
                    ])),
                );
              }),
            o("WAWebExecApiCmdHelpers").submitDeepLinkOpenWamEvent({
              deepLinkType: o("WAWebWamEnumDeepLinkType").DEEP_LINK_TYPE
                .DEEP_LINK_CHANNEL_STATUS,
              isExternal: i,
            }),
            !0
          );
        case "SHARABLE_EVENT_LINK":
          return !i &&
            !o("WAWebSharableEventGatingUtils").isEventsV2OnCompanionEnabled()
            ? !1
            : (r("JSResourceForInteraction")(
                "WAWebOpenSharableEventFromLinkAction",
              )
                .__setRef("WAWebExecApiCmd")
                .load()
                .then(function (e) {
                  return e.openSharableEventFromLink(t.data.token);
                })
                .catch(function (e) {
                  o("WALogger")
                    .ERROR(
                      M ||
                        (M = babelHelpers.taggedTemplateLiteralLoose([
                          "[sharable_event] failed to load the event link handler",
                        ])),
                    )
                    .catching(r("getErrorSafe")(e))
                    .sendLogs("sharable-event-link-load-failed");
                }),
              o("WAWebExecApiCmdHelpers").submitDeepLinkOpenWamEvent({
                deepLinkType: o("WAWebWamEnumDeepLinkType").DEEP_LINK_TYPE
                  .DEEP_LINK_EVENT,
                isExternal: i,
              }),
              !0);
        case "OIDC_CALLBACK":
          return (
            o("WAWebOIDCCallbackEventBus").WAWebOIDCCallbackEventBus.trigger(
              o("WAWebOIDCCallbackEventBus").OIDCCallbackEvent.OIDC_CALLBACK,
              t.data,
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
              t.data,
            ),
            !0
          );
        case "SET_ABOUT":
          return o("WAWebTextStatusGatingUtils").sendTextStatusEnabled()
            ? (o("WAWebCmd").Cmd.closeStatusViewer(),
              o("WAWebModalManager").ModalManager.open(
                W.jsx(
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
                isExternal: i,
              }),
              !0)
            : !1;
        default:
          return (t.resultType, !1);
      }
    }
    l.default = X;
  },
  226,
);
