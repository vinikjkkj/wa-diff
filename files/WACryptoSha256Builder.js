__d(
  "WACryptoSha256Builder",
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
            (this.size = 0),
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
              (this.size = 0));
          }),
          (n.update = function (t) {
            var e = new Uint8Array(this.tail.length + t.length);
            for (
              e.set(this.tail),
                e.set(t, this.tail.length),
                this.size += t.length * 8;
              e.length >= s;
            ) {
              var n = e.subarray(0, s);
              (this.$1(n), (e = e.slice(s)));
            }
            return ((this.tail = e), this);
          }),
          (n.$2 = function () {
            var e = new Uint8Array(64);
            if (
              (e.set(this.tail),
              e.set(new Uint8Array([128]), this.tail.length),
              this.tail.length + 9 > s)
            ) {
              this.$1(e);
              var t = g(new Uint8Array(0), this.size);
              this.$1(t);
            } else {
              var n = g(e, this.size);
              this.$1(n);
            }
          }),
          (n.finish = function () {
            this.$2();
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
          (n.$1 = function (n) {
            for (var t = [], r = 0; r < 16; r++) {
              var o = n.subarray(r * u, u * (r + 1)),
                a = (o[0] << 24) | (o[1] << 16) | (o[2] << 8) | o[3];
              t.push(a);
            }
            for (var i = 16; i < 64; i++) {
              var l = d(t[i - 15]),
                s = m(t[i - 2]),
                c = (t[i - 16] + (t[i - 7] + l + s)) >>> 0;
              t.push(c);
            }
            for (
              var _ = this.h0,
                f = this.h1,
                g = this.h2,
                h = this.h3,
                y = this.h4,
                C = this.h5,
                b = this.h6,
                v = this.h7,
                S = 0;
              S < 64;
              S++
            ) {
              var R = p(y, 6) ^ p(y, 11) ^ p(y, 25),
                L = (y & C) ^ (~y & b),
                E = p(_, 2) ^ p(_, 13) ^ p(_, 22),
                k = (_ & f) ^ (_ & g) ^ (f & g),
                I = v + R + L + e[S] + t[S],
                T = E + k;
              ((v = b),
                (b = C),
                (C = y),
                (y = (h + I) >>> 0),
                (h = g),
                (g = f),
                (f = _),
                (_ = (I + T) >>> 0));
            }
            ((this.h0 = (this.h0 + _) >>> 0),
              (this.h1 = (this.h1 + f) >>> 0),
              (this.h2 = (this.h2 + g) >>> 0),
              (this.h3 = (this.h3 + h) >>> 0),
              (this.h4 = (this.h4 + y) >>> 0),
              (this.h5 = (this.h5 + C) >>> 0),
              (this.h6 = (this.h6 + b) >>> 0),
              (this.h7 = (this.h7 + v) >>> 0));
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
    function f(e) {
      return new Uint8Array(new Uint32Array([e]).buffer);
    }
    function g(e, t) {
      var n = new Uint8Array(s);
      n.set(e);
      var r = f(t);
      return (
        n.set(r.subarray(0, 1), n.length - 1),
        n.set(r.subarray(1, 2), n.length - 2),
        n.set(r.subarray(2, 3), n.length - 3),
        n.set(r.subarray(3, 4), n.length - 4),
        n.set(r.subarray(4, 5), n.length - 5),
        n.set(r.subarray(5, 6), n.length - 6),
        n.set(r.subarray(6, 7), n.length - 7),
        n.set(r.subarray(7, 8), n.length - 8),
        n
      );
    }
    ((l.Sha256Builder = c),
      (l.sigma0 = d),
      (l.sigma1 = m),
      (l.rotateRight = p),
      (l.shiftRight = _));
  },
  98,
);
