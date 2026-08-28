__d(
  "MediaUploadLinearProgressCalculator",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      function e(e) {
        ((this.$1 = e),
          (this.$2 = this.$4()),
          (this.$3 =
            this.$1.sessionWeights.assets + this.$1.sessionWeights.publishing));
      }
      var t = e.prototype;
      return (
        (t.$4 = function () {
          var e = this.$1.assetWeights.uploadBytes;
          return (
            this.$1.assetWeights.singleOperations.forEach(function (t) {
              return (e += t);
            }),
            e
          );
        }),
        (t.$5 = function (t, n) {
          var e =
              Math.floor((t * 100) / this.$1.percentagePrecision) *
              this.$1.percentagePrecision,
            r = Math.abs(e - n) >= this.$1.percentagePrecision;
          return { percentageProgress: e, isDifferent: r };
        }),
        (t.calculateAssetProgress = function (t) {
          var e = this.$1.assetWeights,
            n = 0;
          if (t.isCompleted()) n = 1;
          else {
            for (var r of t.progress.completedStages.values()) {
              var o = e.singleOperations.get(r);
              o != null && (n += o);
            }
            var a = t.uploadSummary.computeUploadedPortion();
            (a != null && (n += e.uploadBytes * a), (n /= this.$2));
          }
          var i = this.$5(n, t.progress.calculated.percentageComplete);
          return (
            (t.progress.calculated.rawValue = n),
            (t.progress.calculated.percentageComplete = i.percentageProgress),
            (t.progress.calculated.rawValue = n),
            i.isDifferent
          );
        }),
        (t.calculateSessionProgress = function (t) {
          var e = this.$1.sessionWeights,
            n = 0;
          t.progress.publishingDone && (n += e.publishing);
          var r = t.getActiveAssets();
          if (r.length > 0) {
            var o = e.assets / r.length;
            t.getActiveAssets().forEach(function (e) {
              n += o * e.progress.calculated.rawValue;
            });
          } else n += e.assets;
          n /= this.$3;
          var a = this.$5(n, t.progress.percentageComplete);
          return (
            (t.progress.percentageComplete = a.percentageProgress),
            a.isDifferent
          );
        }),
        e
      );
    })();
    i.default = e;
  },
  66,
);
