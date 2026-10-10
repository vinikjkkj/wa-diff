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
    "WAWebBotProfileAction",
    "WAWebBotUtils",
    "WAWebBrAddPixKeyDeepLinkGating",
    "WAWebBrSavePartnerPixKeyFeature",
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
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebFindChatAction",
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
      F = A || (A = o("react")),
      O = (e = n("cr:17104")) != null ? e : {},
      B = O.handleClickCallLink,
      W = {
        callPopupTitle: {
          marginTop: "xw7yly9",
          marginBottom: "x1yztbdb",
          $$css: !0,
        },
      },
      q = 1;
    function U(e, t) {
      o("WAWebDrawerManager").DrawerManager.openDrawerMid(
        F.jsx(
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
    function V(e, t) {
      o("WAWebDrawerManager").DrawerManager.openDrawerFullscreen(
        F.jsx(
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
    function H(e, t) {
      var n = e.length === q ? e[0] : null;
      if (n != null) {
        var r;
        U(n.contacts, (r = n.errorList) != null ? r : []);
        return;
      }
      V(e, t);
    }
    function G(e, t, n, r, a) {
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
          onReviewAudience: U,
          onReviewAudiences: function (t) {
            return H(t, r);
          },
        });
        return;
      }
      U(e, t);
    }
    function z(e, t) {
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
                P ||
                  (P = babelHelpers.taggedTemplateLiteralLoose([
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
                N ||
                  (N = babelHelpers.taggedTemplateLiteralLoose([
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
                  M ||
                    (M = babelHelpers.taggedTemplateLiteralLoose([
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
                  w ||
                    (w = babelHelpers.taggedTemplateLiteralLoose([
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
      var t = e.cmdData,
        a = e.isCallLinkCreationJoin,
        i = e.isExternal,
        l = e.preserveAttribution,
        P = e.sessionId;
      switch (t.resultType) {
        case "GROUP_INVITE": {
          var N;
          o("WAWebCmd").Cmd.closeStatusViewer();
          var M = t.data;
          return (
            o("WAWebModalManager").ModalManager.open(
              F.jsx(
                o("WAWebGroupInviteLinkModalLoadable.react")
                  .WAWebGroupInviteLinkModalLoadable,
                { groupCode: M.code, source: "invite_link" },
              ),
            ),
            o("WAWebExecApiCmdHelpers").submitDeepLinkOpenWamEvent({
              deepLinkType: o("WAWebWamEnumDeepLinkType").DEEP_LINK_TYPE
                .DEEP_LINK_GROUP_INVITE,
              isExternal: i,
              campaign: (N = M.utm) == null ? void 0 : N.campaign,
            }),
            !0
          );
        }
        case "CATALOG": {
          o("WAWebCmd").Cmd.closeStatusViewer();
          var w = t.data,
            A = w.catalogOwnerJid,
            O = w.partnertoken,
            q = w.utm;
          return (
            o("WAWebExecApiCmdHelpers").externalCtxAuthoriseWAChatIfEnabled({
              chatId: o("WAWebWidFactory").createWid(A),
              deepLinkType: t.resultType,
              isExternal: i,
              partnerToken: O,
            }),
            o("WAWebExecApiCmdHelpers").openChatAndCatalog(A, q),
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
          var U = t.data,
            V = U.businessOwnerJid,
            H = U.partnertoken,
            K = U.productId,
            Q = U.utm;
          return (
            o("WAWebExecApiCmdHelpers").externalCtxAuthoriseWAChatIfEnabled({
              chatId: o("WAWebWidFactory").createWid(V),
              deepLinkType: t.resultType,
              isExternal: i,
              partnerToken: H,
            }),
            o("WAWebExecApiCmdHelpers").openChatAndProduct(V, K, Q),
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
          var X = t.data,
            Y = X.attachmentUris,
            J = X.conversionTuple,
            Z = X.ctwaContextLinkData,
            ee = X.customUrl,
            te = X.fromDefaultProtocol,
            ne = X.lid,
            re = X.phone,
            oe = X.text,
            ae = X.type,
            ie = X.username,
            le = X.utm,
            se = null;
          (J == null ? void 0 : J.conversionSource) === "sharesheet" &&
            (se = ne);
          var ue = ee != null || ae === "business_profile",
            ce = ie != null;
          if (!r("isStringNullOrEmpty")(re) || ue || ce) {
            var de = function (n) {
                var e = n.chat,
                  r = n.widLookupMethod;
                J &&
                  o(
                    "WAWebCTWATrackingPayloadUtils",
                  ).handleChatConversationOpenedWithNewMessage(e, J);
                var a = r === "customUrl";
                (a &&
                  (o("WAWebCustomUrlLogEvents").logClickOnCustomUrl(e),
                  o("WAWebCustomUrlLogEvents").logMessageSentByCustomUrl(e)),
                  le && o("WAWebUpdateUtmAction").addUtmToChat(e.id, le),
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
                  oe && (e.urlText = !0),
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
                        : F.jsx(
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
                var l = X.signupId;
                if (
                  l != null &&
                  re != null &&
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
                      re,
                      l,
                      (s = X.conversionTuple) == null
                        ? void 0
                        : s.conversionSource,
                    ));
                }
                o("WAWebExecApiCmdHelpers").logDefaultProtocolNavigation(
                  te,
                  !0,
                );
              },
              me =
                P != null
                  ? {
                      handleOnce: function () {
                        new (o(
                          "WAWebDeepLinkMsgSentWamEvent",
                        ).DeepLinkMsgSentWamEvent)({
                          deepLinkAction: o("WAWebWamEnumDeepLinkAction")
                            .DEEP_LINK_ACTION.MSG_SENT,
                          deepLinkSessionId: P,
                        }).commit();
                      },
                    }
                  : void 0,
              pe = ce
                ? {
                    deepLinkHasPhoneNumber: !r("isStringNullOrEmpty")(re),
                    deepLinkHasText: !r("isStringNullOrEmpty")(oe),
                    deepLinkHasUsername: !0,
                    deepLinkHasUsernamePin:
                      !r("isStringNullOrEmpty")(X.usernameKey) ||
                      X.invalidUsernameKey === !0,
                    deepLinkSessionId: P,
                  }
                : void 0;
            (o("WAWebModalManager").ModalManager.open(
              F.jsx(o("WAWebOpenChatFlow.react").OpenChatFlow, {
                target: o("WAWebExecApiCmdHelpers").getOpenChatFlowProps(X),
                msgText: oe,
                onSuccess: de,
                onError: function () {
                  return o(
                    "WAWebExecApiCmdHelpers",
                  ).logDefaultProtocolNavigation(te, !1);
                },
                ctwaContextLinkData: Z,
                sendLogAttributes: me,
                deepLinkLoggingData: pe,
              }),
              { transition: "modal-flow" },
            ),
              o("WAWebExecApiCmdHelpers").submitDeepLinkOpenWamEvent({
                deepLinkType: Z
                  ? o("WAWebWamEnumDeepLinkType").DEEP_LINK_TYPE.DEEP_LINK_CTWA
                  : o("WAWebWamEnumDeepLinkType").DEEP_LINK_TYPE.DEEP_LINK_CHAT,
                isExternal: i,
                deepLinkSessionId: P,
                campaign: le == null ? void 0 : le.campaign,
              }));
          } else {
            var _e = function (t) {
              if ((J == null ? void 0 : J.conversionSource) === "sharesheet") {
                var e = { msgText: oe, urlText: !0 };
                (t && (e.attachments = t),
                  se != null && se.length > 0 && (e.preSelectedContactLid = se),
                  o("WAWebModalManager").ModalManager.open(
                    F.jsx(
                      o("WAWebSendMsgModalImplLoadable")
                        .SendMsgModalImplLoadable,
                      babelHelpers.extends({}, e),
                    ),
                    { transition: "modal-flow" },
                  ));
              } else {
                var n = { msgText: oe, urlText: !0 };
                (t && (n.attachments = t),
                  o("WAWebModalManager").ModalManager.open(
                    F.jsx(
                      o("WAWebSendMsgMultiModalLoadable")
                        .SendMsgMultiModalLoadable,
                      babelHelpers.extends({}, n),
                    ),
                    { transition: "modal-flow" },
                  ));
              }
            };
            Y != null && Y.length > 0
              ? o("WAWebExecApiCmdHelpers")
                  .downloadAttachments(Y)
                  .then(function (e) {
                    _e(e);
                  })
                  .finally(r("WAWebNoop"))
              : _e();
            var fe =
              (J == null ? void 0 : J.conversionSource) === "sharesheet"
                ? o("WAWebWamEnumDeepLinkType").DEEP_LINK_TYPE
                    .DEEP_LINK_SHARESHEET
                : o("WAWebWamEnumDeepLinkType").DEEP_LINK_TYPE
                    .DEEP_LINK_MSG_FORWARD;
            o("WAWebExecApiCmdHelpers").submitDeepLinkOpenWamEvent({
              deepLinkType: fe,
              isExternal: i,
              deepLinkSessionId: void 0,
              campaign: le == null ? void 0 : le.campaign,
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
              F.jsx(r("WAWebNewCommunityInfoDrawerLoadable"), {}),
              { focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE },
            ));
          var ge = t.data.entrypointType;
          return (
            o(
              "WAWebCommunityCreationFlowMetricUtils",
            ).UiCommunityCreationAction.startSession(
              o(
                "WAWebCommunityCreationFlowMetricUtils",
              ).getDeeplinkEntrypointType(ge),
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
          var he = o("WAWebFaqUrl").getAvatarFaqUrl();
          return (window.location.replace(he), !0);
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
          var ye = o(
            "WAWebActiveAccountInfoContext.react",
          ).getActiveAccountInfo();
          if (ye == null || ye === "not-linked")
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
                  ye,
                )
                .sendLogs("ads-api-command-rejected"),
              !1
            );
          var Ce = t.data,
            be = Ce.campaignId,
            ve = Ce.campaignType;
          return (
            o("WAWebChatlistUtils").handleAdCreation({
              adCreationUrlInput: {
                activeAccountInfo: ye,
                sourceAdCreation: o(
                  "WAWebBusinessAdCreationUtils",
                ).getAdCreationTypeFromCampaignType(ve),
              },
              lwiEntryPoint: o(
                "WAWebBizNativeAdsEntryPointUtils",
              ).getLwiEntryPointFromCampaignType(ve),
              waCampaignId: be,
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
          var Se = o(
            "WAWebActiveAccountInfoContext.react",
          ).getActiveAccountInfo();
          if (Se == null || Se === "not-linked")
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
                  Se,
                )
                .sendLogs("ads-api-command-rejected"),
              !1
            );
          switch (t.trigger) {
            case "chatListBanner":
              o("WAWebChatlistUtils").handleManageAds({
                activeAccountInfo: Se,
                entryPoint: o("WAWebWamEnumLwiEntryPoint").LWI_ENTRY_POINT
                  .SMB_CHAT_LIST_BANNER_MANAGE_AD,
                sourceManageAdsType:
                  "whatsapp_smb_web_manage_ads_chat_list_banner",
              });
              break;
            default:
              (t.trigger,
                o("WAWebChatlistUtils").handleManageAds({
                  activeAccountInfo: Se,
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
            var Re = o("WAWebUserPrefsMeUser").getMeUserOrThrow();
            o("WAWebOpenChatWithContactAction").openChatWithContact({
              chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.Deeplink,
              findChatOrigin: "newChatFlow",
              targetId: Re,
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
          var Le =
            t.data.campaignType === "chatlist_banner"
              ? "chatlist_banner"
              : t.data.campaignType === "aymt_email"
                ? "aymt_email"
                : t.data.campaignType === "aymt_ads_manager_notification"
                  ? "aymt_ads_manager_notification"
                  : "chatlist_banner";
          return o("WAWebBizFrontendGatingUtils").isPixOnWebEnabled()
            ? (o("WAWebAddEditPixFeature").openPixCredentialManagementModal(
                Le,
                Le,
              ),
              !0)
            : (o("WAWebPrimaryFeaturesModel").PrimaryFeatures.on(
                "change:customPaymentMethodsSyncSupport",
                function () {
                  if (o("WAWebBizFrontendGatingUtils").isPixOnWebEnabled())
                    return (
                      o(
                        "WAWebAddEditPixFeature",
                      ).openPixCredentialManagementModal(Le, Le),
                      !0
                    );
                },
              ),
              !1);
        }
        case "BRAZIL_ADD_PIX_KEY": {
          var Ee = t.data,
            ke = Ee.campaignId,
            Ie = Ee.prefill,
            Te = Ee.referralSlug;
          o("WAWebExecApiCmdHelpers").submitDeepLinkOpenWamEvent({
            deepLinkType: o("WAWebWamEnumDeepLinkType").DEEP_LINK_TYPE
              .DEEP_LINK_PAYMENT_BR_ADD_PIX_KEY,
            isExternal: i,
          });
          var De = function () {
            return o(
              "WAWebBrAddPixKeyDeepLinkGating",
            ).isAddPixKeyDeepLinkEnabled()
              ? (o(
                  "WAWebBrSavePartnerPixKeyFeature",
                ).openAddPixKeyDeepLinkScreen(
                  "add_pix_key_deeplink",
                  o(
                    "WAWebBrAddPixKeyDeepLinkGating",
                  ).resolveAddPixKeyDeepLinkReferral(Ie, ke, Te),
                  Ie,
                ),
                !0)
              : !1;
          };
          if (o("WAWebBizFrontendGatingUtils").isPixOnWebEnabled()) return De();
          var xe = function () {
            (o("WAWebPrimaryFeaturesModel").PrimaryFeatures.off(
              "change:customPaymentMethodsSyncSupport",
              xe,
            ),
              o("WAWebBizFrontendGatingUtils").isPixOnWebEnabled() && De());
          };
          return (
            o("WAWebPrimaryFeaturesModel").PrimaryFeatures.on(
              "change:customPaymentMethodsSyncSupport",
              xe,
            ),
            !1
          );
        }
        case "EDIT_PROFILE_PICTURE": {
          try {
            o("WAWebCmd").Cmd.closeStatusViewer();
            var $e = o("WAWebUserPrefsMeUser").getMeUserOrThrow(),
              Pe = o(
                "WAWebTextStatusCollection",
              ).TextStatusCollection.assertGet($e),
              Ne = o("WAWebContactCollection").ContactCollection.assertGet($e),
              Me = o(
                "WAWebProfilePicThumbCollection",
              ).ProfilePicThumbCollection.assertGet($e);
            return (
              o("WAWebDrawerManager").DrawerManager.openDrawerLeft(
                F.jsx(n("cr:1923"), {
                  status: Pe,
                  profilePicThumb: Me,
                  contact: Ne,
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
            var we = o("WAWebUserPrefsMeUser").getMeLidUserOrThrow(),
              Ae = o("WAWebContactCollection").ContactCollection.assertGet(we),
              Fe = o("WAWebUsernameTypes").serializeMaybeUsername(Ae.username);
            return (
              r("isStringNullOrEmpty")(Fe)
                ? (o("WAWebModalManager").ModalManager.open(
                    F.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
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
                    F.jsx(r("WAWebUsernameManagementDrawerLoadable"), {
                      contactId: Ae.id,
                      username: Fe,
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
          var Oe = t.data.feature;
          switch (Oe) {
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
          var Be = t.data.postType;
          switch (Be) {
            case o("WAWebStatusApiParse").StatusPostType.Text:
              o("WAWebModalManager").ModalManager.openMedia(
                F.jsx(
                  o("WAWebCreateTextStatusFlowLoadable")
                    .CreateTextStatusFlowLoadable,
                  {},
                ),
                { transition: "status-modal" },
              );
              break;
            case o("WAWebStatusApiParse").StatusPostType.Media:
              o("WAWebModalManager").ModalManager.open(
                F.jsx(
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
          var We = t.data.phone,
            qe = t.data.video === !0;
          return (
            o("WAWebExecApiCmdHelpers").submitDeepLinkOpenWamEvent({
              deepLinkType: o("WAWebWamEnumDeepLinkType").DEEP_LINK_TYPE
                .DEEP_LINK_CALL,
              isExternal: i,
            }),
            o("WAWebVoipGatingUtils").isCallingEnabled()
              ? We == null
                ? (o("WALogger")
                    .LOG(
                      b ||
                        (b = babelHelpers.taggedTemplateLiteralLoose([
                          "CALL_USER deep-link missing phone",
                        ])),
                    )
                    .sendLogs("calling-deep-link-missing-phone"),
                  o("WAWebModalManager").ModalManager.open(
                    F.jsxs(o("WAWebConfirmPopup.react").ConfirmPopup, {
                      onOK: o("WAWebModalManager").closeModalManager,
                      children: [
                        F.jsx(r("WDSText.react"), {
                          type: "Headline2",
                          colorName: "contentDefault",
                          textAlign: "center",
                          xstyle: W.callPopupTitle,
                          children: s._(/*BTDS*/ "Couldn't place the call"),
                        }),
                        F.jsx(r("WDSText.react"), {
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
                : (j(We, qe), !0)
              : (o("WAWebModalManager").ModalManager.open(
                  F.jsxs(o("WAWebConfirmPopup.react").ConfirmPopup, {
                    onOK: o("WAWebModalManager").closeModalManager,
                    children: [
                      F.jsx(r("WDSText.react"), {
                        type: "Headline2",
                        colorName: "contentDefault",
                        textAlign: "center",
                        xstyle: W.callPopupTitle,
                        children: s._(/*BTDS*/ "Your call can't be completed"),
                      }),
                      F.jsx(r("WDSText.react"), {
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
          var Ue = {
            entryPoint: o("WAWebWamEnumCatalogEntryPoint").CATALOG_ENTRY_POINT
              .CATALOG_ENTRY_POINT_DEEPLINK,
            isInitialStep: !0,
          };
          return (
            (t.data.campaignType === "chat_psa" ||
              t.data.campaignType === "banner") &&
              (Ue.promotionCampaign = "video-upload"),
            o("WAWebCatalogManagementFlowLoadable").openCatalogManagementFlow(
              Ue,
            ),
            !0
          );
        }
        case "CATALOG_LINKING_CHAT_PSA": {
          var Ve = t.data.deepLinkType;
          return (
            o("WAWebExecApiCmdHelpers").submitDeepLinkOpenWamEvent({
              deepLinkType: Ve,
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
                F.jsx(r("WAWebHatchPairingUnavailableDialog.react"), {}),
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
          var He = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                o("WAWebBotProfileAction").queryBotProfile(
                  o("WAWebBotUtils").HATCH_BOT_FBID_WID,
                );
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
          return (He(t.data.token), !0);
        }
        case "UGC_BOT": {
          o("WAWebCmd").Cmd.closeStatusViewer();
          var Ge = (function () {
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
          return (Ge(t.data.fbid), !0);
        }
        case "STICKER_PACK": {
          var ze = t.data.url;
          return (
            o("WAWebDrawerManager").DrawerManager.openDrawerRight(
              F.jsx(
                r("WAWebStickerStoreFlowLoadable").StickerStoreFlowLoadable,
                {
                  stickerPackId: ze,
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
          var je = B;
          return (
            je == null &&
              n("cr:9382") != null &&
              (je = n("cr:9382").handleClickCallLink),
            je == null || je(t, z(i, a)),
            !0
          );
        }
        case "CTWA_ADS_DATA_SHARING": {
          if (!o("WAWebMobilePlatforms").isSMB()) return !1;
          var Ke = t.source,
            Qe;
          switch (Ke) {
            case "ads_manager_3pd_guidance_card":
              Qe = o("WAWebWamEnumSmbDataSharingConsentSettingEntryPoint")
                .SMB_DATA_SHARING_CONSENT_SETTING_ENTRY_POINT
                .ENTRY_POINT_DEEP_LINK_ADS_MANAGER_3PD_GUIDANCE_CARD;
              break;
            default:
              Qe = o("WAWebWamEnumSmbDataSharingConsentSettingEntryPoint")
                .SMB_DATA_SHARING_CONSENT_SETTING_ENTRY_POINT
                .ENTRY_POINT_UNKNOWN;
              break;
          }
          return (
            o("WAWebDrawerManager").DrawerManager.openDrawerLeft(
              F.jsx(r("WAWebSMBDataSharingDrawer.react"), {
                onClose: o("WAWebDrawerManager").closeDrawerLeft,
                entrypoint: Qe,
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
                F.jsx(
                  o("WAWebBizBroadcastsUploadModalLoadable.react")
                    .WAWebBizBroadcastsUploadModalLoadable,
                  {
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
                    onUploadSuccess: G,
                  },
                ),
              ),
              !0)
            : !1;
        case "BIZ_BROADCAST_HOME": {
          var Xe;
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
          var Ye = t.data.source,
            Je;
          switch (Ye) {
            case "qp_chat_list_banner":
              Je = o("WAWebWamEnumEntryPoint").ENTRY_POINT.CHAT_BANNER;
              break;
            default:
              Je = o("WAWebWamEnumEntryPoint").ENTRY_POINT.DEEP_LINK;
              break;
          }
          var Ze = l !== !0;
          Ze &&
            o(
              "WAWebBusinessBroadcastUserJourneyLogger",
            ).BusinessBroadcastUserJourneyLogger.setDeeplinkAttribution(
              Je,
              t.data.moment,
            );
          var et = Ze
              ? Je
              : (Xe = o(
                    "WAWebBusinessBroadcastUserJourneyLogger",
                  ).BusinessBroadcastUserJourneyLogger.getEntryPoint()) != null
                ? Xe
                : Je,
            tt = function () {
              o("WAWebDrawerManager").DrawerManager.openDrawerFullscreen(
                F.jsx(
                  o("WAWebBusinessBroadcastHomeFlowLoadable")
                    .WAWebBusinessBroadcastHomeFlowLoadable,
                  {
                    entryPoint: et,
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
                  .then(tt)
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
              : tt(),
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
          var nt = n("cr:38809").WAWebVoipOngoingCallCollection,
            rt = nt.findOngoingCallActiveOnOtherSelfDevice();
          if (rt == null) return !0;
          try {
            o("WAWebVoipStartCall")
              .joinOngoingCallByCallId(
                rt.id.id,
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
          var ot = t.data,
            at = ot.fromDefaultProtocol,
            it = ot.lid,
            lt = ot.session;
          try {
            (o("WAWebCmd").Cmd.closeStatusViewer(),
              o("WAWebDrawerManager").DrawerManager.closeDrawerLeft(),
              o("WAWebDrawerManager").DrawerManager.closeDrawerMid(),
              o("WAWebCmd").Cmd.setActiveNavBarItem(
                o("WAWebNavBarTypes").NavBarItems.Chats,
              ));
            var st = o("WAWebWidFactory").createWid(it);
            o("WAWebFindChatAction")
              .findOrCreateLatestChat(st, "newChatFlow")
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
                      lt != null &&
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
                          mdXdrSessionUuid: lt,
                        }).commit(),
                      o("WAWebExecApiCmdHelpers").logDefaultProtocolNavigation(
                        at,
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
                  lt != null &&
                    new (o(
                      "WAWebMdLinkedDevicesWindowsXdrWamEvent",
                    ).MdLinkedDevicesWindowsXdrWamEvent)({
                      mdLinkedDevicesWindowsXdrStage: o(
                        "WAWebWamEnumMdLinkedDevicesWindowsXdrStage",
                      ).MD_LINKED_DEVICES_WINDOWS_XDR_STAGE
                        .DEEPLINK_NAVIGATION_FAILURE,
                      mdXdrSessionUuid: lt,
                    }).commit(),
                  o("WAWebExecApiCmdHelpers").logDefaultProtocolNavigation(
                    at,
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
              lt != null &&
                new (o(
                  "WAWebMdLinkedDevicesWindowsXdrWamEvent",
                ).MdLinkedDevicesWindowsXdrWamEvent)({
                  mdLinkedDevicesWindowsXdrStage: o(
                    "WAWebWamEnumMdLinkedDevicesWindowsXdrStage",
                  ).MD_LINKED_DEVICES_WINDOWS_XDR_STAGE
                    .DEEPLINK_NAVIGATION_FAILURE,
                  mdXdrSessionUuid: lt,
                }).commit(),
              o("WAWebExecApiCmdHelpers").logDefaultProtocolNavigation(at, !1));
          }
          return !0;
        }
        case "APP_OPEN": {
          var ut,
            ct = (ut = t.data) == null ? void 0 : ut.session;
          try {
            var dt;
            (o("WAWebCmd").Cmd.closeStatusViewer(),
              o("WAWebCmd").Cmd.closeActiveChat(),
              (dt = o("WAWebDrawerManager")).DrawerManager.closeDrawerLeft(),
              dt.DrawerManager.closeDrawerMid(),
              dt.DrawerManager.closeDrawerRight(),
              dt.DrawerManager.closeDrawerFullscreen(),
              o("WAWebCmd").Cmd.setActiveNavBarItem(
                o("WAWebNavBarTypes").NavBarItems.Chats,
              ),
              ct != null &&
                new (o(
                  "WAWebMdLinkedDevicesWindowsXdrWamEvent",
                ).MdLinkedDevicesWindowsXdrWamEvent)({
                  mdLinkedDevicesWindowsXdrStage: o(
                    "WAWebWamEnumMdLinkedDevicesWindowsXdrStage",
                  ).MD_LINKED_DEVICES_WINDOWS_XDR_STAGE
                    .DEEPLINK_NAVIGATION_SUCCESS,
                  mdXdrSessionUuid: ct,
                }).commit());
          } catch (e) {
            (o("WALogger").ERROR(
              T ||
                (T = babelHelpers.taggedTemplateLiteralLoose([
                  "Handling appOpen failed with exceptions",
                ])),
            ),
              ct != null &&
                new (o(
                  "WAWebMdLinkedDevicesWindowsXdrWamEvent",
                ).MdLinkedDevicesWindowsXdrWamEvent)({
                  mdLinkedDevicesWindowsXdrStage: o(
                    "WAWebWamEnumMdLinkedDevicesWindowsXdrStage",
                  ).MD_LINKED_DEVICES_WINDOWS_XDR_STAGE
                    .DEEPLINK_NAVIGATION_FAILURE,
                  mdXdrSessionUuid: ct,
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
                  : F.jsx(
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
        case "NEW_CALL": {
          try {
            (o("WAWebCmd").Cmd.closeStatusViewer(),
              o("WAWebExecApiCmdNewCall").handleNewCallDeeplink(t.data));
          } catch (e) {
            o("WALogger").ERROR(
              x ||
                (x = babelHelpers.taggedTemplateLiteralLoose([
                  "Opening new call flow failed with exceptions",
                ])),
            );
          }
          return !0;
        }
        case "WORK_CONTACT_SYNC": {
          var mt;
          return r("gkx")("26258") ||
            !((mt = t.data) != null && mt.compressedData)
            ? !1
            : (n("cr:2679") == null ||
                n("cr:2679").handleWorkContactSync(t.data.compressedData),
              !0);
        }
        case "SEND_FILE": {
          var pt;
          return (pt =
            n("cr:12407") == null ? void 0 : n("cr:12407")(t.data)) != null
            ? pt
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
                  $ ||
                    ($ = babelHelpers.taggedTemplateLiteralLoose([
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
        case "OIDC_CALLBACK":
          return (
            o("WAWebOIDCCallbackEventBus").WAWebOIDCCallbackEventBus.trigger(
              o("WAWebOIDCCallbackEventBus").OIDCCallbackEvent.OIDC_CALLBACK,
              t.data,
            ),
            !0
          );
        case "SET_ABOUT":
          return o("WAWebTextStatusGatingUtils").sendTextStatusEnabled()
            ? (o("WAWebCmd").Cmd.closeStatusViewer(),
              o("WAWebModalManager").ModalManager.open(
                F.jsx(
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
    l.default = Y;
  },
  226,
);
