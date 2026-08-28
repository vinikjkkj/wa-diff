__d(
  "MediaUploadNetworkMonitor",
  [
    "MediaUploadAssetEvent",
    "MediaUploadClientEvent",
    "MediaUploadNetworkStatus",
    "MediaUploadRetryState",
    "Promise",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = {
        probe: function () {
          return r("MediaUploadNetworkStatus").UNKNOWN;
        },
      },
      u = {
        probe: function () {
          return (e || (e = n("Promise"))).resolve(
            r("MediaUploadNetworkStatus").UNKNOWN,
          );
        },
      },
      c = (function () {
        function e(e, t) {
          ((this.$1 = e),
            (this.$3 = s),
            (this.$2 = u),
            (this.$4 = r("MediaUploadNetworkStatus").UNKNOWN),
            (this.$5 = new Map()),
            (this.$6 = null),
            (this.$8 = !0),
            (this.$9 = null),
            (this.$10 = t.emitClientEvent));
        }
        var t = e.prototype;
        return (
          (t.updateConfiguration = function (t) {
            var e, n, o;
            ((this.$8 = (e = t.abortRequestsOnStall) != null ? e : !0),
              (this.$3 = (n = t.networkProbe) != null ? n : s),
              (this.$2 = (o = t.internetProbe) != null ? o : u),
              (this.$7 =
                t.internetProbeBackoffPolicy == null
                  ? null
                  : new (r("MediaUploadRetryState"))(
                      t.internetProbeBackoffPolicy,
                      this.$1,
                    )),
              (this.$9 = t.stallDetectorTimeout),
              this.$11());
          }),
          (t.getNetworkStatus = function () {
            return this.$3.probe();
          }),
          (t.getInternetStatus = function () {
            return this.$4;
          }),
          (t.$12 = function (t, n) {
            return (
              t.sessionContext.sessionID + "/" + t.assetID + "/" + String(n)
            );
          }),
          (t.$13 = function (t, n, o, a) {
            var e, i;
            (this.$14(r("MediaUploadNetworkStatus").CONNECTED),
              (e = this.$7) == null || e.resetBackoff(),
              (i = this.$6) == null || i.cancel(),
              (this.$6 = null));
            var l = this.$12(t, n);
            (o && this.$5.set(l, { assetContext: t, abortOnStall: a }),
              this.$11(),
              this.$15(l));
          }),
          (t.$16 = function (t, n) {
            var e = this.$12(t, n),
              r = this.$5.get(e);
            if (r != null) {
              var o;
              ((o = r.stallDetector) == null || o.cancel(),
                (r.stallDetector = null));
            }
            this.$5.delete(e);
          }),
          (t.$15 = function (t) {
            var e,
              n = this,
              o = this.$9;
            if (o != null) {
              var a = this.$5.get(t);
              a != null &&
                ((e = a.stallDetector) == null || e.cancel(),
                (a.stallDetector = this.$1.delayedExecutor(o, function () {
                  (a.assetContext.emitAssetEvent(
                    r("MediaUploadAssetEvent").ASSET_STALL,
                  ),
                    (a.stallDetector = null),
                    n.$8 && (a.abortOnStall == null || a.abortOnStall()));
                })));
            }
          }),
          (t.$11 = function () {
            var e = this,
              t = this.$7;
            t != null &&
              this.$5.size !== 0 &&
              this.$6 == null &&
              ((this.$6 = this.$1.delayedExecutor(
                t.calculateBackoffDelay(),
                function () {
                  var t = e.$2
                    .probe()
                    .then(function (t) {
                      return e.$14(t);
                    })
                    .finally(function () {
                      ((e.$6 = null), e.$11());
                    });
                  e.$1.promiseTerminator(t);
                },
              )),
              t.increaseRetryAttemptCounter());
          }),
          (t.$14 = function (t) {
            if (this.$4 !== t)
              switch (((this.$4 = t), this.$4)) {
                case r("MediaUploadNetworkStatus").CONNECTED:
                  this.$10(r("MediaUploadClientEvent").CLIENT_INTERNET_ONLINE);
                  break;
                case r("MediaUploadNetworkStatus").DISCONNECTED:
                  this.$10(r("MediaUploadClientEvent").CLIENT_INTERNET_OFFLINE);
                  break;
                case r("MediaUploadNetworkStatus").TIMEOUT:
                  this.$10(r("MediaUploadClientEvent").CLIENT_INTERNET_UNKNOWN);
                  break;
                case r("MediaUploadNetworkStatus").UNKNOWN:
              }
          }),
          (t.notifyOnNewRequest = function (t, n, r) {
            this.$13(t, n, !0, r);
          }),
          (t.notifyOnProgress = function (t, n) {
            this.$13(t, n, !1);
          }),
          (t.notifyOnAbandon = function (t, n) {
            this.$16(t, n);
          }),
          (t.notifyOnTransportError = function (t, n) {
            this.$16(t, n);
          }),
          (t.notifyOnResponse = function (t, n) {
            (this.$16(t, n), this.$13(t, n, !1));
          }),
          e
        );
      })();
    l.default = c;
  },
  98,
);
