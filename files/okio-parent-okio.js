__d(
  "okio-parent-okio",
  ["kotlin-kotlin-stdlib"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = Math.imul;
    ((e = o("kotlin-kotlin-stdlib")).initMetadataForCompanion1wyw17z38v6ac(p),
      e.initMetadataForClassbxx6q50dy2s7(g, "Segment", c),
      e.initMetadataForCompanion1wyw17z38v6ac(z),
      e.initMetadataForClassbxx6q50dy2s7(Q, "ByteString"),
      e.initMetadataForClassbxx6q50dy2s7(
        Y,
        "SegmentedByteString",
        e.VOID3gxj6tk5isa35,
        Q,
      ),
      e.initMetadataForClassbxx6q50dy2s7(J, "UnsafeCursor", J),
      e.initMetadataForClassbxx6q50dy2s7(Z, "Buffer", Z),
      e.initMetadataForClassbxx6q50dy2s7(
        te,
        "ArrayIndexOutOfBoundsException",
        e.VOID3gxj6tk5isa35,
        e.IndexOutOfBoundsException1qfr429iumro0,
      ),
      e.initMetadataForClassbxx6q50dy2s7(
        ue,
        "IOException",
        se,
        e.Exceptiondt2hlxn7j7vw,
      ),
      e.initMetadataForClassbxx6q50dy2s7(oe, "EOFException", re, ue),
      e.initMetadataForObject1cxne3s9w65el(de, "SegmentPool"));
    function u(e) {
      return (
        g.call(e),
        (e.e1p_1 = new Int8Array(8192)),
        (e.i1p_1 = !0),
        (e.h1p_1 = !1),
        e
      );
    }
    function c() {
      return u(
        o("kotlin-kotlin-stdlib").objectCreate1ve4bgxiu4x98(
          o("kotlin-kotlin-stdlib").protoOf180f3jzyo7rfj(g),
        ),
      );
    }
    function d(e, t, n, r, o, a) {
      return (
        g.call(a),
        (a.e1p_1 = e),
        (a.f1p_1 = t),
        (a.g1p_1 = n),
        (a.h1p_1 = r),
        (a.i1p_1 = o),
        a
      );
    }
    function m(e, t, n, r, a) {
      return d(
        e,
        t,
        n,
        r,
        a,
        o("kotlin-kotlin-stdlib").objectCreate1ve4bgxiu4x98(
          o("kotlin-kotlin-stdlib").protoOf180f3jzyo7rfj(g),
        ),
      );
    }
    function p() {
      ((this.l1p_1 = 8192), (this.m1p_1 = 1024));
    }
    var _;
    function f() {
      return _;
    }
    ((e.protoOf180f3jzyo7rfj(g).n1p = function () {
      return ((this.h1p_1 = !0), m(this.e1p_1, this.f1p_1, this.g1p_1, !0, !1));
    }),
      (e.protoOf180f3jzyo7rfj(g).o1p = function () {
        var e = this.j1p_1 !== this ? this.j1p_1 : null;
        return (
          (o("kotlin-kotlin-stdlib").ensureNotNull1e947j3ixpazm(
            this.k1p_1,
          ).j1p_1 = this.j1p_1),
          (o("kotlin-kotlin-stdlib").ensureNotNull1e947j3ixpazm(
            this.j1p_1,
          ).k1p_1 = this.k1p_1),
          (this.j1p_1 = null),
          (this.k1p_1 = null),
          e
        );
      }),
      (e.protoOf180f3jzyo7rfj(g).p1p = function (e) {
        return (
          (e.k1p_1 = this),
          (e.j1p_1 = this.j1p_1),
          (o("kotlin-kotlin-stdlib").ensureNotNull1e947j3ixpazm(
            this.j1p_1,
          ).k1p_1 = e),
          (this.j1p_1 = e),
          e
        );
      }),
      (e.protoOf180f3jzyo7rfj(g).q1p = function (e) {
        if (!(e > 0 && e <= ((this.g1p_1 - this.f1p_1) | 0))) {
          var t = "byteCount out of range";
          throw o(
            "kotlin-kotlin-stdlib",
          ).IllegalArgumentException_init_$Create$3ewkh27kzt8z8(
            o("kotlin-kotlin-stdlib").toString1pkumu07cwy4m(t),
          );
        }
        var n;
        if (e >= 1024) n = this.n1p();
        else {
          n = me.t1p();
          var r = this.e1p_1,
            a = n.e1p_1,
            i = this.f1p_1,
            l = (this.f1p_1 + e) | 0,
            s = r;
          o("kotlin-kotlin-stdlib").arrayCopytctsywo3h7gj(s, a, 0, i, l);
        }
        return (
          (n.g1p_1 = (n.f1p_1 + e) | 0),
          (this.f1p_1 = (this.f1p_1 + e) | 0),
          o("kotlin-kotlin-stdlib")
            .ensureNotNull1e947j3ixpazm(this.k1p_1)
            .p1p(n),
          n
        );
      }),
      (e.protoOf180f3jzyo7rfj(g).u1p = function () {
        if (this.k1p_1 === this) {
          var e = "cannot compact";
          throw o(
            "kotlin-kotlin-stdlib",
          ).IllegalStateException_init_$Create$2w9444nebyjns(
            o("kotlin-kotlin-stdlib").toString1pkumu07cwy4m(e),
          );
        }
        if (
          !o("kotlin-kotlin-stdlib").ensureNotNull1e947j3ixpazm(this.k1p_1)
            .i1p_1
        )
          return o("kotlin-kotlin-stdlib").Unit_instance1fbcbse1fwigr;
        var t = (this.g1p_1 - this.f1p_1) | 0,
          n =
            (((8192 -
              o("kotlin-kotlin-stdlib").ensureNotNull1e947j3ixpazm(this.k1p_1)
                .g1p_1) |
              0) +
              (o("kotlin-kotlin-stdlib").ensureNotNull1e947j3ixpazm(this.k1p_1)
                .h1p_1
                ? 0
                : o("kotlin-kotlin-stdlib").ensureNotNull1e947j3ixpazm(
                    this.k1p_1,
                  ).f1p_1)) |
            0;
        if (t > n) return o("kotlin-kotlin-stdlib").Unit_instance1fbcbse1fwigr;
        (this.v1p(
          o("kotlin-kotlin-stdlib").ensureNotNull1e947j3ixpazm(this.k1p_1),
          t,
        ),
          this.o1p(),
          me.w1p(this));
      }),
      (e.protoOf180f3jzyo7rfj(g).v1p = function (e, t) {
        if (!e.i1p_1) {
          var n = "only owner can write";
          throw o(
            "kotlin-kotlin-stdlib",
          ).IllegalStateException_init_$Create$2w9444nebyjns(
            o("kotlin-kotlin-stdlib").toString1pkumu07cwy4m(n),
          );
        }
        if (((e.g1p_1 + t) | 0) > 8192) {
          if (e.h1p_1 || ((((e.g1p_1 + t) | 0) - e.f1p_1) | 0) > 8192)
            throw o(
              "kotlin-kotlin-stdlib",
            ).IllegalArgumentException_init_$Create$3vjwoodhlckbo();
          var r = e.e1p_1,
            a = e.e1p_1,
            i = e.f1p_1,
            l = e.g1p_1,
            s = r;
          (o("kotlin-kotlin-stdlib").arrayCopytctsywo3h7gj(s, a, 0, i, l),
            (e.g1p_1 = (e.g1p_1 - e.f1p_1) | 0),
            (e.f1p_1 = 0));
        }
        var u = this.e1p_1,
          c = e.e1p_1,
          d = e.g1p_1,
          m = this.f1p_1,
          p = (this.f1p_1 + t) | 0,
          _ = u;
        (o("kotlin-kotlin-stdlib").arrayCopytctsywo3h7gj(_, c, d, m, p),
          (e.g1p_1 = (e.g1p_1 + t) | 0),
          (this.f1p_1 = (this.f1p_1 + t) | 0));
      }));
    function g() {
      ((this.f1p_1 = 0),
        (this.g1p_1 = 0),
        (this.h1p_1 = !1),
        (this.i1p_1 = !1),
        (this.j1p_1 = null),
        (this.k1p_1 = null));
    }
    function h(e, t, n) {
      if (
        ((t = t === o("kotlin-kotlin-stdlib").VOID3gxj6tk5isa35 ? 0 : t),
        (n = n === o("kotlin-kotlin-stdlib").VOID3gxj6tk5isa35 ? e.length : n),
        !(t >= 0))
      ) {
        var r = "beginIndex < 0: " + t;
        throw o(
          "kotlin-kotlin-stdlib",
        ).IllegalArgumentException_init_$Create$3ewkh27kzt8z8(
          o("kotlin-kotlin-stdlib").toString1pkumu07cwy4m(r),
        );
      }
      if (!(n >= t)) {
        var a = "endIndex < beginIndex: " + n + " < " + t;
        throw o(
          "kotlin-kotlin-stdlib",
        ).IllegalArgumentException_init_$Create$3ewkh27kzt8z8(
          o("kotlin-kotlin-stdlib").toString1pkumu07cwy4m(a),
        );
      }
      if (!(n <= e.length)) {
        var i = "endIndex > string.length: " + n + " > " + e.length;
        throw o(
          "kotlin-kotlin-stdlib",
        ).IllegalArgumentException_init_$Create$3ewkh27kzt8z8(
          o("kotlin-kotlin-stdlib").toString1pkumu07cwy4m(i),
        );
      }
      for (var l = BigInt(0), s = t; s < n; ) {
        var u = o("kotlin-kotlin-stdlib").charCodeAt1yspne1d8erbm(e, s),
          c = o("kotlin-kotlin-stdlib").Char__toInt_impl_vasixd1agw9q2fuvclj(u);
        if (c < 128) {
          var d = l;
          ((l = o("kotlin-kotlin-stdlib").add2suhfggl4zvkk(
            d,
            o("kotlin-kotlin-stdlib").get_ONEazvfdh9ju3d4(),
          )),
            (s = (s + 1) | 0));
        } else if (c < 2048) {
          var m = l;
          ((l = o("kotlin-kotlin-stdlib").add2suhfggl4zvkk(
            m,
            o("kotlin-kotlin-stdlib").fromInt2ii0rejb1w62w(2),
          )),
            (s = (s + 1) | 0));
        } else if (c < 55296 || c > 57343) {
          var p = l;
          ((l = o("kotlin-kotlin-stdlib").add2suhfggl4zvkk(
            p,
            o("kotlin-kotlin-stdlib").fromInt2ii0rejb1w62w(3),
          )),
            (s = (s + 1) | 0));
        } else {
          var _;
          if (((s + 1) | 0) < n) {
            var f = o("kotlin-kotlin-stdlib").charCodeAt1yspne1d8erbm(
              e,
              (s + 1) | 0,
            );
            _ = o("kotlin-kotlin-stdlib").Char__toInt_impl_vasixd1agw9q2fuvclj(
              f,
            );
          } else _ = 0;
          var g = _;
          if (c > 56319 || g < 56320 || g > 57343) {
            var h = l;
            ((l = o("kotlin-kotlin-stdlib").add2suhfggl4zvkk(
              h,
              o("kotlin-kotlin-stdlib").get_ONEazvfdh9ju3d4(),
            )),
              (s = (s + 1) | 0));
          } else {
            var y = l;
            ((l = o("kotlin-kotlin-stdlib").add2suhfggl4zvkk(
              y,
              o("kotlin-kotlin-stdlib").fromInt2ii0rejb1w62w(4),
            )),
              (s = (s + 2) | 0));
          }
        }
      }
      return l;
    }
    function y() {
      return (x(), C);
    }
    var C;
    function b() {
      return (x(), v);
    }
    var v;
    function S(e) {
      return (
        x(),
        ((e & -16777216) >>> 24) |
          0 |
          (((e & 16711680) >>> 8) | 0) |
          ((e & 65280) << 8) |
          ((e & 255) << 24)
      );
    }
    function R(e) {
      var t;
      return (
        x(),
        (t = o("kotlin-kotlin-stdlib")).shiftRightUnsigned1ga7wnvbv2qur(
          e & -BigInt(72057594037927936),
          56,
        ) |
          t.shiftRightUnsigned1ga7wnvbv2qur(e & BigInt(71776119061217280), 40) |
          t.shiftRightUnsigned1ga7wnvbv2qur(e & BigInt(280375465082880), 24) |
          t.shiftRightUnsigned1ga7wnvbv2qur(e & BigInt(1095216660480), 8) |
          t.shiftLeft3tsh2sstjchzn(e & BigInt(4278190080), 8) |
          t.shiftLeft3tsh2sstjchzn(e & BigInt(16711680), 24) |
          t.shiftLeft3tsh2sstjchzn(e & BigInt(65280), 40) |
          t.shiftLeft3tsh2sstjchzn(e & BigInt(255), 56)
      );
    }
    function L(e, t) {
      return (x(), t === b() ? e.n() : t);
    }
    function E(e, t, n, r, o) {
      x();
      var a = 0;
      if (a < o)
        do {
          var i = a;
          if (((a = (a + 1) | 0), e[(i + t) | 0] !== n[(i + r) | 0])) return !1;
        } while (a < o);
      return !0;
    }
    function k(e, t) {
      return (x(), t === b() ? e.length : t);
    }
    function I(e, t, n) {
      if (
        (x(),
        (t | n) < BigInt(0) ||
          t > e ||
          o("kotlin-kotlin-stdlib").subtract2orl8z9upxd9l(e, t) < n)
      )
        throw new te(
          "size=" +
            e.toString() +
            " offset=" +
            t.toString() +
            " byteCount=" +
            n.toString(),
        );
    }
    function T(e) {
      return (x(), e === y() ? new J() : e);
    }
    var D;
    function x() {
      D || ((D = !0), (C = new J()), (v = -1234567890));
    }
    function $(e) {
      var t = new Int8Array(s(4, e.length)),
        n = 0,
        r = e.length;
      if (n < r)
        do {
          var a = n;
          n = (n + 1) | 0;
          var i = o("kotlin-kotlin-stdlib").charCodeAt1yspne1d8erbm(e, a);
          if (
            o("kotlin-kotlin-stdlib").Char__compareTo_impl_ypi4mbdrkik40uwhqc(
              i,
              o("kotlin-kotlin-stdlib")._Char___init__impl__6a9atx2js6krycynjoo(
                128,
              ),
            ) >= 0
          ) {
            for (var l = a, u = e.length, c = a; c < u; ) {
              var d = o("kotlin-kotlin-stdlib").charCodeAt1yspne1d8erbm(e, c);
              if (
                o(
                  "kotlin-kotlin-stdlib",
                ).Char__compareTo_impl_ypi4mbdrkik40uwhqc(
                  d,
                  o(
                    "kotlin-kotlin-stdlib",
                  )._Char___init__impl__6a9atx2js6krycynjoo(128),
                ) < 0
              ) {
                var m = o(
                    "kotlin-kotlin-stdlib",
                  ).Char__toInt_impl_vasixd1agw9q2fuvclj(d),
                  p = o("kotlin-kotlin-stdlib").toByte4i43936u611k(m),
                  _ = l;
                for (
                  l = (_ + 1) | 0, t[_] = p, c = (c + 1) | 0;
                  c < u &&
                  o(
                    "kotlin-kotlin-stdlib",
                  ).Char__compareTo_impl_ypi4mbdrkik40uwhqc(
                    o("kotlin-kotlin-stdlib").charCodeAt1yspne1d8erbm(e, c),
                    o(
                      "kotlin-kotlin-stdlib",
                    )._Char___init__impl__6a9atx2js6krycynjoo(128),
                  ) < 0;
                ) {
                  var f = c;
                  c = (f + 1) | 0;
                  var g = o("kotlin-kotlin-stdlib").charCodeAt1yspne1d8erbm(
                      e,
                      f,
                    ),
                    h = o(
                      "kotlin-kotlin-stdlib",
                    ).Char__toInt_impl_vasixd1agw9q2fuvclj(g),
                    y = o("kotlin-kotlin-stdlib").toByte4i43936u611k(h),
                    C = l;
                  ((l = (C + 1) | 0), (t[C] = y));
                }
              } else if (
                o(
                  "kotlin-kotlin-stdlib",
                ).Char__compareTo_impl_ypi4mbdrkik40uwhqc(
                  d,
                  o(
                    "kotlin-kotlin-stdlib",
                  )._Char___init__impl__6a9atx2js6krycynjoo(2048),
                ) < 0
              ) {
                var b,
                  v = (b = o(
                    "kotlin-kotlin-stdlib",
                  )).Char__toInt_impl_vasixd1agw9q2fuvclj(d),
                  S = b.toByte4i43936u611k((v >> 6) | 192),
                  R = l;
                ((l = (R + 1) | 0), (t[R] = S));
                var L = b.Char__toInt_impl_vasixd1agw9q2fuvclj(d),
                  E = b.toByte4i43936u611k((L & 63) | 128),
                  k = l;
                ((l = (k + 1) | 0), (t[k] = E), (c = (c + 1) | 0));
              } else if (
                o(
                  "kotlin-kotlin-stdlib",
                )._Char___init__impl__6a9atx2js6krycynjoo(55296) <= d &&
                d <=
                  o(
                    "kotlin-kotlin-stdlib",
                  )._Char___init__impl__6a9atx2js6krycynjoo(57343)
              ) {
                var A;
                if (
                  o(
                    "kotlin-kotlin-stdlib",
                  ).Char__compareTo_impl_ypi4mbdrkik40uwhqc(
                    d,
                    o(
                      "kotlin-kotlin-stdlib",
                    )._Char___init__impl__6a9atx2js6krycynjoo(56319),
                  ) > 0 ||
                  u <= ((c + 1) | 0)
                )
                  A = !0;
                else {
                  var F = o("kotlin-kotlin-stdlib").charCodeAt1yspne1d8erbm(
                    e,
                    (c + 1) | 0,
                  );
                  A = !(
                    o(
                      "kotlin-kotlin-stdlib",
                    )._Char___init__impl__6a9atx2js6krycynjoo(56320) <= F &&
                    F <=
                      o(
                        "kotlin-kotlin-stdlib",
                      )._Char___init__impl__6a9atx2js6krycynjoo(57343)
                  );
                }
                if (A) {
                  var O = l;
                  ((l = (O + 1) | 0), (t[O] = 63), (c = (c + 1) | 0));
                } else {
                  var b,
                    B =
                      (b = o(
                        "kotlin-kotlin-stdlib",
                      )).Char__toInt_impl_vasixd1agw9q2fuvclj(d) << 10,
                    W = b.charCodeAt1yspne1d8erbm(e, (c + 1) | 0),
                    q =
                      (((B + b.Char__toInt_impl_vasixd1agw9q2fuvclj(W)) | 0) +
                        -56613888) |
                      0,
                    U = b.toByte4i43936u611k((q >> 18) | 240),
                    V = l;
                  ((l = (V + 1) | 0), (t[V] = U));
                  var H = b.toByte4i43936u611k(((q >> 12) & 63) | 128),
                    G = l;
                  ((l = (G + 1) | 0), (t[G] = H));
                  var z = b.toByte4i43936u611k(((q >> 6) & 63) | 128),
                    j = l;
                  ((l = (j + 1) | 0), (t[j] = z));
                  var K = b.toByte4i43936u611k((q & 63) | 128),
                    Q = l;
                  ((l = (Q + 1) | 0), (t[Q] = K), (c = (c + 2) | 0));
                }
              } else {
                var b,
                  I = (b = o(
                    "kotlin-kotlin-stdlib",
                  )).Char__toInt_impl_vasixd1agw9q2fuvclj(d),
                  T = b.toByte4i43936u611k((I >> 12) | 224),
                  D = l;
                ((l = (D + 1) | 0), (t[D] = T));
                var x = b.Char__toInt_impl_vasixd1agw9q2fuvclj(d),
                  $ = b.toByte4i43936u611k(((x >> 6) & 63) | 128),
                  P = l;
                ((l = (P + 1) | 0), (t[P] = $));
                var N = b.Char__toInt_impl_vasixd1agw9q2fuvclj(d),
                  M = b.toByte4i43936u611k((N & 63) | 128),
                  w = l;
                ((l = (w + 1) | 0), (t[w] = M), (c = (c + 1) | 0));
              }
            }
            return o("kotlin-kotlin-stdlib").copyOfwy6h3t5vzqpl(t, l);
          }
          var X = o(
            "kotlin-kotlin-stdlib",
          ).Char__toInt_impl_vasixd1agw9q2fuvclj(i);
          t[a] = o("kotlin-kotlin-stdlib").toByte4i43936u611k(X);
        } while (n < r);
      return o("kotlin-kotlin-stdlib").copyOfwy6h3t5vzqpl(t, e.length);
    }
    function P(e, t, n) {
      if (
        ((t = t === o("kotlin-kotlin-stdlib").VOID3gxj6tk5isa35 ? 0 : t),
        (n = n === o("kotlin-kotlin-stdlib").VOID3gxj6tk5isa35 ? e.length : n),
        t < 0 || n > e.length || t > n)
      )
        throw new te(
          "size=" + e.length + " beginIndex=" + t + " endIndex=" + n,
        );
      for (
        var r = o("kotlin-kotlin-stdlib").charArray2ujmm1qusno00((n - t) | 0),
          a = 0,
          i = t;
        i < n;
      ) {
        var l = e[i];
        if (l >= 0) {
          var s = o("kotlin-kotlin-stdlib").numberToChar93r9buh19yek(l),
            u = a;
          for (
            a = (u + 1) | 0, r[u] = s, i = (i + 1) | 0;
            i < n && e[i] >= 0;
          ) {
            var c = i;
            i = (c + 1) | 0;
            var d = o("kotlin-kotlin-stdlib").numberToChar93r9buh19yek(e[c]),
              m = a;
            ((a = (m + 1) | 0), (r[m] = d));
          }
        } else if (l >> 5 === -2) {
          var p = i,
            _ = i,
            f;
          e: {
            if (n <= ((_ + 1) | 0)) {
              var g = o("kotlin-kotlin-stdlib").numberToChar93r9buh19yek(65533),
                h = a;
              ((a = (h + 1) | 0), (r[h] = g), (f = 1));
              break e;
            }
            var y = e[_],
              C = e[(_ + 1) | 0];
            if ((C & 192) !== 128) {
              var b = o("kotlin-kotlin-stdlib").numberToChar93r9buh19yek(65533),
                v = a;
              ((a = (v + 1) | 0), (r[v] = b), (f = 1));
              break e;
            }
            var S = 3968 ^ C ^ (y << 6);
            if (S < 128) {
              var R = o("kotlin-kotlin-stdlib").numberToChar93r9buh19yek(65533),
                L = a;
              ((a = (L + 1) | 0), (r[L] = R));
            } else {
              var E = o("kotlin-kotlin-stdlib").numberToChar93r9buh19yek(S),
                k = a;
              ((a = (k + 1) | 0), (r[k] = E));
            }
            f = 2;
          }
          i = (p + f) | 0;
        } else if (l >> 4 === -2) {
          var I = i,
            T = i,
            D;
          e: {
            if (n <= ((T + 2) | 0)) {
              var x = o("kotlin-kotlin-stdlib").numberToChar93r9buh19yek(65533),
                $ = a;
              ((a = ($ + 1) | 0), (r[$] = x));
              var P;
              if (
                (n <= ((T + 1) | 0)
                  ? (P = !0)
                  : (P = (e[(T + 1) | 0] & 192) !== 128),
                P)
              ) {
                D = 1;
                break e;
              } else {
                D = 2;
                break e;
              }
            }
            var N = e[T],
              M = e[(T + 1) | 0];
            if ((M & 192) !== 128) {
              var w = o("kotlin-kotlin-stdlib").numberToChar93r9buh19yek(65533),
                A = a;
              ((a = (A + 1) | 0), (r[A] = w), (D = 1));
              break e;
            }
            var F = e[(T + 2) | 0];
            if ((F & 192) !== 128) {
              var O = o("kotlin-kotlin-stdlib").numberToChar93r9buh19yek(65533),
                B = a;
              ((a = (B + 1) | 0), (r[B] = O), (D = 2));
              break e;
            }
            var W = -123008 ^ F ^ (M << 6) ^ (N << 12);
            if (W < 2048) {
              var q = o("kotlin-kotlin-stdlib").numberToChar93r9buh19yek(65533),
                U = a;
              ((a = (U + 1) | 0), (r[U] = q));
            } else if (55296 <= W && W <= 57343) {
              var V = o("kotlin-kotlin-stdlib").numberToChar93r9buh19yek(65533),
                H = a;
              ((a = (H + 1) | 0), (r[H] = V));
            } else {
              var G = o("kotlin-kotlin-stdlib").numberToChar93r9buh19yek(W),
                z = a;
              ((a = (z + 1) | 0), (r[z] = G));
            }
            D = 3;
          }
          i = (I + D) | 0;
        } else if (l >> 3 === -2) {
          var j = i,
            K = i,
            Q;
          e: {
            if (n <= ((K + 3) | 0)) {
              var X = o(
                  "kotlin-kotlin-stdlib",
                )._Char___init__impl__6a9atx2js6krycynjoo(65533),
                Y = a;
              ((a = (Y + 1) | 0), (r[Y] = X));
              var J;
              if (
                (n <= ((K + 1) | 0)
                  ? (J = !0)
                  : (J = (e[(K + 1) | 0] & 192) !== 128),
                J)
              ) {
                Q = 1;
                break e;
              } else {
                var Z;
                if (
                  (n <= ((K + 2) | 0)
                    ? (Z = !0)
                    : (Z = (e[(K + 2) | 0] & 192) !== 128),
                  Z)
                ) {
                  Q = 2;
                  break e;
                } else {
                  Q = 3;
                  break e;
                }
              }
            }
            var ee = e[K],
              ne = e[(K + 1) | 0];
            if ((ne & 192) !== 128) {
              var re = o(
                  "kotlin-kotlin-stdlib",
                )._Char___init__impl__6a9atx2js6krycynjoo(65533),
                oe = a;
              ((a = (oe + 1) | 0), (r[oe] = re), (Q = 1));
              break e;
            }
            var ae = e[(K + 2) | 0];
            if ((ae & 192) !== 128) {
              var ie = o(
                  "kotlin-kotlin-stdlib",
                )._Char___init__impl__6a9atx2js6krycynjoo(65533),
                le = a;
              ((a = (le + 1) | 0), (r[le] = ie), (Q = 2));
              break e;
            }
            var se = e[(K + 3) | 0];
            if ((se & 192) !== 128) {
              var ue = o(
                  "kotlin-kotlin-stdlib",
                )._Char___init__impl__6a9atx2js6krycynjoo(65533),
                ce = a;
              ((a = (ce + 1) | 0), (r[ce] = ue), (Q = 3));
              break e;
            }
            var de = 3678080 ^ se ^ (ae << 6) ^ (ne << 12) ^ (ee << 18);
            if (de > 1114111) {
              var me = o(
                  "kotlin-kotlin-stdlib",
                )._Char___init__impl__6a9atx2js6krycynjoo(65533),
                pe = a;
              ((a = (pe + 1) | 0), (r[pe] = me));
            } else if (55296 <= de && de <= 57343) {
              var _e = o(
                  "kotlin-kotlin-stdlib",
                )._Char___init__impl__6a9atx2js6krycynjoo(65533),
                fe = a;
              ((a = (fe + 1) | 0), (r[fe] = _e));
            } else if (de < 65536) {
              var ge = o(
                  "kotlin-kotlin-stdlib",
                )._Char___init__impl__6a9atx2js6krycynjoo(65533),
                he = a;
              ((a = (he + 1) | 0), (r[he] = ge));
            } else if (de !== 65533) {
              var ye = o("kotlin-kotlin-stdlib").numberToChar93r9buh19yek(
                  (((de >>> 10) | 0) + 55232) | 0,
                ),
                Ce = a;
              ((a = (Ce + 1) | 0), (r[Ce] = ye));
              var be = o("kotlin-kotlin-stdlib").numberToChar93r9buh19yek(
                  ((de & 1023) + 56320) | 0,
                ),
                ve = a;
              ((a = (ve + 1) | 0), (r[ve] = be));
            } else {
              var Se = o(
                  "kotlin-kotlin-stdlib",
                )._Char___init__impl__6a9atx2js6krycynjoo(65533),
                Re = a;
              ((a = (Re + 1) | 0), (r[Re] = Se));
            }
            Q = 4;
          }
          i = (j + Q) | 0;
        } else {
          var Le = o(
              "kotlin-kotlin-stdlib",
            )._Char___init__impl__6a9atx2js6krycynjoo(65533),
            Ee = a;
          ((a = (Ee + 1) | 0), (r[Ee] = Le), (i = (i + 1) | 0));
        }
      }
      return o("kotlin-kotlin-stdlib").concatToString3cxf0c1gqonpo(r, 0, a);
    }
    var N;
    function M(e, t) {
      A();
      var n = T(t);
      if (n.a1q_1 != null) {
        var r = "already attached to a buffer";
        throw o(
          "kotlin-kotlin-stdlib",
        ).IllegalStateException_init_$Create$2w9444nebyjns(
          o("kotlin-kotlin-stdlib").toString1pkumu07cwy4m(r),
        );
      }
      return ((n.a1q_1 = e), (n.b1q_1 = !0), n);
    }
    var w;
    function A() {
      w || ((w = !0), (N = ee("0123456789abcdef")));
    }
    function F() {
      return (V(), O);
    }
    var O;
    function B(e, t, n, r) {
      (V(), t.j1q(e.x1p_1, n, r));
    }
    function W(e, t) {
      V();
      for (var n = 0, r = 0, a = e.length, i = 0; i < a; ) {
        var l = e[i];
        if (l >= 0) {
          var s = r;
          if (((r = (s + 1) | 0), s === t)) return n;
          var u,
            c,
            d,
            m = o(
              "kotlin-kotlin-stdlib",
            )._Char___init__impl__6a9atx2js6krycynjoo(10);
          if (
            l !==
            o("kotlin-kotlin-stdlib").Char__toInt_impl_vasixd1agw9q2fuvclj(m)
          ) {
            var p = o(
              "kotlin-kotlin-stdlib",
            )._Char___init__impl__6a9atx2js6krycynjoo(13);
            d =
              l !==
              o("kotlin-kotlin-stdlib").Char__toInt_impl_vasixd1agw9q2fuvclj(p);
          } else d = !1;
          if (
            (d
              ? (c = (0 <= l ? l <= 31 : !1) || (127 <= l ? l <= 159 : !1))
              : (c = !1),
            c ? (u = !0) : (u = l === 65533),
            u)
          )
            return -1;
          for (
            n = (n + (l < 65536 ? 1 : 2)) | 0, i = (i + 1) | 0;
            i < a && e[i] >= 0;
          ) {
            var _ = i;
            i = (_ + 1) | 0;
            var f = e[_],
              g = r;
            if (((r = (g + 1) | 0), g === t)) return n;
            var h,
              y,
              C,
              b = o(
                "kotlin-kotlin-stdlib",
              )._Char___init__impl__6a9atx2js6krycynjoo(10);
            if (
              f !==
              o("kotlin-kotlin-stdlib").Char__toInt_impl_vasixd1agw9q2fuvclj(b)
            ) {
              var v = o(
                "kotlin-kotlin-stdlib",
              )._Char___init__impl__6a9atx2js6krycynjoo(13);
              C =
                f !==
                o("kotlin-kotlin-stdlib").Char__toInt_impl_vasixd1agw9q2fuvclj(
                  v,
                );
            } else C = !1;
            if (
              (C
                ? (y = (0 <= f ? f <= 31 : !1) || (127 <= f ? f <= 159 : !1))
                : (y = !1),
              y ? (h = !0) : (h = f === 65533),
              h)
            )
              return -1;
            n = (n + (f < 65536 ? 1 : 2)) | 0;
          }
        } else if (l >> 5 === -2) {
          var S = i,
            R = i,
            L;
          e: {
            if (a <= ((R + 1) | 0)) {
              var E = r;
              if (((r = (E + 1) | 0), E === t)) return n;
              var k,
                I,
                T,
                D = o(
                  "kotlin-kotlin-stdlib",
                )._Char___init__impl__6a9atx2js6krycynjoo(10);
              if (
                o("kotlin-kotlin-stdlib").Char__toInt_impl_vasixd1agw9q2fuvclj(
                  D,
                ) !== 65533
              ) {
                var x = o(
                  "kotlin-kotlin-stdlib",
                )._Char___init__impl__6a9atx2js6krycynjoo(13);
                T =
                  o(
                    "kotlin-kotlin-stdlib",
                  ).Char__toInt_impl_vasixd1agw9q2fuvclj(x) !== 65533;
              } else T = !1;
              if (((I = !1), (k = !0), k)) return -1;
              ((n = (n + 1) | 0), (L = 1));
              break e;
            }
            var $ = e[R],
              P = e[(R + 1) | 0];
            if ((P & 192) !== 128) {
              var N = r;
              if (((r = (N + 1) | 0), N === t)) return n;
              var M,
                w,
                A,
                F = o(
                  "kotlin-kotlin-stdlib",
                )._Char___init__impl__6a9atx2js6krycynjoo(10);
              if (
                o("kotlin-kotlin-stdlib").Char__toInt_impl_vasixd1agw9q2fuvclj(
                  F,
                ) !== 65533
              ) {
                var O = o(
                  "kotlin-kotlin-stdlib",
                )._Char___init__impl__6a9atx2js6krycynjoo(13);
                A =
                  o(
                    "kotlin-kotlin-stdlib",
                  ).Char__toInt_impl_vasixd1agw9q2fuvclj(O) !== 65533;
              } else A = !1;
              if (((w = !1), (M = !0), M)) return -1;
              ((n = (n + 1) | 0), (L = 1));
              break e;
            }
            var B = 3968 ^ P ^ ($ << 6);
            if (B < 128) {
              var W = r;
              if (((r = (W + 1) | 0), W === t)) return n;
              var q,
                U,
                H,
                G = o(
                  "kotlin-kotlin-stdlib",
                )._Char___init__impl__6a9atx2js6krycynjoo(10);
              if (
                o("kotlin-kotlin-stdlib").Char__toInt_impl_vasixd1agw9q2fuvclj(
                  G,
                ) !== 65533
              ) {
                var z = o(
                  "kotlin-kotlin-stdlib",
                )._Char___init__impl__6a9atx2js6krycynjoo(13);
                H =
                  o(
                    "kotlin-kotlin-stdlib",
                  ).Char__toInt_impl_vasixd1agw9q2fuvclj(z) !== 65533;
              } else H = !1;
              if (((U = !1), (q = !0), q)) return -1;
              n = (n + 1) | 0;
            } else {
              var j = r;
              if (((r = (j + 1) | 0), j === t)) return n;
              var K,
                Q,
                X,
                Y = o(
                  "kotlin-kotlin-stdlib",
                )._Char___init__impl__6a9atx2js6krycynjoo(10);
              if (
                B !==
                o("kotlin-kotlin-stdlib").Char__toInt_impl_vasixd1agw9q2fuvclj(
                  Y,
                )
              ) {
                var J = o(
                  "kotlin-kotlin-stdlib",
                )._Char___init__impl__6a9atx2js6krycynjoo(13);
                X =
                  B !==
                  o(
                    "kotlin-kotlin-stdlib",
                  ).Char__toInt_impl_vasixd1agw9q2fuvclj(J);
              } else X = !1;
              if (
                (X
                  ? (Q = (0 <= B ? B <= 31 : !1) || (127 <= B ? B <= 159 : !1))
                  : (Q = !1),
                Q ? (K = !0) : (K = B === 65533),
                K)
              )
                return -1;
              n = (n + (B < 65536 ? 1 : 2)) | 0;
            }
            L = 2;
          }
          i = (S + L) | 0;
        } else if (l >> 4 === -2) {
          var Z = i,
            ee = i,
            te;
          e: {
            if (a <= ((ee + 2) | 0)) {
              var ne = r;
              if (((r = (ne + 1) | 0), ne === t)) return n;
              var re,
                oe,
                ae,
                ie = o(
                  "kotlin-kotlin-stdlib",
                )._Char___init__impl__6a9atx2js6krycynjoo(10);
              if (
                o("kotlin-kotlin-stdlib").Char__toInt_impl_vasixd1agw9q2fuvclj(
                  ie,
                ) !== 65533
              ) {
                var le = o(
                  "kotlin-kotlin-stdlib",
                )._Char___init__impl__6a9atx2js6krycynjoo(13);
                ae =
                  o(
                    "kotlin-kotlin-stdlib",
                  ).Char__toInt_impl_vasixd1agw9q2fuvclj(le) !== 65533;
              } else ae = !1;
              if (((oe = !1), (re = !0), re)) return -1;
              n = (n + 1) | 0;
              var se;
              if (
                (a <= ((ee + 1) | 0)
                  ? (se = !0)
                  : (se = (e[(ee + 1) | 0] & 192) !== 128),
                se)
              ) {
                te = 1;
                break e;
              } else {
                te = 2;
                break e;
              }
            }
            var ue = e[ee],
              ce = e[(ee + 1) | 0];
            if ((ce & 192) !== 128) {
              var de = r;
              if (((r = (de + 1) | 0), de === t)) return n;
              var me,
                pe,
                _e,
                fe = o(
                  "kotlin-kotlin-stdlib",
                )._Char___init__impl__6a9atx2js6krycynjoo(10);
              if (
                o("kotlin-kotlin-stdlib").Char__toInt_impl_vasixd1agw9q2fuvclj(
                  fe,
                ) !== 65533
              ) {
                var ge = o(
                  "kotlin-kotlin-stdlib",
                )._Char___init__impl__6a9atx2js6krycynjoo(13);
                _e =
                  o(
                    "kotlin-kotlin-stdlib",
                  ).Char__toInt_impl_vasixd1agw9q2fuvclj(ge) !== 65533;
              } else _e = !1;
              if (((pe = !1), (me = !0), me)) return -1;
              ((n = (n + 1) | 0), (te = 1));
              break e;
            }
            var he = e[(ee + 2) | 0];
            if ((he & 192) !== 128) {
              var ye = r;
              if (((r = (ye + 1) | 0), ye === t)) return n;
              var Ce,
                be,
                ve,
                Se = o(
                  "kotlin-kotlin-stdlib",
                )._Char___init__impl__6a9atx2js6krycynjoo(10);
              if (
                o("kotlin-kotlin-stdlib").Char__toInt_impl_vasixd1agw9q2fuvclj(
                  Se,
                ) !== 65533
              ) {
                var Re = o(
                  "kotlin-kotlin-stdlib",
                )._Char___init__impl__6a9atx2js6krycynjoo(13);
                ve =
                  o(
                    "kotlin-kotlin-stdlib",
                  ).Char__toInt_impl_vasixd1agw9q2fuvclj(Re) !== 65533;
              } else ve = !1;
              if (((be = !1), (Ce = !0), Ce)) return -1;
              ((n = (n + 1) | 0), (te = 2));
              break e;
            }
            var Le = -123008 ^ he ^ (ce << 6) ^ (ue << 12);
            if (Le < 2048) {
              var Ee = r;
              if (((r = (Ee + 1) | 0), Ee === t)) return n;
              var ke,
                Ie,
                Te,
                De = o(
                  "kotlin-kotlin-stdlib",
                )._Char___init__impl__6a9atx2js6krycynjoo(10);
              if (
                o("kotlin-kotlin-stdlib").Char__toInt_impl_vasixd1agw9q2fuvclj(
                  De,
                ) !== 65533
              ) {
                var xe = o(
                  "kotlin-kotlin-stdlib",
                )._Char___init__impl__6a9atx2js6krycynjoo(13);
                Te =
                  o(
                    "kotlin-kotlin-stdlib",
                  ).Char__toInt_impl_vasixd1agw9q2fuvclj(xe) !== 65533;
              } else Te = !1;
              if (((Ie = !1), (ke = !0), ke)) return -1;
              n = (n + 1) | 0;
            } else if (55296 <= Le && Le <= 57343) {
              var $e = r;
              if (((r = ($e + 1) | 0), $e === t)) return n;
              var Pe,
                Ne,
                Me,
                we = o(
                  "kotlin-kotlin-stdlib",
                )._Char___init__impl__6a9atx2js6krycynjoo(10);
              if (
                o("kotlin-kotlin-stdlib").Char__toInt_impl_vasixd1agw9q2fuvclj(
                  we,
                ) !== 65533
              ) {
                var Ae = o(
                  "kotlin-kotlin-stdlib",
                )._Char___init__impl__6a9atx2js6krycynjoo(13);
                Me =
                  o(
                    "kotlin-kotlin-stdlib",
                  ).Char__toInt_impl_vasixd1agw9q2fuvclj(Ae) !== 65533;
              } else Me = !1;
              if (((Ne = !1), (Pe = !0), Pe)) return -1;
              n = (n + 1) | 0;
            } else {
              var Fe = r;
              if (((r = (Fe + 1) | 0), Fe === t)) return n;
              var Oe,
                Be,
                We,
                qe = o(
                  "kotlin-kotlin-stdlib",
                )._Char___init__impl__6a9atx2js6krycynjoo(10);
              if (
                Le !==
                o("kotlin-kotlin-stdlib").Char__toInt_impl_vasixd1agw9q2fuvclj(
                  qe,
                )
              ) {
                var Ue = o(
                  "kotlin-kotlin-stdlib",
                )._Char___init__impl__6a9atx2js6krycynjoo(13);
                We =
                  Le !==
                  o(
                    "kotlin-kotlin-stdlib",
                  ).Char__toInt_impl_vasixd1agw9q2fuvclj(Ue);
              } else We = !1;
              if (
                (We
                  ? (Be =
                      (0 <= Le ? Le <= 31 : !1) || (127 <= Le ? Le <= 159 : !1))
                  : (Be = !1),
                Be ? (Oe = !0) : (Oe = Le === 65533),
                Oe)
              )
                return -1;
              n = (n + (Le < 65536 ? 1 : 2)) | 0;
            }
            te = 3;
          }
          i = (Z + te) | 0;
        } else if (l >> 3 === -2) {
          var Ve = i,
            He = i,
            Ge;
          e: {
            if (a <= ((He + 3) | 0)) {
              var ze = r;
              if (((r = (ze + 1) | 0), ze === t)) return n;
              var je,
                Ke,
                Qe,
                Xe = o(
                  "kotlin-kotlin-stdlib",
                )._Char___init__impl__6a9atx2js6krycynjoo(10);
              if (
                o("kotlin-kotlin-stdlib").Char__toInt_impl_vasixd1agw9q2fuvclj(
                  Xe,
                ) !== 65533
              ) {
                var Ye = o(
                  "kotlin-kotlin-stdlib",
                )._Char___init__impl__6a9atx2js6krycynjoo(13);
                Qe =
                  o(
                    "kotlin-kotlin-stdlib",
                  ).Char__toInt_impl_vasixd1agw9q2fuvclj(Ye) !== 65533;
              } else Qe = !1;
              if (((Ke = !1), (je = !0), je)) return -1;
              n = (n + 1) | 0;
              var Je;
              if (
                (a <= ((He + 1) | 0)
                  ? (Je = !0)
                  : (Je = (e[(He + 1) | 0] & 192) !== 128),
                Je)
              ) {
                Ge = 1;
                break e;
              } else {
                var Ze;
                if (
                  (a <= ((He + 2) | 0)
                    ? (Ze = !0)
                    : (Ze = (e[(He + 2) | 0] & 192) !== 128),
                  Ze)
                ) {
                  Ge = 2;
                  break e;
                } else {
                  Ge = 3;
                  break e;
                }
              }
            }
            var et = e[He],
              tt = e[(He + 1) | 0];
            if ((tt & 192) !== 128) {
              var nt = r;
              if (((r = (nt + 1) | 0), nt === t)) return n;
              var rt,
                ot,
                at,
                it = o(
                  "kotlin-kotlin-stdlib",
                )._Char___init__impl__6a9atx2js6krycynjoo(10);
              if (
                o("kotlin-kotlin-stdlib").Char__toInt_impl_vasixd1agw9q2fuvclj(
                  it,
                ) !== 65533
              ) {
                var lt = o(
                  "kotlin-kotlin-stdlib",
                )._Char___init__impl__6a9atx2js6krycynjoo(13);
                at =
                  o(
                    "kotlin-kotlin-stdlib",
                  ).Char__toInt_impl_vasixd1agw9q2fuvclj(lt) !== 65533;
              } else at = !1;
              if (((ot = !1), (rt = !0), rt)) return -1;
              ((n = (n + 1) | 0), (Ge = 1));
              break e;
            }
            var st = e[(He + 2) | 0];
            if ((st & 192) !== 128) {
              var ut = r;
              if (((r = (ut + 1) | 0), ut === t)) return n;
              var ct,
                dt,
                mt,
                pt = o(
                  "kotlin-kotlin-stdlib",
                )._Char___init__impl__6a9atx2js6krycynjoo(10);
              if (
                o("kotlin-kotlin-stdlib").Char__toInt_impl_vasixd1agw9q2fuvclj(
                  pt,
                ) !== 65533
              ) {
                var _t = o(
                  "kotlin-kotlin-stdlib",
                )._Char___init__impl__6a9atx2js6krycynjoo(13);
                mt =
                  o(
                    "kotlin-kotlin-stdlib",
                  ).Char__toInt_impl_vasixd1agw9q2fuvclj(_t) !== 65533;
              } else mt = !1;
              if (((dt = !1), (ct = !0), ct)) return -1;
              ((n = (n + 1) | 0), (Ge = 2));
              break e;
            }
            var ft = e[(He + 3) | 0];
            if ((ft & 192) !== 128) {
              var gt = r;
              if (((r = (gt + 1) | 0), gt === t)) return n;
              var ht,
                yt,
                Ct,
                bt = o(
                  "kotlin-kotlin-stdlib",
                )._Char___init__impl__6a9atx2js6krycynjoo(10);
              if (
                o("kotlin-kotlin-stdlib").Char__toInt_impl_vasixd1agw9q2fuvclj(
                  bt,
                ) !== 65533
              ) {
                var vt = o(
                  "kotlin-kotlin-stdlib",
                )._Char___init__impl__6a9atx2js6krycynjoo(13);
                Ct =
                  o(
                    "kotlin-kotlin-stdlib",
                  ).Char__toInt_impl_vasixd1agw9q2fuvclj(vt) !== 65533;
              } else Ct = !1;
              if (((yt = !1), (ht = !0), ht)) return -1;
              ((n = (n + 1) | 0), (Ge = 3));
              break e;
            }
            var St = 3678080 ^ ft ^ (st << 6) ^ (tt << 12) ^ (et << 18);
            if (St > 1114111) {
              var Rt = r;
              if (((r = (Rt + 1) | 0), Rt === t)) return n;
              var Lt,
                Et,
                kt,
                It = o(
                  "kotlin-kotlin-stdlib",
                )._Char___init__impl__6a9atx2js6krycynjoo(10);
              if (
                o("kotlin-kotlin-stdlib").Char__toInt_impl_vasixd1agw9q2fuvclj(
                  It,
                ) !== 65533
              ) {
                var Tt = o(
                  "kotlin-kotlin-stdlib",
                )._Char___init__impl__6a9atx2js6krycynjoo(13);
                kt =
                  o(
                    "kotlin-kotlin-stdlib",
                  ).Char__toInt_impl_vasixd1agw9q2fuvclj(Tt) !== 65533;
              } else kt = !1;
              if (((Et = !1), (Lt = !0), Lt)) return -1;
              n = (n + 1) | 0;
            } else if (55296 <= St && St <= 57343) {
              var Dt = r;
              if (((r = (Dt + 1) | 0), Dt === t)) return n;
              var xt,
                $t,
                Pt,
                Nt = o(
                  "kotlin-kotlin-stdlib",
                )._Char___init__impl__6a9atx2js6krycynjoo(10);
              if (
                o("kotlin-kotlin-stdlib").Char__toInt_impl_vasixd1agw9q2fuvclj(
                  Nt,
                ) !== 65533
              ) {
                var Mt = o(
                  "kotlin-kotlin-stdlib",
                )._Char___init__impl__6a9atx2js6krycynjoo(13);
                Pt =
                  o(
                    "kotlin-kotlin-stdlib",
                  ).Char__toInt_impl_vasixd1agw9q2fuvclj(Mt) !== 65533;
              } else Pt = !1;
              if ((($t = !1), (xt = !0), xt)) return -1;
              n = (n + 1) | 0;
            } else if (St < 65536) {
              var wt = r;
              if (((r = (wt + 1) | 0), wt === t)) return n;
              var At,
                Ft,
                Ot,
                Bt = o(
                  "kotlin-kotlin-stdlib",
                )._Char___init__impl__6a9atx2js6krycynjoo(10);
              if (
                o("kotlin-kotlin-stdlib").Char__toInt_impl_vasixd1agw9q2fuvclj(
                  Bt,
                ) !== 65533
              ) {
                var Wt = o(
                  "kotlin-kotlin-stdlib",
                )._Char___init__impl__6a9atx2js6krycynjoo(13);
                Ot =
                  o(
                    "kotlin-kotlin-stdlib",
                  ).Char__toInt_impl_vasixd1agw9q2fuvclj(Wt) !== 65533;
              } else Ot = !1;
              if (((Ft = !1), (At = !0), At)) return -1;
              n = (n + 1) | 0;
            } else {
              var qt = r;
              if (((r = (qt + 1) | 0), qt === t)) return n;
              var Ut,
                Vt,
                Ht,
                Gt = o(
                  "kotlin-kotlin-stdlib",
                )._Char___init__impl__6a9atx2js6krycynjoo(10);
              if (
                St !==
                o("kotlin-kotlin-stdlib").Char__toInt_impl_vasixd1agw9q2fuvclj(
                  Gt,
                )
              ) {
                var zt = o(
                  "kotlin-kotlin-stdlib",
                )._Char___init__impl__6a9atx2js6krycynjoo(13);
                Ht =
                  St !==
                  o(
                    "kotlin-kotlin-stdlib",
                  ).Char__toInt_impl_vasixd1agw9q2fuvclj(zt);
              } else Ht = !1;
              if (
                (Ht
                  ? (Vt =
                      (0 <= St ? St <= 31 : !1) || (127 <= St ? St <= 159 : !1))
                  : (Vt = !1),
                Vt ? (Ut = !0) : (Ut = St === 65533),
                Ut)
              )
                return -1;
              n = (n + (St < 65536 ? 1 : 2)) | 0;
            }
            Ge = 4;
          }
          i = (Ve + Ge) | 0;
        } else {
          var jt = r;
          if (((r = (jt + 1) | 0), jt === t)) return n;
          var Kt,
            Qt,
            Xt,
            Yt = o(
              "kotlin-kotlin-stdlib",
            )._Char___init__impl__6a9atx2js6krycynjoo(10);
          if (
            o("kotlin-kotlin-stdlib").Char__toInt_impl_vasixd1agw9q2fuvclj(
              Yt,
            ) !== 65533
          ) {
            var Jt = o(
              "kotlin-kotlin-stdlib",
            )._Char___init__impl__6a9atx2js6krycynjoo(13);
            Xt =
              o("kotlin-kotlin-stdlib").Char__toInt_impl_vasixd1agw9q2fuvclj(
                Jt,
              ) !== 65533;
          } else Xt = !1;
          if (((Qt = !1), (Kt = !0), Kt)) return -1;
          ((n = (n + 1) | 0), (i = (i + 1) | 0));
        }
      }
      return n;
    }
    function q(e, t) {
      return W(e, t);
    }
    var U;
    function V() {
      if (!U) {
        var e;
        ((U = !0),
          (O = (e = o("kotlin-kotlin-stdlib")).charArrayOf27f4r3dozbrk1([
            e._Char___init__impl__6a9atx2js6krycynjoo(48),
            e._Char___init__impl__6a9atx2js6krycynjoo(49),
            e._Char___init__impl__6a9atx2js6krycynjoo(50),
            e._Char___init__impl__6a9atx2js6krycynjoo(51),
            e._Char___init__impl__6a9atx2js6krycynjoo(52),
            e._Char___init__impl__6a9atx2js6krycynjoo(53),
            e._Char___init__impl__6a9atx2js6krycynjoo(54),
            e._Char___init__impl__6a9atx2js6krycynjoo(55),
            e._Char___init__impl__6a9atx2js6krycynjoo(56),
            e._Char___init__impl__6a9atx2js6krycynjoo(57),
            e._Char___init__impl__6a9atx2js6krycynjoo(97),
            e._Char___init__impl__6a9atx2js6krycynjoo(98),
            e._Char___init__impl__6a9atx2js6krycynjoo(99),
            e._Char___init__impl__6a9atx2js6krycynjoo(100),
            e._Char___init__impl__6a9atx2js6krycynjoo(101),
            e._Char___init__impl__6a9atx2js6krycynjoo(102),
          ])));
      }
    }
    function H(e, t) {
      var n = G(e.o1q_1, (t + 1) | 0, 0, e.n1q_1.length);
      return n >= 0 ? n : ~n;
    }
    function G(e, t, n, r) {
      for (var o = n, a = (r - 1) | 0; o <= a; ) {
        var i = (((o + a) | 0) >>> 1) | 0,
          l = e[i];
        if (l < t) o = (i + 1) | 0;
        else if (l > t) a = (i - 1) | 0;
        else return i;
      }
      return ((-o | 0) - 1) | 0;
    }
    function z() {
      j = this;
      var e = this,
        t = new Int8Array([]);
      e.p1q_1 = new Q(t);
    }
    ((e.protoOf180f3jzyo7rfj(z).q1q = function (e) {
      var t = e.slice();
      return new Q(t);
    }),
      (e.protoOf180f3jzyo7rfj(z).r1q = function (e, t, n) {
        var r,
          a = k(e, n);
        return (
          I(
            (r = o("kotlin-kotlin-stdlib")).fromInt2ii0rejb1w62w(e.length),
            r.fromInt2ii0rejb1w62w(t),
            r.fromInt2ii0rejb1w62w(a),
          ),
          new Q(r.copyOfRange3alro60z4hhf8(e, t, (t + a) | 0))
        );
      }),
      (e.protoOf180f3jzyo7rfj(z).s1q = function (e, t, n, r) {
        return (
          (t = t === o("kotlin-kotlin-stdlib").VOID3gxj6tk5isa35 ? 0 : t),
          (n = n === o("kotlin-kotlin-stdlib").VOID3gxj6tk5isa35 ? b() : n),
          r === o("kotlin-kotlin-stdlib").VOID3gxj6tk5isa35
            ? this.r1q(e, t, n)
            : r.r1q.call(this, e, t, n)
        );
      }),
      (e.protoOf180f3jzyo7rfj(z).t1q = function (e) {
        var t = new Q(ee(e));
        return (t.u1q(e), t);
      }));
    var j;
    function K() {
      return (j == null && new z(), j);
    }
    function Q(e) {
      (K(), (this.x1p_1 = e), (this.y1p_1 = 0), (this.z1p_1 = null));
    }
    ((e.protoOf180f3jzyo7rfj(Q).v1q = function (e) {}),
      (e.protoOf180f3jzyo7rfj(Q).u1q = function (e) {}),
      (e.protoOf180f3jzyo7rfj(Q).w1q = function () {
        var e = this.z1p_1;
        return (e == null && ((e = ce(this.x1q())), this.u1q(e)), e);
      }),
      (e.protoOf180f3jzyo7rfj(Q).y1q = function () {
        for (
          var e = o("kotlin-kotlin-stdlib").charArray2ujmm1qusno00(
              s(this.x1p_1.length, 2),
            ),
            t = 0,
            n = this.x1p_1,
            r = 0,
            a = n.length;
          r < a;
        ) {
          var i = n[r];
          r = (r + 1) | 0;
          var l = t;
          t = (l + 1) | 0;
          var u = F();
          e[l] = u[(i >> 4) & 15];
          var c = t;
          t = (c + 1) | 0;
          var d = F();
          e[c] = d[i & 15];
        }
        return o("kotlin-kotlin-stdlib").concatToString2syawgu50khxi(e);
      }),
      (e.protoOf180f3jzyo7rfj(Q).z1q = function (e) {
        if (e >= this.n() || e < 0)
          throw new te("size=" + this.n() + " pos=" + e);
        return this.x1p_1[e];
      }),
      (e.protoOf180f3jzyo7rfj(Q).o = function (e) {
        return this.z1q(e);
      }),
      (e.protoOf180f3jzyo7rfj(Q).n = function () {
        return this.a1r();
      }),
      (e.protoOf180f3jzyo7rfj(Q).a1r = function () {
        return this.x1p_1.length;
      }),
      (e.protoOf180f3jzyo7rfj(Q).b1r = function () {
        return this.x1p_1.slice();
      }),
      (e.protoOf180f3jzyo7rfj(Q).x1q = function () {
        return this.x1p_1;
      }),
      (e.protoOf180f3jzyo7rfj(Q).c1r = function (e, t, n) {
        return B(this, e, t, n);
      }),
      (e.protoOf180f3jzyo7rfj(Q).d1r = function (e, t, n, r) {
        return (
          e >= 0 &&
          e <= ((this.x1p_1.length - r) | 0) &&
          n >= 0 &&
          n <= ((t.length - r) | 0) &&
          E(this.x1p_1, e, t, n, r)
        );
      }),
      (e.protoOf180f3jzyo7rfj(Q).e1r = function (e, t, n, r) {
        var a = this.x1p_1,
          i = (e + r) | 0,
          l = a;
        return (
          o("kotlin-kotlin-stdlib").arrayCopytctsywo3h7gj(l, t, n, e, i),
          o("kotlin-kotlin-stdlib").Unit_instance1fbcbse1fwigr
        );
      }),
      (e.protoOf180f3jzyo7rfj(Q).equals = function (e) {
        var t;
        return (
          e === this
            ? (t = !0)
            : e instanceof Q
              ? (t =
                  e.n() === this.x1p_1.length &&
                  e.d1r(0, this.x1p_1, 0, this.x1p_1.length))
              : (t = !1),
          t
        );
      }),
      (e.protoOf180f3jzyo7rfj(Q).hashCode = function () {
        var e;
        e: {
          var t = this.y1p_1;
          if (t !== 0) {
            e = t;
            break e;
          }
          var n = o("kotlin-kotlin-stdlib").contentHashCode25jw6rgkgywwr(
            this.x1p_1,
          );
          (this.v1q(n), (e = n));
        }
        return e;
      }),
      (e.protoOf180f3jzyo7rfj(Q).f1r = function (e) {
        var t;
        e: {
          var n = this.n(),
            r = e.n(),
            o = 0,
            a = Math.min(n, r);
          t: for (; o < a; ) {
            var i = this.o(o) & 255,
              l = e.o(o) & 255;
            if (i === l) {
              o = (o + 1) | 0;
              continue t;
            }
            t = i < l ? -1 : 1;
            break e;
          }
          if (n === r) {
            t = 0;
            break e;
          }
          t = n < r ? -1 : 1;
        }
        return t;
      }),
      (e.protoOf180f3jzyo7rfj(Q).l1 = function (e) {
        return this.f1r(
          e instanceof Q
            ? e
            : o("kotlin-kotlin-stdlib").THROW_CCE2g6jy02ryeudk(),
        );
      }),
      (e.protoOf180f3jzyo7rfj(Q).toString = function () {
        var e;
        e: {
          if (this.x1p_1.length === 0) {
            e = "[size=0]";
            break e;
          }
          var t = q(this.x1p_1, 64);
          if (t === -1) {
            var n;
            if (this.x1p_1.length <= 64) n = "[hex=" + this.y1q() + "]";
            else {
              var r = this.x1p_1.length,
                a;
              t: {
                var i = L(this, 64);
                if (!(i <= this.x1p_1.length)) {
                  var l = "endIndex > length(" + this.x1p_1.length + ")";
                  throw o(
                    "kotlin-kotlin-stdlib",
                  ).IllegalArgumentException_init_$Create$3ewkh27kzt8z8(
                    o("kotlin-kotlin-stdlib").toString1pkumu07cwy4m(l),
                  );
                }
                var s = (i - 0) | 0;
                if (!(s >= 0)) {
                  var u = "endIndex < beginIndex";
                  throw o(
                    "kotlin-kotlin-stdlib",
                  ).IllegalArgumentException_init_$Create$3ewkh27kzt8z8(
                    o("kotlin-kotlin-stdlib").toString1pkumu07cwy4m(u),
                  );
                }
                if (i === this.x1p_1.length) {
                  a = this;
                  break t;
                }
                a = new Q(
                  o("kotlin-kotlin-stdlib").copyOfRange3alro60z4hhf8(
                    this.x1p_1,
                    0,
                    i,
                  ),
                );
              }
              n = "[size=" + r + " hex=" + a.y1q() + "\u2026]";
            }
            e = n;
            break e;
          }
          var c = this.w1q(),
            d = o("kotlin-kotlin-stdlib").replace3le3ie7l9k8aq(
              o("kotlin-kotlin-stdlib").replace3le3ie7l9k8aq(
                o("kotlin-kotlin-stdlib").replace3le3ie7l9k8aq(
                  o("kotlin-kotlin-stdlib").substringiqarkczpya5m(c, 0, t),
                  "\\",
                  "\\\\",
                ),
                "\n",
                "\\n",
              ),
              "\r",
              "\\r",
            ),
            m;
          (t < c.length
            ? (m = "[size=" + this.x1p_1.length + " text=" + d + "\u2026]")
            : (m = "[text=" + d + "]"),
            (e = m));
        }
        return e;
      }));
    function X(e) {
      return new Q(e.b1r());
    }
    function Y(e, t) {
      (Q.call(this, K().p1q_1.x1p_1), (this.n1q_1 = e), (this.o1q_1 = t));
    }
    ((e.protoOf180f3jzyo7rfj(Y).y1q = function () {
      return X(this).y1q();
    }),
      (e.protoOf180f3jzyo7rfj(Y).z1q = function (e) {
        I(
          o("kotlin-kotlin-stdlib").fromInt2ii0rejb1w62w(
            this.o1q_1[(this.n1q_1.length - 1) | 0],
          ),
          o("kotlin-kotlin-stdlib").fromInt2ii0rejb1w62w(e),
          BigInt(1),
        );
        var t = H(this, e),
          n = t === 0 ? 0 : this.o1q_1[(t - 1) | 0],
          r = this.o1q_1[(t + this.n1q_1.length) | 0];
        return this.n1q_1[t][(((e - n) | 0) + r) | 0];
      }),
      (e.protoOf180f3jzyo7rfj(Y).a1r = function () {
        return this.o1q_1[(this.n1q_1.length - 1) | 0];
      }),
      (e.protoOf180f3jzyo7rfj(Y).b1r = function () {
        for (
          var e = new Int8Array(this.n()),
            t = 0,
            n = this.n1q_1.length,
            r = 0,
            a = 0;
          r < n;
        ) {
          var i = this.o1q_1[(n + r) | 0],
            l = this.o1q_1[r],
            s = this.n1q_1[r],
            u = (l - a) | 0,
            c = t,
            d = (i + u) | 0,
            m = s;
          (o("kotlin-kotlin-stdlib").arrayCopytctsywo3h7gj(m, e, c, i, d),
            (t = (t + u) | 0),
            (a = l),
            (r = (r + 1) | 0));
        }
        return e;
      }),
      (e.protoOf180f3jzyo7rfj(Y).c1r = function (e, t, n) {
        for (var r = (t + n) | 0, a = H(this, t), i = t; i < r; ) {
          var l = a === 0 ? 0 : this.o1q_1[(a - 1) | 0],
            s = (this.o1q_1[a] - l) | 0,
            u = this.o1q_1[(this.n1q_1.length + a) | 0],
            c = (l + s) | 0,
            d = (Math.min(r, c) - i) | 0,
            p = (u + ((i - l) | 0)) | 0,
            _ = this.n1q_1[a],
            f = m(_, p, (p + d) | 0, !0, !1);
          (e.h1q_1 == null
            ? ((f.k1p_1 = f), (f.j1p_1 = f.k1p_1), (e.h1q_1 = f.j1p_1))
            : o("kotlin-kotlin-stdlib")
                .ensureNotNull1e947j3ixpazm(
                  o("kotlin-kotlin-stdlib").ensureNotNull1e947j3ixpazm(e.h1q_1)
                    .k1p_1,
                )
                .p1p(f),
            (i = (i + d) | 0),
            (a = (a + 1) | 0));
        }
        var g = e,
          h = e.i1q_1;
        return (
          (g.i1q_1 = o("kotlin-kotlin-stdlib").add2suhfggl4zvkk(
            h,
            o("kotlin-kotlin-stdlib").fromInt2ii0rejb1w62w(n),
          )),
          o("kotlin-kotlin-stdlib").Unit_instance1fbcbse1fwigr
        );
      }),
      (e.protoOf180f3jzyo7rfj(Y).g1r = function (e, t, n, r) {
        var o;
        e: {
          if (e < 0 || e > ((this.n() - r) | 0)) {
            o = !1;
            break e;
          }
          for (var a = n, i = (e + r) | 0, l = H(this, e), s = e; s < i; ) {
            var u = l === 0 ? 0 : this.o1q_1[(l - 1) | 0],
              c = (this.o1q_1[l] - u) | 0,
              d = this.o1q_1[(this.n1q_1.length + l) | 0],
              m = (u + c) | 0,
              p = (Math.min(i, m) - s) | 0,
              _ = (d + ((s - u) | 0)) | 0,
              f = this.n1q_1[l];
            if (!t.d1r(a, f, _, p)) {
              o = !1;
              break e;
            }
            ((a = (a + p) | 0), (s = (s + p) | 0), (l = (l + 1) | 0));
          }
          o = !0;
        }
        return o;
      }),
      (e.protoOf180f3jzyo7rfj(Y).d1r = function (e, t, n, r) {
        var o;
        e: {
          if (
            e < 0 ||
            e > ((this.n() - r) | 0) ||
            n < 0 ||
            n > ((t.length - r) | 0)
          ) {
            o = !1;
            break e;
          }
          for (var a = n, i = (e + r) | 0, l = H(this, e), s = e; s < i; ) {
            var u = l === 0 ? 0 : this.o1q_1[(l - 1) | 0],
              c = (this.o1q_1[l] - u) | 0,
              d = this.o1q_1[(this.n1q_1.length + l) | 0],
              m = (u + c) | 0,
              p = (Math.min(i, m) - s) | 0,
              _ = (d + ((s - u) | 0)) | 0,
              f = this.n1q_1[l];
            if (!E(f, _, t, a, p)) {
              o = !1;
              break e;
            }
            ((a = (a + p) | 0), (s = (s + p) | 0), (l = (l + 1) | 0));
          }
          o = !0;
        }
        return o;
      }),
      (e.protoOf180f3jzyo7rfj(Y).e1r = function (e, t, n, r) {
        var a;
        (I(
          (a = o("kotlin-kotlin-stdlib")).fromInt2ii0rejb1w62w(this.n()),
          a.fromInt2ii0rejb1w62w(e),
          a.fromInt2ii0rejb1w62w(r),
        ),
          I(
            a.fromInt2ii0rejb1w62w(t.length),
            a.fromInt2ii0rejb1w62w(n),
            a.fromInt2ii0rejb1w62w(r),
          ));
        for (var i = n, l = (e + r) | 0, s = H(this, e), u = e; u < l; ) {
          var c = s === 0 ? 0 : this.o1q_1[(s - 1) | 0],
            d = (this.o1q_1[s] - c) | 0,
            m = this.o1q_1[(this.n1q_1.length + s) | 0],
            p = (c + d) | 0,
            _ = (Math.min(l, p) - u) | 0,
            f = (m + ((u - c) | 0)) | 0,
            g = this.n1q_1[s],
            h = i,
            y = (f + _) | 0,
            C = g;
          (o("kotlin-kotlin-stdlib").arrayCopytctsywo3h7gj(C, t, h, f, y),
            (i = (i + _) | 0),
            (u = (u + _) | 0),
            (s = (s + 1) | 0));
        }
        return a.Unit_instance1fbcbse1fwigr;
      }),
      (e.protoOf180f3jzyo7rfj(Y).x1q = function () {
        return this.b1r();
      }),
      (e.protoOf180f3jzyo7rfj(Y).equals = function (e) {
        var t;
        return (
          e === this
            ? (t = !0)
            : e instanceof Q
              ? (t = e.n() === this.n() && this.g1r(0, e, 0, this.n()))
              : (t = !1),
          t
        );
      }),
      (e.protoOf180f3jzyo7rfj(Y).hashCode = function () {
        var e;
        e: {
          var t = this.y1p_1;
          if (t !== 0) {
            e = t;
            break e;
          }
          t = 1;
          for (var n = this.n1q_1.length, r = 0, o = 0; r < n; ) {
            for (
              var a = this.o1q_1[(n + r) | 0],
                i = this.o1q_1[r],
                l = this.n1q_1[r],
                u = a,
                c = (a + ((i - o) | 0)) | 0;
              u < c;
            )
              ((t = (s(31, t) + l[u]) | 0), (u = (u + 1) | 0));
            ((o = i), (r = (r + 1) | 0));
          }
          (this.v1q(t), (e = t));
        }
        return e;
      }),
      (e.protoOf180f3jzyo7rfj(Y).toString = function () {
        return X(this).toString();
      }));
    function J() {
      ((this.a1q_1 = null),
        (this.b1q_1 = !1),
        (this.c1q_1 = null),
        (this.d1q_1 = -BigInt(1)),
        (this.e1q_1 = null),
        (this.f1q_1 = -1),
        (this.g1q_1 = -1));
    }
    ((e.protoOf180f3jzyo7rfj(J).h1r = function (e) {
      if (!(e > 0)) {
        var t = "minByteCount <= 0: " + e;
        throw o(
          "kotlin-kotlin-stdlib",
        ).IllegalArgumentException_init_$Create$3ewkh27kzt8z8(
          o("kotlin-kotlin-stdlib").toString1pkumu07cwy4m(t),
        );
      }
      if (!(e <= 8192)) {
        var n = "minByteCount > Segment.SIZE: " + e;
        throw o(
          "kotlin-kotlin-stdlib",
        ).IllegalArgumentException_init_$Create$3ewkh27kzt8z8(
          o("kotlin-kotlin-stdlib").toString1pkumu07cwy4m(n),
        );
      }
      var r = this.a1q_1,
        a;
      e: if (r == null) {
        var i = "not attached to a buffer";
        throw o(
          "kotlin-kotlin-stdlib",
        ).IllegalStateException_init_$Create$2w9444nebyjns(
          o("kotlin-kotlin-stdlib").toString1pkumu07cwy4m(i),
        );
      } else {
        a = r;
        break e;
      }
      var l = a;
      if (!this.b1q_1) {
        var s = "expandBuffer() only permitted for read/write buffers";
        throw o(
          "kotlin-kotlin-stdlib",
        ).IllegalStateException_init_$Create$2w9444nebyjns(
          o("kotlin-kotlin-stdlib").toString1pkumu07cwy4m(s),
        );
      }
      var u = l.i1q_1,
        c = l.i1r(e),
        d = (8192 - c.g1p_1) | 0;
      c.g1p_1 = 8192;
      var m = l;
      return (
        (m.i1q_1 = o("kotlin-kotlin-stdlib").add2suhfggl4zvkk(
          u,
          o("kotlin-kotlin-stdlib").fromInt2ii0rejb1w62w(d),
        )),
        (this.c1q_1 = c),
        (this.d1q_1 = u),
        (this.e1q_1 = c.e1p_1),
        (this.f1q_1 = (8192 - d) | 0),
        (this.g1q_1 = 8192),
        o("kotlin-kotlin-stdlib").fromInt2ii0rejb1w62w(d)
      );
    }),
      (e.protoOf180f3jzyo7rfj(J).j1r = function () {
        if (this.a1q_1 == null) {
          var e = "not attached to a buffer";
          throw o(
            "kotlin-kotlin-stdlib",
          ).IllegalStateException_init_$Create$2w9444nebyjns(
            o("kotlin-kotlin-stdlib").toString1pkumu07cwy4m(e),
          );
        }
        ((this.a1q_1 = null),
          (this.c1q_1 = null),
          (this.d1q_1 = -BigInt(1)),
          (this.e1q_1 = null),
          (this.f1q_1 = -1),
          (this.g1q_1 = -1));
      }));
    function Z() {
      ((this.h1q_1 = null), (this.i1q_1 = BigInt(0)));
    }
    ((e.protoOf180f3jzyo7rfj(Z).k1r = function () {
      return this.i1q_1 === BigInt(0);
    }),
      (e.protoOf180f3jzyo7rfj(Z).l1r = function (e) {
        if (this.i1q_1 < e) throw new oe(null);
      }),
      (e.protoOf180f3jzyo7rfj(Z).m1r = function () {
        if (this.i1q_1 === BigInt(0)) throw re();
        var e = o("kotlin-kotlin-stdlib").ensureNotNull1e947j3ixpazm(
            this.h1q_1,
          ),
          t = e.f1p_1,
          n = e.g1p_1,
          r = e.e1p_1,
          a = t;
        t = (a + 1) | 0;
        var i = r[a];
        return (
          (this.i1q_1 = o("kotlin-kotlin-stdlib").subtract2orl8z9upxd9l(
            this.i1q_1,
            BigInt(1),
          )),
          t === n ? ((this.h1q_1 = e.o1p()), me.w1p(e)) : (e.f1p_1 = t),
          i
        );
      }),
      (e.protoOf180f3jzyo7rfj(Z).n1r = function () {
        var e;
        e: {
          if (this.i1q_1 < BigInt(4)) throw re();
          var t = o("kotlin-kotlin-stdlib").ensureNotNull1e947j3ixpazm(
              this.h1q_1,
            ),
            n = t.f1p_1,
            r = t.g1p_1;
          if (
            o("kotlin-kotlin-stdlib").fromInt2ii0rejb1w62w((r - n) | 0) <
            BigInt(4)
          ) {
            var a = (this.m1r() & 255) << 24,
              i = a | ((this.m1r() & 255) << 16),
              l = i | ((this.m1r() & 255) << 8);
            e = l | (this.m1r() & 255);
            break e;
          }
          var s = t.e1p_1,
            u = n;
          n = (u + 1) | 0;
          var c = (s[u] & 255) << 24,
            d = n;
          n = (d + 1) | 0;
          var m = c | ((s[d] & 255) << 16),
            p = n;
          n = (p + 1) | 0;
          var _ = m | ((s[p] & 255) << 8),
            f = n;
          n = (f + 1) | 0;
          var g = _ | (s[f] & 255);
          ((this.i1q_1 = o("kotlin-kotlin-stdlib").subtract2orl8z9upxd9l(
            this.i1q_1,
            BigInt(4),
          )),
            n === r ? ((this.h1q_1 = t.o1p()), me.w1p(t)) : (t.f1p_1 = n),
            (e = g));
        }
        return e;
      }),
      (e.protoOf180f3jzyo7rfj(Z).o1r = function () {
        var e;
        e: {
          if (this.i1q_1 < BigInt(8)) throw re();
          var t = o("kotlin-kotlin-stdlib").ensureNotNull1e947j3ixpazm(
              this.h1q_1,
            ),
            n = t.f1p_1,
            r = t.g1p_1;
          if (
            o("kotlin-kotlin-stdlib").fromInt2ii0rejb1w62w((r - n) | 0) <
            BigInt(8)
          ) {
            var a = this.n1r(),
              i = BigInt(4294967295),
              l = o("kotlin-kotlin-stdlib").fromInt2ii0rejb1w62w(a) & i,
              s = o("kotlin-kotlin-stdlib").shiftLeft3tsh2sstjchzn(l, 32),
              u = this.n1r(),
              c = BigInt(4294967295);
            e = s | (o("kotlin-kotlin-stdlib").fromInt2ii0rejb1w62w(u) & c);
            break e;
          }
          var d = t.e1p_1,
            m = n;
          n = (m + 1) | 0;
          var p = d[m],
            _ = o("kotlin-kotlin-stdlib").fromInt2ii0rejb1w62w(p) & BigInt(255),
            f = o("kotlin-kotlin-stdlib").shiftLeft3tsh2sstjchzn(_, 56),
            g = n;
          n = (g + 1) | 0;
          var h = d[g],
            y = o("kotlin-kotlin-stdlib").fromInt2ii0rejb1w62w(h) & BigInt(255),
            C = f | o("kotlin-kotlin-stdlib").shiftLeft3tsh2sstjchzn(y, 48),
            b = n;
          n = (b + 1) | 0;
          var v = d[b],
            S = o("kotlin-kotlin-stdlib").fromInt2ii0rejb1w62w(v) & BigInt(255),
            R = C | o("kotlin-kotlin-stdlib").shiftLeft3tsh2sstjchzn(S, 40),
            L = n;
          n = (L + 1) | 0;
          var E = d[L],
            k = o("kotlin-kotlin-stdlib").fromInt2ii0rejb1w62w(E) & BigInt(255),
            I = R | o("kotlin-kotlin-stdlib").shiftLeft3tsh2sstjchzn(k, 32),
            T = n;
          n = (T + 1) | 0;
          var D = d[T],
            x = o("kotlin-kotlin-stdlib").fromInt2ii0rejb1w62w(D) & BigInt(255),
            $ = I | o("kotlin-kotlin-stdlib").shiftLeft3tsh2sstjchzn(x, 24),
            P = n;
          n = (P + 1) | 0;
          var N = d[P],
            M = o("kotlin-kotlin-stdlib").fromInt2ii0rejb1w62w(N) & BigInt(255),
            w = $ | o("kotlin-kotlin-stdlib").shiftLeft3tsh2sstjchzn(M, 16),
            A = n;
          n = (A + 1) | 0;
          var F = d[A],
            O = o("kotlin-kotlin-stdlib").fromInt2ii0rejb1w62w(F) & BigInt(255),
            B = w | o("kotlin-kotlin-stdlib").shiftLeft3tsh2sstjchzn(O, 8),
            W = n;
          n = (W + 1) | 0;
          var q = d[W],
            U =
              B |
              (o("kotlin-kotlin-stdlib").fromInt2ii0rejb1w62w(q) & BigInt(255));
          ((this.i1q_1 = o("kotlin-kotlin-stdlib").subtract2orl8z9upxd9l(
            this.i1q_1,
            BigInt(8),
          )),
            n === r ? ((this.h1q_1 = t.o1p()), me.w1p(t)) : (t.f1p_1 = n),
            (e = U));
        }
        return e;
      }),
      (e.protoOf180f3jzyo7rfj(Z).p1r = function () {
        return S(this.n1r());
      }),
      (e.protoOf180f3jzyo7rfj(Z).q1r = function () {
        return R(this.o1r());
      }),
      (e.protoOf180f3jzyo7rfj(Z).r1r = function () {
        return this.s1r(this.i1q_1);
      }),
      (e.protoOf180f3jzyo7rfj(Z).s1r = function (e) {
        var t;
        e: {
          if (!(e >= BigInt(0) && e <= BigInt(2147483647))) {
            var n = "byteCount: " + e.toString();
            throw o(
              "kotlin-kotlin-stdlib",
            ).IllegalArgumentException_init_$Create$3ewkh27kzt8z8(
              o("kotlin-kotlin-stdlib").toString1pkumu07cwy4m(n),
            );
          }
          if (this.i1q_1 < e) throw re();
          if (e >= BigInt(4096)) {
            var r = this.u1r(
              o("kotlin-kotlin-stdlib").convertToInty04h231mmjoh(e),
            );
            (this.v1r(e), (t = r));
            break e;
          } else {
            t = new Q(this.t1r(e));
            break e;
          }
        }
        return t;
      }),
      (e.protoOf180f3jzyo7rfj(Z).w1r = function (e) {
        var t;
        e: {
          if (!(e >= BigInt(0) && e <= BigInt(2147483647))) {
            var n = "byteCount: " + e.toString();
            throw o(
              "kotlin-kotlin-stdlib",
            ).IllegalArgumentException_init_$Create$3ewkh27kzt8z8(
              o("kotlin-kotlin-stdlib").toString1pkumu07cwy4m(n),
            );
          }
          if (this.i1q_1 < e) throw re();
          if (e === BigInt(0)) {
            t = "";
            break e;
          }
          var r = o("kotlin-kotlin-stdlib").ensureNotNull1e947j3ixpazm(
            this.h1q_1,
          );
          if (
            o("kotlin-kotlin-stdlib").add2suhfggl4zvkk(
              o("kotlin-kotlin-stdlib").numberToLong2pakxeg38estk(r.f1p_1),
              e,
            ) > o("kotlin-kotlin-stdlib").fromInt2ii0rejb1w62w(r.g1p_1)
          ) {
            t = P(this.t1r(e));
            break e;
          }
          var a = P(
            r.e1p_1,
            r.f1p_1,
            (r.f1p_1 + o("kotlin-kotlin-stdlib").convertToInty04h231mmjoh(e)) |
              0,
          );
          ((r.f1p_1 =
            (r.f1p_1 + o("kotlin-kotlin-stdlib").convertToInty04h231mmjoh(e)) |
            0),
            (this.i1q_1 = o("kotlin-kotlin-stdlib").subtract2orl8z9upxd9l(
              this.i1q_1,
              e,
            )),
            r.f1p_1 === r.g1p_1 && ((this.h1q_1 = r.o1p()), me.w1p(r)),
            (t = a));
        }
        return t;
      }),
      (e.protoOf180f3jzyo7rfj(Z).x1r = function () {
        return this.t1r(this.i1q_1);
      }),
      (e.protoOf180f3jzyo7rfj(Z).t1r = function (e) {
        if (!(e >= BigInt(0) && e <= BigInt(2147483647))) {
          var t = "byteCount: " + e.toString();
          throw o(
            "kotlin-kotlin-stdlib",
          ).IllegalArgumentException_init_$Create$3ewkh27kzt8z8(
            o("kotlin-kotlin-stdlib").toString1pkumu07cwy4m(t),
          );
        }
        if (this.i1q_1 < e) throw re();
        var n = new Int8Array(
          o("kotlin-kotlin-stdlib").convertToInty04h231mmjoh(e),
        );
        return (this.y1r(n), n);
      }),
      (e.protoOf180f3jzyo7rfj(Z).y1r = function (e) {
        for (var t = 0; t < e.length; ) {
          var n = this.z1r(e, t, (e.length - t) | 0);
          if (n === -1) throw re();
          t = (t + n) | 0;
        }
        return o("kotlin-kotlin-stdlib").Unit_instance1fbcbse1fwigr;
      }),
      (e.protoOf180f3jzyo7rfj(Z).z1r = function (e, t, n) {
        var r;
        e: {
          I(
            o("kotlin-kotlin-stdlib").fromInt2ii0rejb1w62w(e.length),
            o("kotlin-kotlin-stdlib").fromInt2ii0rejb1w62w(t),
            o("kotlin-kotlin-stdlib").fromInt2ii0rejb1w62w(n),
          );
          var a = this.h1q_1,
            i;
          if (a == null) {
            r = -1;
            break e;
          } else i = a;
          var l = i,
            s = (l.g1p_1 - l.f1p_1) | 0,
            u = Math.min(n, s),
            c = l.e1p_1,
            d = l.f1p_1,
            m = (l.f1p_1 + u) | 0,
            p = c;
          (o("kotlin-kotlin-stdlib").arrayCopytctsywo3h7gj(p, e, t, d, m),
            (l.f1p_1 = (l.f1p_1 + u) | 0),
            (this.i1q_1 = o("kotlin-kotlin-stdlib").subtract2orl8z9upxd9l(
              this.i1q_1,
              o("kotlin-kotlin-stdlib").fromInt2ii0rejb1w62w(u),
            )),
            l.f1p_1 === l.g1p_1 && ((this.h1q_1 = l.o1p()), me.w1p(l)),
            (r = u));
        }
        return r;
      }),
      (e.protoOf180f3jzyo7rfj(Z).v1r = function (e) {
        for (var t = e; t > BigInt(0); ) {
          var n = this.h1q_1,
            r;
          if (n == null) throw re();
          r = n;
          var a = r,
            i = t,
            l = (a.g1p_1 - a.f1p_1) | 0,
            s = o("kotlin-kotlin-stdlib").fromInt2ii0rejb1w62w(l),
            u = i <= s ? i : s,
            c = o("kotlin-kotlin-stdlib").convertToInty04h231mmjoh(u);
          ((this.i1q_1 = o("kotlin-kotlin-stdlib").subtract2orl8z9upxd9l(
            this.i1q_1,
            o("kotlin-kotlin-stdlib").fromInt2ii0rejb1w62w(c),
          )),
            (t = o("kotlin-kotlin-stdlib").subtract2orl8z9upxd9l(
              t,
              o("kotlin-kotlin-stdlib").fromInt2ii0rejb1w62w(c),
            )),
            (a.f1p_1 = (a.f1p_1 + c) | 0),
            a.f1p_1 === a.g1p_1 && ((this.h1q_1 = a.o1p()), me.w1p(a)));
        }
        return o("kotlin-kotlin-stdlib").Unit_instance1fbcbse1fwigr;
      }),
      (e.protoOf180f3jzyo7rfj(Z).a1s = function (e) {
        var t = e.n();
        return (e.c1r(this, 0, t), this);
      }),
      (e.protoOf180f3jzyo7rfj(Z).i1r = function (e) {
        var t;
        e: {
          if (!(e >= 1 && e <= 8192)) {
            var n = "unexpected capacity";
            throw o(
              "kotlin-kotlin-stdlib",
            ).IllegalArgumentException_init_$Create$3ewkh27kzt8z8(
              o("kotlin-kotlin-stdlib").toString1pkumu07cwy4m(n),
            );
          }
          if (this.h1q_1 == null) {
            var r = me.t1p();
            ((this.h1q_1 = r), (r.k1p_1 = r), (r.j1p_1 = r), (t = r));
            break e;
          }
          var a = o("kotlin-kotlin-stdlib").ensureNotNull1e947j3ixpazm(
            this.h1q_1,
          ).k1p_1;
          ((((o("kotlin-kotlin-stdlib").ensureNotNull1e947j3ixpazm(a).g1p_1 +
            e) |
            0) >
            8192 ||
            !a.i1p_1) &&
            (a = a.p1p(me.t1p())),
            (t = a));
        }
        return t;
      }),
      (e.protoOf180f3jzyo7rfj(Z).b1s = function (e) {
        return this.c1s(e, 0, e.length);
      }),
      (e.protoOf180f3jzyo7rfj(Z).c1s = function (e, t, n) {
        if (!(t >= 0)) {
          var r = "beginIndex < 0: " + t;
          throw o(
            "kotlin-kotlin-stdlib",
          ).IllegalArgumentException_init_$Create$3ewkh27kzt8z8(
            o("kotlin-kotlin-stdlib").toString1pkumu07cwy4m(r),
          );
        }
        if (!(n >= t)) {
          var a = "endIndex < beginIndex: " + n + " < " + t;
          throw o(
            "kotlin-kotlin-stdlib",
          ).IllegalArgumentException_init_$Create$3ewkh27kzt8z8(
            o("kotlin-kotlin-stdlib").toString1pkumu07cwy4m(a),
          );
        }
        if (!(n <= e.length)) {
          var i = "endIndex > string.length: " + n + " > " + e.length;
          throw o(
            "kotlin-kotlin-stdlib",
          ).IllegalArgumentException_init_$Create$3ewkh27kzt8z8(
            o("kotlin-kotlin-stdlib").toString1pkumu07cwy4m(i),
          );
        }
        for (var l = t; l < n; ) {
          var s = o("kotlin-kotlin-stdlib").charCodeAt1yspne1d8erbm(e, l),
            u = o("kotlin-kotlin-stdlib").Char__toInt_impl_vasixd1agw9q2fuvclj(
              s,
            );
          if (u < 128) {
            var c = this.i1r(1),
              d = c.e1p_1,
              m = (c.g1p_1 - l) | 0,
              p = (8192 - m) | 0,
              _ = Math.min(n, p),
              f = l;
            ((l = (f + 1) | 0),
              (d[(m + f) | 0] = o("kotlin-kotlin-stdlib").toByte4i43936u611k(
                u,
              )));
            e: for (; l < _; ) {
              var g = o("kotlin-kotlin-stdlib").charCodeAt1yspne1d8erbm(e, l);
              if (
                ((u = o(
                  "kotlin-kotlin-stdlib",
                ).Char__toInt_impl_vasixd1agw9q2fuvclj(g)),
                u >= 128)
              )
                break e;
              var h = l;
              ((l = (h + 1) | 0),
                (d[(m + h) | 0] = o("kotlin-kotlin-stdlib").toByte4i43936u611k(
                  u,
                )));
            }
            var y = (((l + m) | 0) - c.g1p_1) | 0;
            ((c.g1p_1 = (c.g1p_1 + y) | 0),
              (this.i1q_1 = o("kotlin-kotlin-stdlib").add2suhfggl4zvkk(
                this.i1q_1,
                o("kotlin-kotlin-stdlib").fromInt2ii0rejb1w62w(y),
              )));
          } else if (u < 2048) {
            var C = this.i1r(2);
            ((C.e1p_1[C.g1p_1] = o("kotlin-kotlin-stdlib").toByte4i43936u611k(
              (u >> 6) | 192,
            )),
              (C.e1p_1[(C.g1p_1 + 1) | 0] = o(
                "kotlin-kotlin-stdlib",
              ).toByte4i43936u611k((u & 63) | 128)),
              (C.g1p_1 = (C.g1p_1 + 2) | 0),
              (this.i1q_1 = o("kotlin-kotlin-stdlib").add2suhfggl4zvkk(
                this.i1q_1,
                BigInt(2),
              )),
              (l = (l + 1) | 0));
          } else if (u < 55296 || u > 57343) {
            var b,
              v = this.i1r(3);
            ((v.e1p_1[v.g1p_1] = (b = o(
              "kotlin-kotlin-stdlib",
            )).toByte4i43936u611k((u >> 12) | 224)),
              (v.e1p_1[(v.g1p_1 + 1) | 0] = b.toByte4i43936u611k(
                ((u >> 6) & 63) | 128,
              )),
              (v.e1p_1[(v.g1p_1 + 2) | 0] = b.toByte4i43936u611k(
                (u & 63) | 128,
              )),
              (v.g1p_1 = (v.g1p_1 + 3) | 0),
              (this.i1q_1 = b.add2suhfggl4zvkk(this.i1q_1, BigInt(3))),
              (l = (l + 1) | 0));
          } else {
            var S;
            if (((l + 1) | 0) < n) {
              var R = o("kotlin-kotlin-stdlib").charCodeAt1yspne1d8erbm(
                e,
                (l + 1) | 0,
              );
              S = o(
                "kotlin-kotlin-stdlib",
              ).Char__toInt_impl_vasixd1agw9q2fuvclj(R);
            } else S = 0;
            var L = S;
            if (u > 56319 || !(56320 <= L && L <= 57343)) {
              var E = o(
                  "kotlin-kotlin-stdlib",
                )._Char___init__impl__6a9atx2js6krycynjoo(63),
                k = o(
                  "kotlin-kotlin-stdlib",
                ).Char__toInt_impl_vasixd1agw9q2fuvclj(E);
              (this.d1s(k), (l = (l + 1) | 0));
            } else {
              var b,
                I = (65536 + (((u & 1023) << 10) | (L & 1023))) | 0,
                T = this.i1r(4);
              ((T.e1p_1[T.g1p_1] = (b = o(
                "kotlin-kotlin-stdlib",
              )).toByte4i43936u611k((I >> 18) | 240)),
                (T.e1p_1[(T.g1p_1 + 1) | 0] = b.toByte4i43936u611k(
                  ((I >> 12) & 63) | 128,
                )),
                (T.e1p_1[(T.g1p_1 + 2) | 0] = b.toByte4i43936u611k(
                  ((I >> 6) & 63) | 128,
                )),
                (T.e1p_1[(T.g1p_1 + 3) | 0] = b.toByte4i43936u611k(
                  (I & 63) | 128,
                )),
                (T.g1p_1 = (T.g1p_1 + 4) | 0),
                (this.i1q_1 = b.add2suhfggl4zvkk(this.i1q_1, BigInt(4))),
                (l = (l + 2) | 0));
            }
          }
        }
        return this;
      }),
      (e.protoOf180f3jzyo7rfj(Z).j1q = function (e, t, n) {
        var r,
          a = t;
        I(
          (r = o("kotlin-kotlin-stdlib")).fromInt2ii0rejb1w62w(e.length),
          r.fromInt2ii0rejb1w62w(a),
          r.fromInt2ii0rejb1w62w(n),
        );
        for (var i = (a + n) | 0; a < i; ) {
          var l = this.i1r(1),
            s = (i - a) | 0,
            u = (8192 - l.g1p_1) | 0,
            c = Math.min(s, u),
            d = l.e1p_1,
            m = l.g1p_1,
            p = a,
            _ = (a + c) | 0,
            f = e;
          (o("kotlin-kotlin-stdlib").arrayCopytctsywo3h7gj(f, d, m, p, _),
            (a = (a + c) | 0),
            (l.g1p_1 = (l.g1p_1 + c) | 0));
        }
        return (
          (this.i1q_1 = r.add2suhfggl4zvkk(
            this.i1q_1,
            r.fromInt2ii0rejb1w62w(n),
          )),
          this
        );
      }),
      (e.protoOf180f3jzyo7rfj(Z).e1s = function (e) {
        var t = BigInt(0);
        e: for (;;) {
          var n = e.f1s(this, BigInt(8192));
          if (n === -BigInt(1)) break e;
          t = o("kotlin-kotlin-stdlib").add2suhfggl4zvkk(t, n);
        }
        return t;
      }),
      (e.protoOf180f3jzyo7rfj(Z).d1s = function (e) {
        var t = this.i1r(1),
          n = t.g1p_1;
        return (
          (t.g1p_1 = (n + 1) | 0),
          (t.e1p_1[n] = o("kotlin-kotlin-stdlib").toByte4i43936u611k(e)),
          (this.i1q_1 = o("kotlin-kotlin-stdlib").add2suhfggl4zvkk(
            this.i1q_1,
            BigInt(1),
          )),
          this
        );
      }),
      (e.protoOf180f3jzyo7rfj(Z).g1s = function (e) {
        var t,
          n = this.i1r(4),
          r = n.e1p_1,
          a = n.g1p_1,
          i = a;
        ((a = (i + 1) | 0),
          (r[i] = (t = o("kotlin-kotlin-stdlib")).toByte4i43936u611k(
            ((e >>> 24) | 0) & 255,
          )));
        var l = a;
        ((a = (l + 1) | 0),
          (r[l] = t.toByte4i43936u611k(((e >>> 16) | 0) & 255)));
        var s = a;
        ((a = (s + 1) | 0),
          (r[s] = t.toByte4i43936u611k(((e >>> 8) | 0) & 255)));
        var u = a;
        return (
          (a = (u + 1) | 0),
          (r[u] = t.toByte4i43936u611k(e & 255)),
          (n.g1p_1 = a),
          (this.i1q_1 = t.add2suhfggl4zvkk(this.i1q_1, BigInt(4))),
          this
        );
      }),
      (e.protoOf180f3jzyo7rfj(Z).h1s = function (e) {
        return this.g1s(S(e));
      }),
      (e.protoOf180f3jzyo7rfj(Z).i1s = function (e) {
        var t,
          n = this.i1r(8),
          r = n.e1p_1,
          a = n.g1p_1,
          i = a;
        ((a = (i + 1) | 0),
          (r[i] = (t = o("kotlin-kotlin-stdlib")).convertToByte2t4hntblnhq2k(
            t.shiftRightUnsigned1ga7wnvbv2qur(e, 56) & BigInt(255),
          )));
        var l = a;
        ((a = (l + 1) | 0),
          (r[l] = t.convertToByte2t4hntblnhq2k(
            t.shiftRightUnsigned1ga7wnvbv2qur(e, 48) & BigInt(255),
          )));
        var s = a;
        ((a = (s + 1) | 0),
          (r[s] = t.convertToByte2t4hntblnhq2k(
            t.shiftRightUnsigned1ga7wnvbv2qur(e, 40) & BigInt(255),
          )));
        var u = a;
        ((a = (u + 1) | 0),
          (r[u] = t.convertToByte2t4hntblnhq2k(
            t.shiftRightUnsigned1ga7wnvbv2qur(e, 32) & BigInt(255),
          )));
        var c = a;
        ((a = (c + 1) | 0),
          (r[c] = t.convertToByte2t4hntblnhq2k(
            t.shiftRightUnsigned1ga7wnvbv2qur(e, 24) & BigInt(255),
          )));
        var d = a;
        ((a = (d + 1) | 0),
          (r[d] = t.convertToByte2t4hntblnhq2k(
            t.shiftRightUnsigned1ga7wnvbv2qur(e, 16) & BigInt(255),
          )));
        var m = a;
        ((a = (m + 1) | 0),
          (r[m] = t.convertToByte2t4hntblnhq2k(
            t.shiftRightUnsigned1ga7wnvbv2qur(e, 8) & BigInt(255),
          )));
        var p = a;
        return (
          (a = (p + 1) | 0),
          (r[p] = t.convertToByte2t4hntblnhq2k(e & BigInt(255))),
          (n.g1p_1 = a),
          (this.i1q_1 = t.add2suhfggl4zvkk(this.i1q_1, BigInt(8))),
          this
        );
      }),
      (e.protoOf180f3jzyo7rfj(Z).j1s = function (e) {
        return this.i1s(R(e));
      }),
      (e.protoOf180f3jzyo7rfj(Z).k1s = function (e, t) {
        var n;
        e: {
          var r = t;
          if (e === this) {
            var a = "source == this";
            throw o(
              "kotlin-kotlin-stdlib",
            ).IllegalArgumentException_init_$Create$3ewkh27kzt8z8(
              o("kotlin-kotlin-stdlib").toString1pkumu07cwy4m(a),
            );
          }
          for (I(e.i1q_1, BigInt(0), r); r > BigInt(0); ) {
            if (
              r <
              o("kotlin-kotlin-stdlib").fromInt2ii0rejb1w62w(
                (o("kotlin-kotlin-stdlib").ensureNotNull1e947j3ixpazm(e.h1q_1)
                  .g1p_1 -
                  o("kotlin-kotlin-stdlib").ensureNotNull1e947j3ixpazm(e.h1q_1)
                    .f1p_1) |
                  0,
              )
            ) {
              var i =
                  this.h1q_1 != null
                    ? o("kotlin-kotlin-stdlib").ensureNotNull1e947j3ixpazm(
                        this.h1q_1,
                      ).k1p_1
                    : null,
                l;
              if (i != null && i.i1p_1) {
                var s = r,
                  u = i.g1p_1,
                  c = o("kotlin-kotlin-stdlib").add2suhfggl4zvkk(
                    s,
                    o("kotlin-kotlin-stdlib").fromInt2ii0rejb1w62w(u),
                  ),
                  d = i.h1p_1 ? 0 : i.f1p_1;
                l =
                  o("kotlin-kotlin-stdlib").subtract2orl8z9upxd9l(
                    c,
                    o("kotlin-kotlin-stdlib").fromInt2ii0rejb1w62w(d),
                  ) <= BigInt(8192);
              } else l = !1;
              if (l) {
                var m;
                ((m = o("kotlin-kotlin-stdlib"))
                  .ensureNotNull1e947j3ixpazm(e.h1q_1)
                  .v1p(i, m.convertToInty04h231mmjoh(r)),
                  (e.i1q_1 = m.subtract2orl8z9upxd9l(e.i1q_1, r)),
                  (this.i1q_1 = m.add2suhfggl4zvkk(this.i1q_1, r)),
                  (n = m.Unit_instance1fbcbse1fwigr));
                break e;
              } else
                e.h1q_1 = o("kotlin-kotlin-stdlib")
                  .ensureNotNull1e947j3ixpazm(e.h1q_1)
                  .q1p(o("kotlin-kotlin-stdlib").convertToInty04h231mmjoh(r));
            }
            var p = e.h1q_1,
              _ = o("kotlin-kotlin-stdlib").fromInt2ii0rejb1w62w(
                (o("kotlin-kotlin-stdlib").ensureNotNull1e947j3ixpazm(p).g1p_1 -
                  p.f1p_1) |
                  0,
              );
            if (((e.h1q_1 = p.o1p()), this.h1q_1 == null))
              ((this.h1q_1 = p), (p.k1p_1 = p), (p.j1p_1 = p.k1p_1));
            else {
              var f = o("kotlin-kotlin-stdlib").ensureNotNull1e947j3ixpazm(
                this.h1q_1,
              ).k1p_1;
              ((f = o("kotlin-kotlin-stdlib")
                .ensureNotNull1e947j3ixpazm(f)
                .p1p(p)),
                f.u1p());
            }
            ((e.i1q_1 = o("kotlin-kotlin-stdlib").subtract2orl8z9upxd9l(
              e.i1q_1,
              _,
            )),
              (this.i1q_1 = o("kotlin-kotlin-stdlib").add2suhfggl4zvkk(
                this.i1q_1,
                _,
              )),
              (r = o("kotlin-kotlin-stdlib").subtract2orl8z9upxd9l(r, _)));
          }
          n = o("kotlin-kotlin-stdlib").Unit_instance1fbcbse1fwigr;
        }
        return n;
      }),
      (e.protoOf180f3jzyo7rfj(Z).f1s = function (e, t) {
        var n;
        e: {
          var r = t;
          if (!(r >= BigInt(0))) {
            var a = "byteCount < 0: " + r.toString();
            throw o(
              "kotlin-kotlin-stdlib",
            ).IllegalArgumentException_init_$Create$3ewkh27kzt8z8(
              o("kotlin-kotlin-stdlib").toString1pkumu07cwy4m(a),
            );
          }
          if (this.i1q_1 === BigInt(0)) {
            n = -BigInt(1);
            break e;
          }
          (r > this.i1q_1 && (r = this.i1q_1), e.k1s(this, r), (n = r));
        }
        return n;
      }),
      (e.protoOf180f3jzyo7rfj(Z).equals = function (e) {
        var t;
        e: {
          if (this === e) {
            t = !0;
            break e;
          }
          if (!(e instanceof Z)) {
            t = !1;
            break e;
          }
          if (this.i1q_1 !== e.i1q_1) {
            t = !1;
            break e;
          }
          if (this.i1q_1 === BigInt(0)) {
            t = !0;
            break e;
          }
          for (
            var n = o("kotlin-kotlin-stdlib").ensureNotNull1e947j3ixpazm(
                this.h1q_1,
              ),
              r = o("kotlin-kotlin-stdlib").ensureNotNull1e947j3ixpazm(e.h1q_1),
              a = n.f1p_1,
              i = r.f1p_1,
              l = BigInt(0),
              s;
            l < this.i1q_1;
          ) {
            var u = (n.g1p_1 - a) | 0,
              c = (r.g1p_1 - i) | 0,
              d = Math.min(u, c);
            s = o("kotlin-kotlin-stdlib").fromInt2ii0rejb1w62w(d);
            var m = BigInt(0);
            if (m < s)
              do {
                var p = m;
                m = o("kotlin-kotlin-stdlib").add2suhfggl4zvkk(m, BigInt(1));
                var _ = n.e1p_1,
                  f = a;
                a = (f + 1) | 0;
                var g = _[f],
                  h = r.e1p_1,
                  y = i;
                if (((i = (y + 1) | 0), g !== h[y])) {
                  t = !1;
                  break e;
                }
              } while (m < s);
            (a === n.g1p_1 &&
              ((n = o("kotlin-kotlin-stdlib").ensureNotNull1e947j3ixpazm(
                n.j1p_1,
              )),
              (a = n.f1p_1)),
              i === r.g1p_1 &&
                ((r = o("kotlin-kotlin-stdlib").ensureNotNull1e947j3ixpazm(
                  r.j1p_1,
                )),
                (i = r.f1p_1)),
              (l = o("kotlin-kotlin-stdlib").add2suhfggl4zvkk(l, s)));
          }
          t = !0;
        }
        return t;
      }),
      (e.protoOf180f3jzyo7rfj(Z).hashCode = function () {
        var e;
        e: {
          var t = this.h1q_1,
            n;
          if (t == null) {
            e = 0;
            break e;
          } else n = t;
          var r = n,
            a = 1;
          do {
            for (var i = r.f1p_1, l = r.g1p_1; i < l; )
              ((a = (s(31, a) + r.e1p_1[i]) | 0), (i = (i + 1) | 0));
            r = o("kotlin-kotlin-stdlib").ensureNotNull1e947j3ixpazm(r.j1p_1);
          } while (r !== this.h1q_1);
          e = a;
        }
        return e;
      }),
      (e.protoOf180f3jzyo7rfj(Z).toString = function () {
        return this.l1s().toString();
      }),
      (e.protoOf180f3jzyo7rfj(Z).l1s = function () {
        if (!(this.i1q_1 <= BigInt(2147483647))) {
          var e = "size > Int.MAX_VALUE: " + this.i1q_1.toString();
          throw o(
            "kotlin-kotlin-stdlib",
          ).IllegalStateException_init_$Create$2w9444nebyjns(
            o("kotlin-kotlin-stdlib").toString1pkumu07cwy4m(e),
          );
        }
        return this.u1r(
          o("kotlin-kotlin-stdlib").convertToInty04h231mmjoh(this.i1q_1),
        );
      }),
      (e.protoOf180f3jzyo7rfj(Z).u1r = function (e) {
        var t;
        e: {
          if (e === 0) {
            t = K().p1q_1;
            break e;
          }
          I(
            this.i1q_1,
            BigInt(0),
            o("kotlin-kotlin-stdlib").fromInt2ii0rejb1w62w(e),
          );
          for (var n = 0, r = 0, a = this.h1q_1; n < e; ) {
            if (
              o("kotlin-kotlin-stdlib").ensureNotNull1e947j3ixpazm(a).g1p_1 ===
              a.f1p_1
            )
              throw o(
                "kotlin-kotlin-stdlib",
              ).AssertionError_init_$Create$3rpc0tgt37vn2("s.limit == s.pos");
            ((n = (n + ((a.g1p_1 - a.f1p_1) | 0)) | 0),
              (r = (r + 1) | 0),
              (a = a.j1p_1));
          }
          var i = r,
            l = Array(i),
            u = new Int32Array(s(r, 2));
          for (n = 0, r = 0, a = this.h1q_1; n < e; ) {
            ((l[r] = o("kotlin-kotlin-stdlib").ensureNotNull1e947j3ixpazm(
              a,
            ).e1p_1),
              (n = (n + ((a.g1p_1 - a.f1p_1) | 0)) | 0));
            var c = r,
              d = n;
            ((u[c] = Math.min(d, e)),
              (u[(r + l.length) | 0] = a.f1p_1),
              (a.h1p_1 = !0),
              (r = (r + 1) | 0),
              (a = a.j1p_1));
          }
          t = new Y(
            o("kotlin-kotlin-stdlib").isArray1hxjqtqy632bc(l)
              ? l
              : o("kotlin-kotlin-stdlib").THROW_CCE2g6jy02ryeudk(),
            u,
          );
        }
        return t;
      }),
      (e.protoOf180f3jzyo7rfj(Z).m1s = function (e) {
        return M(this, e);
      }));
    function ee(e) {
      return $(e);
    }
    function te(e) {
      (o(
        "kotlin-kotlin-stdlib",
      ).IndexOutOfBoundsException_init_$Init$3rj4wwb4w6z4p(e, this),
        o("kotlin-kotlin-stdlib").captureStack1fzi4aczwc4hg(this, te));
    }
    function ne(e) {
      return (oe.call(e, null), e);
    }
    function re() {
      var e = ne(
        o("kotlin-kotlin-stdlib").objectCreate1ve4bgxiu4x98(
          o("kotlin-kotlin-stdlib").protoOf180f3jzyo7rfj(oe),
        ),
      );
      return (o("kotlin-kotlin-stdlib").captureStack1fzi4aczwc4hg(e, re), e);
    }
    function oe(e) {
      (ae(e, this),
        o("kotlin-kotlin-stdlib").captureStack1fzi4aczwc4hg(this, oe));
    }
    function ae(e, t) {
      return (ue.call(t, e, null), t);
    }
    function ie(e) {
      var t = ae(
        e,
        o("kotlin-kotlin-stdlib").objectCreate1ve4bgxiu4x98(
          o("kotlin-kotlin-stdlib").protoOf180f3jzyo7rfj(ue),
        ),
      );
      return (o("kotlin-kotlin-stdlib").captureStack1fzi4aczwc4hg(t, ie), t);
    }
    function le(e) {
      return (ue.call(e, null, null), e);
    }
    function se() {
      var e = le(
        o("kotlin-kotlin-stdlib").objectCreate1ve4bgxiu4x98(
          o("kotlin-kotlin-stdlib").protoOf180f3jzyo7rfj(ue),
        ),
      );
      return (o("kotlin-kotlin-stdlib").captureStack1fzi4aczwc4hg(e, se), e);
    }
    function ue(e, t) {
      (o("kotlin-kotlin-stdlib").Exception_init_$Init$393utbttlf2x4(e, t, this),
        o("kotlin-kotlin-stdlib").captureStack1fzi4aczwc4hg(this, ue));
    }
    function ce(e) {
      return P(e);
    }
    function de() {
      ((this.r1p_1 = 0), (this.s1p_1 = 0));
    }
    ((e.protoOf180f3jzyo7rfj(de).t1p = function () {
      return c();
    }),
      (e.protoOf180f3jzyo7rfj(de).w1p = function (e) {}));
    var me;
    function pe() {
      return me;
    }
    ((_ = new p()),
      (me = new de()),
      (l.EOFException_init_$Create$3h22p3ffqzxfn = re),
      (l.IOException_init_$Init$3couq8mx2iffd = ae),
      (l.IOException_init_$Create$1nlsccrpovv0q = ie),
      (l.Companion_getInstancef9979w40pilv = K),
      (l.UnsafeCursor3vg8iqxvd6n5k = J),
      (l.Buffer3384y49aj0pxr = Z),
      (l.ByteString2qc03wzjsovk = Q),
      (l.IOException3fje1ukjwthwb = ue),
      (l.utf8Sizepbx08o327qxk = h));
  },
  98,
);
