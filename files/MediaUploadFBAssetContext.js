__d(
  "MediaUploadFBAssetContext",
  [
    "ErrorNormalizeUtils",
    "MediaUploadAssetContext",
    "MediaUploadExtrasStorage",
    "MediaUploadStageEvent",
    "MediaUploadTime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function (e) {
      function t(t) {
        var n;
        return (
          (n = e.call(this, t) || this),
          (n.request = t.assetRequest),
          (n.sessionContext = t.sessionContext),
          (n.processing = {
            rawData: new (r("MediaUploadExtrasStorage"))(t.params),
          }),
          n
        );
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.recordStageOutcome = function (t) {
          var e = t.displayError,
            n = t.errorAttributes,
            o = t.networkRequestID,
            a = t.outcome,
            i = t.rawErrorCode,
            l = t.rawErrorObject,
            s = t.stage,
            u =
              l == null
                ? void 0
                : r("ErrorNormalizeUtils").normalizeError(r("getErrorSafe")(l));
          this.$MediaUploadFBAssetContext$p_1 = {
            stage: s,
            outcome: a,
            rawErrorCode: i,
            errorObject: u,
            displayError: e,
            errorAttributes: n,
            networkRequestID: o,
            rawErrorObject: l,
          };
        }),
        (n.emitStageEvent = function (n, o) {
          (n === r("MediaUploadStageEvent").STAGE_STARTED &&
            (this.$MediaUploadFBAssetContext$p_1 = null),
            e.prototype.emitStageEvent.call(this, n, o));
        }),
        (n.composeSnapshot = function () {
          var e = this.__composeBaseSnapshot();
          return babelHelpers.extends({}, e, {
            serverAssetID: this.serverAssetID,
            request: this.request,
            uploadServiceDomain: this.processing.uploadServiceDomain,
            everstoreHandle: this.processing.everstoreHandle,
            hash:
              this.processing.pseudoHash == null
                ? null
                : {
                    hashValue: this.processing.pseudoHash.hashValue,
                    calculationTimeCostMs: o(
                      "MediaUploadTime",
                    ).timeToMilliseconds(
                      this.processing.pseudoHash.calculationTimeCost,
                    ),
                  },
            lastAction: this.$MediaUploadFBAssetContext$p_1,
          });
        }),
        (t.castOrThrow = function (n, r) {
          var e = r.createThrowableError;
          if (n instanceof t) return n;
          var o;
          throw e(
            'Provided asset context has incorrect type of "' +
              ((o = n.constructor) == null ? void 0 : o.name) +
              '"',
          );
        }),
        t
      );
    })(r("MediaUploadAssetContext"));
    l.default = e;
  },
  98,
);
