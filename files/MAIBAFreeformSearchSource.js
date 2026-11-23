__d(
  "MAIBAFreeformSearchSource",
  ["AdsPETypeaheadMAIBAPresetFilters", "MatchAllSearchSource"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function (e) {
      function t(t, n, r) {
        var o;
        return (
          (o = e.call(this, t) || this),
          (o.$MAIBAFreeformSearchSource$p_1 = n),
          (o.$MAIBAFreeformSearchSource$p_2 = r),
          o
        );
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.searchImpl = function (n, r, a) {
          var t = n.trim().toLowerCase(),
            i = [
              o("AdsPETypeaheadMAIBAPresetFilters").getTopPerformingFilters(
                this.$MAIBAFreeformSearchSource$p_1,
                this.$MAIBAFreeformSearchSource$p_2,
              ),
              o("AdsPETypeaheadMAIBAPresetFilters").getBottomPerformingFilters(
                this.$MAIBAFreeformSearchSource$p_1,
                this.$MAIBAFreeformSearchSource$p_2,
              ),
              o("AdsPETypeaheadMAIBAPresetFilters").getLowCostPerResultFilters(
                this.$MAIBAFreeformSearchSource$p_1,
              ),
            ],
            l = i.some(function (e) {
              return String(e.label).trim().toLowerCase() === t;
            });
          if (l) {
            r([], n);
            return;
          }
          e.prototype.searchImpl.call(this, n, r, a);
        }),
        t
      );
    })(r("MatchAllSearchSource"));
    l.default = e;
  },
  98,
);
