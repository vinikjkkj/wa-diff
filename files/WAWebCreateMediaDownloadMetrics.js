__d(
  "WAWebCreateMediaDownloadMetrics",
  [
    "WAWebAppTracker",
    "WAWebExperienceIdWamFields",
    "WAWebMediaCryptoEligibilityUtils",
    "WAWebMediaDownload2WamEvent",
    "WAWebMmsMediaTypes",
    "WAWebODS",
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
            a = o("WAWebWamMediaMetricUtils").generateMediaEventId(),
            i = new (o("WAWebMediaDownload2WamEvent").MediaDownload2WamEvent)({
              mediaId: a,
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
              i.set(babelHelpers.extends({}, e.imageDimensions)));
          var l = e.chatWid;
          if (l) {
            var s = yield o("WAWebWamGroupMetricCache").getGroupMetrics(l);
            (s == null ? void 0 : s.deviceCount) != null &&
              i.set({ deviceCount: s.deviceCount });
          }
          var u = function (t) {
              var e = t.failCount,
                n = t.hostClass,
                r = t.hostName;
              i.set({
                overallDomain: r,
                overallConnectionClass: n,
                overallRetryCount: e,
              });
            },
            c = function (t) {
              i.set({
                overallMediaSize: t,
                overallDownloadResult: o("WAWebWamEnumMediaDownloadResultType")
                  .MEDIA_DOWNLOAD_RESULT_TYPE.OK,
                overallIsFinal: !0,
                downloadHttpCode: 200,
              });
            },
            d = function (t, n) {
              var e = o(
                "WAWebWamMediaMetricUtils",
              ).getMetricDownloadErrorResultType(t);
              i.set({ overallDownloadResult: e, overallIsFinal: n });
              var a = o("WAWebWamMediaMetricUtils").getStatusCode(t);
              (a != null && (i.downloadHttpCode = a),
                i.markOverallCumT(),
                o("WAWebAppTracker").AppTracker.stop(
                  o("WAWebAppTracker").AppTrackerType.MediaDL,
                ),
                o("WAWebAppTracker").attachWAMAppContext(i, i.overallCumT),
                i.commit(),
                o("WAWebWamMediaMetricUtils").logErrorUnknownDetails(i, t),
                n &&
                  e !==
                    o("WAWebWamEnumMediaDownloadResultType")
                      .MEDIA_DOWNLOAD_RESULT_TYPE.ERROR_CANCEL &&
                  (r("WAWebODS").incr("web.media.download.error"),
                  e ===
                  o("WAWebWamEnumMediaDownloadResultType")
                    .MEDIA_DOWNLOAD_RESULT_TYPE.ERROR_TOO_OLD
                    ? r("WAWebODS").incr("web.media.download.error.expired")
                    : e ===
                        o("WAWebWamEnumMediaDownloadResultType")
                          .MEDIA_DOWNLOAD_RESULT_TYPE.ERROR_NETWORK &&
                      r("WAWebODS").incr("web.media.download.error.network")));
            },
            m = function (t) {
              i.set({ overallT: t });
            },
            p = function (t) {
              var e = t.error,
                n = t.failCount,
                r = t.overallT,
                a = new (o(
                  "WAWebMediaDownload2WamEvent",
                ).MediaDownload2WamEvent)(i.all);
              a.set({
                mediaId: o("WAWebWamMediaMetricUtils").generateMediaEventId(),
                overallDownloadResult: o(
                  "WAWebWamMediaMetricUtils",
                ).getMetricDownloadErrorResultType(e),
                overallIsFinal: !1,
                overallT: r,
                overallRetryCount: n,
              });
              var l = o("WAWebWamMediaMetricUtils").getStatusCode(e);
              (l != null && (i.downloadHttpCode = l),
                i.markOverallCumT(),
                o("WAWebAppTracker").AppTracker.stop(
                  o("WAWebAppTracker").AppTrackerType.MediaDL,
                ),
                o("WAWebAppTracker").attachWAMAppContext(i, i.overallCumT),
                a.commit(),
                o("WAWebWamMediaMetricUtils").logErrorUnknownDetails(a, e));
            },
            _ = function () {
              i.startOverallDecryptT();
            },
            f = function () {
              i.markOverallDecryptT();
            },
            g = function () {
              (i.markOverallCumT(),
                o("WAWebAppTracker").AppTracker.stop(
                  o("WAWebAppTracker").AppTrackerType.MediaDL,
                ),
                o("WAWebAppTracker").attachWAMAppContext(i, i.overallCumT),
                i.commit(),
                r("WAWebODS").incr("web.media.download.success"));
            },
            h = function () {
              i.startDownloadNetworkT();
            },
            y = function () {
              i.markDownloadNetworkT();
            };
          return {
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
