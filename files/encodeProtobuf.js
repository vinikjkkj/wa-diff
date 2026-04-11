__d(
  "encodeProtobuf",
  [
    "WABinary",
    "WAHex",
    "WAProtoCompile",
    "WAProtoConst",
    "WAProtoUtils",
    "WAProtoValidate",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = void 0,
      s = 128;
    function u(t, n, r) {
      return (
        r === void 0 && (r = new (o("WABinary").Binary)()),
        o("WAProtoValidate").checkValid(t, n),
        b(r, n, t),
        (e = void 0),
        r
      );
    }
    function c() {
      return e !== void 0
        ? "Last encoded value for " + e
        : "No information known";
    }
    function d(e, t) {
      e.writeVarInt(t);
    }
    function m(e, t) {
      if (
        typeof t == "number" &&
        t < 4503599627370496 &&
        t >= -4503599627370496
      )
        e.writeVarInt(t >= 0 ? 2 * t : 2 * -t - 1);
      else {
        var n = new (o("WABinary").Binary)(),
          r;
        typeof t == "number"
          ? ((r = t < 0), n.writeVarInt(r ? -t : t))
          : ((r = o("WAHex").hexLongIsNegative(t)),
            n.writeVarIntFromHexLong(r ? o("WAHex").negateHexLong(t) : t));
        var a = n.peek(function () {
            return n.readByteArrayView();
          }),
          i = a.byteLength;
        if (r) {
          var l = 0,
            u;
          do ((u = a[l]), (a[l] = (u & s) | (((u & 127) - 1) & 127)), l++);
          while (a[l - 1] === 255);
        }
        for (var c = r ? 1 : 0, d = 0; d < i; d++) {
          var m = a[d],
            p = (m & s) | ((m & 63) << 1) | c;
          ((c = (m & 64) >> 6), (a[d] = p));
        }
        (c === 1 && ((a[i - 1] |= s), n.writeInt8(1)), e.writeBinary(n));
      }
    }
    function p(e, t) {
      typeof t == "number" ? e.writeVarInt(t) : e.writeVarIntFromHexLong(t);
    }
    function _(e, t) {
      (e.writeVarInt(o("WABinary").numUtf8Bytes(t)), e.writeString(t));
    }
    function f(e, t) {
      (e.writeVarInt(t.byteLength), e.writeBuffer(t));
    }
    function g(e, t, n) {
      e.writeWithVarIntLength(function (e, t) {
        return b(e, t, n);
      }, t);
    }
    var h = [
        void 0,
        d,
        p,
        d,
        p,
        m,
        m,
        function (e, t) {
          e.writeVarInt(t ? 1 : 0);
        },
        d,
        function (e, t) {
          typeof t == "number" ? e.writeUint64(t, !0) : e.writeHexLong(t, !0);
        },
        function (e, t) {
          typeof t == "number" ? e.writeInt64(t, !0) : e.writeHexLong(t, !0);
        },
        function (e, t) {
          e.writeFloat64(t, !0);
        },
        _,
        f,
        g,
        function (e, t) {
          e.writeUint32(t, !0);
        },
        function (e, t) {
          e.writeInt32(t, !0);
        },
        function (e, t) {
          e.writeFloat32(t, !0);
        },
      ],
      y = function (t) {
        if (t == null) return;
        var e = t;
        function n(t, n) {
          for (var r = 0; r < n.length; r++) e(t, n[r]);
        }
        return function (e, t) {
          e.writeWithVarIntLength(n, t);
        };
      },
      C = h.map(y);
    function b(t, n, r) {
      for (
        var a = o("WAProtoCompile").compileSpec(r),
          i = a.fields,
          l = a.meta,
          s = a.names,
          u = a.types,
          c = r.internalDefaults,
          d = 0;
        d < s.length;
        d++
      ) {
        var m = s[d],
          p = n[m];
        if ((p == null && c && (p = c[m]), p != null)) {
          e = m;
          var _ = i[d],
            f = u[d],
            g = f & o("WAProtoConst").TYPE_MASK,
            y = l[d],
            b = (_ * 8) | o("WAProtoUtils").typeToEncType(f);
          if (f & o("WAProtoConst").FLAGS.PACKED) {
            if (p.length > 0) {
              t.writeVarInt(b);
              var v = C[g];
              v(t, p, y);
            }
          } else if (f & o("WAProtoConst").FLAGS.REPEATED)
            for (var S = 0; S < p.length; S++) {
              t.writeVarInt(b);
              var R = h[g];
              R(t, p[S], y);
            }
          else if (g === o("WAProtoConst").TYPES.MAP)
            for (var L of p) {
              var E = L[0],
                k = L[1];
              t.writeVarInt(b);
              var I = y[0],
                T = y[1],
                D = typeof T == "object" ? o("WAProtoConst").TYPES.MESSAGE : T,
                x = h[I],
                $ = h[D];
              if (x == null || $ == null)
                throw new Error("Invalid encoder for map key/value");
              var P = new (o("WABinary").Binary)(),
                N = 8 | o("WAProtoUtils").typeToEncType(I);
              (P.writeVarInt(N), x(P, E, I));
              var M = 16 | o("WAProtoUtils").typeToEncType(D);
              (P.writeVarInt(M),
                $(P, k, T),
                t.writeVarInt(P.size()),
                t.writeBinary(P));
            }
          else {
            t.writeVarInt(b);
            var w = h[g];
            w(t, p, y);
          }
        }
      }
    }
    ((l.encodeProtobuf = u), (l.encodeErrorInfo = c));
  },
  98,
);
