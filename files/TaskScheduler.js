__d(
  "TaskScheduler",
  [
    "Promise",
    "TaskSchedulerError",
    "TaskSchedulerPriority",
    "TaskSchedulerTypes",
    "WAResolvable",
    "WATimeUtils",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = 0,
      u = (function () {
        function t(e, t, n) {
          ((this.$1 = new Map()),
            (this.$2 = new Map()),
            (this.$3 = [new Set(), new Set(), new Set()]),
            (this.$4 = null),
            (this.name = e),
            (this.config = t),
            (this.$5 = n));
        }
        var r = t.prototype;
        return (
          (r.yield = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = this,
                  n =
                    e != null ? e : o("TaskSchedulerPriority").NORMAL_PRIORITY,
                  r = this.name + ":yield:" + s++,
                  a = o("WATimeUtils").performanceAbsoluteNow(),
                  i = new (o("WAResolvable").Resolvable)(),
                  l = function () {
                    i.resolve();
                    var e = o("WATimeUtils").performanceAbsoluteNow();
                    (t.$6({
                      name: "yield",
                      taskId: r,
                      time: e,
                      totalTimeMs: e - a,
                      type: "completed",
                    }),
                      t.$7(r, o("TaskSchedulerTypes").RunState.COMPLETED),
                      t.maybeStartTask());
                  },
                  u = {
                    entryTime: a,
                    id: r,
                    name: "yield",
                    originalPriority: n,
                    priority: n,
                    promotionTimerId: null,
                    rejectFn: function (t) {
                      i.reject(t);
                    },
                    startFn: l,
                    state: o("TaskSchedulerTypes").RunState.PENDING,
                    stuckTimerId: null,
                  };
                (this.$1.set(r, u),
                  this.$3[n].add(r),
                  this.$6({
                    name: "yield",
                    priority: n,
                    taskId: r,
                    time: a,
                    type: "queued",
                  }),
                  this.maybeStartTask(),
                  yield i.promise);
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (r.run = function (r, a) {
            var t,
              i,
              l = this,
              u = (t = a == null ? void 0 : a.name) != null ? t : "anonymous",
              c =
                (i = a == null ? void 0 : a.priority) != null
                  ? i
                  : o("TaskSchedulerPriority").NORMAL_PRIORITY,
              d = this.name + ":" + u + ":" + s++,
              m = new (o("WAResolvable").Resolvable)(),
              p = o("WATimeUtils").performanceAbsoluteNow(),
              _ = function () {
                var t;
                try {
                  t = r();
                } catch (r) {
                  t = (e || (e = n("Promise"))).reject(r);
                }
                (l.config.timeoutMs != null &&
                  (g.stuckTimerId = globalThis.setTimeout(function () {
                    l.$8(g.id);
                  }, l.config.timeoutMs)),
                  t.then(
                    function (e) {
                      var t = l.$1.get(d);
                      if (
                        !(
                          t == null ||
                          t.state !== o("TaskSchedulerTypes").RunState.RUNNING
                        )
                      ) {
                        m.resolve(e);
                        var n = o("WATimeUtils").performanceAbsoluteNow();
                        (l.$6({
                          name: u,
                          taskId: d,
                          time: n,
                          totalTimeMs: n - p,
                          type: "completed",
                        }),
                          l.$7(d, o("TaskSchedulerTypes").RunState.COMPLETED),
                          l.maybeStartTask());
                      }
                    },
                    function (e) {
                      var t = l.$1.get(d);
                      if (
                        !(
                          t == null ||
                          t.state !== o("TaskSchedulerTypes").RunState.RUNNING
                        )
                      ) {
                        m.reject(e);
                        var n = o("WATimeUtils").performanceAbsoluteNow();
                        (l.$6({
                          error: e,
                          name: u,
                          taskId: d,
                          time: n,
                          totalTimeMs: n - p,
                          type: "failed",
                        }),
                          l.$7(d, o("TaskSchedulerTypes").RunState.FAILED),
                          l.maybeStartTask());
                      }
                    },
                  ));
              },
              f = function (t) {
                m.reject(t);
              },
              g = {
                entryTime: p,
                id: d,
                name: u,
                originalPriority: c,
                priority: c,
                promotionTimerId: null,
                rejectFn: f,
                startFn: _,
                state: o("TaskSchedulerTypes").RunState.PENDING,
                stuckTimerId: null,
              };
            return (
              this.$1.set(d, g),
              this.$3[c].add(d),
              this.config.promotionTimeoutMs != null &&
                c > o("TaskSchedulerPriority").BLOCKING_PRIORITY &&
                this.$9(g),
              this.$6({
                name: u,
                priority: c,
                taskId: d,
                time: o("WATimeUtils").performanceAbsoluteNow(),
                type: "queued",
              }),
              this.maybeStartTask(),
              {
                cancel: function () {
                  return l.$10(d);
                },
                id: d,
                name: u,
                promise: m.promise,
              }
            );
          }),
          (r.maybeStartTask = function () {
            for (
              var e,
                t =
                  (e = d.getGlobalHighestActivePriority()) != null
                    ? e
                    : o("TaskSchedulerPriority").BACKGROUND_PRIORITY,
                n = o("TaskSchedulerPriority").BLOCKING_PRIORITY;
              n <= t && this.$2.size < this.config.concurrency;
              n++
            ) {
              var r = this.$3[n];
              if (r.size !== 0)
                for (var a of r) {
                  var i = this.$1.get(a);
                  if (i == null) {
                    r.delete(a);
                    continue;
                  }
                  if (i.state !== o("TaskSchedulerTypes").RunState.PENDING) {
                    r.delete(a);
                    continue;
                  }
                  (r.delete(a), this.$11(i));
                  return;
                }
            }
          }),
          (r.$11 = function (t) {
            (this.$2.set(t.id, t.priority),
              (t.state = o("TaskSchedulerTypes").RunState.RUNNING));
            var e = o("WATimeUtils").performanceAbsoluteNow();
            (this.$6({
              name: t.name,
              priority: t.priority,
              taskId: t.id,
              time: e,
              type: "granted",
              waitTimeMs: e - t.entryTime,
            }),
              this.$5.tick(t.priority).then(t.startFn));
          }),
          (r.$8 = function (t) {
            var e = this.$1.get(t);
            e != null &&
              e.state === o("TaskSchedulerTypes").RunState.RUNNING &&
              (this.$12(e), this.maybeStartTask());
          }),
          (r.$12 = function (t) {
            var e = o("WATimeUtils").performanceAbsoluteNow();
            (this.$6({
              name: t.name,
              taskId: t.id,
              time: e,
              totalTimeMs: e - t.entryTime,
              type: "stuck",
            }),
              this.$2.delete(t.id),
              this.$1.delete(t.id),
              t.promotionTimerId != null &&
                (globalThis.clearTimeout(t.promotionTimerId),
                (t.promotionTimerId = null)),
              this.config.failOnTimeout === !0 &&
                ((t.state = o("TaskSchedulerTypes").RunState.STUCK),
                t.rejectFn(
                  new (o("TaskSchedulerError").TaskSchedulerTimeoutError)(
                    this.name,
                    t.id,
                  ),
                )),
              d.notifyActivePriorityChanged(this.name));
          }),
          (r.$10 = function (t) {
            var e = this.$1.get(t);
            return e == null ||
              e.state !== o("TaskSchedulerTypes").RunState.PENDING
              ? !1
              : (this.$7(t, o("TaskSchedulerTypes").RunState.CANCELLED), !0);
          }),
          (r.$7 = function (t, n) {
            var e = this.$1.get(t);
            if (
              e != null &&
              (this.$1.delete(t),
              e.stuckTimerId != null &&
                (self.clearTimeout(e.stuckTimerId), (e.stuckTimerId = null)),
              e.promotionTimerId != null &&
                (self.clearTimeout(e.promotionTimerId),
                (e.promotionTimerId = null)),
              !(
                e.state === o("TaskSchedulerTypes").RunState.COMPLETED ||
                e.state === o("TaskSchedulerTypes").RunState.FAILED ||
                e.state === o("TaskSchedulerTypes").RunState.STUCK ||
                e.state === o("TaskSchedulerTypes").RunState.CANCELLED
              ))
            ) {
              var r = this.$2.has(t);
              (this.$2.delete(t),
                this.$3[e.priority].delete(t),
                (e.state = n),
                r && d.notifyActivePriorityChanged(this.name));
            }
          }),
          (r.getHighestActivePriority = function () {
            var e = null;
            return (
              this.$2.forEach(function (t) {
                (e == null || t < e) && (e = t);
              }),
              e
            );
          }),
          (r.$13 = function (t, n) {
            var e = t.priority;
            n >= e ||
              (this.$3[e].delete(t.id),
              (t.priority = n),
              this.$3[n].add(t.id),
              this.$6({
                from: e,
                name: t.name,
                taskId: t.id,
                time: o("WATimeUtils").performanceAbsoluteNow(),
                to: n,
                type: "promoted",
              }));
          }),
          (r.$9 = function (t) {
            var e = this;
            this.config.promotionTimeoutMs != null &&
              t.promotionTimerId == null &&
              (t.promotionTimerId = globalThis.setTimeout(function () {
                t.state === o("TaskSchedulerTypes").RunState.PENDING &&
                  ((t.promotionTimerId = null),
                  e.$13(t, o("TaskSchedulerPriority").NORMAL_PRIORITY),
                  e.maybeStartTask());
              }, this.config.promotionTimeoutMs));
          }),
          (r.setLifecycleListener = function (t) {
            this.$4 = t;
          }),
          (r.$6 = function (t) {
            var e;
            (e = this.$4) == null || e.call(this, t);
          }),
          (r.destroy = function () {
            (this.$1.forEach(function (e) {
              (e.stuckTimerId != null &&
                globalThis.clearTimeout(e.stuckTimerId),
                e.promotionTimerId != null &&
                  globalThis.clearTimeout(e.promotionTimerId));
            }),
              this.$1.clear(),
              this.$2.clear());
            for (var e of this.$3) e.clear();
            d.unregister(this.name);
          }),
          t
        );
      })(),
      c = (function () {
        function e() {
          this.$1 = new Map();
        }
        var t = e.prototype;
        return (
          (t.getGlobalHighestActivePriority = function () {
            var e = null;
            return (
              this.$1.forEach(function (t) {
                var n = t.getHighestActivePriority();
                n != null && (e == null || n < e) && (e = n);
              }),
              e
            );
          }),
          (t.notifyActivePriorityChanged = function (t) {
            this.$1.forEach(function (e, n) {
              n !== t && e.maybeStartTask();
            });
          }),
          (t.register = function (t, n) {
            this.$1.set(t, n);
          }),
          (t.unregister = function (t) {
            this.$1.delete(t);
          }),
          (t.get = function (t) {
            return this.$1.get(t);
          }),
          e
        );
      })(),
      d = new c();
    function m(e, t, n) {
      var r = d.get(e);
      if (r) return r;
      var o = new u(e, t, n);
      return (d.register(e, o), o);
    }
    l.taskScheduler = m;
  },
  98,
);
