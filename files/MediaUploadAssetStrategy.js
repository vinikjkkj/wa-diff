__d(
  "MediaUploadAssetStrategy",
  [
    "MediaUploadAssetEvent",
    "MediaUploadAssetStatus",
    "MediaUploadOperationOutcome",
    "MediaUploadPipeline",
    "Promise",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (function () {
        function t(e) {
          ((this.$1 = e.implementation),
            (this.$2 = e.executor),
            (this.$3 = e.params));
        }
        var o = t.prototype;
        return (
          (o.removeAsset = function (t) {
            var e;
            (t.updateStatusAndEmit(r("MediaUploadAssetStatus").REMOVED),
              (e = t.inFlightUpload) == null || e.cancel());
          }),
          (o.addAsset = function (t) {
            (t.sessionContext.assetsByID.set(t.assetID, t),
              t.emitAssetEvent(r("MediaUploadAssetEvent").ASSET_ADDED));
          }),
          (o.scheduleUpload = function (t) {
            var e = this;
            return (
              t.updateStatusAndEmit(r("MediaUploadAssetStatus").SCHEDULED),
              this.$2.schedule(function () {
                return e.$4(t);
              })
            );
          }),
          (o.$4 = function (o) {
            var t = this;
            if (o.isRemoved()) return (e || (e = n("Promise"))).resolve();
            o.updateStatusAndEmit(r("MediaUploadAssetStatus").PROCESSING);
            var a = new (r("MediaUploadPipeline"))(this.$3);
            (a.addCancelableStep(function () {
              return t.$1.runClientLazyLoading(o);
            }),
              a.addCancelableStep(function () {
                return t.$1.runLocalAssetStategy(o);
              }),
              a.addCancelableStep(function () {
                return (
                  o.updateStatusAndEmit(r("MediaUploadAssetStatus").UPLOADING),
                  t.$1.runNetworkAssetStategy(o)
                );
              }));
            var i = a.run();
            return (
              (o.inFlightUpload = i),
              i.promise
                .then(function (e) {
                  return t.$5(o, e);
                })
                .catch(function (e) {
                  (t.$3.reportRecoverableError(
                    "Unexpected failure during asset pipeline execution",
                    e,
                  ),
                    o.updateStatusAndEmit(r("MediaUploadAssetStatus").FAILED));
                })
            );
          }),
          (o.$5 = function (t, n) {
            if (!t.isRemoved())
              switch (n) {
                case r("MediaUploadOperationOutcome").SUCCESS:
                  t.updateStatusAndEmit(r("MediaUploadAssetStatus").COMPLETED);
                  break;
                case r("MediaUploadOperationOutcome").CANCELED:
                  t.updateStatusAndEmit(r("MediaUploadAssetStatus").REMOVED);
                  break;
                default:
                  t.updateStatusAndEmit(r("MediaUploadAssetStatus").FAILED);
              }
          }),
          t
        );
      })();
    l.default = s;
  },
  98,
);
