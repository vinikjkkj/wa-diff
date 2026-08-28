__d(
  "VideoUploadRequest",
  [
    "AsyncRequest",
    "DOM",
    "DTSG",
    "FileForm",
    "Form",
    "VideoUploadFeatureDetector",
    "emptyFunction",
    "flattenPHPQueryData",
    "submitForm",
  ],
  function (t, n, r, o, a, i, l) {
    var e = "video",
      s = (function () {
        function t(e) {
          var t;
          ((this.$1 = e),
            (this.$2 = null),
            (this.$3 = !1),
            (this.$4 = null),
            (this.$5 = null),
            (this.$6 = null),
            (this.$7 = null),
            (this.$8 = t = r("emptyFunction")),
            (this.$9 = t),
            (this.$10 = t),
            (this.$11 = t),
            (this.$12 = null));
        }
        var n = t.prototype;
        return (
          (n.setAllowCrossOrigin = function (t) {
            return ((this.$3 = t), this);
          }),
          (n.setData = function (t) {
            return ((this.$4 = t), this);
          }),
          (n.setWaterfallID = function (t) {
            return ((this.$6 = t), this);
          }),
          (n.setSuccessHandler = function (t) {
            return ((this.$8 = t), this);
          }),
          (n.setErrorHandler = function (t) {
            return ((this.$9 = t), this);
          }),
          (n.setTransportErrorHandler = function (t) {
            return ((this.$10 = t), this);
          }),
          (n.setUploadProgressHandler = function (t) {
            return ((this.$11 = t), this);
          }),
          (n.setTimeoutHandler = function (t, n) {
            return ((this.$7 = t), (this.$12 = n), this);
          }),
          (n.setThumbnail = function (t) {
            return ((this.$13 = t), this);
          }),
          (n.setCustomProfileImage = function (t) {
            return ((this.$14 = t), this);
          }),
          (n.setCustomBackgroundImage = function (t) {
            return ((this.$15 = t), this);
          }),
          (n.setFeedBackgroundImage = function (t) {
            return ((this.$16 = t), this);
          }),
          (n.setHandle = function (t) {
            return ((this.$5 = t), this);
          }),
          (n.setCaptions = function (t) {
            return ((this.$17 = t), this);
          }),
          (n.setPollOptionImages = function (t) {
            return ((this.$18 = t), this);
          }),
          (n.send = function () {
            if (this.$2 != null) {
              var e = new Error("An upload request is already in progress.");
              throw (e.stack, e);
            }
            if (o("VideoUploadFeatureDetector").supportsXHR()) {
              if (
                ((this.$2 = this.$19()),
                this.$13 != null ||
                  this.$17 != null ||
                  this.$14 != null ||
                  this.$15 != null ||
                  this.$16 != null ||
                  this.$18 != null)
              ) {
                var t = new FormData();
                if (
                  (this.$13 != null && t.append("thumb", this.$13),
                  this.$14 != null &&
                    t.append("schedule_custom_profile_image", this.$14),
                  this.$15 != null &&
                    t.append("schedule_custom_background_image", this.$15),
                  this.$16 != null &&
                    t.append("schedule_feed_background_image", this.$16),
                  this.$17 != null &&
                    this.$17.forEach(function (e, n) {
                      var r = e.getIsDefault()
                        ? "captions_default"
                        : "captions_file" + n;
                      t.append(r, e.getFile());
                    }),
                  this.$18 != null)
                ) {
                  var n = this.$18;
                  Object.keys(n).forEach(function (e) {
                    t.append(e, n[e]);
                  });
                }
                if (this.$4 != null) {
                  var a = r("flattenPHPQueryData")(this.$4);
                  Object.keys(a).forEach(function (e) {
                    t.append(e, a[e]);
                  });
                }
                this.$2.setRawData(t);
              }
              this.$2.send();
            } else ((this.$2 = this.$20()), this.$21(this.$2));
          }),
          (n.sendChunk = function (t) {
            if (this.$2 != null) {
              var e = new Error("An upload request is already in progress.");
              throw (e.stack, e);
            }
            var n = new FormData();
            (this.$5 != null
              ? n.append("fbuploader_video_file_chunk", this.$5)
              : n.append("video_file_chunk", t),
              (this.$2 = this.$19()),
              this.$2.setRawData(n),
              this.$2.send());
          }),
          (n.sendFile = function (n) {
            if (this.$2 != null) {
              var t = new Error("An upload request is already in progress.");
              throw (t.stack, t);
            }
            this.$2 = this.$20();
            var o = n.cloneNode(!1);
            ((n.name = e),
              r("DOM").replace(n, o),
              r("DOM").appendContent(this.$2.getRoot(), n),
              this.$21(this.$2),
              (n.name = o.name),
              r("DOM").replace(o, n));
          }),
          (n.abort = function () {
            this.$2 != null && (this.$2.abort(), (this.$2 = null));
          }),
          (n.$19 = function () {
            var e = this.__getAsyncRequest()
              .setAllowCrossOrigin(this.$3)
              .setURI(this.$1)
              .setData(this.$4)
              .setRequestHeader("X_FB_VIDEO_WATERFALL_ID", this.$6)
              .setHandler(this.$8)
              .setErrorHandler(this.$9)
              .setTransportErrorHandler(this.$10)
              .setUploadProgressHandler(this.$11);
            return (
              this.$12 != null && e.setTimeoutHandler(this.$7, this.$12),
              e
            );
          }),
          (n.__getAsyncRequest = function () {
            return new (r("AsyncRequest"))();
          }),
          (n.$20 = function () {
            var e = r("DOM").create("form", {
              action: this.$1,
              method: "POST",
            });
            r("Form").createHiddenInputs(
              babelHelpers.extends({ fb_dtsg: o("DTSG").getToken() }, this.$4),
              e,
            );
            var t = new (r("FileForm"))(e, null, { allowCrossOrigin: this.$3 });
            return (
              t.subscribe("success", this.$22.bind(this)),
              t.subscribe("failure", this.$23.bind(this)),
              t.subscribe("progress", this.$24.bind(this)),
              t
            );
          }),
          (n.$21 = function (t) {
            (r("DOM").appendContent(document.body, t.getRoot()),
              r("submitForm")(t.getRoot()));
          }),
          (n.$22 = function (t, n) {
            this.$8(n.response);
          }),
          (n.$23 = function (t, n) {
            this.$9(n.response);
          }),
          (n.$24 = function (t, n) {
            this.$11(n.event);
          }),
          t
        );
      })();
    l.default = s;
  },
  98,
);
