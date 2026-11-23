__d(
  "WAWebMediaUploadServiceWebLive",
  ["JSResourceForInteraction", "WAWebMediaUploadService", "WebDi.Async"],
  function (t, n, r, o, a, i, l) {
    var e = r("JSResourceForInteraction")(
        "WAWebMediaUploadMediaWithPrep",
      ).__setRef("WAWebMediaUploadServiceWebLive"),
      s = o("WAWebMediaUploadService").MediaUploadService.make(function* () {
        var t = yield* o("WebDi.Async").fromPromise(function () {
            return e.load();
          }),
          n = t.uploadMediaWithPrep,
          r = {
            uploadMediaWithPrep: function (t, r) {
              return o("WebDi.Async").fromPromise(function () {
                return n(t, r);
              });
            },
          };
        return r;
      });
    l.MediaUploadServiceWebLive = s;
  },
  98,
);
