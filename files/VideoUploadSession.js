__d(
  "VideoUploadSession",
  [
    "AsyncRequest",
    "GraphQLVideoPublishUtils",
    "SubscriptionsHandler",
    "VideoUploadCrashMonitor",
    "VideoUploadFeatureDetector",
    "VideoUploadFileValidator",
    "VideoUploadGraphQLPostRequestManager",
    "VideoUploadLogger",
    "VideoUploadMetadataParser",
    "VideoUploadPostRequestManager",
    "VideoUploadReceiveRequestManager",
    "VideoUploadRequestContext",
    "VideoUploadStartRequestManager",
    "WaterfallIDGenerator",
    "cr:909282",
    "err",
    "getByPath",
    "mixin",
  ],
  function (t, n, r, o, a, i, l) {
    var e = {
        CANCELED: "canceled",
        ABANDONED: "abandoned",
        SHUTDOWN: "shutdown",
      },
      s = (function (t) {
        function n(e) {
          var n;
          if (
            ((n = t.call(this) || this),
            (n.$VideoUploadSession3 = e.source),
            (n.$VideoUploadSession4 = e.composer_dialog_version),
            (n.$VideoUploadSession5 = e.target_id),
            (n.$VideoUploadSession6 = e.logging_delay),
            (n.$VideoUploadSession7 = e.silent_file_validation),
            (n.$VideoUploadSession8 = e.background_upload),
            (n.$VideoUploadSession9 = e.actor_id),
            (n.$VideoUploadSession10 = e.composer_entry_point_ref),
            (n.$VideoUploadSession11 = e.composer_work_shared_draft_mode),
            (n.$VideoUploadSession12 = e.video_publisher_action_source),
            (n.$VideoUploadSession13 = e.monitor_crashes),
            (n.$VideoUploadSession14 = e.isMultiMediaPost),
            (n.$VideoUploadSession15 = e.container_type),
            (n.$VideoUploadSession16 = e.number_of_partitions),
            (n.$VideoUploadSession17 = e.multi_partitioning_enabled),
            (n.$VideoUploadSession18 = e.change_default_chunk_size),
            (n.$VideoUploadSession19 = e.has_file_been_replaced
              ? e.has_file_been_replaced
              : !1),
            n.$VideoUploadSession18 &&
              (n.$VideoUploadSession20 = e.client_chunk_size),
            (n.$VideoUploadSession21 = e.early_receive),
            (n.$VideoUploadSession22 = !1),
            (n.$VideoUploadSession23 = e.accept_dimensions_from_player),
            (n.$VideoUploadSession24 = e.ad_account_id),
            (n.$VideoUploadSession25 = e.waterfall_id),
            (n.$VideoUploadSession26 = null),
            (n.$VideoUploadSession27 = new (r("VideoUploadFileValidator"))({
              minSize: e.min_size,
              maxSize: e.max_size,
              minLength: e.min_length,
              maxLength: e.max_length,
              minWidth: e.min_width,
              minHeight: e.min_height,
              extensions: e.extensions,
              source: e.source,
              require16to9AspectRatio: e.require_16to9_aspect_ratio,
              minAspectRatio: e.min_aspect_ratio,
              maxAspectRatio: e.max_aspect_ratio,
              acceptDimensionsFromPlayer: e.accept_dimensions_from_player,
            })),
            (n.$VideoUploadSession28 = o(
              "VideoUploadFeatureDetector",
            ).supportsChunking()),
            (n.$VideoUploadSession29 = o(
              "VideoUploadFeatureDetector",
            ).supportsFileAPI()),
            n.$VideoUploadSession28
              ? ((n.$VideoUploadSession30 = e.parallel_chunk_uploads),
                n.$VideoUploadSession30 &&
                  ((n.$VideoUploadSession31 = e.parallel_chunk_upload_filesize),
                  (n.$VideoUploadSession32 = e.default_chunk_size)))
              : (n.$VideoUploadSession30 = !1),
            (n.$VideoUploadSession33 = e.shutdown_logging_enabled),
            (n.$VideoUploadSession34 = n.$VideoUploadSession$p_35(e)),
            (n.$VideoUploadSession36 = n.$VideoUploadSession$p_37(e)),
            n.$VideoUploadSession30)
          )
            if (n.$VideoUploadSession17) {
              var a = 0;
              for (
                n.$VideoUploadSession38 = [], a = 0;
                a < n.$VideoUploadSession16 - 1;
                a++
              )
                n.$VideoUploadSession38[a] = n.$VideoUploadSession$p_37(e);
            } else n.$VideoUploadSession38 = n.$VideoUploadSession$p_37(e);
          return (
            (n.$VideoUploadSession39 = n.$VideoUploadSession$p_40(e)),
            (n.$VideoUploadSession41 = n.$VideoUploadSession$p_42(e)),
            (n.$VideoUploadSession$p_2 = e.log_free_local_storage),
            (n.$VideoUploadSession43 = null),
            n
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a.$VideoUploadSession$p_44 = function () {
            ((this.$VideoUploadSession45 = []),
              (this.$VideoUploadSession46 = []),
              (this.$VideoUploadSession47 = []),
              (this.$VideoUploadSession48 = []),
              (this.$VideoUploadSession49 = []));
            var e = 0;
            for (e = 0; e < this.$VideoUploadSession1 - 1; e++)
              this.$VideoUploadSession45.push(!1);
          }),
          (a.$VideoUploadSession$p_50 = function () {
            var e;
            (this.$VideoUploadSession25 == null &&
              (this.$VideoUploadSession25 = o(
                "WaterfallIDGenerator",
              ).generate()),
              (this.$VideoUploadSession51 = new (r("VideoUploadLogger"))({
                actor_id: this.$VideoUploadSession9,
                ad_account_id: this.$VideoUploadSession24,
                source: this.$VideoUploadSession3,
                composer_dialog_version: this.$VideoUploadSession4,
                waterfall_id: this.$VideoUploadSession25,
                target_id: this.$VideoUploadSession5,
                delay: this.$VideoUploadSession6,
                is_chunked_upload: this.$VideoUploadSession28,
                composer_entry_point_ref: this.$VideoUploadSession10,
                composer_work_shared_draft_mode: this.$VideoUploadSession11,
                container_type: this.$VideoUploadSession15,
                has_file_been_replaced: this.$VideoUploadSession19,
                composer_session_id: this.$VideoUploadSession52,
                asset_id:
                  (e = this.$VideoUploadSession53) == null
                    ? void 0
                    : e.getStableAssetID(),
                creative_tools: this.$VideoUploadSession54,
              })),
              this.inform("set-waterfall-id", {
                waterfallID: this.$VideoUploadSession25,
              }));
          }),
          (a.createTestLogger = function () {
            this.$VideoUploadSession$p_50();
          }),
          (a.$VideoUploadSession$p_55 = function () {
            return (
              this.$VideoUploadSession51 || this.$VideoUploadSession$p_50(),
              this.$VideoUploadSession51
            );
          }),
          (a.getLogger = function () {
            return this.$VideoUploadSession51
              ? this.$VideoUploadSession51
              : null;
          }),
          (a.$VideoUploadSession$p_56 = function () {
            return null;
          }),
          (a.start = function (t) {
            var e = this;
            ((this.$VideoUploadSession57 = null),
              (this.$VideoUploadSession58 = null),
              (this.$VideoUploadSession59 = null),
              (this.$VideoUploadSession60 = !1),
              (this.$VideoUploadSession61 = !1),
              (this.$VideoUploadSession62 = null),
              (this.$VideoUploadSession53 = t),
              (this.$VideoUploadSession63 = 0),
              (this.$VideoUploadSession64 = !1),
              (this.$VideoUploadSession65 = {
                sphericalMetadataXml: null,
                fbSpatialAudioMetadataXml: null,
                ytSa3dMetadataJson: null,
              }),
              (this.$VideoUploadSession66 = !1),
              (this.$VideoUploadSession43 = this.$VideoUploadSession$p_56()),
              this.$VideoUploadSession$p_50(),
              this.$VideoUploadSession17 &&
                (this.$VideoUploadSession1 = Math.min(
                  this.$VideoUploadSession16,
                  Math.ceil(
                    this.$VideoUploadSession53.getSize() /
                      this.$VideoUploadSession31,
                  ),
                )),
              this.__logEvent(r("VideoUploadLogger").EVENT_REQUESTED_UPLOADING),
              this.inform("upload-requested"));
            var n = new (r("VideoUploadMetadataParser"))(
              this.$VideoUploadSession53,
              function (t) {
                return e.$VideoUploadSession$p_67(t);
              },
              this.$VideoUploadSession23,
            );
            (n.parse(),
              this.$VideoUploadSession$p_2 &&
                navigator.webkitTemporaryStorage != null &&
                navigator.webkitTemporaryStorage.queryUsageAndQuota(
                  function (t, n) {
                    e.__logEvent(
                      r("VideoUploadLogger").EVENT_MEASURE_FREE_LOCAL_STORAGE,
                      { free_space_in_device: n },
                    );
                  },
                ));
          }),
          (a.setTargetID = function (t) {
            this.$VideoUploadSession5 = t;
          }),
          (a.setComposerSessionID = function (t) {
            this.$VideoUploadSession52 = t;
          }),
          (a.setCreativeTools = function (t) {
            this.$VideoUploadSession54 = t;
          }),
          (a.post = function (t) {
            (this.__logEvent(
              r("VideoUploadLogger").EVENT_STARTED_POST_REQUEST,
              this.$VideoUploadSession26,
            ),
              this.inform("post-started", t));
            var e = this.__createPostRequestContext(t);
            if (
              o("GraphQLVideoPublishUtils").isGraphQLPublish(
                this.$VideoUploadSession3,
                this.$VideoUploadSession10,
              ) &&
              this.$VideoUploadSession41.hasAPISupport(t)
            ) {
              (this.$VideoUploadSession41.sendRequest(e),
                (this.$VideoUploadSession68 = t));
              return;
            }
            (this.$VideoUploadSession39.sendRequest(e),
              (this.$VideoUploadSession68 = t));
          }),
          (a.__createPostRequestContext = function (t) {
            var e = new (r("VideoUploadRequestContext"))();
            return (this.__setupPostRequestContext(e, t), e);
          }),
          (a.__setupPostRequestContext = function (t, n) {
            (t
              .setMetadata(n)
              .setVideoID(this.$VideoUploadSession57)
              .setTargetID(this.$VideoUploadSession5)
              .setSource(this.$VideoUploadSession3)
              .setComposerDialogVersion(this.$VideoUploadSession4)
              .setComposerWorkSharedDraftMode(this.$VideoUploadSession11)
              .setWaterfallID(this.$VideoUploadSession25)
              .setComposerSessionID(this.$VideoUploadSession52)
              .setSupportsChunking(this.$VideoUploadSession28)
              .setCreatorProduct(this.$VideoUploadSession53.getCreatorProduct())
              .setFile(this.$VideoUploadSession53)
              .setHasFileBeenReplaced(this.$VideoUploadSession19),
              n &&
                (n.spherical &&
                  ((this.$VideoUploadSession64 = !0),
                  t.setIsSphericalVideo(this.$VideoUploadSession64)),
                n.enable_omnistab &&
                  ((this.$VideoUploadSession66 = !0),
                  t.setEnableOmnistab(this.$VideoUploadSession66))),
              t.setComposerEntryPointRef == null ||
                t.setComposerEntryPointRef(this.$VideoUploadSession10));
          }),
          (a.$VideoUploadSession$p_69 = function (o, a) {
            if (this.$VideoUploadSession60) {
              var t = {
                  event_reason: a,
                  debug: babelHelpers.extends(
                    {},
                    this.__fetchReceiveRequestManagerStateLogData(),
                    { is_background_upload: this.$VideoUploadSession8 },
                  ),
                },
                i =
                  a === e.CANCELED
                    ? r("VideoUploadLogger").EVENT_CANCELED_UPLOADING
                    : r("VideoUploadLogger").EVENT_ABANDONED_UPLOADING;
              (this.$VideoUploadSession$p_70(),
                this.$VideoUploadSession8
                  ? (this.$VideoUploadSession61 || this.__logEvent(i),
                    this.$VideoUploadSession71 &&
                      (this.__logEvent(
                        r("VideoUploadLogger").EVENT_CANCELED_FLOW,
                        t,
                      ),
                      (this.$VideoUploadSession71 = !1)))
                  : (this.__logEvent(i),
                    this.__logEvent(
                      r("VideoUploadLogger").EVENT_CANCELED_FLOW,
                      t,
                    )),
                this.inform("upload-canceled"));
            } else
              o &&
                this.$VideoUploadSession57 &&
                n.deleteVideo(this.$VideoUploadSession57);
          }),
          (a.cancel = function (n) {
            (n === void 0 && (n = !1),
              this.$VideoUploadSession$p_69(n, e.CANCELED));
          }),
          (a.abandon = function (n) {
            (n === void 0 && (n = !1),
              this.$VideoUploadSession$p_69(n, e.ABANDONED));
          }),
          (a.isPostInProgress = function () {
            return this.$VideoUploadSession39.isInProgress();
          }),
          (a.isInProgress = function () {
            return this.$VideoUploadSession60;
          }),
          (a.getHasUploadFinished = function () {
            return this.$VideoUploadSession61;
          }),
          (a.getVideoID = function () {
            return this.$VideoUploadSession57;
          }),
          (a.getUploadTime = function () {
            return this.$VideoUploadSession72;
          }),
          (a.getExPartitionNumber = function (t) {
            var e = 0;
            for (
              e = 0;
              e < this.$VideoUploadSession1 - 1 &&
              !(
                t >= this.$VideoUploadSession46[e] &&
                t < this.$VideoUploadSession47[e]
              );
              e++
            );
            return e === this.$VideoUploadSession1 ? -1 : e;
          }),
          (a.getIsSphericalVideo = function () {
            return this.$VideoUploadSession64 || !1;
          }),
          (a.getVideoMetadata = function () {
            return this.$VideoUploadSession26 || null;
          }),
          (a.startFlow = function () {
            !this.$VideoUploadSession8 ||
              this.$VideoUploadSession71 ||
              (this.__logEvent(r("VideoUploadLogger").EVENT_STARTED_FLOW, {
                is_spherical: this.getIsSphericalVideo() ? "true" : null,
              }),
              (this.$VideoUploadSession71 = !0),
              this.$VideoUploadSession73 &&
                this.$VideoUploadSession73.flowStarted());
          }),
          (a.__extractVideoMetadata = function (t) {
            var e,
              n = (e = r("getByPath"))(t, ["streams", "primaryVideo"]),
              o = {
                source_height: e(n, ["height"]),
                source_width: e(n, ["width"]),
                duration: e(n, ["duration"]) * 1e3,
              };
            return ((o.original_video_duration = o.duration), o);
          }),
          (a.$VideoUploadSession$p_67 = function (t) {
            var e, n;
            if (this.$VideoUploadSession7) {
              var o = this.$VideoUploadSession27.getValidationErrorMessage(
                this.$VideoUploadSession53,
                t,
              );
              if (o) {
                var a = r("err")(o.summary);
                ((a.is_js_error = !0),
                  (n = {
                    error_summary: o.summary,
                    error_description: o.description,
                    error: a,
                  }),
                  (e = !1));
              } else e = !0;
            } else
              e = this.$VideoUploadSession27.validate(
                this.$VideoUploadSession53,
                t,
              );
            if (!e) {
              (this.__logEvent(
                r("VideoUploadLogger").EVENT_INVALIDATED_UPLOADING,
              ),
                this.inform("upload-failed", n));
              return;
            }
            if (
              ((this.$VideoUploadSession26 = this.__extractVideoMetadata(t)),
              t &&
                t.format &&
                ((this.$VideoUploadSession64 = t.format.isSpherical),
                t.metadata &&
                  ((this.$VideoUploadSession65.sphericalMetadataXml =
                    t.metadata.sphericalMetadataXml),
                  (this.$VideoUploadSession65.fbSpatialAudioMetadataXml =
                    t.metadata.fbSpatialAudioMetadataXml),
                  (this.$VideoUploadSession65.ytSa3dMetadataJson =
                    t.metadata.ytSa3dMetadataJson))),
              this.$VideoUploadSession8 ||
                this.__logEvent(r("VideoUploadLogger").EVENT_STARTED_FLOW, {
                  is_spherical: this.getIsSphericalVideo() ? "true" : null,
                }),
              (this.$VideoUploadSession74 =
                this.$VideoUploadSession30 &&
                this.$VideoUploadSession53.getSize() >=
                  this.$VideoUploadSession31),
              (this.$VideoUploadSession75 = !1),
              (this.$VideoUploadSession76 = 0),
              (this.$VideoUploadSession77 = this.$VideoUploadSession76),
              (this.$VideoUploadSession78 = 0),
              this.$VideoUploadSession17
                ? this.$VideoUploadSession$p_44()
                : (this.$VideoUploadSession45 = !1),
              this.$VideoUploadSession74)
            )
              if (this.$VideoUploadSession17) {
                var i = 0;
                this.$VideoUploadSession79 = Math.ceil(
                  this.$VideoUploadSession53.getSize() /
                    this.$VideoUploadSession1,
                );
                var l = this.$VideoUploadSession79,
                  s = this.$VideoUploadSession79;
                for (i = 0; i < this.$VideoUploadSession1 - 1; i++)
                  ((this.$VideoUploadSession46[i] = l),
                    (l = Math.min(
                      this.$VideoUploadSession46[i] + s,
                      this.$VideoUploadSession53.getSize(),
                    )),
                    (this.$VideoUploadSession47[i] = l),
                    (this.$VideoUploadSession48[i] =
                      this.$VideoUploadSession46[i]),
                    (this.$VideoUploadSession49[i] = 0));
              } else
                ((this.$VideoUploadSession79 = Math.floor(
                  this.$VideoUploadSession53.getSize() / 2,
                )),
                  (this.$VideoUploadSession46 = this.$VideoUploadSession79),
                  (this.$VideoUploadSession48 = this.$VideoUploadSession46),
                  (this.$VideoUploadSession49 = 0),
                  (this.$VideoUploadSession47 =
                    this.$VideoUploadSession53.getSize()));
            else
              this.$VideoUploadSession79 = this.$VideoUploadSession53.getSize();
            var u = new (r("VideoUploadRequestContext"))()
              .setFile(this.$VideoUploadSession53)
              .setTargetID(this.$VideoUploadSession5)
              .setSource(this.$VideoUploadSession3)
              .setComposerDialogVersion(this.$VideoUploadSession4)
              .setComposerWorkSharedDraftMode(this.$VideoUploadSession11)
              .setWaterfallID(this.$VideoUploadSession25)
              .setComposerSessionID(this.$VideoUploadSession52)
              .setHasFileBeenReplaced(this.$VideoUploadSession19)
              .setSupportsChunking(this.$VideoUploadSession28)
              .setSupportsFileAPI(this.$VideoUploadSession29)
              .setCreatorProduct(this.$VideoUploadSession53.getCreatorProduct())
              .setPartitionStartOffset(this.$VideoUploadSession76)
              .setPartitionEndOffset(this.$VideoUploadSession79)
              .setRetryState(this.$VideoUploadSession43)
              .setCreativeTools(this.$VideoUploadSession54);
            (this.$VideoUploadSession30 &&
              u.setUseParallelChunks(this.$VideoUploadSession30),
              this.$VideoUploadSession64 &&
                (u.setIsSphericalVideo(this.$VideoUploadSession64),
                u.setSphericalMetadata(this.$VideoUploadSession65)),
              u.setComposerEntryPointRef == null ||
                u.setComposerEntryPointRef(this.$VideoUploadSession10),
              u.setVideoPublisherActionSource(this.$VideoUploadSession12),
              this.$VideoUploadSession$p_80(),
              this.$VideoUploadSession34.sendRequest(u),
              this.$VideoUploadSession21 &&
                this.$VideoUploadSession18 &&
                this.$VideoUploadSession36.isResumabilityEnabled() &&
                !this.$VideoUploadSession36.isResumableServiceProxyReceiveEnabled() &&
                this.$VideoUploadSession$p_81(),
              this.inform("metadata-parsed", t));
          }),
          (a.$VideoUploadSession$p_35 = function (t) {
            var e = this,
              n = this.$VideoUploadSession28 ? t.chunk_start_uri : t.start_uri,
              r = this.__getVideoUploadStartRequestManager(
                n,
                t.start_max_transport_retries,
                t.start_transport_retry_interval_base,
                t.start_max_transport_retry_timeout,
                t.skip_upload_enabled,
                t.skip_upload_file_size_limit,
                t.start_max_server_retries,
                t.start_server_retry_interval_base,
              );
            return (
              r.subscribe("request-started", function (t, n) {
                return e.$VideoUploadSession$p_82(t, n);
              }),
              r.subscribe("request-finished", function (t, n) {
                return e.$VideoUploadSession$p_83(t, n);
              }),
              r.subscribe("request-failed", function (t, n) {
                return e.$VideoUploadSession$p_84(t, n);
              }),
              r.subscribe("request-canceled", function (t) {
                return e.$VideoUploadSession$p_85(t);
              }),
              r
            );
          }),
          (a.$VideoUploadSession$p_37 = function (t) {
            var e = this,
              n = this.$VideoUploadSession28
                ? t.chunk_receive_uri
                : t.receive_uri,
              r = this.__getVideoUploadReceiveRequestManager(n, t);
            return (
              r.subscribe("request-started", function (t, n) {
                return e.$VideoUploadSession$p_86(t, n);
              }),
              r.subscribe("request-progressed", function (t, n) {
                return e.$VideoUploadSession$p_87(t, n);
              }),
              r.subscribe("request-finished", function (t, n) {
                return e.$VideoUploadSession$p_88(t, n);
              }),
              r.subscribe("request-failed", function (t, n) {
                return e.$VideoUploadSession$p_89(t, n);
              }),
              r.subscribe("request-canceled", function (t) {
                return e.$VideoUploadSession$p_90(t);
              }),
              r.subscribe("request-timeout", function (t, n) {
                return e.$VideoUploadSession$p_91(t, n);
              }),
              r.subscribe("online", function (t, n) {
                return e.$VideoUploadSession$p_92(t, n);
              }),
              r.subscribe("offline", function (t, n) {
                return e.$VideoUploadSession$p_93(t, n);
              }),
              r.subscribe("resumable-called", function (t, n) {
                return e.$VideoUploadSession$p_94(t, n);
              }),
              r.subscribe("resumable-started", function (t, n) {
                return e.$VideoUploadSession$p_95(t, n);
              }),
              r.subscribe("resumable-success", function (t, n) {
                return e.$VideoUploadSession$p_96(t, n);
              }),
              r.subscribe("resumable-failed", function (t, n) {
                return e.$VideoUploadSession$p_97(t, n);
              }),
              r
            );
          }),
          (a.$VideoUploadSession$p_40 = function (t) {
            var e = this,
              n = this.$VideoUploadSession28 ? t.chunk_post_uri : t.post_uri,
              r = this.__getVideoUploadPostRequestManager(n, t);
            return (
              r.subscribe("request-finished", function (t, n) {
                return e.__handlePostRequestFinished(t, n);
              }),
              r.subscribe("request-failed", function (t, n) {
                return e.$VideoUploadSession$p_98(t, n);
              }),
              r
            );
          }),
          (a.$VideoUploadSession$p_42 = function (t) {
            var e = this,
              n = new (r("VideoUploadGraphQLPostRequestManager"))(
                isNaN(t.post_max_transport_retries)
                  ? 0
                  : t.post_max_transport_retries,
                isNaN(t.post_transport_retry_interval_base)
                  ? 0
                  : t.post_transport_retry_interval_base,
                isNaN(t.post_max_server_retries)
                  ? 0
                  : t.post_max_server_retries,
                isNaN(t.post_server_retry_interval_base)
                  ? 0
                  : t.post_server_retry_interval_base,
              );
            return (
              n.subscribe("request-finished", function (t, n) {
                return e.__handlePostRequestFinished(t, n);
              }),
              n.subscribe("request-failed", function (t, n) {
                return e.$VideoUploadSession$p_98(t, n);
              }),
              n
            );
          }),
          (a.$VideoUploadSession$p_82 = function (t, n) {
            (this.__logEvent(
              r("VideoUploadLogger").EVENT_STARTED_UPLOADING,
              babelHelpers.extends(
                { hash_time: n.hash_time, hash_exception: n.hash_exception },
                this.$VideoUploadSession26,
              ),
            ),
              this.__logEvent(
                r("VideoUploadLogger").EVENT_STARTED_START_REQUEST,
                this.$VideoUploadSession26,
              ),
              (this.$VideoUploadSession99 = Date.now()),
              this.inform("upload-started"));
          }),
          (a.$VideoUploadSession$p_81 = function (t) {
            if (this.$VideoUploadSession22) this.$VideoUploadSession$p_100();
            else {
              this.$VideoUploadSession22 = !0;
              var e = t != null ? t : { video_id: null },
                n = this.__createReceiveRequestContext(e, !1);
              if (
                (this.$VideoUploadSession36.sendRequest(n),
                this.$VideoUploadSession74)
              )
                if (this.$VideoUploadSession17) {
                  var r = 0;
                  for (r = 0; r < this.$VideoUploadSession1 - 1; r++)
                    ((n = this.__createReceiveRequestContext(e, !0, r)),
                      this.$VideoUploadSession38[r].sendRequest(n));
                } else
                  ((n = this.__createReceiveRequestContext(e, !0)),
                    this.$VideoUploadSession38.sendRequest(n));
            }
          }),
          (a.$VideoUploadSession$p_100 = function () {
            if (
              (this.$VideoUploadSession36.updateVideoID(
                this.$VideoUploadSession57,
              ),
              this.$VideoUploadSession74)
            )
              if (this.$VideoUploadSession17) {
                var e = 0;
                for (e = 0; e < this.$VideoUploadSession1 - 1; e++)
                  this.$VideoUploadSession38[e].updateVideoID(
                    this.$VideoUploadSession57,
                  );
              } else
                this.$VideoUploadSession38.updateVideoID(
                  this.$VideoUploadSession57,
                );
          }),
          (a.$VideoUploadSession$p_101 = function (t) {
            return this.$VideoUploadSession43 == null
              ? ((t == null ? void 0 : t.transport_retries) || 0) +
                  ((t == null ? void 0 : t.server_retries) || 0) +
                  ((t == null ? void 0 : t.timeout_retries) || 0)
              : this.$VideoUploadSession43.getTotalRetryCount();
          }),
          (a.$VideoUploadSession$p_83 = function (t, n) {
            (this.__logEvent(
              r("VideoUploadLogger").EVENT_PROGRESS_UPLOADING_START_REQUEST,
              {
                retries: this.$VideoUploadSession$p_101(n),
                transport_retries: n.transport_retries,
                hash_time: n.hash_time,
                skip_upload: n.skip_upload ? 1 : null,
              },
            ),
              this.__logEvent(
                r("VideoUploadLogger").EVENT_FINISHED_START_REQUEST,
                babelHelpers.extends(
                  { video_id: n.video_id },
                  this.$VideoUploadSession26,
                ),
              ),
              (this.$VideoUploadSession57 = n.video_id),
              (this.$VideoUploadSession58 = n.upload_session_id),
              (this.$VideoUploadSession59 = n.fb_region),
              (this.$VideoUploadSession102 = n.skip_upload),
              n.skip_upload
                ? (this.$VideoUploadSession$p_103(),
                  this.inform("upload-progressed", {
                    start_offset: 0,
                    end_offset: this.$VideoUploadSession53.getSize(),
                    file_size: this.$VideoUploadSession53.getSize(),
                    sent_bytes: this.$VideoUploadSession53.getSize(),
                    video_id: n.video_id,
                    skip_upload: n.skip_upload,
                  }),
                  this.$VideoUploadSession8 && this.__logFinishedUploading(),
                  this.inform("upload-finished", {
                    start_offset: 0,
                    end_offset: this.$VideoUploadSession53.getSize(),
                    video_id: n.video_id,
                    is_spherical_video: this.$VideoUploadSession64,
                  }))
                : this.$VideoUploadSession$p_81(n));
          }),
          (a.__fetchReceiveRequestManagerStateLogData = function () {
            var e = {};
            if (
              (this.$VideoUploadSession36 != null &&
                (this.$VideoUploadSession36.appendStateLogData(
                  e,
                  "requestManager_",
                ),
                (e.request_manager_state = e.requestManager_last_log_state)),
              this.$VideoUploadSession17)
            ) {
              var t = 0;
              for (t = 0; t < this.$VideoUploadSession1 - 1; t++)
                this.$VideoUploadSession38[t] != null &&
                  this.$VideoUploadSession38[t].appendStateLogData(
                    e,
                    "requestManagerEx_" + t.toString(),
                  );
            } else
              this.$VideoUploadSession38 != null &&
                this.$VideoUploadSession38.appendStateLogData(
                  e,
                  "requestManagerEx_",
                );
            return e;
          }),
          (a.__createReceiveRequestContext = function (t, n, o) {
            var e = new (r("VideoUploadRequestContext"))();
            return (
              this.$VideoUploadSession17
                ? this.__setupReceiveRequestContext(e, t, n, o)
                : this.__setupReceiveRequestContext(e, t, n),
              e
            );
          }),
          (a.__setupReceiveRequestContext = function (t, n, r, o) {
            var e, a, i, l;
            (r
              ? this.$VideoUploadSession17
                ? (this.$VideoUploadSession18 &&
                    ((this.$VideoUploadSession32 =
                      this.$VideoUploadSession47[o] -
                      this.$VideoUploadSession46[o]),
                    (this.$VideoUploadSession32 = this.$VideoUploadSession20
                      ? Math.min(
                          this.$VideoUploadSession20,
                          this.$VideoUploadSession32,
                        )
                      : this.$VideoUploadSession32)),
                  (e = this.$VideoUploadSession46[o]),
                  (a = this.$VideoUploadSession47[o]),
                  (i = this.$VideoUploadSession46[o]),
                  (l =
                    this.$VideoUploadSession46[o] +
                      this.$VideoUploadSession32 >=
                    this.$VideoUploadSession47[o]
                      ? this.$VideoUploadSession47[o]
                      : this.$VideoUploadSession46[o] +
                        this.$VideoUploadSession32))
                : (this.$VideoUploadSession18 &&
                    ((this.$VideoUploadSession32 =
                      this.$VideoUploadSession47 - this.$VideoUploadSession46),
                    (this.$VideoUploadSession32 = this.$VideoUploadSession20
                      ? Math.min(
                          this.$VideoUploadSession20,
                          this.$VideoUploadSession32,
                        )
                      : this.$VideoUploadSession32)),
                  (e = this.$VideoUploadSession46),
                  (a = this.$VideoUploadSession47),
                  (i = this.$VideoUploadSession46),
                  (l =
                    this.$VideoUploadSession46 + this.$VideoUploadSession32 >=
                    this.$VideoUploadSession47
                      ? this.$VideoUploadSession47
                      : this.$VideoUploadSession46 +
                        this.$VideoUploadSession32))
              : ((e = this.$VideoUploadSession76),
                (a = this.$VideoUploadSession79),
                this.$VideoUploadSession18
                  ? ((i = this.$VideoUploadSession76),
                    (l = this.$VideoUploadSession20
                      ? Math.min(
                          this.$VideoUploadSession20,
                          this.$VideoUploadSession79,
                        )
                      : this.$VideoUploadSession79))
                  : ((i = n.start_offset), (l = n.end_offset))),
              t
                .setFile(this.$VideoUploadSession53)
                .setVideoID(n.video_id)
                .setXPVAssetID(n.xpv_asset_id)
                .setIsXPVSingleProd(n.is_xpv_single_prod)
                .setUploadSessionID(n.upload_session_id)
                .setFbRegion(n.fb_region)
                .setStartOffset(i)
                .setEndOffset(l)
                .setPartitionStartOffset(e)
                .setPartitionEndOffset(a)
                .setPartitionNo(o)
                .setTargetID(this.$VideoUploadSession5)
                .setSource(this.$VideoUploadSession3)
                .setComposerDialogVersion(this.$VideoUploadSession4)
                .setComposerWorkSharedDraftMode(this.$VideoUploadSession11)
                .setWaterfallID(this.$VideoUploadSession25)
                .setComposerSessionID(this.$VideoUploadSession52)
                .setSupportsChunking(this.$VideoUploadSession28)
                .setHasFileBeenReplaced(this.$VideoUploadSession19)
                .setRetryState(this.$VideoUploadSession43),
              this.$VideoUploadSession30 &&
                t.setUseParallelChunks(this.$VideoUploadSession30),
              t.setComposerEntryPointRef == null ||
                t.setComposerEntryPointRef(this.$VideoUploadSession10),
              this.$VideoUploadSession20 &&
                t.setClientChunkSize(this.$VideoUploadSession20));
          }),
          (a.$VideoUploadSession$p_84 = function (t, n) {
            var e = this.__getLogErrorData(n);
            (this.__logEvent(
              r("VideoUploadLogger").EVENT_FAILED_START_REQUEST,
              e,
            ),
              this.__logEvent(
                r("VideoUploadLogger").EVENT_FAILED_UPLOADING,
                e,
              ));
            var o = n.error_is_transient
              ? r("VideoUploadLogger").EVENT_RESIGNED_FLOW
              : r("VideoUploadLogger").EVENT_FAILED_FLOW;
            (this.$VideoUploadSession8
              ? this.$VideoUploadSession71 &&
                (this.__logEvent(o), (this.$VideoUploadSession71 = !1))
              : this.__logEvent(o),
              this.$VideoUploadSession$p_103(),
              this.$VideoUploadSession$p_104(),
              this.inform("upload-failed", n));
          }),
          (a.$VideoUploadSession$p_85 = function (t) {
            this.__logEvent(
              r("VideoUploadLogger").EVENT_CANCELED_START_REQUEST,
            );
          }),
          (a.$VideoUploadSession$p_86 = function (t, n) {
            (this.__logEvent(
              r("VideoUploadLogger").EVENT_STARTED_RECEIVE_REQUEST,
              { debug: n.debug },
            ),
              !n.start_offset &&
                !n.transport_retries &&
                !n.server_retries &&
                this.__logEvent(
                  r("VideoUploadLogger").EVENT_STARTED_SENDING_BYTES,
                  {
                    total_bytes: this.$VideoUploadSession53.getSize(),
                    upload_domain: n.upload_domain,
                    debug: n.debug,
                  },
                ),
              this.$VideoUploadSession28 &&
                this.__logEvent(
                  r("VideoUploadLogger").EVENT_STARTED_SENDING_CHUNK_BYTES,
                  {
                    start_offset: n.start_offset,
                    total_bytes: n.end_offset - n.start_offset,
                    retries: this.$VideoUploadSession$p_101(n),
                    transport_retries: n.transport_retries,
                    server_retries: n.server_retries,
                    upload_speed: n.upload_speed,
                    request_manager_state: n.request_manager_state,
                    upload_domain: n.upload_domain,
                    debug: n.debug,
                  },
                ));
          }),
          (a.$VideoUploadSession$p_87 = function (t, n) {
            if (n.start_offset < this.$VideoUploadSession79)
              ((this.$VideoUploadSession77 = n.start_offset),
                (this.$VideoUploadSession78 = n.sent_bytes));
            else if (this.$VideoUploadSession17) {
              var e = 0;
              ((e = this.getExPartitionNumber(n.start_offset)),
                e > -1 &&
                  ((this.$VideoUploadSession48[e] = n.start_offset),
                  (this.$VideoUploadSession49[e] = n.sent_bytes)));
            } else
              ((this.$VideoUploadSession48 = n.start_offset),
                (this.$VideoUploadSession49 = n.sent_bytes));
            if (
              ((n.start_offset = this.$VideoUploadSession77),
              (n.sent_bytes = this.$VideoUploadSession78),
              this.$VideoUploadSession74)
            )
              if (this.$VideoUploadSession17)
                for (e = 0; e < this.$VideoUploadSession1 - 1; e++)
                  ((n.start_offset +=
                    this.$VideoUploadSession48[e] -
                    this.$VideoUploadSession46[e]),
                    (n.sent_bytes += this.$VideoUploadSession49[e]));
              else
                ((n.start_offset +=
                  this.$VideoUploadSession48 - this.$VideoUploadSession46),
                  (n.sent_bytes += this.$VideoUploadSession49));
            var r = Math.min(n.start_offset + n.sent_bytes, n.file_size);
            r > this.$VideoUploadSession63 &&
              ((this.$VideoUploadSession63 = r),
              this.inform("upload-progressed", n));
          }),
          (a.$VideoUploadSession$p_88 = function (t, n) {
            (this.__logEvent(
              r("VideoUploadLogger").EVENT_FINISHED_RECEIVE_REQUEST,
              { debug: n.debug },
            ),
              this.$VideoUploadSession28 &&
                this.__logEvent(
                  r("VideoUploadLogger").EVENT_FINISHED_SENDING_CHUNK_BYTES,
                  {
                    start_offset: n.start_offset,
                    sent_bytes: n.end_offset - n.start_offset,
                    retries: this.$VideoUploadSession$p_101(n),
                    transport_retries: n.transport_retries,
                    server_retries: n.server_retries,
                    upload_speed: n.upload_speed,
                    request_manager_state: n.request_manager_state,
                    upload_domain: n.upload_domain,
                    debug: n.debug,
                  },
                ));
            var e = !1;
            if (n.start_offset < this.$VideoUploadSession79)
              this.$VideoUploadSession75 =
                n.end_offset >= this.$VideoUploadSession79;
            else if (this.$VideoUploadSession17) {
              var o = 0;
              if (((o = this.getExPartitionNumber(n.start_offset)), o === -1)) {
                var a = "Invalid offset",
                  i = r("err")(a);
                i.is_js_error = !0;
                var l = {
                  error_summary: a,
                  error_description:
                    "Offset doesn't fall in any exPartition range.",
                  error: i,
                };
                (this.__logEvent(r("VideoUploadLogger").EVENT_FAILED_UPLOADING),
                  this.inform("upload-failed", l));
                return;
              }
              this.$VideoUploadSession45[o] =
                n.end_offset >= this.$VideoUploadSession47[o];
            } else
              this.$VideoUploadSession45 =
                n.end_offset >= this.$VideoUploadSession47;
            if (this.$VideoUploadSession17)
              for (o = 0; o < this.$VideoUploadSession1 - 1; o++)
                if (this.$VideoUploadSession45[o] === !1) {
                  e = !1;
                  break;
                } else e = !0;
            else e = this.$VideoUploadSession45;
            (!this.$VideoUploadSession29 ||
              (this.$VideoUploadSession75 &&
                (!this.$VideoUploadSession74 || e))) &&
              (this.__logEvent(
                r("VideoUploadLogger").EVENT_FINISHED_SENDING_BYTES,
                {
                  sent_bytes: this.$VideoUploadSession53.getSize(),
                  upload_domain: n.upload_domain,
                  debug: n.debug,
                },
              ),
              (this.$VideoUploadSession72 =
                Date.now() - this.$VideoUploadSession99),
              this.$VideoUploadSession8 && this.__logFinishedUploading(),
              (n.video_id = this.$VideoUploadSession57),
              (n.is_spherical_video = this.$VideoUploadSession64),
              this.inform("upload-finished", n),
              this.$VideoUploadSession14 &&
                (this.$VideoUploadSession8 || this.__logFinishedUploading(),
                this.__logEvent(r("VideoUploadLogger").EVENT_FINISHED_FLOW, n),
                (this.$VideoUploadSession71 = !1),
                this.$VideoUploadSession$p_104(),
                this.inform("multimedia-upload-finished", n)));
          }),
          (a.$VideoUploadSession$p_89 = function (t, n) {
            var e = this.__getLogErrorData(n);
            if (
              (this.__logEvent(
                r("VideoUploadLogger").EVENT_FAILED_RECEIVE_REQUEST,
                e,
              ),
              this.$VideoUploadSession28 &&
                this.__logEvent(
                  r("VideoUploadLogger").EVENT_FAILED_SENDING_CHUNK_BYTES,
                  e,
                ),
              this.$VideoUploadSession60)
            ) {
              (this.__logEvent(
                r("VideoUploadLogger").EVENT_FAILED_SENDING_BYTES,
                e,
              ),
                this.__logEvent(
                  r("VideoUploadLogger").EVENT_FAILED_UPLOADING,
                  e,
                ));
              var o = n.error_is_transient
                ? r("VideoUploadLogger").EVENT_RESIGNED_FLOW
                : r("VideoUploadLogger").EVENT_FAILED_FLOW;
              this.$VideoUploadSession8
                ? this.$VideoUploadSession71 &&
                  (this.__logEvent(o, e), (this.$VideoUploadSession71 = !1))
                : this.__logEvent(o, e);
            }
            (this.$VideoUploadSession$p_104(), this.inform("upload-failed", n));
          }),
          (a.$VideoUploadSession$p_90 = function (t) {
            this.$VideoUploadSession28
              ? this.__logEvent(
                  r("VideoUploadLogger").EVENT_CANCELED_SENDING_CHUNK_BYTES,
                )
              : this.__logEvent(
                  r("VideoUploadLogger").EVENT_CANCELED_SENDING_BYTES,
                );
          }),
          (a.$VideoUploadSession$p_91 = function (t, n) {
            var e = {
              start_offset: n.start_offset,
              sent_bytes: n.end_offset - n.start_offset,
              retries: this.$VideoUploadSession$p_101(n),
              transport_retries: n.transport_retries,
              server_retries: n.server_retries,
              timeout_retries: n.timeout_retries,
              upload_speed: n.upload_speed,
              request_manager_state: n.request_manager_state,
              debug: n.debug,
            };
            this.__logEvent(
              r("VideoUploadLogger").EVENT_TIMEOUT_SENDING_CHUNK_BYTES,
              e,
            );
          }),
          (a.$VideoUploadSession$p_92 = function (t, n) {
            this.inform("online", n);
          }),
          (a.$VideoUploadSession$p_93 = function (t, n) {
            this.inform("offline", n);
          }),
          (a.$VideoUploadSession$p_94 = function (t, n) {
            this.__logEvent(r("VideoUploadLogger").EVENT_RESUMABLE_CALLED, n);
          }),
          (a.$VideoUploadSession$p_95 = function (t, n) {
            this.__logEvent(r("VideoUploadLogger").EVENT_RESUMABLE_STARTED, n);
          }),
          (a.$VideoUploadSession$p_96 = function (t, n) {
            this.__logEvent(r("VideoUploadLogger").EVENT_RESUMABLE_SUCCESS, n);
          }),
          (a.$VideoUploadSession$p_97 = function (t, n) {
            this.__logEvent(r("VideoUploadLogger").EVENT_RESUMABLE_FAILED, n);
          }),
          (a.__handlePostRequestFinished = function (t, n) {
            (this.__logEvent(
              r("VideoUploadLogger").EVENT_FINISHED_POST_REQUEST,
              babelHelpers.extends(
                { video_id: this.$VideoUploadSession57 },
                this.$VideoUploadSession26,
              ),
            ),
              n.video_id || (n.video_id = this.$VideoUploadSession57),
              this.$VideoUploadSession8 || this.__logFinishedUploading(),
              this.__logEvent(r("VideoUploadLogger").EVENT_FINISHED_FLOW),
              (this.$VideoUploadSession71 = !1),
              this.$VideoUploadSession$p_104());
            var e = babelHelpers.extends({}, n, this.$VideoUploadSession68);
            this.inform("post-finished", e);
          }),
          (a.__logFinishedUploading = function () {
            (this.__logEvent(
              r("VideoUploadLogger").EVENT_FINISHED_UPLOADING,
              babelHelpers.extends(
                {
                  elapsed_time: this.$VideoUploadSession72,
                  skip_upload: this.$VideoUploadSession102 ? 1 : null,
                  video_id: this.$VideoUploadSession57,
                },
                this.$VideoUploadSession26,
              ),
            ),
              (this.$VideoUploadSession61 = !0));
          }),
          (a.$VideoUploadSession$p_98 = function (t, n) {
            var e = this.__getLogErrorData(n);
            if (
              (this.__logEvent(
                r("VideoUploadLogger").EVENT_FAILED_POST_REQUEST,
                e,
              ),
              this.$VideoUploadSession60)
            ) {
              this.__logEvent(r("VideoUploadLogger").EVENT_FAILED_UPLOADING, e);
              var o = n.error_is_transient
                ? r("VideoUploadLogger").EVENT_RESIGNED_FLOW
                : r("VideoUploadLogger").EVENT_FAILED_FLOW;
              this.__logEvent(o, e);
            }
            (this.$VideoUploadSession$p_104(), this.inform("post-failed", n));
          }),
          (a.$VideoUploadSession$p_103 = function () {
            if (
              (this.$VideoUploadSession36.cancelRequest(),
              this.$VideoUploadSession74)
            )
              if (this.$VideoUploadSession17) {
                var e = 0;
                for (e = 0; e < this.$VideoUploadSession1 - 1; e++)
                  this.$VideoUploadSession38[e].cancelRequest();
              } else this.$VideoUploadSession38.cancelRequest();
            this.$VideoUploadSession22 = !1;
          }),
          (a.$VideoUploadSession$p_70 = function () {
            (this.$VideoUploadSession34.cancelRequest(),
              this.$VideoUploadSession$p_103(),
              this.$VideoUploadSession$p_104(),
              this.$VideoUploadSession57 &&
                (n.deleteVideo(this.$VideoUploadSession57),
                (this.$VideoUploadSession57 = null),
                (this.$VideoUploadSession58 = null),
                (this.$VideoUploadSession59 = null)));
          }),
          (a.$VideoUploadSession$p_80 = function () {
            var t = this;
            ((this.$VideoUploadSession60 = !0),
              this.$VideoUploadSession33 &&
                ((this.$VideoUploadSession62 = new (r(
                  "SubscriptionsHandler",
                ))()),
                this.$VideoUploadSession62.addSubscriptions(
                  this.$VideoUploadSession$p_55().postOnShutdown(function () {
                    if (t.$VideoUploadSession60) {
                      var n = {
                        event_reason: e.SHUTDOWN,
                        debug: babelHelpers.extends(
                          {},
                          t.__fetchReceiveRequestManagerStateLogData(),
                          { is_background_upload: t.$VideoUploadSession8 },
                        ),
                      };
                      (t.$VideoUploadSession8
                        ? t.$VideoUploadSession71 &&
                          t.__logEvent(
                            r("VideoUploadLogger").EVENT_CANCELED_FLOW,
                            n,
                          )
                        : t.__logEvent(
                            r("VideoUploadLogger").EVENT_CANCELED_FLOW,
                            n,
                          ),
                        t.inform("upload-canceled"));
                    }
                  }),
                )),
              this.$VideoUploadSession13 &&
                ((this.$VideoUploadSession73 = new (r(
                  "VideoUploadCrashMonitor",
                ))(
                  this.$VideoUploadSession25,
                  this.$VideoUploadSession9,
                  this.$VideoUploadSession3,
                  this.$VideoUploadSession5,
                  this.$VideoUploadSession6,
                  this.$VideoUploadSession28,
                  this.$VideoUploadSession10,
                  !this.$VideoUploadSession8 || this.$VideoUploadSession71,
                )),
                this.$VideoUploadSession73.startSession()));
          }),
          (a.$VideoUploadSession$p_104 = function () {
            ((this.$VideoUploadSession60 = !1),
              this.$VideoUploadSession62 &&
                (this.$VideoUploadSession62.release(),
                (this.$VideoUploadSession62 = null)),
              this.$VideoUploadSession73 &&
                (this.$VideoUploadSession73.endSession(),
                (this.$VideoUploadSession73 = null)));
          }),
          (a.__getLogErrorData = function (t) {
            return {
              error: t.error_summary,
              error_code: t.error_code,
              error_description: t.error_description,
              retries: this.$VideoUploadSession$p_101(t),
              transport_retries: t.transport_retries,
              server_retries: t.server_retries,
              request_manager_state: t.request_manager_state,
              debug: t.debug,
            };
          }),
          (a.__logEvent = function (t, n) {
            var e = n != null ? n : {};
            (this.$VideoUploadSession53 &&
              ((e.file_size = this.$VideoUploadSession53.getSize()),
              (e.file_extension = this.$VideoUploadSession53.getExtension()),
              (e.sent_bytes = this.$VideoUploadSession63)),
              this.$VideoUploadSession$p_55().logEvent(t, e));
          }),
          (a.__getVideoUploadStartRequestManager = function (
            t,
            n,
            o,
            a,
            i,
            l,
            s,
            u,
          ) {
            return new (r("VideoUploadStartRequestManager"))(
              t,
              n,
              o,
              a,
              i,
              l,
              s,
              u,
            );
          }),
          (a.__getVideoUploadReceiveRequestManager = function (t, n) {
            return new (r("VideoUploadReceiveRequestManager"))(
              t,
              n.max_transport_retries,
              n.max_transport_retry_timeout,
              n.max_server_retries,
              n.response_timeout_enabled,
              n.max_response_timeout_retries,
              n.response_timeout_speed_variation_factor_ppt,
              n.transport_retry_interval_base,
              n.server_retry_interval_base,
              n.receive_errors_force_retry,
              n.access_token,
              n.resumability_enabled,
              n.resumability_async_enabled,
              n.resumable_service_name,
              n.resumable_service_domain,
              n.datr,
              n.resumability_min_file_size,
              n.resumable_service_proxy_receive,
              n.resumable_service_send_media_info,
              n.resumable_service_send_file_size,
              n.resumable_reset_transport_retries_on_progress,
              n.traffic_tracing_enabled,
              n.traffic_tracing_min_file_size,
            );
          }),
          (a.__getVideoUploadPostRequestManager = function (t, n) {
            return new (r("VideoUploadPostRequestManager"))(
              t,
              n.post_max_transport_retries,
              n.post_transport_retry_interval_base,
              n.post_max_server_retries,
              n.post_server_retry_interval_base,
            );
          }),
          (n.deleteVideo = function (t) {
            var e = new (r("AsyncRequest"))(
              "/ajax/video/actions/delete",
            ).setData({ fbid: t, redirect: !1 });
            (e.setErrorHandler(function () {}), e.send());
          }),
          n
        );
      })(r("mixin")(n("cr:909282"))),
      u = s;
    l.default = u;
  },
  98,
);
