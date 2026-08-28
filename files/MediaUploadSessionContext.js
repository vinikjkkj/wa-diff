__d(
  "MediaUploadSessionContext",
  [
    "MediaUploadExtrasStorage",
    "MediaUploadSessionEvent",
    "MediaUploadSessionStatus",
    "MediaUploadTime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new Set([
        r("MediaUploadSessionStatus").COMPLETED,
        r("MediaUploadSessionStatus").CANCELED,
        r("MediaUploadSessionStatus").FAILED,
      ]),
      s = (function () {
        function t(e) {
          var t = e.emitter,
            n = e.params,
            o = e.progressCalculator,
            a = e.sessionID;
          ((this.assetsByID = new Map()),
            (this.sessionID = a),
            (this.$1 = t),
            (this.$2 = o),
            (this.extras = new (r("MediaUploadExtrasStorage"))(n)),
            (this.$4 = n.currentTimeProvider),
            (this.$5 = n.randomStringProvider),
            (this.$6 = r("MediaUploadSessionStatus").UNCONFIRMED),
            (this.$3 = { createdAt: this.$4() }),
            (this.progress = {
              retryID: this.$5(),
              publishingExtrasProvided: !1,
              publishingDone: !1,
              percentageComplete: 0,
            }),
            (this.releaseOnFinish = []));
        }
        var n = t.prototype;
        return (
          (n.emitSessionEvent = function (t) {
            (this.$1.emitSessionEvent(t, this),
              t === r("MediaUploadSessionEvent").PUBLISH_SUCCEED &&
                ((this.progress.publishingDone = !0),
                this.recalculateProgressAndEmit()),
              t === r("MediaUploadSessionEvent").SESSION_FINISHED && this.$7());
          }),
          (n.renewRetryID = function () {
            this.progress.retryID = this.$5();
          }),
          (n.updateLastError = function (t) {
            this.__lastError = t;
          }),
          (n.recalculateProgressAndEmit = function () {
            this.$2.calculateSessionProgress(this) &&
              this.emitSessionEvent(
                r("MediaUploadSessionEvent").SESSION_PROGRESS,
              );
          }),
          (n.$7 = function () {
            for (; this.releaseOnFinish.length > 0; ) {
              var e = this.releaseOnFinish.pop();
              e.cancel();
            }
          }),
          (n.updateStatusAndEmit = function (n) {
            if (this.$6 !== n)
              switch (
                ((this.$6 = n),
                this.progress.terminalStatus == null &&
                  e.has(n) &&
                  ((this.progress.terminalStatus = n),
                  this.emitSessionEvent(
                    r("MediaUploadSessionEvent").SESSION_FINISHED,
                  )),
                n)
              ) {
                case r("MediaUploadSessionStatus").CONFIRMED:
                  ((this.progress.terminalStatus = void 0),
                    (this.$3.confirmedAt = this.$4()),
                    this.emitSessionEvent(
                      r("MediaUploadSessionEvent").SESSION_CONFIRMED,
                    ));
                  break;
                case r("MediaUploadSessionStatus").COMPLETED:
                  this.emitSessionEvent(
                    r("MediaUploadSessionEvent").SESSION_SUCCEED,
                  );
                  break;
                case r("MediaUploadSessionStatus").CANCELED:
                  this.emitSessionEvent(
                    r("MediaUploadSessionEvent").SESSION_CANCELED,
                  );
                  break;
                case r("MediaUploadSessionStatus").FAILED:
                  this.emitSessionEvent(
                    r("MediaUploadSessionEvent").SESSION_FAILED,
                  );
                  break;
                case r("MediaUploadSessionStatus").PUBLISHING:
                  this.emitSessionEvent(
                    r("MediaUploadSessionEvent").PUBLISH_STARTED,
                  );
                  break;
                default:
              }
          }),
          (n.getActiveAssets = function () {
            var e = [];
            for (var t of this.assetsByID.values()) t.isRemoved() || e.push(t);
            return e;
          }),
          (n.isCanceled = function () {
            return this.$6 === r("MediaUploadSessionStatus").CANCELED;
          }),
          (n.isPublished = function () {
            return this.$6 === r("MediaUploadSessionStatus").COMPLETED;
          }),
          (n.isPublishing = function () {
            return this.$6 === r("MediaUploadSessionStatus").PUBLISHING;
          }),
          (n.isConfirmed = function () {
            return this.$6 === r("MediaUploadSessionStatus").CONFIRMED;
          }),
          (n.isFailed = function () {
            return this.$6 === r("MediaUploadSessionStatus").FAILED;
          }),
          (n.__composeBaseSnapshot = function () {
            return {
              sessionID: this.sessionID,
              retryID: this.progress.retryID,
              status: this.$6,
              extras: this.extras,
              timing: {
                createdAtMs: o("MediaUploadTime").timeToMilliseconds(
                  this.$3.createdAt,
                ),
                confirmedAtMs: o("MediaUploadTime").maybeTimeToMilliseconds(
                  this.$3.confirmedAt,
                ),
              },
              terminalStatus: this.progress.terminalStatus,
              percentageComplete: this.progress.percentageComplete,
              publishingResponse: this.progress.publishingResponse,
              cancelReason: this.progress.cancelReason,
            };
          }),
          t
        );
      })();
    l.default = s;
  },
  98,
);
