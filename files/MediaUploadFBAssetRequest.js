__d(
  "MediaUploadFBAssetRequest",
  ["MediaUploadAssetRequest"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function (e) {
      function t(t) {
        var n,
          r = t.asset,
          o = t.assetID,
          a = t.attributes,
          i = t.extras;
        return (
          (n = e.call(this, { assetID: o, asset: r, extras: i }) || this),
          (n.attributes = {
            targetID: a.targetID,
            actorID: a.actorID,
            hasFileBeenReplaced: a.hasFileBeenReplaced,
            composerDialogVersion: a.composerDialogVersion,
            publisherActionSource: a.publisherActionSource,
            creatorProduct: a.creatorProduct,
            composerSessionID: a.composerSessionID,
          }),
          n
        );
      }
      return (
        babelHelpers.inheritsLoose(t, e),
        (t.castOrThrow = function (n, r) {
          var e = r.createThrowableError;
          if (n instanceof t) return n;
          var o;
          throw e(
            'Provided asset request has incorrect type of "' +
              ((o = n.constructor) == null ? void 0 : o.name) +
              '"',
          );
        }),
        t
      );
    })(r("MediaUploadAssetRequest"));
    l.default = e;
  },
  98,
);
