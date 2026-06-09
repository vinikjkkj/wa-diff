__d(
  "WAWebForwardCreateBroadcastAction",
  [
    "WALogger",
    "WAWebBizBroadcastContextualEntrypointUtils",
    "WAWebBizBroadcastCreationQPLLogger",
    "WAWebBizBroadcastNewBroadcastFlowLoadable",
    "WAWebBusinessBroadcastUserJourneyLogger",
    "WAWebDrawerManager",
    "WAWebKeyboardTabUtils",
    "WAWebWamEnumEntryPoint",
    "WAWebWamEnumSurfaceType",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react"));
    function c(e, t) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          (o(
            "WAWebBizBroadcastCreationQPLLogger",
          ).BizBroadcastCreationQPLLogger.start(
            o("WAWebBizBroadcastCreationQPLLogger").CreateBroadcastEntryPoint
              .BB_FORWARD_MODAL,
            !1,
          ),
            o(
              "WAWebBusinessBroadcastUserJourneyLogger",
            ).BusinessBroadcastUserJourneyLogger.createBroadcastButtonClicked(
              o("WAWebWamEnumEntryPoint").ENTRY_POINT.BB_FORWARD_MODAL,
              o("WAWebWamEnumSurfaceType").SURFACE_TYPE.FORWARD_MODAL,
            ));
          try {
            var a = yield o(
                "WAWebBizBroadcastContextualEntrypointUtils",
              ).getAttachmentDataFromMsg(t),
              i = o(
                "WAWebBizBroadcastContextualEntrypointUtils",
              ).getCTAButtonDataFromMsgText(t),
              l = o(
                "WAWebBizBroadcastContextualEntrypointUtils",
              ).getMessageFromMsg(t),
              s = {
                attachmentData: a,
                campaignId: null,
                ctaButtonData: i,
                message: l,
                isDuplicateBroadcast: !1,
              };
            (n == null || n(),
              o("WAWebDrawerManager").DrawerManager.openDrawerFullscreen(
                u.jsx(
                  o("WAWebBizBroadcastNewBroadcastFlowLoadable")
                    .WAWebBizBroadcastNewBroadcastFlowLoadable,
                  {
                    sourceBroadcastMessageData: s,
                    entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT
                      .BB_FORWARD_MODAL,
                    onBack: function () {
                      return o(
                        "WAWebDrawerManager",
                      ).DrawerManager.closeDrawerFullscreen();
                    },
                  },
                ),
                { focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE },
              ));
          } catch (t) {
            (o(
              "WAWebBizBroadcastCreationQPLLogger",
            ).BizBroadcastCreationQPLLogger.end(3),
              o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "Failed to create broadcast from forwarded message",
                    ])),
                )
                .catching(r("getErrorSafe")(t))
                .sendLogs("forward-create-broadcast-failed"));
          }
        })),
        d.apply(this, arguments)
      );
    }
    l.default = c;
  },
  98,
);
