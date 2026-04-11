__d(
  "WAWebOutContactModel",
  [
    "WAJids",
    "WAWebBaseModel",
    "WAWebContactSearchGatingUtils",
    "WAWebExactSearchMatchResult",
    "WAWebFuzzyMatcher",
    "WAWebFuzzySearchMatchResult",
    "WAWebL10NAccentFold",
    "WAWebPrefixSearchMatchResult",
    "WAWebSearchMatchStrategies",
  ],
  function (t, n, r, o, a, i, l) {
    var e = (function (e) {
      function t() {
        for (var t, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
          r[a] = arguments[a];
        return (
          (t = e.call.apply(e, [this].concat(r)) || this),
          (t.id = o("WAWebBaseModel").prop()),
          (t.phoneNumber = o("WAWebBaseModel").prop()),
          (t.fullName = o("WAWebBaseModel").prop()),
          (t.firstName = o("WAWebBaseModel").prop()),
          babelHelpers.assertThisInitialized(t) ||
            babelHelpers.assertThisInitialized(t)
        );
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.initialize = function () {
          (e.prototype.initialize.call(this),
            this.set("phoneNumber", o("WAJids").phoneNumberFromJid(this.id)));
        }),
        (n.getName = function () {
          var e, t;
          return (e = (t = this.fullName) != null ? t : this.firstName) != null
            ? e
            : this.phoneNumber;
        }),
        (n.$OutContact$p_1 = function () {
          return o("WAWebL10NAccentFold").accentFold(this.getName());
        }),
        (n.$OutContact$p_2 = function (t, n, r) {
          var e = this.$OutContact$p_1();
          if (e) {
            var o = r(e, t);
            if (o != null) return { match: e, results: o };
          }
          if (n != null && this.phoneNumber.includes(n)) {
            var a = this.phoneNumber.indexOf(n);
            return {
              match: this.phoneNumber,
              results: [{ startIndex: a, length: n.length }],
            };
          }
          return null;
        }),
        (n.searchMatchExact = function (t, n) {
          var e = this.$OutContact$p_2(
            t,
            n,
            o("WAWebSearchMatchStrategies").substringMatch,
          );
          return e == null
            ? null
            : {
                match: e.match,
                results: e.results.map(function (e) {
                  return new (o(
                    "WAWebExactSearchMatchResult",
                  ).WAWebExactSearchMatchResult)(e.startIndex, e.length);
                }),
              };
        }),
        (n.searchMatchPrefix = function (t, n) {
          var e = this.$OutContact$p_2(
            t,
            n,
            o("WAWebSearchMatchStrategies").wordBoundaryMatch,
          );
          return e == null
            ? null
            : {
                match: e.match,
                results: e.results.map(function (e) {
                  return new (o(
                    "WAWebPrefixSearchMatchResult",
                  ).WAWebPrefixSearchMatchResult)(e.startIndex, e.length);
                }),
              };
        }),
        (n.searchMatchFuzzy = function (t) {
          var e = t.split(/\s+/).filter(Boolean);
          if (e.length === 0) return null;
          var n =
              1 -
              o(
                "WAWebContactSearchGatingUtils",
              ).getFuzzySearchDistanceThreshold(),
            r = this.$OutContact$p_1();
          if (!r) return null;
          var a = [];
          for (var i of e) {
            var l = o("WAWebFuzzyMatcher").fuzzyMatch(
              r,
              i,
              o("WAWebFuzzySearchMatchResult").MAX_ALLOWED_COST,
            );
            if (!l.isMatch() || l.getSimilarityRating() < n) return null;
            a.push(l);
          }
          return { match: r, results: a };
        }),
        t
      );
    })(o("WAWebBaseModel").BaseModel);
    e.Proxy = "outContact";
    var s = o("WAWebBaseModel").defineModel(e);
    l.default = s;
  },
  98,
);
