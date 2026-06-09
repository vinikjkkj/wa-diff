__d(
  "WAWebLogStatusPosterActions",
  [
    "WAWebABProps",
    "WAWebStatusLoggingUtils",
    "WAWebStatusPosterActionsWamEvent",
    "WAWebWamEnumStatusCategory",
    "WAWebWamEnumStatusContentSource",
    "WAWebWamEnumStatusContentType",
    "WAWebWamEnumStatusCreationEntryPoint",
    "WAWebWamEnumStatusEventType",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return o("WAWebABProps").getABPropConfigValue(
        "status_poster_side_gating_enabled",
      );
    }
    function s() {
      var e = new Uint32Array(2);
      return (
        self.crypto.getRandomValues(e),
        Math.floor(e[0] / 2048) * 4294967296 + e[1]
      );
    }
    var u = (function () {
      function t(e, t) {
        ((this.sessionId = e != null ? e : s()), (this.newsletterWid = t));
      }
      var n = t.prototype;
      return (
        (n.setNewsletterWid = function (t) {
          this.newsletterWid = t;
        }),
        (n.logEvent = function (n) {
          if (e()) {
            var t = n.canSaveAsDraft,
              r = n.editable,
              a = n.externalInteractables,
              i = n.externalPackageName,
              l = n.hasDraftAvailable,
              s = n.retryCount,
              u = n.shareType,
              c = n.statusAudienceSize,
              d = n.statusContentSource,
              m = n.statusContentType,
              p = n.statusCreationEntryPoint,
              _ = n.statusEventType,
              f = n.statusId,
              g = n.statusPostFailureReason,
              h = this.newsletterWid,
              y = new (o(
                "WAWebStatusPosterActionsWamEvent",
              ).StatusPosterActionsWamEvent)({
                statusEventType: _,
                statusCreationEntryPoint: p,
                statusContentType: m,
                statusContentSource: d,
                statusId: f,
                statusPostFailureReason: g,
                retryCount: s,
                hasDraftAvailable: l,
                canSaveAsDraft: t,
                statusAudienceSize: c,
                externalPackageName: i,
                shareType: u,
                editable: r,
                externalInteractables: a,
                statusPostingSessionId: this.sessionId,
                cid: o("WAWebStatusLoggingUtils").channelStatusCid(h),
                statusCategory:
                  h != null
                    ? o("WAWebWamEnumStatusCategory").STATUS_CATEGORY
                        .CHANNEL_STATUS
                    : void 0,
              });
            y.commit();
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
        (n.logStatusReadyScreenImp = function (t) {
          this.logEvent({
            statusEventType: o("WAWebWamEnumStatusEventType").STATUS_EVENT_TYPE
              .STATUS_READY_SCREEN_IMP,
            statusContentType: t,
          });
        }),
        (n.logPostSendTap = function (t) {
          this.logEvent({
            statusEventType: o("WAWebWamEnumStatusEventType").STATUS_EVENT_TYPE
              .POST_SEND_TAP,
            statusContentType: t,
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
        (n.logPostStatusFailure = function (t, n, r, a) {
          this.logEvent({
            statusEventType: o("WAWebWamEnumStatusEventType").STATUS_EVENT_TYPE
              .POST_STATUS_FAILURE,
            statusContentType: t,
            statusCreationEntryPoint: a,
            statusPostFailureReason: n,
            retryCount: r,
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
    function c(t, n, r) {
      e() &&
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
    ((l.STATUS_CONTENT_SOURCE = o(
      "WAWebWamEnumStatusContentSource",
    ).STATUS_CONTENT_SOURCE),
      (l.STATUS_CONTENT_TYPE = o(
        "WAWebWamEnumStatusContentType",
      ).STATUS_CONTENT_TYPE),
      (l.STATUS_CREATION_ENTRY_POINT = o(
        "WAWebWamEnumStatusCreationEntryPoint",
      ).STATUS_CREATION_ENTRY_POINT),
      (l.STATUS_EVENT_TYPE = o(
        "WAWebWamEnumStatusEventType",
      ).STATUS_EVENT_TYPE),
      (l.createStatusPostingSessionId = s),
      (l.StatusPosterActionsLogger = u),
      (l.logStatusEntrypointTap = c));
  },
  98,
);
