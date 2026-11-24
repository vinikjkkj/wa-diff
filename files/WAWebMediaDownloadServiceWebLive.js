__d(
  "WAWebMediaDownloadServiceWebLive",
  [
    "WAWebMediaDownloadMmsThumbnail",
    "WAWebMediaDownloadService",
    "WebDi.Async",
  ],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebMediaDownloadService").MediaDownloadService.make(
      function* () {
        var e = {
          downloadMmsThumbnail: function (t) {
            return o("WebDi.Async").fromPromise(function () {
              return r("WAWebMediaDownloadMmsThumbnail")(t);
            });
          },
        };
        return e;
      },
    );
    l.MediaDownloadServiceWebLive = e;
  },
  98,
);
