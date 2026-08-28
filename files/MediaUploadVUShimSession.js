__d(
  "MediaUploadVUShimSession",
  [
    "MediaUploadAssetEvent",
    "MediaUploadAssetStatus",
    "MediaUploadCancelReason",
    "MediaUploadFBDefaultServerConfigurationRetriever",
    "MediaUploadFBSDK",
    "MediaUploadFBStage",
    "MediaUploadSessionEvent",
    "MediaUploadSessionStatus",
    "MediaUploadSingleAssetPublisher",
    "MediaUploadStageEvent",
    "MediaUploadVUShimLogger",
    "MediaUploadVUShimSurface",
    "MediaUploadVUShimTypes",
    "Promise",
    "WaterfallIDGenerator",
    "cr:909282",
    "extractServiceDomainFromUri",
    "mixin",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (function (t) {
        function a(e, n) {
          var a, i;
          return (
            (i = t.call(this) || this),
            (i.sessionID = o("WaterfallIDGenerator").generate()),
            (i.$MediaUploadVUShimSession$p_1 = e),
            (i.$MediaUploadVUShimSession$p_3 =
              (a = e.waterfall_id) != null ? a : i.sessionID),
            (i.$MediaUploadVUShimSession$p_6 = n),
            (i.$MediaUploadVUShimSession$p_5 = new (r(
              "MediaUploadVUShimLogger",
            ))(i.$MediaUploadVUShimSession$p_3)),
            (i.$MediaUploadVUShimSession$p_10 =
              !i.$MediaUploadVUShimSession$p_1.background_upload),
            i.$MediaUploadVUShimSession$p_11(),
            i
          );
        }
        babelHelpers.inheritsLoose(a, t);
        var i = a.prototype;
        return (
          (i.$MediaUploadVUShimSession$p_11 = function () {
            var e = this.$MediaUploadVUShimSession$p_1,
              t = e.start_uri,
              n = e.receive_uri;
            if (t != null || n != null) {
              var o = t != null ? r("extractServiceDomainFromUri")(t) : null;
              r(
                "MediaUploadFBDefaultServerConfigurationRetriever",
              ).setUriOverrides(e.source, {
                receive_uri: n,
                service_domain: o,
                start_uri: t,
              });
            }
          }),
          (i.$MediaUploadVUShimSession$p_12 = function () {
            r(
              "MediaUploadFBDefaultServerConfigurationRetriever",
            ).clearUriOverrides(this.$MediaUploadVUShimSession$p_1.source);
          }),
          (i.createTestLogger = function () {}),
          (i.getLogger = function () {
            return this.$MediaUploadVUShimSession$p_5;
          }),
          (i.start = function (t) {
            var e = this;
            this.inform("set-waterfall-id", {
              waterfallID: this.$MediaUploadVUShimSession$p_3,
            });
            var n = r("MediaUploadVUShimSurface").createAssetRequest(
              function (e) {
                var n = t.getFile(),
                  o = t.getFileInput();
                if (n != null) return e.createFromFile(n);
                if (o != null) {
                  var a = e.createFromHTMLInput(o);
                  if (a.dataAsFile() == null)
                    throw r("MediaUploadFBSDK").createThrowableError(
                      "Cannot get File from the HTML input element",
                    );
                  return a;
                } else
                  throw r("MediaUploadFBSDK").createThrowableError(
                    "Invalid video upload file, it contains only null objects",
                  );
              },
              t.getStableAssetID(),
              function (t) {
                var n, r;
                return {
                  targetID:
                    (n = e.$MediaUploadVUShimSession$p_4) != null
                      ? n
                      : e.$MediaUploadVUShimSession$p_1.target_id,
                  composerSessionID: e.$MediaUploadVUShimSession$p_2,
                  actorID: e.$MediaUploadVUShimSession$p_1.as_actor_id,
                  composerDialogVersion: "V2",
                  publisherActionSource:
                    e.$MediaUploadVUShimSession$p_1
                      .video_publisher_action_source,
                  creatorProduct:
                    ((r = t.dataAsFile()) == null ? void 0 : r.extension) ===
                    "gif"
                      ? 4
                      : 2,
                };
              },
            );
            ((this.$MediaUploadVUShimSession$p_9 = n),
              this.$MediaUploadVUShimSession$p_6.startUploads(this.sessionID, [
                n,
              ]),
              this.$MediaUploadVUShimSession$p_10 &&
                this.$MediaUploadVUShimSession$p_6.confirmSession(
                  this.sessionID,
                  [n],
                  function (e) {
                    return e.set("dummyPublish", !0);
                  },
                ));
          }),
          (i.setTargetID = function (t) {
            this.$MediaUploadVUShimSession$p_4 = t;
          }),
          (i.setComposerSessionID = function (t) {
            this.$MediaUploadVUShimSession$p_2 = t;
          }),
          (i.post = function (t) {
            this.$MediaUploadVUShimSession$p_10
              ? r("MediaUploadFBSDK").reportRecoverableError(
                  "Video upload client configured for pessimistic upload and explicit publish calls are now allowed",
                )
              : this.$MediaUploadVUShimSession$p_9 != null &&
                this.$MediaUploadVUShimSession$p_6.confirmSession(
                  this.sessionID,
                  [this.$MediaUploadVUShimSession$p_9],
                  function (e) {
                    return e.set("postData", t);
                  },
                );
          }),
          (i.cancel = function (t) {
            (this.$MediaUploadVUShimSession$p_12(),
              this.$MediaUploadVUShimSession$p_6.cancelSession(
                this.sessionID,
                r("MediaUploadCancelReason").USER_REQUEST,
              ));
          }),
          (i.abandon = function (t) {
            (this.$MediaUploadVUShimSession$p_12(),
              this.$MediaUploadVUShimSession$p_6.cancelSession(
                this.sessionID,
                r("MediaUploadCancelReason").USER_REQUEST,
              ));
          }),
          (i.isPostInProgress = function () {
            var e;
            return (
              ((e = this.$MediaUploadVUShimSession$p_7) == null
                ? void 0
                : e.status) === r("MediaUploadSessionStatus").PUBLISHING
            );
          }),
          (i.isInProgress = function () {
            var e, t;
            return (
              ((e = this.$MediaUploadVUShimSession$p_8) == null
                ? void 0
                : e.status) === r("MediaUploadAssetStatus").PROCESSING ||
              ((t = this.$MediaUploadVUShimSession$p_8) == null
                ? void 0
                : t.status) === r("MediaUploadAssetStatus").UPLOADING
            );
          }),
          (i.getHasUploadFinished = function () {
            var e;
            return (
              ((e = this.$MediaUploadVUShimSession$p_8) == null
                ? void 0
                : e.status) === r("MediaUploadAssetStatus").COMPLETED
            );
          }),
          (i.getVideoID = function () {
            var e;
            return (e = this.$MediaUploadVUShimSession$p_8) == null
              ? void 0
              : e.serverAssetID;
          }),
          (i.getUploadTime = function () {
            var e,
              t,
              n =
                (e = this.$MediaUploadVUShimSession$p_8) == null ||
                (e = e.uploadSummary) == null
                  ? void 0
                  : e.startedAtMs,
              r =
                (t = this.$MediaUploadVUShimSession$p_8) == null ||
                (t = t.uploadSummary) == null
                  ? void 0
                  : t.finishedAtMs;
            return n != null && r != null ? r - n : null;
          }),
          (i.getExPartitionNumber = function (t) {
            return 0;
          }),
          (i.getIsSphericalVideo = function () {
            var e, t;
            return (e =
              (t = this.$MediaUploadVUShimSession$p_8) == null ||
              (t = t.metadata) == null
                ? void 0
                : t.isSpherical) != null
              ? e
              : !1;
          }),
          (i.startFlow = function () {
            this.$MediaUploadVUShimSession$p_10
              ? r("MediaUploadFBSDK").reportRecoverableError(
                  "Video upload client configured for pessimistic upload and explicit publish calls are now allowed",
                )
              : this.$MediaUploadVUShimSession$p_9 != null &&
                this.$MediaUploadVUShimSession$p_6.confirmSession(
                  this.sessionID,
                  [this.$MediaUploadVUShimSession$p_9],
                );
          }),
          (i.sessionUpdated = function (t, n) {
            var e, o;
            this.$MediaUploadVUShimSession$p_7 = n;
            var a = n.extras.getUnsafe("postData");
            if (a != null) {
              var i = n.publishingResponse;
              switch (t) {
                case r("MediaUploadSessionEvent").PUBLISH_STARTED:
                  this.inform("post-started", a);
                  break;
                case r("MediaUploadSessionEvent").PUBLISH_SUCCEED:
                  this.inform(
                    "post-finished",
                    babelHelpers.extends(
                      {},
                      (e = i == null ? void 0 : i.payload) != null ? e : {},
                      a,
                    ),
                  );
                  break;
                case r("MediaUploadSessionEvent").PUBLISH_FAILED:
                  this.inform(
                    "post-failed",
                    (o = i == null ? void 0 : i.payload) != null ? o : {},
                  );
                  break;
                default:
              }
            }
          }),
          (i.assetUpdated = function (t, n, a) {
            var e, i, l, s, u, c, d, m, p, _, f, g, h, y, C, b, v, S, R;
            ((this.$MediaUploadVUShimSession$p_7 = n),
              (this.$MediaUploadVUShimSession$p_8 = a));
            var L,
              E,
              k =
                (e = (i = a.asset.dataAsFile()) == null ? void 0 : i.size) !=
                null
                  ? e
                  : 0,
              I =
                (l =
                  (s = a.uploadSummary) == null ? void 0 : s.skippedUpload) !=
                null
                  ? l
                  : !1;
            switch (t) {
              case r("MediaUploadAssetEvent").ASSET_ADDED:
                L = o("MediaUploadVUShimTypes").MediaUploadAssetEventAction
                  .UPLOAD_REQUESTED;
                break;
              case r("MediaUploadAssetEvent").ASSET_STARTED:
                L = o("MediaUploadVUShimTypes").MediaUploadAssetEventAction
                  .UPLOAD_STARTED;
                break;
              case r("MediaUploadAssetEvent").ASSET_REMOVED:
                L = o("MediaUploadVUShimTypes").MediaUploadAssetEventAction
                  .UPLOAD_CANCELED;
                break;
              case r("MediaUploadAssetEvent").ASSET_PROGRESS:
                ((L = o("MediaUploadVUShimTypes").MediaUploadAssetEventAction
                  .UPLOAD_PROGRESSED),
                  (E = {
                    start_offset: 0,
                    end_offset: k,
                    file_size: k,
                    sent_bytes: I
                      ? k
                      : (u =
                            (c = a.uploadSummary) == null
                              ? void 0
                              : c.uploadedBytes) != null
                        ? u
                        : 0,
                    video_id: a.serverAssetID,
                    upload_domain: a.uploadServiceDomain,
                    skip_upload: I,
                    transport_retries: a.retries.totalRetryAttempts,
                  }));
                break;
              case r("MediaUploadAssetEvent").ASSET_SUCCEED:
                ((L = o("MediaUploadVUShimTypes").MediaUploadAssetEventAction
                  .UPLOAD_FINISHED),
                  (E = {
                    start_offset: 0,
                    end_offset: k,
                    video_id: a.serverAssetID,
                    is_spherical_video:
                      (d =
                        a == null || (m = a.metadata) == null
                          ? void 0
                          : m.isSpherical) != null
                        ? d
                        : !1,
                  }));
                break;
              case r("MediaUploadAssetEvent").ASSET_FAILED:
                ((L = o("MediaUploadVUShimTypes").MediaUploadAssetEventAction
                  .UPLOAD_FAILED),
                  (E = {
                    error_code:
                      (p =
                        (_ = a.lastAction) == null ? void 0 : _.rawErrorCode) !=
                      null
                        ? p
                        : (f = n.lastError) == null
                          ? void 0
                          : f.rawErrorCode,
                    error_description:
                      (g =
                        (h = a.lastAction) == null ||
                        (h = h.displayError) == null
                          ? void 0
                          : h.description) != null
                        ? g
                        : (y = n.lastError) == null ||
                            (y = y.errorObject) == null
                          ? void 0
                          : y.message,
                    error_is_transient:
                      (C = a.lastAction) == null ||
                      (C = C.errorAttributes) == null
                        ? void 0
                        : C.transientError,
                    error_summary:
                      (b =
                        (v = a.lastAction) == null ||
                        (v = v.displayError) == null
                          ? void 0
                          : v.summary) != null
                        ? b
                        : (S = n.lastError) == null ||
                            (S = S.errorObject) == null
                          ? void 0
                          : S.name,
                    upload_domain: a.uploadServiceDomain,
                    video_id: a.serverAssetID,
                    www_request_id:
                      (R = a.lastAction) == null ? void 0 : R.networkRequestID,
                  }));
                break;
              default:
            }
            L != null && this.inform(L, E);
          }),
          (i.stageUpdated = function (t, n, o, a) {
            if (
              ((this.$MediaUploadVUShimSession$p_7 = o),
              (this.$MediaUploadVUShimSession$p_8 = a),
              t === r("MediaUploadStageEvent").STAGE_SUCCEED &&
                n === r("MediaUploadFBStage").METADATA_EXTRACTION)
            ) {
              var e;
              if (a.metadata != null) {
                var i,
                  l = a.metadata,
                  s = l.durationMs == null ? void 0 : l.durationMs / 1e3;
                e = {
                  format: {
                    duration: s,
                    isSpherical: (i = l.isSpherical) != null ? i : !1,
                  },
                  metadata: {},
                  streams: {
                    numAudioTracks: 1,
                    primaryVideo: {
                      type: "video",
                      width: l.width,
                      height: l.height,
                      duration: s,
                    },
                    primaryAudio: { type: "audio", duration: s },
                  },
                };
              } else e = null;
              this.inform("metadata-parsed", e);
            }
          }),
          (i.triggerPublish = function (o, a) {
            var t;
            ((this.$MediaUploadVUShimSession$p_7 = o),
              (this.$MediaUploadVUShimSession$p_8 = a[0]));
            var i = (t = o.extras.getBoolean("dummyPublish")) != null ? t : !1,
              l = o.extras.getUnsafe("postData");
            return i
              ? (e || (e = n("Promise"))).resolve({ isSuccessful: !0 })
              : l == null
                ? (e || (e = n("Promise"))).resolve({
                    isSuccessful: !1,
                    errorCode: "MISSING_POST_DATA",
                  })
                : r("MediaUploadSingleAssetPublisher").publish({
                    sessionSnapshot: o,
                    assetSnapshot: a[0],
                    postData: l,
                    postRequestManagerParams:
                      this.$MediaUploadVUShimSession$p_1,
                  });
          }),
          a
        );
      })(r("mixin")(n("cr:909282")));
    l.default = s;
  },
  98,
);
