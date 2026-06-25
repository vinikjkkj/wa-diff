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
    function e(e) {
      var t = e.forwardedFromWeb,
        n = e.isHdPhoto,
        a = n === void 0 ? !1 : n,
        i = e.isViewOnce,
        l = e.type,
        u = e.uploadOrigin,
        c = e.uploadQpl,
        d = c === void 0 ? null : c,
        m = e.userUploadAttemptCount,
        p = o("WAWebWamMediaMetricUtils").generateMediaEventId(),
        _ = new (o("WAWebMediaUpload2WamEvent").MediaUpload2WamEvent)({
          mediaId: p,
          connectionType: o("WAWebWamEnumConnectionType").CONNECTION_TYPE
            .HOSTNAME,
          overallMediaType: o("WAWebWamMediaMetricUtils").getMetricMediaType(l),
          overallMmsVersion: 4,
          overallAttemptCount: m,
          networkStack: o("WAWebWamEnumNetworkStackType").NETWORK_STACK_TYPE
            .NATIVE,
          overallUploadMode: o(
            "WAWebWamMediaMetricUtils",
          ).getMetricOverallUploadModeType(l),
          overallIsForward: t,
          overallUploadOrigin: u,
          uploadSource: r("WAWebMapFileOriginToUploadOrigin")(u, t),
          isViewOnce: i,
          overallUserVisibleT: 0,
        });
      if (
        (o("WAWebAppTracker").AppTracker.start(
          o("WAWebAppTracker").AppTrackerType.MediaUL,
        ),
        l === o("WAWebMmsMediaTypes").MEDIA_TYPES.IMAGE)
      ) {
        var f = a
          ? o("WAWebWamEnumMediaQuality").MEDIA_QUALITY.HIGHEST_QUALITY
          : o("WAWebWamEnumMediaQuality").MEDIA_QUALITY.DATA_SAVER;
        _.set({ photoQualitySetting: f });
      }
      function g(e) {
        (_.set({ overallMediaSize: e }),
          d == null ||
            d.addPoint("handle_array_buffer_created", {
              int: { overall_media_size: s(e) },
            }));
      }
      function h(e) {
        var t = null;
        e instanceof o("WAWebHttpErrors").HttpStatusCodeError &&
          (_.set({ resumeHttpCode: e.status }), (t = e.status));
        var n = {};
        (t != null && (n.check_existing_http_status = t),
          d == null ||
            d.addPoint("handle_check_existing_error", {
              string: { check_existing_error_name: e.name },
              int: n,
            }));
      }
      function y() {
        (_.set({
          overallUploadResult: o("WAWebWamEnumMediaUploadResultType")
            .MEDIA_UPLOAD_RESULT_TYPE.DUPLICATE,
          overallIsFinal: !0,
          resumeHttpCode: 200,
        }),
          _.markOverallCumT(),
          o("WAWebAppTracker").AppTracker.stop(
            o("WAWebAppTracker").AppTrackerType.MediaUL,
          ),
          o("WAWebAppTracker").attachWAMAppContext(_, _.overallCumT),
          _.commit(),
          d == null ||
            d.addPoint("handle_check_existing_success", {
              bool: { check_existing_dedupe_hit: !0 },
            }));
      }
      function C(e) {
        var t = e.failCount,
          n = e.hostClass,
          r = e.hostName;
        (_.set({
          overallDomain: r,
          overallConnectionClass: n,
          overallRetryCount: t,
        }),
          d == null ||
            d.addPoint("handle_upload_host_found", {
              string: { host_name: r, host_class: n },
              int: { upload_host_attempt: t },
            }));
      }
      function b() {
        (_.set({
          resumeHttpCode: 404,
          overallUploadResult: o("WAWebWamEnumMediaUploadResultType")
            .MEDIA_UPLOAD_RESULT_TYPE.OK,
          overallIsFinal: !0,
          uploadHttpCode: 200,
          finalizeHttpCode: 200,
        }),
          _.markOverallCumT(),
          o("WAWebAppTracker").AppTracker.stop(
            o("WAWebAppTracker").AppTrackerType.MediaUL,
          ),
          o("WAWebAppTracker").attachWAMAppContext(_, _.overallCumT),
          _.commit(),
          o("WAWebCoreActionsODS").logMediaUploadSuccess());
      }
      function v(e) {
        var t = o("WAWebWamMediaMetricUtils").getMetricUploadErrorResultType(e);
        _.set({ overallUploadResult: t, overallIsFinal: !0 });
        var n = o("WAWebWamMediaMetricUtils").getStatusCode(e);
        (n != null && ((_.uploadHttpCode = n), (_.finalizeHttpCode = n)),
          _.markOverallCumT(),
          o("WAWebAppTracker").AppTracker.stop(
            o("WAWebAppTracker").AppTrackerType.MediaUL,
          ),
          o("WAWebAppTracker").attachWAMAppContext(_, _.overallCumT),
          _.commit(),
          o("WAWebWamMediaMetricUtils").logErrorUnknownDetails(_, e),
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
      function S(e) {
        (_.set({ overallT: e }),
          d == null || d.addPoint("handle_upload_attempt_success"));
      }
      function R(e, t, n, r) {
        var a = new (o("WAWebMediaUpload2WamEvent").MediaUpload2WamEvent)(
            _.all,
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
          i != null && (_.uploadHttpCode = i),
          _.markOverallCumT(),
          o("WAWebAppTracker").AppTracker.stop(
            o("WAWebAppTracker").AppTrackerType.MediaUL,
          ),
          o("WAWebAppTracker").attachWAMAppContext(_, _.overallCumT),
          a.commit(),
          o("WAWebWamMediaMetricUtils").logErrorUnknownDetails(_, e),
          d == null ||
            d.addPoint("handle_upload_attempt_error", {
              string: { upload_error_name: e.name },
              int: { upload_attempt: n, upload_retry_phase: r },
            }));
      }
      function L() {
        (_.startOverallEncryptT(), d == null || d.addPoint("encrypt_start"));
      }
      function E() {
        (_.markOverallEncryptT(), d == null || d.addPoint("encrypt_end"));
      }
      function k() {
        (_.set({ uploadIsStreaming: !0 }),
          d == null || d.addPoint("streaming_upload_start"));
      }
      function I(e) {
        _.set({ uploadBytesTransferred: e });
      }
      function T(e) {
        (e != null && _.set({ isViewOnce: e }), _.markOverallUserVisibleT());
      }
      return {
        handleStreamUploadStart: k,
        handleArrayBufferCreated: g,
        handleCheckExistingError: h,
        handleCheckExistingSuccess: y,
        handleUploadHostFound: C,
        handleUploadSuccess: b,
        handleUploadError: v,
        handleUploadAttemptSuccess: S,
        handleUploadAttemptError: R,
        mediaId: p,
        handleEncryptionStart: L,
        handleEncryptionSuccess: E,
        handleUploadProgress: I,
        handleSendMessageStart: T,
      };
    }
    function s(e) {
      return Math.round(e / 1024) * 1024;
    }
    l.default = e;
  },
  98,
);
