__d(
  "WAWebBroadcastDuplicateFromThreadHandler",
  [
    "WALogger",
    "WAWebBizBroadcastCampaignAPI",
    "WAWebBizBroadcastContextualEntrypointUtils",
    "WAWebBizBroadcastCreationQPLLogger",
    "WAWebBizBroadcastNewBroadcastFlowLoadable",
    "WAWebDrawerManager",
    "WAWebKeyboardTabUtils",
    "WAWebWamEnumEntryPoint",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react"));
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          o(
            "WAWebBizBroadcastCreationQPLLogger",
          ).BizBroadcastCreationQPLLogger.start(
            o("WAWebBizBroadcastCreationQPLLogger").CreateBroadcastEntryPoint
              .BB_THREAD_INFO_DRAWER,
            !1,
          );
          try {
            var n,
              a,
              i = yield o(
                "WAWebBizBroadcastContextualEntrypointUtils",
              ).getAttachmentDataFromMsg(t),
              l =
                (i == null ? void 0 : i.file) != null &&
                (n = yield o(
                  "WAWebBizBroadcastContextualEntrypointUtils",
                ).getAttachmentDataFromFile(i.file)) != null
                  ? n
                  : i,
              s = o(
                "WAWebBizBroadcastContextualEntrypointUtils",
              ).getCTAButtonDataFromMsgText(t),
              c = o(
                "WAWebBizBroadcastContextualEntrypointUtils",
              ).getMessageFromMsg(t),
              d = yield o(
                "WAWebBizBroadcastCampaignAPI",
              ).getBizBroadcastCampaignByMsgId(t.id.id);
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
                    attachmentData: l,
                    campaignId:
                      (a = d == null ? void 0 : d.campaignId) != null
                        ? a
                        : null,
                    ctaButtonData: s,
                    isDuplicateBroadcast: !0,
                    message: c,
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
        })),
        d.apply(this, arguments)
      );
    }
    l.default = c;
  },
  98,
);
