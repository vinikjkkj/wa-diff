__d(
  "WAWebMediaUploadServiceWebLive",
  ["WAWebMediaUploadMediaWithPrep", "WAWebMediaUploadService", "WebDi.Async"],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebMediaUploadService").MediaUploadService.make(function* () {
      var e = {
        uploadMediaWithPrep: function (t, n) {
          return o("WebDi.Async").fromPromise(function () {
            return o("WAWebMediaUploadMediaWithPrep").uploadMediaWithPrep(t, n);
          });
        },
      };
      return e;
    });
    l.MediaUploadServiceWebLive = e;
  },
  98,
);
