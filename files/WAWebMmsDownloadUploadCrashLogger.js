__d(
  "WAWebMmsDownloadUploadCrashLogger",
  ["$InternalEnum"],
  function (t, n, r, o, a, i) {
    var e = n("$InternalEnum").Mirrored([
        "DOWNLOAD_STARTED",
        "DOWNLOAD_FINISHED",
        "DOWNLOAD_DECRYPTION_STARTED",
        "DOWNLOAD_DECRYPTION_FINISHED",
        "DOWNLOAD_ERROR",
        "UPLOAD_STARTED",
        "UPLOAD_FINISHED",
        "UPLOAD_BLOB_TO_ARRAY_BUFFER_STARTED",
        "UPLOAD_BLOB_TO_ARRAY_BUFFER_FINISHED",
        "UPLOAD_ENCRYPTION_STARTED",
        "UPLOAD_ENCRYPTION_FINISHED",
        "UPLOAD_ERROR",
      ]),
      l = (function () {
        function e() {}
        var t = e.prototype;
        return (
          (t.init = function () {}),
          (t.reset = function () {}),
          (t.mark = function () {}),
          e
        );
      })(),
      s = new l();
    ((i.ProgressType = e), (i.downloadUploadCrashLogger = s));
  },
  66,
);
