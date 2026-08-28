__d(
  "SphericalImage",
  ["SphericalImageUtils", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "ProjectionType",
      s = (function () {
        function t(e) {
          this.props = e;
        }
        t.createFromBlob = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            var t = yield r("SphericalImageUtils").genPhotosphereMetadata(e);
            return new this(t);
          });
          function t(t) {
            return e.apply(this, arguments);
          }
          return t;
        })();
        var o = t.prototype;
        return (
          (o.isSpherical = function () {
            return !!this.props.photoSphereMetadata;
          }),
          (o.getImageMetadata = function () {
            return this.props.imageMetadata;
          }),
          (o.getPhotoSphereMetadata = function () {
            return this.props.photoSphereMetadata;
          }),
          (o.getSize = function () {
            return this.props.imageMetadata
              ? this.props.imageMetadata.getSize()
              : null;
          }),
          (o.getBufferLength = function () {
            return this.props.imageMetadata
              ? this.props.imageMetadata.getBufferLength()
              : null;
          }),
          (o.getProjectionType = function () {
            var t = "";
            return (
              this.props.photoSphereMetadata &&
                this.props.photoSphereMetadata[e] &&
                (t = this.props.photoSphereMetadata[e]),
              t
            );
          }),
          t
        );
      })();
    l.default = s;
  },
  98,
);
