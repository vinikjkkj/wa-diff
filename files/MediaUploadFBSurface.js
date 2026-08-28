__d(
  "MediaUploadFBSurface",
  [
    "MediaUploadExtrasStorage",
    "MediaUploadFBAssetRequest",
    "MediaUploadSurface",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function (e) {
      function t(t, n) {
        return e.call(this, t, n) || this;
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.createAssetRequest = function (t, n, o, a) {
          var e = t(this.sdk.factories.assets),
            i;
          a != null &&
            ((i = new (r("MediaUploadExtrasStorage"))(this.sdk)), a(i));
          var l;
          return (
            typeof o == "function" ? (l = o(e)) : (l = o),
            new (r("MediaUploadFBAssetRequest"))({
              asset: e,
              assetID: n,
              attributes: l,
              extras: i,
            })
          );
        }),
        t
      );
    })(r("MediaUploadSurface"));
    l.default = e;
  },
  98,
);
