__d(
  "MediaUploadRetryableOperation",
  [
    "MediaUploadCancelablePromise",
    "MediaUploadOperationAttemptOutcome",
    "MediaUploadOperationOutcome",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e(e, t, n) {
        var o = this;
        ((this.$4 = null),
          (this.$1 = e),
          (this.$2 = t),
          (this.$3 = n),
          (this.cancelablePromise = new (r("MediaUploadCancelablePromise"))(
            function (e) {
              return (
                o.$5(e),
                {
                  cancel: function () {
                    var t;
                    ((t = o.$4) == null || t.cancel(),
                      (o.$4 = null),
                      e(r("MediaUploadOperationOutcome").CANCELED));
                  },
                }
              );
            },
          )));
      }
      e.createAsPromise = function (n, r, o) {
        var t = new e(n, r, o);
        return t.cancelablePromise;
      };
      var t = e.prototype;
      return (
        (t.$5 = function (t) {
          var e = this,
            n = this.$1();
          ((this.$4 = n),
            this.$3.promiseTerminator(
              n.promise.then(
                function (n) {
                  ((e.$4 = null), e.$6(t, n));
                },
                function (n) {
                  throw (
                    (e.$4 = null),
                    e.$6(
                      t,
                      r("MediaUploadOperationAttemptOutcome")
                        .NON_TRANSIENT_FAILURE,
                    ),
                    n
                  );
                },
              ),
            ));
        }),
        (t.$6 = function (t, n) {
          switch (n) {
            case r("MediaUploadOperationAttemptOutcome").CANCELED:
              t(r("MediaUploadOperationOutcome").CANCELED);
              break;
            case r("MediaUploadOperationAttemptOutcome").SUCCESS:
              t(r("MediaUploadOperationOutcome").SUCCESS);
              break;
            case r("MediaUploadOperationAttemptOutcome").NON_TRANSIENT_FAILURE:
              t(r("MediaUploadOperationOutcome").FAILED_NON_TRANSIENT);
              break;
            case r("MediaUploadOperationAttemptOutcome").TRANSIENT_FAILURE:
              this.$7(t, !1);
              break;
            case r("MediaUploadOperationAttemptOutcome")
              .TRANSIENT_FAILURE_IMMEDIATE_RETRY:
              this.$7(t, !0);
              break;
          }
        }),
        (t.$7 = function (t, n) {
          var e = this;
          if (
            (this.$2.increaseRetryAttemptCounter(),
            this.$2.exceedTotalDuration())
          )
            t(r("MediaUploadOperationOutcome").FAILED_OUT_OF_TIME);
          else if (this.$2.exceedTotalRetries())
            t(r("MediaUploadOperationOutcome").FAILED_NO_MORE_RETRIES);
          else if (n) this.$5(t);
          else {
            var o = this.$2.calculateBackoffDelay();
            this.$4 = this.$3.delayedExecutor(
              o,
              function () {
                return e.$5(t);
              },
              function () {
                return t(r("MediaUploadOperationOutcome").CANCELED);
              },
            );
          }
        }),
        e
      );
    })();
    l.default = e;
  },
  98,
);
