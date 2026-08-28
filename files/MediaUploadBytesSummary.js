__d(
  "MediaUploadBytesSummary",
  ["MediaUploadTime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e(e) {
        this.$1 = e;
      }
      var t = e.prototype;
      return (
        (t.reset = function () {
          this.$2 = null;
        }),
        (t.updateForUploadStart = function (t) {
          var e = this.$1.currentTimeProvider();
          this.$2 = {
            fullyCompleted: !1,
            startedAt: e,
            updatedAt: e,
            totalBytes: t,
            uploadedBytes: 0,
            skippedUpload: !1,
          };
        }),
        (t.updateForUploadSkip = function (t) {
          var e = this.$1.currentTimeProvider();
          this.$2 = {
            fullyCompleted: !0,
            startedAt: e,
            updatedAt: e,
            finishedAt: e,
            totalBytes: t,
            uploadedBytes: t,
            skippedUpload: !0,
          };
        }),
        (t.updateForProgress = function (t) {
          var e = this.$2;
          if (e == null) {
            this.$1.reportRecoverableError(
              "Upload stats have not been initialized",
            );
            return;
          }
          ((e.uploadedBytes = t),
            (e.updatedAt = this.$1.currentTimeProvider()));
        }),
        (t.updateForUploadComplete = function () {
          var e = this.$2;
          if (e == null) {
            this.$1.reportRecoverableError(
              "Upload stats have not been initialized",
            );
            return;
          }
          (this.updateForProgress(e.totalBytes),
            (e.fullyCompleted = !0),
            (e.uploadedBytes = e.totalBytes));
        }),
        (t.updateForUploadAbandoned = function () {
          var e = this.$2;
          if (e == null) {
            this.$1.reportRecoverableError(
              "Upload stats have not been initialized",
            );
            return;
          }
          e.finishedAt = this.$1.currentTimeProvider();
        }),
        (t.computeSpeedBps = function () {
          var e = this.$2;
          if (e == null || e.skippedUpload) return null;
          var t = o("MediaUploadTime").timeToSeconds(
            o("MediaUploadTime").subtractTime(e.updatedAt, e.startedAt),
          );
          return t > 0.1 ? e.uploadedBytes / t : 0;
        }),
        (t.computeUploadedPortion = function () {
          var e = this.$2;
          return e == null
            ? null
            : e.fullyCompleted
              ? 1
              : e.totalBytes === 0
                ? 0
                : (1 * e.uploadedBytes) / e.totalBytes;
        }),
        (t.computeSnapshot = function () {
          var e = this.$2;
          return e == null
            ? null
            : {
                uploadedBytes: e.uploadedBytes,
                speedBps: this.computeSpeedBps(),
                skippedUpload: e.skippedUpload,
                startedAtMs: o("MediaUploadTime").timeToMilliseconds(
                  e.startedAt,
                ),
                finishedAtMs: o("MediaUploadTime").maybeTimeToMilliseconds(
                  e.finishedAt,
                ),
              };
        }),
        e
      );
    })();
    l.default = e;
  },
  98,
);
