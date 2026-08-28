__d(
  "VideoCaptionSyntaxErrorTypedLogger",
  ["Banzai", "GeneratedLoggerUtils"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
        function e() {
          this.$1 = {};
        }
        var t = e.prototype;
        return (
          (t.log = function (t) {
            n("GeneratedLoggerUtils").log(
              "logger:VideoCaptionSyntaxErrorLoggerConfig",
              this.$1,
              n("Banzai").BASIC,
              t,
            );
          }),
          (t.logVital = function (t) {
            n("GeneratedLoggerUtils").log(
              "logger:VideoCaptionSyntaxErrorLoggerConfig",
              this.$1,
              n("Banzai").VITAL,
              t,
            );
          }),
          (t.logImmediately = function (t) {
            n("GeneratedLoggerUtils").log(
              "logger:VideoCaptionSyntaxErrorLoggerConfig",
              this.$1,
              { signal: !0 },
              t,
            );
          }),
          (t.clear = function () {
            return ((this.$1 = {}), this);
          }),
          (t.getData = function () {
            return babelHelpers.extends({}, this.$1);
          }),
          (t.updateData = function (t) {
            return ((this.$1 = babelHelpers.extends({}, this.$1, t)), this);
          }),
          (t.setNewErrorCode = function (t) {
            return ((this.$1.new_error_code = t), this);
          }),
          (t.setNewErrorMessage = function (t) {
            return ((this.$1.new_error_message = t), this);
          }),
          (t.setOldErrorCode = function (t) {
            return ((this.$1.old_error_code = t), this);
          }),
          (t.setOldErrorMessage = function (t) {
            return ((this.$1.old_error_message = t), this);
          }),
          (t.setShouldShowToUser = function (t) {
            return ((this.$1.should_show_to_user = t), this);
          }),
          (t.setSource = function (t) {
            return ((this.$1.source = t), this);
          }),
          (t.setUploadedCaptionFile = function (t) {
            return ((this.$1.uploaded_caption_file = t), this);
          }),
          (t.setVideoID = function (t) {
            return ((this.$1.video_id = t), this);
          }),
          e
        );
      })(),
      l = {
        new_error_code: !0,
        new_error_message: !0,
        old_error_code: !0,
        old_error_message: !0,
        should_show_to_user: !0,
        source: !0,
        uploaded_caption_file: !0,
        video_id: !0,
      };
    i.default = e;
  },
  66,
);
