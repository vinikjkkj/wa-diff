__d(
  "WAWebUploadManager",
  [
    "WAWebCreateMediaUploadMetrics",
    "WAWebUploadManagerMainThread",
    "WAWebUploadManagerWorkerBridge",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    var e = (function () {
        function e() {}
        var t = e.prototype;
        return (
          (t.encryptAndUpload = function (t) {
            var e = r("WAWebCreateMediaUploadMetrics")({
                type: t.type,
                uploadOrigin: t.uploadOrigin,
                fileOrigin: t.fileOrigin,
                userUploadAttemptCount: t.userUploadAttemptCount,
                forwardedFromWeb: t.forwardedFromWeb,
                isViewOnce: t.isViewOnce,
                isHdPhoto: t.isHdPhoto,
                uploadQpl: t.uploadQpl,
              }),
              n = r("gkx")("28987");
            t.uploadQpl.addAnnotations({
              string: { upload_path: n ? "worker" : "main" },
            });
            var o = r(
              n
                ? "WAWebUploadManagerWorkerBridge"
                : "WAWebUploadManagerMainThread",
            );
            return o.encryptAndUpload(t, e);
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
