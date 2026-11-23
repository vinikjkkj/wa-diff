__d(
  "WAWebMediaDownloadServiceClient",
  ["WAWebMediaDownloadService"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return {
        downloadMmsThumbnail: function (n) {
          return e(
            o("WAWebMediaDownloadService").MediaDownloadService,
            function (e) {
              return e.downloadMmsThumbnail(n);
            },
          );
        },
      };
    }
    l.mediaDownloadServiceClient = e;
  },
  98,
);
