__d(
  "MediaUploadSessionStrategy",
  [
    "MediaUploadCancelReason",
    "MediaUploadClientResult",
    "MediaUploadSessionEvent",
    "MediaUploadSessionStatus",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e(e) {
        ((this.$1 = e.implementation),
          (this.$2 = e.assetStrategy),
          (this.$3 = e.params));
      }
      var t = e.prototype;
      return (
        (t.$4 = function (t) {
          if (t.isConfirmed() && t.progress.publishingExtrasProvided) {
            var e = t.getActiveAssets();
            for (var n of e)
              if (n.isFailed()) {
                t.updateStatusAndEmit(r("MediaUploadSessionStatus").FAILED);
                return;
              }
            e.every(function (e) {
              return e.isCompleted();
            }) && this.$5(t);
          }
        }),
        (t.$5 = function (t) {
          t.updateStatusAndEmit(r("MediaUploadSessionStatus").PUBLISHING);
          var e = [];
          for (var n of t.assetsByID.values()) n.isCompleted() && e.push(n);
          var o = this.$1
            .publish(t, e)
            .then(function (e) {
              ((t.progress.publishingResponse = e.rawResponse),
                e.isSuccessful
                  ? (t.emitSessionEvent(
                      r("MediaUploadSessionEvent").PUBLISH_SUCCEED,
                    ),
                    t.updateStatusAndEmit(
                      r("MediaUploadSessionStatus").COMPLETED,
                    ))
                  : (t.updateLastError({
                      rawErrorCode: e.errorCode,
                      rawErrorObject: e.rawErrorObject,
                    }),
                    t.emitSessionEvent(
                      r("MediaUploadSessionEvent").PUBLISH_FAILED,
                    ),
                    t.updateStatusAndEmit(r("MediaUploadSessionStatus").FAILED),
                    t.updateLastError()));
            })
            .catch(function (e) {
              (t.updateLastError({ rawErrorObject: e }),
                t.emitSessionEvent(r("MediaUploadSessionEvent").PUBLISH_FAILED),
                t.updateStatusAndEmit(r("MediaUploadSessionStatus").FAILED),
                t.updateLastError());
            });
          this.$3.promiseTerminator(o);
        }),
        (t.$6 = function (t, n) {
          var e = this;
          this.$2.scheduleUpload(n).finally(function () {
            return e.$4(t);
          });
        }),
        (t.$7 = function (t) {
          return t.isPublished()
            ? r("MediaUploadClientResult").SESSION_ALREADY_PUBLISHED
            : t.isPublishing()
              ? r("MediaUploadClientResult").SESSION_ALREADY_PUBLISHING
              : t.isCanceled()
                ? r("MediaUploadClientResult").SESSION_ALREADY_CANCELED
                : r("MediaUploadClientResult").ACCEPTED;
        }),
        (t.$8 = function (t) {
          var e = this;
          (t.releaseOnFinish.push(
            this.$3.registerUnloadHook(function () {
              e.cancel(t, r("MediaUploadCancelReason").UNLOAD_HOOK);
            }),
          ),
            t.updateStatusAndEmit(r("MediaUploadSessionStatus").CONFIRMED));
        }),
        (t.cancel = function (t, n) {
          var e = this.$7(t);
          if (e !== r("MediaUploadClientResult").ACCEPTED) return e;
          ((t.progress.cancelReason = n),
            t.updateStatusAndEmit(r("MediaUploadSessionStatus").CANCELED));
          for (var o of t.assetsByID.values()) this.$2.removeAsset(o);
          return r("MediaUploadClientResult").ACCEPTED;
        }),
        (t.removeAsset = function (t, n) {
          var e = this.$7(t);
          if (e !== r("MediaUploadClientResult").ACCEPTED) return e;
          var o = t.assetsByID.get(n);
          return o == null
            ? r("MediaUploadClientResult").ASSET_NOT_FOUND
            : (this.$2.removeAsset(o),
              this.$4(t),
              r("MediaUploadClientResult").ACCEPTED);
        }),
        (t.uploadAsset = function (t, n) {
          var e = this.$7(t);
          if (e !== r("MediaUploadClientResult").ACCEPTED) return e;
          var o = t.assetsByID.get(n.assetID);
          if (o != null && !o.isRemoved())
            return r("MediaUploadClientResult").ASSET_ALREADY_EXISTS;
          var a = this.$1.createAssetContext(t, n);
          return (
            this.$2.addAsset(a),
            this.$6(t, a),
            r("MediaUploadClientResult").ACCEPTED
          );
        }),
        (t.syncAssetUploads = function (t, n) {
          var e = this.$7(t);
          if (e !== r("MediaUploadClientResult").ACCEPTED) return e;
          var o = new Set(
              n.map(function (e) {
                return e.assetID;
              }),
            ),
            a = new Set(t.assetsByID.keys());
          for (var i in a)
            if (!o.has(i)) {
              var l = t.assetsByID.get(i);
              l != null && this.$2.removeAsset(l);
            }
          return (
            this.uploadAssets(t, n),
            r("MediaUploadClientResult").ACCEPTED
          );
        }),
        (t.uploadAssets = function (t, n) {
          var e = this,
            r = {};
          return (
            n.forEach(function (n) {
              return (r[n.assetID] = e.uploadAsset(t, n));
            }),
            r
          );
        }),
        (t.updateSessionExtras = function (t, n, o) {
          var e = this.$7(t);
          return e !== r("MediaUploadClientResult").ACCEPTED
            ? e
            : (n(t.extras),
              o && (t.progress.publishingExtrasProvided = !0),
              r("MediaUploadClientResult").ACCEPTED);
        }),
        (t.retry = function (t) {
          var e = this.$7(t);
          if (e !== r("MediaUploadClientResult").ACCEPTED) return e;
          if (!t.isFailed())
            return r("MediaUploadClientResult").SESSION_NOT_FAILED;
          (t.renewRetryID(), this.$8(t));
          for (var n of t.assetsByID.values())
            n.isSchedulable() && this.$6(t, n);
          return (this.$4(t), r("MediaUploadClientResult").ACCEPTED);
        }),
        (t.confirm = function (t) {
          var e = this.$7(t);
          return e !== r("MediaUploadClientResult").ACCEPTED
            ? e
            : t.isFailed()
              ? this.retry(t)
              : t.isConfirmed()
                ? (this.$4(t), r("MediaUploadClientResult").ACCEPTED)
                : (this.$8(t),
                  this.$4(t),
                  r("MediaUploadClientResult").ACCEPTED);
        }),
        e
      );
    })();
    l.default = e;
  },
  98,
);
