__d(
  "MediaUploadFBMetadataValidator",
  [
    "MediaUploadFBStage",
    "MediaUploadFBStageOutcome",
    "MediaUploadOperationOutcome",
    "MediaUploadStageEvent",
    "MediaUploadTime",
    "Promise",
    "VideoUploadFile",
    "VideoUploadFileValidator",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (function () {
        function t(e) {
          ((this.$1 = r("MediaUploadFBStage").METADATA_VALIDATION),
            (this.$2 = e));
        }
        var a = t.prototype;
        return (
          (a.validate = function (o, a) {
            o.emitStageEvent(r("MediaUploadStageEvent").STAGE_STARTED, this.$1);
            var t;
            try {
              t = this.$3(o, a);
            } catch (e) {
              (o.recordStageOutcome({
                stage: this.$1,
                outcome: r("MediaUploadFBStageOutcome").EXCEPTION,
                rawErrorObject: e,
              }),
                (t = r("MediaUploadOperationOutcome").SUCCESS));
            }
            return (
              o.emitStageEventForOperationOutcome(t, this.$1),
              (e || (e = n("Promise"))).resolve(t)
            );
          }),
          (a.$4 = function (t) {
            var e = {};
            return (
              t.extensions.forEach(function (t) {
                return (e[t] = 1);
              }),
              {
                minSize: t.minSizeKB * 1024,
                maxSize: t.maxSizeKB * 1024,
                maxLength: o("MediaUploadTime").timeToSeconds(t.maxDuration),
                minLength: o("MediaUploadTime").timeToSeconds(t.minDuration),
                acceptDimensionsFromPlayer: t.acceptDimensionsFromPlayer,
                minWidth: t.minWidth,
                minHeight: t.minHeight,
                require16to9AspectRatio: !1,
                minAspectRatio: t.minAspectRatio,
                maxAspectRatio: t.maxAspectRatio,
                source: t.sourceType,
                extensions: e,
              }
            );
          }),
          (a.$3 = function (t, n) {
            var e = t.asset.dataAsFile();
            if (e == null)
              return (
                t.recordStageOutcome({
                  stage: this.$1,
                  outcome: r("MediaUploadFBStageOutcome").ASSET_IS_NOT_FILE,
                }),
                r("MediaUploadOperationOutcome").SUCCESS
              );
            if (this.configuration == null)
              throw this.$2.createThrowableError(
                "Missing configuration in the MediaUploadFBMetadataValidator",
              );
            var o = new (r("VideoUploadFile"))(
                null,
                e.file,
                e.size,
                e.extension,
              ),
              a = this.$4(this.configuration),
              i = new (r("VideoUploadFileValidator"))(a),
              l = i.getValidationErrorMessage(o, n);
            return l != null
              ? (t.recordStageOutcome({
                  stage: this.$1,
                  outcome: r("MediaUploadFBStageOutcome").INTERNAL_FAILURE,
                  displayError: l,
                }),
                r("MediaUploadOperationOutcome").FAILED_NON_TRANSIENT)
              : (t.recordStageOutcome({
                  stage: this.$1,
                  outcome: r("MediaUploadFBStageOutcome").SUCCESS,
                }),
                r("MediaUploadOperationOutcome").SUCCESS);
          }),
          t
        );
      })();
    l.default = s;
  },
  98,
);
