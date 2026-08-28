__d(
  "MediaUploadClient",
  ["MediaUploadClientResult"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e(e) {
        ((this.$4 = new Map()),
          (this.$1 = e.implementation),
          (this.$2 = e.sessionStrategy),
          (this.$3 = e.envParams),
          this.$1.subscribeToHooks(),
          this.$3.isSupported() ||
            this.$3.reportRecoverableError(
              "This browser does not support this version of the Media Upload SDK",
            ));
      }
      var t = e.prototype;
      return (
        (t.cancelSession = function (t, n) {
          if (!this.$3.isSupported())
            return r("MediaUploadClientResult").UNSUPPORTED_BROWSER;
          var e = this.$4.get(t);
          return e == null
            ? r("MediaUploadClientResult").SESSION_NOT_FOUND
            : this.$2.cancel(e, n);
        }),
        (t.cleanSession = function (t) {
          return this.$3.isSupported()
            ? this.$4.delete(t)
              ? r("MediaUploadClientResult").ACCEPTED
              : r("MediaUploadClientResult").SESSION_NOT_FOUND
            : r("MediaUploadClientResult").UNSUPPORTED_BROWSER;
        }),
        (t.retrySession = function (t) {
          if (!this.$3.isSupported())
            return r("MediaUploadClientResult").UNSUPPORTED_BROWSER;
          var e = this.$4.get(t);
          return e == null
            ? r("MediaUploadClientResult").SESSION_NOT_FOUND
            : this.$2.retry(e);
        }),
        (t.$5 = function (t) {
          var e = this.$4.get(t);
          return (
            e == null &&
              ((e = this.$1.createSessionContext(t)), this.$4.set(t, e)),
            e
          );
        }),
        (t.updateSessionExtras = function (t, n) {
          if (!this.$3.isSupported())
            return r("MediaUploadClientResult").UNSUPPORTED_BROWSER;
          var e = this.$5(t);
          return this.$2.updateSessionExtras(e, n, !1);
        }),
        (t.confirmSession = function (t, n, o) {
          if (!this.$3.isSupported())
            return r("MediaUploadClientResult").UNSUPPORTED_BROWSER;
          var e = this.$5(t),
            a;
          return (o != null &&
            ((a = this.$2.updateSessionExtras(e, o, !0)),
            a !== r("MediaUploadClientResult").ACCEPTED)) ||
            ((a = this.$2.syncAssetUploads(e, n)),
            a !== r("MediaUploadClientResult").ACCEPTED)
            ? a
            : this.$2.confirm(e);
        }),
        (t.startUploads = function (t, n) {
          if (!this.$3.isSupported()) {
            var e = {};
            return (
              n.forEach(function (t) {
                return (e[t.assetID] = r(
                  "MediaUploadClientResult",
                ).UNSUPPORTED_BROWSER);
              }),
              e
            );
          }
          var o = this.$5(t);
          return this.$2.uploadAssets(o, n);
        }),
        (t.removeUpload = function (t, n) {
          if (!this.$3.isSupported())
            return r("MediaUploadClientResult").UNSUPPORTED_BROWSER;
          var e = this.$4.get(t);
          return e == null
            ? r("MediaUploadClientResult").SESSION_NOT_FOUND
            : this.$2.removeAsset(e, n);
        }),
        e
      );
    })();
    l.default = e;
  },
  98,
);
