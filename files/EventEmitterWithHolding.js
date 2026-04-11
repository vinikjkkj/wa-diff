__d(
  "EventEmitterWithHolding",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      function e(e, t) {
        ((this.$2 = e),
          (this.$3 = t),
          (this.$1 = null),
          (this.$5 = []),
          (this.$4 = 0));
      }
      var t = e.prototype;
      return (
        (t.addListener = function (t, n, r) {
          return this.$2.addListener(t, n, r);
        }),
        (t.once = function (t, n, r) {
          return this.$2.once(t, n, r);
        }),
        (t.addRetroactiveListener = function (t, n, r) {
          var e = this.$2.addListener(t, n, r),
            o = this.$5;
          return (
            o.push(!1),
            this.$4++,
            this.$3.emitToListener(t, n, r),
            this.$4--,
            o[o.length - 1] && e.remove(),
            o.pop(),
            e
          );
        }),
        (t.removeAllListeners = function (t) {
          this.$2.removeAllListeners(t);
        }),
        (t.removeCurrentListener = function () {
          if (this.$4) {
            var e = this.$5;
            e[e.length - 1] = !0;
          } else this.$2.removeCurrentListener();
        }),
        (t.listeners = function (t) {
          return this.$2.listeners(t);
        }),
        (t.emit = function (t) {
          for (
            var e,
              n = arguments.length,
              r = new Array(n > 1 ? n - 1 : 0),
              o = 1;
            o < n;
            o++
          )
            r[o - 1] = arguments[o];
          (e = this.$2).emit.apply(e, [t].concat(r));
        }),
        (t.emitAndHold = function (t) {
          for (
            var e,
              n,
              r = arguments.length,
              o = new Array(r > 1 ? r - 1 : 0),
              a = 1;
            a < r;
            a++
          )
            o[a - 1] = arguments[a];
          ((this.$1 = (e = this.$3).holdEvent.apply(e, [t].concat(o))),
            (n = this.$2).emit.apply(n, [t].concat(o)),
            (this.$1 = null));
        }),
        (t.releaseCurrentEvent = function () {
          this.$1 != null
            ? this.$3.releaseEvent(this.$1)
            : this.$4 > 0 && this.$3.releaseCurrentEvent();
        }),
        (t.releaseHeldEventType = function (t) {
          this.$3.releaseEventType(t);
        }),
        e
      );
    })();
    i.default = e;
  },
  66,
);
