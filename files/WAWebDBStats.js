__d(
  "WAWebDBStats",
  ["WAWebDBTableUsage", "gkx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
        function e() {
          ((this.$1 = new Map()), (this.$2 = new Map()));
        }
        var t = e.prototype;
        return (
          (t.initTable = function (t) {
            r("gkx")("26258") ||
              (this.$1.has(t) ||
                this.$1.set(t, {
                  readCount: 0,
                  writeCount: 0,
                  queryTimes: [],
                  recordCounts: [],
                  queryTimestamps: [],
                }),
              this.$2.has(t) ||
                this.$2.set(t, {
                  readCount: 0,
                  writeCount: 0,
                  queryTimes: [],
                  recordCounts: [],
                  queryTimestamps: [],
                }));
          }),
          (t.trackReadTransaction = function (t, n, a) {
            o("WAWebDBTableUsage").recordTableUsageStat(t, "read");
            var e = self.performance.now() - n;
            if (!r("gkx")("26258")) {
              var i = this.$1.get(t);
              i &&
                (i.queryTimes.push(e),
                i.recordCounts.push(a),
                i.readCount++,
                i.queryTimestamps.push(Date.now()));
            }
          }),
          (t.trackWriteTransaction = function (t, n) {
            o("WAWebDBTableUsage").recordTableUsageStat(t, "write");
            var e = self.performance.now() - n;
            if (!r("gkx")("26258")) {
              var a = this.$1.get(t);
              a &&
                (a.queryTimes.push(e),
                a.writeCount++,
                a.queryTimestamps.push(Date.now()));
            }
          }),
          (t.getStatsLog = function (t) {
            if (!r("gkx")("26258")) return this.$1.get(t);
          }),
          (t.getStats = function (t) {}),
          (t.getAllStatsLog = function () {
            return new Map();
          }),
          (t.getAllStats = function () {
            return new Map();
          }),
          (t.resetStatsLog = function () {
            r("gkx")("26258") || this.$1.clear();
          }),
          (t.resetStats = function () {}),
          e
        );
      })(),
      s = new e();
    l.dbStats = s;
  },
  98,
);
