__d(
  "MediaUploadFBNetworkAssetStrategy",
  ["MediaUploadPipeline", "MediaUploadRetryableOperation"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e(e, t, n, r) {
        ((this.$1 = e),
          (this.startRequest = t),
          (this.uploadServiceRequest = n),
          (this.receiveRequest = r));
      }
      var t = e.prototype;
      return (
        (t.run = function (t) {
          var e = this,
            n = t.asset.dataAsFile();
          if (n == null)
            throw this.$1.createThrowableError(
              "Browser is not compatible with current version of the SDK",
            );
          var o = new (r("MediaUploadPipeline"))(this.$1);
          return (
            o.addCancelableStep(function () {
              return r("MediaUploadRetryableOperation").createAsPromise(
                function () {
                  return e.startRequest.send(t);
                },
                t.retryState,
                e.$1,
              );
            }),
            o.addCancelableStep(function () {
              return r("MediaUploadRetryableOperation").createAsPromise(
                function () {
                  return e.uploadServiceRequest.send(
                    t,
                    n,
                    e.startRequest.retriveResponse(t),
                  );
                },
                t.retryState,
                e.$1,
              );
            }),
            o.addCancelableStep(function () {
              return r("MediaUploadRetryableOperation").createAsPromise(
                function () {
                  return e.receiveRequest.send(
                    t,
                    e.startRequest.retriveResponse(t),
                    e.uploadServiceRequest.retriveResponse(t),
                  );
                },
                t.retryState,
                e.$1,
              );
            }),
            o.run()
          );
        }),
        (t.cancel = function () {}),
        e
      );
    })();
    l.default = e;
  },
  98,
);
