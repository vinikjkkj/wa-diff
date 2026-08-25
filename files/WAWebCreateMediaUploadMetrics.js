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
      var t = e.fileOrigin,
        n = e.forwardedFromWeb,
        a = e.isHdPhoto,
        i = a === void 0 ? !1 : a,
        l = e.isViewOnce,
        u = e.type,
        c = e.uploadOrigin,
        d = e.uploadQpl,
        m = d === void 0 ? null : d,
        p = e.userUploadAttemptCount,
        _ = o("WAWebWamMediaMetricUtils").generateMediaEventId(),
        f = new (o("WAWebMediaUpload2WamEvent").MediaUpload2WamEvent)({
          mediaId: _,
          connectionType: o("WAWebWamEnumConnectionType").CONNECTION_TYPE
            .HOSTNAME,
          overallMediaType: o("WAWebWamMediaMetricUtils").getMetricMediaType(u),
          overallMmsVersion: 4,
          overallAttemptCount: p,
          networkStack: o("WAWebWamEnumNetworkStackType").NETWORK_STACK_TYPE
            .NATIVE,
          overallUploadMode: o(
            "WAWebWamMediaMetricUtils",
          ).getMetricOverallUploadModeType(u),
          overallIsForward: n,
          overallUploadOrigin: c,
          uploadSource: r("WAWebMapFileOriginToUploadOrigin")(t, n),
          isViewOnce: l,
          overallUserVisibleT: 0,
        });
      if (
        (o("WAWebAppTracker").AppTracker.start(
          o("WAWebAppTracker").AppTrackerType.MediaUL,
        ),
        u === o("WAWebMmsMediaTypes").MEDIA_TYPES.IMAGE)
      ) {
        var g = i
          ? o("WAWebWamEnumMediaQuality").MEDIA_QUALITY.HIGHEST_QUALITY
          : o("WAWebWamEnumMediaQuality").MEDIA_QUALITY.DATA_SAVER;
        f.set({ photoQualitySetting: g });
      }
      function h(e) {
        (f.set({ overallMediaSize: e }),
          m == null ||
            m.addPoint("handle_array_buffer_created", {
              int: { overall_media_size: s(e) },
            }));
      }
      function y(e) {
        var t = null;
        e instanceof o("WAWebHttpErrors").HttpStatusCodeError &&
          (f.set({ resumeHttpCode: e.status }), (t = e.status));
        var n = {};
        (t != null && (n.check_existing_http_status = t),
          m == null ||
            m.addPoint("handle_check_existing_error", {
              string: { check_existing_error_name: e.name },
              int: n,
            }));
      }
      function C() {
        (f.set({
          overallUploadResult: o("WAWebWamEnumMediaUploadResultType")
            .MEDIA_UPLOAD_RESULT_TYPE.DUPLICATE,
          overallIsFinal: !0,
          resumeHttpCode: 200,
        }),
          f.markOverallCumT(),
          o("WAWebAppTracker").AppTracker.stop(
            o("WAWebAppTracker").AppTrackerType.MediaUL,
          ),
          o("WAWebAppTracker").attachWAMAppContext(f, f.overallCumT),
          f.commit(),
          m == null ||
            m.addPoint("handle_check_existing_success", {
              bool: { check_existing_dedupe_hit: !0 },
            }));
      }
      function b(e) {
        var t = e.failCount,
          n = e.hostClass,
          r = e.hostName;
        (f.set({
          overallDomain: r,
          overallConnectionClass: n,
          overallRetryCount: t,
        }),
          m == null ||
            m.addPoint("handle_upload_host_found", {
              string: { host_name: r, host_class: n },
              int: { upload_host_attempt: t },
            }));
      }
      function v() {
        (f.set({
          resumeHttpCode: 404,
          overallUploadResult: o("WAWebWamEnumMediaUploadResultType")
            .MEDIA_UPLOAD_RESULT_TYPE.OK,
          overallIsFinal: !0,
          uploadHttpCode: 200,
          finalizeHttpCode: 200,
        }),
          f.markOverallCumT(),
          o("WAWebAppTracker").AppTracker.stop(
            o("WAWebAppTracker").AppTrackerType.MediaUL,
          ),
          o("WAWebAppTracker").attachWAMAppContext(f, f.overallCumT),
          f.commit(),
          o("WAWebCoreActionsODS").logMediaUploadSuccess());
      }
      function S(e) {
        var t = o("WAWebWamMediaMetricUtils").getMetricUploadErrorResultType(e);
        f.set({ overallUploadResult: t, overallIsFinal: !0 });
        var n = o("WAWebWamMediaMetricUtils").getStatusCode(e);
        (n != null && ((f.uploadHttpCode = n), (f.finalizeHttpCode = n)),
          f.markOverallCumT(),
          o("WAWebAppTracker").AppTracker.stop(
            o("WAWebAppTracker").AppTrackerType.MediaUL,
          ),
          o("WAWebAppTracker").attachWAMAppContext(f, f.overallCumT),
          f.commit(),
          o("WAWebWamMediaMetricUtils").logErrorUnknownDetails(f, e),
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
      function R(e) {
        (f.set({ overallT: e }),
          m == null || m.addPoint("handle_upload_attempt_success"));
      }
      function L(e, t, n, r) {
        var a = new (o("WAWebMediaUpload2WamEvent").MediaUpload2WamEvent)(
            f.all,
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
          i != null && (f.uploadHttpCode = i),
          f.markOverallCumT(),
          o("WAWebAppTracker").AppTracker.stop(
            o("WAWebAppTracker").AppTrackerType.MediaUL,
          ),
          o("WAWebAppTracker").attachWAMAppContext(f, f.overallCumT),
          a.commit(),
          o("WAWebWamMediaMetricUtils").logErrorUnknownDetails(f, e),
          m == null ||
            m.addPoint("handle_upload_attempt_error", {
              string: { upload_error_name: e.name },
              int: { upload_attempt: n, upload_retry_phase: r },
            }));
      }
      function E() {
        (f.startOverallEncryptT(), m == null || m.addPoint("encrypt_start"));
      }
      function k() {
        (f.markOverallEncryptT(), m == null || m.addPoint("encrypt_end"));
      }
      function I() {
        (f.set({ uploadIsStreaming: !0 }),
          m == null || m.addPoint("streaming_upload_start"));
      }
      function T(e) {
        f.set({ uploadBytesTransferred: e });
      }
      function D(e) {
        (e != null && f.set({ isViewOnce: e }), f.markOverallUserVisibleT());
      }
      return {
        handleStreamUploadStart: I,
        handleArrayBufferCreated: h,
        handleCheckExistingError: y,
        handleCheckExistingSuccess: C,
        handleUploadHostFound: b,
        handleUploadSuccess: v,
        handleUploadError: S,
        handleUploadAttemptSuccess: R,
        handleUploadAttemptError: L,
        mediaId: _,
        handleEncryptionStart: E,
        handleEncryptionSuccess: k,
        handleUploadProgress: T,
        handleSendMessageStart: D,
      };
    }
    function s(e) {
      return Math.round(e / 1024) * 1024;
    }
    l.default = e;
  },
  98,
);
