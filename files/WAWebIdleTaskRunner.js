__d(
  "WAWebIdleTaskRunner",
  ["$InternalEnum", "WAShiftTimer", "WAWebPonyfillsIdleCallback"],
  function (t, n, r, o, a, i, l) {
    var e = n("$InternalEnum").Mirrored(["IDLE_CALLBACK", "UI_BUSY"]),
      s = 1e3,
      u = (function () {
        function t(t) {
          var n = this;
          ((this.busyMap = new Map()),
            (this.busyId = 0),
            (this.$1 = function () {
              n.busyMap.clear();
            }),
            (this.$2 = new Map()),
            (this.taskId = 0),
            (this.runIdleLoop = function () {
              n.idleType === e.IDLE_CALLBACK
                ? (n.idleCallbackId = o(
                    "WAWebPonyfillsIdleCallback",
                  ).requestIdleCallback(n.$3))
                : n.isIdle() && n.$4();
            }),
            (this.$3 = function (e) {
              for (var t, r = n.$2.entries(); (t = r.next()) && !t.done; ) {
                var o = t.value,
                  a = o[0],
                  i = o[1];
                if ((i(), n.$2.delete(a), e.timeRemaining() <= 0)) break;
              }
              n.$2.size > 0 && n.runIdleLoop();
            }),
            (this.idleType = t));
        }
        var n = t.prototype;
        return (
          (n.setBusy = function (t) {
            var e = t,
              n = e != null ? this.busyMap.get(e) : null;
            return (
              e != null && n != null
                ? this.busyMap.set(e, n + 1)
                : ((e = ++this.busyId), this.busyMap.set(e, 1)),
              this.busyTimer ||
                (this.busyTimer = new (o("WAShiftTimer").ShiftTimer)(this.$1)),
              this.busyTimer.debounce(s),
              e
            );
          }),
          (n.decBusy = function (t) {
            if (t != null) {
              var e = this.busyMap.get(t);
              e == null ||
                e === 0 ||
                (e === 1 ? this.clearBusy(t) : this.busyMap.set(t, e - 1));
            }
          }),
          (n.clearBusy = function (t) {
            var e = this.busyMap.get(t);
            (e != null && this.busyMap.delete(t),
              this.isIdle() &&
                (this.busyTimer.cancel(),
                this.$2.size > 0 && self.setTimeout(this.runIdleLoop, 0)));
          }),
          (n.isIdle = function () {
            return this.busyMap.size === 0;
          }),
          (n.isBusy = function () {
            return this.busyMap.size > 0;
          }),
          (n.cancelIdleLoop = function () {
            this.idleType === e.IDLE_CALLBACK &&
              this.idleCallbackId != null &&
              o("WAWebPonyfillsIdleCallback").cancelIdleCallback(
                this.idleCallbackId,
              );
          }),
          (n.$4 = function () {
            for (var e, t = this.$2.entries(); (e = t.next()) && !e.done; ) {
              var n = e.value,
                r = n[0],
                o = n[1];
              if ((o(), this.$2.delete(r), this.isBusy())) break;
            }
          }),
          (n.enqueue = function (t) {
            return (
              this.$2.set(++this.taskId, t),
              this.$2.size === 1 && this.runIdleLoop(),
              this.taskId
            );
          }),
          (n.dequeue = function (t) {
            var e = this.$2.delete(t);
            return (e && this.$2.size === 0 && this.cancelIdleLoop(), e);
          }),
          (n.isInQueue = function (t) {
            return this.$2.has(t);
          }),
          t
        );
      })(),
      c = new u(e.UI_BUSY),
      d = new u(e.IDLE_CALLBACK);
    ((l.UIBusyTasks = c), (l.IdleCallbackTasks = d));
  },
  98,
);
