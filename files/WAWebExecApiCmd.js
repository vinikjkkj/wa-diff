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
    "WAWebBizBroadcastCoreSmartCSVImportAudiencesScreenLoadable",
    "WAWebBizBroadcastDeviceCapabilityCommon",
    "WAWebBizBroadcastProOnboardingStatus",
    "WAWebBizBroadcastsManageAudiencePanelLoadable",
    "WAWebBizBroadcastsSmartCSVImportSetupFlowLoadable",
    "WAWebBizBroadcastsUploadModalLoadable.react",
    "WAWebBizFrontendGatingUtils",
    "WAWebBizNativeAdsEntryPointUtils",
    "WAWebBotGenTypingIndicatorMsg",
    "WAWebBotUtils",
    "WAWebBrAddPixKeyCodeLinkLoadable",
    "WAWebBrAddPixKeyDeepLinkGating",
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
    "WAWebTextStatusCollection",
    "WAWebTextStatusEditModalLoadable",
    "WAWebTextStatusGatingUtils",
    "WAWebUpdateUtmAction",
    "WAWebUserPrefsMeUser",
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
      B = O || (O = o("react")),
      W = (e = n("cr:17104")) != null ? e : {},
      q = W.handleClickCallLink,
      U = {
        callPopupTitle: {
          marginTop: "xw7yly9",
          marginBottom: "x1yztbdb",
          $$css: !0,
        },
      },
      V = 1;
    function H(e, t) {
      o("WAWebDrawerManager").DrawerManager.openDrawerMid(
        B.jsx(
          o("WAWebBizBroadcastsManageAudiencePanelLoadable")
            .WAWebBizBroadcastsManageAudiencePanelLoadable,
          {
            entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT.CHAT_BANNER,
            validContactsData: e,
            errorList: t,
          },
        ),
        { focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE },
      );
    }
    function G(e, t) {
      o("WAWebDrawerManager").DrawerManager.openDrawerFullscreen(
        B.jsx(
          o("WAWebBizBroadcastCoreSmartCSVImportAudiencesScreenLoadable")
            .WAWebBizBroadcastCoreSmartCSVImportAudiencesScreenLoadable,
          {
            audiences: e,
            entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT.CHAT_BANNER,
            importLoggingContext: t,
            onClose: function () {
              return o(
                "WAWebDrawerManager",
              ).DrawerManager.closeDrawerFullscreen();
            },
            onCreateAudiencesSuccess: function () {
              return o(
                "WAWebDrawerManager",
              ).DrawerManager.closeDrawerFullscreen();
            },
          },
        ),
        { focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE },
      );
    }
    function z(e, t) {
      var n = e.length === V ? e[0] : null;
      if (n != null) {
        var r;
        H(n.contacts, (r = n.errorList) != null ? r : []);
        return;
      }
      G(e, t);
    }
    function j(e, t, n, r, a) {
      if (n != null) {
        o(
          "WAWebBizBroadcastsSmartCSVImportSetupFlowLoadable",
        ).openSmartCSVImportSetupFlowLoadable({
          contacts: e,
          context: n,
          entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT.CHAT_BANNER,
          errorList: t,
          importLoggingContext: r,
          maxContactsPerAudience: a,
          onReviewAudience: H,
          onReviewAudiences: function (t) {
            return z(t, r);
          },
        });
        return;
      }
      H(e, t);
    }
    function K(e, t) {
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
    function Q(e, t) {
      var n =
        e != null ||
        t ===
          o("WAWebGetCTWAEligibilityFromConversion")
            .SMB_DATA_SHARING_ALLOWED_SOURCE;
      return n ? null : "WA_ME_LINK";
    }
    function X(e, t) {
      return Y.apply(this, arguments);
    }
    function Y() {
      return (
        (Y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
          if (o("WAWebUserPrefsMeUser").isMeAccount(n)) {
            (o("WALogger")
              .LOG(
                w ||
                  (w = babelHelpers.taggedTemplateLiteralLoose([
                    "CALL_USER deep-link: redirecting self-call to self chat",
                  ])),
              )
              .sendLogs("calling-deep-links-self-call"),
              yield J(n));
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
            (yield J(n)) &&
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
        Y.apply(this, arguments)
      );
    }
    function J(e) {
      return Z.apply(this, arguments);
    }
    function Z() {
      return (
        (Z = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        Z.apply(this, arguments)
      );
    }
    function ee(e) {
      var t = e.cmdData,
        a = e.isCallLinkCreationJoin,
        i = e.isExternal,
        l = e.preserveAttribution,
        M = e.sessionId;
      switch (
        (t.resultType !== "BRAZIL_PIX_HOME" &&
          o(
            "WAWebBrPixPaymentsHomeDeepLink",
          ).cancelPendingBrPixPaymentsHomeDeepLink(),
        t.resultType)
      ) {
        case "GROUP_INVITE": {
          var w;
          o("WAWebCmd").Cmd.closeStatusViewer();
          var A = t.data;
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
              isExternal: i,
              campaign: (w = A.utm) == null ? void 0 : w.campaign,
            }),
            !0
          );
        }
        case "CATALOG": {
          o("WAWebCmd").Cmd.closeStatusViewer();
          var F = t.data,
            O = F.catalogOwnerJid,
            W = F.partnertoken,
            V = F.utm;
          return (
            o("WAWebExecApiCmdHelpers").externalCtxAuthoriseWAChatIfEnabled({
              chatId: o("WAWebWidFactory").createWid(O),
              deepLinkType: t.resultType,
              isExternal: i,
              partnerToken: W,
            }),
            o("WAWebExecApiCmdHelpers").openChatAndCatalog(O, V),
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
          var H = t.data,
            G = H.businessOwnerJid,
            z = H.partnertoken,
            Y = H.productId,
            J = H.utm;
          return (
            o("WAWebExecApiCmdHelpers").externalCtxAuthoriseWAChatIfEnabled({
              chatId: o("WAWebWidFactory").createWid(G),
              deepLinkType: t.resultType,
              isExternal: i,
              partnerToken: z,
            }),
            o("WAWebExecApiCmdHelpers").openChatAndProduct(G, Y, J),
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
                startChatContextEntryPoint: Q(
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
              B.jsx(r("WAWebNewCommunityInfoDrawerLoadable"), {}),
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
            var ke = o("WAWebUserPrefsMeUser").getMeUserOrThrow();
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
                      "WAWebBrPixPaymentsHomeDeepLink",
                    ).openBrPixPaymentsHomeDeepLink(),
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
            var xe = o("WAWebUserPrefsMeUser").getMeUserOrThrow(),
              $e = o(
                "WAWebTextStatusCollection",
              ).TextStatusCollection.assertGet(xe),
              Pe = o("WAWebContactCollection").ContactCollection.assertGet(xe),
              Ne = o(
                "WAWebProfilePicThumbCollection",
              ).ProfilePicThumbCollection.assertGet(xe);
            return (
              o("WAWebDrawerManager").DrawerManager.openDrawerLeft(
                B.jsx(n("cr:1923"), {
                  status: $e,
                  profilePicThumb: Ne,
                  contact: Pe,
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
            var Me = o("WAWebUserPrefsMeUser").getMeLidUserOrThrow(),
              we = o("WAWebContactCollection").ContactCollection.assertGet(Me),
              Ae = o("WAWebUsernameTypes").serializeMaybeUsername(we.username);
            return (
              r("isStringNullOrEmpty")(Ae)
                ? (o("WAWebModalManager").ModalManager.open(
                    B.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
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
                    B.jsx(r("WAWebUsernameManagementDrawerLoadable"), {
                      contactId: we.id,
                      username: Ae,
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
          var Fe = t.data.feature;
          switch (Fe) {
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
          var Oe = t.data.postType;
          switch (Oe) {
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
          var Be = t.data.phone,
            We = t.data.video === !0;
          return (
            o("WAWebExecApiCmdHelpers").submitDeepLinkOpenWamEvent({
              deepLinkType: o("WAWebWamEnumDeepLinkType").DEEP_LINK_TYPE
                .DEEP_LINK_CALL,
              isExternal: i,
            }),
            o("WAWebVoipGatingUtils").isCallingEnabled()
              ? Be == null
                ? (o("WALogger")
                    .LOG(
                      b ||
                        (b = babelHelpers.taggedTemplateLiteralLoose([
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
                          xstyle: U.callPopupTitle,
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
                : (X(Be, We), !0)
              : (o("WAWebModalManager").ModalManager.open(
                  B.jsxs(o("WAWebConfirmPopup.react").ConfirmPopup, {
                    onOK: o("WAWebModalManager").closeModalManager,
                    children: [
                      B.jsx(r("WDSText.react"), {
                        type: "Headline2",
                        colorName: "contentDefault",
                        textAlign: "center",
                        xstyle: U.callPopupTitle,
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
          var qe = {
            entryPoint: o("WAWebWamEnumCatalogEntryPoint").CATALOG_ENTRY_POINT
              .CATALOG_ENTRY_POINT_DEEPLINK,
            isInitialStep: !0,
          };
          return (
            (t.data.campaignType === "chat_psa" ||
              t.data.campaignType === "banner") &&
              (qe.promotionCampaign = "video-upload"),
            o("WAWebCatalogManagementFlowLoadable").openCatalogManagementFlow(
              qe,
            ),
            !0
          );
        }
        case "CATALOG_LINKING_CHAT_PSA": {
          var Ue = t.data.deepLinkType;
          return (
            o("WAWebExecApiCmdHelpers").submitDeepLinkOpenWamEvent({
              deepLinkType: Ue,
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
                B.jsx(r("WAWebHatchPairingUnavailableDialog.react"), {}),
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
          var Ve = (function () {
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
          return (Ve(t.data.token), !0);
        }
        case "UGC_BOT": {
          o("WAWebCmd").Cmd.closeStatusViewer();
          var He = (function () {
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
          return (He(t.data.fbid), !0);
        }
        case "STICKER_PACK": {
          var Ge = t.data.url;
          return (
            o("WAWebDrawerManager").DrawerManager.openDrawerRight(
              B.jsx(
                r("WAWebStickerStoreFlowLoadable").StickerStoreFlowLoadable,
                {
                  stickerPackId: Ge,
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
          var ze = q;
          return (
            ze == null &&
              n("cr:9382") != null &&
              (ze = n("cr:9382").handleClickCallLink),
            ze == null || ze(t, K(i, a)),
            !0
          );
        }
        case "CTWA_ADS_DATA_SHARING": {
          if (!o("WAWebMobilePlatforms").isSMB()) return !1;
          var je = t.source,
            Ke;
          switch (je) {
            case "ads_manager_3pd_guidance_card":
              Ke = o("WAWebWamEnumSmbDataSharingConsentSettingEntryPoint")
                .SMB_DATA_SHARING_CONSENT_SETTING_ENTRY_POINT
                .ENTRY_POINT_DEEP_LINK_ADS_MANAGER_3PD_GUIDANCE_CARD;
              break;
            default:
              Ke = o("WAWebWamEnumSmbDataSharingConsentSettingEntryPoint")
                .SMB_DATA_SHARING_CONSENT_SETTING_ENTRY_POINT
                .ENTRY_POINT_UNKNOWN;
              break;
          }
          return (
            o("WAWebDrawerManager").DrawerManager.openDrawerLeft(
              B.jsx(r("WAWebSMBDataSharingDrawer.react"), {
                onClose: o("WAWebDrawerManager").closeDrawerLeft,
                entrypoint: Ke,
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
            ? (o(
                "WAWebBusinessBroadcastUserJourneyLogger",
              ).BusinessBroadcastUserJourneyLogger.importAudienceClicked(
                o("WAWebWamEnumEntryPoint").ENTRY_POINT.CHAT_BANNER,
              ),
              o("WAWebModalManager").ModalManager.open(
                B.jsx(r("WAWebBizBroadcastsUploadModalLoadable.react"), {
                  entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT
                    .CHAT_BANNER,
                  onCancel: function (t, n) {
                    (o("WAWebModalManager").ModalManager.close(),
                      n !== !0 &&
                        o(
                          "WAWebBusinessBroadcastUserJourneyLogger",
                        ).BusinessBroadcastUserJourneyLogger.contactImportCancelClicked(
                          o("WAWebWamEnumEntryPoint").ENTRY_POINT.CHAT_BANNER,
                        ));
                  },
                  onUploadSuccess: j,
                }),
              ),
              !0)
            : !1;
        case "BIZ_BROADCAST_HOME": {
          var Qe;
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
          var Xe = t.data.source,
            Ye;
          switch (Xe) {
            case "qp_chat_list_banner":
              Ye = o("WAWebWamEnumEntryPoint").ENTRY_POINT.CHAT_BANNER;
              break;
            default:
              Ye = o("WAWebWamEnumEntryPoint").ENTRY_POINT.DEEP_LINK;
              break;
          }
          var Je = l !== !0;
          Je &&
            o(
              "WAWebBusinessBroadcastUserJourneyLogger",
            ).BusinessBroadcastUserJourneyLogger.setDeeplinkAttribution(
              Ye,
              t.data.moment,
            );
          var Ze = Je
              ? Ye
              : (Qe = o(
                    "WAWebBusinessBroadcastUserJourneyLogger",
                  ).BusinessBroadcastUserJourneyLogger.getEntryPoint()) != null
                ? Qe
                : Ye,
            et = function () {
              o("WAWebDrawerManager").DrawerManager.openDrawerFullscreen(
                B.jsx(
                  o("WAWebBusinessBroadcastHomeFlowLoadable")
                    .WAWebBusinessBroadcastHomeFlowLoadable,
                  {
                    entryPoint: Ze,
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
                  .then(et)
                  .catch(function (e) {
                    o("WALogger")
                      .ERROR(
                        R ||
                          (R = babelHelpers.taggedTemplateLiteralLoose([
                            "BizBroadcastHome external deeplink drawer open failed",
                          ])),
                      )
                      .catching(r("getErrorSafe")(e))
                      .sendLogs("bb-home-deeplink-drawer-fail");
                  })
              : et(),
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
          var tt = n("cr:38809").WAWebVoipOngoingCallCollection,
            nt = tt.findOngoingCallActiveOnOtherSelfDevice();
          if (nt == null) return !0;
          try {
            o("WAWebVoipStartCall")
              .joinOngoingCallByCallId(
                nt.id.id,
                o("WAWebWamEnumLobbyEntryPointType").LOBBY_ENTRY_POINT_TYPE
                  .XDR_CALL_TRANSFER,
              )
              .catch(function (e) {
                o("WALogger").ERROR(
                  L ||
                    (L = babelHelpers.taggedTemplateLiteralLoose([
                      "callActive joinOngoingCall failed",
                    ])),
                );
              });
          } catch (e) {
            o("WALogger").ERROR(
              E ||
                (E = babelHelpers.taggedTemplateLiteralLoose([
                  "callActive joinOngoingCall failed",
                ])),
            );
          }
          return !0;
        }
        case "CHAT_OPEN": {
          var rt = t.data,
            ot = rt.fromDefaultProtocol,
            at = rt.lid,
            it = rt.session;
          try {
            (o("WAWebCmd").Cmd.closeStatusViewer(),
              o("WAWebDrawerManager").DrawerManager.closeDrawerLeft(),
              o("WAWebDrawerManager").DrawerManager.closeDrawerMid(),
              o("WAWebCmd").Cmd.setActiveNavBarItem(
                o("WAWebNavBarTypes").NavBarItems.Chats,
              ));
            var lt = o("WAWebWidFactory").createWid(at);
            o("WAWebFindChatAction")
              .findOrCreateLatestChat(lt, "newChatFlow")
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
                      it != null &&
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
                          mdXdrSessionUuid: it,
                        }).commit(),
                      o("WAWebExecApiCmdHelpers").logDefaultProtocolNavigation(
                        ot,
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
                  it != null &&
                    new (o(
                      "WAWebMdLinkedDevicesWindowsXdrWamEvent",
                    ).MdLinkedDevicesWindowsXdrWamEvent)({
                      mdLinkedDevicesWindowsXdrStage: o(
                        "WAWebWamEnumMdLinkedDevicesWindowsXdrStage",
                      ).MD_LINKED_DEVICES_WINDOWS_XDR_STAGE
                        .DEEPLINK_NAVIGATION_FAILURE,
                      mdXdrSessionUuid: it,
                    }).commit(),
                  o("WAWebExecApiCmdHelpers").logDefaultProtocolNavigation(
                    ot,
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
              it != null &&
                new (o(
                  "WAWebMdLinkedDevicesWindowsXdrWamEvent",
                ).MdLinkedDevicesWindowsXdrWamEvent)({
                  mdLinkedDevicesWindowsXdrStage: o(
                    "WAWebWamEnumMdLinkedDevicesWindowsXdrStage",
                  ).MD_LINKED_DEVICES_WINDOWS_XDR_STAGE
                    .DEEPLINK_NAVIGATION_FAILURE,
                  mdXdrSessionUuid: it,
                }).commit(),
              o("WAWebExecApiCmdHelpers").logDefaultProtocolNavigation(ot, !1));
          }
          return !0;
        }
        case "APP_OPEN": {
          var st,
            ut = (st = t.data) == null ? void 0 : st.session;
          try {
            var ct;
            (o("WAWebCmd").Cmd.closeStatusViewer(),
              o("WAWebCmd").Cmd.closeActiveChat(),
              (ct = o("WAWebDrawerManager")).DrawerManager.closeDrawerLeft(),
              ct.DrawerManager.closeDrawerMid(),
              ct.DrawerManager.closeDrawerRight(),
              ct.DrawerManager.closeDrawerFullscreen(),
              o("WAWebCmd").Cmd.setActiveNavBarItem(
                o("WAWebNavBarTypes").NavBarItems.Chats,
              ),
              ut != null &&
                new (o(
                  "WAWebMdLinkedDevicesWindowsXdrWamEvent",
                ).MdLinkedDevicesWindowsXdrWamEvent)({
                  mdLinkedDevicesWindowsXdrStage: o(
                    "WAWebWamEnumMdLinkedDevicesWindowsXdrStage",
                  ).MD_LINKED_DEVICES_WINDOWS_XDR_STAGE
                    .DEEPLINK_NAVIGATION_SUCCESS,
                  mdXdrSessionUuid: ut,
                }).commit());
          } catch (e) {
            (o("WALogger").ERROR(
              T ||
                (T = babelHelpers.taggedTemplateLiteralLoose([
                  "Handling appOpen failed with exceptions",
                ])),
            ),
              ut != null &&
                new (o(
                  "WAWebMdLinkedDevicesWindowsXdrWamEvent",
                ).MdLinkedDevicesWindowsXdrWamEvent)({
                  mdLinkedDevicesWindowsXdrStage: o(
                    "WAWebWamEnumMdLinkedDevicesWindowsXdrStage",
                  ).MD_LINKED_DEVICES_WINDOWS_XDR_STAGE
                    .DEEPLINK_NAVIGATION_FAILURE,
                  mdXdrSessionUuid: ut,
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
              o("WAWebExecApiCmdNewCall").handleNewCallDeeplink(t.data));
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
          var dt;
          return r("gkx")("26258") ||
            !((dt = t.data) != null && dt.compressedData)
            ? !1
            : (n("cr:2679") == null ||
                n("cr:2679").handleWorkContactSync(t.data.compressedData),
              !0);
        }
        case "SEND_FILE": {
          var mt;
          return (mt =
            n("cr:12407") == null ? void 0 : n("cr:12407")(t.data)) != null
            ? mt
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
                  P ||
                    (P = babelHelpers.taggedTemplateLiteralLoose([
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
                isExternal: i,
              }),
              !0)
            : !1;
        default:
          return (t.resultType, !1);
      }
    }
    l.default = ee;
  },
  226,
);
