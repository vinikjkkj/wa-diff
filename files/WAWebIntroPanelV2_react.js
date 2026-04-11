__d(
  "WAWebIntroPanelV2.react",
  [
    "fbt",
    "WALogger",
    "WAWebBotBaseGating",
    "WAWebBotFrontendUtils",
    "WAWebBotGating",
    "WAWebChatEntryPoint",
    "WAWebContactEditUtils",
    "WAWebContactLogging",
    "WAWebDesktopUpsellAnimationDataV2",
    "WAWebDesktopUpsellCommonStrings",
    "WAWebDesktopUpsellPlatformAwareHooks",
    "WAWebDesktopUpsellStoreOpener",
    "WAWebEmptyStateModule.react",
    "WAWebLottieAnimationLoadable",
    "WAWebMimeTypes",
    "WAWebModalManager",
    "WAWebSelectModal.react",
    "WAWebSendFilesToChats",
    "WAWebServerPropConstants",
    "WAWebWamEnumWebcNativeUpsellCtaSourceType",
    "WDSIconIcDescription.react",
    "WDSIconIcPersonAdd.react",
    "react",
    "useWAWebExternalBetaOptIn",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c,
      d,
      m,
      p = m || (m = o("react")),
      _ = p.jsx(o("WAWebLottieAnimationLoadable").LottieAnimation, {
        loop: !1,
        autoplay: !0,
        data: r("WAWebDesktopUpsellAnimationDataV2")(),
      });
    function f() {
      var t = o("WAWebBotBaseGating").isBotEnabled(),
        n = o("useWAWebExternalBetaOptIn").useMacBetaUpsellOnWeb(),
        a = o(
          "WAWebDesktopUpsellPlatformAwareHooks",
        ).useWAWebDesktopUpsellPlatformCheck(),
        i = o("useWAWebExternalBetaOptIn").useExternalBetaOptIn(),
        l = i[0];
      function m() {
        o(
          "WAWebDesktopUpsellStoreOpener",
        ).openExternalWhatsAppDesktopDownloadUrl({
          ctaSource: o("WAWebWamEnumWebcNativeUpsellCtaSourceType")
            .WEBC_NATIVE_UPSELL_CTA_SOURCE_TYPE.INTRO_PANEL,
          isBetaUpsell: n,
          isBetaUser: l,
        });
      }
      function f(e) {
        var t;
        e.stopPropagation();
        var n = Array.from((t = e.target.files) != null ? t : []);
        n.length &&
          o("WAWebModalManager").ModalManager.open(
            p.jsx(o("WAWebSelectModal.react").SelectModal, {
              title: s._(/*BTDS*/ "Select chats"),
              listType: o("WAWebSelectModal.react").ListType.ChatSelectModal,
              onConfirm: function (t) {
                var e = t.selectedItems;
                return r("WAWebSendFilesToChats")(e, n);
              },
              maxItems: o("WAWebServerPropConstants").MULTICAST_LIMIT_GLOBAL,
              tsNavigationData: {
                surface: "unknown",
                viewName: "select-chats-intro",
              },
            }),
          );
      }
      function g() {
        o("WAWebContactEditUtils").openContactEditDrawer(
          null,
          o("WAWebContactLogging").ContactSourceType.NewChat,
        );
      }
      function h() {
        var t = o("WAWebChatEntryPoint").ChatEntryPoint.MetaAIIntroPanel,
          n = o("WAWebBotGating").isAiChatThreadsEnabled();
        (o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[WAWebIntroPanelV2] handleAskMetaAIBtnClick threads=",
              "",
            ])),
          String(n),
        ),
          n
            ? o("WAWebBotFrontendUtils")
                .getMetaAiChat()
                .then(function (e) {
                  (o("WALogger").LOG(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "[WAWebIntroPanelV2] getMetaAiChat+ runMetaAiThreadsFlow",
                      ])),
                  ),
                    o("WAWebBotFrontendUtils").runMetaAiThreadsFlow(e, {
                      type: "MetaAiIntroPanel",
                    }));
                })
                .catch(function (e) {
                  o("WALogger").LOG(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
                        "[WAWebIntroPanelV2] getMetaAiChat failed",
                      ])),
                  );
                })
            : (o("WALogger").LOG(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "[WAWebIntroPanelV2] using legacy openMetaBotChat flow",
                  ])),
              ),
              o("WAWebBotFrontendUtils").openMetaBotChat(t)));
      }
      var y = {
          animation: _,
          title: o(
            "WAWebDesktopUpsellCommonStrings",
          ).getDesktopUpsellDownloadWhatsAppTitle(n),
          description: o(
            "WAWebDesktopUpsellCommonStrings",
          ).getDesktopUpsellIntroPanelText(n),
          actionButtonLabel: o(
            "WAWebDesktopUpsellCommonStrings",
          ).getDesktopAppDownloadFromStoreBtnLabel(n),
          actionButtonClickHandler: m,
        },
        C = [
          {
            title: s._(/*BTDS*/ "Send document"),
            Icon: r("WDSIconIcDescription.react"),
            filePicker: {
              mimes: o("WAWebMimeTypes").DOC_MIMES,
              onChange: f,
              multiple: !0,
            },
            testid: "send-document-tile",
          },
          {
            title: s._(/*BTDS*/ "Add contact"),
            Icon: r("WDSIconIcPersonAdd.react"),
            clickHandler: g,
            testid: "add-contact-tile",
          },
        ];
      return (
        t &&
          C.push({
            title: s._(/*BTDS*/ "Ask Meta AI"),
            Icon: "meta-ai",
            clickHandler: h,
            testid: "meta-ai-tile",
          }),
        p.jsx(r("WAWebEmptyStateModule.react"), {
          titleCard: a === !0 ? y : void 0,
          actions: C,
        })
      );
    }
    ((f.displayName = f.name + " [from " + i.id + "]"), (l.default = f));
  },
  226,
);
