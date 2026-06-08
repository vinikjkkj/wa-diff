__d(
  "WACryptoSha256BuilderV2",
  ["WABinary"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = [
        1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993,
        2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987,
        1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774,
        264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986,
        2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711,
        113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291,
        1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411,
        3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344,
        430227734, 506948616, 659060556, 883997877, 958139571, 1322822218,
        1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424,
        2428436474, 2756734187, 3204031479, 3329325298,
      ],
      s = 64,
      u = 4,
      c = (function () {
        function t() {
          ((this.h0 = 0),
            (this.h1 = 0),
            (this.h2 = 0),
            (this.h3 = 0),
            (this.h4 = 0),
            (this.h5 = 0),
            (this.h6 = 0),
            (this.h7 = 0),
            (this.tail = new Uint8Array(0)),
            (this.size = BigInt(0)),
            (this.$1 = new Int32Array(64)),
            this.reset());
        }
        var n = t.prototype;
        return (
          (n.reset = function () {
            ((this.h0 = 1779033703),
              (this.h1 = 3144134277),
              (this.h2 = 1013904242),
              (this.h3 = 2773480762),
              (this.h4 = 1359893119),
              (this.h5 = 2600822924),
              (this.h6 = 528734635),
              (this.h7 = 1541459225),
              (this.tail = new Uint8Array(0)),
              (this.size = BigInt(0)));
          }),
          (n.update = function (t) {
            var e = 0;
            if (this.tail.length > 0) {
              var n = s - this.tail.length;
              if (t.length < n) {
                var r = new Uint8Array(this.tail.length + t.length);
                return (
                  r.set(this.tail),
                  r.set(t, this.tail.length),
                  (this.tail = r),
                  (this.size += BigInt(t.length) * BigInt(8)),
                  this
                );
              }
              var o = new Uint8Array(s);
              (o.set(this.tail),
                o.set(t.subarray(0, n), this.tail.length),
                this.$2(o),
                (e = n));
            }
            for (; e + s <= t.length; )
              (this.$2(t.subarray(e, e + s)), (e += s));
            return (
              (this.tail = e < t.length ? t.slice(e) : new Uint8Array(0)),
              (this.size += BigInt(t.length) * BigInt(8)),
              this
            );
          }),
          (n.$3 = function () {
            var e = new Uint8Array(64);
            if (
              (e.set(this.tail),
              e.set(new Uint8Array([128]), this.tail.length),
              this.tail.length + 9 > s)
            ) {
              this.$2(e);
              var t = f(new Uint8Array(0), this.size);
              this.$2(t);
            } else {
              var n = f(e, this.size);
              this.$2(n);
            }
          }),
          (n.finish = function () {
            this.$3();
            var e = new (o("WABinary").Binary)();
            return (
              e.writeUint32(this.h0),
              e.writeUint32(this.h1),
              e.writeUint32(this.h2),
              e.writeUint32(this.h3),
              e.writeUint32(this.h4),
              e.writeUint32(this.h5),
              e.writeUint32(this.h6),
              e.writeUint32(this.h7),
              this.reset(),
              e.readByteArrayView()
            );
          }),
          (n.$2 = function (n) {
            for (var t = this.$1, r = 0; r < 16; r++) {
              var o = r * u;
              t[r] =
                (n[o] << 24) | (n[o + 1] << 16) | (n[o + 2] << 8) | n[o + 3];
            }
            for (var a = 16; a < 64; a++) {
              var i = d(t[a - 15]),
                l = m(t[a - 2]);
              t[a] = (t[a - 16] + (t[a - 7] + i + l)) >>> 0;
            }
            for (
              var s = this.h0,
                c = this.h1,
                _ = this.h2,
                f = this.h3,
                g = this.h4,
                h = this.h5,
                y = this.h6,
                C = this.h7,
                b = 0;
              b < 64;
              b++
            ) {
              var v = p(g, 6) ^ p(g, 11) ^ p(g, 25),
                S = (g & h) ^ (~g & y),
                R = p(s, 2) ^ p(s, 13) ^ p(s, 22),
                L = (s & c) ^ (s & _) ^ (c & _),
                E = C + v + S + e[b] + t[b],
                k = R + L;
              ((C = y),
                (y = h),
                (h = g),
                (g = (f + E) >>> 0),
                (f = _),
                (_ = c),
                (c = s),
                (s = (E + k) >>> 0));
            }
            ((this.h0 = (this.h0 + s) >>> 0),
              (this.h1 = (this.h1 + c) >>> 0),
              (this.h2 = (this.h2 + _) >>> 0),
              (this.h3 = (this.h3 + f) >>> 0),
              (this.h4 = (this.h4 + g) >>> 0),
              (this.h5 = (this.h5 + h) >>> 0),
              (this.h6 = (this.h6 + y) >>> 0),
              (this.h7 = (this.h7 + C) >>> 0));
          }),
          t
        );
      })();
    function d(e) {
      var t = p(e, 7),
        n = p(e, 18),
        r = _(e, 3);
      return t ^ n ^ r;
    }
    function m(e) {
      var t = p(e, 17),
        n = p(e, 19),
        r = _(e, 10);
      return t ^ n ^ r;
    }
    function p(e, t) {
      return (e >>> t) | (e << (32 - t));
    }
    function _(e, t) {
      return e >>> t;
    }
    function f(e, t) {
      var n = new Uint8Array(s);
      n.set(e);
      var r = new DataView(n.buffer, n.byteOffset + n.length - 8, 8);
      return (r.setBigUint64(0, t, !1), n);
    }
    l.Sha256BuilderV2 = c;
  },
  98,
);
