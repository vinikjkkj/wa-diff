__d(
  "WAWebHatchNoiseFramer",
  [
    "WAHex",
    "WAWebHatchNoiseBytes",
    "WAWebHatchNoiseTransportFrameCodec",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 65489,
      s = 16,
      u = 256,
      c = 16 * 1024 * 1024,
      d = 6e4;
    function m(t, n) {
      if (
        (n === void 0 &&
          (n = function () {
            return crypto.getRandomValues(new Uint32Array(2));
          }),
        t.length > c)
      )
        throw r("err")(
          "WAWebHatchNoiseFramer: outbound message exceeds size limit",
        );
      var a = Math.max(1, Math.ceil(t.length / e));
      if (a > u)
        throw r("err")(
          "WAWebHatchNoiseFramer: outbound message has too many chunks",
        );
      var i = n();
      if (i.length < 2)
        throw r("err")(
          "WAWebHatchNoiseFramer: random source returned too few words",
        );
      for (
        var l = o("WAHex").createHexLongFrom32Bits(i[1], i[0]), s = [], d = 0;
        d < a;
        d++
      ) {
        var m = d * e;
        s.push(
          o("WAWebHatchNoiseTransportFrameCodec").encodeTransportFrame({
            chunkId: l,
            chunkIndex: d,
            payload: t.slice(m, m + e),
            totalChunks: a,
          }),
        );
      }
      return s;
    }
    var p = (function () {
      function t(e) {
        (e === void 0 &&
          (e = function () {
            return self.performance.now();
          }),
          (this.$1 = new Map()),
          (this.$2 = new Map()),
          (this.$3 = !1),
          (this.$4 = e));
      }
      var n = t.prototype;
      return (
        (n.decode = function (n) {
          if (this.$3)
            throw r("err")("WAWebHatchNoiseFramer: decoder is poisoned");
          try {
            var t = this.$4();
            this.$5(t);
            var a = o(
                "WAWebHatchNoiseTransportFrameCodec",
              ).decodeTransportFrame(n),
              i = o("WAHex").hexLongToHex(a.chunkId);
            if (
              a.totalChunks < 1 ||
              a.totalChunks > u ||
              a.chunkIndex >= a.totalChunks ||
              a.payload.length > e
            )
              throw r("err")("WAWebHatchNoiseFramer: invalid chunk metadata");
            if (a.totalChunks === 1) return a.payload;
            if (this.$2.has(i)) return null;
            var l = this.$1.get(i);
            if (l == null) {
              if (this.$1.size >= s)
                throw r("err")(
                  "WAWebHatchNoiseFramer: too many pending assemblies",
                );
              var d = {
                createdAt: t,
                parts: new Map(),
                receivedBytes: 0,
                totalChunks: a.totalChunks,
              };
              (this.$1.set(i, d), (l = d));
            } else if (l.totalChunks !== a.totalChunks)
              throw r("err")("WAWebHatchNoiseFramer: conflicting total_chunks");
            var m = l.parts.get(a.chunkIndex);
            if (m != null) {
              if (!o("WAWebHatchNoiseBytes").constantTimeEqual(m, a.payload))
                throw r("err")(
                  "WAWebHatchNoiseFramer: conflicting duplicate chunk",
                );
              return null;
            }
            if (
              (l.parts.set(a.chunkIndex, a.payload.slice()),
              (l.receivedBytes += a.payload.length),
              l.receivedBytes > c)
            )
              throw r("err")(
                "WAWebHatchNoiseFramer: assembly exceeds size limit",
              );
            if (l.parts.size !== l.totalChunks) return null;
            for (var p = [], _ = 0; _ < l.totalChunks; _++) {
              var f = l.parts.get(_);
              if (f == null)
                throw r("err")(
                  "WAWebHatchNoiseFramer: completed assembly has a missing chunk",
                );
              p.push(f);
            }
            if ((this.$1.delete(i), this.$2.size >= s)) {
              var g = this.$2.keys().next().value;
              g != null && this.$2.delete(g);
            }
            return (
              this.$2.set(i, t),
              o("WAWebHatchNoiseBytes").concat.apply(void 0, p)
            );
          } catch (e) {
            throw ((this.$3 = !0), this.$1.clear(), this.$2.clear(), e);
          }
        }),
        (n.$5 = function (t) {
          for (var e of this.$1) {
            var n = e[0],
              r = e[1];
            t - r.createdAt >= d && this.$1.delete(n);
          }
          for (var o of this.$2) {
            var a = o[0],
              i = o[1];
            t - i >= d && this.$2.delete(a);
          }
        }),
        t
      );
    })();
    ((l.encodeFrames = m), (l.FrameDecoder = p));
  },
  98,
);
