__d(
  "MediaUploadFBMetadataParser",
  [
    "MediaUploadFBStage",
    "MediaUploadFBStageOutcome",
    "MediaUploadOperationOutcome",
    "MediaUploadStageEvent",
    "MediaUploadTime",
    "Promise",
    "VideoUploadFile",
    "VideoUploadMetadataParser",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = "MediaUploadMetadataParser",
      u = (function () {
        function t() {
          this.$1 = r("MediaUploadFBStage").METADATA_EXTRACTION;
        }
        var a = t.prototype;
        return (
          (a.parse = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                e.emitStageEvent(
                  r("MediaUploadStageEvent").STAGE_STARTED,
                  this.$1,
                );
                try {
                  yield this.$2(e);
                } catch (t) {
                  e.recordStageOutcome({
                    stage: this.$1,
                    outcome: r("MediaUploadFBStageOutcome").EXCEPTION,
                    rawErrorObject: t,
                  });
                }
                return (
                  e.emitStageEvent(
                    r("MediaUploadStageEvent").STAGE_SUCCEED,
                    this.$1,
                  ),
                  r("MediaUploadOperationOutcome").SUCCESS
                );
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.retriveRawMetadata = function (t) {
            return t.processing.rawData.getUnsafe(s);
          }),
          (a.$2 = function (o) {
            var t = this,
              a = o.asset,
              i = a.dataAsFile();
            if (i == null)
              return (
                o.recordStageOutcome({
                  stage: this.$1,
                  outcome: r("MediaUploadFBStageOutcome").ASSET_IS_NOT_FILE,
                }),
                (e || (e = n("Promise"))).resolve()
              );
            var l = new (r("VideoUploadFile"))(
              null,
              i.file,
              i.size,
              i.extension,
            );
            return new (e || (e = n("Promise")))(function (e) {
              var n,
                a = new (r("VideoUploadMetadataParser"))(l, null, !1, function (
                  n,
                ) {
                  if (n.success) t.$3(o, n.metadata);
                  else if (n.errorObject != null) {
                    var a = n.errorObject,
                      i = r("err")(a.message);
                    ((i.name = a.name),
                      o.recordStageOutcome({
                        stage: t.$1,
                        outcome: r("MediaUploadFBStageOutcome").EXCEPTION,
                        rawErrorCode: String(n.errorCode),
                        rawErrorObject: i,
                      }));
                  } else
                    o.recordStageOutcome({
                      stage: t.$1,
                      outcome: r("MediaUploadFBStageOutcome").INTERNAL_FAILURE,
                      rawErrorCode: String(n.errorCode),
                    });
                  e();
                });
              (n = a.parse()) == null || n.catch(function () {});
            });
          }),
          (a.$3 = function (t, n) {
            var e, r, a, i, l, u;
            t.processing.rawData.set(s, n);
            var c = (e = n.format) == null ? void 0 : e.duration,
              d = c == null ? void 0 : o("MediaUploadTime").secondsToTime(c),
              m =
                (r = n.streams) == null || (r = r.primaryVideo) == null
                  ? void 0
                  : r.width,
              p =
                (a = n.streams) == null || (a = a.primaryVideo) == null
                  ? void 0
                  : a.height;
            n.videoPlayerData != null &&
              ((i = n.videoPlayerData) == null ? void 0 : i.width) > 0 &&
              ((l = n.videoPlayerData) == null ? void 0 : l.height) > 0 &&
              ((m = n.videoPlayerData.width), (p = n.videoPlayerData.height));
            var _ = (u = n.format) == null ? void 0 : u.isSpherical;
            t.metadata = { duration: d, width: m, height: p, isSpherical: _ };
          }),
          t
        );
      })();
    l.default = u;
  },
  98,
);
