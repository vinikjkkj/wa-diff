__d(
  "WAWebCreateMediaDownloadMetrics",
  [
    "WAWebAppTracker",
    "WAWebCoreActionsODS",
    "WAWebExperienceIdWamFields",
    "WAWebMediaCryptoEligibilityUtils",
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
            n,
            r = o("WAWebWamMediaMetricUtils").generateMediaEventId(),
            a = new (o("WAWebMediaDownload2WamEvent").MediaDownload2WamEvent)({
              mediaId: r,
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
              overallIsEncrypted: o(
                "WAWebMediaCryptoEligibilityUtils",
              ).isMediaCryptoExpectedForMediaType(e.type),
              overallDownloadOrigin: e.downloadOrigin,
              overallBackendStore:
                (t = o("WAWebWamMediaMetricUtils").getMetricBackendStore(
                  e.directPath,
                )) != null
                  ? t
                  : void 0,
              isViewOnce: e.isViewOnce,
              experienceIds:
                (n = o("WAWebExperienceIdWamFields").getExperienceIdsWamValue(
                  e.experienceIds,
                )) != null
                  ? n
                  : void 0,
            });
          (o("WAWebAppTracker").AppTracker.start(
            o("WAWebAppTracker").AppTrackerType.MediaDL,
          ),
            e.type === o("WAWebMmsMediaTypes").MEDIA_TYPES.IMAGE &&
              a.set(babelHelpers.extends({}, e.imageDimensions)));
          var i = e.chatWid;
          if (i) {
            var l = yield o("WAWebWamGroupMetricCache").getGroupMetrics(i);
            (l == null ? void 0 : l.deviceCount) != null &&
              a.set({ deviceCount: l.deviceCount });
          }
          o("WAWebMmsDownloadUploadCrashLogger").downloadUploadCrashLogger.mark(
            r,
            o("WAWebMmsDownloadUploadCrashLogger").ProgressType
              .DOWNLOAD_STARTED,
          );
          var s = function (t) {
              var e = t.failCount,
                n = t.hostClass,
                r = t.hostName;
              a.set({
                overallDomain: r,
                overallConnectionClass: n,
                overallRetryCount: e,
              });
            },
            u = function (t) {
              (a.set({
                overallMediaSize: t,
                overallDownloadResult: o("WAWebWamEnumMediaDownloadResultType")
                  .MEDIA_DOWNLOAD_RESULT_TYPE.OK,
                overallIsFinal: !0,
                downloadHttpCode: 200,
              }),
                o(
                  "WAWebMmsDownloadUploadCrashLogger",
                ).downloadUploadCrashLogger.mark(
                  r,
                  o("WAWebMmsDownloadUploadCrashLogger").ProgressType
                    .DOWNLOAD_FINISHED,
                  { overallMediaSize: t },
                ));
            },
            c = function (t, n) {
              var e = o(
                "WAWebWamMediaMetricUtils",
              ).getMetricDownloadErrorResultType(t);
              a.set({ overallDownloadResult: e, overallIsFinal: n });
              var r = o("WAWebWamMediaMetricUtils").getStatusCode(t);
              (r != null && (a.downloadHttpCode = r),
                a.markOverallCumT(),
                o("WAWebAppTracker").AppTracker.stop(
                  o("WAWebAppTracker").AppTrackerType.MediaDL,
                ),
                o("WAWebAppTracker").attachWAMAppContext(a, a.overallCumT),
                a.commit(),
                o("WAWebWamMediaMetricUtils").logErrorUnknownDetails(a, t),
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
            d = function (t) {
              a.set({ overallT: t });
            },
            m = function (t) {
              var e = t.error,
                n = t.failCount,
                r = t.overallT,
                i = new (o(
                  "WAWebMediaDownload2WamEvent",
                ).MediaDownload2WamEvent)(a.all);
              i.set({
                mediaId: o("WAWebWamMediaMetricUtils").generateMediaEventId(),
                overallDownloadResult: o(
                  "WAWebWamMediaMetricUtils",
                ).getMetricDownloadErrorResultType(e),
                overallIsFinal: !1,
                overallT: r,
                overallRetryCount: n,
              });
              var l = o("WAWebWamMediaMetricUtils").getStatusCode(e);
              (l != null && (a.downloadHttpCode = l),
                a.markOverallCumT(),
                o("WAWebAppTracker").AppTracker.stop(
                  o("WAWebAppTracker").AppTrackerType.MediaDL,
                ),
                o("WAWebAppTracker").attachWAMAppContext(a, a.overallCumT),
                i.commit(),
                o("WAWebWamMediaMetricUtils").logErrorUnknownDetails(i, e));
            },
            p = function () {
              a.startOverallDecryptT();
            },
            _ = function () {
              a.markOverallDecryptT();
            },
            f = function () {
              (a.markOverallCumT(),
                o("WAWebAppTracker").AppTracker.stop(
                  o("WAWebAppTracker").AppTrackerType.MediaDL,
                ),
                o("WAWebAppTracker").attachWAMAppContext(a, a.overallCumT),
                a.commit(),
                o("WAWebCoreActionsODS").logMediaDownloadSuccess());
            },
            g = function () {
              a.startDownloadNetworkT();
            },
            h = function () {
              a.markDownloadNetworkT();
            };
          return {
            mediaId: r,
            handleDownloadSuccess: u,
            handleDownloadHostFound: s,
            handleDownloadError: c,
            handleDownloadAttemptSuccess: d,
            handleDownloadAttemptError: m,
            handleDownloadAndDecryptSuccess: f,
            markDecryptionEnd: _,
            markDecryptionStart: p,
            startNetworkT: g,
            markNetworkT: h,
          };
        })),
        s.apply(this, arguments)
      );
    }
    l.createMediaDownloadMetrics = e;
  },
  98,
);
