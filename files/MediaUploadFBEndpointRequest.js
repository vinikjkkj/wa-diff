__d(
  "MediaUploadFBEndpointRequest",
  [
    "AsyncRequest",
    "MediaUploadCancelablePromise",
    "MediaUploadOperationAttemptOutcome",
    "MediaUploadStageEvent",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e() {}
      var t = e.prototype;
      return (
        (t.send = function (t, n) {
          var e = this;
          return new (r("MediaUploadCancelablePromise"))(function (o) {
            n.emitStageEvent(r("MediaUploadStageEvent").STAGE_STARTED, t.stage);
            var a = t.createPayload();
            if (a == null) {
              (n.emitStageEvent(
                r("MediaUploadStageEvent").STAGE_FAILED,
                t.stage,
              ),
                o(
                  r("MediaUploadOperationAttemptOutcome").NON_TRANSIENT_FAILURE,
                ));
              return;
            }
            var i = new (r("AsyncRequest"))()
              .setAllowCrossOrigin(!0)
              .setURI(t.uri)
              .setData(a)
              .setRequestHeader(
                "X_FB_VIDEO_WATERFALL_ID",
                n.sessionContext.sessionID,
              )
              .setProgressHandler(function () {
                t.networkNotifier.notifyOnProgress(n, t.stage);
              })
              .setHandler(function (r) {
                o(e.$1(t, n, r));
              })
              .setErrorHandler(function (r) {
                o(e.$2(t, n, r));
              });
            if (i.send())
              return (
                t.networkNotifier.notifyOnNewRequest(n, t.stage, function () {
                  return i.abort();
                }),
                {
                  cancel: function () {
                    (t.networkNotifier.notifyOnAbandon(n, t.stage), i.abort());
                  },
                }
              );
            o(r("MediaUploadOperationAttemptOutcome").NON_TRANSIENT_FAILURE);
          });
        }),
        (t.$1 = function (t, n, o) {
          var e, a;
          if (
            ((e = o.payload) == null ? void 0 : e.__graph_error_forwarded) ===
            !0
          ) {
            var i = o.payload.error;
            return (
              (o.error = 400),
              (o.transientError = !1),
              (o.errorSummary = i == null ? void 0 : i.message),
              (o.errorDescription = i == null ? void 0 : i.message),
              this.$2(t, n, o)
            );
          }
          return (
            t.networkNotifier.notifyOnResponse(n, t.stage),
            (a = n.retryState) == null || a.resetBackoff(),
            t.acceptSuccessfulResponse(o),
            n.emitStageEvent(r("MediaUploadStageEvent").STAGE_SUCCEED, t.stage),
            r("MediaUploadOperationAttemptOutcome").SUCCESS
          );
        }),
        (t.$2 = function (t, n, o) {
          var e = o.error < 1e3,
            a = o.error > 9999;
          (e || a
            ? t.networkNotifier.notifyOnResponse(n, t.stage)
            : t.networkNotifier.notifyOnTransportError(n, t.stage),
            t.acceptErrorResponse(o),
            n.emitStageEvent(r("MediaUploadStageEvent").STAGE_FAILED, t.stage));
          var i =
            (e && o.error >= 400 && o.error < 500) || (a && !o.transientError);
          return i
            ? r("MediaUploadOperationAttemptOutcome").NON_TRANSIENT_FAILURE
            : r("MediaUploadOperationAttemptOutcome").TRANSIENT_FAILURE;
        }),
        e
      );
    })();
    l.default = e;
  },
  98,
);
