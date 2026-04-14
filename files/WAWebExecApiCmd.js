__d(
  "WAWebExecApiCmd",
  [
    "fbt",
    "WALogger",
    "WAWebABProps",
    "WAWebActiveAccountInfoContext.react",
    "WAWebAdCreationLogger",
    "WAWebAdaptiveLayoutGatingUtils",
    "WAWebAddEditPixFeature",
    "WAWebApi",
    "WAWebBizBotLogging",
    "WAWebBizBroadcastDeviceCapabilityCommon",
    "WAWebBizBroadcastsManageAudiencePanelLoadable",
    "WAWebBizBroadcastsUploadModalLoadable.react",
    "WAWebBizFrontendGatingUtils",
    "WAWebBotFrontendGating",
    "WAWebBotProfileAction",
    "WAWebBotUtils",
    "WAWebBroadcastApiParse",
    "WAWebBusinessAdCreationUtils",
    "WAWebBusinessBroadcastHomeFlowLoadable",
    "WAWebBusinessBroadcastUserJourneyLogger",
    "WAWebCTWATrackingPayloadUtils",
    "WAWebCatalogManagementFlowLoadable",
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
    "WAWebOpenChatFlow.react",
    "WAWebOpenNewsletterTab",
    "WAWebPrimaryFeaturesModel",
    "WAWebProfilePicThumbCollection",
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
    "WAWebUpdateUtmAction",
    "WAWebUserPrefsMeUser",
    "WAWebUsernameManagementDrawerLoadable",
    "WAWebUsernameWorkerCompatibleGatingUtils",
    "WAWebVoipCallsTabDrawerNewCall.react",
    "WAWebVoipCallsTabNavigateTo",
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
    "cr:9382",
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
      S = v || (v = o("react")),
      R = (e = n("cr:17104")) != null ? e : {},
      L = R.handleClickCallLink,
      E = { textAlignCenter: { textAlign: "x2b8uid", $$css: !0 } };
    function k(e) {
      var t = e.cmdData,
        a = e.isExternal,
        i = e.sessionId;
      switch (t.resultType) {
        case "GROUP_INVITE": {
          var l;
          o("WAWebCmd").Cmd.closeStatusViewer();
          var v = t.data;
          return (
            o("WAWebModalManager").ModalManager.open(
              S.jsx(r("WAWebGroupInviteLinkModal.react"), {
                groupCode: v.code,
                source: "invite_link",
              }),
            ),
            o("WAWebExecApiCmdHelpers").submitDeepLinkOpenWamEvent({
              deepLinkType: o("WAWebWamEnumDeepLinkType").DEEP_LINK_TYPE
                .DEEP_LINK_GROUP_INVITE,
              isExternal: a,
              campaign: (l = v.utm) == null ? void 0 : l.campaign,
            }),
            !0
          );
        }
        case "CATALOG": {
          o("WAWebCmd").Cmd.closeStatusViewer();
          var R = t.data,
            k = R.catalogOwnerJid,
            I = R.partnertoken,
            T = R.utm;
          return (
            o("WAWebExecApiCmdHelpers").externalCtxAuthoriseWAChatIfEnabled(
              o("WAWebWidFactory").createWid(k),
              t.resultType,
              I,
              a,
            ),
            o("WAWebExecApiCmdHelpers").openChatAndCatalog(k, T),
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
          var D = t.data,
            x = D.businessOwnerJid,
            $ = D.partnertoken,
            P = D.productId,
            N = D.utm;
          return (
            o("WAWebExecApiCmdHelpers").externalCtxAuthoriseWAChatIfEnabled(
              o("WAWebWidFactory").createWid(x),
              t.resultType,
              $,
              a,
            ),
            o("WAWebExecApiCmdHelpers").openChatAndProduct(x, P, N),
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
          var M = t.data,
            w = M.attachmentUris,
            A = M.conversionTuple,
            F = M.ctwaContextLinkData,
            O = M.customUrl,
            B = M.lid,
            W = M.phone,
            q = M.text,
            U = M.type,
            V = M.username,
            H = M.utm,
            G = null;
          (A == null ? void 0 : A.conversionSource) === "sharesheet" && (G = B);
          var z = O != null || U === "business_profile",
            j = V != null;
          if (!r("isStringNullOrEmpty")(W) || z || j) {
            var K = function (n) {
                var e,
                  r = n.chat,
                  i = n.widLookupMethod;
                A &&
                  o(
                    "WAWebCTWATrackingPayloadUtils",
                  ).handleChatConversationOpenedWithNewMessage(r, A);
                var l = i === "customUrl";
                (l &&
                  (o("WAWebCustomUrlLogEvents").logClickOnCustomUrl(r),
                  o("WAWebCustomUrlLogEvents").logMessageSentByCustomUrl(r)),
                  H && o("WAWebUpdateUtmAction").addUtmToChat(r.id, H),
                  (e = r.contact.businessProfile) != null &&
                    e.isBizBot3p &&
                    o("WAWebBizBotLogging").logBizBot3pDeepLinkClickEvent(),
                  o(
                    "WAWebExecApiCmdHelpers",
                  ).externalCtxAuthoriseWAChatIfEnabled(
                    r.id,
                    t.resultType,
                    t.data.partnertoken,
                    a,
                  ),
                  q && (r.urlText = !0),
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
                        : S.jsx(
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
                var s = M.signupId;
                s != null &&
                  W != null &&
                  o("WAWebSignupGating").isSignupAGMEnabled() &&
                  (o("WAWebSignupLoadingState").setSignupLoading(
                    r.id.toString(),
                    !0,
                  ),
                  o("WAWebSignupGreetingAction").injectSignupGreetingMessage(
                    W,
                    s,
                  ));
              },
              Q =
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
              X = j
                ? {
                    deepLinkHasPhoneNumber: !r("isStringNullOrEmpty")(W),
                    deepLinkHasText: !r("isStringNullOrEmpty")(q),
                    deepLinkHasUsername: !0,
                    deepLinkHasUsernamePin: !r("isStringNullOrEmpty")(
                      M.usernameKey,
                    ),
                    deepLinkSessionId: i,
                  }
                : void 0;
            (o("WAWebModalManager").ModalManager.open(
              S.jsx(o("WAWebOpenChatFlow.react").OpenChatFlow, {
                target: o("WAWebExecApiCmdHelpers").getOpenChatFlowProps(M),
                msgText: q,
                onSuccess: K,
                ctwaContextLinkData: F,
                sendLogAttributes: Q,
                deepLinkLoggingData: X,
              }),
              { transition: "modal-flow" },
            ),
              o("WAWebExecApiCmdHelpers").submitDeepLinkOpenWamEvent({
                deepLinkType: F
                  ? o("WAWebWamEnumDeepLinkType").DEEP_LINK_TYPE.DEEP_LINK_CTWA
                  : o("WAWebWamEnumDeepLinkType").DEEP_LINK_TYPE.DEEP_LINK_CHAT,
                isExternal: a,
                deepLinkSessionId: i,
                campaign: H == null ? void 0 : H.campaign,
              }));
          } else {
            var Y = function (t) {
              if ((A == null ? void 0 : A.conversionSource) === "sharesheet") {
                var e = { msgText: q, urlText: !0 };
                (t && (e.attachments = t),
                  G != null && G.length > 0 && (e.preSelectedContactLid = G),
                  o("WAWebModalManager").ModalManager.open(
                    S.jsx(
                      o("WAWebSendMsgModalImplLoadable")
                        .SendMsgModalImplLoadable,
                      babelHelpers.extends({}, e),
                    ),
                    { transition: "modal-flow" },
                  ));
              } else {
                var n = { msgText: q, urlText: !0 };
                (t && (n.attachments = t),
                  o("WAWebModalManager").ModalManager.open(
                    S.jsx(
                      o("WAWebSendMsgMultiModalLoadable")
                        .SendMsgMultiModalLoadable,
                      babelHelpers.extends({}, n),
                    ),
                    { transition: "modal-flow" },
                  ));
              }
            };
            w != null && w.length > 0
              ? o("WAWebExecApiCmdHelpers")
                  .downloadAttachments(w)
                  .then(function (e) {
                    Y(e);
                  })
                  .finally(r("WAWebNoop"))
              : Y();
            var J =
              (A == null ? void 0 : A.conversionSource) === "sharesheet"
                ? o("WAWebWamEnumDeepLinkType").DEEP_LINK_TYPE
                    .DEEP_LINK_SHARESHEET
                : o("WAWebWamEnumDeepLinkType").DEEP_LINK_TYPE
                    .DEEP_LINK_MSG_FORWARD;
            o("WAWebExecApiCmdHelpers").submitDeepLinkOpenWamEvent({
              deepLinkType: J,
              isExternal: a,
              deepLinkSessionId: void 0,
              campaign: H == null ? void 0 : H.campaign,
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
              S.jsx(r("WAWebNewCommunityInfoDrawer.react"), {}),
              { focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE },
            ));
          var Z = t.data.entrypointType;
          return (
            o(
              "WAWebCommunityCreationFlowMetricUtils",
            ).UiCommunityCreationAction.startSession(
              o(
                "WAWebCommunityCreationFlowMetricUtils",
              ).getDeeplinkEntrypointType(Z),
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
          var ee = o("WAWebFaqUrl").getAvatarFaqUrl();
          return (window.location.replace(ee), !0);
        }
        case "ADVERTISE": {
          if (!o("WAWebMobilePlatforms").isSMB()) return !1;
          var te = o(
            "WAWebActiveAccountInfoContext.react",
          ).getActiveAccountInfo();
          if (te == null || te === "not-linked") return !1;
          var ne = t.data,
            re = ne.campaignId,
            oe = ne.campaignType;
          return (
            o("WAWebChatlistUtils").handleAdCreation({
              adCreationUrlInput: {
                activeAccountInfo: te,
                sourceAdCreation: o(
                  "WAWebBusinessAdCreationUtils",
                ).getAdCreationTypeFromCampaignType(oe),
              },
              lwiEntryPoint: o(
                "WAWebAdCreationLogger",
              ).getLwiEntryPointFromCampaignType(oe),
              waCampaignId: re,
            }),
            !0
          );
        }
        case "MANAGE_ADS": {
          if (!o("WAWebMobilePlatforms").isSMB()) return !1;
          var ae = o(
            "WAWebActiveAccountInfoContext.react",
          ).getActiveAccountInfo();
          if (ae == null || ae === "not-linked") return !1;
          switch (t.trigger) {
            case "chatListBanner":
              o("WAWebChatlistUtils").handleManageAds(
                ae,
                "whatsapp_smb_web_manage_ads_chat_list_banner",
                o("WAWebWamEnumLwiEntryPoint").LWI_ENTRY_POINT
                  .SMB_CHAT_LIST_BANNER_MANAGE_AD,
              );
              break;
            default:
              (t.trigger,
                o("WAWebChatlistUtils").handleManageAds(
                  ae,
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
            var ie = o("WAWebUserPrefsMeUser").getMeUser();
            o("WAWebFindChatAction")
              .findOrCreateLatestChat(ie, "newChatFlow")
              .then(function (e) {
                var t = e.chat;
                o("WAWebCmd")
                  .Cmd.openChatFromUnread({ chat: t })
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
          var le =
            t.data.campaignType === "chatlist_banner"
              ? "chatlist_banner"
              : t.data.campaignType === "aymt_email"
                ? "aymt_email"
                : t.data.campaignType === "aymt_ads_manager_notification"
                  ? "aymt_ads_manager_notification"
                  : "chatlist_banner";
          return o("WAWebBizFrontendGatingUtils").isPixOnWebEnabled()
            ? (o("WAWebAddEditPixFeature").openPixCredentialManagementModal(
                le,
                le,
              ),
              !0)
            : (o("WAWebPrimaryFeaturesModel").PrimaryFeatures.on(
                "change:customPaymentMethodsSyncSupport",
                function () {
                  if (o("WAWebBizFrontendGatingUtils").isPixOnWebEnabled())
                    return (
                      o(
                        "WAWebAddEditPixFeature",
                      ).openPixCredentialManagementModal(le, le),
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
            var se = o("WAWebUserPrefsMeUser").getMeUser(),
              ue = o(
                "WAWebTextStatusCollection",
              ).TextStatusCollection.assertGet(se),
              ce = o("WAWebContactCollection").ContactCollection.assertGet(se),
              de = o(
                "WAWebProfilePicThumbCollection",
              ).ProfilePicThumbCollection.assertGet(se);
            return (
              o("WAWebDrawerManager").DrawerManager.openDrawerLeft(
                S.jsx(n("cr:1923"), {
                  status: ue,
                  profilePicThumb: de,
                  contact: ce,
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
            var me = o("WAWebUserPrefsMeUser").getMeLidUserOrThrow(),
              pe = o("WAWebContactCollection").ContactCollection.assertGet(me),
              _e = pe.username;
            return (
              r("isStringNullOrEmpty")(_e)
                ? (o("WAWebModalManager").ModalManager.open(
                    S.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
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
                    S.jsx(r("WAWebUsernameManagementDrawerLoadable"), {
                      contactId: pe.id,
                      username: _e,
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
          var fe = t.data.feature;
          switch (fe) {
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
          var ge = t.data.postType;
          switch (ge) {
            case o("WAWebStatusApiParse").StatusPostType.Text:
              o("WAWebModalManager").ModalManager.openMedia(
                S.jsx(
                  o("WAWebCreateTextStatusFlowLoadable")
                    .CreateTextStatusFlowLoadable,
                  {},
                ),
                { transition: "status-modal" },
              );
              break;
            case o("WAWebStatusApiParse").StatusPostType.Media:
              o("WAWebModalManager").ModalManager.open(
                S.jsx(r("WAWebStatusAttachMediaFlow.react"), {}),
              );
              break;
          }
          return !0;
        }
        case "CALL_USER":
          return (
            o("WAWebModalManager").ModalManager.open(
              S.jsxs(o("WAWebConfirmPopup.react").ConfirmPopup, {
                onOK: o("WAWebModalManager").closeModalManager,
                children: [
                  S.jsx(o("WAWebText.react").WAWebTextLarge, {
                    xstyle: E.textAlignCenter,
                    margin: [16, 0],
                    weight: "medium",
                    children: s._(/*BTDS*/ "Your call can't be completed"),
                  }),
                  S.jsx(o("WAWebText.react").WAWebTextMuted, {
                    xstyle: E.textAlignCenter,
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
            !0
          );
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
          var he = {
            entryPoint: o("WAWebWamEnumCatalogEntryPoint").CATALOG_ENTRY_POINT
              .CATALOG_ENTRY_POINT_DEEPLINK,
            isInitialStep: !0,
          };
          return (
            (t.data.campaignType === "chat_psa" ||
              t.data.campaignType === "banner") &&
              (he.promotionCampaign = "video-upload"),
            o("WAWebCatalogManagementFlowLoadable").openCatalogManagementFlow(
              he,
            ),
            !0
          );
        }
        case "CATALOG_LINKING_CHAT_PSA": {
          var ye = t.data.deepLinkType;
          return (
            o("WAWebExecApiCmdHelpers").submitDeepLinkOpenWamEvent({
              deepLinkType: ye,
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
          var Ce = (function () {
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
          return (Ce(t.data.token), !0);
        }
        case "HATCH_LINK": {
          if (!o("WAWebBotFrontendGating").isHatchIntegrationEnabled())
            return !1;
          o("WAWebCmd").Cmd.closeStatusViewer();
          var be = (function () {
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
                }),
                  e != null &&
                    o("WAWebSendBotRequestWelcomeAction").sendBotRequestWelcome(
                      n,
                      e,
                    ));
              },
            );
            return function (n) {
              return e.apply(this, arguments);
            };
          })();
          return (be(t.data.token), !0);
        }
        case "UGC_BOT": {
          o("WAWebCmd").Cmd.closeStatusViewer();
          var ve = (function () {
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
                });
              },
            );
            return function (n) {
              return e.apply(this, arguments);
            };
          })();
          return (ve(t.data.fbid), !0);
        }
        case "STICKER_PACK": {
          var Se = t.data.url;
          return (
            o("WAWebDrawerManager").DrawerManager.openDrawerRight(
              S.jsx(
                r("WAWebStickerStoreFlowLoadable").StickerStoreFlowLoadable,
                {
                  stickerPackId: Se,
                  onSticker: r("WAWebSendStickerToActiveChatStickersAction"),
                },
              ),
              { focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE },
            ),
            !0
          );
        }
        case "CALL_LINK": {
          var Re = L;
          return (
            Re == null &&
              n("cr:9382") != null &&
              (Re = n("cr:9382").handleClickCallLink),
            Re == null ||
              Re(
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
          var Le = t.source,
            Ee;
          switch (Le) {
            case "ads_manager_3pd_guidance_card":
              Ee = o("WAWebWamEnumSmbDataSharingConsentSettingEntryPoint")
                .SMB_DATA_SHARING_CONSENT_SETTING_ENTRY_POINT
                .ENTRY_POINT_DEEP_LINK_ADS_MANAGER_3PD_GUIDANCE_CARD;
              break;
            default:
              Ee = o("WAWebWamEnumSmbDataSharingConsentSettingEntryPoint")
                .SMB_DATA_SHARING_CONSENT_SETTING_ENTRY_POINT
                .ENTRY_POINT_UNKNOWN;
              break;
          }
          return (
            o("WAWebDrawerManager").DrawerManager.openDrawerLeft(
              S.jsx(r("WAWebSMBDataSharingDrawer.react"), {
                onClose: o("WAWebDrawerManager").closeDrawerLeft,
                entrypoint: Ee,
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
                S.jsx(
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
                        S.jsx(
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
          var ke = t.source,
            Ie;
          switch (ke) {
            case "qp_chat_list_banner":
              Ie = o("WAWebWamEnumEntryPoint").ENTRY_POINT.CHAT_BANNER;
              break;
            default:
              Ie = o("WAWebWamEnumEntryPoint").ENTRY_POINT.DEEP_LINK;
              break;
          }
          return (
            o("WAWebDrawerManager").DrawerManager.openDrawerFullscreen(
              S.jsx(
                o("WAWebBusinessBroadcastHomeFlowLoadable")
                  .WAWebBusinessBroadcastHomeFlowLoadable,
                {
                  entryPoint: Ie,
                  onClose: function () {
                    return o(
                      "WAWebDrawerManager",
                    ).DrawerManager.closeDrawerFullscreen();
                  },
                },
              ),
              { focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE },
            ),
            !0
          );
        }
        case "WEB_REGISTRATION":
        case "WEB_REGISTRATION_CAMPAIGN":
          return !1;
        case "CHAT_OPEN": {
          var Te = t.data,
            De = Te.lid,
            xe = Te.session;
          try {
            (o("WAWebCmd").Cmd.closeStatusViewer(),
              o("WAWebDrawerManager").DrawerManager.closeDrawerLeft(),
              o("WAWebDrawerManager").DrawerManager.closeDrawerMid(),
              o("WAWebCmd").Cmd.setActiveNavBarItem(
                o("WAWebNavBarTypes").NavBarItems.Chats,
              ));
            var $e = o("WAWebWidFactory").createWid(De);
            o("WAWebFindChatAction")
              .findOrCreateLatestChat($e, "newChatFlow")
              .then(function (e) {
                var t = e.chat;
                o("WAWebCmd")
                  .Cmd.openChatFromUnread({ chat: t })
                  .then(function (e) {
                    (e &&
                      (o("WAWebComposeBoxActions").ComposeBoxActions.focus(t),
                      o("WAWebCmd").Cmd.trigger("scroll_to_active_chat")),
                      xe != null &&
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
                          mdXdrSessionUuid: xe,
                        }).commit());
                  });
              })
              .catch(function (e) {
                (o("WALogger").ERROR(
                  g ||
                    (g = babelHelpers.taggedTemplateLiteralLoose([
                      "Opening chat via chatOpen failed with async exception",
                    ])),
                ),
                  xe != null &&
                    new (o(
                      "WAWebMdLinkedDevicesWindowsXdrWamEvent",
                    ).MdLinkedDevicesWindowsXdrWamEvent)({
                      mdLinkedDevicesWindowsXdrStage: o(
                        "WAWebWamEnumMdLinkedDevicesWindowsXdrStage",
                      ).MD_LINKED_DEVICES_WINDOWS_XDR_STAGE
                        .DEEPLINK_NAVIGATION_FAILURE,
                      mdXdrSessionUuid: xe,
                    }).commit());
              });
          } catch (e) {
            (o("WALogger").ERROR(
              h ||
                (h = babelHelpers.taggedTemplateLiteralLoose([
                  "Opening chat via chatOpen failed with exceptions",
                ])),
            ),
              xe != null &&
                new (o(
                  "WAWebMdLinkedDevicesWindowsXdrWamEvent",
                ).MdLinkedDevicesWindowsXdrWamEvent)({
                  mdLinkedDevicesWindowsXdrStage: o(
                    "WAWebWamEnumMdLinkedDevicesWindowsXdrStage",
                  ).MD_LINKED_DEVICES_WINDOWS_XDR_STAGE
                    .DEEPLINK_NAVIGATION_FAILURE,
                  mdXdrSessionUuid: xe,
                }).commit());
          }
          return !0;
        }
        case "APP_OPEN": {
          var Pe,
            Ne = (Pe = t.data) == null ? void 0 : Pe.session;
          try {
            var Me;
            (o("WAWebCmd").Cmd.closeStatusViewer(),
              o("WAWebCmd").Cmd.closeActiveChat(),
              (Me = o("WAWebDrawerManager")).DrawerManager.closeDrawerLeft(),
              Me.DrawerManager.closeDrawerMid(),
              Me.DrawerManager.closeDrawerRight(),
              Me.DrawerManager.closeDrawerFullscreen(),
              o("WAWebCmd").Cmd.setActiveNavBarItem(
                o("WAWebNavBarTypes").NavBarItems.Chats,
              ),
              Ne != null &&
                new (o(
                  "WAWebMdLinkedDevicesWindowsXdrWamEvent",
                ).MdLinkedDevicesWindowsXdrWamEvent)({
                  mdLinkedDevicesWindowsXdrStage: o(
                    "WAWebWamEnumMdLinkedDevicesWindowsXdrStage",
                  ).MD_LINKED_DEVICES_WINDOWS_XDR_STAGE
                    .DEEPLINK_NAVIGATION_SUCCESS,
                  mdXdrSessionUuid: Ne,
                }).commit());
          } catch (e) {
            (o("WALogger").ERROR(
              y ||
                (y = babelHelpers.taggedTemplateLiteralLoose([
                  "Handling appOpen failed with exceptions",
                ])),
            ),
              Ne != null &&
                new (o(
                  "WAWebMdLinkedDevicesWindowsXdrWamEvent",
                ).MdLinkedDevicesWindowsXdrWamEvent)({
                  mdLinkedDevicesWindowsXdrStage: o(
                    "WAWebWamEnumMdLinkedDevicesWindowsXdrStage",
                  ).MD_LINKED_DEVICES_WINDOWS_XDR_STAGE
                    .DEEPLINK_NAVIGATION_FAILURE,
                  mdXdrSessionUuid: Ne,
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
                  : S.jsx(
                      o("WAWebNewChatFlowLoadable").NewChatFlowLoadable,
                      {},
                    ),
                { focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE },
              ));
          } catch (e) {
            o("WALogger").ERROR(
              C ||
                (C = babelHelpers.taggedTemplateLiteralLoose([
                  "Opening new chat flow failed with exceptions",
                ])),
            );
          }
          return !0;
        }
        case "NEW_CALL": {
          try {
            (o("WAWebCmd").Cmd.closeStatusViewer(),
              o("WAWebCmd").Cmd.setActiveNavBarItem(
                o("WAWebNavBarTypes").NavBarItems.Calls,
              ),
              o("WAWebVoipCallsTabNavigateTo").navigateToVoipCallsTab({}),
              self.setTimeout(function () {
                o("WAWebDrawerManager").DrawerManager.openDrawerLeft(
                  S.jsx(r("WAWebVoipCallsTabDrawerNewCall.react"), {}),
                  { focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE },
                );
              }, 0));
          } catch (e) {
            o("WALogger").ERROR(
              b ||
                (b = babelHelpers.taggedTemplateLiteralLoose([
                  "Opening new call flow failed with exceptions",
                ])),
            );
          }
          return !0;
        }
        case "WORK_CONTACT_SYNC": {
          var we;
          return r("gkx")("26258") ||
            !((we = t.data) != null && we.compressedData)
            ? !1
            : (n("cr:2679") == null ||
                n("cr:2679").handleWorkContactSync(t.data.compressedData),
              !0);
        }
        case "SEND_FILE": {
          var Ae;
          return (Ae =
            n("cr:12407") == null ? void 0 : n("cr:12407")(t.data)) != null
            ? Ae
            : !1;
        }
        default:
          return (t.resultType, !1);
      }
    }
    l.default = k;
  },
  226,
);
