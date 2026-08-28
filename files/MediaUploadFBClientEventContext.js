__d(
  "MediaUploadFBClientEventContext",
  [
    "ErrorNormalizeUtils",
    "MediaUploadClientEventContext",
    "MediaUploadFBAssetContext",
    "MediaUploadFBSessionContext",
    "MediaUploadTime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function (e) {
      function t(t) {
        var n;
        return (
          (n = e.call(this, t.envParams, t.entryPoint) || this),
          (n.entryPoint = t.entryPoint),
          t.context != null &&
          t.context instanceof r("MediaUploadFBSessionContext")
            ? (n.sessionContext = t.context)
            : t.context != null &&
              t.context instanceof r("MediaUploadFBAssetContext") &&
              ((n.sessionContext = t.context.sessionContext),
              (n.assetContext = t.context)),
          n
        );
      }
      (babelHelpers.inheritsLoose(t, e),
        (t.castOrThrow = function (n, r) {
          if (n instanceof t) return n;
          var e;
          throw r.createThrowableError(
            'Provided client event context has incorrect type of "' +
              ((e = n.constructor) == null ? void 0 : e.name) +
              '"',
          );
        }));
      var n = t.prototype;
      return (
        (n.composerSnapshot = function () {
          var e,
            t,
            n,
            a,
            i =
              ((e = this.errorInfo) == null ? void 0 : e.rawErrorObject) == null
                ? void 0
                : r("ErrorNormalizeUtils").normalizeError(
                    r("getErrorSafe")(
                      (t = this.errorInfo) == null ? void 0 : t.rawErrorObject,
                    ),
                  );
          return {
            entryPoint: this.entryPoint,
            startedAtMs: o("MediaUploadTime").timeToMilliseconds(
              this.startedAt,
            ),
            sessionSnapshot:
              (n = this.sessionContext) == null ? void 0 : n.composeSnapshot(),
            assetSnapshot:
              (a = this.assetContext) == null ? void 0 : a.composeSnapshot(),
            errorObject: i,
          };
        }),
        t
      );
    })(r("MediaUploadClientEventContext"));
    l.default = e;
  },
  98,
);
