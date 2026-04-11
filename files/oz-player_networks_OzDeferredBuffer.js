__d(
  "oz-player/networks/OzDeferredBuffer",
  [
    "oz-player/networks/OzProducerInterruptedError",
    "oz-player/shims/OzDeferred",
    "oz-player/shims/OzMaybeNativePromise",
    "oz-player/utils/OzErrorUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e(e) {
        (e === void 0 && (e = {}),
          (this.$2 = []),
          (this.$3 = !1),
          (this.$5 = 0));
        var t = e,
          n = t.disableArrayShift;
        this.$1 = !!n;
      }
      var t = e.prototype;
      return (
        (t.produce = function (t) {
          this.$6(t);
        }),
        (t.signalProducerInterruption = function () {
          this.$6(
            new (r("oz-player/networks/OzProducerInterruptedError"))(
              "producer interrupted",
            ),
          );
        }),
        (t.consume = function (t) {
          var e = this;
          if (this.$3)
            throw o("oz-player/utils/OzErrorUtils").createOzError({
              type: "OZ_DEFERRED_BUFFER",
              description:
                "A buffer can only be consumed by one client at a time",
            });
          this.$3 = !0;
          var n = r("oz-player/shims/OzMaybeNativePromise").resolve();
          return (
            this.isEmpty() &&
              ((this.$4 = new (r("oz-player/shims/OzDeferred"))(
                r("oz-player/shims/OzMaybeNativePromise"),
              )),
              (n = this.$4.getPromise())),
            n.then(function () {
              if (e.$1) {
                if (e.$2[e.$5] === void 0)
                  throw o("oz-player/utils/OzErrorUtils").createOzError({
                    type: "OZ_DEFERRED_BUFFER",
                    description: "buffer has no value at position " + e.$5,
                  });
              } else if (e.$2.length === 0)
                throw o("oz-player/utils/OzErrorUtils").createOzError({
                  type: "OZ_DEFERRED_BUFFER",
                  description: "buffer length must not be 0",
                });
              ((e.$4 = null), (e.$3 = !1));
              var n = e.$1 ? e.$7(t) : e.$8(t);
              if (n instanceof Uint8Array) return n;
              throw n;
            })
          );
        }),
        (t.$6 = function (t) {
          (this.$2.push(t), this.$4 && this.$4.resolve());
        }),
        (t.$7 = function (t) {
          var e = this.$2[this.$5];
          if (e === void 0) return new Uint8Array([]);
          var n = e;
          if (!(n instanceof Uint8Array))
            return ((this.$2[this.$5] = void 0), this.$5++, n);
          if (t !== void 0 && n.length > t) {
            var r = n.slice(t);
            ((n = n.slice(0, t)), (this.$2[this.$5] = r));
          } else ((this.$2[this.$5] = void 0), this.$5++);
          return n;
        }),
        (t.$8 = function (t) {
          if (this.$2.length === 0) return new Uint8Array([]);
          var e = this.$2[0];
          if (!(e instanceof Uint8Array)) return (this.$2.shift(), e);
          if (t !== void 0 && e.length > t) {
            var n = e.slice(t);
            ((e = e.slice(0, t)), (this.$2[0] = n));
          } else this.$2.shift();
          return e;
        }),
        (t.isEmpty = function () {
          return this.$1 ? this.$2[this.$5] === void 0 : this.$2.length === 0;
        }),
        e
      );
    })();
    l.default = e;
  },
  98,
);
