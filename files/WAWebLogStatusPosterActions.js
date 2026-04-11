__d(
  "WAWebLogStatusPosterActions",
  [
    "WAWebABProps",
    "WAWebStatusPosterActionsWamEvent",
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
    var s = (function () {
      function t() {
        this.sessionId = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);
      }
      var n = t.prototype;
      return (
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
              h = new (o(
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
              });
            h.commit();
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
        (n.logPostStatusRequest = function (t, n) {
          this.logEvent({
            statusEventType: o("WAWebWamEnumStatusEventType").STATUS_EVENT_TYPE
              .POST_STATUS_REQUEST,
            statusContentType: t,
            retryCount: n,
          });
        }),
        (n.logPostStatusSuccess = function (t, n) {
          this.logEvent({
            statusEventType: o("WAWebWamEnumStatusEventType").STATUS_EVENT_TYPE
              .POST_STATUS_SUCCESS,
            statusContentType: t,
            statusId: n,
          });
        }),
        (n.logPostStatusFailure = function (t, n, r) {
          this.logEvent({
            statusEventType: o("WAWebWamEnumStatusEventType").STATUS_EVENT_TYPE
              .POST_STATUS_FAILURE,
            statusContentType: t,
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
      (l.StatusPosterActionsLogger = s));
  },
  98,
);
