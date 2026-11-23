__d(
  "AdsUniversalComposerCarrierSearchSource",
  [
    "AdsPETypeaheadMAIBAFilterSearchableEntry",
    "AdsUniversalComposerCarrierSuggestions",
    "MatchAllSearchSource",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 10,
      s = 1e3,
      u = (function (t) {
        function n(e, n, r) {
          var o;
          return (
            (o = t.call(this, []) || this),
            (o.$AdsUniversalComposerCarrierSearchSource$p_1 = e),
            (o.$AdsUniversalComposerCarrierSearchSource$p_2 = r),
            (o.$AdsUniversalComposerCarrierSearchSource$p_3 = n),
            o
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a.searchImpl = function (n, a, i) {
            if (n.trim() === "") {
              a([], n);
              return;
            }
            var t = o(
              "AdsUniversalComposerCarrierSuggestions",
            ).buildCarrierSuggestions(
              n,
              this.$AdsUniversalComposerCarrierSearchSource$p_1,
              e,
              this.$AdsUniversalComposerCarrierSearchSource$p_2,
            );
            if (
              t.length === 0 ||
              !this.$AdsUniversalComposerCarrierSearchSource$p_3()
            ) {
              a([], n);
              return;
            }
            a(
              t.map(function (e, t) {
                return r(
                  "AdsPETypeaheadMAIBAFilterSearchableEntry",
                ).createUCSuggestion(e.text, s + t, n, e.action);
              }),
              n,
            );
          }),
          n
        );
      })(r("MatchAllSearchSource"));
    l.default = u;
  },
  98,
);
