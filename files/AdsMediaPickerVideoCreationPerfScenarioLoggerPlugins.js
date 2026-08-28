__d(
  "AdsMediaPickerVideoCreationPerfScenarioLoggerPlugins",
  [
    "AdsPerfInteractionsController",
    "AdsVideoEncodingSuccessDataActionFlux",
    "AdsVideoUploadErrorDataActionFlux",
    "InteractionTracingMetrics",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = null,
      s = function (t) {
        var e;
        return (e = t.actionType) != null ? e : "";
      };
    function u() {
      var e = r("AdsPerfInteractionsController").getAllOngoingInteraction();
      if (e.has("am.toast_card.video_upload")) {
        var t;
        return (t = e.get("am.toast_card.video_upload")) == null
          ? void 0
          : t.interactionID;
      }
      return null;
    }
    function c(t) {
      if (((e = u()), e != null)) {
        var n = "VIDEO.UPLOAD/user_edit_during_upload/" + (t.index + 1);
        r("InteractionTracingMetrics").addMarkerPoint(
          e,
          n,
          "AppTiming",
          void 0,
          babelHelpers.extends({}, t),
        );
      }
    }
    var d = {
        log: function (n) {
          if (
            ((e = u()),
            e != null &&
              r("InteractionTracingMetrics").addMarkerPoint(
                e,
                o("AdsVideoEncodingSuccessDataActionFlux").actionType,
                "AppTiming",
              ),
            r("AdsPerfInteractionsController")
              .getAllOngoingInteraction()
              .has("am.toast_card.video_upload"))
          ) {
            var t;
            r("AdsPerfInteractionsController").addCustomInteractionAnnotation(
              "am.toast_card.video_upload",
              ((t = {}), (t.video_length = Math.round(n.video.length)), t),
            );
          }
        },
      },
      m = {
        log: function (n) {
          ((e = u()),
            e != null &&
              r("InteractionTracingMetrics").addMarkerPoint(
                e,
                o("AdsVideoUploadErrorDataActionFlux").actionType,
                "AppTiming",
              ),
            n.error != null &&
              r("AdsPerfInteractionsController").annotateFailure(
                "am.toast_card.video_upload",
                o("AdsVideoUploadErrorDataActionFlux").actionType,
                { error: n.error },
              ));
        },
      },
      p = {
        log: function (n) {
          ((e = u()),
            e != null &&
              r("InteractionTracingMetrics").addMarkerPoint(
                e,
                s(babelHelpers.extends({ actionType: void 0 }, n)),
                "AppTiming",
              ));
        },
      },
      _ = {
        log: function (n) {
          ((e = u()),
            e != null &&
              r("InteractionTracingMetrics").addMarkerPoint(
                e,
                "VIDEO.UPLOADED_END_AND_START_ENCODING",
                "AppTiming",
              ));
        },
      };
    ((l.addMarkerPointUserInteraction = c),
      (l.AdsVideoDialogUploadAndEncodeVideoSuccessLoggerPlugin = d),
      (l.AdsVideoDialogUploadVideoFailLoggerPlugin = m),
      (l.AdsVideoDialogUploadAndEncodeVideoAbandonLoggerPlugin = p),
      (l.AdsVideoUploadVideoSuccessLoggerPlugin = _));
  },
  98,
);
