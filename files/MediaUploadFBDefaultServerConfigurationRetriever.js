__d(
  "MediaUploadFBDefaultServerConfigurationRetriever",
  [
    "MediaUploadCancelablePromise",
    "MediaUploadClientEvent",
    "MediaUploadFBClientEventContext",
    "MediaUploadFBDefaultServerConfigurationRetrieverQuery.graphql",
    "MediaUploadOperationOutcome",
    "MediaUploadTime",
    "RelayFBEnvironment",
    "RelayHooks",
    "URI",
    "isOndemandHost",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = new Map(),
      c =
        e !== void 0
          ? e
          : (e = n(
              "MediaUploadFBDefaultServerConfigurationRetrieverQuery.graphql",
            )),
      d = {
        metadataValidation: {
          minSizeKB: 1,
          maxSizeKB: 10 * 1024 * 1024,
          minDuration: o("MediaUploadTime").secondsToTime(1),
          maxDuration: o("MediaUploadTime").hoursToTime(24),
          minWidth: 100,
          minHeight: 100,
          minAspectRatio: 0.5,
          maxAspectRatio: 4,
          extensions: new Set([
            "3g2",
            "3gp",
            "3gpp",
            "asf",
            "avi",
            "dat",
            "divx",
            "dv",
            "f4v",
            "flv",
            "gif",
            "m2ts",
            "m4v",
            "mkv",
            "mod",
            "mov",
            "mp4",
            "mpe",
            "mpeg",
            "mpeg4",
            "mpg",
            "mts",
            "nsv",
            "ogm",
            "ogv",
            "qt",
            "rmvb",
            "tmp",
            "tod",
            "ts",
            "vob",
            "webm",
            "wmv",
          ]),
          acceptDimensionsFromPlayer: !1,
        },
        startRequest: {
          baseURI: new (s || (s = r("URI")))(
            "https://vupload-edge.facebook.com/ajax/video/upload/requests/start/",
          ),
        },
        startRequestPath: "/ajax/video/upload/requests/start/",
        receiveRequest: {
          baseURI: new s(
            "https://vupload-edge.facebook.com/ajax/video/upload/requests/receive/",
          ),
        },
        receiveRequestPath: "/ajax/video/upload/requests/receive/",
        uploadService: {
          defaultService: {
            serviceName: "rupload",
            serviceDomain: "facebook.com",
            serviceConsumer: "fb_video",
          },
          targetedService: null,
          tracing: { enabled: !1, minFileSizeKB: 102400 },
          oculusCreatorStudio: "meta_quest_media_studio",
        },
        networkMonitor: {
          networkProbe: { enabled: !0 },
          internetProbe: {
            enabled: !1,
            timeout: o("MediaUploadTime").secondsToTime(2),
            backoffPolicy: {
              backoff: {
                initial: o("MediaUploadTime").secondsToTime(10),
                jitter: o("MediaUploadTime").secondsToTime(0),
                expBase: o("MediaUploadTime").secondsToTime(1),
                expMultiplier: 2,
                max: o("MediaUploadTime").secondsToTime(60),
              },
              limits: {},
            },
          },
          stallDetector: {
            enabled: !1,
            timeout: o("MediaUploadTime").secondsToTime(30),
          },
        },
      },
      m = (function () {
        function e(e) {
          ((this.$5 = !0),
            (this.$1 = e.entryPoint),
            (this.$3 = e.emitter),
            (this.$2 = e.setters),
            (this.$4 = e.envParams));
        }
        ((e.setUriOverrides = function (t, n) {
          u.set(t, n);
        }),
          (e.clearUriOverrides = function (t) {
            u.delete(t);
          }));
        var t = e.prototype;
        return (
          (t.$6 = function () {
            return o("RelayHooks").fetchQuery(r("RelayFBEnvironment"), c, {
              source_type: this.$1.sourceType,
            });
          }),
          (t.run = function (t) {
            var e = this,
              n = new (r("MediaUploadFBClientEventContext"))({
                entryPoint: this.$1,
                envParams: this.$4,
                context: t,
              });
            return this.$5
              ? (this.$3.emitClientEvent(
                  r("MediaUploadClientEvent").CLIENT_CONFIG_REQUESTED,
                  n,
                ),
                new (r("MediaUploadCancelablePromise"))(function (t) {
                  try {
                    var o = e.$6().subscribe({
                      error: (function (e) {
                        function t(t) {
                          return e.apply(this, arguments);
                        }
                        return (
                          (t.toString = function () {
                            return e.toString();
                          }),
                          t
                        );
                      })(function (o) {
                        (e.$4.reportRecoverableError(
                          "Error getting client configuration",
                          o,
                        ),
                          e.$3.emitClientEvent(
                            r("MediaUploadClientEvent").CLIENT_CONFIG_FAILED,
                            n,
                          ),
                          e.$7(null),
                          t(r("MediaUploadOperationOutcome").SUCCESS));
                      }),
                      next: function (a) {
                        (e.$3.emitClientEvent(
                          r("MediaUploadClientEvent").CLIENT_CONFIG_RECEIVED,
                          n,
                        ),
                          e.$7(a),
                          (e.$5 = !1),
                          t(r("MediaUploadOperationOutcome").SUCCESS));
                      },
                    });
                    return {
                      cancel: function () {
                        o.unsubscribe();
                      },
                    };
                  } catch (o) {
                    (e.$4.reportRecoverableError(
                      "Error requesting client configuration",
                      o,
                    ),
                      e.$7(null),
                      e.$3.emitClientEvent(
                        r("MediaUploadClientEvent").CLIENT_CONFIG_FAILED,
                        n,
                      ),
                      t(r("MediaUploadOperationOutcome").SUCCESS));
                  }
                }))
              : (this.$3.emitClientEvent(
                  r("MediaUploadClientEvent").CLIENT_CONFIG_CACHED,
                  n,
                ),
                r("MediaUploadCancelablePromise").resolve(
                  r("MediaUploadOperationOutcome").SUCCESS,
                ));
          }),
          (t.$8 = function (t) {
            var e, n, r, o, a, i, l;
            if (
              (t == null || (e = t.default) == null
                ? void 0
                : e.service_name) == null ||
              (t == null || (n = t.default) == null
                ? void 0
                : n.service_domain) == null
            )
              (this.$4.reportRecoverableError(
                "Invalid configuration for default endpoint of the Upload Service, falling back to default",
              ),
                (l = d.uploadService.defaultService));
            else {
              var s, c;
              l = {
                serviceName:
                  t == null || (s = t.default) == null
                    ? void 0
                    : s.service_name,
                serviceDomain:
                  t == null || (c = t.default) == null
                    ? void 0
                    : c.service_domain,
                serviceConsumer: d.uploadService.defaultService.serviceConsumer,
              };
            }
            var m = u.get(this.$1.sourceType),
              p = m == null ? void 0 : m.service_domain;
            p != null &&
              (l = babelHelpers.extends({}, l, { serviceDomain: p }));
            var _;
            if (
              (t == null || (r = t.targeted) == null
                ? void 0
                : r.service_name) != null &&
              (t == null || (o = t.targeted) == null
                ? void 0
                : o.service_domain) != null
            ) {
              var f, g;
              _ = {
                serviceName:
                  t == null || (f = t.targeted) == null
                    ? void 0
                    : f.service_name,
                serviceDomain:
                  t == null || (g = t.targeted) == null
                    ? void 0
                    : g.service_domain,
              };
            } else
              (t == null ? void 0 : t.targeted) == null
                ? (_ = null)
                : (this.$4.reportRecoverableError(
                    "Invalid configuration for target endpoint of the Upload Service, falling back to default",
                  ),
                  (_ = d.uploadService.targetedService));
            var h;
            if (
              (t == null || (a = t.tracing) == null ? void 0 : a.enabled) !=
                null &&
              (t == null || (i = t.tracing) == null
                ? void 0
                : i.min_file_size_kb) != null
            ) {
              var y, C;
              h = {
                enabled:
                  t == null || (y = t.tracing) == null ? void 0 : y.enabled,
                minFileSizeKB:
                  t == null || (C = t.tracing) == null
                    ? void 0
                    : C.min_file_size_kb,
              };
            } else
              (this.$4.reportRecoverableError(
                "Invalid configuration for tracing in the Upload Service, falling back to default",
              ),
                (h = d.uploadService.tracing));
            var b = !1;
            (this.$1.sourceType === "vr_creator_studio" &&
              ((b = !0),
              (l.serviceConsumer = d.uploadService.oculusCreatorStudio)),
              this.$2.uploadService({
                defaultService: l,
                targetedService: _,
                tracing: h,
                includeAccessToken: b,
              }));
          }),
          (t.$9 = function (t) {
            var e;
            if (
              (t == null ? void 0 : t.min_size_kb) == null ||
              (t == null ? void 0 : t.max_size_kb) == null ||
              (t == null ? void 0 : t.min_width) == null ||
              (t == null ? void 0 : t.min_height) == null ||
              (t == null ? void 0 : t.min_duration_secs) == null ||
              (t == null ? void 0 : t.max_duration_secs) == null ||
              (t == null ? void 0 : t.min_aspect_ration) == null ||
              (t == null ? void 0 : t.max_aspect_ration) == null ||
              (t == null ? void 0 : t.allowed_extensions) == null ||
              (t == null ? void 0 : t.accept_dimensions_from_player) == null
            )
              (this.$4.reportRecoverableError(
                "Invalid metadata validation, falling back to default",
              ),
                (e = babelHelpers.extends(
                  { sourceType: this.$1.sourceType },
                  d.metadataValidation,
                )),
                this.$1.sourceType === "vr_creator_studio" &&
                  (e.maxSizeKB = 100 * 1024 * 1024));
            else {
              var n = t == null ? void 0 : t.max_duration_secs;
              e = {
                sourceType: this.$1.sourceType,
                minSizeKB: t == null ? void 0 : t.min_size_kb,
                maxSizeKB: t == null ? void 0 : t.max_size_kb,
                minWidth: t == null ? void 0 : t.min_width,
                minHeight: t == null ? void 0 : t.min_height,
                minAspectRatio: t == null ? void 0 : t.min_aspect_ration,
                maxAspectRatio: t == null ? void 0 : t.max_aspect_ration,
                extensions: new Set(t == null ? void 0 : t.allowed_extensions),
                acceptDimensionsFromPlayer:
                  t == null ? void 0 : t.accept_dimensions_from_player,
                minDuration: o("MediaUploadTime").secondsToTime(
                  t == null ? void 0 : t.min_duration_secs,
                ),
                maxDuration: o("MediaUploadTime").secondsToTime(n),
              };
            }
            this.$2.metadataValidation(e);
          }),
          (t.$10 = function (t) {
            return (t == null ? void 0 : t.backoff_initial_ms) == null
              ? null
              : {
                  backoff: {
                    initial: o("MediaUploadTime").millisecondsToTime(
                      t == null ? void 0 : t.backoff_initial_ms,
                    ),
                    jitter:
                      (t == null ? void 0 : t.backoff_jitter_ms) == null
                        ? null
                        : o("MediaUploadTime").millisecondsToTime(
                            t == null ? void 0 : t.backoff_jitter_ms,
                          ),
                    expBase:
                      (t == null ? void 0 : t.backoff_exp_base_ms) == null
                        ? null
                        : o("MediaUploadTime").millisecondsToTime(
                            t == null ? void 0 : t.backoff_exp_base_ms,
                          ),
                    expMultiplier:
                      t == null ? void 0 : t.backoff_exp_multiplier,
                    max:
                      (t == null ? void 0 : t.backoff_max_ms) == null
                        ? null
                        : o("MediaUploadTime").millisecondsToTime(
                            t == null ? void 0 : t.backoff_max_ms,
                          ),
                  },
                  limits: {
                    totalRetryCount:
                      t == null ? void 0 : t.limits_total_retry_count,
                    totalTime:
                      (t == null ? void 0 : t.limits_total_time_ms) == null
                        ? null
                        : o("MediaUploadTime").millisecondsToTime(
                            t == null ? void 0 : t.limits_total_time_ms,
                          ),
                  },
                };
          }),
          (t.$11 = function (t) {
            var e,
              n = this.$10(t == null ? void 0 : t.internet_probe_backoff);
            if (
              (t == null ? void 0 : t.network_probe_enabled) == null ||
              (t == null ? void 0 : t.internet_probe_enabled) == null ||
              (t == null ? void 0 : t.internet_probe_timeout_ms) == null ||
              n == null ||
              (t == null ? void 0 : t.stall_detection_enabled) == null ||
              (t == null ? void 0 : t.stall_detection_timeout_ms) == null
            )
              (this.$4.reportRecoverableError(
                "Invalid network monitor configuration, falling back to default",
              ),
                (e = d.networkMonitor));
            else {
              var r = t.internet_probe_enabled,
                a = t.internet_probe_timeout_ms,
                i = t.network_probe_enabled,
                l = t.stall_detection_enabled,
                s = t.stall_detection_timeout_ms;
              e = {
                networkProbe: { enabled: i },
                internetProbe: {
                  enabled: r,
                  timeout: o("MediaUploadTime").millisecondsToTime(a),
                  backoffPolicy: n,
                },
                stallDetector: {
                  enabled: l,
                  timeout: o("MediaUploadTime").millisecondsToTime(s),
                },
              };
            }
            this.$2.networkMonitor(e);
          }),
          (t.$12 = function (t) {
            var e = u.get(this.$1.sourceType);
            if ((e == null ? void 0 : e.start_uri) != null) {
              var n = new (s || (s = r("URI")))(e.start_uri);
              this.$2.startRequest({ baseURI: n });
              return;
            }
            var o;
            if ((t == null ? void 0 : t.uri) == null)
              (this.$4.reportRecoverableError(
                "Invalid metadata validation, falling back to default",
              ),
                this.$1.sourceType === "vr_creator_studio"
                  ? (o = {
                      baseURI: new (s || (s = r("URI")))(
                        "https://" +
                          window.location.hostname +
                          d.startRequestPath,
                      ),
                    })
                  : (o = d.startRequest));
            else {
              var a = new (s || (s = r("URI")))(t == null ? void 0 : t.uri);
              o = { baseURI: a };
            }
            this.$2.startRequest(o);
          }),
          (t.$13 = function (t) {
            var e = u.get(this.$1.sourceType);
            if ((e == null ? void 0 : e.receive_uri) != null) {
              var n = new (s || (s = r("URI")))(e.receive_uri);
              this.$2.receiveRequest({ baseURI: n });
              return;
            }
            var o;
            if ((t == null ? void 0 : t.uri) == null)
              (this.$4.reportRecoverableError(
                "Invalid metadata validation, falling back to default",
              ),
                this.$1.sourceType === "vr_creator_studio"
                  ? (o = {
                      baseURI: new (s || (s = r("URI")))(
                        "https://" +
                          window.location.hostname +
                          d.receiveRequestPath,
                      ),
                    })
                  : (o = d.receiveRequest));
            else {
              var a = new (s || (s = r("URI")))(t == null ? void 0 : t.uri);
              o = { baseURI: a };
            }
            this.$2.receiveRequest(o);
          }),
          (t.$7 = function (t) {
            var e, n, r, o, a;
            (this.$12(
              t == null || (e = t.media_upload_config) == null
                ? void 0
                : e.network_start,
            ),
              this.$13(
                t == null || (n = t.media_upload_config) == null
                  ? void 0
                  : n.network_receive,
              ),
              this.$8(
                t == null || (r = t.media_upload_config) == null
                  ? void 0
                  : r.network_upload_service,
              ),
              this.$9(
                t == null || (o = t.media_upload_config) == null
                  ? void 0
                  : o.media_metadata_validation,
              ),
              this.$11(
                t == null || (a = t.media_upload_config) == null
                  ? void 0
                  : a.network_monitor,
              ));
          }),
          e
        );
      })();
    function p(e) {
      return e;
    }
    l.default = m;
  },
  98,
);
