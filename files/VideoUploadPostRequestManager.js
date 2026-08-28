__d(
  "VideoUploadPostRequestManager",
  [
    "VideoUploadLogger",
    "VideoUploadRequest",
    "clearTimeout",
    "cr:909282",
    "isEmpty",
    "mixin",
    "setTimeout",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (function (t) {
        function n(e, n, r, o, a) {
          var i;
          return (
            (i = t.call(this) || this),
            (i.$VideoUploadPostRequestManager2 = e),
            (i.$VideoUploadPostRequestManager3 = n),
            (i.$VideoUploadPostRequestManager4 = r),
            (i.$VideoUploadPostRequestManager5 = 0),
            (i.$VideoUploadPostRequestManager6 = o),
            (i.$VideoUploadPostRequestManager7 = a),
            (i.$VideoUploadPostRequestManager8 = 0),
            i
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var o = n.prototype;
        return (
          (o.$VideoUploadPostRequestManager9 = function () {
            return this.$VideoUploadPostRequestManager1
              ? new (r("VideoUploadLogger"))({
                  source: this.$VideoUploadPostRequestManager1.getSource(),
                  waterfall_id:
                    this.$VideoUploadPostRequestManager1.getWaterfallID(),
                  target_id: this.$VideoUploadPostRequestManager1.getTargetID(),
                  composer_entry_point_ref:
                    this.$VideoUploadPostRequestManager1
                      .getComposerEntryPointRef &&
                    this.$VideoUploadPostRequestManager1.getComposerEntryPointRef(),
                })
              : null;
          }),
          (o.getRequest = function () {
            return this.$VideoUploadPostRequestManager10;
          }),
          (o.sendRequest = function (t) {
            if (
              ((this.$VideoUploadPostRequestManager1 = t),
              this.$VideoUploadPostRequestManager10)
            ) {
              var e = this.$VideoUploadPostRequestManager9();
              e &&
                e.logEvent(r("VideoUploadLogger").EVENT_DUPLICATE_POST_REQUEST);
              return;
            }
            ((this.$VideoUploadPostRequestManager11 = babelHelpers.extends(
              {},
              t.getMetadata(),
              this.__createRequestData(t),
            )),
              (this.$VideoUploadPostRequestManager12 =
                this.$VideoUploadPostRequestManager11.thumb),
              (this.$VideoUploadPostRequestManager13 =
                this.$VideoUploadPostRequestManager11.schedule_custom_profile_image),
              (this.$VideoUploadPostRequestManager14 =
                this.$VideoUploadPostRequestManager11.schedule_custom_background_image),
              (this.$VideoUploadPostRequestManager15 =
                this.$VideoUploadPostRequestManager11.schedule_feed_background_image),
              delete this.$VideoUploadPostRequestManager11.thumb,
              (this.$VideoUploadPostRequestManager16 =
                this.$VideoUploadPostRequestManager11.captions),
              delete this.$VideoUploadPostRequestManager11.captions,
              (this.$VideoUploadPostRequestManager17 = t.getWaterfallID()),
              (this.$VideoUploadPostRequestManager18 =
                this.$VideoUploadPostRequestManager11.pollImages),
              this.$VideoUploadPostRequestManager19(),
              this.inform("request-started"));
          }),
          (o.$VideoUploadPostRequestManager19 = function () {
            (r("clearTimeout")(this.$VideoUploadPostRequestManager20),
              (this.$VideoUploadPostRequestManager20 = null),
              (this.$VideoUploadPostRequestManager10 =
                this.__getVideoUploadRequest(
                  this.$VideoUploadPostRequestManager2,
                )
                  .setAllowCrossOrigin(!0)
                  .setData(this.$VideoUploadPostRequestManager11)
                  .setThumbnail(this.$VideoUploadPostRequestManager12)
                  .setCustomProfileImage(this.$VideoUploadPostRequestManager13)
                  .setCustomBackgroundImage(
                    this.$VideoUploadPostRequestManager14,
                  )
                  .setFeedBackgroundImage(this.$VideoUploadPostRequestManager15)
                  .setCaptions(this.$VideoUploadPostRequestManager16)
                  .setWaterfallID(this.$VideoUploadPostRequestManager17)
                  .setPollOptionImages(this.$VideoUploadPostRequestManager18)
                  .setSuccessHandler(
                    this.$VideoUploadPostRequestManager21.bind(this),
                  )
                  .setErrorHandler(
                    this.$VideoUploadPostRequestManager22.bind(this),
                  )
                  .setTransportErrorHandler(
                    this.$VideoUploadPostRequestManager23.bind(this),
                  )),
              this.$VideoUploadPostRequestManager10.send());
          }),
          (o.__createRequestData = function (t) {
            return {
              video_id: t.getVideoID(),
              target_id: t.getTargetID(),
              source: t.getSource(),
              waterfall_id: t.getWaterfallID(),
              creator_product: t.getCreatorProduct(),
              composer_entry_point_ref:
                t.getComposerEntryPointRef && t.getComposerEntryPointRef(),
              composer_dialog_version: t.getComposerDialogVersion(),
              has_file_been_replaced: t.getHasFileBeenReplaced(),
              supports_chunking: t.getSupportsChunking(),
            };
          }),
          (o.__getVideoUploadRequest = function (t) {
            return new (r("VideoUploadRequest"))(t);
          }),
          (o.clearRequest = function () {
            ((this.$VideoUploadPostRequestManager10 = null),
              (this.$VideoUploadPostRequestManager8 = 0),
              (this.$VideoUploadPostRequestManager5 = 0));
          }),
          (o.isInProgress = function () {
            return !!this.$VideoUploadPostRequestManager10;
          }),
          (o.$VideoUploadPostRequestManager24 = function (t) {
            (r("clearTimeout")(this.$VideoUploadPostRequestManager20),
              (this.$VideoUploadPostRequestManager20 = r("setTimeout")(
                this.$VideoUploadPostRequestManager19.bind(this),
                t,
              )));
          }),
          (o.$VideoUploadPostRequestManager25 = function (t, n) {
            return Math.pow(t, n) * 1e3;
          }),
          (o.$VideoUploadPostRequestManager21 = function (t) {
            var e = t.getPayload();
            (this.inform("request-finished", {
              video_id: e.video_id,
              video_asset_id: e.video_asset_id,
              container_type: e.container_type,
              transport_retries: this.$VideoUploadPostRequestManager5,
              server_retries: this.$VideoUploadPostRequestManager8,
              premiere_destination_video_id: e.premiere_destination_video_id,
            }),
              this.clearRequest());
          }),
          (o.$VideoUploadPostRequestManager26 = function (n) {
            var t,
              o,
              a = []
                .concat(
                  n == null ||
                    (t = n.getPayload()) == null ||
                    (t = t.error) == null
                    ? void 0
                    : t.opes_mids,
                  [n == null ? void 0 : n.errorMid],
                )
                .filter(Boolean);
            (this.inform("request-failed", {
              error_code: n.getError(),
              error_description: n.getErrorDescription(),
              error_summary: n.getErrorSummary(),
              transport_retries: this.$VideoUploadPostRequestManager5,
              server_retries: this.$VideoUploadPostRequestManager8,
              error_is_silent: n.isSilent(),
              error_is_transient: n.isTransient(),
              www_request_id:
                (o = n.getPayload()) == null ? void 0 : o.__www_request_id__,
              opes_mids: (e || (e = r("isEmpty")))(a) ? null : a,
            }),
              this.clearRequest());
          }),
          (o.$VideoUploadPostRequestManager22 = function (t) {
            ((this.$VideoUploadPostRequestManager10 = null),
              (this.$VideoUploadPostRequestManager5 = 0));
            var e = this.$VideoUploadPostRequestManager9();
            if (e) {
              var n = {
                server_retries: this.$VideoUploadPostRequestManager8,
                extra_data: { failure_is_transient: t.isTransient() },
              };
              e.logEvent(
                r("VideoUploadLogger").EVENT_HANDLING_SERVER_FAILURE_RESPONSE,
                n,
              );
            }
            t.isTransient() &&
            this.$VideoUploadPostRequestManager8 <
              this.$VideoUploadPostRequestManager6
              ? (this.$VideoUploadPostRequestManager8++,
                this.$VideoUploadPostRequestManager24(
                  this.$VideoUploadPostRequestManager25(
                    this.$VideoUploadPostRequestManager7,
                    this.$VideoUploadPostRequestManager8,
                  ),
                ))
              : this.$VideoUploadPostRequestManager26(t);
          }),
          (o.$VideoUploadPostRequestManager23 = function (t) {
            var e = this.$VideoUploadPostRequestManager9();
            if (e) {
              var n = {
                extra_data: {
                  transport_retries: this.$VideoUploadPostRequestManager5,
                },
              };
              e.logEvent(
                r("VideoUploadLogger")
                  .EVENT_HANDLING_TRANSPORT_FAILURE_RESPONSE,
                n,
              );
            }
            this.$VideoUploadPostRequestManager3 === 0 ||
            this.$VideoUploadPostRequestManager5 >=
              this.$VideoUploadPostRequestManager3
              ? this.$VideoUploadPostRequestManager26(t)
              : (this.$VideoUploadPostRequestManager5++,
                (this.$VideoUploadPostRequestManager10 = null),
                this.$VideoUploadPostRequestManager24(
                  this.$VideoUploadPostRequestManager25(
                    this.$VideoUploadPostRequestManager4,
                    this.$VideoUploadPostRequestManager5,
                  ),
                ));
          }),
          n
        );
      })(r("mixin")(n("cr:909282"))),
      u = s;
    l.default = u;
  },
  98,
);
