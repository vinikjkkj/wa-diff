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
      },
      w = 1;
    function A(e, t) {
      o("WAWebDrawerManager").DrawerManager.openDrawerMid(
        $.jsx(
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
    function F(e, t) {
      o("WAWebDrawerManager").DrawerManager.openDrawerFullscreen(
        $.jsx(
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
    function O(e, t) {
      var n = e.length === w ? e[0] : null;
      if (n != null) {
        var r;
        A(n.contacts, (r = n.errorList) != null ? r : []);
        return;
      }
      F(e, t);
    }
    function B(e, t, n, r, a) {
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
          onReviewAudience: A,
          onReviewAudiences: function (t) {
            return O(t, r);
          },
        });
        return;
      }
      A(e, t);
    }
    function W(e, t) {
      return q.apply(this, arguments);
    }
    function q() {
      return (
        (q = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
        q.apply(this, arguments)
      );
    }
    function U(e) {
      var t = e.cmdData,
        a = e.isExternal,
        i = e.preserveAttribution,
        l = e.sessionId;
      switch (t.resultType) {
        case "GROUP_INVITE": {
          var I;
          o("WAWebCmd").Cmd.closeStatusViewer();
          var T = t.data;
          return (
            o("WAWebModalManager").ModalManager.open(
              $.jsx(
                o("WAWebGroupInviteLinkModalLoadable.react")
                  .WAWebGroupInviteLinkModalLoadable,
                { groupCode: T.code, source: "invite_link" },
              ),
            ),
            o("WAWebExecApiCmdHelpers").submitDeepLinkOpenWamEvent({
              deepLinkType: o("WAWebWamEnumDeepLinkType").DEEP_LINK_TYPE
                .DEEP_LINK_GROUP_INVITE,
              isExternal: a,
              campaign: (I = T.utm) == null ? void 0 : I.campaign,
            }),
            !0
          );
        }
        case "CATALOG": {
          o("WAWebCmd").Cmd.closeStatusViewer();
          var D = t.data,
            x = D.catalogOwnerJid,
            P = D.partnertoken,
            w = D.utm;
          return (
            o("WAWebExecApiCmdHelpers").externalCtxAuthoriseWAChatIfEnabled({
              chatId: o("WAWebWidFactory").createWid(x),
              deepLinkType: t.resultType,
              isExternal: a,
              partnerToken: P,
            }),
            o("WAWebExecApiCmdHelpers").openChatAndCatalog(x, w),
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
            q = A.productId,
            U = A.utm;
          return (
            o("WAWebExecApiCmdHelpers").externalCtxAuthoriseWAChatIfEnabled({
              chatId: o("WAWebWidFactory").createWid(F),
              deepLinkType: t.resultType,
              isExternal: a,
              partnerToken: O,
            }),
            o("WAWebExecApiCmdHelpers").openChatAndProduct(F, q, U),
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
          var V = t.data,
            H = V.attachmentUris,
            G = V.conversionTuple,
            z = V.ctwaContextLinkData,
            j = V.customUrl,
            K = V.fromDefaultProtocol,
            Q = V.lid,
            X = V.phone,
            Y = V.text,
            J = V.type,
            Z = V.username,
            ee = V.utm,
            te = null;
          (G == null ? void 0 : G.conversionSource) === "sharesheet" &&
            (te = Q);
          var ne = j != null || J === "business_profile",
            re = Z != null;
          if (!r("isStringNullOrEmpty")(X) || ne || re) {
            var oe = function (n) {
                var e = n.chat,
                  r = n.widLookupMethod;
                G &&
                  o(
                    "WAWebCTWATrackingPayloadUtils",
                  ).handleChatConversationOpenedWithNewMessage(e, G);
                var i = r === "customUrl";
                (i &&
                  (o("WAWebCustomUrlLogEvents").logClickOnCustomUrl(e),
                  o("WAWebCustomUrlLogEvents").logMessageSentByCustomUrl(e)),
                  ee && o("WAWebUpdateUtmAction").addUtmToChat(e.id, ee),
                  o("WAWebBizBotProfileUtils").isBizBot3pBusinessProfile(
                    e.contact.businessProfile,
                  ) && o("WAWebBizBotLogging").logBizBot3pDeepLinkClickEvent(),
                  o(
                    "WAWebExecApiCmdHelpers",
                  ).externalCtxAuthoriseWAChatIfEnabled({
                    chatId: e.id,
                    deepLinkType: t.resultType,
                    isExternal: a,
                    partnerToken: t.data.partnertoken,
                  }),
                  Y && (e.urlText = !0),
                  (e.urlNumber = !0),
                  i &&
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
                        : $.jsx(
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
                var l = V.signupId;
                (l != null &&
                  X != null &&
                  o("WAWebSignupGating").isSignupAGMEnabled() &&
                  (o("WAWebSignupLoadingState").setSignupLoading(
                    e.id.toString(),
                    !0,
                  ),
                  o(
                    "WAWebInjectSignupGreetingMessage",
                  ).injectSignupGreetingMessage(X, l)),
                  o("WAWebExecApiCmdHelpers").logDefaultProtocolNavigation(
                    K,
                    !0,
                  ));
              },
              ae =
                l != null
                  ? {
                      handleOnce: function () {
                        new (o(
                          "WAWebDeepLinkMsgSentWamEvent",
                        ).DeepLinkMsgSentWamEvent)({
                          deepLinkAction: o("WAWebWamEnumDeepLinkAction")
                            .DEEP_LINK_ACTION.MSG_SENT,
                          deepLinkSessionId: l,
                        }).commit();
                      },
                    }
                  : void 0,
              ie = re
                ? {
                    deepLinkHasPhoneNumber: !r("isStringNullOrEmpty")(X),
                    deepLinkHasText: !r("isStringNullOrEmpty")(Y),
                    deepLinkHasUsername: !0,
                    deepLinkHasUsernamePin:
                      !r("isStringNullOrEmpty")(V.usernameKey) ||
                      V.invalidUsernameKey === !0,
                    deepLinkSessionId: l,
                  }
                : void 0;
            (o("WAWebModalManager").ModalManager.open(
              $.jsx(o("WAWebOpenChatFlow.react").OpenChatFlow, {
                target: o("WAWebExecApiCmdHelpers").getOpenChatFlowProps(V),
                msgText: Y,
                onSuccess: oe,
                onError: function () {
                  return o(
                    "WAWebExecApiCmdHelpers",
                  ).logDefaultProtocolNavigation(K, !1);
                },
                ctwaContextLinkData: z,
                sendLogAttributes: ae,
                deepLinkLoggingData: ie,
              }),
              { transition: "modal-flow" },
            ),
              o("WAWebExecApiCmdHelpers").submitDeepLinkOpenWamEvent({
                deepLinkType: z
                  ? o("WAWebWamEnumDeepLinkType").DEEP_LINK_TYPE.DEEP_LINK_CTWA
                  : o("WAWebWamEnumDeepLinkType").DEEP_LINK_TYPE.DEEP_LINK_CHAT,
                isExternal: a,
                deepLinkSessionId: l,
                campaign: ee == null ? void 0 : ee.campaign,
              }));
          } else {
            var le = function (t) {
              if ((G == null ? void 0 : G.conversionSource) === "sharesheet") {
                var e = { msgText: Y, urlText: !0 };
                (t && (e.attachments = t),
                  te != null && te.length > 0 && (e.preSelectedContactLid = te),
                  o("WAWebModalManager").ModalManager.open(
                    $.jsx(
                      o("WAWebSendMsgModalImplLoadable")
                        .SendMsgModalImplLoadable,
                      babelHelpers.extends({}, e),
                    ),
                    { transition: "modal-flow" },
                  ));
              } else {
                var n = { msgText: Y, urlText: !0 };
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
            H != null && H.length > 0
              ? o("WAWebExecApiCmdHelpers")
                  .downloadAttachments(H)
                  .then(function (e) {
                    le(e);
                  })
                  .finally(r("WAWebNoop"))
              : le();
            var se =
              (G == null ? void 0 : G.conversionSource) === "sharesheet"
                ? o("WAWebWamEnumDeepLinkType").DEEP_LINK_TYPE
                    .DEEP_LINK_SHARESHEET
                : o("WAWebWamEnumDeepLinkType").DEEP_LINK_TYPE
                    .DEEP_LINK_MSG_FORWARD;
            o("WAWebExecApiCmdHelpers").submitDeepLinkOpenWamEvent({
              deepLinkType: se,
              isExternal: a,
              deepLinkSessionId: void 0,
              campaign: ee == null ? void 0 : ee.campaign,
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
          var ue = t.data.entrypointType;
          return (
            o(
              "WAWebCommunityCreationFlowMetricUtils",
            ).UiCommunityCreationAction.startSession(
              o(
                "WAWebCommunityCreationFlowMetricUtils",
              ).getDeeplinkEntrypointType(ue),
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
          var ce = o("WAWebFaqUrl").getAvatarFaqUrl();
          return (window.location.replace(ce), !0);
        }
        case "ADVERTISE": {
          if (!o("WAWebMobilePlatforms").isSMB()) return !1;
          var de = o(
            "WAWebActiveAccountInfoContext.react",
          ).getActiveAccountInfo();
          if (de == null || de === "not-linked") return !1;
          var me = t.data,
            pe = me.campaignId,
            _e = me.campaignType;
          return (
            o("WAWebChatlistUtils").handleAdCreation({
              adCreationUrlInput: {
                activeAccountInfo: de,
                sourceAdCreation: o(
                  "WAWebBusinessAdCreationUtils",
                ).getAdCreationTypeFromCampaignType(_e),
              },
              lwiEntryPoint: o(
                "WAWebBizNativeAdsEntryPointUtils",
              ).getLwiEntryPointFromCampaignType(_e),
              waCampaignId: pe,
            }),
            !0
          );
        }
        case "MANAGE_ADS": {
          if (!o("WAWebMobilePlatforms").isSMB()) return !1;
          var fe = o(
            "WAWebActiveAccountInfoContext.react",
          ).getActiveAccountInfo();
          if (fe == null || fe === "not-linked") return !1;
          switch (t.trigger) {
            case "chatListBanner":
              o("WAWebChatlistUtils").handleManageAds({
                activeAccountInfo: fe,
                entryPoint: o("WAWebWamEnumLwiEntryPoint").LWI_ENTRY_POINT
                  .SMB_CHAT_LIST_BANNER_MANAGE_AD,
                sourceManageAdsType:
                  "whatsapp_smb_web_manage_ads_chat_list_banner",
              });
              break;
            default:
              (t.trigger,
                o("WAWebChatlistUtils").handleManageAds({
                  activeAccountInfo: fe,
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
            var ge = o("WAWebUserPrefsMeUser").getMeUserOrThrow();
            o("WAWebOpenChatWithContactAction").openChatWithContact(
              ge,
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
          var he =
            t.data.campaignType === "chatlist_banner"
              ? "chatlist_banner"
              : t.data.campaignType === "aymt_email"
                ? "aymt_email"
                : t.data.campaignType === "aymt_ads_manager_notification"
                  ? "aymt_ads_manager_notification"
                  : "chatlist_banner";
          return o("WAWebBizFrontendGatingUtils").isPixOnWebEnabled()
            ? (o("WAWebAddEditPixFeature").openPixCredentialManagementModal(
                he,
                he,
              ),
              !0)
            : (o("WAWebPrimaryFeaturesModel").PrimaryFeatures.on(
                "change:customPaymentMethodsSyncSupport",
                function () {
                  if (o("WAWebBizFrontendGatingUtils").isPixOnWebEnabled())
                    return (
                      o(
                        "WAWebAddEditPixFeature",
                      ).openPixCredentialManagementModal(he, he),
                      !0
                    );
                },
              ),
              !1);
        }
        case "EDIT_PROFILE_PICTURE": {
          try {
            o("WAWebCmd").Cmd.closeStatusViewer();
            var ye = o("WAWebUserPrefsMeUser").getMeUserOrThrow(),
              Ce = o(
                "WAWebTextStatusCollection",
              ).TextStatusCollection.assertGet(ye),
              be = o("WAWebContactCollection").ContactCollection.assertGet(ye),
              ve = o(
                "WAWebProfilePicThumbCollection",
              ).ProfilePicThumbCollection.assertGet(ye);
            return (
              o("WAWebDrawerManager").DrawerManager.openDrawerLeft(
                $.jsx(n("cr:1923"), {
                  status: Ce,
                  profilePicThumb: ve,
                  contact: be,
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
            var Se = o("WAWebUserPrefsMeUser").getMeLidUserOrThrow(),
              Re = o("WAWebContactCollection").ContactCollection.assertGet(Se),
              Le = o("WAWebUsernameTypes").serializeMaybeUsername(Re.username);
            return (
              r("isStringNullOrEmpty")(Le)
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
                      contactId: Re.id,
                      username: Le,
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
          var Ee = t.data.feature;
          switch (Ee) {
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
          var ke = t.data.postType;
          switch (ke) {
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
                $.jsx(
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
          var Ie = t.data.phone,
            Te = t.data.video === !0;
          return (
            o("WAWebExecApiCmdHelpers").submitDeepLinkOpenWamEvent({
              deepLinkType: o("WAWebWamEnumDeepLinkType").DEEP_LINK_TYPE
                .DEEP_LINK_CALL,
              isExternal: a,
            }),
            o("WAWebVoipGatingUtils").isCallingEnabled()
              ? Ie == null
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
                : (W(Ie, Te), !0)
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
                          /*BTDS*/ "This feature isn't supported on your device. Log into WhatsApp on your phone and try again.",
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
          var De = {
            entryPoint: o("WAWebWamEnumCatalogEntryPoint").CATALOG_ENTRY_POINT
              .CATALOG_ENTRY_POINT_DEEPLINK,
            isInitialStep: !0,
          };
          return (
            (t.data.campaignType === "chat_psa" ||
              t.data.campaignType === "banner") &&
              (De.promotionCampaign = "video-upload"),
            o("WAWebCatalogManagementFlowLoadable").openCatalogManagementFlow(
              De,
            ),
            !0
          );
        }
        case "CATALOG_LINKING_CHAT_PSA": {
          var xe = t.data.deepLinkType;
          return (
            o("WAWebExecApiCmdHelpers").submitDeepLinkOpenWamEvent({
              deepLinkType: xe,
              isExternal: a,
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
          var $e = (function () {
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
          return ($e(t.data.token), !0);
        }
        case "UGC_BOT": {
          o("WAWebCmd").Cmd.closeStatusViewer();
          var Pe = (function () {
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
          return (Pe(t.data.fbid), !0);
        }
        case "STICKER_PACK": {
          var Ne = t.data.url;
          return (
            o("WAWebDrawerManager").DrawerManager.openDrawerRight(
              $.jsx(
                r("WAWebStickerStoreFlowLoadable").StickerStoreFlowLoadable,
                {
                  stickerPackId: Ne,
                  onSticker: r("WAWebSendStickerToActiveChatStickersAction"),
                },
              ),
              { focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE },
            ),
            !0
          );
        }
        case "CALL_LINK": {
          var Me = N;
          return (
            Me == null &&
              n("cr:9382") != null &&
              (Me = n("cr:9382").handleClickCallLink),
            Me == null ||
              Me(
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
          var we = t.source,
            Ae;
          switch (we) {
            case "ads_manager_3pd_guidance_card":
              Ae = o("WAWebWamEnumSmbDataSharingConsentSettingEntryPoint")
                .SMB_DATA_SHARING_CONSENT_SETTING_ENTRY_POINT
                .ENTRY_POINT_DEEP_LINK_ADS_MANAGER_3PD_GUIDANCE_CARD;
              break;
            default:
              Ae = o("WAWebWamEnumSmbDataSharingConsentSettingEntryPoint")
                .SMB_DATA_SHARING_CONSENT_SETTING_ENTRY_POINT
                .ENTRY_POINT_UNKNOWN;
              break;
          }
          return (
            o("WAWebDrawerManager").DrawerManager.openDrawerLeft(
              $.jsx(r("WAWebSMBDataSharingDrawer.react"), {
                onClose: o("WAWebDrawerManager").closeDrawerLeft,
                entrypoint: Ae,
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
                    onUploadSuccess: B,
                  },
                ),
              ),
              !0)
            : !1;
        case "BIZ_BROADCAST_HOME": {
          var Fe;
          if (
            (o("WAWebExecApiCmdHelpers").submitDeepLinkOpenWamEvent({
              deepLinkType: o("WAWebWamEnumDeepLinkType").DEEP_LINK_TYPE
                .DEEP_LINK_MARKETING_MESSAGE,
              isExternal: a,
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
          var Oe = t.data.source,
            Be;
          switch (Oe) {
            case "qp_chat_list_banner":
              Be = o("WAWebWamEnumEntryPoint").ENTRY_POINT.CHAT_BANNER;
              break;
            default:
              Be = o("WAWebWamEnumEntryPoint").ENTRY_POINT.DEEP_LINK;
              break;
          }
          var We = i !== !0;
          We &&
            o(
              "WAWebBusinessBroadcastUserJourneyLogger",
            ).BusinessBroadcastUserJourneyLogger.setDeeplinkAttribution(
              Be,
              t.data.moment,
            );
          var qe = We
              ? Be
              : (Fe = o(
                    "WAWebBusinessBroadcastUserJourneyLogger",
                  ).BusinessBroadcastUserJourneyLogger.getEntryPoint()) != null
                ? Fe
                : Be,
            Ue = function () {
              o("WAWebDrawerManager").DrawerManager.openDrawerFullscreen(
                $.jsx(
                  o("WAWebBusinessBroadcastHomeFlowLoadable")
                    .WAWebBusinessBroadcastHomeFlowLoadable,
                  {
                    entryPoint: qe,
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
                  .then(Ue)
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
              : Ue(),
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
          var Ve = n("cr:38809").WAWebVoipOngoingCallCollection,
            He = Ve.findOngoingCallActiveOnOtherSelfDevice();
          if (He == null) return !0;
          try {
            o("WAWebVoipStartCall")
              .joinOngoingCallByCallId(
                He.id.id,
                o("WAWebWamEnumLobbyEntryPointType").LOBBY_ENTRY_POINT_TYPE
                  .XDR_CALL_TRANSFER,
              )
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
          var Ge = t.data,
            ze = Ge.fromDefaultProtocol,
            je = Ge.lid,
            Ke = Ge.session;
          try {
            (o("WAWebCmd").Cmd.closeStatusViewer(),
              o("WAWebDrawerManager").DrawerManager.closeDrawerLeft(),
              o("WAWebDrawerManager").DrawerManager.closeDrawerMid(),
              o("WAWebCmd").Cmd.setActiveNavBarItem(
                o("WAWebNavBarTypes").NavBarItems.Chats,
              ));
            var Qe = o("WAWebWidFactory").createWid(je);
            o("WAWebFindChatAction")
              .findOrCreateLatestChat(Qe, "newChatFlow")
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
                      Ke != null &&
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
                          mdXdrSessionUuid: Ke,
                        }).commit(),
                      o("WAWebExecApiCmdHelpers").logDefaultProtocolNavigation(
                        ze,
                        e,
                      ));
                  });
              })
              .catch(function (e) {
                (o("WALogger").ERROR(
                  v ||
                    (v = babelHelpers.taggedTemplateLiteralLoose([
                      "Opening chat via chatOpen failed with async exception",
                    ])),
                ),
                  Ke != null &&
                    new (o(
                      "WAWebMdLinkedDevicesWindowsXdrWamEvent",
                    ).MdLinkedDevicesWindowsXdrWamEvent)({
                      mdLinkedDevicesWindowsXdrStage: o(
                        "WAWebWamEnumMdLinkedDevicesWindowsXdrStage",
                      ).MD_LINKED_DEVICES_WINDOWS_XDR_STAGE
                        .DEEPLINK_NAVIGATION_FAILURE,
                      mdXdrSessionUuid: Ke,
                    }).commit(),
                  o("WAWebExecApiCmdHelpers").logDefaultProtocolNavigation(
                    ze,
                    !1,
                  ));
              });
          } catch (e) {
            (o("WALogger").ERROR(
              S ||
                (S = babelHelpers.taggedTemplateLiteralLoose([
                  "Opening chat via chatOpen failed with exceptions",
                ])),
            ),
              Ke != null &&
                new (o(
                  "WAWebMdLinkedDevicesWindowsXdrWamEvent",
                ).MdLinkedDevicesWindowsXdrWamEvent)({
                  mdLinkedDevicesWindowsXdrStage: o(
                    "WAWebWamEnumMdLinkedDevicesWindowsXdrStage",
                  ).MD_LINKED_DEVICES_WINDOWS_XDR_STAGE
                    .DEEPLINK_NAVIGATION_FAILURE,
                  mdXdrSessionUuid: Ke,
                }).commit(),
              o("WAWebExecApiCmdHelpers").logDefaultProtocolNavigation(ze, !1));
          }
          return !0;
        }
        case "APP_OPEN": {
          var Xe,
            Ye = (Xe = t.data) == null ? void 0 : Xe.session;
          try {
            var Je;
            (o("WAWebCmd").Cmd.closeStatusViewer(),
              o("WAWebCmd").Cmd.closeActiveChat(),
              (Je = o("WAWebDrawerManager")).DrawerManager.closeDrawerLeft(),
              Je.DrawerManager.closeDrawerMid(),
              Je.DrawerManager.closeDrawerRight(),
              Je.DrawerManager.closeDrawerFullscreen(),
              o("WAWebCmd").Cmd.setActiveNavBarItem(
                o("WAWebNavBarTypes").NavBarItems.Chats,
              ),
              Ye != null &&
                new (o(
                  "WAWebMdLinkedDevicesWindowsXdrWamEvent",
                ).MdLinkedDevicesWindowsXdrWamEvent)({
                  mdLinkedDevicesWindowsXdrStage: o(
                    "WAWebWamEnumMdLinkedDevicesWindowsXdrStage",
                  ).MD_LINKED_DEVICES_WINDOWS_XDR_STAGE
                    .DEEPLINK_NAVIGATION_SUCCESS,
                  mdXdrSessionUuid: Ye,
                }).commit());
          } catch (e) {
            (o("WALogger").ERROR(
              R ||
                (R = babelHelpers.taggedTemplateLiteralLoose([
                  "Handling appOpen failed with exceptions",
                ])),
            ),
              Ye != null &&
                new (o(
                  "WAWebMdLinkedDevicesWindowsXdrWamEvent",
                ).MdLinkedDevicesWindowsXdrWamEvent)({
                  mdLinkedDevicesWindowsXdrStage: o(
                    "WAWebWamEnumMdLinkedDevicesWindowsXdrStage",
                  ).MD_LINKED_DEVICES_WINDOWS_XDR_STAGE
                    .DEEPLINK_NAVIGATION_FAILURE,
                  mdXdrSessionUuid: Ye,
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
          var Ze;
          return r("gkx")("26258") ||
            !((Ze = t.data) != null && Ze.compressedData)
            ? !1
            : (n("cr:2679") == null ||
                n("cr:2679").handleWorkContactSync(t.data.compressedData),
              !0);
        }
        case "SEND_FILE": {
          var et;
          return (et =
            n("cr:12407") == null ? void 0 : n("cr:12407")(t.data)) != null
            ? et
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
    l.default = U;
  },
  226,
);
