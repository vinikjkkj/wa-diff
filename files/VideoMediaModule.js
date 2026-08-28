__d(
  "VideoMediaModule",
  [
    "MediaUploadFBLocalAssetStrategy",
    "MediaUploadFBMetadataParser",
    "MediaUploadFBMetadataValidator",
    "MediaUploadFBReceiveRequest",
    "MediaUploadFBStartRequest",
    "MediaUploadMediaType",
    "MediaUploadMediaTypeHandlerRegistry",
    "VideoEventLogger",
    "VideoLocalProcessor",
    "VideoMediaTypeHandler",
    "VideoPublisher",
    "VideoServerContract",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e(e, t) {
        ((this.mediaType = r("MediaUploadMediaType").VIDEO),
          (this.$1 = e),
          (this.$2 = t != null ? t : null));
      }
      var t = e.prototype;
      return (
        (t.createLocalProcessor = function () {
          return this.createVideoLocalProcessor();
        }),
        (t.createVideoLocalProcessor = function (t) {
          var e = new (r("MediaUploadFBMetadataParser"))(),
            n = new (r("MediaUploadFBMetadataValidator"))(this.$1),
            o = new (r("VideoMediaTypeHandler"))(e, n),
            a = new (r("MediaUploadMediaTypeHandlerRegistry"))();
          a.register(r("MediaUploadMediaType").VIDEO, o);
          var i = new (r("MediaUploadFBLocalAssetStrategy"))({
            metadataParser: e,
            metadataValidator: n,
            handlerRegistry: a,
            fileHasher: t != null ? t : void 0,
            envParams: this.$1,
          });
          return new (r("VideoLocalProcessor"))(i, o);
        }),
        (t.createServerContract = function () {
          throw r("err")(
            "VideoMediaModule: use createVideoServerContract() with params",
          );
        }),
        (t.createVideoServerContract = function (t) {
          var e = new (r("MediaUploadFBStartRequest"))({
              entryPoint: t.entryPoint,
              payloadHook: t.startRequestPayloadHook,
              customHeadersHook: t.startRequestCustomHeadersHook,
              envParams: this.$1,
              networkNotifier: t.networkNotifier,
            }),
            n = new (r("MediaUploadFBReceiveRequest"))({
              entryPoint: t.entryPoint,
              payloadHook: t.receiveRequestPayloadHook,
              customHeadersHook: t.receiveRequestCustomHeadersHook,
              envParams: this.$1,
              networkNotifier: t.networkNotifier,
            });
          return new (r("VideoServerContract"))(e, n);
        }),
        (t.createEventLogger = function () {
          return this.createVideoEventLogger();
        }),
        (t.createVideoEventLogger = function (t) {
          return new (r("VideoEventLogger"))(this.$1, t);
        }),
        (t.createPublisher = function () {
          var e = this.$2;
          if (e == null)
            throw r("err")(
              "VideoMediaModule: publishCallback required for createPublisher()",
            );
          return new (r("VideoPublisher"))(e);
        }),
        e
      );
    })();
    l.default = e;
  },
  98,
);
