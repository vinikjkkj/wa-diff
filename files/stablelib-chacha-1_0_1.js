__d(
  "stablelib-chacha-1.0.1",
  ["stablelib-binary-1.0.1", "stablelib-wipe-1.0.1"],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      return e && typeof e == "object" && "default" in e ? e.default : e;
    }
    var l = e(n("stablelib-binary-1.0.1")),
      s = e(n("stablelib-wipe-1.0.1")),
      u = {},
      c = { exports: u };
    function d() {
      Object.defineProperty(u, "__esModule", { value: !0 });
      var e = l(),
        t = s(),
        n = 20;
      function r(t, r, o) {
        for (
          var a = 1634760805,
            i = 857760878,
            l = 2036477234,
            s = 1797285236,
            u = (o[3] << 24) | (o[2] << 16) | (o[1] << 8) | o[0],
            c = (o[7] << 24) | (o[6] << 16) | (o[5] << 8) | o[4],
            d = (o[11] << 24) | (o[10] << 16) | (o[9] << 8) | o[8],
            m = (o[15] << 24) | (o[14] << 16) | (o[13] << 8) | o[12],
            p = (o[19] << 24) | (o[18] << 16) | (o[17] << 8) | o[16],
            _ = (o[23] << 24) | (o[22] << 16) | (o[21] << 8) | o[20],
            f = (o[27] << 24) | (o[26] << 16) | (o[25] << 8) | o[24],
            g = (o[31] << 24) | (o[30] << 16) | (o[29] << 8) | o[28],
            h = (r[3] << 24) | (r[2] << 16) | (r[1] << 8) | r[0],
            y = (r[7] << 24) | (r[6] << 16) | (r[5] << 8) | r[4],
            C = (r[11] << 24) | (r[10] << 16) | (r[9] << 8) | r[8],
            b = (r[15] << 24) | (r[14] << 16) | (r[13] << 8) | r[12],
            v = a,
            S = i,
            R = l,
            L = s,
            E = u,
            k = c,
            I = d,
            T = m,
            D = p,
            x = _,
            $ = f,
            P = g,
            N = h,
            M = y,
            w = C,
            A = b,
            F = 0;
          F < n;
          F += 2
        )
          ((v = (v + E) | 0),
            (N ^= v),
            (N = (N >>> 16) | (N << 16)),
            (D = (D + N) | 0),
            (E ^= D),
            (E = (E >>> 20) | (E << 12)),
            (S = (S + k) | 0),
            (M ^= S),
            (M = (M >>> 16) | (M << 16)),
            (x = (x + M) | 0),
            (k ^= x),
            (k = (k >>> 20) | (k << 12)),
            (R = (R + I) | 0),
            (w ^= R),
            (w = (w >>> 16) | (w << 16)),
            ($ = ($ + w) | 0),
            (I ^= $),
            (I = (I >>> 20) | (I << 12)),
            (L = (L + T) | 0),
            (A ^= L),
            (A = (A >>> 16) | (A << 16)),
            (P = (P + A) | 0),
            (T ^= P),
            (T = (T >>> 20) | (T << 12)),
            (R = (R + I) | 0),
            (w ^= R),
            (w = (w >>> 24) | (w << 8)),
            ($ = ($ + w) | 0),
            (I ^= $),
            (I = (I >>> 25) | (I << 7)),
            (L = (L + T) | 0),
            (A ^= L),
            (A = (A >>> 24) | (A << 8)),
            (P = (P + A) | 0),
            (T ^= P),
            (T = (T >>> 25) | (T << 7)),
            (S = (S + k) | 0),
            (M ^= S),
            (M = (M >>> 24) | (M << 8)),
            (x = (x + M) | 0),
            (k ^= x),
            (k = (k >>> 25) | (k << 7)),
            (v = (v + E) | 0),
            (N ^= v),
            (N = (N >>> 24) | (N << 8)),
            (D = (D + N) | 0),
            (E ^= D),
            (E = (E >>> 25) | (E << 7)),
            (v = (v + k) | 0),
            (A ^= v),
            (A = (A >>> 16) | (A << 16)),
            ($ = ($ + A) | 0),
            (k ^= $),
            (k = (k >>> 20) | (k << 12)),
            (S = (S + I) | 0),
            (N ^= S),
            (N = (N >>> 16) | (N << 16)),
            (P = (P + N) | 0),
            (I ^= P),
            (I = (I >>> 20) | (I << 12)),
            (R = (R + T) | 0),
            (M ^= R),
            (M = (M >>> 16) | (M << 16)),
            (D = (D + M) | 0),
            (T ^= D),
            (T = (T >>> 20) | (T << 12)),
            (L = (L + E) | 0),
            (w ^= L),
            (w = (w >>> 16) | (w << 16)),
            (x = (x + w) | 0),
            (E ^= x),
            (E = (E >>> 20) | (E << 12)),
            (R = (R + T) | 0),
            (M ^= R),
            (M = (M >>> 24) | (M << 8)),
            (D = (D + M) | 0),
            (T ^= D),
            (T = (T >>> 25) | (T << 7)),
            (L = (L + E) | 0),
            (w ^= L),
            (w = (w >>> 24) | (w << 8)),
            (x = (x + w) | 0),
            (E ^= x),
            (E = (E >>> 25) | (E << 7)),
            (S = (S + I) | 0),
            (N ^= S),
            (N = (N >>> 24) | (N << 8)),
            (P = (P + N) | 0),
            (I ^= P),
            (I = (I >>> 25) | (I << 7)),
            (v = (v + k) | 0),
            (A ^= v),
            (A = (A >>> 24) | (A << 8)),
            ($ = ($ + A) | 0),
            (k ^= $),
            (k = (k >>> 25) | (k << 7)));
        (e.writeUint32LE((v + a) | 0, t, 0),
          e.writeUint32LE((S + i) | 0, t, 4),
          e.writeUint32LE((R + l) | 0, t, 8),
          e.writeUint32LE((L + s) | 0, t, 12),
          e.writeUint32LE((E + u) | 0, t, 16),
          e.writeUint32LE((k + c) | 0, t, 20),
          e.writeUint32LE((I + d) | 0, t, 24),
          e.writeUint32LE((T + m) | 0, t, 28),
          e.writeUint32LE((D + p) | 0, t, 32),
          e.writeUint32LE((x + _) | 0, t, 36),
          e.writeUint32LE(($ + f) | 0, t, 40),
          e.writeUint32LE((P + g) | 0, t, 44),
          e.writeUint32LE((N + h) | 0, t, 48),
          e.writeUint32LE((M + y) | 0, t, 52),
          e.writeUint32LE((w + C) | 0, t, 56),
          e.writeUint32LE((A + b) | 0, t, 60));
      }
      function o(e, n, o, a, l) {
        if ((l === void 0 && (l = 0), e.length !== 32))
          throw new Error("ChaCha: key size must be 32 bytes");
        if (a.length < o.length)
          throw new Error("ChaCha: destination is shorter than source");
        var s, u;
        if (l === 0) {
          if (n.length !== 8 && n.length !== 12)
            throw new Error("ChaCha nonce must be 8 or 12 bytes");
          ((s = new Uint8Array(16)), (u = s.length - n.length), s.set(n, u));
        } else {
          if (n.length !== 16)
            throw new Error("ChaCha nonce with counter must be 16 bytes");
          ((s = n), (u = l));
        }
        for (var c = new Uint8Array(64), d = 0; d < o.length; d += 64) {
          r(c, s, e);
          for (var m = d; m < d + 64 && m < o.length; m++)
            a[m] = o[m] ^ c[m - d];
          i(s, 0, u);
        }
        return (t.wipe(c), l === 0 && t.wipe(s), a);
      }
      u.streamXOR = o;
      function a(e, n, r, a) {
        return (a === void 0 && (a = 0), t.wipe(r), o(e, n, r, r, a));
      }
      u.stream = a;
      function i(e, t, n) {
        for (var r = 1; n--; )
          ((r = (r + (e[t] & 255)) | 0), (e[t] = r & 255), (r >>>= 8), t++);
        if (r > 0) throw new Error("ChaCha: counter overflow");
      }
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
