__d(
  "WAWebProfiler",
  [
    "WALogger",
    "WAShiftTimer",
    "WATypeUtils",
    "WAWebDBStats",
    "WAWebGetAllModelStorageTableNames",
    "WAWebNoop",
    "compactMap",
    "gkx",
    "sumBy",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = function (t) {
        ((this.val = t), (this.prev = null), (this.next = null));
      },
      u = (function () {
        function e() {
          ((this.head = new s(null)),
            (this.tail = new s(null)),
            (this.head.next = this.tail),
            (this.tail.prev = this.head),
            (this.size = 0));
        }
        var t = e.prototype;
        return (
          (t.add = function (t) {
            var e = this.tail.prev;
            e &&
              ((t.prev = e),
              (t.next = this.tail),
              (e.next = t),
              (this.tail.prev = t),
              this.size++);
          }),
          e
        );
      })(),
      c = 60,
      d = function (t, n) {
        return {
          table: n,
          "# reads": t.readCount,
          "# writes": t.writeCount,
          "mean query time (ms)":
            t.queryTimes && t.queryTimes.length > 0
              ? Number(
                  (
                    r("sumBy")(t.queryTimes, function (e) {
                      return e;
                    }) / t.queryTimes.length
                  ).toFixed(2),
                )
              : 0,
          "max query time (ms)":
            t.queryTimes && t.queryTimes.length > 0
              ? Number(Math.max.apply(Math, t.queryTimes).toFixed(2))
              : 0,
          "mean records":
            t.recordCounts && t.recordCounts.length > 0
              ? Number(
                  (
                    r("sumBy")(t.recordCounts, function (e) {
                      return e;
                    }) / t.recordCounts.length
                  ).toFixed(2),
                )
              : 0,
          "max records":
            t.recordCounts && t.recordCounts.length > 0
              ? Math.max.apply(Math, t.recordCounts)
              : 0,
        };
      },
      m = function (t) {
        if (!r("gkx")("26258")) {
          var e =
              t == null
                ? o("WAWebGetAllModelStorageTableNames")
                    .allModelStorageTableNames
                : [t],
            n = r("compactMap")(e, function (e) {
              var t = o("WAWebDBStats").dbStats.getStatsLog(e);
              return t ? d(t, e) : null;
            });
          if (n.length > 0) {
            var a =
                t == null
                  ? o("WAWebGetAllModelStorageTableNames")
                      .allModelStorageTableNames
                  : [t],
              i = r("compactMap")(a, function (e) {
                var t = o("WAWebDBStats").dbStats.getStatsLog(e);
                return t ? d(t, e) : null;
              });
            (console.groupCollapsed("[db-stats] Click to expand"),
              console.table(i),
              console.groupEnd());
          }
        }
      },
      p = (function () {
        function t() {
          var e = this;
          if (r("gkx")("26258")) {
            ((this.dbLockStats = new Map()),
              (this.dbReadWriteStats = new Map()),
              (this.seen = new Map()),
              (this.reports = {}),
              (this.removeOlderLockStatsTimer = new (o(
                "WAShiftTimer",
              ).ShiftTimer)(r("WAWebNoop"))));
            return;
          }
          ((this.dbLockStats = new Map()),
            (this.dbReadWriteStats = new Map()),
            (this.seen = new Map()),
            (this.reports = {}),
            (this.removeOlderLockStatsTimer = new (o(
              "WAShiftTimer",
            ).ShiftTimer)(function () {
              var t = Date.now();
              (e.dbLockStats.forEach(function (e, n) {
                for (
                  var r = e.head.next, o = e.tail;
                  (a = r) != null && a.val && r !== o;
                ) {
                  var a;
                  if (t - r.val.t <= c * 1e3) break;
                  var i = r.prev,
                    l = r.next;
                  (i &&
                    l &&
                    ((r.next = null),
                    (r.prev = null),
                    (i.next = l),
                    (l.prev = i),
                    e.size--),
                    (r = l));
                }
              }),
                e.removeOlderLockStatsTimer.onOrAfter((c / 2) * 1e3));
            })),
            this.removeOlderLockStatsTimer.onOrBefore((c / 2) * 1e3));
        }
        var n = t.prototype;
        return (
          (n.recordLockStat = function (t, n) {
            var e;
            if ((n === void 0 && (n = "default"), !r("gkx")("26258"))) {
              var o = Date.now(),
                a = this.dbLockStats.get(n);
              if (
                (a == null && ((a = new u()), this.dbLockStats.set(n, a)),
                !this.seen.has(t))
              ) {
                var i = { id: t, group: n, t: o, timestamps: [] };
                (this.seen.set(t, i), a.add(new s(i)));
              }
              (e = this.seen.get(t)) == null || e.timestamps.push(o);
            }
          }),
          (n.lockReport = function () {
            if (r("gkx")("26258")) return [];
            var t = [];
            try {
              this.dbLockStats.forEach(function (e, n) {
                for (
                  var r = { group: n },
                    a = [],
                    i = e.head.next,
                    l = new Map(),
                    s = 0;
                  (u = i) != null && u.val && i !== e.tail;
                ) {
                  var u,
                    c,
                    d,
                    m = i.val,
                    p = m.timestamps[m.timestamps.length - 1];
                  if (
                    !o("WATypeUtils").isNumber(m.row) &&
                    m.timestamps.length === 3
                  ) {
                    for (var _ = 0; _ < a.length; _++)
                      if (a[_] <= m.t) {
                        s = _;
                        break;
                      }
                    _ === a.length
                      ? ((m.row = a.length), a.push(-1))
                      : (m.row = s);
                  }
                  (l.has(m.row) || l.set(m.row, []),
                    (c = l.get(m.row)) == null ||
                      c.push({
                        timeRange: [m.t, m.timestamps[1]],
                        val: "waiting",
                      }),
                    (d = l.get(m.row)) == null ||
                      d.push({
                        timeRange: [m.timestamps[1], p],
                        val: "acquired",
                      }));
                  var f = m.row === void 0 ? -1 : m.row;
                  (f !== -1 && (a[f] = Math.max(a[f], p)), (i = i.next));
                }
                var g = [];
                (l.forEach(function (e, t) {
                  g.push({ label: "" + (t != null ? t : "null"), data: e });
                }),
                  t.push(babelHelpers.extends({}, r, { data: g })));
              });
            } catch (t) {
              o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "error while generating profiler report",
                    ])),
                )
                .verbose();
            }
            return t;
          }),
          (n.export = function () {
            return r("gkx")("26258") ? "" : JSON.stringify(this.reports);
          }),
          (n.getAllReports = function () {
            return r("gkx")("26258")
              ? {}
              : ((this.reports.lock = this.lockReport()), this.reports);
          }),
          t
        );
      })(),
      _ = new p();
    ((l.calculateStats = d), (l.logDBStatsDev = m), (l.Profiler = _));
  },
  98,
);
