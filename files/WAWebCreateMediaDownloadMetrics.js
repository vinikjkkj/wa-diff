__d(
  "WAWebCreateMediaDownloadMetrics",
  [
    "WATimeUtils",
    "WAWebABProps",
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
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n = o("WAWebWamMediaMetricUtils").generateMediaEventId(),
            r = new (o("WAWebMediaDownload2WamEvent").MediaDownload2WamEvent)({
              mediaId: n,
              connectionType: o("WAWebWamEnumConnectionType").CONNECTION_TYPE
                .HOSTNAME,
              overallMediaType: o(
                "WAWebWamMediaMetricUtils",
              ).getMetricMediaType(e.type),
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
          if (
            (o("WAWebAppTracker").AppTracker.start(
              o("WAWebAppTracker").AppTrackerType.MediaUL,
            ),
            e.type === o("WAWebMmsMediaTypes").MEDIA_TYPES.IMAGE &&
              r.set(babelHelpers.extends({}, e.imageDimensions)),
            o("WAWebABProps").getABPropConfigValue(
              "enable_days_since_receive_logging",
            ) && e.mediaKeyTimestamp != null)
          ) {
            var a = e.mediaKeyTimestamp,
              i = Math.floor((o("WATimeUtils").unixTime() - a) / (1440 * 60));
            r.set({ daysSinceReceive: i });
          }
          var l = e.chatWid;
          if (l) {
            var s = yield o("WAWebWamGroupMetricCache").getGroupMetrics(l);
            (s == null ? void 0 : s.deviceCount) != null &&
              r.set({ deviceCount: s.deviceCount });
          }
          o("WAWebMmsDownloadUploadCrashLogger").downloadUploadCrashLogger.mark(
            n,
            o("WAWebMmsDownloadUploadCrashLogger").ProgressType
              .DOWNLOAD_STARTED,
          );
          var u = function (t) {
              var e = t.failCount,
                n = t.hostClass,
                o = t.hostName;
              r.set({
                overallDomain: o,
                overallConnectionClass: n,
                overallRetryCount: e,
              });
            },
            c = function (t) {
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
            d = function (t, n) {
              var e = o(
                "WAWebWamMediaMetricUtils",
              ).getMetricDownloadErrorResultType(t);
              r.set({ overallDownloadResult: e, overallIsFinal: n });
              var a = o("WAWebWamMediaMetricUtils").getStatusCode(t);
              (a != null && (r.downloadHttpCode = a),
                r.markOverallCumT(),
                o("WAWebAppTracker").AppTracker.stop(
                  o("WAWebAppTracker").AppTrackerType.MediaUL,
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
            m = function (t) {
              r.set({ overallT: t });
            },
            p = function (t) {
              var e = t.error,
                n = t.failCount,
                a = t.overallT,
                i = new (o(
                  "WAWebMediaDownload2WamEvent",
                ).MediaDownload2WamEvent)(r.all);
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
                  o("WAWebAppTracker").AppTrackerType.MediaUL,
                ),
                o("WAWebAppTracker").attachWAMAppContext(r, r.overallCumT),
                i.commit(),
                o("WAWebWamMediaMetricUtils").logErrorUnknownDetails(i, e));
            },
            _ = function () {
              r.startOverallDecryptT();
            },
            f = function () {
              r.markOverallDecryptT();
            },
            g = function () {
              (r.markOverallCumT(),
                o("WAWebAppTracker").AppTracker.stop(
                  o("WAWebAppTracker").AppTrackerType.MediaUL,
                ),
                o("WAWebAppTracker").attachWAMAppContext(r, r.overallCumT),
                r.commit(),
                o("WAWebCoreActionsODS").logMediaDownloadSuccess());
            },
            h = function () {
              r.startDownloadNetworkT();
            },
            y = function () {
              r.markDownloadNetworkT();
            };
          return {
            mediaId: n,
            handleDownloadSuccess: c,
            handleDownloadHostFound: u,
            handleDownloadError: d,
            handleDownloadAttemptSuccess: m,
            handleDownloadAttemptError: p,
            handleDownloadAndDecryptSuccess: g,
            markDecryptionEnd: f,
            markDecryptionStart: _,
            startNetworkT: h,
            markNetworkT: y,
          };
        })),
        s.apply(this, arguments)
      );
    }
    l.createMediaDownloadMetrics = e;
  },
  98,
);
