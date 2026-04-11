__d(
  "WAWebFuzzySearchMatchResult",
  ["WAWebSearchMatchResult"],
  function (t, n, r, o, a, i, l) {
    var e = 10,
      s = (function (t) {
        function n(e, n, r) {
          var o;
          return ((o = t.call(this, e, n) || this), (o.cost = r), o);
        }
        babelHelpers.inheritsLoose(n, t);
        var r = n.prototype;
        return (
          (r.getSimilarityRating = function () {
            if (this.length === 0) return 0;
            var e = 1 - this.cost / this.length;
            return Math.max(0, Math.min(1, e));
          }),
          (r.compareTo = function (r) {
            return r instanceof n && this.cost !== r.cost
              ? this.cost - r.cost
              : t.prototype.compareTo.call(this, r);
          }),
          (n.noMatch = function () {
            return new n(-1, 0, e + 1);
          }),
          n
        );
      })(o("WAWebSearchMatchResult").WAWebSearchMatchResult);
    ((l.MAX_ALLOWED_COST = e), (l.WAWebFuzzySearchMatchResult = s));
  },
  98,
);
