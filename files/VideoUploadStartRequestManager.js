__d(
  "VideoUploadStartRequestManager",
  [
    "Assert",
    "FBLogger",
    "FileHasher",
    "VideoUploadRequest",
    "clearTimeout",
    "cr:909282",
    "isEmpty",
    "mixin",
    "performanceNow",
    "setTimeout",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = (function (t) {
        function n(e, n, r, o, a, i, l, s) {
          var u;
          return (
            (u = t.call(this) || this),
            (u.$VideoUploadStartRequestManager1 = e),
            (u.$VideoUploadStartRequestManager2 = n),
            (u.$VideoUploadStartRequestManager3 = r),
            (u.$VideoUploadStartRequestManager4 = o),
            (u.$VideoUploadStartRequestManager5 = 0),
            (u.$VideoUploadStartRequestManager6 = a),
            (u.$VideoUploadStartRequestManager7 = i),
            (u.$VideoUploadStartRequestManager8 = l),
            (u.$VideoUploadStartRequestManager9 = s),
            (u.$VideoUploadStartRequestManager10 = 0),
            u
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var o = n.prototype;
        return (
          (o.getRequest = function () {
            return this.$VideoUploadStartRequestManager11;
          }),
          (o.sendRequest = function (n) {
            var t = this;
            this.$VideoUploadStartRequestManager12 ||
              this.$VideoUploadStartRequestManager11 ||
              ((this.$VideoUploadStartRequestManager13 = n),
              this.$VideoUploadStartRequestManager6 &&
              this.$VideoUploadStartRequestManager13.getFile().getFile() &&
              this.$VideoUploadStartRequestManager13.getFile().getFile().size <
                this.$VideoUploadStartRequestManager7 &&
              r("FileHasher").isSupported()
                ? ((this.$VideoUploadStartRequestManager14 = (
                    e || (e = r("performanceNow"))
                  )()),
                  (this.$VideoUploadStartRequestManager12 = new (r(
                    "FileHasher",
                  ))()),
                  this.$VideoUploadStartRequestManager12.hash(
                    this.$VideoUploadStartRequestManager13.getFile().getFile(),
                    function (n) {
                      ((t.$VideoUploadStartRequestManager14 =
                        (e || (e = r("performanceNow")))() -
                        t.$VideoUploadStartRequestManager14),
                        (t.$VideoUploadStartRequestManager15 = n.hash),
                        t.$VideoUploadStartRequestManager12.destroy(),
                        (t.$VideoUploadStartRequestManager12 = null),
                        n.hash ||
                          (t.$VideoUploadStartRequestManager16 = n.exception),
                        t.$VideoUploadStartRequestManager17());
                    },
                  ))
                : this.$VideoUploadStartRequestManager17());
          }),
          (o.$VideoUploadStartRequestManager17 = function () {
            (this.$VideoUploadStartRequestManager18(),
              this.inform("request-started", {
                hash_time: this.$VideoUploadStartRequestManager14,
                hash_exception: this.$VideoUploadStartRequestManager16,
              }));
          }),
          (o.$VideoUploadStartRequestManager18 = function () {
            (r("clearTimeout")(this.$VideoUploadStartRequestManager19),
              (this.$VideoUploadStartRequestManager19 = null),
              (this.$VideoUploadStartRequestManager11 =
                this.__getVideoUploadRequest(
                  this.$VideoUploadStartRequestManager1,
                )
                  .setAllowCrossOrigin(!0)
                  .setData(
                    this.__getDataToSend(
                      this.$VideoUploadStartRequestManager13,
                      this.$VideoUploadStartRequestManager15,
                    ),
                  )
                  .setWaterfallID(
                    this.$VideoUploadStartRequestManager13.getWaterfallID(),
                  )
                  .setSuccessHandler(
                    this.$VideoUploadStartRequestManager20.bind(this),
                  )
                  .setErrorHandler(
                    this.$VideoUploadStartRequestManager21.bind(this),
                  )
                  .setTransportErrorHandler(
                    this.$VideoUploadStartRequestManager22.bind(this),
                  )),
              this.$VideoUploadStartRequestManager11.send());
          }),
          (o.__getVideoUploadRequest = function (t) {
            return new (r("VideoUploadRequest"))(t);
          }),
          (o.__getDataToSend = function (t, n) {
            var e = {
              file_size: t.getFile().getSize(),
              file_extension: t.getFile().getExtension(),
              target_id: t.getTargetID(),
              source: t.getSource(),
              composer_dialog_version: t.getComposerDialogVersion(),
              waterfall_id: t.getWaterfallID(),
              composer_session_id: t.getComposerSessionID(),
              composer_entry_point_ref:
                t.getComposerEntryPointRef && t.getComposerEntryPointRef(),
              composer_work_shared_draft_mode:
                t.getComposerWorkSharedDraftMode(),
              has_file_been_replaced: t.getHasFileBeenReplaced(),
              supports_chunking: t.getSupportsChunking(),
              supports_file_api: t.getSupportsFileAPI(),
              partition_start_offset: t.getPartitionStartOffset(),
              partition_end_offset: t.getPartitionEndOffset(),
              creator_product: t.getCreatorProduct(),
              original_file_hash: n,
              spherical: t.getIsSphericalVideo(),
              spherical_metadata: t.getSphericalMetadata(),
              video_publisher_action_source: t.getVideoPublisherActionSource(),
            };
            return (
              t.getCreativeTools() != null &&
                (e.creative_tools = t.getCreativeTools()),
              e
            );
          }),
          (o.cancelRequest = function () {
            (this.$VideoUploadStartRequestManager23(),
              this.inform("request-canceled"));
          }),
          (o.$VideoUploadStartRequestManager24 = function (t) {
            (r("clearTimeout")(this.$VideoUploadStartRequestManager19),
              (this.$VideoUploadStartRequestManager19 = r("setTimeout")(
                this.$VideoUploadStartRequestManager18.bind(this),
                t,
              )));
          }),
          (o.$VideoUploadStartRequestManager23 = function () {
            (this.$VideoUploadStartRequestManager12 &&
              (this.$VideoUploadStartRequestManager12.destroy(),
              (this.$VideoUploadStartRequestManager12 = null)),
              this.$VideoUploadStartRequestManager11 &&
                (this.$VideoUploadStartRequestManager11.abort(),
                (this.$VideoUploadStartRequestManager11 = null)),
              (this.$VideoUploadStartRequestManager10 = 0),
              (this.$VideoUploadStartRequestManager5 = 0),
              (this.$VideoUploadStartRequestManager13 = null),
              r("clearTimeout")(this.$VideoUploadStartRequestManager19),
              (this.$VideoUploadStartRequestManager19 = null));
          }),
          (o.$VideoUploadStartRequestManager25 = function (t, n, r) {
            var e = Math.pow(t, n) * 1e3;
            return (r > 0 && (e = Math.min(e, r)), e);
          }),
          (o.$VideoUploadStartRequestManager20 = function (t) {
            var e;
            (e = this.$VideoUploadStartRequestManager13) == null ||
              (e = e.getRetryState()) == null ||
              e.resetDelay();
            var n = t.getPayload();
            (this.inform("request-finished", this.__getSuccessInformData(n)),
              (this.$VideoUploadStartRequestManager11 = null),
              r("Assert").isTrue(
                this.$VideoUploadStartRequestManager12 == null,
                "Unexpected: if file hasher is not null, clean up is required.",
              ));
          }),
          (o.__getSuccessInformData = function (t) {
            return {
              video_id: t.video_id,
              xpv_asset_id: t.xpv_asset_id,
              is_xpv_single_prod: t.is_xpv_single_prod,
              upload_session_id: t.upload_session_id,
              fb_region: t.region_hint,
              start_offset: t.start_offset,
              end_offset: t.end_offset,
              transport_retries: this.$VideoUploadStartRequestManager5,
              server_retries: this.$VideoUploadStartRequestManager10,
              skip_upload: t.skip_upload,
              hash_time: this.$VideoUploadStartRequestManager14,
            };
          }),
          (o.$VideoUploadStartRequestManager26 = function (t) {
            (this.inform(
              "request-failed",
              this.$VideoUploadStartRequestManager27(t),
            ),
              (this.$VideoUploadStartRequestManager11 = null),
              r("Assert").isTrue(
                this.$VideoUploadStartRequestManager12 == null,
                "Unexpected: if file hasher is not null, clean up is required.",
              ));
          }),
          (o.$VideoUploadStartRequestManager21 = function (t) {
            var e,
              n = this;
            this.$VideoUploadStartRequestManager11 = null;
            var r =
              (e = this.$VideoUploadStartRequestManager13) == null
                ? void 0
                : e.getRetryState();
            r == null
              ? ((this.$VideoUploadStartRequestManager5 = 0),
                t.isTransient() &&
                this.$VideoUploadStartRequestManager10 <
                  this.$VideoUploadStartRequestManager8
                  ? (this.$VideoUploadStartRequestManager10++,
                    this.$VideoUploadStartRequestManager24(
                      this.$VideoUploadStartRequestManager25(
                        this.$VideoUploadStartRequestManager9,
                        this.$VideoUploadStartRequestManager10,
                      ),
                    ))
                  : this.$VideoUploadStartRequestManager26(t))
              : r.handleRetry({
                  context: {
                    location: "start-server_issue",
                    error_code: t.getError(),
                  },
                  predicate: function () {
                    return t.isTransient();
                  },
                  retryHandler: function (t) {
                    ((n.$VideoUploadStartRequestManager10 =
                      r.getTotalRetryCount()),
                      n.$VideoUploadStartRequestManager24(t));
                  },
                  failureHandler: function () {
                    return n.$VideoUploadStartRequestManager26(t);
                  },
                });
          }),
          (o.$VideoUploadStartRequestManager22 = function (t) {
            var e,
              n = this;
            ((e = this.$VideoUploadStartRequestManager13) == null
              ? void 0
              : e.getRetryState()) == null
              ? this.$VideoUploadStartRequestManager2 === 0 ||
                this.$VideoUploadStartRequestManager5 >=
                  this.$VideoUploadStartRequestManager2
                ? this.$VideoUploadStartRequestManager26(t)
                : (this.$VideoUploadStartRequestManager5++,
                  (this.$VideoUploadStartRequestManager11 = null),
                  this.$VideoUploadStartRequestManager24(
                    this.$VideoUploadStartRequestManager25(
                      this.$VideoUploadStartRequestManager3,
                      this.$VideoUploadStartRequestManager5,
                      this.$VideoUploadStartRequestManager4,
                    ),
                  ))
              : this.$VideoUploadStartRequestManager13
                  .getRetryState()
                  .handleRetry({
                    context: {
                      location: "start-transport_issue",
                      error_code: t.getError(),
                    },
                    retryHandler: function (t) {
                      ((n.$VideoUploadStartRequestManager11 = null),
                        n.$VideoUploadStartRequestManager24(t));
                    },
                    failureHandler: function () {
                      return n.$VideoUploadStartRequestManager26(t);
                    },
                  });
          }),
          (o.$VideoUploadStartRequestManager27 = function (t) {
            var e,
              n,
              o = []
                .concat(
                  t == null ||
                    (e = t.getPayload()) == null ||
                    (e = e.error) == null
                    ? void 0
                    : e.opes_mids,
                  [t == null ? void 0 : t.errorMid],
                )
                .filter(Boolean);
            return {
              error_code: t.getError(),
              error_description: t.getErrorDescription(),
              error_summary: t.getErrorSummary(),
              transport_retries: this.$VideoUploadStartRequestManager5,
              server_retries: this.$VideoUploadStartRequestManager10,
              error_is_transient: t.isTransient(),
              www_request_id:
                (n = t.getPayload()) == null ? void 0 : n.__www_request_id__,
              opes_mids: (s || (s = r("isEmpty")))(o) ? null : o,
            };
          }),
          n
        );
      })(r("mixin")(n("cr:909282"))),
      c = u;
    l.default = c;
  },
  98,
);
