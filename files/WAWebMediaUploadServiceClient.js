__d(
  "WAWebMediaUploadServiceClient",
  ["WAWebMediaUploadService"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return {
        uploadMediaWithPrep: function (n, r) {
          return e(
            o("WAWebMediaUploadService").MediaUploadService,
            function (e) {
              return e.uploadMediaWithPrep(n, r);
            },
          );
        },
      };
    }
    l.mediaUploadServiceClient = e;
  },
  98,
);
