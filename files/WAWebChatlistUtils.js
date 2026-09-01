__d(
  "WAWebChatlistUtils",
  [
    "fbt",
    "WALogger",
    "WAWebAdCreationLogger",
    "WAWebBizAdCreationEntryPointModal.react",
    "WAWebBizNativeAdsEntryTapLogger",
    "WAWebBizNativeAdsGatingUtils",
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
    "WAWebModalManager",
    "WAWebOpenBizNativeAdsFlow",
    "WAWebOpenManageAdsInLwi",
    "WAWebPonyfillsCryptoRandomUUID",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebUserPrefsCTWA",
    "WAWebWamEnumLwiScreenAction",
    "WAWebWamEnumWebFlowType",
    "asyncToGeneratorRuntime",
    "gkx",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react"));
    function d(e, t, n) {
      return _(
        o("WAWebFindChatAction").findExistingChat,
        e,
        o("WAWebChatEntryPoint").ChatEntryPoint.Chatlist,
        t,
        n,
      );
    }
    function m(e) {
      var t = e.chatEntryPoint,
        n = e.id,
        r = e.msg,
        a = e.msgContext;
      return _(o("WAWebFindChatAction").findExistingChat, n, t, a, r);
    }
    function p(e, t) {
      return _(
        function (e, t, n) {
          return o("WAWebFindChatAction")
            .findOrCreateLatestChat(e, t, n)
            .then(function (e) {
              var t = e.chat;
              return t;
            });
        },
        e,
        o("WAWebChatEntryPoint").ChatEntryPoint.Chatlist,
        t,
      );
    }
    function _(t, n, a, i, l) {
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
            ? (i != null && i.msg
                ? o("WAWebBotFrontendUtils").runMetaAiThreadsFlow(t, {
                    type: "MessageSearch",
                    msg: i.msg,
                  })
                : o("WAWebBotFrontendUtils").runMetaAiThreadsFlow(t, {
                    type: "MetaAiChat",
                  }),
              t)
            : i
              ? o("WAWebCmd")
                  .Cmd.openChatAt({
                    chat: t,
                    msgContext: i,
                    chatEntryPoint: a,
                    onSuccess: { mediaMsgToOpenInMediaViewer: l },
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
                    .Cmd.openChatFromUnread({ chat: t, chatEntryPoint: a })
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
    var f = function () {
      var e = r("WAWebFbtCommon")("OK");
      o("WAWebToastManager").ToastManager.open(
        c.jsx(o("WAWebToast.react").Toast, {
          action: { dismiss: !0, actionText: e },
          msg: s._(/*BTDS*/ "Something went wrong. Please try again."),
          id: o("WAWebToast.react").genId(),
        }),
      );
    };
    function g(e) {
      return e.sourceAdCreation === "whatsapp_smb_web_catalog" ||
        e.sourceAdCreation === "whatsapp_smb_web_catalog_product"
        ? e.productId
        : null;
    }
    function h(e) {
      var t = e.adCreationUrlInput,
        a = e.lwiEntryPoint,
        i = e.waCampaignId,
        l = t.activeAccountInfo,
        s = t.sourceAdCreation,
        u = l !== "not-linked" && l.hasFacebookPage,
        d =
          s === "whatsapp_smb_web_catalog" ||
          s === "whatsapp_smb_web_catalog_product",
        m =
          (o("WAWebBizNativeAdsGatingUtils").nativeAdsDogfoodEnabled() ||
            o("WAWebBizNativeAdsGatingUtils").nativeAdsWebCreationEnabled()) &&
          (!d ||
            o("WAWebBizNativeAdsGatingUtils").nativeAdsCatalogBoostEnabled()),
        p;
      if (
        (m
          ? (p = r("WAWebPonyfillsCryptoRandomUUID")())
          : (o("WAWebUserPrefsCTWA").resetAdCreationSequenceNumber(),
            (p = o("WAWebUserPrefsCTWA").generateAdCreationFlowId())),
        o("WAWebBizNativeAdsEntryTapLogger").logEntryTap({
          lwiEntryPoint: a,
          lwiExtras: JSON.stringify({ uses_native_ads: m }),
          lwiFlowId: p,
          userHasLinkedFbPage: u,
          waCampaignId: i,
          webFlowType: m
            ? o("WAWebWamEnumWebFlowType").WEB_FLOW_TYPE.NATIVE_WEB
            : o("WAWebWamEnumWebFlowType").WEB_FLOW_TYPE.EXTERNAL_WEB,
        }),
        o("WAWebBizNativeAdsEntryTapLogger").logRoutingDecision({
          lwiEntryPoint: a,
          lwiFlowId: p,
          usesNativeAds: m,
          hasFacebookPage: u,
          activeAccountInfoType: l === "not-linked" ? "not-linked" : l.type,
          hasCreatedAd: l !== "not-linked" && l.hasCreatedAd,
          sourceAdCreation: s,
        }),
        m)
      ) {
        r("WAWebOpenBizNativeAdsFlow")(s, p, g(t));
        return;
      }
      var _ = l !== "not-linked" && l.type === "whatsapp",
        h = o(
          "WAWebAdCreationLogger",
        ).getLwiAdsIdentityTypeFromActiveAccountInfo(l);
      o("WAWebAdCreationLogger").logLwiAdCreationNuxScreen(
        o("WAWebWamEnumLwiScreenAction").LWI_SCREEN_ACTION.LWI_ACTION_VIEW,
        h,
        u,
      );
      var y = (function () {
        var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          o("WAWebAdCreationLogger").logLwiAdCreationNuxScreen(
            o("WAWebWamEnumLwiScreenAction").LWI_SCREEN_ACTION
              .LWI_ACTION_NUX_CONTINUE_TAPPED,
            h,
            u,
          );
          try {
            var e = yield o(
              "WAWebBusinessAdCreationUtils",
            ).getWhatsappAdCreationUrl(
              babelHelpers.extends({}, t, { flowId: p }),
            );
            o("WAWebExternalLink.react").openExternalLink(e, {
              allowReferrer: !0,
            });
          } catch (e) {
            f();
          }
        });
        return function () {
          return e.apply(this, arguments);
        };
      })();
      o("WAWebModalManager").ModalManager.open(
        c.jsx(r("WAWebBizAdCreationEntryPointModal.react"), {
          onOK: y,
          onClose: function () {
            return o("WAWebAdCreationLogger").logLwiAdCreationNuxScreen(
              o("WAWebWamEnumLwiScreenAction").LWI_SCREEN_ACTION
                .LWI_ACTION_CANCEL_DIALOG_BUTTON_TAPPED,
              h,
              u,
            );
          },
          onLearnMore: function () {
            return o("WAWebAdCreationLogger").logLwiAdCreationNuxScreen(
              o("WAWebWamEnumLwiScreenAction").LWI_SCREEN_ACTION
                .LWI_ACTION_LEARN_MORE_TAPPED,
              h,
              u,
            );
          },
          isPagelessAd: _,
        }),
      );
    }
    function y(e) {
      var t = e.activeAccountInfo,
        n = e.entryPoint,
        r = e.sourceManageAdsType;
      o("WAWebOpenManageAdsInLwi").openManageAdsInLwi(t, r, n);
    }
    ((l.openExistingChat = d),
      (l.openExistingChatWithEntryPoint = m),
      (l.openOrCreateLatestChat = p),
      (l.handleAdCreation = h),
      (l.handleManageAds = y));
  },
  226,
);
