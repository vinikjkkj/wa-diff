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
            var e, r, a, i, l, u, c;
            t.processing.rawData.set(s, n);
            var d = (e = n.format) == null ? void 0 : e.duration,
              m = d == null ? void 0 : o("MediaUploadTime").secondsToTime(d),
              p = (r = n.streams) == null ? void 0 : r.primaryVideo,
              _ = p == null ? void 0 : p.sampleCount,
              f = p == null ? void 0 : p.codec,
              g = d != null && d > 0 && _ != null ? Math.round(_ / d) : void 0,
              h =
                d != null && d > 0
                  ? Math.round(
                      (((a =
                        (i = t.asset.dataAsFile()) == null ? void 0 : i.size) !=
                      null
                        ? a
                        : 0) *
                        8) /
                        d,
                    )
                  : void 0,
              y = p == null ? void 0 : p.width,
              C = p == null ? void 0 : p.height;
            n.videoPlayerData != null &&
              ((l = n.videoPlayerData) == null ? void 0 : l.width) > 0 &&
              ((u = n.videoPlayerData) == null ? void 0 : u.height) > 0 &&
              ((y = n.videoPlayerData.width), (C = n.videoPlayerData.height));
            var b = (c = n.format) == null ? void 0 : c.isSpherical;
            t.metadata = {
              duration: m,
              width: y,
              height: C,
              frameRate: g,
              bitRate: h,
              videoCodec: f,
              isSpherical: b,
            };
          }),
          t
        );
      })();
    l.default = u;
  },
  98,
);
