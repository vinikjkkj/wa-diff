__d(
  "MediaUploadFBFileHasher",
  [
    "MediaUploadFBStage",
    "MediaUploadFBStageOutcome",
    "MediaUploadOperationOutcome",
    "MediaUploadStageEvent",
    "Promise",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (function () {
        function t(e) {
          ((this.$1 = r("MediaUploadFBStage").HASHING),
            (this.$2 = e.pseudoHasher),
            (this.$3 = e.fullHasher));
        }
        var o = t.prototype;
        return (
          (o.process = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                e.emitStageEvent(
                  r("MediaUploadStageEvent").STAGE_STARTED,
                  this.$1,
                );
                try {
                  yield this.$4(e);
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
          (o.$5 = function (r, o, a) {
            return o == null
              ? (e || (e = n("Promise"))).resolve()
              : o.hash(r.file).then(function (e) {
                  return (e.outcome === "SUCCESS" && a(e.value), e);
                });
          }),
          (o.$4 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = this,
                  o = e.asset.dataAsFile();
                if (o == null) {
                  e.recordStageOutcome({
                    stage: this.$1,
                    outcome: r("MediaUploadFBStageOutcome")
                      .MISSING_MANDATORY_DATA,
                  });
                  return;
                }
                var a = yield this.$5(o, this.$3, function (t) {
                  return (e.processing.fullHash = t);
                }).then(
                  (function () {
                    var r = n("asyncToGeneratorRuntime").asyncToGenerator(
                      function* (n) {
                        return (n == null ? void 0 : n.outcome) === "SUCCESS"
                          ? ((e.processing.pseudoHash = e.processing.fullHash),
                            [n, n])
                          : [
                              n,
                              yield t.$5(o, t.$2, function (t) {
                                return (e.processing.pseudoHash = t);
                              }),
                            ];
                      },
                    );
                    return function (e) {
                      return r.apply(this, arguments);
                    };
                  })(),
                );
                for (var i of a)
                  if ((i == null ? void 0 : i.outcome) === "FILE_TOO_LARGE") {
                    e.recordStageOutcome({
                      stage: this.$1,
                      outcome: r("MediaUploadFBStageOutcome")
                        .ASSET_IS_NOT_SUPPORTED,
                    });
                    return;
                  } else if ((i == null ? void 0 : i.outcome) === "FAILURE") {
                    e.recordStageOutcome({
                      stage: this.$1,
                      outcome: r("MediaUploadFBStageOutcome").INTERNAL_FAILURE,
                      rawErrorCode: i == null ? void 0 : i.rawErrorCode,
                      rawErrorObject: i == null ? void 0 : i.rawErrorObject,
                    });
                    return;
                  }
                e.recordStageOutcome({
                  stage: this.$1,
                  outcome: r("MediaUploadFBStageOutcome").SUCCESS,
                });
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          t
        );
      })();
    l.default = s;
  },
  98,
);
