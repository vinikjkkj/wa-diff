__d(
  "WAWebStatusPosterActionsLogger",
  [
    "WAWebABProps",
    "WAWebLogStatusPosterActions",
    "WAWebStatusLoggingUtils",
    "WAWebStatusPosterActionsWamEvent",
    "WAWebWamEnumStatusCategory",
    "WAWebWamEnumStatusContentSource",
    "WAWebWamEnumStatusCreationEntryPoint",
    "WAWebWamEnumStatusEventType",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return (
        d(e) ||
        o("WAWebABProps").getABPropConfigValue(
          "status_poster_side_gating_enabled",
        )
      );
    }
    var s = (function () {
      function t(e, t, n) {
        ((this.sessionId =
          e != null
            ? e
            : o("WAWebLogStatusPosterActions").createStatusPostingSessionId()),
          (this.newsletterWid = t),
          (this.entryPoint = n));
      }
      var n = t.prototype;
      return (
        (n.setNewsletterWid = function (t) {
          this.newsletterWid = t;
        }),
        (n.logEvent = function (n) {
          var t,
            r = (t = n.statusCreationEntryPoint) != null ? t : this.entryPoint;
          if (e(r)) {
            var a = n.canSaveAsDraft,
              i = n.editable,
              l = n.externalInteractables,
              s = n.externalPackageName,
              u = n.hasDraftAvailable,
              c = n.retryCount,
              d = n.shareType,
              m = n.statusAudienceSize,
              p = n.statusContentSource,
              _ = n.statusContentType,
              f = n.statusEventType,
              g = n.statusId,
              h = n.statusPostFailureReason,
              y = this.newsletterWid,
              C = new (o(
                "WAWebStatusPosterActionsWamEvent",
              ).StatusPosterActionsWamEvent)({
                statusEventType: f,
                statusCreationEntryPoint: r,
                statusContentType: _,
                statusContentSource: p,
                statusId: g,
                statusPostFailureReason: h,
                retryCount: c,
                hasDraftAvailable: u,
                canSaveAsDraft: a,
                statusAudienceSize: m,
                externalPackageName: s,
                shareType: d,
                editable: i,
                externalInteractables: l,
                statusPostingSessionId: this.sessionId,
                cid: o("WAWebStatusLoggingUtils").channelStatusCid(y),
                statusCategory:
                  y != null
                    ? o("WAWebWamEnumStatusCategory").STATUS_CATEGORY
                        .CHANNEL_STATUS
                    : void 0,
              });
            C.commit();
          }
        }),
        (n.logStatusTextScreenImp = function () {
          this.logEvent({
            statusEventType: o("WAWebWamEnumStatusEventType").STATUS_EVENT_TYPE
              .STATUS_TEXT_SCREEN_IMP,
          });
        }),
        (n.logBackgroundColorTap = function () {
          this.logEvent({
            statusEventType: o("WAWebWamEnumStatusEventType").STATUS_EVENT_TYPE
              .BACKGROUND_COLOR_TAP,
          });
        }),
        (n.logTextToolFontChanged = function () {
          this.logEvent({
            statusEventType: o("WAWebWamEnumStatusEventType").STATUS_EVENT_TYPE
              .TEXT_TOOL_FONT_CHANGED,
          });
        }),
        (n.logMediaPickerImp = function (t) {
          this.logEvent({
            statusEventType: o("WAWebWamEnumStatusEventType").STATUS_EVENT_TYPE
              .MEDIA_PICKER_IMP,
            statusCreationEntryPoint: t,
          });
        }),
        (n.logMediaPickerMediaSelected = function (t) {
          this.logEvent({
            statusEventType: o("WAWebWamEnumStatusEventType").STATUS_EVENT_TYPE
              .MEDIA_PICKER_MEDIA_SELECTED,
            statusContentSource: t,
          });
        }),
        (n.logStatusReadyScreenImp = function (t, n) {
          this.logEvent({
            statusEventType: o("WAWebWamEnumStatusEventType").STATUS_EVENT_TYPE
              .STATUS_READY_SCREEN_IMP,
            statusContentType: t,
            statusCreationEntryPoint: n,
            statusContentSource: c(n),
          });
        }),
        (n.logPostSendTap = function (t, n) {
          this.logEvent({
            statusEventType: o("WAWebWamEnumStatusEventType").STATUS_EVENT_TYPE
              .POST_SEND_TAP,
            statusContentType: t,
            statusCreationEntryPoint: n,
          });
        }),
        (n.logComposerXoutTapped = function () {
          this.logEvent({
            statusEventType: o("WAWebWamEnumStatusEventType").STATUS_EVENT_TYPE
              .COMPOSER_XOUT_TAPPED,
          });
        }),
        (n.logStatusPrivacyUpdated = function (t) {
          this.logEvent({
            statusEventType: o("WAWebWamEnumStatusEventType").STATUS_EVENT_TYPE
              .STATUS_PRIVACY_UPDATED,
            statusAudienceSize: t,
          });
        }),
        (n.logPostStatusRequest = function (t, n, r) {
          this.logEvent({
            statusEventType: o("WAWebWamEnumStatusEventType").STATUS_EVENT_TYPE
              .POST_STATUS_REQUEST,
            statusContentType: t,
            statusCreationEntryPoint: r,
            retryCount: n,
          });
        }),
        (n.logPostStatusSuccess = function (t, n, r) {
          this.logEvent({
            statusEventType: o("WAWebWamEnumStatusEventType").STATUS_EVENT_TYPE
              .POST_STATUS_SUCCESS,
            statusContentType: t,
            statusCreationEntryPoint: r,
            statusId: n,
          });
        }),
        (n.logPostStatusFailure = function (t) {
          var e = t.contentType,
            n = t.entryPoint,
            r = t.failureReason,
            a = t.retryCount;
          this.logEvent({
            statusEventType: o("WAWebWamEnumStatusEventType").STATUS_EVENT_TYPE
              .POST_STATUS_FAILURE,
            statusContentType: e,
            statusCreationEntryPoint: n,
            statusPostFailureReason: r,
            retryCount: a,
          });
        }),
        (n.logDeleteStatusRequest = function () {
          this.logEvent({
            statusEventType: o("WAWebWamEnumStatusEventType").STATUS_EVENT_TYPE
              .DELETE_STATUS_REQUEST,
          });
        }),
        (n.logDeleteStatusSuccess = function () {
          this.logEvent({
            statusEventType: o("WAWebWamEnumStatusEventType").STATUS_EVENT_TYPE
              .DELETE_STATUS_SUCCESS,
          });
        }),
        (n.logDeleteStatusFailure = function (t) {
          this.logEvent({
            statusEventType: o("WAWebWamEnumStatusEventType").STATUS_EVENT_TYPE
              .DELETE_STATUS_FAILURE,
            statusPostFailureReason: t,
          });
        }),
        (n.logForwardPreviewEdit = function () {
          this.logEvent({
            statusEventType: o("WAWebWamEnumStatusEventType").STATUS_EVENT_TYPE
              .FORWARD_PREVIEW_EDIT,
            statusContentSource: o("WAWebWamEnumStatusContentSource")
              .STATUS_CONTENT_SOURCE.FORWARD,
          });
        }),
        t
      );
    })();
    function u(t, n, r) {
      e(t) &&
        new (o("WAWebStatusPosterActionsWamEvent").StatusPosterActionsWamEvent)(
          {
            statusEventType: o("WAWebWamEnumStatusEventType").STATUS_EVENT_TYPE
              .STATUS_ENTRYPOINT_TAP,
            statusCreationEntryPoint: t,
            statusPostingSessionId: n,
            cid: o("WAWebStatusLoggingUtils").channelStatusCid(r),
            statusCategory:
              r != null
                ? o("WAWebWamEnumStatusCategory").STATUS_CATEGORY.CHANNEL_STATUS
                : void 0,
          },
        ).commit();
    }
    function c(e) {
      return d(e)
        ? o("WAWebWamEnumStatusContentSource").STATUS_CONTENT_SOURCE.RESHARE
        : void 0;
    }
    function d(e) {
      return (
        e ===
        o("WAWebWamEnumStatusCreationEntryPoint").STATUS_CREATION_ENTRY_POINT
          .STATUS_POST_RESHARE
      );
    }
    ((l.StatusPosterActionsLogger = s), (l.logStatusEntrypointTap = u));
  },
  98,
);
