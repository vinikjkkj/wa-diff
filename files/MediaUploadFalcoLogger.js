__d(
  "MediaUploadFalcoLogger",
  [
    "CurrentUser",
    "MediaUploadAssetEvent",
    "MediaUploadClientEvent",
    "MediaUploadFBStage",
    "MediaUploadFBStageOutcome",
    "MediaUploadSessionEvent",
    "MediaUploadSessionStatus",
    "MediaUploadStageEvent",
    "MediaUploadTime",
    "logVideoUploadViaFalco",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d,
      m = new Map([
        [
          (e = r("MediaUploadClientEvent")).CLIENT_CONFIG_REQUESTED,
          "upload.client.started_client_config_fetch",
        ],
        [
          e.CLIENT_CONFIG_RECEIVED,
          "upload.client.finished_client_config_fetch",
        ],
        [e.CLIENT_CONFIG_FAILED, "upload.client.failed_client_config_fetch"],
        [e.CLIENT_CONFIG_CACHED, "upload.client.cached_client_config_fetch"],
      ]),
      p = new Map([
        [
          (s = r("MediaUploadSessionEvent")).SESSION_CONFIRMED,
          "upload.client.started_flow",
        ],
        [s.PUBLISH_STARTED, "upload.client.started_sending_post_request"],
        [s.PUBLISH_SUCCEED, "upload.client.finished_sending_post_request"],
        [s.PUBLISH_FAILED, "upload.client.failed_sending_post_request"],
      ]),
      _ = new Map([
        [r("MediaUploadSessionStatus").FAILED, "upload.client.failed_flow"],
        [r("MediaUploadSessionStatus").CANCELED, "upload.client.canceled_flow"],
        [
          r("MediaUploadSessionStatus").COMPLETED,
          "upload.client.finished_flow",
        ],
      ]),
      f = new Map([
        [
          (u = r("MediaUploadAssetEvent")).ASSET_ADDED,
          "upload.client.requested_uploading",
        ],
        [u.ASSET_STARTED, "upload.client.started_uploading"],
        [u.ASSET_FAILED, "upload.client.failed_uploading"],
        [u.ASSET_REMOVED, "upload.client.canceled_uploading"],
        [u.ASSET_SUCCEED, "upload.client.finished_uploading"],
        [u.ASSET_STALL, "upload.client.stall_detected"],
      ]),
      g = new Map([
        [
          (c = r("MediaUploadStageEvent")).STAGE_STARTED,
          new Map([
            [
              (d = r("MediaUploadFBStage")).START_REQUEST,
              "upload.client.started_sending_start_request",
            ],
            [d.BYTES_UPLOAD, "upload.client.started_sending_bytes"],
            [
              d.RECEIVE_REQUEST,
              "upload.client.started_sending_receive_request",
            ],
          ]),
        ],
        [
          c.STAGE_SUCCEED,
          new Map([
            [d.START_REQUEST, "upload.client.finished_sending_start_request"],
            [d.BYTES_UPLOAD, "upload.client.finished_sending_bytes"],
            [
              d.RECEIVE_REQUEST,
              "upload.client.finished_sending_receive_request",
            ],
          ]),
        ],
        [
          c.STAGE_FAILED,
          new Map([
            [d.START_REQUEST, "upload.client.failed_sending_start_request"],
            [d.RECEIVE_REQUEST, "upload.client.failed_sending_receive_request"],
            [d.BYTES_UPLOAD, "upload.client.failed_sending_bytes"],
            [d.METADATA_VALIDATION, "upload.client.invalidated_uploading"],
          ]),
        ],
        [
          c.STAGE_CANCELED,
          new Map([
            [d.START_REQUEST, "upload.client.canceled_sending_start_request"],
            [d.BYTES_UPLOAD, "upload.client.canceled_sending_bytes"],
            [
              d.RECEIVE_REQUEST,
              "upload.client.canceled_sending_receive_request",
            ],
          ]),
        ],
      ]),
      h = (function () {
        function e(e, t) {
          ((this.$1 = e), (this.$2 = t));
        }
        var t = e.prototype;
        return (
          (t.subscribe = function (t, n) {
            var e = this;
            (m.forEach(function (r, o) {
              t.addClientEventListener(o, function (t) {
                return e.$3(n, r, t);
              });
            }),
              p.forEach(function (r, o) {
                t.addSessionEventListener(o, function (t) {
                  return e.$4(n, r, t);
                });
              }),
              _.forEach(function (o, a) {
                t.addSessionEventListener(
                  r("MediaUploadSessionEvent").SESSION_FINISHED,
                  function (t) {
                    t.terminalStatus === a &&
                      t.timing.confirmedAtMs != null &&
                      e.$4(n, o, t);
                  },
                );
              }),
              f.forEach(function (r, o) {
                t.addAssetEventListener(o, function (t, o) {
                  return e.$5(n, r, t, o);
                });
              }),
              g.forEach(function (r, o) {
                r.forEach(function (r, a) {
                  t.addStageEventListener(o, a, function (t, o) {
                    e.$5(n, r, t, o);
                  });
                });
              }));
          }),
          (t.$6 = function (t) {
            return t == null
              ? null
              : o("MediaUploadTime").timeToMilliseconds(
                  this.$1.currentTimeProvider(),
                ) - t;
          }),
          (t.$7 = function (t, n) {
            var e, o;
            return {
              event: t,
              application_state: "www_v2",
              is_chunked_upload: !0,
              file_can_read: this.$1.features.supportFileManipulation,
              network_status:
                (e = this.$2) == null || (e = e.injectNetworkStatus) == null
                  ? void 0
                  : e.getNetworkStatus(),
              internet_status:
                (o = this.$2) == null || (o = o.injectNetworkStatus) == null
                  ? void 0
                  : o.getInternetStatus(),
              trigger_time: this.$1.currentTimeProvider(),
              app_id: r("CurrentUser").getAppID(),
              source: n.sourceType,
              composer_entry_point_ref: n.entryPointRef,
            };
          }),
          (t.$8 = function (t) {
            var e,
              n,
              o,
              a,
              i,
              l =
                (t == null ? void 0 : t.rawErrorCode) != null &&
                typeof (t == null ? void 0 : t.rawErrorCode) == "string"
                  ? t == null
                    ? void 0
                    : t.rawErrorCode
                  : void 0,
              s =
                (t == null ? void 0 : t.rawErrorCode) != null &&
                typeof (t == null ? void 0 : t.rawErrorCode) == "number"
                  ? t == null
                    ? void 0
                    : t.rawErrorCode
                  : void 0;
            return {
              error:
                l != null
                  ? l
                  : t == null || (e = t.displayError) == null
                    ? void 0
                    : e.summary,
              error_inner:
                (t == null ? void 0 : t.outcome) ===
                  r("MediaUploadFBStageOutcome").SUCCESS || t == null
                  ? void 0
                  : t.outcome,
              error_description:
                (n =
                  t == null || (o = t.errorObject) == null
                    ? void 0
                    : o.message) != null
                  ? n
                  : t == null || (a = t.displayError) == null
                    ? void 0
                    : a.description,
              error_trace:
                t == null || (i = t.errorObject) == null ? void 0 : i.stack,
              error_code: s,
            };
          }),
          (t.$9 = function (t) {
            return {
              event_reason: t.cancelReason,
              elapsed_time: this.$6(t.timing.confirmedAtMs),
              waterfall_id: t.sessionID,
              retry_id: t.retryID,
            };
          }),
          (t.$10 = function (t) {
            var e, n, r, o, a, i, l, s, u, c;
            return {
              elapsed_time: this.$6(t.lastUploadStartedAtMs),
              asset_id: t.assetID,
              video_id: t.serverAssetID,
              composer_session_id: t.request.attributes.composerSessionID,
              target_id: t.request.attributes.targetID,
              composer_dialog_version:
                t.request.attributes.composerDialogVersion,
              has_file_been_replaced: t.request.attributes.hasFileBeenReplaced,
              source_width: (e = t.metadata) == null ? void 0 : e.width,
              source_height: (n = t.metadata) == null ? void 0 : n.height,
              is_spherical: (r = t.metadata) == null ? void 0 : r.isSpherical,
              duration: (o = t.metadata) == null ? void 0 : o.durationMs,
              file_size: (a = t.asset.dataAsFile()) == null ? void 0 : a.size,
              video_original_file_path: t.asset.data.name,
              hash: (i = t.hash) == null ? void 0 : i.hashValue,
              hash_time:
                (l = t.hash) == null ? void 0 : l.calculationTimeCostMs,
              retries: t.retries.totalRetryAttempts,
              sent_bytes:
                (s = t.uploadSummary) == null ? void 0 : s.uploadedBytes,
              upload_domain: t.uploadServiceDomain,
              upload_speed: (u = t.uploadSummary) == null ? void 0 : u.speedBps,
              skip_upload:
                (c = t.uploadSummary) == null ? void 0 : c.skippedUpload,
              file_extension: t.asset.data.extension,
              media_type: t.asset.mediaType,
            };
          }),
          (t.$11 = function (t) {
            var e, n;
            return ((e = this.$2) == null
              ? void 0
              : e.injectExtraSessionFields) != null
              ? (n = this.$2) == null
                ? void 0
                : n.injectExtraSessionFields(t)
              : null;
          }),
          (t.$12 = function (t, n) {
            var e, r;
            return ((e = this.$2) == null
              ? void 0
              : e.injectExtraAssetFields) != null
              ? (r = this.$2) == null
                ? void 0
                : r.injectExtraAssetFields(t, n)
              : null;
          }),
          (t.$13 = function () {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
              t[n] = arguments[n];
            var r = t.map(function (e) {
              return e != null ? e : {};
            });
            return Object.assign.apply(Object, [{}].concat(r));
          }),
          (t.$3 = function (t, n, r) {
            var e = r.assetSnapshot,
              o = r.sessionSnapshot,
              a = this.$13(
                o == null ? null : this.$11(o),
                o == null || e == null ? null : this.$12(o, e),
                this.$7(n, t),
                o == null ? null : this.$9(o),
                o == null || e == null ? null : this.$10(e),
                this.$8(r),
                { elapsed_time: this.$6(r.startedAtMs) },
              );
            this.$14(a);
          }),
          (t.$4 = function (t, n, r) {
            var e = this.$13(
              this.$11(r),
              this.$7(n, t),
              this.$9(r),
              this.$8(r.lastError),
            );
            this.$14(e);
          }),
          (t.$5 = function (t, n, r, o) {
            var e = this.$13(
              this.$11(r),
              this.$12(r, o),
              this.$7(n, t),
              this.$9(r),
              this.$10(o),
              this.$8(o.lastAction),
            );
            this.$14(e);
          }),
          (t.$14 = function (t) {
            var e,
              n,
              o,
              a = t.event;
            typeof a != "string" ||
              ((e = this.$2) == null || e.shouldLogEvent == null
                ? void 0
                : e.shouldLogEvent(a)) === !1 ||
              r("logVideoUploadViaFalco")(
                (n =
                  (o = this.$2) == null || o.transformLogPayload == null
                    ? void 0
                    : o.transformLogPayload(t)) != null
                  ? n
                  : t,
              );
          }),
          e
        );
      })();
    l.default = h;
  },
  98,
);
