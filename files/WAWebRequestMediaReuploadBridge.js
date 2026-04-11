__d(
  "WAWebRequestMediaReuploadBridge",
  ["WAWebProtobufsMmsRetry.pb", "WAWebRequestMediaReuploadManager"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
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
    function s(t) {
      return o("WAWebRequestMediaReuploadManager")
        .RequestMediaReuploadManager.requestMediaReupload(t)
        .then(function (t) {
          var n = t.directPath,
            r = t.result;
          return { status: e(r), directPath: n, isMD: !0 };
        });
    }
    l.default = s;
  },
  98,
);
