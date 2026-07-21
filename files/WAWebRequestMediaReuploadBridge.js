__d(
  "WAWebRequestMediaReuploadBridge",
  ["WAWebProtobufsMmsRetry.pb", "WAWebRequestMediaReuploadManager"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return o("WAWebRequestMediaReuploadManager")
        .RequestMediaReuploadManager.requestMediaReupload(e)
        .then(function (e) {
          var t = e.directPath,
            n = e.result;
          return { status: s(n), directPath: t, isMD: !0 };
        });
    }
    function s(e) {
      if (e != null)
        switch (e) {
          case o("WAWebProtobufsMmsRetry.pb").MediaRetryNotification$ResultType
            .SUCCESS:
            return 200;
          case o("WAWebProtobufsMmsRetry.pb").MediaRetryNotification$ResultType
            .NOT_FOUND:
          case o("WAWebProtobufsMmsRetry.pb").MediaRetryNotification$ResultType
            .DECRYPTION_ERROR:
            return 404;
          case o("WAWebProtobufsMmsRetry.pb").MediaRetryNotification$ResultType
            .GENERAL_ERROR:
            return 500;
        }
      return 500;
    }
    l.default = e;
  },
  98,
);
