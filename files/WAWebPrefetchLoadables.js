__d(
  "WAWebPrefetchLoadables",
  [
    "JSResourceForInteraction",
    "Promise",
    "WALogger",
    "WAWebABPropsCache",
    "WAWebAddContactToGroupFlowLoadable",
    "WAWebArchivedFlowLoadable",
    "WAWebAttachMediaFlowLoadable",
    "WAWebAttachProductModalLoadable",
    "WAWebAttachVcardsFlowLoadable",
    "WAWebBizAiSmartComposerWrapperLoadable",
    "WAWebBizCtwaPreviewFlowLoadable",
    "WAWebBloksEntryPointLoadable",
    "WAWebCallCollection",
    "WAWebCaptureMediaDrawerLoadable",
    "WAWebCartFlowLoadable",
    "WAWebCometComposedTextV2URParserLoadable",
    "WAWebCommunityAdminPromotionNotificationFlowLoadable",
    "WAWebCommunityFlowLoadable",
    "WAWebConnGetters",
    "WAWebConnModel",
    "WAWebContactMsgInfoFlowLoadable",
    "WAWebContextualBannerWrapperLoadable",
    "WAWebEditCaptureFlowLoadable",
    "WAWebEnvironment",
    "WAWebForwardMessageFlowLoadable",
    "WAWebForwardMessageModalLoadable",
    "WAWebGroupInviteLinkDrawerLoadable",
    "WAWebGroupMsgInfoFlowLoadable",
    "WAWebGroupsV4InviteFlowLoadable",
    "WAWebInfoFlowLoadable",
    "WAWebLabelFlowLoadable",
    "WAWebListSubmenuContentLoadable",
    "WAWebListsGatingUtils",
    "WAWebLottieAnimationLoadable",
    "WAWebManageCommunityGroupsFlowLoadable",
    "WAWebManageLabelFlowLoadable",
    "WAWebMeTabFlowLoadable",
    "WAWebMediaViewerFlowLoadable",
    "WAWebNewChatFlowLoadable",
    "WAWebNewGroupFlowLoadable",
    "WAWebNoop",
    "WAWebPhotoPickerLoadable.react",
    "WAWebProductDetailsFlowLoadable",
    "WAWebProfileDrawerLoadableRequireBundle",
    "WAWebSendGroupInviteFlowLoadable",
    "WAWebSendLogsPopupLoadable",
    "WAWebSendMsgMultiModalLoadable",
    "WAWebSendPaymentRequestFlowLoadable",
    "WAWebSendProductModalLoadable",
    "WAWebSettingGatingUtils",
    "WAWebSettingsFlowLoadable",
    "WAWebStarredDrawerLoadable",
    "WAWebStatusQuotedFlowLoadable",
    "WAWebVoipBackendLoadable",
    "WAWebVoipBundlePreloader",
    "WAWebVoipCallButtonsLoadable",
    "WAWebVoipGatingUtils",
    "WAWebVoipUiDocPipLoadable",
    "WAWebVoipUiLoadable",
    "WAWebVoipUiPopoutWindowLoadable",
    "asyncToGeneratorRuntime",
    "cr:6003",
    "cr:6004",
    "getErrorSafe",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u() {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (
            (yield o("WAWebABPropsCache").waitForABPropConfigsReady(),
            !!o("WAWebVoipGatingUtils").isVoipDownloadEnabled())
          ) {
            var e = yield r("JSResourceForInteraction")(
                "WAWebVoipBootStackPrefetch",
              )
                .__setRef("WAWebPrefetchLoadables")
                .load(),
              t = e.prefetchVoipStackFromBootGate;
            yield t();
          }
        })),
        c.apply(this, arguments)
      );
    }
    function d() {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          try {
            (o("WAWebVoipBundlePreloader").initVoipBundlePreloader(),
              o("WAWebVoipBundlePreloader").preloadForCall(
                r("WAWebCallCollection").activeCall,
              ));
            var t = [
              o("WAWebMediaViewerFlowLoadable").requireBundle(),
              o("WAWebInfoFlowLoadable").requireBundle(),
              o("WAWebConnGetters").getIsSMB(o("WAWebConnModel").Conn)
                ? o("WAWebBizAiSmartComposerWrapperLoadable")
                    .requireBundle()
                    .catch(r("WAWebNoop"))
                : null,
            ];
            yield (s || (s = n("Promise"))).all(t);
            var a = [
              o("WAWebProfileDrawerLoadableRequireBundle").requireBundle(),
              o("WAWebPhotoPickerLoadable.react").requireBundle(),
              o("WAWebStarredDrawerLoadable").requireBundle(),
              o("WAWebAttachMediaFlowLoadable").requireBundle(),
              o("WAWebCaptureMediaDrawerLoadable").requireBundle(),
              o("WAWebEditCaptureFlowLoadable").requireBundle(),
              o("WAWebGroupMsgInfoFlowLoadable").requireBundle(),
              o("WAWebNewChatFlowLoadable").requireBundle(),
              o("WAWebNewGroupFlowLoadable").requireBundle(),
              o("WAWebSendProductModalLoadable").requireBundle(),
              o("WAWebAttachProductModalLoadable").requireBundle(),
              o("WAWebSendGroupInviteFlowLoadable").requireBundle(),
              o("WAWebSendMsgMultiModalLoadable").requireBundle(),
              o("WAWebForwardMessageModalLoadable").requireBundle(),
              o("WAWebForwardMessageFlowLoadable").requireBundle(),
              o("WAWebAttachVcardsFlowLoadable").requireBundle(),
              o("WAWebProductDetailsFlowLoadable").requireBundle(),
              o("WAWebCartFlowLoadable").requireBundle(),
              o("WAWebLabelFlowLoadable").requireBundle(),
              o("WAWebManageLabelFlowLoadable").requireBundle(),
              o("WAWebListsGatingUtils").isListsEnabled()
                ? o("WAWebListSubmenuContentLoadable").requireBundle()
                : null,
              o("WAWebAddContactToGroupFlowLoadable").requireBundle(),
              o("WAWebSendPaymentRequestFlowLoadable").requireBundle(),
              o("WAWebSettingsFlowLoadable").requireBundle(),
              o("WAWebSettingGatingUtils").isMeTabEnabled()
                ? o("WAWebMeTabFlowLoadable").requireBundle()
                : null,
              o("WAWebGroupInviteLinkDrawerLoadable").requireBundle(),
              o("WAWebStatusQuotedFlowLoadable").requireBundle(),
              o("WAWebContactMsgInfoFlowLoadable").requireBundle(),
              o("WAWebSendLogsPopupLoadable").requireBundle(),
              o("WAWebGroupsV4InviteFlowLoadable").requireBundle(),
              o("WAWebArchivedFlowLoadable").requireBundle(),
              o("WAWebLottieAnimationLoadable").requireBundle(),
              o("WAWebContextualBannerWrapperLoadable").requireBundle(),
              o("WAWebBizCtwaPreviewFlowLoadable").requireBundle(),
            ].concat(
              r("WAWebEnvironment").isWindows
                ? [
                    o("WAWebVoipCallButtonsLoadable").requireBundle(),
                    o("WAWebVoipBackendLoadable").requireVoipJsBackend(),
                  ]
                : [],
              r("WAWebEnvironment").isWeb &&
                o("WAWebVoipGatingUtils").isVoipDownloadEnabled()
                ? [o("WAWebVoipBackendLoadable").requireVoipJsBackend()]
                : [],
              r("WAWebEnvironment").isWeb ? [u()] : [],
              r("WAWebEnvironment").isWeb &&
                o("WAWebVoipGatingUtils").isCallingEnabled()
                ? [
                    o("WAWebVoipCallButtonsLoadable").requireBundle(),
                    o("WAWebVoipUiLoadable").requireBundle(),
                    o("WAWebVoipUiDocPipLoadable").requireBundle(),
                    o("WAWebVoipUiPopoutWindowLoadable").requireBundle(),
                  ]
                : [],
            );
            (r("gkx")("26258") ||
              a.push(
                n("cr:6004") == null ? void 0 : n("cr:6004").requireBundle(),
                n("cr:6003") == null ? void 0 : n("cr:6003").requireBundle(),
              ),
              a.push(
                o("WAWebManageCommunityGroupsFlowLoadable").requireBundle(),
                o("WAWebCommunityFlowLoadable").requireBundle(),
              ),
              a.push(
                o(
                  "WAWebCommunityAdminPromotionNotificationFlowLoadable",
                ).requireBundle(),
              ),
              a.push(
                o("WAWebCometComposedTextV2URParserLoadable").requireBundle(),
                o("WAWebBloksEntryPointLoadable").requireBundle(),
              ),
              yield s.all(a));
          } catch (t) {
            o("WALogger").WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "Error prefetching loadables: ",
                  "",
                ])),
              r("getErrorSafe")(t).stack,
            );
          }
        })),
        m.apply(this, arguments)
      );
    }
    l.default = d;
  },
  98,
);
