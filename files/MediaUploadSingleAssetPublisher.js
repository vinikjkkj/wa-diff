__d(
  "MediaUploadSingleAssetPublisher",
  [
    "Promise",
    "VideoUploadGraphQLPostRequestManager",
    "VideoUploadPostRequestManager",
    "VideoUploadRequestContext",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (function () {
        function t() {}
        t.publish = function (n) {
          return (t.$1 == null && (t.$1 = new t()), t.$1.publish(n));
        };
        var o = t.prototype;
        return (
          (o.publish = function (r) {
            var t = this;
            return new (e || (e = n("Promise")))(function (e) {
              var n = t.$2(r.sessionSnapshot, r.assetSnapshot, r.postData),
                o,
                a = t.$3(r.postRequestManagerParams);
              (a.hasAPISupport(r.postData) && (o = a),
                o == null && (o = t.$4(r.postRequestManagerParams)),
                t.$5(o, e),
                o.sendRequest(n));
            });
          }),
          (o.$4 = function (t) {
            return new (r("VideoUploadPostRequestManager"))(
              t == null ? void 0 : t.chunk_post_uri,
              t == null ? void 0 : t.post_max_transport_retries,
              t == null ? void 0 : t.post_transport_retry_interval_base,
              t == null ? void 0 : t.post_max_server_retries,
              t == null ? void 0 : t.post_server_retry_interval_base,
            );
          }),
          (o.$3 = function (t) {
            var e, n, o, a;
            return new (r("VideoUploadGraphQLPostRequestManager"))(
              (e = t == null ? void 0 : t.post_max_transport_retries) != null
                ? e
                : 0,
              (n = t == null ? void 0 : t.post_transport_retry_interval_base) !=
                null
                ? n
                : 0,
              (o = t == null ? void 0 : t.post_max_server_retries) != null
                ? o
                : 0,
              (a = t == null ? void 0 : t.post_server_retry_interval_base) !=
                null
                ? a
                : 0,
            );
          }),
          (o.$5 = function (t, n) {
            (t.subscribe("request-finished", function (e, t) {
              var r = { event: e, payload: t };
              n({ isSuccessful: !0, rawResponse: r });
            }),
              t.subscribe("request-failed", function (e, t) {
                var r = { event: e, payload: t },
                  o =
                    (t == null ? void 0 : t.error_code) == null ||
                    (t == null ? void 0 : t.error_code) == 0
                      ? "PublishError"
                      : t == null
                        ? void 0
                        : t.error_code;
                n({
                  isSuccessful: !1,
                  errorCode: o,
                  rawErrorObject: t == null ? void 0 : t.error_object,
                  rawResponse: r,
                });
              }));
          }),
          (o.$2 = function (t, n, o) {
            var e;
            return new (r("VideoUploadRequestContext"))()
              .setVideoID(n.serverAssetID)
              .setTargetID(n.request.attributes.targetID)
              .setSource(t.entryPoint.sourceType)
              .setWaterfallID(t.sessionID)
              .setCreatorProduct(n.request.attributes.creatorProduct)
              .setComposerEntryPointRef(t.entryPoint.entryPointRef)
              .setComposerDialogVersion(
                n.request.attributes.composerDialogVersion,
              )
              .setHasFileBeenReplaced(
                (e = n.request.attributes.hasFileBeenReplaced) != null ? e : !1,
              )
              .setSupportsChunking(!0)
              .setMetadata(o);
          }),
          t
        );
      })();
    l.default = s;
  },
  98,
);
