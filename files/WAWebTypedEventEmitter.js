__d(
  "WAWebTypedEventEmitter",
  ["WAWebEventEmitter"],
  function (t, n, r, o, a, i, l) {
    var e = (function () {
      function e() {
        this.eventEmitter = new (r("WAWebEventEmitter"))();
      }
      var t = e.prototype;
      return (
        (t.trigger = function (t, n) {
          return (this.eventEmitter.trigger(t, n), this);
        }),
        (t.on = function (t, n) {
          return (this.eventEmitter.on(t, n), this);
        }),
        (t.once = function (t, n) {
          return (this.eventEmitter.once(t, n), this);
        }),
        (t.off = function (t, n) {
          return (this.eventEmitter.off(t, n), this);
        }),
        e
      );
    })();
    l.default = e;
  },
  98,
);
