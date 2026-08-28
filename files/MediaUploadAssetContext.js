__d(
  "MediaUploadAssetContext",
  [
    "MediaUploadAssetEvent",
    "MediaUploadAssetStatus",
    "MediaUploadBytesSummary",
    "MediaUploadOperationOutcome",
    "MediaUploadStageEvent",
    "MediaUploadTime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e(e) {
        var t = e.assetRequest,
          n = e.emitter,
          o = e.params,
          a = e.progressCalculator,
          i = e.retryState,
          l = e.sessionContext;
        ((this.sessionContext = l),
          (this.request = t),
          (this.assetID = t.assetID),
          (this.asset = t.asset),
          (this.retryState = i),
          (this.$2 = n),
          (this.$3 = a),
          (this.$1 = o.currentTimeProvider),
          (this.$4 = r("MediaUploadAssetStatus").REQUESTED),
          (this.createdAt = this.$1()),
          (this.uploadSummary = new (r("MediaUploadBytesSummary"))(o)),
          (this.progress = {
            completedStages: new Set(),
            calculated: { rawValue: 0, percentageComplete: 0 },
          }));
      }
      var t = e.prototype;
      return (
        (t.emitAssetEvent = function (t) {
          (this.$2.emitAssetEvent(t, this),
            (t === r("MediaUploadAssetEvent").ASSET_SUCCEED ||
              t === r("MediaUploadAssetEvent").ASSET_REMOVED) &&
              this.recalculateProgressAndEmit());
        }),
        (t.emitStageEvent = function (t, n) {
          (this.$2.emitStageEvent(t, this, n),
            t === r("MediaUploadStageEvent").STAGE_SUCCEED &&
              (this.progress.completedStages.add(n),
              this.recalculateProgressAndEmit()),
            t === r("MediaUploadStageEvent").STAGE_PROGRESS &&
              this.recalculateProgressAndEmit());
        }),
        (t.emitStageEventForOperationOutcome = function (t, n) {
          t === r("MediaUploadOperationOutcome").SUCCESS
            ? this.emitStageEvent(r("MediaUploadStageEvent").STAGE_SUCCEED, n)
            : t === r("MediaUploadOperationOutcome").CANCELED
              ? this.emitStageEvent(
                  r("MediaUploadStageEvent").STAGE_CANCELED,
                  n,
                )
              : this.emitStageEvent(r("MediaUploadStageEvent").STAGE_FAILED, n);
        }),
        (t.recalculateProgressAndEmit = function () {
          var e = this.$3.calculateAssetProgress(this);
          (this.sessionContext.recalculateProgressAndEmit(),
            e &&
              this.emitAssetEvent(r("MediaUploadAssetEvent").ASSET_PROGRESS));
        }),
        (t.$5 = function () {
          (this.uploadSummary.reset(),
            this.progress.completedStages.clear(),
            this.recalculateProgressAndEmit());
        }),
        (t.updateStatusAndEmit = function (t) {
          if (this.$4 !== t)
            switch (((this.$4 = t), t)) {
              case r("MediaUploadAssetStatus").REMOVED:
                this.emitAssetEvent(r("MediaUploadAssetEvent").ASSET_REMOVED);
                break;
              case r("MediaUploadAssetStatus").FAILED:
                this.emitAssetEvent(r("MediaUploadAssetEvent").ASSET_FAILED);
                break;
              case r("MediaUploadAssetStatus").COMPLETED:
                this.emitAssetEvent(r("MediaUploadAssetEvent").ASSET_SUCCEED);
                break;
              case r("MediaUploadAssetStatus").PROCESSING:
                this.emitAssetEvent(r("MediaUploadAssetEvent").ASSET_STARTED);
                break;
              case r("MediaUploadAssetStatus").UPLOADING:
                this.progress.lastAttemptStartedAt = this.$1();
                break;
              case r("MediaUploadAssetStatus").REQUESTED:
              case r("MediaUploadAssetStatus").SCHEDULED:
                this.$5();
                break;
            }
        }),
        (t.isCompleted = function () {
          return this.$4 === r("MediaUploadAssetStatus").COMPLETED;
        }),
        (t.isSchedulable = function () {
          return (
            this.$4 === r("MediaUploadAssetStatus").REQUESTED ||
            this.$4 === r("MediaUploadAssetStatus").FAILED
          );
        }),
        (t.isRemoved = function () {
          return this.$4 === r("MediaUploadAssetStatus").REMOVED;
        }),
        (t.isFailed = function () {
          return this.$4 === r("MediaUploadAssetStatus").FAILED;
        }),
        (t.__composeBaseSnapshot = function () {
          return {
            asset: this.asset,
            assetID: this.assetID,
            status: this.$4,
            createdAtMs: o("MediaUploadTime").timeToMilliseconds(
              this.createdAt,
            ),
            lastUploadStartedAtMs: o("MediaUploadTime").maybeTimeToMilliseconds(
              this.progress.lastAttemptStartedAt,
            ),
            metadata:
              this.metadata == null
                ? void 0
                : {
                    width: this.metadata.width,
                    height: this.metadata.height,
                    isSpherical: this.metadata.isSpherical,
                    durationMs: o("MediaUploadTime").maybeTimeToMilliseconds(
                      this.metadata.duration,
                    ),
                  },
            retries: { totalRetryAttempts: this.retryState.getRetryAttempts() },
            uploadSummary: this.uploadSummary.computeSnapshot(),
            percentageComplete: this.progress.calculated.percentageComplete,
          };
        }),
        e
      );
    })();
    l.default = e;
  },
  98,
);
