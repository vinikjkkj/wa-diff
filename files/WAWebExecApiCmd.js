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
    "WAWebBizBroadcastDeviceCapabilityCommon",
    "WAWebBizBroadcastsManageAudiencePanelLoadable",
    "WAWebBizBroadcastsUploadModalLoadable.react",
    "WAWebBizFrontendGatingUtils",
    "WAWebBizNativeAdsEntryPointUtils",
    "WAWebBotFrontendGating",
    "WAWebBotGenTypingIndicatorMsg",
    "WAWebBotProfileAction",
    "WAWebBotUtils",
    "WAWebBroadcastApiParse",
    "WAWebBusinessAdCreationUtils",
    "WAWebBusinessBroadcastHomeFlowLoadable",
    "WAWebBusinessBroadcastUserJourneyLogger",
    "WAWebCTWATrackingPayloadUtils",
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
    "WAWebGroupInviteLinkModal.react",
    "WAWebInboxFiltersGatingUtils",
    "WAWebInfoFlowLoadable",
    "WAWebKeyboardTabUtils",
    "WAWebMdLinkedDevicesWindowsXdrWamEvent",
    "WAWebMobilePlatforms",
    "WAWebModalManager",
    "WAWebNavBarTypes",
    "WAWebNewChatFlowLoadable",
    "WAWebNewCommunityInfoDrawer.react",
    "WAWebNewsletterExecApiCmd",
    "WAWebNoop",
    "WAWebOIDCCallbackEventBus",
    "WAWebOpenChatFlow.react",
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
    "WAWebSignupGreetingAction",
    "WAWebSignupLoadingState",
    "WAWebStatusApiParse",
    "WAWebStatusAttachMediaFlow.react",
    "WAWebStatusNavigateTo",
    "WAWebStickerStoreFlowLoadable",
    "WAWebText.react",
    "WAWebTextStatusCollection",
    "WAWebTextStatusEditModalLoadable",
    "WAWebTextStatusGatingUtils",
    "WAWebUpdateUtmAction",
    "WAWebUserPrefsMeUser",
    "WAWebUsernameManagementDrawerLoadable",
    "WAWebUsernameWorkerCompatibleGatingUtils",
    "WAWebVoipGatingUtils",
    "WAWebVoipStartCall",
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
      x = D || (D = o("react")),
      $ = (e = n("cr:17104")) != null ? e : {},
      P = $.handleClickCallLink,
      N = { textAlignCenter: { textAlign: "x2b8uid", $$css: !0 } };
    function M(e, t) {
      return w.apply(this, arguments);
    }
    function w() {
      return (
        (w = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n;
          try {
            n = o("WAWebWidFactory").createUserWidOrThrow(e + "@c.us");
            var a = yield o("WAWebFindChatAction").findOrCreateLatestChat(
                n,
                "callUserDeeplink",
              ),
              i = a.chat;
            yield o("WAWebCmd").Cmd.openChatAt({
              chat: i,
              msgContext: null,
              chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.Deeplink,
            });
          } catch (e) {
            o("WALogger")
              .ERROR(
                k ||
                  (k = babelHelpers.taggedTemplateLiteralLoose([
                    "CALL_USER deep-link: failed to open chat",
                  ])),
              )
              .catching(r("getErrorSafe")(e))
              .sendLogs("calling-deep-link-open-chat-failed");
            return;
          }
          if (o("WAWebUserPrefsMeUser").isMeAccount(n)) {
            o("WALogger")
              .LOG(
                I ||
                  (I = babelHelpers.taggedTemplateLiteralLoose([
                    "CALL_USER deep-link: redirecting self-call to self chat",
                  ])),
              )
              .sendLogs("calling-deep-links-self-call");
            return;
          }
          try {
            yield o("WAWebVoipStartCall").startWAWebVoipCall(n, t);
          } catch (e) {
            o("WALogger")
              .ERROR(
                T ||
                  (T = babelHelpers.taggedTemplateLiteralLoose([
                    "CALL_USER deep-link: startWAWebVoipCall failed",
                  ])),
              )
              .catching(r("getErrorSafe")(e))
              .sendLogs("calling-deep-link-start-call-failed");
          }
        })),
        w.apply(this, arguments)
      );
    }
    function A(e) {
      var t = e.cmdData,
        a = e.isExternal,
        i = e.sessionId;
      switch (t.resultType) {
        case "GROUP_INVITE": {
          var l;
          o("WAWebCmd").Cmd.closeStatusViewer();
          var k = t.data;
          return (
            o("WAWebModalManager").ModalManager.open(
              x.jsx(r("WAWebGroupInviteLinkModal.react"), {
                groupCode: k.code,
                source: "invite_link",
              }),
            ),
            o("WAWebExecApiCmdHelpers").submitDeepLinkOpenWamEvent({
              deepLinkType: o("WAWebWamEnumDeepLinkType").DEEP_LINK_TYPE
                .DEEP_LINK_GROUP_INVITE,
              isExternal: a,
              campaign: (l = k.utm) == null ? void 0 : l.campaign,
            }),
            !0
          );
        }
        case "CATALOG": {
          o("WAWebCmd").Cmd.closeStatusViewer();
          var I = t.data,
            T = I.catalogOwnerJid,
            D = I.partnertoken,
            $ = I.utm;
          return (
            o("WAWebExecApiCmdHelpers").externalCtxAuthoriseWAChatIfEnabled({
              chatId: o("WAWebWidFactory").createWid(T),
              deepLinkType: t.resultType,
              isExternal: a,
              partnerToken: D,
            }),
            o("WAWebExecApiCmdHelpers").openChatAndCatalog(T, $),
            o("WAWebExecApiCmdHelpers").submitDeepLinkOpenWamEvent({
              deepLinkType: o("WAWebWamEnumDeepLinkType").DEEP_LINK_TYPE
                .DEEP_LINK_CATALOG,
              isExternal: a,
            }),
            !0
          );
        }
        case "PRODUCT": {
          o("WAWebCmd").Cmd.closeStatusViewer();
          var w = t.data,
            A = w.businessOwnerJid,
            F = w.partnertoken,
            O = w.productId,
            B = w.utm;
          return (
            o("WAWebExecApiCmdHelpers").externalCtxAuthoriseWAChatIfEnabled({
              chatId: o("WAWebWidFactory").createWid(A),
              deepLinkType: t.resultType,
              isExternal: a,
              partnerToken: F,
            }),
            o("WAWebExecApiCmdHelpers").openChatAndProduct(A, O, B),
            o("WAWebExecApiCmdHelpers").submitDeepLinkOpenWamEvent({
              deepLinkType: o("WAWebWamEnumDeepLinkType").DEEP_LINK_TYPE
                .DEEP_LINK_PRODUCT,
              isExternal: a,
            }),
            !0
          );
        }
        case "MSG_SEND": {
          o("WAWebCmd").Cmd.closeStatusViewer();
          var W = t.data,
            q = W.attachmentUris,
            U = W.conversionTuple,
            V = W.ctwaContextLinkData,
            H = W.customUrl,
            G = W.lid,
            z = W.phone,
            j = W.text,
            K = W.type,
            Q = W.username,
            X = W.utm,
            Y = null;
          (U == null ? void 0 : U.conversionSource) === "sharesheet" && (Y = G);
          var J = H != null || K === "business_profile",
            Z = Q != null;
          if (!r("isStringNullOrEmpty")(z) || J || Z) {
            var ee = function (n) {
                var e,
                  r = n.chat,
                  i = n.widLookupMethod;
                U &&
                  o(
                    "WAWebCTWATrackingPayloadUtils",
                  ).handleChatConversationOpenedWithNewMessage(r, U);
                var l = i === "customUrl";
                (l &&
                  (o("WAWebCustomUrlLogEvents").logClickOnCustomUrl(r),
                  o("WAWebCustomUrlLogEvents").logMessageSentByCustomUrl(r)),
                  X && o("WAWebUpdateUtmAction").addUtmToChat(r.id, X),
                  (e = r.contact.businessProfile) != null &&
                    e.isBizBot3p &&
                    o("WAWebBizBotLogging").logBizBot3pDeepLinkClickEvent(),
                  o(
                    "WAWebExecApiCmdHelpers",
                  ).externalCtxAuthoriseWAChatIfEnabled({
                    chatId: r.id,
                    deepLinkType: t.resultType,
                    isExternal: a,
                    partnerToken: t.data.partnertoken,
                  }),
                  j && (r.urlText = !0),
                  (r.urlNumber = !0),
                  l &&
                    o("WAWebDrawerManager").DrawerManager.openDrawerRight(
                      o(
                        "WAWebAdaptiveLayoutGatingUtils",
                      ).shouldUseDrawerDescriptor()
                        ? {
                            descriptorType: "info_flow",
                            chat: r,
                            profileEntryPoint: o(
                              "WAWebWamEnumProfileEntryPoint",
                            ).PROFILE_ENTRY_POINT.CUSTOM_URL_LINK,
                          }
                        : x.jsx(
                            o("WAWebInfoFlowLoadable").InfoFlowLoadable,
                            {
                              chat: r,
                              profileEntryPoint: o(
                                "WAWebWamEnumProfileEntryPoint",
                              ).PROFILE_ENTRY_POINT.CUSTOM_URL_LINK,
                            },
                            "info-" + r.id.toString(),
                          ),
                      {
                        transition: "slide-left",
                        focusType: o("WAWebKeyboardTabUtils").FocusType
                          .TABBABLE,
                      },
                    ));
                var s = W.signupId;
                s != null &&
                  z != null &&
                  o("WAWebSignupGating").isSignupAGMEnabled() &&
                  (o("WAWebSignupLoadingState").setSignupLoading(
                    r.id.toString(),
                    !0,
                  ),
                  o("WAWebSignupGreetingAction").injectSignupGreetingMessage(
                    z,
                    s,
                  ));
              },
              te =
                i != null
                  ? {
                      handleOnce: function () {
                        new (o(
                          "WAWebDeepLinkMsgSentWamEvent",
                        ).DeepLinkMsgSentWamEvent)({
                          deepLinkAction: o("WAWebWamEnumDeepLinkAction")
                            .DEEP_LINK_ACTION.MSG_SENT,
                          deepLinkSessionId: i,
                        }).commit();
                      },
                    }
                  : void 0,
              ne = Z
                ? {
                    deepLinkHasPhoneNumber: !r("isStringNullOrEmpty")(z),
                    deepLinkHasText: !r("isStringNullOrEmpty")(j),
                    deepLinkHasUsername: !0,
                    deepLinkHasUsernamePin:
                      !r("isStringNullOrEmpty")(W.usernameKey) ||
                      W.invalidUsernameKey === !0,
                    deepLinkSessionId: i,
                  }
                : void 0;
            (o("WAWebModalManager").ModalManager.open(
              x.jsx(o("WAWebOpenChatFlow.react").OpenChatFlow, {
                target: o("WAWebExecApiCmdHelpers").getOpenChatFlowProps(W),
                msgText: j,
                onSuccess: ee,
                ctwaContextLinkData: V,
                sendLogAttributes: te,
                deepLinkLoggingData: ne,
              }),
              { transition: "modal-flow" },
            ),
              o("WAWebExecApiCmdHelpers").submitDeepLinkOpenWamEvent({
                deepLinkType: V
                  ? o("WAWebWamEnumDeepLinkType").DEEP_LINK_TYPE.DEEP_LINK_CTWA
                  : o("WAWebWamEnumDeepLinkType").DEEP_LINK_TYPE.DEEP_LINK_CHAT,
                isExternal: a,
                deepLinkSessionId: i,
                campaign: X == null ? void 0 : X.campaign,
              }));
          } else {
            var re = function (t) {
              if ((U == null ? void 0 : U.conversionSource) === "sharesheet") {
                var e = { msgText: j, urlText: !0 };
                (t && (e.attachments = t),
                  Y != null && Y.length > 0 && (e.preSelectedContactLid = Y),
                  o("WAWebModalManager").ModalManager.open(
                    x.jsx(
                      o("WAWebSendMsgModalImplLoadable")
                        .SendMsgModalImplLoadable,
                      babelHelpers.extends({}, e),
                    ),
                    { transition: "modal-flow" },
                  ));
              } else {
                var n = { msgText: j, urlText: !0 };
                (t && (n.attachments = t),
                  o("WAWebModalManager").ModalManager.open(
                    x.jsx(
                      o("WAWebSendMsgMultiModalLoadable")
                        .SendMsgMultiModalLoadable,
                      babelHelpers.extends({}, n),
                    ),
                    { transition: "modal-flow" },
                  ));
              }
            };
            q != null && q.length > 0
              ? o("WAWebExecApiCmdHelpers")
                  .downloadAttachments(q)
                  .then(function (e) {
                    re(e);
                  })
                  .finally(r("WAWebNoop"))
              : re();
            var oe =
              (U == null ? void 0 : U.conversionSource) === "sharesheet"
                ? o("WAWebWamEnumDeepLinkType").DEEP_LINK_TYPE
                    .DEEP_LINK_SHARESHEET
                : o("WAWebWamEnumDeepLinkType").DEEP_LINK_TYPE
                    .DEEP_LINK_MSG_FORWARD;
            o("WAWebExecApiCmdHelpers").submitDeepLinkOpenWamEvent({
              deepLinkType: oe,
              isExternal: a,
              deepLinkSessionId: void 0,
              campaign: X == null ? void 0 : X.campaign,
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
              x.jsx(r("WAWebNewCommunityInfoDrawer.react"), {}),
              { focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE },
            ));
          var ae = t.data.entrypointType;
          return (
            o(
              "WAWebCommunityCreationFlowMetricUtils",
            ).UiCommunityCreationAction.startSession(
              o(
                "WAWebCommunityCreationFlowMetricUtils",
              ).getDeeplinkEntrypointType(ae),
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
              isExternal: a,
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
              isExternal: a,
            }),
            !0
          );
        case "AVATAR_STICKERPACK": {
          var ie = o("WAWebFaqUrl").getAvatarFaqUrl();
          return (window.location.replace(ie), !0);
        }
        case "ADVERTISE": {
          if (!o("WAWebMobilePlatforms").isSMB()) return !1;
          var le = o(
            "WAWebActiveAccountInfoContext.react",
          ).getActiveAccountInfo();
          if (le == null || le === "not-linked") return !1;
          var se = t.data,
            ue = se.campaignId,
            ce = se.campaignType;
          return (
            o("WAWebChatlistUtils").handleAdCreation({
              adCreationUrlInput: {
                activeAccountInfo: le,
                sourceAdCreation: o(
                  "WAWebBusinessAdCreationUtils",
                ).getAdCreationTypeFromCampaignType(ce),
              },
              lwiEntryPoint: o(
                "WAWebBizNativeAdsEntryPointUtils",
              ).getLwiEntryPointFromCampaignType(ce),
              waCampaignId: ue,
            }),
            !0
          );
        }
        case "MANAGE_ADS": {
          if (!o("WAWebMobilePlatforms").isSMB()) return !1;
          var de = o(
            "WAWebActiveAccountInfoContext.react",
          ).getActiveAccountInfo();
          if (de == null || de === "not-linked") return !1;
          switch (t.trigger) {
            case "chatListBanner":
              o("WAWebChatlistUtils").handleManageAds(
                de,
                "whatsapp_smb_web_manage_ads_chat_list_banner",
                o("WAWebWamEnumLwiEntryPoint").LWI_ENTRY_POINT
                  .SMB_CHAT_LIST_BANNER_MANAGE_AD,
              );
              break;
            default:
              (t.trigger,
                o("WAWebChatlistUtils").handleManageAds(
                  de,
                  "whatsapp_smb_web_manage_ads_native",
                  o("WAWebWamEnumLwiEntryPoint").LWI_ENTRY_POINT
                    .SMB_BUSINESS_HOME_MANAGE_AD,
                ));
              break;
          }
          return !0;
        }
        case "MESSAGE_YOURSELF": {
          try {
            var me = o("WAWebUserPrefsMeUser").getMeUser();
            o("WAWebFindChatAction")
              .findOrCreateLatestChat(me, "newChatFlow")
              .then(function (e) {
                var t = e.chat;
                o("WAWebCmd")
                  .Cmd.openChatFromUnread({
                    chat: t,
                    chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint
                      .Deeplink,
                  })
                  .then(function (e) {
                    e && o("WAWebComposeBoxActions").ComposeBoxActions.focus(t);
                  });
              });
          } catch (e) {
            o("WALogger").ERROR(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
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
          var pe =
            t.data.campaignType === "chatlist_banner"
              ? "chatlist_banner"
              : t.data.campaignType === "aymt_email"
                ? "aymt_email"
                : t.data.campaignType === "aymt_ads_manager_notification"
                  ? "aymt_ads_manager_notification"
                  : "chatlist_banner";
          return o("WAWebBizFrontendGatingUtils").isPixOnWebEnabled()
            ? (o("WAWebAddEditPixFeature").openPixCredentialManagementModal(
                pe,
                pe,
              ),
              !0)
            : (o("WAWebPrimaryFeaturesModel").PrimaryFeatures.on(
                "change:customPaymentMethodsSyncSupport",
                function () {
                  if (o("WAWebBizFrontendGatingUtils").isPixOnWebEnabled())
                    return (
                      o(
                        "WAWebAddEditPixFeature",
                      ).openPixCredentialManagementModal(pe, pe),
                      !0
                    );
                },
              ),
              !1);
        }
        case "EDIT_PROFILE_PICTURE": {
          try {
            if (
              !o("WAWebABProps").getABPropConfigValue(
                "profile_picture_deeplink_enabled",
              )
            )
              return !1;
            o("WAWebCmd").Cmd.closeStatusViewer();
            var _e = o("WAWebUserPrefsMeUser").getMeUser(),
              fe = o(
                "WAWebTextStatusCollection",
              ).TextStatusCollection.assertGet(_e),
              ge = o("WAWebContactCollection").ContactCollection.assertGet(_e),
              he = o(
                "WAWebProfilePicThumbCollection",
              ).ProfilePicThumbCollection.assertGet(_e);
            return (
              o("WAWebDrawerManager").DrawerManager.openDrawerLeft(
                x.jsx(n("cr:1923"), {
                  status: fe,
                  profilePicThumb: he,
                  contact: ge,
                  conn: o("WAWebConnModel").Conn,
                  onClose: o("WAWebDrawerManager").closeDrawerLeft,
                  isInitialStep: !0,
                }),
                { focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE },
              ),
              o("WAWebExecApiCmdHelpers").submitDeepLinkOpenWamEvent({
                deepLinkType: o("WAWebWamEnumDeepLinkType").DEEP_LINK_TYPE
                  .DEEP_LINK_EDIT_PROFILE_PIC,
                isExternal: a,
              }),
              !0
            );
          } catch (e) {
            o("WALogger").ERROR(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
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
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "PROFILE_USERNAME deep link - username feature disabled",
                  ])),
              ),
              !1
            );
          try {
            o("WAWebCmd").Cmd.closeStatusViewer();
            var ye = o("WAWebUserPrefsMeUser").getMeLidUserOrThrow(),
              Ce = o("WAWebContactCollection").ContactCollection.assertGet(ye),
              be = Ce.username;
            return (
              r("isStringNullOrEmpty")(be)
                ? (o("WAWebModalManager").ModalManager.open(
                    x.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
                      onOK: o("WAWebModalManager").closeModalManager,
                      children: s._(
                        /*BTDS*/ "You can set up your username from your primary phone.",
                      ),
                    }),
                  ),
                  o("WALogger").LOG(
                    p ||
                      (p = babelHelpers.taggedTemplateLiteralLoose([
                        "PROFILE_USERNAME deep link - use primary device alert",
                      ])),
                  ))
                : (o("WAWebDrawerManager").DrawerManager.openDrawerLeft(
                    x.jsx(r("WAWebUsernameManagementDrawerLoadable"), {
                      contactId: Ce.id,
                      username: be,
                    }),
                    {
                      focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
                    },
                  ),
                  o("WALogger").LOG(
                    m ||
                      (m = babelHelpers.taggedTemplateLiteralLoose([
                        "PROFILE_USERNAME deep link - opened username drawer",
                      ])),
                  )),
              !0
            );
          } catch (e) {
            return (
              o("WALogger").ERROR(
                _ ||
                  (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "PROFILE_USERNAME deep link failed with exception",
                  ])),
              ),
              !1
            );
          }
        }
        case "BROADCAST": {
          var ve = t.data.feature;
          switch (ve) {
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
          var Se = t.data.postType;
          switch (Se) {
            case o("WAWebStatusApiParse").StatusPostType.Text:
              o("WAWebModalManager").ModalManager.openMedia(
                x.jsx(
                  o("WAWebCreateTextStatusFlowLoadable")
                    .CreateTextStatusFlowLoadable,
                  {},
                ),
                { transition: "status-modal" },
              );
              break;
            case o("WAWebStatusApiParse").StatusPostType.Media:
              o("WAWebModalManager").ModalManager.open(
                x.jsx(r("WAWebStatusAttachMediaFlow.react"), {}),
              );
              break;
          }
          return !0;
        }
        case "CALL_USER": {
          var Re = t.data.phone,
            Le = t.data.video === !0;
          return (
            o("WAWebExecApiCmdHelpers").submitDeepLinkOpenWamEvent({
              deepLinkType: o("WAWebWamEnumDeepLinkType").DEEP_LINK_TYPE
                .DEEP_LINK_CALL,
              isExternal: a,
            }),
            o("WAWebVoipGatingUtils").isCallingEnabled()
              ? Re == null
                ? (o("WALogger")
                    .LOG(
                      g ||
                        (g = babelHelpers.taggedTemplateLiteralLoose([
                          "CALL_USER deep-link missing phone",
                        ])),
                    )
                    .sendLogs("calling-deep-link-missing-phone"),
                  o("WAWebModalManager").ModalManager.open(
                    x.jsxs(o("WAWebConfirmPopup.react").ConfirmPopup, {
                      onOK: o("WAWebModalManager").closeModalManager,
                      children: [
                        x.jsx(o("WAWebText.react").WAWebTextLarge, {
                          xstyle: N.textAlignCenter,
                          margin: [16, 0],
                          weight: "medium",
                          children: s._(/*BTDS*/ "Couldn't place the call"),
                        }),
                        x.jsx(o("WAWebText.react").WAWebTextMuted, {
                          xstyle: N.textAlignCenter,
                          children: s._(
                            /*BTDS*/ "The call link appears to be invalid. Please check it and try again.",
                          ),
                        }),
                      ],
                    }),
                  ),
                  !0)
                : (M(Re, Le), !0)
              : (o("WAWebModalManager").ModalManager.open(
                  x.jsxs(o("WAWebConfirmPopup.react").ConfirmPopup, {
                    onOK: o("WAWebModalManager").closeModalManager,
                    children: [
                      x.jsx(o("WAWebText.react").WAWebTextLarge, {
                        xstyle: N.textAlignCenter,
                        margin: [16, 0],
                        weight: "medium",
                        children: s._(/*BTDS*/ "Your call can't be completed"),
                      }),
                      x.jsx(o("WAWebText.react").WAWebTextMuted, {
                        xstyle: N.textAlignCenter,
                        children: s._(
                          /*BTDS*/ "This feature is not supported on your device. Log into WhatsApp on your mobile phone and try again.",
                        ),
                      }),
                    ],
                  }),
                ),
                o("WALogger")
                  .LOG(
                    f ||
                      (f = babelHelpers.taggedTemplateLiteralLoose([
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
                isExternal: a,
              }),
              !0)
            : !1;
        case "OPEN_CATALOG": {
          if (a || !o("WAWebMobilePlatforms").isSMB()) return !1;
          var Ee = {
            entryPoint: o("WAWebWamEnumCatalogEntryPoint").CATALOG_ENTRY_POINT
              .CATALOG_ENTRY_POINT_DEEPLINK,
            isInitialStep: !0,
          };
          return (
            (t.data.campaignType === "chat_psa" ||
              t.data.campaignType === "banner") &&
              (Ee.promotionCampaign = "video-upload"),
            o("WAWebCatalogManagementFlowLoadable").openCatalogManagementFlow(
              Ee,
            ),
            !0
          );
        }
        case "CATALOG_LINKING_CHAT_PSA": {
          var ke = t.data.deepLinkType;
          return (
            o("WAWebExecApiCmdHelpers").submitDeepLinkOpenWamEvent({
              deepLinkType: ke,
              isExternal: a,
            }),
            o("WAWebExternalLink.react").openExternalLink(
              o("WAWebFaqUrl").getWhatsappUsePhoneFallbackUrl(),
            ),
            !0
          );
        }
        case "MAN_LINK": {
          if (!o("WAWebBotFrontendGating").isManusIntegrationEnabled())
            return !1;
          o("WAWebCmd").Cmd.closeStatusViewer();
          var Ie = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                o("WAWebBotProfileAction").queryBotProfile(
                  o("WAWebBotUtils").MANUS_BOT_FBID_WID,
                );
                var t = yield o("WAWebFindChatAction").findOrCreateLatestChat(
                    o("WAWebBotUtils").MANUS_BOT_FBID_WID,
                    "manDeeplink",
                  ),
                  n = t.chat;
                (yield o("WAWebCmd").Cmd.openChatAt({
                  chat: n,
                  msgContext: null,
                  chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint
                    .Deeplink,
                }),
                  e != null &&
                    o("WAWebComposeBoxActions").ComposeBoxActions.paste(
                      null,
                      e,
                      { insertLeadingSpace: !1 },
                    ));
              },
            );
            return function (n) {
              return e.apply(this, arguments);
            };
          })();
          return (Ie(t.data.token), !0);
        }
        case "HATCH_LINK": {
          if (!o("WAWebBotFrontendGating").isHatchIntegrationEnabled())
            return !1;
          o("WAWebCmd").Cmd.closeStatusViewer();
          var Te = (function () {
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
          return (Te(t.data.token), !0);
        }
        case "UGC_BOT": {
          o("WAWebCmd").Cmd.closeStatusViewer();
          var De = (function () {
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
          return (De(t.data.fbid), !0);
        }
        case "STICKER_PACK": {
          var xe = t.data.url;
          return (
            o("WAWebDrawerManager").DrawerManager.openDrawerRight(
              x.jsx(
                r("WAWebStickerStoreFlowLoadable").StickerStoreFlowLoadable,
                {
                  stickerPackId: xe,
                  onSticker: r("WAWebSendStickerToActiveChatStickersAction"),
                },
              ),
              { focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE },
            ),
            !0
          );
        }
        case "CALL_LINK": {
          var $e = P;
          return (
            $e == null &&
              n("cr:9382") != null &&
              ($e = n("cr:9382").handleClickCallLink),
            $e == null ||
              $e(
                t,
                a
                  ? o("WAWebWamEnumLobbyEntryPointType").LOBBY_ENTRY_POINT_TYPE
                      .CALL_LINK_EXTERNAL
                  : o("WAWebWamEnumLobbyEntryPointType").LOBBY_ENTRY_POINT_TYPE
                      .CALL_LINK_INTERNAL,
              ),
            !0
          );
        }
        case "CTWA_ADS_DATA_SHARING": {
          if (!o("WAWebMobilePlatforms").isSMB()) return !1;
          var Pe = t.source,
            Ne;
          switch (Pe) {
            case "ads_manager_3pd_guidance_card":
              Ne = o("WAWebWamEnumSmbDataSharingConsentSettingEntryPoint")
                .SMB_DATA_SHARING_CONSENT_SETTING_ENTRY_POINT
                .ENTRY_POINT_DEEP_LINK_ADS_MANAGER_3PD_GUIDANCE_CARD;
              break;
            default:
              Ne = o("WAWebWamEnumSmbDataSharingConsentSettingEntryPoint")
                .SMB_DATA_SHARING_CONSENT_SETTING_ENTRY_POINT
                .ENTRY_POINT_UNKNOWN;
              break;
          }
          return (
            o("WAWebDrawerManager").DrawerManager.openDrawerLeft(
              x.jsx(r("WAWebSMBDataSharingDrawer.react"), {
                onClose: o("WAWebDrawerManager").closeDrawerLeft,
                entrypoint: Ne,
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
                x.jsx(
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
                    onUploadSuccess: function (t, n) {
                      return o(
                        "WAWebDrawerManager",
                      ).DrawerManager.openDrawerMid(
                        x.jsx(
                          o("WAWebBizBroadcastsManageAudiencePanelLoadable")
                            .WAWebBizBroadcastsManageAudiencePanelLoadable,
                          {
                            entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT
                              .CHAT_BANNER,
                            validContactsData: t,
                            errorList: n,
                          },
                        ),
                        {
                          focusType: o("WAWebKeyboardTabUtils").FocusType
                            .TABBABLE,
                        },
                      );
                    },
                  },
                ),
              ),
              !0)
            : !1;
        case "BIZ_BROADCAST_HOME": {
          if (
            !o("WAWebMobilePlatforms").isSMB() ||
            !o(
              "WAWebBizBroadcastDeviceCapabilityCommon",
            ).isBizBroadcastEnabledAndDeviceSupported(!1)
          )
            return !1;
          var Me = t.data.source,
            we;
          switch (Me) {
            case "qp_chat_list_banner":
              we = o("WAWebWamEnumEntryPoint").ENTRY_POINT.CHAT_BANNER;
              break;
            default:
              we = o("WAWebWamEnumEntryPoint").ENTRY_POINT.DEEP_LINK;
              break;
          }
          var Ae = function () {
            o("WAWebDrawerManager").DrawerManager.openDrawerFullscreen(
              x.jsx(
                o("WAWebBusinessBroadcastHomeFlowLoadable")
                  .WAWebBusinessBroadcastHomeFlowLoadable,
                {
                  entryPoint: we,
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
            a
              ? o("WAWebReleaseToEventLoop")
                  .releaseToEventLoop()
                  .then(Ae)
                  .catch(function (e) {
                    o("WALogger")
                      .ERROR(
                        h ||
                          (h = babelHelpers.taggedTemplateLiteralLoose([
                            "BizBroadcastHome external deeplink drawer open failed",
                          ])),
                      )
                      .catching(r("getErrorSafe")(e))
                      .sendLogs("bb-home-deeplink-drawer-fail");
                  })
              : Ae(),
            !0
          );
        }
        case "WEB_REGISTRATION":
        case "WEB_REGISTRATION_CAMPAIGN":
          return !1;
        case "CALL_RECEIVED": {
          if (
            !o("WAWebVoipGatingUtils").isDeviceSwitchingEnabled() ||
            n("cr:38809") == null
          )
            return !1;
          var Fe = n("cr:38809").WAWebVoipOngoingCallCollection,
            Oe = Fe.findOngoingCallActiveOnOtherSelfDevice();
          if (Oe == null) return !0;
          try {
            o("WAWebVoipStartCall")
              .joinOngoingCallByCallId(Oe.id.id)
              .catch(function (e) {
                o("WALogger").ERROR(
                  y ||
                    (y = babelHelpers.taggedTemplateLiteralLoose([
                      "callReceived joinOngoingCall failed",
                    ])),
                );
              });
          } catch (e) {
            o("WALogger").ERROR(
              C ||
                (C = babelHelpers.taggedTemplateLiteralLoose([
                  "callReceived joinOngoingCall failed",
                ])),
            );
          }
          return !0;
        }
        case "CHAT_OPEN": {
          var Be = t.data,
            We = Be.lid,
            qe = Be.session;
          try {
            (o("WAWebCmd").Cmd.closeStatusViewer(),
              o("WAWebDrawerManager").DrawerManager.closeDrawerLeft(),
              o("WAWebDrawerManager").DrawerManager.closeDrawerMid(),
              o("WAWebCmd").Cmd.setActiveNavBarItem(
                o("WAWebNavBarTypes").NavBarItems.Chats,
              ));
            var Ue = o("WAWebWidFactory").createWid(We);
            o("WAWebFindChatAction")
              .findOrCreateLatestChat(Ue, "newChatFlow")
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
                      qe != null &&
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
                          mdXdrSessionUuid: qe,
                        }).commit());
                  });
              })
              .catch(function (e) {
                (o("WALogger").ERROR(
                  b ||
                    (b = babelHelpers.taggedTemplateLiteralLoose([
                      "Opening chat via chatOpen failed with async exception",
                    ])),
                ),
                  qe != null &&
                    new (o(
                      "WAWebMdLinkedDevicesWindowsXdrWamEvent",
                    ).MdLinkedDevicesWindowsXdrWamEvent)({
                      mdLinkedDevicesWindowsXdrStage: o(
                        "WAWebWamEnumMdLinkedDevicesWindowsXdrStage",
                      ).MD_LINKED_DEVICES_WINDOWS_XDR_STAGE
                        .DEEPLINK_NAVIGATION_FAILURE,
                      mdXdrSessionUuid: qe,
                    }).commit());
              });
          } catch (e) {
            (o("WALogger").ERROR(
              v ||
                (v = babelHelpers.taggedTemplateLiteralLoose([
                  "Opening chat via chatOpen failed with exceptions",
                ])),
            ),
              qe != null &&
                new (o(
                  "WAWebMdLinkedDevicesWindowsXdrWamEvent",
                ).MdLinkedDevicesWindowsXdrWamEvent)({
                  mdLinkedDevicesWindowsXdrStage: o(
                    "WAWebWamEnumMdLinkedDevicesWindowsXdrStage",
                  ).MD_LINKED_DEVICES_WINDOWS_XDR_STAGE
                    .DEEPLINK_NAVIGATION_FAILURE,
                  mdXdrSessionUuid: qe,
                }).commit());
          }
          return !0;
        }
        case "APP_OPEN": {
          var Ve,
            He = (Ve = t.data) == null ? void 0 : Ve.session;
          try {
            var Ge;
            (o("WAWebCmd").Cmd.closeStatusViewer(),
              o("WAWebCmd").Cmd.closeActiveChat(),
              (Ge = o("WAWebDrawerManager")).DrawerManager.closeDrawerLeft(),
              Ge.DrawerManager.closeDrawerMid(),
              Ge.DrawerManager.closeDrawerRight(),
              Ge.DrawerManager.closeDrawerFullscreen(),
              o("WAWebCmd").Cmd.setActiveNavBarItem(
                o("WAWebNavBarTypes").NavBarItems.Chats,
              ),
              He != null &&
                new (o(
                  "WAWebMdLinkedDevicesWindowsXdrWamEvent",
                ).MdLinkedDevicesWindowsXdrWamEvent)({
                  mdLinkedDevicesWindowsXdrStage: o(
                    "WAWebWamEnumMdLinkedDevicesWindowsXdrStage",
                  ).MD_LINKED_DEVICES_WINDOWS_XDR_STAGE
                    .DEEPLINK_NAVIGATION_SUCCESS,
                  mdXdrSessionUuid: He,
                }).commit());
          } catch (e) {
            (o("WALogger").ERROR(
              S ||
                (S = babelHelpers.taggedTemplateLiteralLoose([
                  "Handling appOpen failed with exceptions",
                ])),
            ),
              He != null &&
                new (o(
                  "WAWebMdLinkedDevicesWindowsXdrWamEvent",
                ).MdLinkedDevicesWindowsXdrWamEvent)({
                  mdLinkedDevicesWindowsXdrStage: o(
                    "WAWebWamEnumMdLinkedDevicesWindowsXdrStage",
                  ).MD_LINKED_DEVICES_WINDOWS_XDR_STAGE
                    .DEEPLINK_NAVIGATION_FAILURE,
                  mdXdrSessionUuid: He,
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
                  : x.jsx(
                      o("WAWebNewChatFlowLoadable").NewChatFlowLoadable,
                      {},
                    ),
                { focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE },
              ));
          } catch (e) {
            o("WALogger").ERROR(
              R ||
                (R = babelHelpers.taggedTemplateLiteralLoose([
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
              L ||
                (L = babelHelpers.taggedTemplateLiteralLoose([
                  "Opening new call flow failed with exceptions",
                ])),
            );
          }
          return !0;
        }
        case "WORK_CONTACT_SYNC": {
          var ze;
          return r("gkx")("26258") ||
            !((ze = t.data) != null && ze.compressedData)
            ? !1
            : (n("cr:2679") == null ||
                n("cr:2679").handleWorkContactSync(t.data.compressedData),
              !0);
        }
        case "SEND_FILE": {
          var je;
          return (je =
            n("cr:12407") == null ? void 0 : n("cr:12407")(t.data)) != null
            ? je
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
                  E ||
                    (E = babelHelpers.taggedTemplateLiteralLoose([
                      "Failed to load or execute newsletter status deeplink handler",
                    ])),
                );
              }),
            o("WAWebExecApiCmdHelpers").submitDeepLinkOpenWamEvent({
              deepLinkType: o("WAWebWamEnumDeepLinkType").DEEP_LINK_TYPE
                .DEEP_LINK_CHANNEL_STATUS,
              isExternal: a,
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
                x.jsx(
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
                isExternal: a,
              }),
              !0)
            : !1;
        default:
          return (t.resultType, !1);
      }
    }
    l.default = A;
  },
  226,
);
