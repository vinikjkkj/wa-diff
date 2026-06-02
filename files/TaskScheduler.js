__d(
  "TaskScheduler",
  [
    "TaskSchedulerError",
    "TaskSchedulerPriority",
    "TaskSchedulerTypes",
    "WAResolvable",
    "WATimeUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 0,
      s = (function () {
        function t(e, t, n) {
          ((this.$1 = new Map()),
            (this.$2 = new Map()),
            (this.$3 = [new Set(), new Set(), new Set(), new Set()]),
            (this.$4 = null),
            (this.name = e),
            (this.config = t),
            (this.$5 = n));
        }
        var n = t.prototype;
        return (
          (n.yield = async function (n) {
            var t = this,
              r = n != null ? n : o("TaskSchedulerPriority").NORMAL_PRIORITY,
              a = this.name + ":yield:" + e++,
              i = o("WATimeUtils").performanceAbsoluteNow(),
              l = new (o("WAResolvable").Resolvable)(),
              s = function () {
                l.resolve();
                var e = o("WATimeUtils").performanceAbsoluteNow();
                (t.$6({
                  name: "yield",
                  taskId: a,
                  time: e,
                  totalTimeMs: e - i,
                  type: "completed",
                }),
                  t.$7(a, o("TaskSchedulerTypes").RunState.COMPLETED),
                  t.maybeStartTask());
              },
              u = {
                entryTime: i,
                id: a,
                name: "yield",
                originalPriority: r,
                priority: r,
                promotionTimerId: null,
                rejectFn: function (t) {
                  l.reject(t);
                },
                startFn: s,
                state: o("TaskSchedulerTypes").RunState.PENDING,
                stuckTimerId: null,
              };
            (this.$1.set(a, u),
              this.$3[r].add(a),
              this.$6({
                name: "yield",
                priority: r,
                taskId: a,
                time: i,
                type: "queued",
              }),
              this.maybeStartTask(),
              await l.promise);
          }),
          (n.run = function (n, r) {
            var t,
              a,
              i = this,
              l = (t = r == null ? void 0 : r.name) != null ? t : "anonymous",
              s =
                (a = r == null ? void 0 : r.priority) != null
                  ? a
                  : o("TaskSchedulerPriority").NORMAL_PRIORITY,
              u = this.name + ":" + l + ":" + e++,
              c = new (o("WAResolvable").Resolvable)(),
              d = o("WATimeUtils").performanceAbsoluteNow(),
              m = function () {
                var e;
                try {
                  e = n();
                } catch (t) {
                  e = Promise.reject(t);
                }
                (i.config.timeoutMs != null &&
                  (_.stuckTimerId = globalThis.setTimeout(function () {
                    i.$8(_.id);
                  }, i.config.timeoutMs)),
                  e.then(
                    function (e) {
                      var t = i.$1.get(u);
                      if (
                        !(
                          t == null ||
                          t.state !== o("TaskSchedulerTypes").RunState.RUNNING
                        )
                      ) {
                        c.resolve(e);
                        var n = o("WATimeUtils").performanceAbsoluteNow();
                        (i.$6({
                          name: l,
                          taskId: u,
                          time: n,
                          totalTimeMs: n - d,
                          type: "completed",
                        }),
                          i.$7(u, o("TaskSchedulerTypes").RunState.COMPLETED),
                          i.maybeStartTask());
                      }
                    },
                    function (e) {
                      var t = i.$1.get(u);
                      if (
                        !(
                          t == null ||
                          t.state !== o("TaskSchedulerTypes").RunState.RUNNING
                        )
                      ) {
                        c.reject(e);
                        var n = o("WATimeUtils").performanceAbsoluteNow();
                        (i.$6({
                          error: e,
                          name: l,
                          taskId: u,
                          time: n,
                          totalTimeMs: n - d,
                          type: "failed",
                        }),
                          i.$7(u, o("TaskSchedulerTypes").RunState.FAILED),
                          i.maybeStartTask());
                      }
                    },
                  ));
              },
              p = function (t) {
                c.reject(t);
              },
              _ = {
                entryTime: d,
                id: u,
                name: l,
                originalPriority: s,
                priority: s,
                promotionTimerId: null,
                rejectFn: p,
                startFn: m,
                state: o("TaskSchedulerTypes").RunState.PENDING,
                stuckTimerId: null,
              };
            return (
              this.$1.set(u, _),
              this.$3[s].add(u),
              this.config.promotionTimeoutMs != null &&
                s > o("TaskSchedulerPriority").BLOCKING_PRIORITY &&
                this.$9(_),
              this.$6({
                name: l,
                priority: s,
                taskId: u,
                time: o("WATimeUtils").performanceAbsoluteNow(),
                type: "queued",
              }),
              this.maybeStartTask(),
              {
                cancel: function () {
                  return i.$10(u);
                },
                id: u,
                name: l,
                promise: c.promise,
              }
            );
          }),
          (n.maybeStartTask = function () {
            for (
              var e,
                t =
                  (e = c.getGlobalHighestActivePriority()) != null
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
          (n.$11 = function (t) {
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
          (n.$8 = function (t) {
            var e = this.$1.get(t);
            e != null &&
              e.state === o("TaskSchedulerTypes").RunState.RUNNING &&
              (this.$12(e), this.maybeStartTask());
          }),
          (n.$12 = function (t) {
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
              c.notifyActivePriorityChanged(this.name));
          }),
          (n.$10 = function (t) {
            var e = this.$1.get(t);
            return e == null ||
              e.state !== o("TaskSchedulerTypes").RunState.PENDING
              ? !1
              : (this.$7(t, o("TaskSchedulerTypes").RunState.CANCELLED), !0);
          }),
          (n.$7 = function (t, n) {
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
                r && c.notifyActivePriorityChanged(this.name));
            }
          }),
          (n.getHighestActivePriority = function () {
            var e = null;
            return (
              this.$2.forEach(function (t) {
                (e == null || t < e) && (e = t);
              }),
              e
            );
          }),
          (n.$13 = function (t, n) {
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
          (n.$9 = function (t) {
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
          (n.setLifecycleListener = function (t) {
            this.$4 = t;
          }),
          (n.$6 = function (t) {
            var e;
            (e = this.$4) == null || e.call(this, t);
          }),
          (n.destroy = function () {
            (this.$1.forEach(function (e) {
              (e.stuckTimerId != null &&
                globalThis.clearTimeout(e.stuckTimerId),
                e.promotionTimerId != null &&
                  globalThis.clearTimeout(e.promotionTimerId));
            }),
              this.$1.clear(),
              this.$2.clear());
            for (var e of this.$3) e.clear();
            c.unregister(this.name);
          }),
          t
        );
      })(),
      u = (function () {
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
      c = new u();
    function d(e, t, n) {
      var r = c.get(e);
      if (r) return r;
      var o = new s(e, t, n);
      return (c.register(e, o), o);
    }
    l.taskScheduler = d;
  },
  98,
);
