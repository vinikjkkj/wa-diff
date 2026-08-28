__d(
  "VideoUploadGraphQLPostRequestManager",
  [
    "FBLogger",
    "GraphQLVideoPublisherInputDataHandlerBase",
    "GraphQLVideoPublisherVideoUploaderInputDataHandler",
    "VideoComposerVideoPublisher",
    "clearTimeout",
    "cr:909282",
    "err",
    "mixin",
    "setTimeout",
  ],
  function (t, n, r, o, a, i, l) {
    var e = (function (e) {
      function t(t, n, r, o) {
        var a;
        return (
          (a = e.call(this) || this),
          (a.$VideoUploadGraphQLPostRequestManager$p_1 = 0),
          (a.$VideoUploadGraphQLPostRequestManager$p_2 = 0),
          (a.$VideoUploadGraphQLPostRequestManager$p_3 = 0),
          (a.$VideoUploadGraphQLPostRequestManager$p_4 = 0),
          (a.$VideoUploadGraphQLPostRequestManager$p_5 = 0),
          (a.$VideoUploadGraphQLPostRequestManager$p_6 = 0),
          (a.$VideoUploadGraphQLPostRequestManager$p_7 = null),
          (a.$VideoUploadGraphQLPostRequestManager$p_8 = null),
          (a.$VideoUploadGraphQLPostRequestManager$p_9 = !1),
          (a.$VideoUploadGraphQLPostRequestManager$p_1 = t),
          (a.$VideoUploadGraphQLPostRequestManager$p_2 = n),
          (a.$VideoUploadGraphQLPostRequestManager$p_3 = 0),
          (a.$VideoUploadGraphQLPostRequestManager$p_4 = r),
          (a.$VideoUploadGraphQLPostRequestManager$p_5 = o),
          (a.$VideoUploadGraphQLPostRequestManager$p_6 = 0),
          a
        );
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.sendRequest = function (t) {
          if (
            ((this.$VideoUploadGraphQLPostRequestManager$p_8 = t),
            this.$VideoUploadGraphQLPostRequestManager$p_9)
          ) {
            r("FBLogger")("video_publish_graphql").info(
              "Sending publishing request again while processing another request",
            );
            return;
          }
          (this.$VideoUploadGraphQLPostRequestManager$p_10(),
            this.inform("request-started"));
        }),
        (n.clearRequest = function () {
          ((this.$VideoUploadGraphQLPostRequestManager$p_9 = !1),
            (this.$VideoUploadGraphQLPostRequestManager$p_6 = 0),
            (this.$VideoUploadGraphQLPostRequestManager$p_3 = 0));
        }),
        (n.$VideoUploadGraphQLPostRequestManager$p_10 = function () {
          var e = this.$VideoUploadGraphQLPostRequestManager$p_8;
          if (e != null) {
            (r("clearTimeout")(this.$VideoUploadGraphQLPostRequestManager$p_7),
              (this.$VideoUploadGraphQLPostRequestManager$p_7 = null));
            var t = e.getMetadata(),
              n = this.__createRequestData(e),
              o = new (r("GraphQLVideoPublisherVideoUploaderInputDataHandler"))(
                t,
                n,
              );
            this.$VideoUploadGraphQLPostRequestManager$p_9 = !0;
            var a = new (r("VideoComposerVideoPublisher"))(o);
            a.publish(
              this.$VideoUploadGraphQLPostRequestManager$p_11.bind(this),
              this.$VideoUploadGraphQLPostRequestManager$p_12.bind(this),
            );
          }
        }),
        (n.__createRequestData = function (t) {
          var e = t.getVideoID(),
            n = t.getTargetID();
          if (e == null) throw r("err")("Video id cannot be null");
          if (n == null) throw r("err")("Target id cannot be null");
          return {
            video_id: e,
            target_id: n,
            source: "COMPOSER",
            waterfall_id: t.getWaterfallID() || "",
            creator_product: t.getCreatorProduct(),
            composer_entry_point_ref:
              t.getComposerEntryPointRef && t.getComposerEntryPointRef(),
            composer_dialog_version: t.getComposerDialogVersion(),
            has_file_been_replaced: t.getHasFileBeenReplaced(),
            supports_chunking: t.getSupportsChunking(),
          };
        }),
        (n.$VideoUploadGraphQLPostRequestManager$p_11 = function (t) {
          var e;
          (this.inform("request-finished", {
            video_asset_id:
              (e = t.video_publish) == null ? void 0 : e.video_asset_id,
          }),
            this.clearRequest());
        }),
        (n.$VideoUploadGraphQLPostRequestManager$p_13 = function (t) {
          (this.inform("request-failed", {
            error_code: t.number,
            error_description: t.message,
            error_summary: t.name,
            error_object: t,
          }),
            this.clearRequest());
        }),
        (n.$VideoUploadGraphQLPostRequestManager$p_12 = function (t) {
          this.$VideoUploadGraphQLPostRequestManager$p_14(t) &&
          this.$VideoUploadGraphQLPostRequestManager$p_6 <
            this.$VideoUploadGraphQLPostRequestManager$p_4
            ? (r("FBLogger")("video_publish_graphql").info(
                "retry publishing for error: %s",
                t.stack,
              ),
              this.$VideoUploadGraphQLPostRequestManager$p_6++,
              this.$VideoUploadGraphQLPostRequestManager$p_15(
                this.$VideoUploadGraphQLPostRequestManager$p_16(
                  this.$VideoUploadGraphQLPostRequestManager$p_5,
                  this.$VideoUploadGraphQLPostRequestManager$p_6,
                ),
              ))
            : this.$VideoUploadGraphQLPostRequestManager$p_13(t);
        }),
        (n.$VideoUploadGraphQLPostRequestManager$p_16 = function (t, n) {
          return Math.pow(t, n) * 1e3;
        }),
        (n.$VideoUploadGraphQLPostRequestManager$p_15 = function (t) {
          (r("clearTimeout")(this.$VideoUploadGraphQLPostRequestManager$p_7),
            (this.$VideoUploadGraphQLPostRequestManager$p_7 = r("setTimeout")(
              this.$VideoUploadGraphQLPostRequestManager$p_10.bind(this),
              t,
            )));
        }),
        (n.$VideoUploadGraphQLPostRequestManager$p_14 = function (t) {
          var e = t.toString();
          return !!(
            e.includes("NetworkTransportError") ||
            e.includes("NetworkTimeoutError") ||
            e.includes("NetworkRequestError")
          );
        }),
        (n.hasAPISupport = function (t) {
          return o("GraphQLVideoPublisherInputDataHandlerBase").hasAPISupport(
            t,
          );
        }),
        t
      );
    })(r("mixin")(n("cr:909282")));
    l.default = e;
  },
  98,
);
