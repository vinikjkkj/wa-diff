__d(
  "MediaUploadVUShim",
  [
    "MediaUploadAssetEvent",
    "MediaUploadClientEvent",
    "MediaUploadFBEntryPointID",
    "MediaUploadFBSDK",
    "MediaUploadFBStage",
    "MediaUploadSessionEvent",
    "MediaUploadStageEvent",
    "MediaUploadVUShimSession",
    "MediaUploadVUShimSurface",
    "Promise",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (function () {
        function t() {
          this.$1 = new Map();
        }
        var o = t.prototype;
        return (
          (o.createSession = function (t) {
            if (!r("MediaUploadFBSDK").isSupported()) return null;
            var e = t.source,
              n = t.composer_entry_point_ref;
            if (e == null || n == null) return null;
            var o = new (r("MediaUploadFBEntryPointID"))(e, n);
            if (
              !r("MediaUploadVUShimSurface").isClientSupported(o) ||
              !r("gkx")("25479")
            )
              return null;
            var a = r("MediaUploadVUShimSurface").getClient(o),
              i = new (r("MediaUploadVUShimSession"))(t, a);
            return (this.$1.set(i.sessionID, i), i);
          }),
          (o.triggerPublish = function (r, o) {
            var t = this.$1.get(r.sessionID);
            return t == null
              ? (e || (e = n("Promise"))).resolve({
                  isSuccessful: !1,
                  errorCode: "MISSING_SESSION",
                })
              : t.triggerPublish(r, o);
          }),
          (o.setupEventSubscription = function (t) {
            var e = this,
              n = function (r) {
                t.addClientEventListener(r, function (t) {
                  return e.emitClientEvents(r);
                });
              };
            for (var o of r("MediaUploadClientEvent").members()) n(o);
            var a = function (r) {
              t.addSessionEventListener(r, function (t) {
                var n;
                return (n = e.$1.get(t.sessionID)) == null
                  ? void 0
                  : n.sessionUpdated(r, t);
              });
            };
            for (var i of r("MediaUploadSessionEvent").members()) a(i);
            var l = function (r) {
              t.addAssetEventListener(r, function (t, n) {
                var o;
                (o = e.$1.get(t.sessionID)) == null || o.assetUpdated(r, t, n);
              });
            };
            for (var s of r("MediaUploadAssetEvent").members()) l(s);
            var u = function (o) {
              var n = function (r) {
                t.addStageEventListener(o, r, function (t, n) {
                  var a;
                  (a = e.$1.get(t.sessionID)) == null ||
                    a.stageUpdated(o, r, t, n);
                });
              };
              for (var a of r("MediaUploadFBStage").members()) n(a);
            };
            for (var c of r("MediaUploadStageEvent").members()) u(c);
          }),
          (o.emitClientEvents = function (t) {
            var e;
            if (t === r("MediaUploadClientEvent").CLIENT_INTERNET_ONLINE)
              e = "online";
            else if (t === r("MediaUploadClientEvent").CLIENT_INTERNET_OFFLINE)
              e = "offline";
            else return;
            for (var n of this.$1.values()) n.inform(e);
          }),
          t
        );
      })(),
      u = new s(),
      c = u;
    l.default = c;
  },
  98,
);
