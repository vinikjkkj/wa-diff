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
          msg: s._(/*BTDS*/ ""),
          id: o("WAWebToast.react").genId(),
        }),
      );
    };
    function g(e) {
      return e.sourceAdCreation === "whatsapp_smb_web_catalog" ||
        e.sourceAdCreation === "whatsapp_smb_web_catalog_product"
        ? { productId: e.productId, type: "catalog_product" }
        : null;
    }
    function h(e) {
      var t = e.adCreationUrlInput,
        n = e.lwiEntryPoint,
        a = e.waCampaignId,
        i = t.activeAccountInfo,
        l = t.sourceAdCreation,
        s = i !== "not-linked" && i.hasFacebookPage,
        u =
          l === "whatsapp_smb_web_catalog" ||
          l === "whatsapp_smb_web_catalog_product",
        d =
          (o("WAWebBizNativeAdsGatingUtils").nativeAdsDogfoodEnabled() ||
            o("WAWebBizNativeAdsGatingUtils").nativeAdsWebCreationEnabled()) &&
          (!u ||
            o("WAWebBizNativeAdsGatingUtils").nativeAdsCatalogBoostEnabled()),
        m;
      if (
        (d
          ? (m = r("WAWebPonyfillsCryptoRandomUUID")())
          : (o("WAWebUserPrefsCTWA").resetAdCreationSequenceNumber(),
            (m = o("WAWebUserPrefsCTWA").generateAdCreationFlowId())),
        o("WAWebBizNativeAdsEntryTapLogger").logEntryTap({
          lwiEntryPoint: n,
          lwiExtras: JSON.stringify({ uses_native_ads: d }),
          lwiFlowId: m,
          userHasLinkedFbPage: s,
          waCampaignId: a,
          webFlowType: d
            ? o("WAWebWamEnumWebFlowType").WEB_FLOW_TYPE.NATIVE_WEB
            : o("WAWebWamEnumWebFlowType").WEB_FLOW_TYPE.EXTERNAL_WEB,
        }),
        o("WAWebBizNativeAdsEntryTapLogger").logRoutingDecision({
          lwiEntryPoint: n,
          lwiFlowId: m,
          usesNativeAds: d,
          hasFacebookPage: s,
          activeAccountInfoType: i === "not-linked" ? "not-linked" : i.type,
          hasCreatedAd: i !== "not-linked" && i.hasCreatedAd,
          sourceAdCreation: l,
        }),
        d)
      ) {
        r("WAWebOpenBizNativeAdsFlow")(l, m, g(t));
        return;
      }
      var p = i !== "not-linked" && i.type === "whatsapp",
        _ = o(
          "WAWebAdCreationLogger",
        ).getLwiAdsIdentityTypeFromActiveAccountInfo(i);
      o("WAWebAdCreationLogger").logLwiAdCreationNuxScreen(
        o("WAWebWamEnumLwiScreenAction").LWI_SCREEN_ACTION.LWI_ACTION_VIEW,
        _,
        s,
      );
      var h = async function () {
        o("WAWebAdCreationLogger").logLwiAdCreationNuxScreen(
          o("WAWebWamEnumLwiScreenAction").LWI_SCREEN_ACTION
            .LWI_ACTION_NUX_CONTINUE_TAPPED,
          _,
          s,
        );
        try {
          var e = await o(
            "WAWebBusinessAdCreationUtils",
          ).getWhatsappAdCreationUrl(
            babelHelpers.extends({}, t, { flowId: m }),
          );
          o("WAWebExternalLink.react").openExternalLink(e, {
            allowReferrer: !0,
          });
        } catch (e) {
          f();
        }
      };
      o("WAWebModalManager").ModalManager.open(
        c.jsx(r("WAWebBizAdCreationEntryPointModal.react"), {
          onOK: h,
          onClose: function () {
            return o("WAWebAdCreationLogger").logLwiAdCreationNuxScreen(
              o("WAWebWamEnumLwiScreenAction").LWI_SCREEN_ACTION
                .LWI_ACTION_CANCEL_DIALOG_BUTTON_TAPPED,
              _,
              s,
            );
          },
          onLearnMore: function () {
            return o("WAWebAdCreationLogger").logLwiAdCreationNuxScreen(
              o("WAWebWamEnumLwiScreenAction").LWI_SCREEN_ACTION
                .LWI_ACTION_LEARN_MORE_TAPPED,
              _,
              s,
            );
          },
          isPagelessAd: p,
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
