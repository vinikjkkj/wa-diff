__d(
  "WAWebPrefetchLoadables",
  [
    "Promise",
    "WALogger",
    "WAWebAddContactToGroupFlowLoadable",
    "WAWebArchivedFlowLoadable",
    "WAWebAttachMediaFlowLoadable",
    "WAWebAttachProductModalLoadable",
    "WAWebAttachVcardsFlowLoadable",
    "WAWebBizCtwaPreviewFlowLoadable",
    "WAWebBloksEntryPointLoadable",
    "WAWebCaptureMediaDrawerLoadable",
    "WAWebCartFlowLoadable",
    "WAWebCometComposedTextV2URParserLoadable",
    "WAWebCommunityAdminPromotionNotificationFlowLoadable",
    "WAWebCommunityFlowLoadable",
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
    "WAWebLottieAnimationLoadable",
    "WAWebManageCommunityGroupsFlowLoadable",
    "WAWebManageLabelFlowLoadable",
    "WAWebMeTabFlowLoadable",
    "WAWebMediaViewerFlowLoadable",
    "WAWebNewChatFlowLoadable",
    "WAWebNewGroupFlowLoadable",
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
    "WAWebVoipCallButtonsLoadable",
    "WAWebVoipGatingUtils",
    "WAWebVoipStackInterface",
    "WAWebVoipUiLoadable",
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
          try {
            var t = [
              o("WAWebMediaViewerFlowLoadable").requireBundle(),
              o("WAWebInfoFlowLoadable").requireBundle(),
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
              r("WAWebEnvironment").isWeb &&
                o("WAWebVoipGatingUtils").isCallingEnabled()
                ? [
                    o("WAWebVoipCallButtonsLoadable").requireBundle(),
                    o("WAWebVoipUiLoadable").requireBundle(),
                    o("WAWebVoipStackInterface").getVoipStackInterface(),
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
        c.apply(this, arguments)
      );
    }
    l.default = u;
  },
  98,
);
