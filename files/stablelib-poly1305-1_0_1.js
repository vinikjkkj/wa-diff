__d(
  "stablelib-poly1305-1.0.1",
  ["stablelib-constant-time-1.0.1", "stablelib-wipe-1.0.1"],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      return e && typeof e == "object" && "default" in e ? e.default : e;
    }
    var l = e(n("stablelib-constant-time-1.0.1")),
      s = e(n("stablelib-wipe-1.0.1")),
      u = {},
      c = { exports: u };
    function d() {
      Object.defineProperty(u, "__esModule", { value: !0 });
      var e = l(),
        t = s();
      u.DIGEST_LENGTH = 16;
      var n = (function () {
        function e(e) {
          ((this.digestLength = u.DIGEST_LENGTH),
            (this._buffer = new Uint8Array(16)),
            (this._r = new Uint16Array(10)),
            (this._h = new Uint16Array(10)),
            (this._pad = new Uint16Array(8)),
            (this._leftover = 0),
            (this._fin = 0),
            (this._finished = !1));
          var t = e[0] | (e[1] << 8);
          this._r[0] = t & 8191;
          var n = e[2] | (e[3] << 8);
          this._r[1] = ((t >>> 13) | (n << 3)) & 8191;
          var r = e[4] | (e[5] << 8);
          this._r[2] = ((n >>> 10) | (r << 6)) & 7939;
          var o = e[6] | (e[7] << 8);
          this._r[3] = ((r >>> 7) | (o << 9)) & 8191;
          var a = e[8] | (e[9] << 8);
          ((this._r[4] = ((o >>> 4) | (a << 12)) & 255),
            (this._r[5] = (a >>> 1) & 8190));
          var i = e[10] | (e[11] << 8);
          this._r[6] = ((a >>> 14) | (i << 2)) & 8191;
          var l = e[12] | (e[13] << 8);
          this._r[7] = ((i >>> 11) | (l << 5)) & 8065;
          var s = e[14] | (e[15] << 8);
          ((this._r[8] = ((l >>> 8) | (s << 8)) & 8191),
            (this._r[9] = (s >>> 5) & 127),
            (this._pad[0] = e[16] | (e[17] << 8)),
            (this._pad[1] = e[18] | (e[19] << 8)),
            (this._pad[2] = e[20] | (e[21] << 8)),
            (this._pad[3] = e[22] | (e[23] << 8)),
            (this._pad[4] = e[24] | (e[25] << 8)),
            (this._pad[5] = e[26] | (e[27] << 8)),
            (this._pad[6] = e[28] | (e[29] << 8)),
            (this._pad[7] = e[30] | (e[31] << 8)));
        }
        return (
          (e.prototype._blocks = function (e, t, n) {
            for (
              var r = this._fin ? 0 : 2048,
                o = this._h[0],
                a = this._h[1],
                i = this._h[2],
                l = this._h[3],
                s = this._h[4],
                u = this._h[5],
                c = this._h[6],
                d = this._h[7],
                m = this._h[8],
                p = this._h[9],
                _ = this._r[0],
                f = this._r[1],
                g = this._r[2],
                h = this._r[3],
                y = this._r[4],
                C = this._r[5],
                b = this._r[6],
                v = this._r[7],
                S = this._r[8],
                R = this._r[9];
              n >= 16;
            ) {
              var L = e[t + 0] | (e[t + 1] << 8);
              o += L & 8191;
              var E = e[t + 2] | (e[t + 3] << 8);
              a += ((L >>> 13) | (E << 3)) & 8191;
              var k = e[t + 4] | (e[t + 5] << 8);
              i += ((E >>> 10) | (k << 6)) & 8191;
              var I = e[t + 6] | (e[t + 7] << 8);
              l += ((k >>> 7) | (I << 9)) & 8191;
              var T = e[t + 8] | (e[t + 9] << 8);
              ((s += ((I >>> 4) | (T << 12)) & 8191), (u += (T >>> 1) & 8191));
              var D = e[t + 10] | (e[t + 11] << 8);
              c += ((T >>> 14) | (D << 2)) & 8191;
              var x = e[t + 12] | (e[t + 13] << 8);
              d += ((D >>> 11) | (x << 5)) & 8191;
              var $ = e[t + 14] | (e[t + 15] << 8);
              ((m += ((x >>> 8) | ($ << 8)) & 8191), (p += ($ >>> 5) | r));
              var P = 0,
                N = P;
              ((N += o * _),
                (N += a * (5 * R)),
                (N += i * (5 * S)),
                (N += l * (5 * v)),
                (N += s * (5 * b)),
                (P = N >>> 13),
                (N &= 8191),
                (N += u * (5 * C)),
                (N += c * (5 * y)),
                (N += d * (5 * h)),
                (N += m * (5 * g)),
                (N += p * (5 * f)),
                (P += N >>> 13),
                (N &= 8191));
              var M = P;
              ((M += o * f),
                (M += a * _),
                (M += i * (5 * R)),
                (M += l * (5 * S)),
                (M += s * (5 * v)),
                (P = M >>> 13),
                (M &= 8191),
                (M += u * (5 * b)),
                (M += c * (5 * C)),
                (M += d * (5 * y)),
                (M += m * (5 * h)),
                (M += p * (5 * g)),
                (P += M >>> 13),
                (M &= 8191));
              var w = P;
              ((w += o * g),
                (w += a * f),
                (w += i * _),
                (w += l * (5 * R)),
                (w += s * (5 * S)),
                (P = w >>> 13),
                (w &= 8191),
                (w += u * (5 * v)),
                (w += c * (5 * b)),
                (w += d * (5 * C)),
                (w += m * (5 * y)),
                (w += p * (5 * h)),
                (P += w >>> 13),
                (w &= 8191));
              var A = P;
              ((A += o * h),
                (A += a * g),
                (A += i * f),
                (A += l * _),
                (A += s * (5 * R)),
                (P = A >>> 13),
                (A &= 8191),
                (A += u * (5 * S)),
                (A += c * (5 * v)),
                (A += d * (5 * b)),
                (A += m * (5 * C)),
                (A += p * (5 * y)),
                (P += A >>> 13),
                (A &= 8191));
              var F = P;
              ((F += o * y),
                (F += a * h),
                (F += i * g),
                (F += l * f),
                (F += s * _),
                (P = F >>> 13),
                (F &= 8191),
                (F += u * (5 * R)),
                (F += c * (5 * S)),
                (F += d * (5 * v)),
                (F += m * (5 * b)),
                (F += p * (5 * C)),
                (P += F >>> 13),
                (F &= 8191));
              var O = P;
              ((O += o * C),
                (O += a * y),
                (O += i * h),
                (O += l * g),
                (O += s * f),
                (P = O >>> 13),
                (O &= 8191),
                (O += u * _),
                (O += c * (5 * R)),
                (O += d * (5 * S)),
                (O += m * (5 * v)),
                (O += p * (5 * b)),
                (P += O >>> 13),
                (O &= 8191));
              var B = P;
              ((B += o * b),
                (B += a * C),
                (B += i * y),
                (B += l * h),
                (B += s * g),
                (P = B >>> 13),
                (B &= 8191),
                (B += u * f),
                (B += c * _),
                (B += d * (5 * R)),
                (B += m * (5 * S)),
                (B += p * (5 * v)),
                (P += B >>> 13),
                (B &= 8191));
              var W = P;
              ((W += o * v),
                (W += a * b),
                (W += i * C),
                (W += l * y),
                (W += s * h),
                (P = W >>> 13),
                (W &= 8191),
                (W += u * g),
                (W += c * f),
                (W += d * _),
                (W += m * (5 * R)),
                (W += p * (5 * S)),
                (P += W >>> 13),
                (W &= 8191));
              var q = P;
              ((q += o * S),
                (q += a * v),
                (q += i * b),
                (q += l * C),
                (q += s * y),
                (P = q >>> 13),
                (q &= 8191),
                (q += u * h),
                (q += c * g),
                (q += d * f),
                (q += m * _),
                (q += p * (5 * R)),
                (P += q >>> 13),
                (q &= 8191));
              var U = P;
              ((U += o * R),
                (U += a * S),
                (U += i * v),
                (U += l * b),
                (U += s * C),
                (P = U >>> 13),
                (U &= 8191),
                (U += u * y),
                (U += c * h),
                (U += d * g),
                (U += m * f),
                (U += p * _),
                (P += U >>> 13),
                (U &= 8191),
                (P = ((P << 2) + P) | 0),
                (P = (P + N) | 0),
                (N = P & 8191),
                (P = P >>> 13),
                (M += P),
                (o = N),
                (a = M),
                (i = w),
                (l = A),
                (s = F),
                (u = O),
                (c = B),
                (d = W),
                (m = q),
                (p = U),
                (t += 16),
                (n -= 16));
            }
            ((this._h[0] = o),
              (this._h[1] = a),
              (this._h[2] = i),
              (this._h[3] = l),
              (this._h[4] = s),
              (this._h[5] = u),
              (this._h[6] = c),
              (this._h[7] = d),
              (this._h[8] = m),
              (this._h[9] = p));
          }),
          (e.prototype.finish = function (e, t) {
            t === void 0 && (t = 0);
            var n = new Uint16Array(10),
              r,
              o,
              a,
              i;
            if (this._leftover) {
              for (i = this._leftover, this._buffer[i++] = 1; i < 16; i++)
                this._buffer[i] = 0;
              ((this._fin = 1), this._blocks(this._buffer, 0, 16));
            }
            for (r = this._h[1] >>> 13, this._h[1] &= 8191, i = 2; i < 10; i++)
              ((this._h[i] += r),
                (r = this._h[i] >>> 13),
                (this._h[i] &= 8191));
            for (
              this._h[0] += r * 5,
                r = this._h[0] >>> 13,
                this._h[0] &= 8191,
                this._h[1] += r,
                r = this._h[1] >>> 13,
                this._h[1] &= 8191,
                this._h[2] += r,
                n[0] = this._h[0] + 5,
                r = n[0] >>> 13,
                n[0] &= 8191,
                i = 1;
              i < 10;
              i++
            )
              ((n[i] = this._h[i] + r), (r = n[i] >>> 13), (n[i] &= 8191));
            for (n[9] -= 8192, o = (r ^ 1) - 1, i = 0; i < 10; i++) n[i] &= o;
            for (o = ~o, i = 0; i < 10; i++)
              this._h[i] = (this._h[i] & o) | n[i];
            for (
              this._h[0] = (this._h[0] | (this._h[1] << 13)) & 65535,
                this._h[1] = ((this._h[1] >>> 3) | (this._h[2] << 10)) & 65535,
                this._h[2] = ((this._h[2] >>> 6) | (this._h[3] << 7)) & 65535,
                this._h[3] = ((this._h[3] >>> 9) | (this._h[4] << 4)) & 65535,
                this._h[4] =
                  ((this._h[4] >>> 12) |
                    (this._h[5] << 1) |
                    (this._h[6] << 14)) &
                  65535,
                this._h[5] = ((this._h[6] >>> 2) | (this._h[7] << 11)) & 65535,
                this._h[6] = ((this._h[7] >>> 5) | (this._h[8] << 8)) & 65535,
                this._h[7] = ((this._h[8] >>> 8) | (this._h[9] << 5)) & 65535,
                a = this._h[0] + this._pad[0],
                this._h[0] = a & 65535,
                i = 1;
              i < 8;
              i++
            )
              ((a = (((this._h[i] + this._pad[i]) | 0) + (a >>> 16)) | 0),
                (this._h[i] = a & 65535));
            return (
              (e[t + 0] = this._h[0] >>> 0),
              (e[t + 1] = this._h[0] >>> 8),
              (e[t + 2] = this._h[1] >>> 0),
              (e[t + 3] = this._h[1] >>> 8),
              (e[t + 4] = this._h[2] >>> 0),
              (e[t + 5] = this._h[2] >>> 8),
              (e[t + 6] = this._h[3] >>> 0),
              (e[t + 7] = this._h[3] >>> 8),
              (e[t + 8] = this._h[4] >>> 0),
              (e[t + 9] = this._h[4] >>> 8),
              (e[t + 10] = this._h[5] >>> 0),
              (e[t + 11] = this._h[5] >>> 8),
              (e[t + 12] = this._h[6] >>> 0),
              (e[t + 13] = this._h[6] >>> 8),
              (e[t + 14] = this._h[7] >>> 0),
              (e[t + 15] = this._h[7] >>> 8),
              (this._finished = !0),
              this
            );
          }),
          (e.prototype.update = function (e) {
            var t = 0,
              n = e.length,
              r;
            if (this._leftover) {
              ((r = 16 - this._leftover), r > n && (r = n));
              for (var o = 0; o < r; o++)
                this._buffer[this._leftover + o] = e[t + o];
              if (
                ((n -= r), (t += r), (this._leftover += r), this._leftover < 16)
              )
                return this;
              (this._blocks(this._buffer, 0, 16), (this._leftover = 0));
            }
            if (
              (n >= 16 &&
                ((r = n - (n % 16)), this._blocks(e, t, r), (t += r), (n -= r)),
              n)
            ) {
              for (var o = 0; o < n; o++)
                this._buffer[this._leftover + o] = e[t + o];
              this._leftover += n;
            }
            return this;
          }),
          (e.prototype.digest = function () {
            if (this._finished) throw new Error("Poly1305 was finished");
            var e = new Uint8Array(16);
            return (this.finish(e), e);
          }),
          (e.prototype.clean = function () {
            return (
              t.wipe(this._buffer),
              t.wipe(this._r),
              t.wipe(this._h),
              t.wipe(this._pad),
              (this._leftover = 0),
              (this._fin = 0),
              (this._finished = !0),
              this
            );
          }),
          e
        );
      })();
      u.Poly1305 = n;
      function r(e, t) {
        var r = new n(e);
        r.update(t);
        var o = r.digest();
        return (r.clean(), o);
      }
      u.oneTimeAuth = r;
      function o(t, n) {
        return t.length !== u.DIGEST_LENGTH || n.length !== u.DIGEST_LENGTH
          ? !1
          : e.equal(t, n);
      }
      u.equal = o;
    }
    var m = !1;
    function p() {
      return (m || ((m = !0), d()), c.exports);
    }
    function _(e) {
      switch (e) {
        case void 0:
          return p();
      }
    }
    a.exports = _;
  },
  null,
);
