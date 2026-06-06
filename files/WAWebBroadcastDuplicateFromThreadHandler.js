__d(
  "WAWebBroadcastDuplicateFromThreadHandler",
  [
    "WALogger",
    "WAWebBizBroadcastContextualEntrypointUtils",
    "WAWebBizBroadcastCreationQPLLogger",
    "WAWebBizBroadcastNewBroadcastFlowLoadable",
    "WAWebDrawerManager",
    "WAWebKeyboardTabUtils",
    "WAWebWamEnumEntryPoint",
    "getErrorSafe",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react"));
    async function c(t) {
      o(
        "WAWebBizBroadcastCreationQPLLogger",
      ).BizBroadcastCreationQPLLogger.start(
        o("WAWebBizBroadcastCreationQPLLogger").CreateBroadcastEntryPoint
          .BB_THREAD_INFO_DRAWER,
        !1,
      );
      try {
        var n,
          a = await o(
            "WAWebBizBroadcastContextualEntrypointUtils",
          ).getAttachmentDataFromMsg(t),
          i =
            (a == null ? void 0 : a.file) != null &&
            (n = await o(
              "WAWebBizBroadcastContextualEntrypointUtils",
            ).getAttachmentDataFromFile(a.file)) != null
              ? n
              : a,
          l = o(
            "WAWebBizBroadcastContextualEntrypointUtils",
          ).getCTAButtonDataFromMsgText(t),
          s = o("WAWebBizBroadcastContextualEntrypointUtils").getMessageFromMsg(
            t,
          );
        o("WAWebDrawerManager").DrawerManager.openDrawerFullscreen(
          u.jsx(
            o("WAWebBizBroadcastNewBroadcastFlowLoadable")
              .WAWebBizBroadcastNewBroadcastFlowLoadable,
            {
              entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT.BB_THREAD,
              onBack: function () {
                return o(
                  "WAWebDrawerManager",
                ).DrawerManager.closeDrawerFullscreen();
              },
              sourceBroadcastMessageData: {
                attachmentData: i,
                campaignId: null,
                ctaButtonData: l,
                isDuplicateBroadcast: !0,
                message: s,
              },
            },
          ),
          { focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE },
        );
      } catch (t) {
        (o(
          "WAWebBizBroadcastCreationQPLLogger",
        ).BizBroadcastCreationQPLLogger.end(3),
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "Failed to duplicate broadcast from thread",
                ])),
            )
            .catching(r("getErrorSafe")(t))
            .sendLogs("thread-duplicate-broadcast-failed"));
      }
    }
    l.default = c;
  },
  98,
);
