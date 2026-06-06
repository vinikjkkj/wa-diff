__d(
  "WAWebCreateMediaDownloadMetrics",
  [
    "WAWebAppTracker",
    "WAWebCoreActionsODS",
    "WAWebMediaDownload2WamEvent",
    "WAWebMmsDownloadUploadCrashLogger",
    "WAWebMmsMediaTypes",
    "WAWebWamEnumConnectionType",
    "WAWebWamEnumMediaDownloadResultType",
    "WAWebWamEnumNetworkStackType",
    "WAWebWamGroupMetricCache",
    "WAWebWamMediaMetricUtils",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      var t,
        n = o("WAWebWamMediaMetricUtils").generateMediaEventId(),
        r = new (o("WAWebMediaDownload2WamEvent").MediaDownload2WamEvent)({
          mediaId: n,
          connectionType: o("WAWebWamEnumConnectionType").CONNECTION_TYPE
            .HOSTNAME,
          overallMediaType: o("WAWebWamMediaMetricUtils").getMetricMediaType(
            e.type,
          ),
          overallMmsVersion: 4,
          networkStack: o("WAWebWamEnumNetworkStackType").NETWORK_STACK_TYPE
            .NATIVE,
          overallDownloadMode: o(
            "WAWebWamMediaMetricUtils",
          ).getMetricOverallDownloadModeType(
            e.type,
            e.downloadMode,
            e.isPrefetch,
          ),
          overallAttemptCount: e.userDownloadAttemptCount,
          overallDownloadOrigin: e.downloadOrigin,
          overallBackendStore:
            (t = o("WAWebWamMediaMetricUtils").getMetricBackendStore(
              e.directPath,
            )) != null
              ? t
              : void 0,
          isViewOnce: e.isViewOnce,
        });
      (o("WAWebAppTracker").AppTracker.start(
        o("WAWebAppTracker").AppTrackerType.MediaDL,
      ),
        e.type === o("WAWebMmsMediaTypes").MEDIA_TYPES.IMAGE &&
          r.set(babelHelpers.extends({}, e.imageDimensions)));
      var a = e.chatWid;
      if (a) {
        var i = await o("WAWebWamGroupMetricCache").getGroupMetrics(a);
        (i == null ? void 0 : i.deviceCount) != null &&
          r.set({ deviceCount: i.deviceCount });
      }
      o("WAWebMmsDownloadUploadCrashLogger").downloadUploadCrashLogger.mark(
        n,
        o("WAWebMmsDownloadUploadCrashLogger").ProgressType.DOWNLOAD_STARTED,
      );
      var l = function (t) {
          var e = t.failCount,
            n = t.hostClass,
            o = t.hostName;
          r.set({
            overallDomain: o,
            overallConnectionClass: n,
            overallRetryCount: e,
          });
        },
        s = function (t) {
          (r.set({
            overallMediaSize: t,
            overallDownloadResult: o("WAWebWamEnumMediaDownloadResultType")
              .MEDIA_DOWNLOAD_RESULT_TYPE.OK,
            overallIsFinal: !0,
            downloadHttpCode: 200,
          }),
            o(
              "WAWebMmsDownloadUploadCrashLogger",
            ).downloadUploadCrashLogger.mark(
              n,
              o("WAWebMmsDownloadUploadCrashLogger").ProgressType
                .DOWNLOAD_FINISHED,
              { overallMediaSize: t },
            ));
        },
        u = function (t, n) {
          var e = o(
            "WAWebWamMediaMetricUtils",
          ).getMetricDownloadErrorResultType(t);
          r.set({ overallDownloadResult: e, overallIsFinal: n });
          var a = o("WAWebWamMediaMetricUtils").getStatusCode(t);
          (a != null && (r.downloadHttpCode = a),
            r.markOverallCumT(),
            o("WAWebAppTracker").AppTracker.stop(
              o("WAWebAppTracker").AppTrackerType.MediaDL,
            ),
            o("WAWebAppTracker").attachWAMAppContext(r, r.overallCumT),
            r.commit(),
            o("WAWebWamMediaMetricUtils").logErrorUnknownDetails(r, t),
            n &&
              e !==
                o("WAWebWamEnumMediaDownloadResultType")
                  .MEDIA_DOWNLOAD_RESULT_TYPE.ERROR_CANCEL &&
              (o("WAWebCoreActionsODS").logMediaDownloadError(),
              e ===
              o("WAWebWamEnumMediaDownloadResultType")
                .MEDIA_DOWNLOAD_RESULT_TYPE.ERROR_TOO_OLD
                ? o("WAWebCoreActionsODS").logMediaDownloadErrorExpired()
                : e ===
                    o("WAWebWamEnumMediaDownloadResultType")
                      .MEDIA_DOWNLOAD_RESULT_TYPE.ERROR_NETWORK &&
                  o("WAWebCoreActionsODS").logMediaDownloadErrorNetwork()));
        },
        c = function (t) {
          r.set({ overallT: t });
        },
        d = function (t) {
          var e = t.error,
            n = t.failCount,
            a = t.overallT,
            i = new (o("WAWebMediaDownload2WamEvent").MediaDownload2WamEvent)(
              r.all,
            );
          i.set({
            mediaId: o("WAWebWamMediaMetricUtils").generateMediaEventId(),
            overallDownloadResult: o(
              "WAWebWamMediaMetricUtils",
            ).getMetricDownloadErrorResultType(e),
            overallIsFinal: !1,
            overallT: a,
            overallRetryCount: n,
          });
          var l = o("WAWebWamMediaMetricUtils").getStatusCode(e);
          (l != null && (r.downloadHttpCode = l),
            r.markOverallCumT(),
            o("WAWebAppTracker").AppTracker.stop(
              o("WAWebAppTracker").AppTrackerType.MediaDL,
            ),
            o("WAWebAppTracker").attachWAMAppContext(r, r.overallCumT),
            i.commit(),
            o("WAWebWamMediaMetricUtils").logErrorUnknownDetails(i, e));
        },
        m = function () {
          r.startOverallDecryptT();
        },
        p = function () {
          r.markOverallDecryptT();
        },
        _ = function () {
          (r.markOverallCumT(),
            o("WAWebAppTracker").AppTracker.stop(
              o("WAWebAppTracker").AppTrackerType.MediaDL,
            ),
            o("WAWebAppTracker").attachWAMAppContext(r, r.overallCumT),
            r.commit(),
            o("WAWebCoreActionsODS").logMediaDownloadSuccess());
        },
        f = function () {
          r.startDownloadNetworkT();
        },
        g = function () {
          r.markDownloadNetworkT();
        };
      return {
        mediaId: n,
        handleDownloadSuccess: s,
        handleDownloadHostFound: l,
        handleDownloadError: u,
        handleDownloadAttemptSuccess: c,
        handleDownloadAttemptError: d,
        handleDownloadAndDecryptSuccess: _,
        markDecryptionEnd: p,
        markDecryptionStart: m,
        startNetworkT: f,
        markNetworkT: g,
      };
    }
    l.createMediaDownloadMetrics = e;
  },
  98,
);
