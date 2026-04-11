__d(
  "WAWebChatlistUtils",
  [
    "fbt",
    "WALogger",
    "WAWebAdCreationLogger",
    "WAWebAdManagementAction",
    "WAWebBizAdCreationEntryPointModal.react",
    "WAWebBizGatingUtils",
    "WAWebBotFrontendUtils",
    "WAWebBotGating",
    "WAWebBotUtils",
    "WAWebBusinessAdCreationUtils",
    "WAWebChatCollection",
    "WAWebChatEntryPoint",
    "WAWebCmd",
    "WAWebComposeBoxActions",
    "WAWebExternalLink.react",
    "WAWebFbtCommon",
    "WAWebFindChatAction",
    "WAWebManageAdsUtils",
    "WAWebModalManager",
    "WAWebNativeAdsGatingUtils",
    "WAWebNativeAdsMvpEligibilityModel",
    "WAWebOpenBizNativeAdsFlow",
    "WAWebPonyfillsCryptoRandomUUID",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebUserPrefsCTWA",
    "WAWebWamEnumLwiScreenAction",
    "asyncToGeneratorRuntime",
    "gkx",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react"));
    function d(e, t, n) {
      return p(o("WAWebFindChatAction").findExistingChat, e, t, n);
    }
    function m(e, t) {
      return p(
        function (e, t, n) {
          return o("WAWebFindChatAction")
            .findOrCreateLatestChat(e, t, n)
            .then(function (e) {
              var t = e.chat;
              return t;
            });
        },
        e,
        t,
      );
    }
    function p(t, n, a, i) {
      return t(n, "chatListUtils").then(function (t) {
        return (
          r("gkx")("26258") ||
            (o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "window.chat set to",
                ])),
            ),
            (window.chat = t)),
          o("WAWebBotUtils").isMetaAiBot(n) &&
          o("WAWebBotGating").isAiChatThreadsEnabled()
            ? (a != null && a.msg
                ? o("WAWebBotFrontendUtils").runMetaAiThreadsFlow(t, {
                    type: "MessageSearch",
                    msg: a.msg,
                  })
                : o("WAWebBotFrontendUtils").runMetaAiThreadsFlow(t, {
                    type: "MetaAiChat",
                  }),
              t)
            : a
              ? o("WAWebCmd")
                  .Cmd.openChatAt({
                    chat: t,
                    msgContext: a,
                    chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint
                      .Chatlist,
                    onSuccess: { mediaMsgToOpenInMediaViewer: i },
                  })
                  .then(function (e) {
                    return (
                      e &&
                        o("WAWebComposeBoxActions").ComposeBoxActions.focus(t),
                      t
                    );
                  })
              : t !== o("WAWebChatCollection").ChatCollection.getActive()
                ? o("WAWebCmd")
                    .Cmd.openChatFromUnread({
                      chat: t,
                      chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint
                        .Chatlist,
                    })
                    .then(function (e) {
                      return (
                        e &&
                          o("WAWebComposeBoxActions").ComposeBoxActions.focus(
                            t,
                          ),
                        t
                      );
                    })
                : (o("WAWebComposeBoxActions").ComposeBoxActions.focus(t), t)
        );
      });
    }
    var _ = function () {
        var e = r("WAWebFbtCommon")("OK");
        o("WAWebToastManager").ToastManager.open(
          c.jsx(o("WAWebToast.react").Toast, {
            action: { dismiss: !0, actionText: e },
            msg: s._(/*BTDS*/ "Something went wrong. Please try again."),
            id: o("WAWebToast.react").genId(),
          }),
        );
      },
      f = function (t) {
        var e = t.adCreationUrlInput,
          a = t.lwiEntryPoint,
          i = t.waCampaignId,
          l = e.activeAccountInfo,
          s = e.sourceAdCreation,
          u = l !== "not-linked" && l.hasFacebookPage,
          d =
            s === "whatsapp_smb_web_catalog" ||
            s === "whatsapp_smb_web_catalog_product",
          m =
            !d &&
            o("WAWebNativeAdsGatingUtils").shouldUseNativeAdsMvpExperience({
              hasAdvertisedViaLWI: o(
                "WAWebNativeAdsMvpEligibilityModel",
              ).hasAdvertisedViaLWI(),
              isQE2Eligible: o(
                "WAWebNativeAdsMvpEligibilityModel",
              ).isQE2Eligible(),
              logExposure: !0,
            }),
          p;
        if (
          (m
            ? (p = r("WAWebPonyfillsCryptoRandomUUID")())
            : (o("WAWebUserPrefsCTWA").resetAdCreationSequenceNumber(),
              (p = o("WAWebUserPrefsCTWA").generateAdCreationFlowId())),
          o("WAWebAdCreationLogger").logEntryTap({
            lwiEntryPoint: a,
            lwiExtras: JSON.stringify({ uses_native_ads: m }),
            lwiFlowId: p,
            userHasLinkedFbPage: u,
            waCampaignId: i,
          }),
          o("WAWebAdCreationLogger").logRoutingDecision({
            lwiEntryPoint: a,
            lwiFlowId: p,
            usesNativeAds: m,
            lifetimeNativeCTWAAdvertiser: o(
              "WAWebNativeAdsMvpEligibilityModel",
            ).lifetimeNativeCTWAAdvertiser(),
            isPageAssetLinked: o(
              "WAWebNativeAdsMvpEligibilityModel",
            ).isPageAssetLinked(),
            isPagelessAssetLinked: o(
              "WAWebNativeAdsMvpEligibilityModel",
            ).isPagelessAssetLinked(),
            hasAdvertisedViaLWI: o(
              "WAWebNativeAdsMvpEligibilityModel",
            ).hasAdvertisedViaLWI(),
            eligibilityFetchAttempted: o(
              "WAWebNativeAdsMvpEligibilityModel",
            ).isEligibilityDataLoaded(),
            hasEligibilityData: o(
              "WAWebNativeAdsMvpEligibilityModel",
            ).hasEligibilityData(),
            hasFacebookPage: u,
            activeAccountInfoType: l === "not-linked" ? "not-linked" : l.type,
            hasCreatedAd: l !== "not-linked" && l.hasCreatedAd,
            sourceAdCreation: s,
          }),
          m)
        ) {
          r("WAWebOpenBizNativeAdsFlow")(s, p);
          return;
        }
        var f = l !== "not-linked" && l.type === "whatsapp",
          g = o(
            "WAWebAdCreationLogger",
          ).getLwiAdsIdentityTypeFromActiveAccountInfo(l);
        o("WAWebAdCreationLogger").logAdCreationNuxScreen(
          o("WAWebWamEnumLwiScreenAction").LWI_SCREEN_ACTION.LWI_ACTION_VIEW,
          g,
          u,
        );
        var h = (function () {
          var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            o("WAWebAdCreationLogger").logAdCreationNuxScreen(
              o("WAWebWamEnumLwiScreenAction").LWI_SCREEN_ACTION
                .LWI_ACTION_NUX_CONTINUE_TAPPED,
              g,
              u,
            );
            try {
              var t = yield o(
                "WAWebBusinessAdCreationUtils",
              ).getWhatsappAdCreationUrl(
                babelHelpers.extends({}, e, { flowId: p }),
              );
              o("WAWebExternalLink.react").openExternalLink(t, {
                allowReferrer: !0,
              });
            } catch (e) {
              _();
            }
          });
          return function () {
            return t.apply(this, arguments);
          };
        })();
        o("WAWebModalManager").ModalManager.open(
          c.jsx(r("WAWebBizAdCreationEntryPointModal.react"), {
            onOK: h,
            onClose: function () {
              return o("WAWebAdCreationLogger").logAdCreationNuxScreen(
                o("WAWebWamEnumLwiScreenAction").LWI_SCREEN_ACTION
                  .LWI_ACTION_CANCEL_DIALOG_BUTTON_TAPPED,
                g,
                u,
              );
            },
            onLearnMore: function () {
              return o("WAWebAdCreationLogger").logAdCreationNuxScreen(
                o("WAWebWamEnumLwiScreenAction").LWI_SCREEN_ACTION
                  .LWI_ACTION_LEARN_MORE_TAPPED,
                g,
                u,
              );
            },
            isPagelessAd: f,
          }),
        );
      },
      g = function (t, n, r) {
        if (
          n !== "whatsapp_smb_web_manage_ads_native" &&
          o("WAWebBizGatingUtils").adManagementEnabled()
        ) {
          o("WAWebAdManagementAction").openAdsManagementScreen(t);
          return;
        }
        o("WAWebManageAdsUtils").openManageAdsInLwi(t, n, r);
      };
    ((l.openExistingChat = d),
      (l.openOrCreateLatestChat = m),
      (l.handleAdCreation = f),
      (l.handleManageAds = g));
  },
  226,
);
