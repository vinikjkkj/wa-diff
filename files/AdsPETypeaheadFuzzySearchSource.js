__d(
  "AdsPETypeaheadFuzzySearchSource",
  [
    "AbstractSearchSource",
    "AdsPETypeaheadFilterTypeaheadUtils",
    "Fuse",
    "escapeRegex",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 0.25,
      s = 32,
      u = (function (t) {
        function n(n) {
          var a;
          a = t.call(this) || this;
          var i = n
            .map(function (e) {
              var t = e.getTitle().toLowerCase();
              return t.length > 0
                ? { entry: e, label: t, splitLabel: t.split(" ") }
                : null;
            })
            .filter(Boolean);
          return (
            (a.$AdsPETypeaheadFuzzySearchSource$p_1 = new (r("Fuse"))(i, {
              keys: ["label", "splitLabel"],
              shouldSort: !1,
              minMatchCharLength: o("AdsPETypeaheadFilterTypeaheadUtils")
                .FUZZY_SEARCH_CHARACTER_THRESHOLD,
              threshold: e,
            })),
            a
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a.searchImpl = function (t, n) {
            if (
              !t ||
              t.trim().length <=
                o("AdsPETypeaheadFilterTypeaheadUtils")
                  .FUZZY_SEARCH_CHARACTER_THRESHOLD
            ) {
              n([], t);
              return;
            }
            var e = t.toLowerCase(),
              a = this.$AdsPETypeaheadFuzzySearchSource$p_1.search(
                e.length > s ? r("escapeRegex")(e) : e,
              ),
              i = e.split(/\s+/).filter(function (e) {
                return e.length > 0;
              }),
              l = a.filter(function (t) {
                var n = t.label;
                return !(
                  n.includes(e) ||
                  (i.length > 1 &&
                    i.every(function (e) {
                      return n.includes(e);
                    }))
                );
              }),
              u = l.map(function (e) {
                return e.entry;
              }),
              c = o(
                "AdsPETypeaheadFilterTypeaheadUtils",
              ).sortFuzzySearchEntries(u);
            n(c, t);
          }),
          n
        );
      })(r("AbstractSearchSource"));
    l.default = u;
  },
  98,
);
