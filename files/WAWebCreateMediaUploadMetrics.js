__d(
  "WAWebCreateMediaUploadMetrics",
  [
    "WAWebAppTracker",
    "WAWebCoreActionsODS",
    "WAWebHttpErrors",
    "WAWebMapFileOriginToUploadOrigin",
    "WAWebMediaUpload2WamEvent",
    "WAWebMmsMediaTypes",
    "WAWebWamEnumConnectionType",
    "WAWebWamEnumMediaQuality",
    "WAWebWamEnumMediaUploadResultType",
    "WAWebWamEnumNetworkStackType",
    "WAWebWamEnumOverallLastUploadRetryPhaseType",
    "WAWebWamMediaMetricUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n, a, i, l) {
      l === void 0 && (l = !1);
      var s = o("WAWebWamMediaMetricUtils").generateMediaEventId(),
        u = new (o("WAWebMediaUpload2WamEvent").MediaUpload2WamEvent)({
          mediaId: s,
          connectionType: o("WAWebWamEnumConnectionType").CONNECTION_TYPE
            .HOSTNAME,
          overallMediaType: o("WAWebWamMediaMetricUtils").getMetricMediaType(e),
          overallMmsVersion: 4,
          overallAttemptCount: n,
          networkStack: o("WAWebWamEnumNetworkStackType").NETWORK_STACK_TYPE
            .NATIVE,
          overallUploadMode: o(
            "WAWebWamMediaMetricUtils",
          ).getMetricOverallUploadModeType(e),
          overallIsForward: a,
          overallUploadOrigin: t,
          uploadSource: r("WAWebMapFileOriginToUploadOrigin")(t, a),
          isViewOnce: i,
          overallUserVisibleT: 0,
        });
      if (
        (o("WAWebAppTracker").AppTracker.start(
          o("WAWebAppTracker").AppTrackerType.MediaUL,
        ),
        e === o("WAWebMmsMediaTypes").MEDIA_TYPES.IMAGE)
      ) {
        var c = l
          ? o("WAWebWamEnumMediaQuality").MEDIA_QUALITY.HIGHEST_QUALITY
          : o("WAWebWamEnumMediaQuality").MEDIA_QUALITY.DATA_SAVER;
        u.set({ photoQualitySetting: c });
      }
      function d(e) {
        u.set({ overallMediaSize: e });
      }
      function m(e) {
        e instanceof o("WAWebHttpErrors").HttpStatusCodeError &&
          u.set({ resumeHttpCode: e.status });
      }
      function p() {
        (u.set({
          overallUploadResult: o("WAWebWamEnumMediaUploadResultType")
            .MEDIA_UPLOAD_RESULT_TYPE.DUPLICATE,
          overallIsFinal: !0,
          resumeHttpCode: 200,
        }),
          u.markOverallCumT(),
          o("WAWebAppTracker").AppTracker.stop(
            o("WAWebAppTracker").AppTrackerType.MediaUL,
          ),
          o("WAWebAppTracker").attachWAMAppContext(u, u.overallCumT),
          u.commit());
      }
      function _(e) {
        var t = e.failCount,
          n = e.hostClass,
          r = e.hostName;
        u.set({
          overallDomain: r,
          overallConnectionClass: n,
          overallRetryCount: t,
        });
      }
      function f() {
        (u.set({
          resumeHttpCode: 404,
          overallUploadResult: o("WAWebWamEnumMediaUploadResultType")
            .MEDIA_UPLOAD_RESULT_TYPE.OK,
          overallIsFinal: !0,
          uploadHttpCode: 200,
          finalizeHttpCode: 200,
        }),
          u.markOverallCumT(),
          o("WAWebAppTracker").AppTracker.stop(
            o("WAWebAppTracker").AppTrackerType.MediaUL,
          ),
          o("WAWebAppTracker").attachWAMAppContext(u, u.overallCumT),
          u.commit(),
          o("WAWebCoreActionsODS").logMediaUploadSuccess());
      }
      function g(e) {
        var t = o("WAWebWamMediaMetricUtils").getMetricUploadErrorResultType(e);
        u.set({ overallUploadResult: t, overallIsFinal: !0 });
        var n = o("WAWebWamMediaMetricUtils").getStatusCode(e);
        (n != null && ((u.uploadHttpCode = n), (u.finalizeHttpCode = n)),
          u.markOverallCumT(),
          o("WAWebAppTracker").AppTracker.stop(
            o("WAWebAppTracker").AppTrackerType.MediaUL,
          ),
          o("WAWebAppTracker").attachWAMAppContext(u, u.overallCumT),
          u.commit(),
          o("WAWebWamMediaMetricUtils").logErrorUnknownDetails(u, e),
          t !==
            o("WAWebWamEnumMediaUploadResultType").MEDIA_UPLOAD_RESULT_TYPE
              .ERROR_CANCEL &&
            (o("WAWebCoreActionsODS").logMediaUploadError(),
            t ===
            o("WAWebWamEnumMediaUploadResultType").MEDIA_UPLOAD_RESULT_TYPE
              .ERROR_SERVER
              ? o("WAWebCoreActionsODS").logMediaUploadErrorServer()
              : t ===
                  o("WAWebWamEnumMediaUploadResultType")
                    .MEDIA_UPLOAD_RESULT_TYPE.ERROR_UPLOAD &&
                o("WAWebCoreActionsODS").logMediaUploadErrorNetwork()));
      }
      function h(e) {
        u.set({ overallT: e });
      }
      function y(e, t, n, r) {
        var a = new (o("WAWebMediaUpload2WamEvent").MediaUpload2WamEvent)(
            u.all,
          ),
          i = o("WAWebWamMediaMetricUtils").getStatusCode(e),
          l =
            r ===
            o("WAWebWamEnumOverallLastUploadRetryPhaseType")
              .OVERALL_LAST_UPLOAD_RETRY_PHASE_TYPE.FINALIZE
              ? i
              : a.finalizeHttpCode;
        (a.set({
          mediaId: o("WAWebWamMediaMetricUtils").generateMediaEventId(),
          overallUploadResult: o(
            "WAWebWamMediaMetricUtils",
          ).getMetricUploadErrorResultType(e),
          overallIsFinal: !1,
          overallT: t,
          overallRetryCount: n,
          overallLastUploadRetryPhase: r,
          finalizeHttpCode: l,
        }),
          i != null && (u.uploadHttpCode = i),
          u.markOverallCumT(),
          o("WAWebAppTracker").AppTracker.stop(
            o("WAWebAppTracker").AppTrackerType.MediaUL,
          ),
          o("WAWebAppTracker").attachWAMAppContext(u, u.overallCumT),
          a.commit(),
          o("WAWebWamMediaMetricUtils").logErrorUnknownDetails(u, e));
      }
      function C() {
        u.startOverallEncryptT();
      }
      function b() {
        u.markOverallEncryptT();
      }
      function v() {
        u.set({ uploadIsStreaming: !0 });
      }
      function S(e) {
        u.set({ uploadBytesTransferred: e });
      }
      function R(e) {
        (e != null && u.set({ isViewOnce: e }), u.markOverallUserVisibleT());
      }
      return {
        handleStreamUploadStart: v,
        handleArrayBufferCreated: d,
        handleCheckExistingError: m,
        handleCheckExistingSuccess: p,
        handleUploadHostFound: _,
        handleUploadSuccess: f,
        handleUploadError: g,
        handleUploadAttemptSuccess: h,
        handleUploadAttemptError: y,
        mediaId: s,
        handleEncryptionStart: C,
        handleEncryptionSuccess: b,
        handleUploadProgress: S,
        handleSendMessageStart: R,
      };
    }
    l.default = e;
  },
  98,
);
