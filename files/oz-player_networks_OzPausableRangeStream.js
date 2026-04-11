__d(
  "oz-player/networks/OzPausableRangeStream",
  [
    "oz-player/manifests/OzByteRange",
    "oz-player/networks/OzDeferredBuffer",
    "oz-player/shims/OzDeferred",
    "oz-player/shims/OzMaybeNativePromise",
    "oz-player/utils/OzErrorUtils",
    "oz-player/utils/ozPipeErrorTo",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return o("oz-player/utils/OzErrorUtils").createOzError({
        type: "OZ_STREAM",
        description: "Upstream has an inconsistent range",
      });
    }
    var s = (function () {
        function e() {
          this.$1 = 0;
        }
        var t = e.prototype;
        return (
          (t.setBytesToSkip = function (t) {
            this.$1 = t;
          }),
          (t.setBytesSkipped = function (t) {
            this.$1 -= t;
          }),
          (t.getBytesToSkip = function () {
            return this.$1;
          }),
          (t.hasMoreBytesToSkip = function () {
            return this.$1 > 0;
          }),
          e
        );
      })(),
      u = (function () {
        function t(n, o, a, i, l) {
          var u = this;
          ((this.$5 = !1),
            (this.$7 = 0),
            (this.$8 = 0),
            (this.$13 = !1),
            (this.$14 = new s()),
            (this.$15 = !1),
            (this.$16 = !1),
            (this.$17 = !1),
            (this.startStream = function () {
              u.$13 = !0;
              var e = { startByte: u.$1.startByte, endByte: u.$1.endByte };
              u.$15
                ? u.$8 && (u.$3.produce("skip_buffered_bytes"), (u.$8 = 0))
                : (e.startByte += u.$8);
              var n = u.$4;
              return u.$2.startStream(e).then(function (e) {
                return (
                  e
                    .pipeTo(u.$16 ? n : u.$4)
                    .then(function () {
                      u.$12 && u.$12.resolve("stream_done");
                    })
                    .catch(function (e) {
                      u.$12 &&
                        !u.$12.isSettled() &&
                        (u.$16 && e === t.STREAM_PAUSED
                          ? u.$12.resolve("stream_paused")
                          : u.$12.reject(e));
                    }),
                  (u.$12 = new (r("oz-player/shims/OzDeferred"))(
                    r("oz-player/shims/OzMaybeNativePromise"),
                  )),
                  { statusPromise: u.$12.getPromise() }
                );
              });
            }),
            (this.$18 = n),
            (this.$19 = o),
            (this.$1 = a),
            (this.$2 = i));
          var c = l || {},
            d = c.disableDeferredBufferArrayShift,
            m = c.enablePausableStreamResumeFromStartDangerously,
            p = c.fixPausePreReadableStream,
            _ = c.fixStreamingUndefinedEndByte,
            f = c.throwErrorWhenAborted;
          ((this.$11 = !!_),
            (this.$15 = !!m),
            (this.$16 = !!p),
            (this.$17 = !!f),
            (this.$3 = new (r("oz-player/networks/OzDeferredBuffer"))({
              disableArrayShift: !!d,
            })),
            (this.$6 = new this.$18({
              start: function (t) {
                u.$10 = t;
              },
              pull: function (n) {
                if (
                  ((u.$11 && u.$1.endByte === null && u.$5) ||
                    u.$7 === u.$20()) &&
                  u.$3.isEmpty()
                )
                  return (
                    n.close(),
                    r("oz-player/shims/OzMaybeNativePromise").resolve()
                  );
                var t = function () {
                  var o = u.$14.hasMoreBytesToSkip()
                    ? u.$14.getBytesToSkip()
                    : void 0;
                  return u.$3
                    .consume(o)
                    .then(function (o) {
                      if (u.$14.hasMoreBytesToSkip())
                        return (u.$14.setBytesSkipped(o.length), t());
                      u.$7 += o.length;
                      var a = u.$20();
                      (a !== null &&
                        u.$7 > (a || 0) &&
                        r("oz-player/utils/ozPipeErrorTo")(u.$10, e()),
                        n.enqueue(o));
                    })
                    .catch(function (e) {
                      if (e === "skip_buffered_bytes")
                        return (u.$14.setBytesToSkip(u.$7), t());
                      throw e;
                    });
                };
                return t();
              },
              cancel: function (t) {
                (u.$12 && u.$12.resolve("stream_cancelled"),
                  r("oz-player/utils/ozPipeErrorTo")(u.$9, t));
              },
            })),
            (this.$4 = this.$21()));
        }
        var n = t.prototype;
        return (
          (n.$20 = function () {
            var e = this.$1,
              t = e.endByte,
              n = e.startByte;
            return t != null ? t - n + 1 : null;
          }),
          (n.$21 = function () {
            var t = this;
            return new this.$19({
              start: function (n) {
                t.$9 = n;
              },
              write: function (n) {
                (t.$3.produce(n), (t.$8 += n.length));
              },
              close: function () {
                t.$5 = !0;
                var n = t.$1,
                  o = n.endByte,
                  a = n.startByte;
                (t.$11 && o === null && t.$3.produce(new Uint8Array([])),
                  o !== null &&
                    t.$8 !== (o || 0) - a + 1 &&
                    r("oz-player/utils/ozPipeErrorTo")(t.$10, e()));
              },
              abort: function (n) {
                (t.$12 &&
                  (t.$17 ? t.$12.reject(n) : t.$12.resolve("stream_aborted")),
                  r("oz-player/utils/ozPipeErrorTo")(t.$10, n));
              },
            });
          }),
          (n.getStream = function () {
            return this.$6;
          }),
          (n.pauseStream = function () {
            (r("oz-player/utils/ozPipeErrorTo")(this.$9, t.STREAM_PAUSED),
              this.$12 && this.$12.resolve("stream_paused"),
              (this.$4 = this.$21()));
          }),
          (n.getByteRange = function () {
            return this.$1;
          }),
          (n.getBytesStreamed = function () {
            return this.$7;
          }),
          (n.tryConcatByteRange = function (t) {
            return this.$13 ||
              !o("oz-player/manifests/OzByteRange").startsImmediateAfter(
                t,
                this.$1,
              )
              ? !1
              : ((this.$1 = {
                  startByte: this.$1.startByte,
                  endByte: t.endByte,
                }),
                !0);
          }),
          t
        );
      })();
    ((u.STREAM_PAUSED = "streamPaused"), (l.default = u));
  },
  98,
);
