__d(
  "VideoUploader",
  [
    "FBLogger",
    "MediaUploadVUShim",
    "VideoUploadCrashMonitor",
    "VideoUploadSession",
    "cr:909282",
    "getErrorSafe",
    "mixin",
  ],
  function (t, n, r, o, a, i, l) {
    var e = (function (e) {
      function t(t) {
        var n;
        return (
          (n = e.call(this) || this),
          (n.abandon = function (e) {
            e === void 0 && (e = !1);
            var t = n.getVideoID();
            (n.$VideoUploader2
              ? n.$VideoUploader2.abandon(e)
              : e && t && r("VideoUploadSession").deleteVideo(t),
              n.reset());
          }),
          (n.$VideoUploader1 = t),
          (n.$VideoUploader2 = null),
          (n.$VideoUploader3 = null),
          (n.$VideoUploader4 = t.waterfall_id == null ? null : t.waterfall_id),
          (n.$VideoUploader5 = n.$VideoUploader1.ad_account_id),
          t.monitor_crashes &&
            ((n.$VideoUploader6 = new (r("VideoUploadCrashMonitor"))()),
            n.$VideoUploader6.logKnownCrashes()),
          n
        );
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.setComposerSessionID = function (t) {
          ((this.$VideoUploader7 = t),
            this.$VideoUploader2 &&
              this.$VideoUploader2.setComposerSessionID(t));
        }),
        (n.getLogger = function () {
          if (this.$VideoUploader2 && this.$VideoUploader2.getLogger)
            return this.$VideoUploader2.getLogger();
        }),
        (n.upload = function (t, n) {
          var e = this;
          if (!this.$VideoUploader2) {
            var r = this.__getVideoUploadSession(this.$VideoUploader1);
            (r.setComposerSessionID(this.$VideoUploader7),
              (n == null ? void 0 : n.creativeTools) != null &&
                r.setCreativeTools(
                  JSON.stringify(n == null ? void 0 : n.creativeTools),
                ),
              r.subscribe(
                this.__getEventsWhichShouldListenFromSession(),
                function (t, n) {
                  return e.$VideoUploader8(t, n);
                },
              ),
              (this.$VideoUploader2 = r),
              r.start(t));
          }
        }),
        (n.__getVideoUploadSession = function (t) {
          try {
            var e = r("MediaUploadVUShim").createSession(t);
            return e == null ? new (r("VideoUploadSession"))(t) : e;
          } catch (e) {
            return (
              r("FBLogger")("media_upload")
                .catching(r("getErrorSafe")(e))
                .warn("Failed to create shim video upload session"),
              new (r("VideoUploadSession"))(t)
            );
          }
        }),
        (n.__getEventsWhichShouldListenFromSession = function () {
          return [
            "upload-requested",
            "upload-started",
            "upload-progressed",
            "upload-finished",
            "upload-failed",
            "upload-canceled",
            "post-started",
            "post-finished",
            "post-failed",
            "online",
            "offline",
            "metadata-parsed",
            "set-waterfall-id",
          ];
        }),
        (n.postUserRequest = function () {
          this.$VideoUploader2 &&
            this.$VideoUploader2.startFlow &&
            this.$VideoUploader2.startFlow();
        }),
        (n.setTargetID = function (t) {
          this.$VideoUploader2 != null && this.$VideoUploader2.setTargetID(t);
        }),
        (n.setHasFileBeenReplaced = function (t) {
          this.$VideoUploader1.has_file_been_replaced = t;
        }),
        (n.post = function (t) {
          this.$VideoUploader2 && this.$VideoUploader2.post(t);
        }),
        (n.getVideoID = function () {
          return (
            this.$VideoUploader2 &&
              (this.$VideoUploader3 = this.$VideoUploader2.getVideoID()),
            this.$VideoUploader3
          );
        }),
        (n.getVideoMetadataFromSession = function () {
          if (this.$VideoUploader2)
            return this.$VideoUploader2.getVideoMetadata();
        }),
        (n.cancel = function (t) {
          t === void 0 && (t = !1);
          var e = this.getVideoID();
          (this.$VideoUploader2
            ? this.$VideoUploader2.cancel(t)
            : t && e && r("VideoUploadSession").deleteVideo(e),
            this.reset());
        }),
        (n.reset = function () {
          (this.$VideoUploader2 && (this.$VideoUploader3 = this.getVideoID()),
            (this.$VideoUploader2 = null));
        }),
        (n.getUploadSession = function () {
          return this.$VideoUploader2;
        }),
        (n.getLoggerData = function () {
          return {
            waterfall_id: this.$VideoUploader2
              ? this.$VideoUploader2.$VideoUploader4
              : null,
            actor_id: this.$VideoUploader1.actor_id,
            target_id: this.$VideoUploader1.target_id,
            target_type: this.$VideoUploader1.target_type,
            composer_entry_point_ref:
              this.$VideoUploader1.composer_entry_point_ref,
          };
        }),
        (n.isPostInProgress = function () {
          return (
            !!this.$VideoUploader2 && this.$VideoUploader2.isPostInProgress()
          );
        }),
        (n.isSessionInProgress = function () {
          return !!this.$VideoUploader2 && this.$VideoUploader2.isInProgress();
        }),
        (n.isSessionExist = function () {
          return !!this.$VideoUploader2;
        }),
        (n.getUploadParameters = function () {
          return this.$VideoUploader1;
        }),
        (n.__getSession = function () {
          return this.$VideoUploader2;
        }),
        (n.__getEventsForWhichSessionShouldBeSetToNull = function () {
          return [
            "upload-failed",
            "post-finished",
            "multimedia-upload-finished",
          ];
        }),
        (n.$VideoUploader8 = function (t, n) {
          (this.__getEventsForWhichSessionShouldBeSetToNull().includes(t) &&
            this.reset(),
            this.__delegateEvent(t, n));
        }),
        (n.__delegateEvent = function (t, n) {
          this.inform(t, n);
        }),
        t
      );
    })(r("mixin")(n("cr:909282")));
    l.default = e;
  },
  98,
);
