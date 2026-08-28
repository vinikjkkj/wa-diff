__d(
  "MediaUploadFBLocalAssetStrategy",
  ["MediaUploadPipeline"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e(e) {
        var t;
        ((this.$2 = e.envParams),
          (this.metadataParser = e.metadataParser),
          (this.metadataValidator = e.metadataValidator),
          (this.$1 = (t = e.handlerRegistry) != null ? t : null),
          (this.fileHasher = e.fileHasher));
      }
      var t = e.prototype;
      return (
        (t.run = function (t) {
          var e,
            n = this,
            o = new (r("MediaUploadPipeline"))(this.$2),
            a =
              (e = this.$1) == null ? void 0 : e.getHandler(t.asset.mediaType);
          a != null
            ? (o.addPlainStep(function () {
                return a.parse(t);
              }),
              o.addPlainStep(function () {
                return a.validate(t, a.retrieveRawMetadata(t));
              }))
            : (o.addPlainStep(function () {
                return n.metadataParser.parse(t);
              }),
              o.addPlainStep(function () {
                return n.metadataValidator.validate(
                  t,
                  n.metadataParser.retriveRawMetadata(t),
                );
              }));
          var i = this.fileHasher;
          return (
            i != null &&
              o.addPlainStep(function () {
                return i.process(t);
              }),
            o.run()
          );
        }),
        e
      );
    })();
    l.default = e;
  },
  98,
);
