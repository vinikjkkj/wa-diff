__d(
  "WAWebExecApiCmd",
  [
    "fbt",
    "JSResourceForInteraction",
    "WALogger",
    "WAWebABProps",
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
      I = k || (k = o("react")),
      T = (e = n("cr:17104")) != null ? e : {},
      D = T.handleClickCallLink,
      x = { textAlignCenter: { textAlign: "x2b8uid", $$css: !0 } };
    function $(e, t) {
      return P.apply(this, arguments);
    }
    function P() {
      return (
        (P = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
                R ||
                  (R = babelHelpers.taggedTemplateLiteralLoose([
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
                L ||
                  (L = babelHelpers.taggedTemplateLiteralLoose([
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
                E ||
                  (E = babelHelpers.taggedTemplateLiteralLoose([
                    "CALL_USER deep-link: startWAWebVoipCall failed",
                  ])),
              )
              .catching(r("getErrorSafe")(e))
              .sendLogs("calling-deep-link-start-call-failed");
          }
        })),
        P.apply(this, arguments)
      );
    }
    function N(e) {
      var t = e.cmdData,
        a = e.isExternal,
        i = e.sessionId;
      switch (t.resultType) {
        case "GROUP_INVITE": {
          var l;
          o("WAWebCmd").Cmd.closeStatusViewer();
          var R = t.data;
          return (
            o("WAWebModalManager").ModalManager.open(
              I.jsx(r("WAWebGroupInviteLinkModal.react"), {
                groupCode: R.code,
                source: "invite_link",
              }),
            ),
            o("WAWebExecApiCmdHelpers").submitDeepLinkOpenWamEvent({
              deepLinkType: o("WAWebWamEnumDeepLinkType").DEEP_LINK_TYPE
                .DEEP_LINK_GROUP_INVITE,
              isExternal: a,
              campaign: (l = R.utm) == null ? void 0 : l.campaign,
            }),
            !0
          );
        }
        case "CATALOG": {
          o("WAWebCmd").Cmd.closeStatusViewer();
          var L = t.data,
            E = L.catalogOwnerJid,
            k = L.partnertoken,
            T = L.utm;
          return (
            o("WAWebExecApiCmdHelpers").externalCtxAuthoriseWAChatIfEnabled({
              chatId: o("WAWebWidFactory").createWid(E),
              deepLinkType: t.resultType,
              isExternal: a,
              partnerToken: k,
            }),
            o("WAWebExecApiCmdHelpers").openChatAndCatalog(E, T),
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
          var P = t.data,
            N = P.businessOwnerJid,
            M = P.partnertoken,
            w = P.productId,
            A = P.utm;
          return (
            o("WAWebExecApiCmdHelpers").externalCtxAuthoriseWAChatIfEnabled({
              chatId: o("WAWebWidFactory").createWid(N),
              deepLinkType: t.resultType,
              isExternal: a,
              partnerToken: M,
            }),
            o("WAWebExecApiCmdHelpers").openChatAndProduct(N, w, A),
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
          var F = t.data,
            O = F.attachmentUris,
            B = F.conversionTuple,
            W = F.ctwaContextLinkData,
            q = F.customUrl,
            U = F.lid,
            V = F.phone,
            H = F.text,
            G = F.type,
            z = F.username,
            j = F.utm,
            K = null;
          (B == null ? void 0 : B.conversionSource) === "sharesheet" && (K = U);
          var Q = q != null || G === "business_profile",
            X = z != null;
          if (!r("isStringNullOrEmpty")(V) || Q || X) {
            var Y = function (n) {
                var e,
                  r = n.chat,
                  i = n.widLookupMethod;
                B &&
                  o(
                    "WAWebCTWATrackingPayloadUtils",
                  ).handleChatConversationOpenedWithNewMessage(r, B);
                var l = i === "customUrl";
                (l &&
                  (o("WAWebCustomUrlLogEvents").logClickOnCustomUrl(r),
                  o("WAWebCustomUrlLogEvents").logMessageSentByCustomUrl(r)),
                  j && o("WAWebUpdateUtmAction").addUtmToChat(r.id, j),
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
                  H && (r.urlText = !0),
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
                        : I.jsx(
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
                var s = F.signupId;
                s != null &&
                  V != null &&
                  o("WAWebSignupGating").isSignupAGMEnabled() &&
                  (o("WAWebSignupLoadingState").setSignupLoading(
                    r.id.toString(),
                    !0,
                  ),
                  o("WAWebSignupGreetingAction").injectSignupGreetingMessage(
                    V,
                    s,
                  ));
              },
              J =
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
              Z = X
                ? {
                    deepLinkHasPhoneNumber: !r("isStringNullOrEmpty")(V),
                    deepLinkHasText: !r("isStringNullOrEmpty")(H),
                    deepLinkHasUsername: !0,
                    deepLinkHasUsernamePin:
                      !r("isStringNullOrEmpty")(F.usernameKey) ||
                      F.invalidUsernameKey === !0,
                    deepLinkSessionId: i,
                  }
                : void 0;
            (o("WAWebModalManager").ModalManager.open(
              I.jsx(o("WAWebOpenChatFlow.react").OpenChatFlow, {
                target: o("WAWebExecApiCmdHelpers").getOpenChatFlowProps(F),
                msgText: H,
                onSuccess: Y,
                ctwaContextLinkData: W,
                sendLogAttributes: J,
                deepLinkLoggingData: Z,
              }),
              { transition: "modal-flow" },
            ),
              o("WAWebExecApiCmdHelpers").submitDeepLinkOpenWamEvent({
                deepLinkType: W
                  ? o("WAWebWamEnumDeepLinkType").DEEP_LINK_TYPE.DEEP_LINK_CTWA
                  : o("WAWebWamEnumDeepLinkType").DEEP_LINK_TYPE.DEEP_LINK_CHAT,
                isExternal: a,
                deepLinkSessionId: i,
                campaign: j == null ? void 0 : j.campaign,
              }));
          } else {
            var ee = function (t) {
              if ((B == null ? void 0 : B.conversionSource) === "sharesheet") {
                var e = { msgText: H, urlText: !0 };
                (t && (e.attachments = t),
                  K != null && K.length > 0 && (e.preSelectedContactLid = K),
                  o("WAWebModalManager").ModalManager.open(
                    I.jsx(
                      o("WAWebSendMsgModalImplLoadable")
                        .SendMsgModalImplLoadable,
                      babelHelpers.extends({}, e),
                    ),
                    { transition: "modal-flow" },
                  ));
              } else {
                var n = { msgText: H, urlText: !0 };
                (t && (n.attachments = t),
                  o("WAWebModalManager").ModalManager.open(
                    I.jsx(
                      o("WAWebSendMsgMultiModalLoadable")
                        .SendMsgMultiModalLoadable,
                      babelHelpers.extends({}, n),
                    ),
                    { transition: "modal-flow" },
                  ));
              }
            };
            O != null && O.length > 0
              ? o("WAWebExecApiCmdHelpers")
                  .downloadAttachments(O)
                  .then(function (e) {
                    ee(e);
                  })
                  .finally(r("WAWebNoop"))
              : ee();
            var te =
              (B == null ? void 0 : B.conversionSource) === "sharesheet"
                ? o("WAWebWamEnumDeepLinkType").DEEP_LINK_TYPE
                    .DEEP_LINK_SHARESHEET
                : o("WAWebWamEnumDeepLinkType").DEEP_LINK_TYPE
                    .DEEP_LINK_MSG_FORWARD;
            o("WAWebExecApiCmdHelpers").submitDeepLinkOpenWamEvent({
              deepLinkType: te,
              isExternal: a,
              deepLinkSessionId: void 0,
              campaign: j == null ? void 0 : j.campaign,
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
              I.jsx(r("WAWebNewCommunityInfoDrawer.react"), {}),
              { focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE },
            ));
          var ne = t.data.entrypointType;
          return (
            o(
              "WAWebCommunityCreationFlowMetricUtils",
            ).UiCommunityCreationAction.startSession(
              o(
                "WAWebCommunityCreationFlowMetricUtils",
              ).getDeeplinkEntrypointType(ne),
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
          var re = o("WAWebFaqUrl").getAvatarFaqUrl();
          return (window.location.replace(re), !0);
        }
        case "ADVERTISE": {
          if (!o("WAWebMobilePlatforms").isSMB()) return !1;
          var oe = o(
            "WAWebActiveAccountInfoContext.react",
          ).getActiveAccountInfo();
          if (oe == null || oe === "not-linked") return !1;
          var ae = t.data,
            ie = ae.campaignId,
            le = ae.campaignType;
          return (
            o("WAWebChatlistUtils").handleAdCreation({
              adCreationUrlInput: {
                activeAccountInfo: oe,
                sourceAdCreation: o(
                  "WAWebBusinessAdCreationUtils",
                ).getAdCreationTypeFromCampaignType(le),
              },
              lwiEntryPoint: o(
                "WAWebBizNativeAdsEntryPointUtils",
              ).getLwiEntryPointFromCampaignType(le),
              waCampaignId: ie,
            }),
            !0
          );
        }
        case "MANAGE_ADS": {
          if (!o("WAWebMobilePlatforms").isSMB()) return !1;
          var se = o(
            "WAWebActiveAccountInfoContext.react",
          ).getActiveAccountInfo();
          if (se == null || se === "not-linked") return !1;
          switch (t.trigger) {
            case "chatListBanner":
              o("WAWebChatlistUtils").handleManageAds(
                se,
                "whatsapp_smb_web_manage_ads_chat_list_banner",
                o("WAWebWamEnumLwiEntryPoint").LWI_ENTRY_POINT
                  .SMB_CHAT_LIST_BANNER_MANAGE_AD,
              );
              break;
            default:
              (t.trigger,
                o("WAWebChatlistUtils").handleManageAds(
                  se,
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
            var ue = o("WAWebUserPrefsMeUser").getMeUser();
            o("WAWebFindChatAction")
              .findOrCreateLatestChat(ue, "newChatFlow")
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
          var ce =
            t.data.campaignType === "chatlist_banner"
              ? "chatlist_banner"
              : t.data.campaignType === "aymt_email"
                ? "aymt_email"
                : t.data.campaignType === "aymt_ads_manager_notification"
                  ? "aymt_ads_manager_notification"
                  : "chatlist_banner";
          return o("WAWebBizFrontendGatingUtils").isPixOnWebEnabled()
            ? (o("WAWebAddEditPixFeature").openPixCredentialManagementModal(
                ce,
                ce,
              ),
              !0)
            : (o("WAWebPrimaryFeaturesModel").PrimaryFeatures.on(
                "change:customPaymentMethodsSyncSupport",
                function () {
                  if (o("WAWebBizFrontendGatingUtils").isPixOnWebEnabled())
                    return (
                      o(
                        "WAWebAddEditPixFeature",
                      ).openPixCredentialManagementModal(ce, ce),
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
            var de = o("WAWebUserPrefsMeUser").getMeUser(),
              me = o(
                "WAWebTextStatusCollection",
              ).TextStatusCollection.assertGet(de),
              pe = o("WAWebContactCollection").ContactCollection.assertGet(de),
              _e = o(
                "WAWebProfilePicThumbCollection",
              ).ProfilePicThumbCollection.assertGet(de);
            return (
              o("WAWebDrawerManager").DrawerManager.openDrawerLeft(
                I.jsx(n("cr:1923"), {
                  status: me,
                  profilePicThumb: _e,
                  contact: pe,
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
            var fe = o("WAWebUserPrefsMeUser").getMeLidUserOrThrow(),
              ge = o("WAWebContactCollection").ContactCollection.assertGet(fe),
              he = ge.username;
            return (
              r("isStringNullOrEmpty")(he)
                ? (o("WAWebModalManager").ModalManager.open(
                    I.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
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
                    I.jsx(r("WAWebUsernameManagementDrawerLoadable"), {
                      contactId: ge.id,
                      username: he,
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
          var ye = t.data.feature;
          switch (ye) {
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
          var Ce = t.data.postType;
          switch (Ce) {
            case o("WAWebStatusApiParse").StatusPostType.Text:
              o("WAWebModalManager").ModalManager.openMedia(
                I.jsx(
                  o("WAWebCreateTextStatusFlowLoadable")
                    .CreateTextStatusFlowLoadable,
                  {},
                ),
                { transition: "status-modal" },
              );
              break;
            case o("WAWebStatusApiParse").StatusPostType.Media:
              o("WAWebModalManager").ModalManager.open(
                I.jsx(r("WAWebStatusAttachMediaFlow.react"), {}),
              );
              break;
          }
          return !0;
        }
        case "CALL_USER": {
          var be = t.data.phone,
            ve = t.data.video === !0;
          return (
            o("WAWebExecApiCmdHelpers").submitDeepLinkOpenWamEvent({
              deepLinkType: o("WAWebWamEnumDeepLinkType").DEEP_LINK_TYPE
                .DEEP_LINK_CALL,
              isExternal: a,
            }),
            o("WAWebVoipGatingUtils").isCallingEnabled()
              ? be == null
                ? (o("WALogger")
                    .LOG(
                      g ||
                        (g = babelHelpers.taggedTemplateLiteralLoose([
                          "CALL_USER deep-link missing phone",
                        ])),
                    )
                    .sendLogs("calling-deep-link-missing-phone"),
                  o("WAWebModalManager").ModalManager.open(
                    I.jsxs(o("WAWebConfirmPopup.react").ConfirmPopup, {
                      onOK: o("WAWebModalManager").closeModalManager,
                      children: [
                        I.jsx(o("WAWebText.react").WAWebTextLarge, {
                          xstyle: x.textAlignCenter,
                          margin: [16, 0],
                          weight: "medium",
                          children: s._(/*BTDS*/ "Couldn't place the call"),
                        }),
                        I.jsx(o("WAWebText.react").WAWebTextMuted, {
                          xstyle: x.textAlignCenter,
                          children: s._(
                            /*BTDS*/ "The call link appears to be invalid. Please check it and try again.",
                          ),
                        }),
                      ],
                    }),
                  ),
                  !0)
                : ($(be, ve), !0)
              : (o("WAWebModalManager").ModalManager.open(
                  I.jsxs(o("WAWebConfirmPopup.react").ConfirmPopup, {
                    onOK: o("WAWebModalManager").closeModalManager,
                    children: [
                      I.jsx(o("WAWebText.react").WAWebTextLarge, {
                        xstyle: x.textAlignCenter,
                        margin: [16, 0],
                        weight: "medium",
                        children: s._(/*BTDS*/ "Your call can't be completed"),
                      }),
                      I.jsx(o("WAWebText.react").WAWebTextMuted, {
                        xstyle: x.textAlignCenter,
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
          var Se = {
            entryPoint: o("WAWebWamEnumCatalogEntryPoint").CATALOG_ENTRY_POINT
              .CATALOG_ENTRY_POINT_DEEPLINK,
            isInitialStep: !0,
          };
          return (
            (t.data.campaignType === "chat_psa" ||
              t.data.campaignType === "banner") &&
              (Se.promotionCampaign = "video-upload"),
            o("WAWebCatalogManagementFlowLoadable").openCatalogManagementFlow(
              Se,
            ),
            !0
          );
        }
        case "CATALOG_LINKING_CHAT_PSA": {
          var Re = t.data.deepLinkType;
          return (
            o("WAWebExecApiCmdHelpers").submitDeepLinkOpenWamEvent({
              deepLinkType: Re,
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
          var Le = (function () {
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
          return (Le(t.data.token), !0);
        }
        case "HATCH_LINK": {
          if (!o("WAWebBotFrontendGating").isHatchIntegrationEnabled())
            return !1;
          o("WAWebCmd").Cmd.closeStatusViewer();
          var Ee = (function () {
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
          return (Ee(t.data.token), !0);
        }
        case "UGC_BOT": {
          o("WAWebCmd").Cmd.closeStatusViewer();
          var ke = (function () {
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
          return (ke(t.data.fbid), !0);
        }
        case "STICKER_PACK": {
          var Ie = t.data.url;
          return (
            o("WAWebDrawerManager").DrawerManager.openDrawerRight(
              I.jsx(
                r("WAWebStickerStoreFlowLoadable").StickerStoreFlowLoadable,
                {
                  stickerPackId: Ie,
                  onSticker: r("WAWebSendStickerToActiveChatStickersAction"),
                },
              ),
              { focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE },
            ),
            !0
          );
        }
        case "CALL_LINK": {
          var Te = D;
          return (
            Te == null &&
              n("cr:9382") != null &&
              (Te = n("cr:9382").handleClickCallLink),
            Te == null ||
              Te(
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
          var De = t.source,
            xe;
          switch (De) {
            case "ads_manager_3pd_guidance_card":
              xe = o("WAWebWamEnumSmbDataSharingConsentSettingEntryPoint")
                .SMB_DATA_SHARING_CONSENT_SETTING_ENTRY_POINT
                .ENTRY_POINT_DEEP_LINK_ADS_MANAGER_3PD_GUIDANCE_CARD;
              break;
            default:
              xe = o("WAWebWamEnumSmbDataSharingConsentSettingEntryPoint")
                .SMB_DATA_SHARING_CONSENT_SETTING_ENTRY_POINT
                .ENTRY_POINT_UNKNOWN;
              break;
          }
          return (
            o("WAWebDrawerManager").DrawerManager.openDrawerLeft(
              I.jsx(r("WAWebSMBDataSharingDrawer.react"), {
                onClose: o("WAWebDrawerManager").closeDrawerLeft,
                entrypoint: xe,
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
                I.jsx(
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
                        I.jsx(
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
          var $e = t.source,
            Pe;
          switch ($e) {
            case "qp_chat_list_banner":
              Pe = o("WAWebWamEnumEntryPoint").ENTRY_POINT.CHAT_BANNER;
              break;
            default:
              Pe = o("WAWebWamEnumEntryPoint").ENTRY_POINT.DEEP_LINK;
              break;
          }
          return (
            o("WAWebDrawerManager").DrawerManager.openDrawerFullscreen(
              I.jsx(
                o("WAWebBusinessBroadcastHomeFlowLoadable")
                  .WAWebBusinessBroadcastHomeFlowLoadable,
                {
                  entryPoint: Pe,
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
          var Ne = t.data,
            Me = Ne.lid,
            we = Ne.session;
          try {
            (o("WAWebCmd").Cmd.closeStatusViewer(),
              o("WAWebDrawerManager").DrawerManager.closeDrawerLeft(),
              o("WAWebDrawerManager").DrawerManager.closeDrawerMid(),
              o("WAWebCmd").Cmd.setActiveNavBarItem(
                o("WAWebNavBarTypes").NavBarItems.Chats,
              ));
            var Ae = o("WAWebWidFactory").createWid(Me);
            o("WAWebFindChatAction")
              .findOrCreateLatestChat(Ae, "newChatFlow")
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
                      we != null &&
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
                          mdXdrSessionUuid: we,
                        }).commit());
                  });
              })
              .catch(function (e) {
                (o("WALogger").ERROR(
                  h ||
                    (h = babelHelpers.taggedTemplateLiteralLoose([
                      "Opening chat via chatOpen failed with async exception",
                    ])),
                ),
                  we != null &&
                    new (o(
                      "WAWebMdLinkedDevicesWindowsXdrWamEvent",
                    ).MdLinkedDevicesWindowsXdrWamEvent)({
                      mdLinkedDevicesWindowsXdrStage: o(
                        "WAWebWamEnumMdLinkedDevicesWindowsXdrStage",
                      ).MD_LINKED_DEVICES_WINDOWS_XDR_STAGE
                        .DEEPLINK_NAVIGATION_FAILURE,
                      mdXdrSessionUuid: we,
                    }).commit());
              });
          } catch (e) {
            (o("WALogger").ERROR(
              y ||
                (y = babelHelpers.taggedTemplateLiteralLoose([
                  "Opening chat via chatOpen failed with exceptions",
                ])),
            ),
              we != null &&
                new (o(
                  "WAWebMdLinkedDevicesWindowsXdrWamEvent",
                ).MdLinkedDevicesWindowsXdrWamEvent)({
                  mdLinkedDevicesWindowsXdrStage: o(
                    "WAWebWamEnumMdLinkedDevicesWindowsXdrStage",
                  ).MD_LINKED_DEVICES_WINDOWS_XDR_STAGE
                    .DEEPLINK_NAVIGATION_FAILURE,
                  mdXdrSessionUuid: we,
                }).commit());
          }
          return !0;
        }
        case "APP_OPEN": {
          var Fe,
            Oe = (Fe = t.data) == null ? void 0 : Fe.session;
          try {
            var Be;
            (o("WAWebCmd").Cmd.closeStatusViewer(),
              o("WAWebCmd").Cmd.closeActiveChat(),
              (Be = o("WAWebDrawerManager")).DrawerManager.closeDrawerLeft(),
              Be.DrawerManager.closeDrawerMid(),
              Be.DrawerManager.closeDrawerRight(),
              Be.DrawerManager.closeDrawerFullscreen(),
              o("WAWebCmd").Cmd.setActiveNavBarItem(
                o("WAWebNavBarTypes").NavBarItems.Chats,
              ),
              Oe != null &&
                new (o(
                  "WAWebMdLinkedDevicesWindowsXdrWamEvent",
                ).MdLinkedDevicesWindowsXdrWamEvent)({
                  mdLinkedDevicesWindowsXdrStage: o(
                    "WAWebWamEnumMdLinkedDevicesWindowsXdrStage",
                  ).MD_LINKED_DEVICES_WINDOWS_XDR_STAGE
                    .DEEPLINK_NAVIGATION_SUCCESS,
                  mdXdrSessionUuid: Oe,
                }).commit());
          } catch (e) {
            (o("WALogger").ERROR(
              C ||
                (C = babelHelpers.taggedTemplateLiteralLoose([
                  "Handling appOpen failed with exceptions",
                ])),
            ),
              Oe != null &&
                new (o(
                  "WAWebMdLinkedDevicesWindowsXdrWamEvent",
                ).MdLinkedDevicesWindowsXdrWamEvent)({
                  mdLinkedDevicesWindowsXdrStage: o(
                    "WAWebWamEnumMdLinkedDevicesWindowsXdrStage",
                  ).MD_LINKED_DEVICES_WINDOWS_XDR_STAGE
                    .DEEPLINK_NAVIGATION_FAILURE,
                  mdXdrSessionUuid: Oe,
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
                  : I.jsx(
                      o("WAWebNewChatFlowLoadable").NewChatFlowLoadable,
                      {},
                    ),
                { focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE },
              ));
          } catch (e) {
            o("WALogger").ERROR(
              b ||
                (b = babelHelpers.taggedTemplateLiteralLoose([
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
              v ||
                (v = babelHelpers.taggedTemplateLiteralLoose([
                  "Opening new call flow failed with exceptions",
                ])),
            );
          }
          return !0;
        }
        case "WORK_CONTACT_SYNC": {
          var We;
          return r("gkx")("26258") ||
            !((We = t.data) != null && We.compressedData)
            ? !1
            : (n("cr:2679") == null ||
                n("cr:2679").handleWorkContactSync(t.data.compressedData),
              !0);
        }
        case "SEND_FILE": {
          var qe;
          return (qe =
            n("cr:12407") == null ? void 0 : n("cr:12407")(t.data)) != null
            ? qe
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
                  S ||
                    (S = babelHelpers.taggedTemplateLiteralLoose([
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
        default:
          return (t.resultType, !1);
      }
    }
    l.default = N;
  },
  226,
);
