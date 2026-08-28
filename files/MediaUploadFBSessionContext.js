__d(
  "MediaUploadFBSessionContext",
  ["ErrorNormalizeUtils", "MediaUploadSessionContext", "getErrorSafe"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function (e) {
      function t(t) {
        var n;
        return (
          (n =
            e.call(this, {
              sessionID: t.sessionID,
              emitter: t.emitter,
              progressCalculator: t.progressCalculator,
              params: t.params,
            }) || this),
          (n.entryPoint = t.entryPoint),
          n
        );
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.composeSnapshot = function () {
          var e = this.__composeBaseSnapshot(),
            t = this.__lastError;
          return babelHelpers.extends({}, e, {
            entryPoint: this.entryPoint,
            lastError:
              t == null
                ? null
                : {
                    errorObject:
                      t.rawErrorObject == null
                        ? null
                        : r("ErrorNormalizeUtils").normalizeError(
                            r("getErrorSafe")(t.rawErrorObject),
                          ),
                    rawErrorCode: t.rawErrorCode,
                    rawErrorObject:
                      t.rawErrorObject instanceof Error
                        ? t.rawErrorObject
                        : null,
                  },
          });
        }),
        (t.castOrThrow = function (n, r) {
          var e = r.createThrowableError;
          if (n instanceof t) return n;
          var o;
          throw e(
            'Provided session context has incorrect type of "' +
              ((o = n.constructor) == null ? void 0 : o.name) +
              '"',
          );
        }),
        t
      );
    })(r("MediaUploadSessionContext"));
    l.default = e;
  },
  98,
);
