__d(
  "WAWebExecApiCmd",
  [
    "fbt",
    "Promise",
    "WALogger",
    "WANullthrows",
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
    "WAWebContactUtils",
    "WAWebCreateTextStatusFlowLoadable",
    "WAWebCustomUrlLogEvents",
    "WAWebDeepLinkMsgSentWamEvent",
    "WAWebDeepLinkOpenWamEvent",
    "WAWebDrawerManager",
    "WAWebExternalCtxAuthoriseWAChat",
    "WAWebExternalCtxConfig",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebFileUtils",
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
    "WAWebProductCatalogContext",
    "WAWebProductCatalogSession",
    "WAWebProductDetailsFlowLoadable",
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
    "WAWebUim",
    "WAWebUpdateUtmAction",
    "WAWebUserPrefsMeUser",
    "WAWebUsernameManagementDrawerLoadable",
    "WAWebUsernameWorkerCompatibleGatingUtils",
    "WAWebUtilsLogQplEvents",
    "WAWebVoipCallsTabDrawerNewCall.react",
    "WAWebVoipCallsTabNavigateTo",
    "WAWebWamEnumCatalogEntryPoint",
    "WAWebWamEnumCommunityCreationCurrentScreenType",
    "WAWebWamEnumDeepLinkAction",
    "WAWebWamEnumDeepLinkOpenFrom",
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
      S,
      R = S || (S = o("react")),
      L = (e = n("cr:17104")) != null ? e : {},
      E = L.handleClickCallLink,
      k = { textAlignCenter: { textAlign: "x2b8uid", $$css: !0 } };
    function I(e, t) {
      var n = function (r) {
        var n = r.chat;
        self.setTimeout(function () {
          (o("WAWebUtilsLogQplEvents").qplStartCatalogCollectionsView(
            "Deeplink",
          ),
            t && o("WAWebUpdateUtmAction").addUtmToChat(n.id, t),
            o("WAWebDrawerManager").DrawerManager.openDrawerRight(
              R.jsx(
                o("WAWebProductDetailsFlowLoadable").ProductDetailsFlowLoadable,
                { chat: n, catalogOwnerJid: e },
              ),
              {
                transition: "slide-left",
                uim: o("WAWebUim").UIM.Manager.getTop(),
                newDrawerContext: o(
                  "WAWebProductCatalogContext",
                ).buildProductCatalogContext(
                  new (o("WAWebProductCatalogSession").ProductCatalogSession)(),
                  o("WAWebContactUtils").getMaybeBizPlatformForLogging(e),
                  o("WAWebWamEnumCatalogEntryPoint").CATALOG_ENTRY_POINT
                    .CATALOG_ENTRY_POINT_DEEPLINK,
                ),
              },
            ));
        }, 100);
      };
      o("WAWebModalManager").ModalManager.open(
        R.jsx(o("WAWebOpenChatFlow.react").OpenChatFlow, {
          target: { wid: o("WAWebWidFactory").createWid(e) },
          onSuccess: n,
          msgText: null,
        }),
        { transition: "modal-flow" },
      );
    }
    function T(e, t, n) {
      var r = o("WAWebProductCatalogContext").buildProductCatalogContext(
          new (o("WAWebProductCatalogSession").ProductCatalogSession)(),
          o("WAWebContactUtils").getMaybeBizPlatformForLogging(e),
          o("WAWebWamEnumCatalogEntryPoint").CATALOG_ENTRY_POINT
            .CATALOG_ENTRY_POINT_DEEPLINK,
        ),
        a = function (i) {
          var a = i.chat;
          self.setTimeout(function () {
            (o("WAWebUtilsLogQplEvents").qplStartProductView("Deeplink"),
              n && o("WAWebUpdateUtmAction").addUtmToChat(a.id, n),
              o("WAWebDrawerManager").DrawerManager.openDrawerRight(
                R.jsx(
                  o("WAWebProductDetailsFlowLoadable")
                    .ProductDetailsFlowLoadable,
                  {
                    chat: a,
                    productInfo: { productId: t, businessOwnerJid: e },
                    refreshCarousel: !0,
                  },
                ),
                {
                  transition: "slide-left",
                  uim: o("WAWebUim").UIM.Manager.getTop(),
                  newDrawerContext: r,
                },
              ));
          }, 100);
        };
      o("WAWebModalManager").ModalManager.open(
        R.jsx(o("WAWebOpenChatFlow.react").OpenChatFlow, {
          target: { wid: o("WAWebWidFactory").createWid(e) },
          onSuccess: a,
          msgText: null,
        }),
        { transition: "modal-flow" },
      );
    }
    function D(e) {
      var t = e.customUrl,
        n = e.phone,
        a = e.url,
        i = e.username,
        l = e.usernameKey;
      return n != null
        ? { wid: o("WAWebWidFactory").createWid(n) }
        : t != null
          ? i != null
            ? { customUrl: t, fallbackUrl: a, username: i, usernameKey: l }
            : { customUrl: t, fallbackUrl: a }
          : l != null
            ? { username: r("WANullthrows")(i), usernameKey: l }
            : { username: r("WANullthrows")(i) };
    }
    function x(e) {
      var t = e.campaign,
        n = e.deepLinkSessionId,
        r = e.deepLinkType,
        a = e.isExternal,
        i = a
          ? o("WAWebWamEnumDeepLinkOpenFrom").DEEP_LINK_OPEN_FROM
              .DEEP_LINK_EXTERNAL
          : o("WAWebWamEnumDeepLinkOpenFrom").DEEP_LINK_OPEN_FROM
              .DEEP_LINK_WA_LINK_CLICK;
      new (o("WAWebDeepLinkOpenWamEvent").DeepLinkOpenWamEvent)({
        deepLinkOpenFrom: i,
        deepLinkType: r,
        deepLinkSessionId: n,
        campaign: t != null ? t : void 0,
      }).commit();
    }
    function $(e, t, n, a) {
      o("WAWebExternalCtxConfig").isCtxLoggingEnabled() &&
        r("WAWebExternalCtxAuthoriseWAChat")(e, t, n, a).finally(
          r("WAWebNoop"),
        );
    }
    function P(e, t) {
      var n = e.headers.get("content-disposition");
      if (n != null) {
        var r = /filename[^;=\n]*=(([\'\"]).*?\2|[^;\n]*)/,
          o = r.exec(n);
        if (o != null && o[1]) return o[1].replace(/\"/g, "");
      }
      return t;
    }
    function N(e) {
      return (v || (v = n("Promise"))).all(
        e.map(
          (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t) {
                var n = yield window.fetch(e),
                  r = yield n.blob(),
                  a = n.headers.get("Content-Type") || r.type,
                  i = P(n, t.toString() + "." + a);
                return o("WAWebFileUtils").createFile([r], i, { type: a });
              },
            );
            return function (t, n) {
              return e.apply(this, arguments);
            };
          })(),
        ),
      );
    }
    function M(e) {
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
              R.jsx(r("WAWebGroupInviteLinkModal.react"), {
                groupCode: v.code,
                source: "invite_link",
              }),
            ),
            x({
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
          var S = t.data,
            L = S.catalogOwnerJid,
            P = S.partnertoken,
            M = S.utm;
          return (
            $(o("WAWebWidFactory").createWid(L), t.resultType, P, a),
            I(L, M),
            x({
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
            $(o("WAWebWidFactory").createWid(A), t.resultType, F, a),
            T(A, O, B),
            x({
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
                  $(r.id, t.resultType, t.data.partnertoken, a),
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
                        : R.jsx(
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
                    deepLinkHasUsernamePin: !r("isStringNullOrEmpty")(
                      W.usernameKey,
                    ),
                    deepLinkSessionId: i,
                  }
                : void 0;
            (o("WAWebModalManager").ModalManager.open(
              R.jsx(o("WAWebOpenChatFlow.react").OpenChatFlow, {
                target: D(W),
                msgText: j,
                onSuccess: ee,
                ctwaContextLinkData: V,
                sendLogAttributes: te,
                deepLinkLoggingData: ne,
              }),
              { transition: "modal-flow" },
            ),
              x({
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
                    R.jsx(
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
                    R.jsx(
                      o("WAWebSendMsgMultiModalLoadable")
                        .SendMsgMultiModalLoadable,
                      babelHelpers.extends({}, n),
                    ),
                    { transition: "modal-flow" },
                  ));
              }
            };
            q != null && q.length > 0
              ? N(q)
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
            x({
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
              R.jsx(r("WAWebNewCommunityInfoDrawer.react"), {}),
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
            x({
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
            x({
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
                "WAWebAdCreationLogger",
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
                R.jsx(n("cr:1923"), {
                  status: fe,
                  profilePicThumb: he,
                  contact: ge,
                  conn: o("WAWebConnModel").Conn,
                  onClose: o("WAWebDrawerManager").closeDrawerLeft,
                  isInitialStep: !0,
                }),
                { focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE },
              ),
              x({
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
                    R.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
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
                    R.jsx(r("WAWebUsernameManagementDrawerLoadable"), {
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
                R.jsx(
                  o("WAWebCreateTextStatusFlowLoadable")
                    .CreateTextStatusFlowLoadable,
                  {},
                ),
                { transition: "status-modal" },
              );
              break;
            case o("WAWebStatusApiParse").StatusPostType.Media:
              o("WAWebModalManager").ModalManager.open(
                R.jsx(r("WAWebStatusAttachMediaFlow.react"), {}),
              );
              break;
          }
          return !0;
        }
        case "CALL_USER":
          return (
            o("WAWebModalManager").ModalManager.open(
              R.jsxs(o("WAWebConfirmPopup.react").ConfirmPopup, {
                onOK: o("WAWebModalManager").closeModalManager,
                children: [
                  R.jsx(o("WAWebText.react").WAWebTextLarge, {
                    xstyle: k.textAlignCenter,
                    margin: [16, 0],
                    weight: "medium",
                    children: s._(/*BTDS*/ "Your call can't be completed"),
                  }),
                  R.jsx(o("WAWebText.react").WAWebTextMuted, {
                    xstyle: k.textAlignCenter,
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
              x({
                deepLinkType: o("WAWebWamEnumDeepLinkType").DEEP_LINK_TYPE
                  .DEEP_LINK_FAVORITE_CHAT_FILTER,
                isExternal: a,
              }),
              !0)
            : !1;
        case "OPEN_CATALOG": {
          if (a || !o("WAWebMobilePlatforms").isSMB()) return !1;
          var Re = {
            entryPoint: o("WAWebWamEnumCatalogEntryPoint").CATALOG_ENTRY_POINT
              .CATALOG_ENTRY_POINT_DEEPLINK,
            isInitialStep: !0,
          };
          return (
            (t.data.campaignType === "chat_psa" ||
              t.data.campaignType === "banner") &&
              (Re.promotionCampaign = "video-upload"),
            o("WAWebCatalogManagementFlowLoadable").openCatalogManagementFlow(
              Re,
            ),
            !0
          );
        }
        case "CATALOG_LINKING_CHAT_PSA": {
          var Le = t.data.deepLinkType;
          return (
            x({ deepLinkType: Le, isExternal: a }),
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
          var Ee = (function () {
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
          return (Ee(t.data.token), !0);
        }
        case "HATCH_LINK": {
          if (!o("WAWebBotFrontendGating").isHatchIntegrationEnabled())
            return !1;
          o("WAWebCmd").Cmd.closeStatusViewer();
          var ke = (function () {
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
          return (ke(t.data.token), !0);
        }
        case "UGC_BOT": {
          o("WAWebCmd").Cmd.closeStatusViewer();
          var Ie = (function () {
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
          return (Ie(t.data.fbid), !0);
        }
        case "STICKER_PACK": {
          var Te = t.data.url;
          return (
            o("WAWebDrawerManager").DrawerManager.openDrawerRight(
              R.jsx(
                r("WAWebStickerStoreFlowLoadable").StickerStoreFlowLoadable,
                {
                  stickerPackId: Te,
                  onSticker: r("WAWebSendStickerToActiveChatStickersAction"),
                },
              ),
              { focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE },
            ),
            !0
          );
        }
        case "CALL_LINK": {
          var De = E;
          return (
            De == null &&
              n("cr:9382") != null &&
              (De = n("cr:9382").handleClickCallLink),
            De == null ||
              De(
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
          var xe = t.source,
            $e;
          switch (xe) {
            case "ads_manager_3pd_guidance_card":
              $e = o("WAWebWamEnumSmbDataSharingConsentSettingEntryPoint")
                .SMB_DATA_SHARING_CONSENT_SETTING_ENTRY_POINT
                .ENTRY_POINT_DEEP_LINK_ADS_MANAGER_3PD_GUIDANCE_CARD;
              break;
            default:
              $e = o("WAWebWamEnumSmbDataSharingConsentSettingEntryPoint")
                .SMB_DATA_SHARING_CONSENT_SETTING_ENTRY_POINT
                .ENTRY_POINT_UNKNOWN;
              break;
          }
          return (
            o("WAWebDrawerManager").DrawerManager.openDrawerLeft(
              R.jsx(r("WAWebSMBDataSharingDrawer.react"), {
                onClose: o("WAWebDrawerManager").closeDrawerLeft,
                entrypoint: $e,
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
                R.jsx(
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
                        R.jsx(
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
          var Pe = t.source,
            Ne;
          switch (Pe) {
            case "qp_chat_list_banner":
              Ne = o("WAWebWamEnumEntryPoint").ENTRY_POINT.CHAT_BANNER;
              break;
            default:
              Ne = o("WAWebWamEnumEntryPoint").ENTRY_POINT.DEEP_LINK;
              break;
          }
          return (
            o("WAWebDrawerManager").DrawerManager.openDrawerFullscreen(
              R.jsx(
                o("WAWebBusinessBroadcastHomeFlowLoadable")
                  .WAWebBusinessBroadcastHomeFlowLoadable,
                {
                  entryPoint: Ne,
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
          var Me = t.data,
            we = Me.lid,
            Ae = Me.session;
          try {
            (o("WAWebCmd").Cmd.closeStatusViewer(),
              o("WAWebDrawerManager").DrawerManager.closeDrawerLeft(),
              o("WAWebDrawerManager").DrawerManager.closeDrawerMid(),
              o("WAWebCmd").Cmd.setActiveNavBarItem(
                o("WAWebNavBarTypes").NavBarItems.Chats,
              ));
            var Fe = o("WAWebWidFactory").createWid(we);
            o("WAWebFindChatAction")
              .findOrCreateLatestChat(Fe, "newChatFlow")
              .then(function (e) {
                var t = e.chat;
                o("WAWebCmd")
                  .Cmd.openChatFromUnread({ chat: t })
                  .then(function (e) {
                    (e &&
                      (o("WAWebComposeBoxActions").ComposeBoxActions.focus(t),
                      o("WAWebCmd").Cmd.trigger("scroll_to_active_chat")),
                      Ae != null &&
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
                          mdXdrSessionUuid: Ae,
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
                  Ae != null &&
                    new (o(
                      "WAWebMdLinkedDevicesWindowsXdrWamEvent",
                    ).MdLinkedDevicesWindowsXdrWamEvent)({
                      mdLinkedDevicesWindowsXdrStage: o(
                        "WAWebWamEnumMdLinkedDevicesWindowsXdrStage",
                      ).MD_LINKED_DEVICES_WINDOWS_XDR_STAGE
                        .DEEPLINK_NAVIGATION_FAILURE,
                      mdXdrSessionUuid: Ae,
                    }).commit());
              });
          } catch (e) {
            (o("WALogger").ERROR(
              h ||
                (h = babelHelpers.taggedTemplateLiteralLoose([
                  "Opening chat via chatOpen failed with exceptions",
                ])),
            ),
              Ae != null &&
                new (o(
                  "WAWebMdLinkedDevicesWindowsXdrWamEvent",
                ).MdLinkedDevicesWindowsXdrWamEvent)({
                  mdLinkedDevicesWindowsXdrStage: o(
                    "WAWebWamEnumMdLinkedDevicesWindowsXdrStage",
                  ).MD_LINKED_DEVICES_WINDOWS_XDR_STAGE
                    .DEEPLINK_NAVIGATION_FAILURE,
                  mdXdrSessionUuid: Ae,
                }).commit());
          }
          return !0;
        }
        case "APP_OPEN": {
          var Oe,
            Be = (Oe = t.data) == null ? void 0 : Oe.session;
          try {
            var We;
            (o("WAWebCmd").Cmd.closeStatusViewer(),
              o("WAWebCmd").Cmd.closeActiveChat(),
              (We = o("WAWebDrawerManager")).DrawerManager.closeDrawerLeft(),
              We.DrawerManager.closeDrawerMid(),
              We.DrawerManager.closeDrawerRight(),
              We.DrawerManager.closeDrawerFullscreen(),
              o("WAWebCmd").Cmd.setActiveNavBarItem(
                o("WAWebNavBarTypes").NavBarItems.Chats,
              ),
              Be != null &&
                new (o(
                  "WAWebMdLinkedDevicesWindowsXdrWamEvent",
                ).MdLinkedDevicesWindowsXdrWamEvent)({
                  mdLinkedDevicesWindowsXdrStage: o(
                    "WAWebWamEnumMdLinkedDevicesWindowsXdrStage",
                  ).MD_LINKED_DEVICES_WINDOWS_XDR_STAGE
                    .DEEPLINK_NAVIGATION_SUCCESS,
                  mdXdrSessionUuid: Be,
                }).commit());
          } catch (e) {
            (o("WALogger").ERROR(
              y ||
                (y = babelHelpers.taggedTemplateLiteralLoose([
                  "Handling appOpen failed with exceptions",
                ])),
            ),
              Be != null &&
                new (o(
                  "WAWebMdLinkedDevicesWindowsXdrWamEvent",
                ).MdLinkedDevicesWindowsXdrWamEvent)({
                  mdLinkedDevicesWindowsXdrStage: o(
                    "WAWebWamEnumMdLinkedDevicesWindowsXdrStage",
                  ).MD_LINKED_DEVICES_WINDOWS_XDR_STAGE
                    .DEEPLINK_NAVIGATION_FAILURE,
                  mdXdrSessionUuid: Be,
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
                  : R.jsx(
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
                  R.jsx(r("WAWebVoipCallsTabDrawerNewCall.react"), {}),
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
          var qe;
          return r("gkx")("26258") ||
            !((qe = t.data) != null && qe.compressedData)
            ? !1
            : (n("cr:2679") == null ||
                n("cr:2679").handleWorkContactSync(t.data.compressedData),
              !0);
        }
        case "SEND_FILE": {
          var Ue;
          return (Ue =
            n("cr:12407") == null ? void 0 : n("cr:12407")(t.data)) != null
            ? Ue
            : !1;
        }
        default:
          return (t.resultType, !1);
      }
    }
    l.default = M;
  },
  226,
);
