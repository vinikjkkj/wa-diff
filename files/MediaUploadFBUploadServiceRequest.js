__d(
  "MediaUploadFBUploadServiceRequest",
  [
    "AsyncResponse",
    "MediaUploadCancelablePromise",
    "MediaUploadFBStage",
    "MediaUploadFBStageOutcome",
    "MediaUploadOperationAttemptOutcome",
    "MediaUploadStageEvent",
    "RelayAPIConfig",
    "ResumableUploadService",
    "ResumableUploadServiceState.enum",
    "asyncToGeneratorRuntime",
    "enrichErrorFromResponse",
    "md5",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "MediaUploadFBUploadServiceRequest",
      s = (function () {
        function t(e) {
          ((this.$1 = r("MediaUploadFBStage").BYTES_UPLOAD),
            (this.$2 = e.envParams),
            (this.$3 = e.networkNotifier));
        }
        var o = t.prototype;
        return (
          (o.send = function (t, n, o) {
            var e = this;
            return new (r("MediaUploadCancelablePromise"))(function (a) {
              t.emitStageEvent(r("MediaUploadStageEvent").STAGE_STARTED, e.$1);
              var i = e.configuration;
              if (i == null)
                throw e.$2.createThrowableError(
                  "Missing configuration in the MediaUploadFBUploadServiceRequest",
                );
              if (o == null) {
                (t.recordStageOutcome({
                  stage: e.$1,
                  outcome: r("MediaUploadFBStageOutcome")
                    .MISSING_MANDATORY_DATA,
                  rawErrorCode: "MISSING_START_CALL_RESPONSE",
                }),
                  t.emitStageEvent(
                    r("MediaUploadStageEvent").STAGE_FAILED,
                    e.$1,
                  ),
                  a(
                    r("MediaUploadOperationAttemptOutcome")
                      .NON_TRANSIENT_FAILURE,
                  ));
                return;
              }
              if (o.skip_upload) {
                (t.uploadSummary.updateForUploadSkip(n.size),
                  t.recordStageOutcome({
                    stage: e.$1,
                    outcome: r("MediaUploadFBStageOutcome").SUCCESS,
                  }),
                  t.emitStageEvent(
                    r("MediaUploadStageEvent").STAGE_SUCCEED,
                    e.$1,
                  ),
                  a(r("MediaUploadOperationAttemptOutcome").SUCCESS));
                return;
              }
              (t.uploadSummary.updateForUploadStart(n.size),
                t.recalculateProgressAndEmit());
              var l = e.$4(t, n, i, o),
                s = r("ResumableUploadService").create(l);
              t.processing.uploadServiceDomain = s.getServiceName();
              var u = i.segmentSizeBytes,
                c = "uploadSegment" in s;
              if (u != null && u > 0 && c) {
                var d = !1,
                  m = function () {
                    ((d = !0), s.cancel());
                  };
                return (
                  s.addListener(
                    r("ResumableUploadServiceState.enum").PROGRESS,
                    function (n) {
                      return e.$5(t, n);
                    },
                  ),
                  e.$3.notifyOnNewRequest(t, e.$1, function () {
                    e.$6(t, n, i) && m();
                  }),
                  e.$7(t, n, s, u, a, function () {
                    return d;
                  }),
                  { cancel: m }
                );
              }
              return (
                e.$8(t, s, a),
                s.resume(n.file),
                e.$3.notifyOnNewRequest(t, e.$1, function () {
                  e.$6(t, n, i) && s.cancel();
                }),
                {
                  cancel: function () {
                    s.cancel();
                  },
                }
              );
            });
          }),
          (o.retriveResponse = function (n) {
            return n.processing.rawData.getUnsafe(e);
          }),
          (o.$6 = function (t, n, r) {
            var e, o;
            if (r.abortOnStallAfterUploadComplete !== !1) return !0;
            var a =
              (e =
                (o = t.uploadSummary.computeSnapshot()) == null
                  ? void 0
                  : o.uploadedBytes) != null
                ? e
                : 0;
            return a < n.size;
          }),
          (o.$7 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t, n, r, o, a) {
                var i = t.file,
                  l = i.size;
                try {
                  for (var s = yield n.fetchOffset(); s < l; ) {
                    var u;
                    if (a()) {
                      this.$9(e, o);
                      return;
                    }
                    var c = Math.min(s + r, l),
                      d = yield n.uploadSegment(i, s, c);
                    if (
                      (this.$10(e, c),
                      d.handle != null ||
                        (c === l &&
                          ((u = this.configuration) == null
                            ? void 0
                            : u.handleProvider) != null))
                    ) {
                      this.$11(e, o, d.handle);
                      return;
                    }
                    s = c;
                  }
                  var m = yield n.uploadSegment(i, l, l);
                  m.handle != null
                    ? this.$11(e, o, m.handle)
                    : this.$12(e, o, "SEGMENT_NO_HANDLE");
                } catch (t) {
                  if (a()) {
                    this.$9(e, o);
                    return;
                  }
                  this.$13(
                    e,
                    o,
                    t instanceof Error
                      ? t
                      : this.$2.createThrowableError(String(t)),
                  );
                }
              },
            );
            function t(t, n, r, o, a, i) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (o.$10 = function (t, n) {
            var e,
              o,
              a =
                (e =
                  (o = t.uploadSummary.computeSnapshot()) == null
                    ? void 0
                    : o.uploadedBytes) != null
                  ? e
                  : 0;
            n <= a ||
              (t.uploadSummary.updateForProgress(n),
              t.emitStageEvent(
                r("MediaUploadStageEvent").STAGE_PROGRESS,
                this.$1,
              ));
          }),
          (o.$12 = function (t, n, o) {
            (t.recordStageOutcome({
              stage: this.$1,
              outcome: r("MediaUploadFBStageOutcome").INVALID_SERVER_RESPONSE,
              rawErrorCode: o,
            }),
              t.emitStageEvent(
                r("MediaUploadStageEvent").STAGE_FAILED,
                this.$1,
              ),
              n(r("MediaUploadOperationAttemptOutcome").NON_TRANSIENT_FAILURE));
          }),
          (o.$11 = function (n, o, a) {
            var t;
            this.$3.notifyOnResponse(n, this.$1);
            var i =
                (t = this.configuration) == null ? void 0 : t.handleProvider,
              l;
            (i != null
              ? (l = i(a, n))
              : typeof a == "string"
                ? (l = a)
                : (l = null),
              l != null
                ? (n.processing.rawData.set(e, { everstoreHandle: l }),
                  (n.processing.everstoreHandle = l),
                  n.recordStageOutcome({
                    stage: this.$1,
                    outcome: r("MediaUploadFBStageOutcome").SUCCESS,
                  }),
                  n.emitStageEvent(
                    r("MediaUploadStageEvent").STAGE_SUCCEED,
                    this.$1,
                  ),
                  o(r("MediaUploadOperationAttemptOutcome").SUCCESS))
                : (n.recordStageOutcome({
                    stage: this.$1,
                    outcome: r("MediaUploadFBStageOutcome")
                      .INVALID_SERVER_RESPONSE,
                    rawErrorCode: "RECEIVED_HANDLE_IS_NOT_STRING",
                  }),
                  n.emitStageEvent(
                    r("MediaUploadStageEvent").STAGE_FAILED,
                    this.$1,
                  ),
                  o(
                    r("MediaUploadOperationAttemptOutcome")
                      .NON_TRANSIENT_FAILURE,
                  )));
          }),
          (o.$14 = function (t, n, o) {
            (o.error < 1e3
              ? this.$3.notifyOnResponse(t, this.$1)
              : this.$3.notifyOnTransportError(t, this.$1),
              t.recordStageOutcome({
                stage: this.$1,
                outcome: r("MediaUploadFBStageOutcome").REQUEST_ERROR,
                rawErrorCode: o.error,
                rawErrorObject: r("enrichErrorFromResponse")(o),
                displayError: {
                  summary: o.errorSummary,
                  description: o.errorDescription,
                },
                errorAttributes: {
                  silentError: o.silentError,
                  transientError: o.transientError,
                },
              }),
              t.emitStageEvent(
                r("MediaUploadStageEvent").STAGE_FAILED,
                this.$1,
              ));
            var e = o.error >= 400 && o.error < 500;
            n(
              e
                ? r("MediaUploadOperationAttemptOutcome").NON_TRANSIENT_FAILURE
                : r("MediaUploadOperationAttemptOutcome").TRANSIENT_FAILURE,
            );
          }),
          (o.$13 = function (t, n, o) {
            o instanceof r("AsyncResponse")
              ? this.$14(t, n, o)
              : (this.$3.notifyOnAbandon(t, this.$1),
                t.recordStageOutcome({
                  stage: this.$1,
                  outcome: r("MediaUploadFBStageOutcome").REQUEST_ERROR,
                  rawErrorObject: o,
                }),
                t.emitStageEvent(
                  r("MediaUploadStageEvent").STAGE_FAILED,
                  this.$1,
                ),
                n(r("MediaUploadOperationAttemptOutcome").TRANSIENT_FAILURE));
          }),
          (o.$9 = function (t, n) {
            (this.$3.notifyOnAbandon(t, this.$1),
              t.recordStageOutcome({
                stage: this.$1,
                outcome: r("MediaUploadFBStageOutcome").CANCEL,
              }),
              t.emitStageEvent(
                r("MediaUploadStageEvent").STAGE_CANCELED,
                this.$1,
              ),
              n(r("MediaUploadOperationAttemptOutcome").CANCELED));
          }),
          (o.$5 = function (t, n) {
            (this.$3.notifyOnProgress(t, this.$1),
              (n == null ? void 0 : n.loaded) != null &&
                (t.uploadSummary.updateForProgress(n.loaded),
                t.emitStageEvent(
                  r("MediaUploadStageEvent").STAGE_PROGRESS,
                  this.$1,
                )));
          }),
          (o.$8 = function (t, n, o) {
            var e = this,
              a;
            (n.addListener(
              (a = r("ResumableUploadServiceState.enum")).SUCCESS,
              function (n) {
                return e.$11(t, o, n);
              },
            ),
              n.addListener(a.TRANSPORT_FAILURE, function (n) {
                return e.$14(t, o, n);
              }),
              n.addListener(a.FAIL, function (n) {
                return e.$13(t, o, n);
              }),
              n.addListener(a.CANCEL, function () {
                return e.$9(t, o);
              }),
              n.addListener(a.PROGRESS, function (n) {
                return e.$5(t, n);
              }));
          }),
          (o.$4 = function (t, n, o, a) {
            var e,
              i,
              l = n.file,
              s = [
                String(l.lastModified),
                l.name,
                l.type,
                String(l.size),
                (e =
                  (i = t.processing.pseudoHash) == null
                    ? void 0
                    : i.hashValue) != null
                  ? e
                  : [t.sessionContext.sessionID, t.assetID].join("-"),
              ].join("-"),
              u = [
                r("md5")(s),
                String(a.start_offset),
                String(a.end_offset),
              ].join("-"),
              c =
                o.tracing.enabled && o.tracing.minFileSizeKB < l.size / 1024
                  ? [
                      "video_upload_www",
                      [t.assetID, String(t.retryState.getRetryAttempts())].join(
                        "_",
                      ),
                      [
                        String(t.sessionContext.sessionID),
                        String(a.video_id),
                      ].join("_"),
                    ].join(":")
                  : null,
              d = o.defaultService,
              m = d.serviceDomain,
              p = d.serviceName;
            t.retryState.getRetryAttemptsSinceLastReset() < 10 &&
              o.targetedService != null &&
              ((p = o.targetedService.serviceName),
              (m = o.targetedService.serviceDomain));
            var _ = null;
            if (o.includeAccessToken) {
              var f;
              _ =
                (f = o.accessTokenOverride) != null
                  ? f
                  : r("RelayAPIConfig").accessToken;
            }
            var g = {
              consumer: o.defaultService.serviceConsumer,
              accessToken: _,
              sessionKey: u,
              serviceName: p,
              serviceDomain: m,
              tracingHeaderValue: c,
              receiveParameters: {
                start_offset: String(a.start_offset),
                end_offset: String(a.end_offset),
                composer_session_id: t.sessionContext.sessionID,
                upload_session_id: String(a.upload_session_id),
                product_media_id: a.video_id,
                xpv_asset_id: a.xpv_asset_id,
                is_xpv_single_prod: a.is_xpv_single_prod,
                fb_region: a.fb_region,
                total_file_size: String(l.size),
                target_id: t.request.attributes.targetID,
                video_waterfall_id: t.sessionContext.sessionID,
              },
            };
            (o.skipOffsetFetchingOnInitialAttempt === !0 &&
              (g.skipOffsetFetching = t.retryState.getRetryAttempts() === 0),
              o.urlBuilder != null && (g.urlBuilder = o.urlBuilder));
            var h =
              o.entityNameProvider == null ? void 0 : o.entityNameProvider(t);
            h != null && (g.entityName = h);
            var y =
              o.customHeadersProvider == null
                ? void 0
                : o.customHeadersProvider(t);
            return (y != null && (g.customHttpHeaders = y), g);
          }),
          t
        );
      })();
    l.default = s;
  },
  98,
);
