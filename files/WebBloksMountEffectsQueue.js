__d(
  "WebBloksMountEffectsQueue",
  [],
  function (t, n, r, o, a, i) {
    var e = (function () {
      function e() {
        ((this.queue = []),
          (this.mountEffects = new Map()),
          (this.unmountEffects = new Map()));
      }
      var t = e.prototype;
      return (
        (t.isEmpty = function () {
          return this.queue.length === 0;
        }),
        (t.enqueue = function (t, n) {
          (this.queue.push(t), this.mountEffects.set(t, n));
        }),
        (t.dispose = function (t) {
          var e,
            n = (e = this.unmountEffects.get(t)) != null ? e : [];
          for (var r of n) r();
          this.unmountEffects.delete(t);
        }),
        (t.runEffects = function () {
          for (var e = this.queue.length - 1; e >= 0; e--) {
            var t,
              n = this.queue[e],
              r = (t = this.mountEffects.get(n)) != null ? t : [],
              o = [];
            for (var a of r) {
              var i = a();
              i != null && o.push(i);
            }
            this.unmountEffects.set(n, o);
          }
          for (var l of this.queue) this.mountEffects.delete(l);
          this.queue = [];
        }),
        e
      );
    })();
    i.default = e;
  },
  66,
);
