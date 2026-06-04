__d(
  "decodeProtobuf",
  [
    "WABaseProto",
    "WABinary",
    "WAHasProperty",
    "WAHex",
    "WALogger",
    "WAProtoCompile",
    "WAProtoConst",
    "WAProtoUtils",
    "WAProtoValidate",
    "err",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = 100;
    function u(e, t) {
      var n = new (o("WABinary").Binary)(t),
        r = C(e, n, void 0, !1, !1);
      return (o("WAProtoValidate").checkRequirements(e, r), r);
    }
    function c(e, t) {
      var n = new (o("WABinary").Binary)(t),
        r = C(e, n, void 0, !1, !0);
      return (o("WAProtoValidate").checkRequirements(e, r), r);
    }
    function d(e, t) {
      var n = new (o("WABinary").Binary)(t),
        r = C(e, n, void 0, !0, !1);
      return (o("WAProtoValidate").checkRequirements(e, r), r);
    }
    function m(e) {
      return r("WAHasProperty")(e, "$$unsafeUnknownFields")
        ? e.$$unsafeUnknownFields
        : null;
    }
    function p(e, t, n) {
      if (e !== o("WAProtoUtils").typeToEncType(t)) {
        var r = new Error("FormatError: " + n + " encoded with wire type " + e);
        throw (r.stack, r);
      }
    }
    function _(e, t, n) {
      switch (t) {
        case o("WAProtoConst").TYPES.INT32:
          return f(
            n,
            -2147483648,
            2147483648,
            e,
            o("WABinary").parseInt64OrThrow,
          );
        case o("WAProtoConst").TYPES.INT64:
          return n.readVarInt(g);
        case o("WAProtoConst").TYPES.UINT32:
          return f(n, 0, 4294967296, e, o("WABinary").parseUint64OrThrow);
        case o("WAProtoConst").TYPES.UINT64:
          return n.readVarInt(h);
        case o("WAProtoConst").TYPES.SINT32: {
          var r = f(n, 0, 4294967296, e, o("WABinary").parseInt64OrThrow);
          return r & 1 ? ~(r >>> 1) : r >>> 1;
        }
        case o("WAProtoConst").TYPES.SINT64:
          return n.readVarInt(y);
        case o("WAProtoConst").TYPES.BOOL:
          return !!f(n, 0, 2, e, o("WABinary").parseUint64OrThrow);
        case o("WAProtoConst").TYPES.ENUM:
          return n.readVarInt(o("WABinary").parseInt64OrThrow);
        case o("WAProtoConst").TYPES.FIXED64:
          return n.readLong(h, !0);
        case o("WAProtoConst").TYPES.SFIXED64:
          return n.readLong(g, !0);
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
    function f(e, t, n, r, o) {
      var a = e.readVarInt(o);
      if (a < t || a >= n) {
        var i = new Error(
          "FormatError: " + r + " encoded with out-of-range value " + a,
        );
        throw (i.stack, i);
      }
      return a;
    }
    function g(e, t) {
      var n = o("WABinary").longFitsInDouble(!0, e, t);
      if (n) {
        var r = b(t);
        return e * 4294967296 + r;
      } else {
        var a = e < 0,
          i;
        a ? (i = t === 0 ? -e : ~e) : (i = e);
        var l = a ? -t : t;
        return o("WAHex").createHexLongFrom32Bits(i, l, a);
      }
    }
    function h(e, t) {
      var n = o("WABinary").longFitsInDouble(!1, e, t);
      if (n) {
        var r = b(e),
          a = b(t);
        return r * 4294967296 + a;
      } else return o("WAHex").createHexLongFrom32Bits(e, t);
    }
    function y(e, t) {
      var n = e >>> 1,
        r = (e << 31) | (t >>> 1);
      return (t & 1 && ((n = ~n), (r = ~r)), g(n, r));
    }
    function C(t, n, a, i, l, u) {
      var c;
      if ((u === void 0 && (u = 0), r("justknobx")._("2451") && u >= s))
        throw (
          o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "decodeProtobuf: nesting depth exceeded limit of ",
                  "",
                ])),
              s,
            )
            .tags("messaging")
            .sendLogs("protobuf-decode-max-depth"),
          r("err")("FormatError: protobuf nesting depth exceeded limit of " + s)
        );
      var d = o("WAProtoCompile").compileSpec(t),
        m = d.fields,
        g = d.fieldToOneof,
        h = d.meta,
        y = d.names,
        b = d.oneofToFields,
        v = d.reservedFields,
        S = d.reservedTags,
        R = d.types,
        L = t.internalDefaults,
        E = a || babelHelpers.extends({}, L) || {};
      E.$$unknownFieldCount =
        (c = a == null ? void 0 : a.$$unknownFieldCount) != null ? c : 0;
      for (var k = 0; k < y.length; k++)
        R[k] & o("WAProtoConst").FLAGS.REPEATED
          ? (E[y[k]] = [])
          : R[k] ===
              (o("WAProtoConst").TYPES.MAP & o("WAProtoConst").TYPE_MASK) &&
            (E[y[k]] = new Map());
      for (
        var I = 0,
          T = m.length > 0,
          D = m[0],
          x = function () {
            var e = f(
                n,
                0,
                4294967296,
                "field and enc type",
                o("WABinary").parseInt64OrThrow,
              ),
              t = e & 7,
              r = e >>> 3;
            if (T && r !== D) {
              var a = I;
              do (++I === m.length && (I = 0), (D = m[I]));
              while (r !== D && I !== a);
            }
            if (T && r === D) {
              var s = y[I],
                c = R[I];
              p(t, c, s);
              var d = c & o("WAProtoConst").TYPE_MASK,
                L = h[I];
              if (c & o("WAProtoConst").FLAGS.PACKED)
                for (
                  var k = n.readVarInt(o("WABinary").parseUint64OrThrow),
                    x = n.readBinary(k);
                  x.size();
                ) {
                  var $ = _(s, d, x);
                  (d !== o("WAProtoConst").TYPES.ENUM ||
                    L[$] ||
                    (L.cast == null ? void 0 : L.cast($)) !== void 0) &&
                    E[s].push($);
                }
              else if (d === o("WAProtoConst").TYPES.MESSAGE) {
                var P = n.readVarInt(o("WABinary").parseUint64OrThrow),
                  N = n.readBinary(P);
                if (c & o("WAProtoConst").FLAGS.REPEATED)
                  E[s].push(C(L, N, void 0, i, l, u + 1));
                else {
                  var M = E[s];
                  E[s] = C(L, N, M, i, l, u + 1);
                }
              } else if (d === o("WAProtoConst").TYPES.MAP) {
                for (
                  var w = n.readVarInt(o("WABinary").parseUint64OrThrow),
                    A = n.readBinary(w),
                    F,
                    O,
                    B = 0;
                  B < h[I].length;
                  B++
                ) {
                  var W = f(
                      A,
                      0,
                      4294967296,
                      "map field and enc type",
                      o("WABinary").parseInt64OrThrow,
                    ),
                    q = W & 7,
                    U = W >>> 3,
                    V = void 0;
                  switch (q) {
                    case o("WAProtoConst").ENC.VARINT:
                      V = A.readVarInt(o("WABinary").parseInt64OrThrow);
                      break;
                    case o("WAProtoConst").ENC.BIT64:
                      V = A.readBinary(8);
                      break;
                    case o("WAProtoConst").ENC.BINARY: {
                      var H = L[B];
                      if (
                        H === o("WAProtoConst").TYPES.BYTES ||
                        H === o("WAProtoConst").TYPES.STRING
                      )
                        V = _(s, H, A);
                      else {
                        var G = A.readVarInt(o("WABinary").parseUint64OrThrow),
                          z = A.readBinary(G);
                        V = C(H, z, void 0, i, l, u + 1);
                      }
                      break;
                    }
                    case o("WAProtoConst").ENC.BIT32:
                      V = A.readBinary(4);
                      break;
                  }
                  U === 1 ? (F = V) : (O = V);
                }
                E[s].set(F, O);
              } else {
                var j = _(s, d, n);
                (d !== o("WAProtoConst").TYPES.ENUM ||
                  L[j] ||
                  (L.cast == null ? void 0 : L.cast(j)) !== void 0) &&
                  (c & o("WAProtoConst").FLAGS.REPEATED
                    ? E[s].push(j)
                    : (E[s] = j));
              }
              var K = g[s];
              (K &&
                typeof E[s] != "undefined" &&
                K.forEach(function (e) {
                  var t = b[e].filter(function (e) {
                    return e !== s;
                  });
                  if (
                    (t.forEach(function (e) {
                      delete E[e];
                    }),
                    l)
                  ) {
                    var n;
                    ((E[e] =
                      ((n = { type: s, value: E[s] }),
                      (n[o("WABaseProto").TAGGED_UNION_TAG] = !0),
                      n)),
                      delete E[s]);
                  }
                }),
                (S[r] || v[s]) && delete E[s]);
            } else if ((E.$$unknownFieldCount++, i)) {
              E.$$unsafeUnknownFields || (E.$$unsafeUnknownFields = {});
              var Q;
              switch (t) {
                case o("WAProtoConst").ENC.VARINT:
                  Q = n.readVarInt(o("WABinary").parseInt64OrThrow);
                  break;
                case o("WAProtoConst").ENC.BIT64:
                  Q = n.readBinary(8);
                  break;
                case o("WAProtoConst").ENC.BINARY:
                  Q = n.readBinary(
                    n.readVarInt(o("WABinary").parseUint64OrThrow),
                  );
                  break;
                case o("WAProtoConst").ENC.BIT32:
                  Q = n.readBinary(4);
                  break;
              }
              E.$$unsafeUnknownFields[r] = Q;
            } else
              t === o("WAProtoConst").ENC.VARINT
                ? n.readVarInt(o("WABinary").parseInt64OrThrow)
                : t === o("WAProtoConst").ENC.BIT64
                  ? n.advance(8)
                  : t === o("WAProtoConst").ENC.BINARY
                    ? n.advance(n.readVarInt(o("WABinary").parseUint64OrThrow))
                    : t === o("WAProtoConst").ENC.BIT32 && n.advance(4);
          };
        n.size();
      )
        x();
      return E;
    }
    function b(e) {
      return e >= 0 ? e : 4294967296 + e;
    }
    ((l.decodeProtobuf = u),
      (l.decodeProtobufWithTaggedUnions = c),
      (l.decodeProtobufWithUnknowns = d),
      (l.getUnknownFields = m));
  },
  98,
);
