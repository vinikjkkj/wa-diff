__d(
  "ComposerMediaFileUploader",
  [
    "fbt",
    "ActorURI",
    "QuickPerformanceLogger",
    "ReactComposerMediaConfig",
    "VideoUploadFile",
    "VideoUploadFlowNotifier",
    "VideoUploadSurface",
    "VideoUploader",
    "XComposerPhotoUploader",
    "cometComposerMediaUploadLogger",
    "cr:8205",
    "getMediaFile",
    "getVideoTrimSettings",
    "gkx",
    "qpl",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = (function () {
        function e() {
          this.subscribers = [];
        }
        var t = e.prototype;
        return (
          (t.subscribe = function (t) {
            this.subscribers.push(t);
          }),
          (t.notify = function (t) {
            this.subscribers.forEach(function (e) {
              return e(t);
            });
          }),
          (t.unsubscribe = function (t) {
            this.subscribers = this.subscribers.filter(function (e) {
              return e !== t;
            });
          }),
          e
        );
      })(),
      c = (function () {
        function e() {
          this.$1 = new Map();
        }
        var t = e.prototype;
        return (
          (t.subscribe = function (t, n) {
            var e = this.$1.get(t);
            e == null && ((e = new Set()), this.$1.set(t, e));
            var r = e;
            return (
              r.add(n),
              function () {
                r.delete(n);
              }
            );
          }),
          (t.inform = function (t, n) {
            var e = this.$1.get(t);
            if (e != null) for (var r of e) r(t, n);
          }),
          (t.setComposerSessionID = function (t) {}),
          e
        );
      })(),
      d = new Map(),
      m = (function () {
        function t(e, t, n, r) {
          var a, i;
          ((this.startedObserver = new u()),
            (this.progressObserver = new u()),
            (this.successObserver = new u()),
            (this.errorObserver = new u()),
            (this.sphericalImageDetectedObserver = new u()),
            (this.uploadStatuses = new Map()),
            (this.uploadStatusChangeObserver = new u()),
            (this.videoUploadsQueue = []),
            (this.$1 = null),
            (this.$2 = new Map()),
            (this.actorID = e),
            (this.videoUploaderConfig = t),
            (this.creationSessionID = n != null ? n : ""),
            (this.photoUploader = this.$3(this.actorID, r)),
            (this.videoUploader = this.$4(
              this.videoUploaderConfig,
              this.creationSessionID,
            )),
            (this.videoUploadFlowNotifier = o(
              "VideoUploadFlowNotifier",
            ).createVideoUploadFlowNotifier({
              cancel_on_leave: !1,
              composer_entry_point_ref:
                (a = this.videoUploaderConfig.composer_entry_point_ref) != null
                  ? a
                  : "unknown",
              composer_session_id:
                (i = this.creationSessionID) != null ? i : "",
              extended_flow_logging_enabled: !0,
              source: this.videoUploaderConfig.source,
            })),
            o("VideoUploadSurface")
              .VideoUploadSurface.getOrCreate(
                o("VideoUploadSurface").VideoUploadSurfaceIDs.FEED,
              )
              .notifiers()
              .register(this.videoUploadFlowNotifier, this.creationSessionID),
            this.$5());
        }
        var a = t.prototype;
        return (
          (a.$5 = function () {
            var e = this,
              t,
              o;
            n("cr:8205") == null ||
              r("gkx")("22889") ||
              ((this.$1 = new (n("cr:8205"))({
                actorID: this.videoUploaderConfig.actor_id,
                callbacks: {
                  onUploadCanceled: function (n) {
                    var t;
                    ((t = e.$2.get(n)) == null || t.inform("upload-canceled"),
                      e.$2.delete(n),
                      e.$6(n, "VIDEO"));
                  },
                  onUploadError: function (n) {
                    var t, r, o;
                    ((t = e.$2.get(n.uploadID)) == null ||
                      t.inform("upload-failed"),
                      e.$2.delete(n.uploadID),
                      e.$7(
                        n.uploadID,
                        "VIDEO",
                        (r = n.error) != null ? r : "",
                        n.entID,
                        n.errorCode,
                        void 0,
                        n.errorClass,
                      ),
                      e.errorObserver.notify({
                        entID: n.entID,
                        error:
                          (o = n.error) != null
                            ? o
                            : s._(
                                /*BTDS*/ "Something went wrong and your video couldn't be uploaded. Please try again.",
                              ),
                        uploadID: n.uploadID,
                      }),
                      e.$8([]));
                  },
                  onUploadProgress: function (n) {
                    (e.progressObserver.notify({
                      entID: n.entID,
                      percentComplete: n.percentComplete,
                      uploadID: n.uploadID,
                    }),
                      n.bytesLoaded != null && e.$9(n.uploadID, n.bytesLoaded));
                  },
                  onUploadStarted: function (n) {
                    var t,
                      r = n.uploadID;
                    ((t = e.$2.get(r)) == null || t.inform("upload-started"),
                      e.$10(r, "VIDEO"),
                      e.startedObserver.notify({ uploadID: r }));
                  },
                  onUploadSuccess: function (n) {
                    var t;
                    ((t = e.$2.get(n.uploadID)) == null ||
                      t.inform("upload-finished"),
                      e.$2.delete(n.uploadID),
                      e.$11(n.uploadID, n.entID, "VIDEO"),
                      e.successObserver.notify({
                        attachmentType: "VIDEO",
                        entID: n.entID,
                        uploadID: n.uploadID,
                      }),
                      e.$9(n.uploadID),
                      e.$8([]));
                  },
                },
                composerEntryPointRef:
                  (t = this.videoUploaderConfig.composer_entry_point_ref) !=
                  null
                    ? t
                    : "unknown",
                creationSessionID: this.creationSessionID,
                maxConcurrentUploads:
                  (o = this.videoUploaderConfig.v2_max_concurrent_uploads) !=
                  null
                    ? o
                    : 3,
                sourceType: this.videoUploaderConfig.source,
                targetID: this.videoUploaderConfig.target_id,
                videoUploaderConfig: this.videoUploaderConfig,
              })),
              this.videoUploadsQueue.length > 0 && this.$8([]));
          }),
          (a.resetV2VideoUploader = function () {
            this.$1 != null && (this.$1.dispose(), (this.$1 = null));
            for (var e of this.$2.values()) e.inform("upload-canceled");
            (this.$2.clear(), this.$5());
          }),
          (a.$9 = function (t, n) {
            var e,
              r =
                (e = this.uploadStatuses.get(t)) == null
                  ? void 0
                  : e.bytesTotal;
            r != null &&
              (this.uploadStatuses.set(t, {
                bytesLoaded: n != null ? n : r,
                bytesTotal: r,
              }),
              this.uploadStatusChangeObserver.notify(this.uploadStatuses));
          }),
          (a.$3 = function (n, a) {
            var t = this;
            return new (r("XComposerPhotoUploader"))({
              concurrentLimit: r("ReactComposerMediaConfig").photo
                .concurrentLimit,
              onUploadFailure: function (n, r) {
                var e, o;
                (t.$7(
                  n,
                  "PHOTO",
                  (e = r.response.getErrorDescriptionString()) != null ? e : "",
                  null,
                  r.response.error.toString(),
                ),
                  t.errorObserver.notify({
                    entID:
                      (o = r.response.payload) == null ? void 0 : o.photoID,
                    error: r.response.getErrorSummary(),
                    uploadID: n,
                  }));
              },
              onUploadIsSpherical: function (n, r, o) {
                n &&
                  r &&
                  t.sphericalImageDetectedObserver.notify({
                    isSpherical: n,
                    sphericalImage: r,
                    uploadID: o,
                  });
              },
              onUploadProgress: function (n, r) {
                var e = Math.min(
                  1,
                  Math.max(0, r.event.loaded / r.event.total),
                );
                (t.progressObserver.notify({ percentComplete: e, uploadID: n }),
                  t.$9(n, r.event.loaded));
              },
              onUploadStart: function (n, r) {
                (t.$10(n, "PHOTO"), t.startedObserver.notify({ uploadID: n }));
              },
              onUploadSuccess: function (o, a) {
                var n = a.response.payload;
                if (n == null) {
                  var i;
                  (t.$7(
                    o,
                    "PHOTO",
                    (i = a.response.getErrorDescriptionString()) != null
                      ? i
                      : "",
                  ),
                    t.errorObserver.notify({
                      entID: null,
                      error: a.response.getErrorSummary(),
                      uploadID: o,
                    }));
                } else
                  (t.$11(o, n.photoID, "PHOTO"),
                    t.successObserver.notify({
                      attachmentType: "PHOTO",
                      entID: n.photoID,
                      imageURL: n.imageSrc,
                      takenTime: n.mediaTakenTime
                        ? n.mediaTakenTime * 1e3
                        : null,
                      uploadID: o,
                    }),
                    t.$9(o),
                    (e || (e = r("QuickPerformanceLogger"))).markerStart(
                      r("qpl")._(741087294, "2028"),
                    ),
                    e.markerAnnotate(r("qpl")._(741087294, "2028"), {
                      int: { height: n.height, width: n.width },
                    }),
                    e.markerEnd(r("qpl")._(741087294, "2028"), 2));
              },
              retryLimit: r("ReactComposerMediaConfig").photo.retryLimit,
              uploadData: babelHelpers.extends(
                {},
                r("ReactComposerMediaConfig").photo.uploadData,
                { source: 8 },
                a ? { work_shared_draft_mode: "drafter_creating" } : {},
              ),
              uploadEndpoint: o("ActorURI").create(
                r("ReactComposerMediaConfig").photo.uploadEndpoint,
                this.actorID,
              ),
            });
          }),
          (a.$4 = function (t, n) {
            var e = babelHelpers.extends({}, t, {
              isMultiMediaPost: !0,
              waterfall_id: n,
            });
            return new (r("VideoUploader"))(e);
          }),
          (a.upload = function (t, n) {
            var e = this;
            (t.forEach(function (t) {
              var n = t.file,
                r = n.uploadID;
              r != null &&
                e.uploadStatuses.get(r) == null &&
                e.uploadStatuses.set(r, { bytesLoaded: 0, bytesTotal: n.size });
            }),
              this.uploadStatusChangeObserver.notify(this.uploadStatuses),
              this.$12(
                t
                  .filter(function (e) {
                    var t = e.extra;
                    return t.fileType === "PHOTO";
                  })
                  .map(function (e) {
                    var t = e.file;
                    return t;
                  }),
                n,
              ),
              this.$13(
                t.filter(function (e) {
                  var t = e.extra;
                  return t.fileType === "VIDEO";
                }),
              ));
          }),
          (a.$12 = function (t, n) {
            t.length > 0 &&
              this.photoUploader
                .getAsyncUploadRequest(t, { preventDefaultErrorHandler: n })
                .send();
          }),
          (a.$8 = function (t) {
            if (
              (t.length > 0 &&
                (this.videoUploadsQueue = this.videoUploadsQueue.concat(t)),
              this.$1 != null)
            )
              for (var e = this.$1; this.videoUploadsQueue.length > 0; ) {
                var n = this.videoUploadsQueue.shift();
                if (n != null) {
                  var o = r("getMediaFile")(n),
                    a = o.uploadID;
                  if (a != null && !this.$2.has(a)) {
                    var i = new c();
                    (this.videoUploadFlowNotifier.registerVideoUpload(i, a),
                      this.$2.set(a, i));
                    var l = null,
                      s = r("getVideoTrimSettings")(n);
                    (s != null &&
                      (l = [
                        {
                          params: {
                            trim_end: s.videoTrimEnd,
                            trim_start: s.videoTrimStart,
                          },
                          type: "VideoTrim",
                        },
                      ]),
                      e.queueUpload(o, a, l));
                  }
                }
              }
          }),
          (a.$13 = function (t) {
            var e = this;
            if (this.$1 != null) {
              this.$8(t);
              return;
            }
            if (
              (t.length > 0 &&
                (this.videoUploadsQueue = this.videoUploadsQueue.concat(t)),
              this.videoUploadsQueue.length > 0 &&
                !this.videoUploader.isSessionExist())
            ) {
              var n = this.videoUploadsQueue.shift();
              if (n == null) return;
              var o = r("getMediaFile")(n);
              ((this.currentVideoUploadID = o.uploadID),
                (this.videoUploader = this.$4(
                  this.videoUploaderConfig,
                  this.creationSessionID,
                )));
              var a = this.videoUploader;
              (a.subscribe("upload-started", function (t, n) {
                var r = o.uploadID;
                (e.$10(r != null ? r : "", "VIDEO"),
                  r != null && e.startedObserver.notify({ uploadID: r }));
              }),
                a.subscribe("upload-progressed", function (t, n) {
                  var r = Math.min(
                      1,
                      Math.max(
                        0,
                        (n.start_offset + n.sent_bytes) / n.file_size,
                      ),
                    ),
                    i = o.uploadID;
                  i != null &&
                    (e.progressObserver.notify({
                      entID: a.getVideoID(),
                      percentComplete: r,
                      uploadID: i,
                    }),
                    e.$9(i, n.start_offset + n.sent_bytes));
                }),
                a.subscribe("upload-finished", function (t, n) {
                  a.reset();
                  var r = o.uploadID;
                  (e.$11(r != null ? r : "", n.video_id, "VIDEO"),
                    r != null &&
                      (e.successObserver.notify({
                        attachmentType: "VIDEO",
                        entID: n.video_id,
                        uploadID: r,
                      }),
                      e.$9(r)),
                    e.$13([]));
                }),
                a.subscribe("upload-failed", function (t, n) {
                  var r = o.uploadID;
                  if (
                    (e.$7(
                      r != null ? r : "",
                      "VIDEO",
                      n.error_description,
                      n.video_id,
                      n.error_code,
                      n.error_summary,
                    ),
                    r != null)
                  ) {
                    var a;
                    e.errorObserver.notify({
                      entID: n.video_id,
                      error:
                        (a = n.error_description) != null
                          ? a
                          : s._(
                              /*BTDS*/ "Something went wrong and your video couldn't be uploaded. Please try again.",
                            ),
                      uploadID: r,
                    });
                  }
                  e.$13([]);
                }),
                a.subscribe("upload-canceled", function (t) {
                  var n = o.uploadID;
                  e.$6(n != null ? n : "", "VIDEO");
                }),
                this.videoUploadFlowNotifier.registerVideoUpload(
                  a,
                  o.uploadID,
                ));
              var i = null,
                l = r("getVideoTrimSettings")(n);
              (l != null &&
                (i = [
                  {
                    params: {
                      trim_end: l.videoTrimEnd,
                      trim_start: l.videoTrimStart,
                    },
                    type: "VideoTrim",
                  },
                ]),
                a.upload(r("VideoUploadFile").fromFile(o), {
                  creativeTools: i,
                }));
            }
          }),
          (a.$10 = function (t, n) {
            r("cometComposerMediaUploadLogger")(
              {
                fields: { media_id: t, media_type: n },
                type: "MEDIA_UPLOAD_TRANSFER_START",
              },
              this.creationSessionID,
            );
          }),
          (a.$11 = function (t, n, o) {
            (r("cometComposerMediaUploadLogger")(
              {
                fields: { media_id: t, media_item_fbid: n, media_type: o },
                type: "MEDIA_UPLOAD_TRANSFER_SUCCESS",
              },
              this.creationSessionID,
            ),
              r("cometComposerMediaUploadLogger")(
                {
                  fields: { media_id: t, media_item_fbid: n, media_type: o },
                  type: "MEDIA_UPLOAD_SUCCESS",
                },
                this.creationSessionID,
              ),
              r("cometComposerMediaUploadLogger")(
                {
                  fields: { media_id: t, media_item_fbid: n, media_type: o },
                  type: "MEDIA_UPLOAD_FLOW_SUCCESS",
                },
                this.creationSessionID,
              ));
          }),
          (a.$7 = function (t, n, o, a, i, l, s) {
            r("cometComposerMediaUploadLogger")(
              {
                fields: {
                  error_code: i,
                  error_description: s != null ? "[" + s + "] " + o : o,
                  error_summary: l,
                  media_id: t,
                  media_item_fbid: a,
                  media_type: n,
                },
                type: "MEDIA_UPLOAD_FAILURE",
              },
              this.creationSessionID,
            );
          }),
          (a.$6 = function (t, n) {
            r("cometComposerMediaUploadLogger")(
              {
                fields: { media_id: t, media_type: n },
                type: "MEDIA_UPLOAD_CANCEL",
              },
              this.creationSessionID,
            );
          }),
          (a.getCreationSessionID = function () {
            return this.creationSessionID;
          }),
          (a.cancelUpload = function (t, n) {
            if (n === "VIDEO") {
              if (this.$1 != null) {
                (this.$1.cancelUpload(t),
                  this.currentVideoUploadID === t &&
                    (this.currentVideoUploadID = null));
                return;
              }
              ((this.videoUploadsQueue = this.videoUploadsQueue.filter(
                function (e) {
                  return r("getMediaFile")(e).uploadID !== t;
                },
              )),
                this.currentVideoUploadID === t &&
                  (this.videoUploader.cancel(), this.$13([])));
            }
          }),
          t
        );
      })(),
      p = {
        createOrGetInstance: function (t, n, r, a, i) {
          (a === void 0 && (a = !1), i === void 0 && (i = !1));
          var e = d.get(t) || new m(t, n, r, a);
          if (e.creationSessionID !== r || i) {
            var l;
            ((e.creationSessionID = r != null ? r : ""),
              (e.videoUploaderConfig = n),
              (e.videoUploadFlowNotifier = o(
                "VideoUploadFlowNotifier",
              ).createVideoUploadFlowNotifier({
                cancel_on_leave: !1,
                composer_entry_point_ref:
                  (l = e.videoUploaderConfig.composer_entry_point_ref) != null
                    ? l
                    : "unknown",
                composer_session_id: r != null ? r : "",
                extended_flow_logging_enabled: !0,
                source: e.videoUploaderConfig.source,
              })),
              o("VideoUploadSurface")
                .VideoUploadSurface.getOrCreate(
                  o("VideoUploadSurface").VideoUploadSurfaceIDs.FEED,
                )
                .notifiers()
                .register(e.videoUploadFlowNotifier, e.creationSessionID),
              e.resetV2VideoUploader());
          }
          d.set(t, e);
          var s = function () {
            d.delete(t);
          };
          return [e, s];
        },
        getInstance: function (t) {
          return d.get(t);
        },
      };
    l.default = p;
  },
  226,
);
