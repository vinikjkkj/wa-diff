__d(
  "WAWebUploadManager",
  ["WAWebCreateMediaUploadMetrics", "WAWebUploadManagerMainThread"],
  function (t, n, r, o, a, i, l) {
    var e = (function () {
        function e() {}
        var t = e.prototype;
        return (
          (t.encryptAndUpload = function (t) {
            var e = r("WAWebCreateMediaUploadMetrics")({
              type: t.type,
              uploadOrigin: t.uploadOrigin,
              userUploadAttemptCount: t.userUploadAttemptCount,
              forwardedFromWeb: t.forwardedFromWeb,
              isViewOnce: t.isViewOnce,
              isHdPhoto: t.isHdPhoto,
              uploadQpl: t.uploadQpl,
            });
            return r("WAWebUploadManagerMainThread").encryptAndUpload(t, e);
          }),
          (t.unencryptedUpload = function (t) {
            return r("WAWebUploadManagerMainThread").unencryptedUpload(t);
          }),
          (t.uploadCoverPhoto = function (t) {
            return r("WAWebUploadManagerMainThread").uploadCoverPhoto(t);
          }),
          e
        );
      })(),
      s = new e();
    l.default = s;
  },
  98,
);
