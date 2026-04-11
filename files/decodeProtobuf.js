__d(
  "decodeProtobuf",
  [
    "WABaseProto",
    "WABinary",
    "WAHasProperty",
    "WAHex",
    "WAProtoCompile",
    "WAProtoConst",
    "WAProtoUtils",
    "WAProtoValidate",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n = new (o("WABinary").Binary)(t),
        r = h(e, n, void 0, !1, !1);
      return (o("WAProtoValidate").checkRequirements(e, r), r);
    }
    function s(e, t) {
      var n = new (o("WABinary").Binary)(t),
        r = h(e, n, void 0, !1, !0);
      return (o("WAProtoValidate").checkRequirements(e, r), r);
    }
    function u(e, t) {
      var n = new (o("WABinary").Binary)(t),
        r = h(e, n, void 0, !0, !1);
      return (o("WAProtoValidate").checkRequirements(e, r), r);
    }
    function c(e) {
      return r("WAHasProperty")(e, "$$unsafeUnknownFields")
        ? e.$$unsafeUnknownFields
        : null;
    }
    function d(e, t, n) {
      if (e !== o("WAProtoUtils").typeToEncType(t))
        throw new Error("FormatError: " + n + " encoded with wire type " + e);
    }
    function m(e, t, n) {
      switch (t) {
        case o("WAProtoConst").TYPES.INT32:
          return p(
            n,
            -2147483648,
            2147483648,
            e,
            o("WABinary").parseInt64OrThrow,
          );
        case o("WAProtoConst").TYPES.INT64:
          return n.readVarInt(_);
        case o("WAProtoConst").TYPES.UINT32:
          return p(n, 0, 4294967296, e, o("WABinary").parseUint64OrThrow);
        case o("WAProtoConst").TYPES.UINT64:
          return n.readVarInt(f);
        case o("WAProtoConst").TYPES.SINT32: {
          var r = p(n, 0, 4294967296, e, o("WABinary").parseInt64OrThrow);
          return r & 1 ? ~(r >>> 1) : r >>> 1;
        }
        case o("WAProtoConst").TYPES.SINT64:
          return n.readVarInt(g);
        case o("WAProtoConst").TYPES.BOOL:
          return !!p(n, 0, 2, e, o("WABinary").parseUint64OrThrow);
        case o("WAProtoConst").TYPES.ENUM:
          return n.readVarInt(o("WABinary").parseInt64OrThrow);
        case o("WAProtoConst").TYPES.FIXED64:
          return n.readLong(f, !0);
        case o("WAProtoConst").TYPES.SFIXED64:
          return n.readLong(_, !0);
        case o("WAProtoConst").TYPES.DOUBLE:
          return n.readFloat64(!0);
        case o("WAProtoConst").TYPES.STRING:
          return n.readString(n.readVarInt(o("WABinary").parseUint64OrThrow));
        case o("WAProtoConst").TYPES.BYTES:
          return n.readBuffer(n.readVarInt(o("WABinary").parseUint64OrThrow));
        case o("WAProtoConst").TYPES.FIXED32:
          return n.readUint32(!0);
        case o("WAProtoConst").TYPES.SFIXED32:
          return n.readInt32(!0);
        case o("WAProtoConst").TYPES.FLOAT:
          return n.readFloat32(!0);
      }
    }
    function p(e, t, n, r, o) {
      var a = e.readVarInt(o);
      if (a < t || a >= n)
        throw new Error(
          "FormatError: " + r + " encoded with out-of-range value " + a,
        );
      return a;
    }
    function _(e, t) {
      var n = o("WABinary").longFitsInDouble(!0, e, t);
      if (n) {
        var r = y(t);
        return e * 4294967296 + r;
      } else {
        var a = e < 0,
          i;
        a ? (i = t === 0 ? -e : ~e) : (i = e);
        var l = a ? -t : t;
        return o("WAHex").createHexLongFrom32Bits(i, l, a);
      }
    }
    function f(e, t) {
      var n = o("WABinary").longFitsInDouble(!1, e, t);
      if (n) {
        var r = y(e),
          a = y(t);
        return r * 4294967296 + a;
      } else return o("WAHex").createHexLongFrom32Bits(e, t);
    }
    function g(e, t) {
      var n = e >>> 1,
        r = (e << 31) | (t >>> 1);
      return (t & 1 && ((n = ~n), (r = ~r)), _(n, r));
    }
    function h(e, t, n, r, a) {
      var i,
        l = o("WAProtoCompile").compileSpec(e),
        s = l.fields,
        u = l.fieldToOneof,
        c = l.meta,
        _ = l.names,
        f = l.oneofToFields,
        g = l.reservedFields,
        y = l.reservedTags,
        C = l.types,
        b = e.internalDefaults,
        v = n || babelHelpers.extends({}, b) || {};
      v.$$unknownFieldCount =
        (i = n == null ? void 0 : n.$$unknownFieldCount) != null ? i : 0;
      for (var S = 0; S < _.length; S++)
        C[S] & o("WAProtoConst").FLAGS.REPEATED
          ? (v[_[S]] = [])
          : C[S] ===
              (o("WAProtoConst").TYPES.MAP & o("WAProtoConst").TYPE_MASK) &&
            (v[_[S]] = new Map());
      for (
        var R = 0,
          L = s.length > 0,
          E = s[0],
          k = function () {
            var e = p(
                t,
                0,
                4294967296,
                "field and enc type",
                o("WABinary").parseInt64OrThrow,
              ),
              n = e & 7,
              i = e >>> 3;
            if (L && i !== E) {
              var l = R;
              do (++R === s.length && (R = 0), (E = s[R]));
              while (i !== E && R !== l);
            }
            if (L && i === E) {
              var b = _[R],
                S = C[R];
              d(n, S, b);
              var k = S & o("WAProtoConst").TYPE_MASK,
                I = c[R];
              if (S & o("WAProtoConst").FLAGS.PACKED)
                for (
                  var T = t.readVarInt(o("WABinary").parseUint64OrThrow),
                    D = t.readBinary(T);
                  D.size();
                ) {
                  var x = m(b, k, D);
                  (k !== o("WAProtoConst").TYPES.ENUM ||
                    I[x] ||
                    (I.cast == null ? void 0 : I.cast(x)) !== void 0) &&
                    v[b].push(x);
                }
              else if (k === o("WAProtoConst").TYPES.MESSAGE) {
                var $ = t.readVarInt(o("WABinary").parseUint64OrThrow),
                  P = t.readBinary($);
                if (S & o("WAProtoConst").FLAGS.REPEATED)
                  v[b].push(h(I, P, void 0, r, a));
                else {
                  var N = v[b];
                  v[b] = h(I, P, N, r, a);
                }
              } else if (k === o("WAProtoConst").TYPES.MAP) {
                for (
                  var M = t.readVarInt(o("WABinary").parseUint64OrThrow),
                    w = t.readBinary(M),
                    A,
                    F,
                    O = 0;
                  O < c[R].length;
                  O++
                ) {
                  var B = p(
                      w,
                      0,
                      4294967296,
                      "map field and enc type",
                      o("WABinary").parseInt64OrThrow,
                    ),
                    W = B & 7,
                    q = B >>> 3,
                    U = void 0;
                  switch (W) {
                    case o("WAProtoConst").ENC.VARINT:
                      U = w.readVarInt(o("WABinary").parseInt64OrThrow);
                      break;
                    case o("WAProtoConst").ENC.BIT64:
                      U = w.readBinary(8);
                      break;
                    case o("WAProtoConst").ENC.BINARY: {
                      var V = I[O];
                      if (
                        V === o("WAProtoConst").TYPES.BYTES ||
                        V === o("WAProtoConst").TYPES.STRING
                      )
                        U = m(b, V, w);
                      else {
                        var H = w.readVarInt(o("WABinary").parseUint64OrThrow),
                          G = w.readBinary(H);
                        U = h(V, G, void 0, r, a);
                      }
                      break;
                    }
                    case o("WAProtoConst").ENC.BIT32:
                      U = w.readBinary(4);
                      break;
                  }
                  q === 1 ? (A = U) : (F = U);
                }
                v[b].set(A, F);
              } else {
                var z = m(b, k, t);
                (k !== o("WAProtoConst").TYPES.ENUM ||
                  I[z] ||
                  (I.cast == null ? void 0 : I.cast(z)) !== void 0) &&
                  (S & o("WAProtoConst").FLAGS.REPEATED
                    ? v[b].push(z)
                    : (v[b] = z));
              }
              var j = u[b];
              (j &&
                typeof v[b] != "undefined" &&
                j.forEach(function (e) {
                  var t = f[e].filter(function (e) {
                    return e !== b;
                  });
                  if (
                    (t.forEach(function (e) {
                      delete v[e];
                    }),
                    a)
                  ) {
                    var n;
                    ((v[e] =
                      ((n = { type: b, value: v[b] }),
                      (n[o("WABaseProto").TAGGED_UNION_TAG] = !0),
                      n)),
                      delete v[b]);
                  }
                }),
                (y[i] || g[b]) && delete v[b]);
            } else if ((v.$$unknownFieldCount++, r)) {
              v.$$unsafeUnknownFields || (v.$$unsafeUnknownFields = {});
              var K;
              switch (n) {
                case o("WAProtoConst").ENC.VARINT:
                  K = t.readVarInt(o("WABinary").parseInt64OrThrow);
                  break;
                case o("WAProtoConst").ENC.BIT64:
                  K = t.readBinary(8);
                  break;
                case o("WAProtoConst").ENC.BINARY:
                  K = t.readBinary(
                    t.readVarInt(o("WABinary").parseUint64OrThrow),
                  );
                  break;
                case o("WAProtoConst").ENC.BIT32:
                  K = t.readBinary(4);
                  break;
              }
              v.$$unsafeUnknownFields[i] = K;
            } else
              n === o("WAProtoConst").ENC.VARINT
                ? t.readVarInt(o("WABinary").parseInt64OrThrow)
                : n === o("WAProtoConst").ENC.BIT64
                  ? t.advance(8)
                  : n === o("WAProtoConst").ENC.BINARY
                    ? t.advance(t.readVarInt(o("WABinary").parseUint64OrThrow))
                    : n === o("WAProtoConst").ENC.BIT32 && t.advance(4);
          };
        t.size();
      )
        k();
      return v;
    }
    function y(e) {
      return e >= 0 ? e : 4294967296 + e;
    }
    ((l.decodeProtobuf = e),
      (l.decodeProtobufWithTaggedUnions = s),
      (l.decodeProtobufWithUnknowns = u),
      (l.getUnknownFields = c));
  },
  98,
);
