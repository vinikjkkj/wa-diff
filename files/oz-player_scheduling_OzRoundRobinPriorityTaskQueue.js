__d(
  "oz-player/scheduling/OzRoundRobinPriorityTaskQueue",
  ["oz-player/shims/ozReportUnexpectedError"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e(e, t) {
        (t === void 0 && (t = -1),
          (this.$3 = function () {}),
          (this.$4 = []),
          (this.$5 = new Map()),
          (this.$1 = e),
          (this.$2 = t));
      }
      var t = e.prototype;
      return (
        (t.getHighestPriority = function () {
          return Math.max.apply(
            Math,
            this.$4.map(function (e) {
              return e.queue.length ? e.priority : -1 / 0;
            }),
          );
        }),
        (t.enqueue = function (t, n) {
          var e = this,
            o = n;
          o = this.$6(o);
          var a = this.$5.get(t);
          if (a !== o) {
            this.$5.has(t) && this.remove(t);
            var i = this.$7(o),
              l = this.$4[i];
            ((l && l.priority === o) ||
              ((l = { priority: o, queue: [] }), this.$4.splice(i, 0, l)),
              this.$5.set(t, o),
              l.queue.push(t),
              t
                .getPromise()
                .then(
                  function () {
                    e.remove(t);
                  },
                  function () {
                    e.remove(t);
                  },
                )
                .catch(function (e) {
                  r("oz-player/shims/ozReportUnexpectedError")(
                    e,
                    "OzRoundRobinPriorityTaskQueue remove after task run",
                  );
                }),
              this.$3(t, o >= this.$1 ? "immediate" : "normal"));
          }
        }),
        (t.updatePriority = function (t, n) {
          this.$5.has(t) && this.enqueue(t, n);
        }),
        (t.dequeue = function () {
          for (var e = 0; e < this.$4.length; e++) {
            var t = this.$4[e];
            if (t.queue.length) {
              var n = t.queue.shift();
              return (this.$5.delete(n), n);
            }
          }
          return null;
        }),
        (t.remove = function (t) {
          var e = this.$5.get(t);
          if (e !== void 0) {
            var n = this.$7(e),
              r = this.$4[n];
            if (r && r.queue) {
              var o = r.queue.findIndex(function (e) {
                return e === t;
              });
              o > -1 && r.queue.splice(o, 1);
            }
            this.$5.delete(t);
          }
        }),
        (t.setOnTaskUpdated = function (t) {
          this.$3 = t;
        }),
        (t.clearOnTaskUpdated = function () {
          this.setOnTaskUpdated(function () {});
        }),
        (t.getLength = function () {
          return this.$5.size;
        }),
        (t.test_isEmpty = function () {
          return (
            this.$5.size === 0 &&
            this.$4.every(function (e) {
              return e.queue.length === 0;
            })
          );
        }),
        (t.$7 = function (t) {
          var e = t;
          e = this.$6(e);
          var n;
          for (n = 0; n < this.$4.length; n++)
            if (e >= this.$4[n].priority) return n;
          return n;
        }),
        (t.$6 = function (t) {
          var e = t;
          return (
            this.$2 >= 0 && (e = Number.parseFloat(e.toFixed(this.$2))),
            e
          );
        }),
        e
      );
    })();
    l.default = e;
  },
  98,
);
