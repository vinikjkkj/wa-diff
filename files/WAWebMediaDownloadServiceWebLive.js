__d(
  "WAWebMediaDownloadServiceWebLive",
  ["JSResourceForInteraction", "WAWebMediaDownloadService", "WebDi.Async"],
  function (t, n, r, o, a, i, l) {
    var e = r("JSResourceForInteraction")(
        "WAWebMediaDownloadMmsThumbnail",
      ).__setRef("WAWebMediaDownloadServiceWebLive"),
      s = o("WAWebMediaDownloadService").MediaDownloadService.make(
        function* () {
          var t = yield* o("WebDi.Async").fromPromise(function () {
              return e.load();
            }),
            n = {
              downloadMmsThumbnail: function (n) {
                return o("WebDi.Async").fromPromise(function () {
                  return t(n);
                });
              },
            };
          return n;
        },
      );
    l.MediaDownloadServiceWebLive = s;
  },
  98,
);
