__d(
  "WebBloksMountEffectsQueue",
  ["Promise", "justknobx", "promiseDone"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (function () {
        function t() {
          ((this.queue = []),
            (this.flushScheduled = !1),
            (this.mountEffects = new Map()),
            (this.unmountEffects = new Map()));
        }
        var o = t.prototype;
        return (
          (o.isEmpty = function () {
            return this.queue.length === 0;
          }),
          (o.enqueue = function (o, a) {
            var t = this;
            (this.queue.push(o),
              this.mountEffects.set(o, a),
              r("justknobx")._("3143") &&
                !this.flushScheduled &&
                ((this.flushScheduled = !0),
                r("promiseDone")(
                  (e || (e = n("Promise"))).resolve().then(function () {
                    ((t.flushScheduled = !1), t.isEmpty() || t.runEffects());
                  }),
                )));
          }),
          (o.dispose = function (t) {
            var e;
            r("justknobx")._("3143") &&
              ((this.queue = this.queue.filter(function (e) {
                return e !== t;
              })),
              this.mountEffects.delete(t));
            var n = (e = this.unmountEffects.get(t)) != null ? e : [];
            for (var o of n) o();
            this.unmountEffects.delete(t);
          }),
          (o.runEffects = function () {
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
          t
        );
      })();
    l.default = s;
  },
  98,
);
