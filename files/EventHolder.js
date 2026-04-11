__d(
  "EventHolder",
  ["invariant"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = (function () {
      function e() {
        ((this.$1 = {}), (this.$2 = []));
      }
      var t = e.prototype;
      return (
        (t.holdEvent = function (t) {
          this.$1[t] = this.$1[t] || [];
          for (
            var e = this.$1[t],
              n = { eventType: t, index: e.length },
              r = arguments.length,
              o = new Array(r > 1 ? r - 1 : 0),
              a = 1;
            a < r;
            a++
          )
            o[a - 1] = arguments[a];
          return (e.push(o), n);
        }),
        (t.emitToListener = function (t, n, r) {
          var e = this,
            o = this.$1[t];
          o &&
            o.forEach(function (o, a) {
              o &&
                (e.$2.push({ eventType: t, index: a }),
                n.apply(r, o),
                e.$2.pop());
            });
        }),
        (t.releaseCurrentEvent = function () {
          (this.$2.length || s(0, 1764),
            this.releaseEvent(this.$2[this.$2.length - 1]));
        }),
        (t.releaseEvent = function (t) {
          delete this.$1[t.eventType][t.index];
        }),
        (t.releaseEventType = function (t) {
          this.$1[t] = [];
        }),
        e
      );
    })();
    l.default = e;
  },
  98,
);
