__d(
  "AdsPETypeaheadPartialSearchSource",
  ["AbstractSearchSource", "AdsPETypeaheadFilterTypeaheadUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function (e) {
      function t(t) {
        var n;
        return (
          (n = e.call(this) || this),
          (n.$AdsPETypeaheadPartialSearchSource$p_1 = t),
          n
        );
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.searchImpl = function (t, n) {
          if (
            !t ||
            t.trim().length <=
              o("AdsPETypeaheadFilterTypeaheadUtils")
                .PARTIAL_SEARCH_CHARACTER_THRESHOLD
          ) {
            n([], t);
            return;
          }
          var e = t.toLowerCase().trim(),
            r = this.$AdsPETypeaheadPartialSearchSource$p_1.filter(
              function (t) {
                var n = t.getTitle().toLowerCase(),
                  r = n.indexOf(e);
                if (r <= 0) return !1;
                var o = n[r - 1];
                return o !== " ";
              },
            ),
            a = o("AdsPETypeaheadFilterTypeaheadUtils").sortFuzzySearchEntries(
              r,
            );
          n(a, t);
        }),
        t
      );
    })(r("AbstractSearchSource"));
    l.default = e;
  },
  98,
);
