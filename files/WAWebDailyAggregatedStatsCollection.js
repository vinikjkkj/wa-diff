__d(
  "WAWebDailyAggregatedStatsCollection",
  [
    "WANullthrows",
    "WAWebBaseCachePolicy",
    "WAWebBaseCollection",
    "WAWebDailyAggregatedStats",
    "WAWebUserPrefsGeneral",
    "WAWebUserPrefsKeys",
  ],
  function (t, n, r, o, a, i, l) {
    var e = 864e5,
      s = (function (t) {
        function n() {
          return t.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a.gaddForDate = function (n) {
            var t,
              a = o("WAWebUserPrefsGeneral").getDailyStatsStartTime(),
              i = n.getTime() - a,
              l = Math.floor(i / e),
              s = a + e * l;
            return (t = this.get(s)) != null
              ? t
              : r("WANullthrows")(
                  this.add({ id: s.toString(), startTime: s })[0],
                );
          }),
          (a.gaddForToday = function () {
            return this.gaddForDate(new Date());
          }),
          (a.initializeFromCache = function (t) {
            if (t != null) {
              var e = t
                .map(function (e) {
                  return new (o(
                    "WAWebDailyAggregatedStats",
                  ).DailyAggregatedStats)(e);
                })
                .filter(function (e) {
                  return c(e) && !e.isExpired();
                });
              this.add(e);
            }
          }),
          (a.serialize = function () {
            return this.toArray()
              .filter(function (e) {
                return c(e) && !e.isExpired();
              })
              .map(function (e) {
                return e.toJSON();
              });
          }),
          n
        );
      })(o("WAWebBaseCollection").BaseCollection);
    ((s.model = o("WAWebDailyAggregatedStats").DailyAggregatedStats),
      (s.cachePolicy = {
        id: o("WAWebUserPrefsKeys").COLLECTIONS_KEYS
          .DAILY_AGGREGATED_STATS_COLLECTION,
        policy: o("WAWebBaseCachePolicy").CACHE_POLICY.LOAD,
        delay: 1e3,
      }));
    var u = new s();
    function c(t) {
      return (
        (t.startTime - o("WAWebUserPrefsGeneral").getDailyStatsStartTime()) %
          e ===
        0
      );
    }
    ((l.DailyAggregatedStatsCollectionImpl = s),
      (l.DailyAggregatedStatsCollection = u));
  },
  98,
);
