__d(
  "WAWebExecApiCmd",
  [
    "fbt",
    "JSResourceForInteraction",
    "WALogger",
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
    "WAWebHatchFrontendGating",
    "WAWebHatchPairingUnavailableDialog.react",
    "WAWebInboxFiltersGatingUtils",
    "WAWebInfoFlowLoadable",
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
    "WAWebSignupGreetingAction",
    "WAWebSignupLoadingState",
    "WAWebStatusApiParse",
    "WAWebStatusAttachMediaFlow.react",
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
      $ = x || (x = o("react")),
      P = (e = n("cr:17104")) != null ? e : {},
      N = P.handleClickCallLink,
      M = {
        callPopupTitle: {
          marginTop: "xw7yly9",
          marginBottom: "x1yztbdb",
          $$css: !0,
        },
      };
    function w(e, t) {
      return A.apply(this, arguments);
    }
    function A() {
      return (
        (A = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
                I ||
                  (I = babelHelpers.taggedTemplateLiteralLoose([
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
                T ||
                  (T = babelHelpers.taggedTemplateLiteralLoose([
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
                D ||
                  (D = babelHelpers.taggedTemplateLiteralLoose([
                    "CALL_USER deep-link: startWAWebVoipCall failed",
                  ])),
              )
              .catching(r("getErrorSafe")(e))
              .sendLogs("calling-deep-link-start-call-failed");
          }
        })),
        A.apply(this, arguments)
      );
    }
    function F(e) {
      var t = e.cmdData,
        a = e.isExternal,
        i = e.sessionId;
      switch (t.resultType) {
        case "GROUP_INVITE": {
          var l;
          o("WAWebCmd").Cmd.closeStatusViewer();
          var I = t.data;
          return (
            o("WAWebModalManager").ModalManager.open(
              $.jsx(r("WAWebGroupInviteLinkModal.react"), {
                groupCode: I.code,
                source: "invite_link",
              }),
            ),
            o("WAWebExecApiCmdHelpers").submitDeepLinkOpenWamEvent({
              deepLinkType: o("WAWebWamEnumDeepLinkType").DEEP_LINK_TYPE
                .DEEP_LINK_GROUP_INVITE,
              isExternal: a,
              campaign: (l = I.utm) == null ? void 0 : l.campaign,
            }),
            !0
          );
        }
        case "CATALOG": {
          o("WAWebCmd").Cmd.closeStatusViewer();
          var T = t.data,
            D = T.catalogOwnerJid,
            x = T.partnertoken,
            P = T.utm;
          return (
            o("WAWebExecApiCmdHelpers").externalCtxAuthoriseWAChatIfEnabled({
              chatId: o("WAWebWidFactory").createWid(D),
              deepLinkType: t.resultType,
              isExternal: a,
              partnerToken: x,
            }),
            o("WAWebExecApiCmdHelpers").openChatAndCatalog(D, P),
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
          var A = t.data,
            F = A.businessOwnerJid,
            O = A.partnertoken,
            B = A.productId,
            W = A.utm;
          return (
            o("WAWebExecApiCmdHelpers").externalCtxAuthoriseWAChatIfEnabled({
              chatId: o("WAWebWidFactory").createWid(F),
              deepLinkType: t.resultType,
              isExternal: a,
              partnerToken: O,
            }),
            o("WAWebExecApiCmdHelpers").openChatAndProduct(F, B, W),
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
          var q = t.data,
            U = q.attachmentUris,
            V = q.conversionTuple,
            H = q.ctwaContextLinkData,
            G = q.customUrl,
            z = q.lid,
            j = q.phone,
            K = q.text,
            Q = q.type,
            X = q.username,
            Y = q.utm,
            J = null;
          (V == null ? void 0 : V.conversionSource) === "sharesheet" && (J = z);
          var Z = G != null || Q === "business_profile",
            ee = X != null;
          if (!r("isStringNullOrEmpty")(j) || Z || ee) {
            var te = function (n) {
                var e,
                  r = n.chat,
                  i = n.widLookupMethod;
                V &&
                  o(
                    "WAWebCTWATrackingPayloadUtils",
                  ).handleChatConversationOpenedWithNewMessage(r, V);
                var l = i === "customUrl";
                (l &&
                  (o("WAWebCustomUrlLogEvents").logClickOnCustomUrl(r),
                  o("WAWebCustomUrlLogEvents").logMessageSentByCustomUrl(r)),
                  Y && o("WAWebUpdateUtmAction").addUtmToChat(r.id, Y),
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
                  K && (r.urlText = !0),
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
                        : $.jsx(
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
                var s = q.signupId;
                s != null &&
                  j != null &&
                  o("WAWebSignupGating").isSignupAGMEnabled() &&
                  (o("WAWebSignupLoadingState").setSignupLoading(
                    r.id.toString(),
                    !0,
                  ),
                  o("WAWebSignupGreetingAction").injectSignupGreetingMessage(
                    j,
                    s,
                  ));
              },
              ne =
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
              re = ee
                ? {
                    deepLinkHasPhoneNumber: !r("isStringNullOrEmpty")(j),
                    deepLinkHasText: !r("isStringNullOrEmpty")(K),
                    deepLinkHasUsername: !0,
                    deepLinkHasUsernamePin:
                      !r("isStringNullOrEmpty")(q.usernameKey) ||
                      q.invalidUsernameKey === !0,
                    deepLinkSessionId: i,
                  }
                : void 0;
            (o("WAWebModalManager").ModalManager.open(
              $.jsx(o("WAWebOpenChatFlow.react").OpenChatFlow, {
                target: o("WAWebExecApiCmdHelpers").getOpenChatFlowProps(q),
                msgText: K,
                onSuccess: te,
                ctwaContextLinkData: H,
                sendLogAttributes: ne,
                deepLinkLoggingData: re,
              }),
              { transition: "modal-flow" },
            ),
              o("WAWebExecApiCmdHelpers").submitDeepLinkOpenWamEvent({
                deepLinkType: H
                  ? o("WAWebWamEnumDeepLinkType").DEEP_LINK_TYPE.DEEP_LINK_CTWA
                  : o("WAWebWamEnumDeepLinkType").DEEP_LINK_TYPE.DEEP_LINK_CHAT,
                isExternal: a,
                deepLinkSessionId: i,
                campaign: Y == null ? void 0 : Y.campaign,
              }));
          } else {
            var oe = function (t) {
              if ((V == null ? void 0 : V.conversionSource) === "sharesheet") {
                var e = { msgText: K, urlText: !0 };
                (t && (e.attachments = t),
                  J != null && J.length > 0 && (e.preSelectedContactLid = J),
                  o("WAWebModalManager").ModalManager.open(
                    $.jsx(
                      o("WAWebSendMsgModalImplLoadable")
                        .SendMsgModalImplLoadable,
                      babelHelpers.extends({}, e),
                    ),
                    { transition: "modal-flow" },
                  ));
              } else {
                var n = { msgText: K, urlText: !0 };
                (t && (n.attachments = t),
                  o("WAWebModalManager").ModalManager.open(
                    $.jsx(
                      o("WAWebSendMsgMultiModalLoadable")
                        .SendMsgMultiModalLoadable,
                      babelHelpers.extends({}, n),
                    ),
                    { transition: "modal-flow" },
                  ));
              }
            };
            U != null && U.length > 0
              ? o("WAWebExecApiCmdHelpers")
                  .downloadAttachments(U)
                  .then(function (e) {
                    oe(e);
                  })
                  .finally(r("WAWebNoop"))
              : oe();
            var ae =
              (V == null ? void 0 : V.conversionSource) === "sharesheet"
                ? o("WAWebWamEnumDeepLinkType").DEEP_LINK_TYPE
                    .DEEP_LINK_SHARESHEET
                : o("WAWebWamEnumDeepLinkType").DEEP_LINK_TYPE
                    .DEEP_LINK_MSG_FORWARD;
            o("WAWebExecApiCmdHelpers").submitDeepLinkOpenWamEvent({
              deepLinkType: ae,
              isExternal: a,
              deepLinkSessionId: void 0,
              campaign: Y == null ? void 0 : Y.campaign,
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
              $.jsx(r("WAWebNewCommunityInfoDrawerLoadable"), {}),
              { focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE },
            ));
          var ie = t.data.entrypointType;
          return (
            o(
              "WAWebCommunityCreationFlowMetricUtils",
            ).UiCommunityCreationAction.startSession(
              o(
                "WAWebCommunityCreationFlowMetricUtils",
              ).getDeeplinkEntrypointType(ie),
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
          var le = o("WAWebFaqUrl").getAvatarFaqUrl();
          return (window.location.replace(le), !0);
        }
        case "ADVERTISE": {
          if (!o("WAWebMobilePlatforms").isSMB()) return !1;
          var se = o(
            "WAWebActiveAccountInfoContext.react",
          ).getActiveAccountInfo();
          if (se == null || se === "not-linked") return !1;
          var ue = t.data,
            ce = ue.campaignId,
            de = ue.campaignType;
          return (
            o("WAWebChatlistUtils").handleAdCreation({
              adCreationUrlInput: {
                activeAccountInfo: se,
                sourceAdCreation: o(
                  "WAWebBusinessAdCreationUtils",
                ).getAdCreationTypeFromCampaignType(de),
              },
              lwiEntryPoint: o(
                "WAWebBizNativeAdsEntryPointUtils",
              ).getLwiEntryPointFromCampaignType(de),
              waCampaignId: ce,
            }),
            !0
          );
        }
        case "MANAGE_ADS": {
          if (!o("WAWebMobilePlatforms").isSMB()) return !1;
          var me = o(
            "WAWebActiveAccountInfoContext.react",
          ).getActiveAccountInfo();
          if (me == null || me === "not-linked") return !1;
          switch (t.trigger) {
            case "chatListBanner":
              o("WAWebChatlistUtils").handleManageAds(
                me,
                "whatsapp_smb_web_manage_ads_chat_list_banner",
                o("WAWebWamEnumLwiEntryPoint").LWI_ENTRY_POINT
                  .SMB_CHAT_LIST_BANNER_MANAGE_AD,
              );
              break;
            default:
              (t.trigger,
                o("WAWebChatlistUtils").handleManageAds(
                  me,
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
            var pe = o("WAWebUserPrefsMeUser").getMeUserOrThrow();
            o("WAWebOpenChatWithContactAction").openChatWithContact(
              pe,
              "newChatFlow",
              o("WAWebChatEntryPoint").ChatEntryPoint.Deeplink,
            );
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
          var _e =
            t.data.campaignType === "chatlist_banner"
              ? "chatlist_banner"
              : t.data.campaignType === "aymt_email"
                ? "aymt_email"
                : t.data.campaignType === "aymt_ads_manager_notification"
                  ? "aymt_ads_manager_notification"
                  : "chatlist_banner";
          return o("WAWebBizFrontendGatingUtils").isPixOnWebEnabled()
            ? (o("WAWebAddEditPixFeature").openPixCredentialManagementModal(
                _e,
                _e,
              ),
              !0)
            : (o("WAWebPrimaryFeaturesModel").PrimaryFeatures.on(
                "change:customPaymentMethodsSyncSupport",
                function () {
                  if (o("WAWebBizFrontendGatingUtils").isPixOnWebEnabled())
                    return (
                      o(
                        "WAWebAddEditPixFeature",
                      ).openPixCredentialManagementModal(_e, _e),
                      !0
                    );
                },
              ),
              !1);
        }
        case "EDIT_PROFILE_PICTURE": {
          try {
            o("WAWebCmd").Cmd.closeStatusViewer();
            var fe = o("WAWebUserPrefsMeUser").getMeUserOrThrow(),
              ge = o(
                "WAWebTextStatusCollection",
              ).TextStatusCollection.assertGet(fe),
              he = o("WAWebContactCollection").ContactCollection.assertGet(fe),
              ye = o(
                "WAWebProfilePicThumbCollection",
              ).ProfilePicThumbCollection.assertGet(fe);
            return (
              o("WAWebDrawerManager").DrawerManager.openDrawerLeft(
                $.jsx(n("cr:1923"), {
                  status: ge,
                  profilePicThumb: ye,
                  contact: he,
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
            var Ce = o("WAWebUserPrefsMeUser").getMeLidUserOrThrow(),
              be = o("WAWebContactCollection").ContactCollection.assertGet(Ce),
              ve = o("WAWebUsernameTypes").serializeMaybeUsername(be.username);
            return (
              r("isStringNullOrEmpty")(ve)
                ? (o("WAWebModalManager").ModalManager.open(
                    $.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
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
                    $.jsx(r("WAWebUsernameManagementDrawerLoadable"), {
                      contactId: be.id,
                      username: ve,
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
          var Se = t.data.feature;
          switch (Se) {
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
          var Re = t.data.postType;
          switch (Re) {
            case o("WAWebStatusApiParse").StatusPostType.Text:
              o("WAWebModalManager").ModalManager.openMedia(
                $.jsx(
                  o("WAWebCreateTextStatusFlowLoadable")
                    .CreateTextStatusFlowLoadable,
                  {},
                ),
                { transition: "status-modal" },
              );
              break;
            case o("WAWebStatusApiParse").StatusPostType.Media:
              o("WAWebModalManager").ModalManager.open(
                $.jsx(r("WAWebStatusAttachMediaFlow.react"), {}),
              );
              break;
          }
          return !0;
        }
        case "CALL_USER": {
          var Le = t.data.phone,
            Ee = t.data.video === !0;
          return (
            o("WAWebExecApiCmdHelpers").submitDeepLinkOpenWamEvent({
              deepLinkType: o("WAWebWamEnumDeepLinkType").DEEP_LINK_TYPE
                .DEEP_LINK_CALL,
              isExternal: a,
            }),
            o("WAWebVoipGatingUtils").isCallingEnabled()
              ? Le == null
                ? (o("WALogger")
                    .LOG(
                      g ||
                        (g = babelHelpers.taggedTemplateLiteralLoose([
                          "CALL_USER deep-link missing phone",
                        ])),
                    )
                    .sendLogs("calling-deep-link-missing-phone"),
                  o("WAWebModalManager").ModalManager.open(
                    $.jsxs(o("WAWebConfirmPopup.react").ConfirmPopup, {
                      onOK: o("WAWebModalManager").closeModalManager,
                      children: [
                        $.jsx(r("WDSText.react"), {
                          type: "Headline2",
                          colorName: "contentDefault",
                          textAlign: "center",
                          xstyle: M.callPopupTitle,
                          children: s._(/*BTDS*/ "Couldn't place the call"),
                        }),
                        $.jsx(r("WDSText.react"), {
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
                : (w(Le, Ee), !0)
              : (o("WAWebModalManager").ModalManager.open(
                  $.jsxs(o("WAWebConfirmPopup.react").ConfirmPopup, {
                    onOK: o("WAWebModalManager").closeModalManager,
                    children: [
                      $.jsx(r("WDSText.react"), {
                        type: "Headline2",
                        colorName: "contentDefault",
                        textAlign: "center",
                        xstyle: M.callPopupTitle,
                        children: s._(/*BTDS*/ "Your call can't be completed"),
                      }),
                      $.jsx(r("WDSText.react"), {
                        type: "Body2",
                        colorName: "contentDeemphasized",
                        textAlign: "center",
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
          var ke = {
            entryPoint: o("WAWebWamEnumCatalogEntryPoint").CATALOG_ENTRY_POINT
              .CATALOG_ENTRY_POINT_DEEPLINK,
            isInitialStep: !0,
          };
          return (
            (t.data.campaignType === "chat_psa" ||
              t.data.campaignType === "banner") &&
              (ke.promotionCampaign = "video-upload"),
            o("WAWebCatalogManagementFlowLoadable").openCatalogManagementFlow(
              ke,
            ),
            !0
          );
        }
        case "CATALOG_LINKING_CHAT_PSA": {
          var Ie = t.data.deepLinkType;
          return (
            o("WAWebExecApiCmdHelpers").submitDeepLinkOpenWamEvent({
              deepLinkType: Ie,
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
          var Te = (function () {
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
          return (Te(t.data.token), !0);
        }
        case "HATCH_LINK": {
          if (!o("WAWebHatchFrontendGating").isHatchIntegrationEnabled())
            return !1;
          if (
            !o("WAWebHatchFrontendGating").isHatchPairingFromCompanionEnabled()
          )
            return (
              o("WAWebModalManager").ModalManager.open(
                $.jsx(r("WAWebHatchPairingUnavailableDialog.react"), {}),
              ),
              o("WALogger")
                .LOG(
                  h ||
                    (h = babelHelpers.taggedTemplateLiteralLoose([
                      "Hatch pairing deep-link not supported on companion device",
                    ])),
                )
                .sendLogs("hatch-pairing-not-supported-on-companion"),
              !0
            );
          o("WAWebCmd").Cmd.closeStatusViewer();
          var De = (function () {
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
          return (De(t.data.token), !0);
        }
        case "UGC_BOT": {
          o("WAWebCmd").Cmd.closeStatusViewer();
          var xe = (function () {
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
          return (xe(t.data.fbid), !0);
        }
        case "STICKER_PACK": {
          var $e = t.data.url;
          return (
            o("WAWebDrawerManager").DrawerManager.openDrawerRight(
              $.jsx(
                r("WAWebStickerStoreFlowLoadable").StickerStoreFlowLoadable,
                {
                  stickerPackId: $e,
                  onSticker: r("WAWebSendStickerToActiveChatStickersAction"),
                },
              ),
              { focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE },
            ),
            !0
          );
        }
        case "CALL_LINK": {
          var Pe = N;
          return (
            Pe == null &&
              n("cr:9382") != null &&
              (Pe = n("cr:9382").handleClickCallLink),
            Pe == null ||
              Pe(
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
          var Ne = t.source,
            Me;
          switch (Ne) {
            case "ads_manager_3pd_guidance_card":
              Me = o("WAWebWamEnumSmbDataSharingConsentSettingEntryPoint")
                .SMB_DATA_SHARING_CONSENT_SETTING_ENTRY_POINT
                .ENTRY_POINT_DEEP_LINK_ADS_MANAGER_3PD_GUIDANCE_CARD;
              break;
            default:
              Me = o("WAWebWamEnumSmbDataSharingConsentSettingEntryPoint")
                .SMB_DATA_SHARING_CONSENT_SETTING_ENTRY_POINT
                .ENTRY_POINT_UNKNOWN;
              break;
          }
          return (
            o("WAWebDrawerManager").DrawerManager.openDrawerLeft(
              $.jsx(r("WAWebSMBDataSharingDrawer.react"), {
                onClose: o("WAWebDrawerManager").closeDrawerLeft,
                entrypoint: Me,
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
                $.jsx(
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
                        $.jsx(
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
            (o("WAWebExecApiCmdHelpers").submitDeepLinkOpenWamEvent({
              deepLinkType: o("WAWebWamEnumDeepLinkType").DEEP_LINK_TYPE
                .DEEP_LINK_MARKETING_MESSAGE,
              isExternal: a,
            }),
            !o("WAWebMobilePlatforms").isSMB() ||
              !o(
                "WAWebBizBroadcastDeviceCapabilityCommon",
              ).isBizBroadcastEnabledAndDeviceSupported(!1))
          )
            return !1;
          var we = t.data.source,
            Ae;
          switch (we) {
            case "qp_chat_list_banner":
              Ae = o("WAWebWamEnumEntryPoint").ENTRY_POINT.CHAT_BANNER;
              break;
            default:
              Ae = o("WAWebWamEnumEntryPoint").ENTRY_POINT.DEEP_LINK;
              break;
          }
          var Fe = function () {
            o("WAWebDrawerManager").DrawerManager.openDrawerFullscreen(
              $.jsx(
                o("WAWebBusinessBroadcastHomeFlowLoadable")
                  .WAWebBusinessBroadcastHomeFlowLoadable,
                {
                  entryPoint: Ae,
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
                  .then(Fe)
                  .catch(function (e) {
                    o("WALogger")
                      .ERROR(
                        y ||
                          (y = babelHelpers.taggedTemplateLiteralLoose([
                            "BizBroadcastHome external deeplink drawer open failed",
                          ])),
                      )
                      .catching(r("getErrorSafe")(e))
                      .sendLogs("bb-home-deeplink-drawer-fail");
                  })
              : Fe(),
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
          var Oe = n("cr:38809").WAWebVoipOngoingCallCollection,
            Be = Oe.findOngoingCallActiveOnOtherSelfDevice();
          if (Be == null) return !0;
          try {
            o("WAWebVoipStartCall")
              .joinOngoingCallByCallId(Be.id.id)
              .catch(function (e) {
                o("WALogger").ERROR(
                  C ||
                    (C = babelHelpers.taggedTemplateLiteralLoose([
                      "callActive joinOngoingCall failed",
                    ])),
                );
              });
          } catch (e) {
            o("WALogger").ERROR(
              b ||
                (b = babelHelpers.taggedTemplateLiteralLoose([
                  "callActive joinOngoingCall failed",
                ])),
            );
          }
          return !0;
        }
        case "CHAT_OPEN": {
          var We = t.data,
            qe = We.lid,
            Ue = We.session;
          try {
            (o("WAWebCmd").Cmd.closeStatusViewer(),
              o("WAWebDrawerManager").DrawerManager.closeDrawerLeft(),
              o("WAWebDrawerManager").DrawerManager.closeDrawerMid(),
              o("WAWebCmd").Cmd.setActiveNavBarItem(
                o("WAWebNavBarTypes").NavBarItems.Chats,
              ));
            var Ve = o("WAWebWidFactory").createWid(qe);
            o("WAWebFindChatAction")
              .findOrCreateLatestChat(Ve, "newChatFlow")
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
                      Ue != null &&
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
                          mdXdrSessionUuid: Ue,
                        }).commit());
                  });
              })
              .catch(function (e) {
                (o("WALogger").ERROR(
                  v ||
                    (v = babelHelpers.taggedTemplateLiteralLoose([
                      "Opening chat via chatOpen failed with async exception",
                    ])),
                ),
                  Ue != null &&
                    new (o(
                      "WAWebMdLinkedDevicesWindowsXdrWamEvent",
                    ).MdLinkedDevicesWindowsXdrWamEvent)({
                      mdLinkedDevicesWindowsXdrStage: o(
                        "WAWebWamEnumMdLinkedDevicesWindowsXdrStage",
                      ).MD_LINKED_DEVICES_WINDOWS_XDR_STAGE
                        .DEEPLINK_NAVIGATION_FAILURE,
                      mdXdrSessionUuid: Ue,
                    }).commit());
              });
          } catch (e) {
            (o("WALogger").ERROR(
              S ||
                (S = babelHelpers.taggedTemplateLiteralLoose([
                  "Opening chat via chatOpen failed with exceptions",
                ])),
            ),
              Ue != null &&
                new (o(
                  "WAWebMdLinkedDevicesWindowsXdrWamEvent",
                ).MdLinkedDevicesWindowsXdrWamEvent)({
                  mdLinkedDevicesWindowsXdrStage: o(
                    "WAWebWamEnumMdLinkedDevicesWindowsXdrStage",
                  ).MD_LINKED_DEVICES_WINDOWS_XDR_STAGE
                    .DEEPLINK_NAVIGATION_FAILURE,
                  mdXdrSessionUuid: Ue,
                }).commit());
          }
          return !0;
        }
        case "APP_OPEN": {
          var He,
            Ge = (He = t.data) == null ? void 0 : He.session;
          try {
            var ze;
            (o("WAWebCmd").Cmd.closeStatusViewer(),
              o("WAWebCmd").Cmd.closeActiveChat(),
              (ze = o("WAWebDrawerManager")).DrawerManager.closeDrawerLeft(),
              ze.DrawerManager.closeDrawerMid(),
              ze.DrawerManager.closeDrawerRight(),
              ze.DrawerManager.closeDrawerFullscreen(),
              o("WAWebCmd").Cmd.setActiveNavBarItem(
                o("WAWebNavBarTypes").NavBarItems.Chats,
              ),
              Ge != null &&
                new (o(
                  "WAWebMdLinkedDevicesWindowsXdrWamEvent",
                ).MdLinkedDevicesWindowsXdrWamEvent)({
                  mdLinkedDevicesWindowsXdrStage: o(
                    "WAWebWamEnumMdLinkedDevicesWindowsXdrStage",
                  ).MD_LINKED_DEVICES_WINDOWS_XDR_STAGE
                    .DEEPLINK_NAVIGATION_SUCCESS,
                  mdXdrSessionUuid: Ge,
                }).commit());
          } catch (e) {
            (o("WALogger").ERROR(
              R ||
                (R = babelHelpers.taggedTemplateLiteralLoose([
                  "Handling appOpen failed with exceptions",
                ])),
            ),
              Ge != null &&
                new (o(
                  "WAWebMdLinkedDevicesWindowsXdrWamEvent",
                ).MdLinkedDevicesWindowsXdrWamEvent)({
                  mdLinkedDevicesWindowsXdrStage: o(
                    "WAWebWamEnumMdLinkedDevicesWindowsXdrStage",
                  ).MD_LINKED_DEVICES_WINDOWS_XDR_STAGE
                    .DEEPLINK_NAVIGATION_FAILURE,
                  mdXdrSessionUuid: Ge,
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
                  : $.jsx(
                      o("WAWebNewChatFlowLoadable").NewChatFlowLoadable,
                      {},
                    ),
                { focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE },
              ));
          } catch (e) {
            o("WALogger").ERROR(
              L ||
                (L = babelHelpers.taggedTemplateLiteralLoose([
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
              E ||
                (E = babelHelpers.taggedTemplateLiteralLoose([
                  "Opening new call flow failed with exceptions",
                ])),
            );
          }
          return !0;
        }
        case "WORK_CONTACT_SYNC": {
          var je;
          return r("gkx")("26258") ||
            !((je = t.data) != null && je.compressedData)
            ? !1
            : (n("cr:2679") == null ||
                n("cr:2679").handleWorkContactSync(t.data.compressedData),
              !0);
        }
        case "SEND_FILE": {
          var Ke;
          return (Ke =
            n("cr:12407") == null ? void 0 : n("cr:12407")(t.data)) != null
            ? Ke
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
                  k ||
                    (k = babelHelpers.taggedTemplateLiteralLoose([
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
                $.jsx(
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
    l.default = F;
  },
  226,
);
