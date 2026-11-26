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
    "WAProtoEntryLimitError",
    "WAProtoUtils",
    "WAProtoValidate",
    "err",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = 100,
      c = 60,
      d = 180,
      m = d,
      p = c * 2,
      _ = d * 2;
    function f(e, t) {
      var n = new (o("WABinary").Binary)(t),
        r = M(e, n, void 0, !1, !1, 0, C());
      return (o("WAProtoValidate").checkRequirements(e, r), r);
    }
    function g(e, t) {
      var n = new (o("WABinary").Binary)(t),
        r = M(e, n, void 0, !1, !0, 0, C());
      return (o("WAProtoValidate").checkRequirements(e, r), r);
    }
    function h(e, t) {
      var n = new (o("WABinary").Binary)(t),
        r = M(e, n, void 0, !0, !1, 0, C());
      return (o("WAProtoValidate").checkRequirements(e, r), r);
    }
    function y(e) {
      return r("WAHasProperty")(e, "$$unsafeUnknownFields")
        ? e.$$unsafeUnknownFields
        : null;
    }
    function C() {
      return r("justknobx")._("7544")
        ? {
            budgetsByMessage: new WeakMap(),
            countsByObject: new WeakMap(),
            packEmojisByPack: new WeakMap(),
          }
        : null;
    }
    function b(e, t) {
      var n = e.get(t);
      return (
        n == null && ((n = { stickerEmojis: 0, stickers: 0 }), e.set(t, n)),
        n
      );
    }
    function v(e, t) {
      var n = e.get(t);
      return (n == null && ((n = { count: 0 }), e.set(t, n)), n);
    }
    function S(e, t, n, r) {
      if (e == null) return null;
      var o = n === "Message$StickerPackMessage";
      return t != null
        ? o
          ? { message: t.message, packEmojis: v(e.packEmojisByPack, r) }
          : t
        : n !== "Message" && !o && n !== "Message$StickerPackMessage$Sticker"
          ? null
          : {
              message: b(e.budgetsByMessage, r),
              packEmojis: o ? v(e.packEmojisByPack, r) : null,
            };
    }
    function R(e) {
      var t = e.packEmojis;
      if (t != null && ++t.count > d)
        throw new (o("WAProtoEntryLimitError").ProtobufEntryLimitError)(
          "emojis",
        );
      if (++e.message.stickerEmojis > _)
        throw new (o("WAProtoEntryLimitError").ProtobufEntryLimitError)(
          "message_emojis",
        );
    }
    function L(e, t, n, r) {
      if (e != null) {
        if (n && t === "stickers") {
          if (++e.message.stickers > p)
            throw new (o("WAProtoEntryLimitError").ProtobufEntryLimitError)(
              "message_stickers",
            );
          return;
        }
        r && t === "emojis" && R(e);
      }
    }
    function E(e, t, n, r, a, i, l, s) {
      e != null &&
        !(a & o("WAProtoConst").FLAGS.PACKED) &&
        (a & o("WAProtoConst").FLAGS.REPEATED ||
          (a & o("WAProtoConst").TYPE_MASK) === o("WAProtoConst").TYPES.MAP) &&
        (k(e, n, r, i), L(t, r, l, s));
    }
    function k(e, t, n, r) {
      var a = e[t],
        i = (typeof a == "number" ? a : 0) + 1;
      if (i > r)
        throw new (o("WAProtoEntryLimitError").ProtobufEntryLimitError)(n);
      e[t] = i;
    }
    function I(t, n, r, a, i, l, s, u) {
      try {
        return M(t, n, r, a, i, l, s, u);
      } catch (t) {
        if (
          s == null ||
          u != null ||
          !(t instanceof o("WAProtoEntryLimitError").ProtobufEntryLimitError)
        )
          throw t;
        o("WALogger")
          .WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "decodeProtobuf: dropped nested message over entry limit: ",
                "",
              ])),
            t.code,
          )
          .tags("messaging")
          .sendLogs("protobuf-decode-entry-limit");
        return;
      }
    }
    function T(e, t, n) {
      if (e !== o("WAProtoUtils").typeToEncType(t)) {
        var r = new Error("FormatError: " + n + " encoded with wire type " + e);
        throw (r.stack, r);
      }
    }
    function D(e, t, n) {
      switch (t) {
        case o("WAProtoConst").TYPES.INT32:
          return x(
            n,
            -2147483648,
            2147483648,
            e,
            o("WABinary").parseInt64OrThrow,
          );
        case o("WAProtoConst").TYPES.INT64:
          return n.readVarInt($);
        case o("WAProtoConst").TYPES.UINT32:
          return x(n, 0, 4294967296, e, o("WABinary").parseUint64OrThrow);
        case o("WAProtoConst").TYPES.UINT64:
          return n.readVarInt(P);
        case o("WAProtoConst").TYPES.SINT32: {
          var r = x(n, 0, 4294967296, e, o("WABinary").parseInt64OrThrow);
          return r & 1 ? ~(r >>> 1) : r >>> 1;
        }
        case o("WAProtoConst").TYPES.SINT64:
          return n.readVarInt(N);
        case o("WAProtoConst").TYPES.BOOL:
          return !!x(n, 0, 2, e, o("WABinary").parseUint64OrThrow);
        case o("WAProtoConst").TYPES.ENUM:
          return n.readVarInt(o("WABinary").parseInt64OrThrow);
        case o("WAProtoConst").TYPES.FIXED64:
          return n.readLong(P, !0);
        case o("WAProtoConst").TYPES.SFIXED64:
          return n.readLong($, !0);
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
    function x(e, t, n, r, o) {
      var a = e.readVarInt(o);
      if (a < t || a >= n) {
        var i = new Error(
          "FormatError: " + r + " encoded with out-of-range value " + a,
        );
        throw (i.stack, i);
      }
      return a;
    }
    function $(e, t) {
      var n = o("WABinary").longFitsInDouble(!0, e, t);
      if (n) {
        var r = w(t);
        return e * 4294967296 + r;
      } else {
        var a = e < 0,
          i;
        a ? (i = t === 0 ? -e : ~e) : (i = e);
        var l = a ? -t : t;
        return o("WAHex").createHexLongFrom32Bits(i, l, a);
      }
    }
    function P(e, t) {
      var n = o("WABinary").longFitsInDouble(!1, e, t);
      if (n) {
        var r = w(e),
          a = w(t);
        return r * 4294967296 + a;
      } else return o("WAHex").createHexLongFrom32Bits(e, t);
    }
    function N(e, t) {
      var n = e >>> 1,
        r = (e << 31) | (t >>> 1);
      return (t & 1 && ((n = ~n), (r = ~r)), $(n, r));
    }
    function M(e, t, n, a, i, l, d, p) {
      var _;
      if (
        (l === void 0 && (l = 0),
        d === void 0 && (d = null),
        p === void 0 && (p = null),
        r("justknobx")._("2451") && l >= u)
      )
        throw (
          o("WALogger")
            .WARN(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "decodeProtobuf: nesting depth exceeded limit of ",
                  "",
                ])),
              u,
            )
            .tags("messaging")
            .sendLogs("protobuf-decode-max-depth"),
          r("err")("FormatError: protobuf nesting depth exceeded limit of " + u)
        );
      var f = e.name === "Message$StickerPackMessage",
        g = e.name === "Message$StickerPackMessage$Sticker",
        h = f ? c : m,
        y = o("WAProtoCompile").compileSpec(e),
        C = y.fields,
        b = y.fieldToOneof,
        v = y.meta,
        R = y.names,
        L = y.oneofToFields,
        $ = y.reservedFields,
        P = y.reservedTags,
        N = y.types,
        w = e.internalDefaults,
        A = n || babelHelpers.extends({}, w) || {};
      A.$$unknownFieldCount =
        (_ = n == null ? void 0 : n.$$unknownFieldCount) != null ? _ : 0;
      var F = S(d, p, e.name, A),
        O = null;
      if (d != null && (f || g)) {
        var B;
        ((O = (B = d.countsByObject.get(A)) != null ? B : []),
          d.countsByObject.set(A, O));
      }
      for (var W = 0; W < R.length; W++)
        N[W] & o("WAProtoConst").FLAGS.REPEATED
          ? (A[R[W]] = [])
          : N[W] ===
              (o("WAProtoConst").TYPES.MAP & o("WAProtoConst").TYPE_MASK) &&
            (A[R[W]] = new Map());
      for (
        var q = 0,
          U = C.length > 0,
          V = C[0],
          H = function () {
            var e = x(
                t,
                0,
                4294967296,
                "field and enc type",
                o("WABinary").parseInt64OrThrow,
              ),
              n = e & 7,
              r = e >>> 3;
            if (U && r !== V) {
              var s = q;
              do (++q === C.length && (q = 0), (V = C[q]));
              while (r !== V && q !== s);
            }
            if (U && r === V) {
              var u = R[q],
                c = N[q];
              (T(n, c, u), E(O, F, q, u, c, h, f, g));
              var m = c & o("WAProtoConst").TYPE_MASK,
                p = v[q];
              if (c & o("WAProtoConst").FLAGS.PACKED)
                for (
                  var _ = t.readVarInt(o("WABinary").parseUint64OrThrow),
                    y = t.readBinary(_);
                  y.size();
                ) {
                  O != null && k(O, q, u, h);
                  var S = D(u, m, y);
                  (m !== o("WAProtoConst").TYPES.ENUM ||
                    p[S] ||
                    (p.cast == null ? void 0 : p.cast(S)) !== void 0) &&
                    A[u].push(S);
                }
              else if (m === o("WAProtoConst").TYPES.MESSAGE) {
                var w = t.readVarInt(o("WABinary").parseUint64OrThrow),
                  B = t.readBinary(w);
                if (c & o("WAProtoConst").FLAGS.REPEATED) {
                  var W = I(p, B, void 0, a, i, l + 1, d, F);
                  if (W === void 0) return 1;
                  A[u].push(W);
                } else A[u] = M(p, B, A[u], a, i, l + 1, d, F);
              } else if (m === o("WAProtoConst").TYPES.MAP) {
                for (
                  var H = t.readVarInt(o("WABinary").parseUint64OrThrow),
                    G = t.readBinary(H),
                    z,
                    j,
                    K = !1,
                    Q = 0;
                  Q < v[q].length;
                  Q++
                ) {
                  var X = x(
                      G,
                      0,
                      4294967296,
                      "map field and enc type",
                      o("WABinary").parseInt64OrThrow,
                    ),
                    Y = X & 7,
                    J = X >>> 3,
                    Z = void 0;
                  switch (Y) {
                    case o("WAProtoConst").ENC.VARINT:
                      Z = G.readVarInt(o("WABinary").parseInt64OrThrow);
                      break;
                    case o("WAProtoConst").ENC.BIT64:
                      Z = G.readBinary(8);
                      break;
                    case o("WAProtoConst").ENC.BINARY: {
                      var ee = p[Q];
                      if (
                        ee === o("WAProtoConst").TYPES.BYTES ||
                        ee === o("WAProtoConst").TYPES.STRING
                      )
                        Z = D(u, ee, G);
                      else {
                        var te = G.readVarInt(o("WABinary").parseUint64OrThrow),
                          ne = G.readBinary(te),
                          re = I(ee, ne, void 0, a, i, l + 1, d, F);
                        if (re === void 0) {
                          K = !0;
                          break;
                        }
                        Z = re;
                      }
                      break;
                    }
                    case o("WAProtoConst").ENC.BIT32:
                      Z = G.readBinary(4);
                      break;
                  }
                  J === 1 ? (z = Z) : (j = Z);
                }
                K || A[u].set(z, j);
              } else {
                var oe = D(u, m, t);
                (m !== o("WAProtoConst").TYPES.ENUM ||
                  p[oe] ||
                  (p.cast == null ? void 0 : p.cast(oe)) !== void 0) &&
                  (c & o("WAProtoConst").FLAGS.REPEATED
                    ? A[u].push(oe)
                    : (A[u] = oe));
              }
              var ae = b[u];
              (ae &&
                typeof A[u] != "undefined" &&
                ae.forEach(function (e) {
                  var t = L[e].filter(function (e) {
                    return e !== u;
                  });
                  if (
                    (t.forEach(function (e) {
                      delete A[e];
                    }),
                    i)
                  ) {
                    var n;
                    ((A[e] =
                      ((n = { type: u, value: A[u] }),
                      (n[o("WABaseProto").TAGGED_UNION_TAG] = !0),
                      n)),
                      delete A[u]);
                  }
                }),
                (P[r] || $[u]) && delete A[u]);
            } else if ((A.$$unknownFieldCount++, a)) {
              A.$$unsafeUnknownFields || (A.$$unsafeUnknownFields = {});
              var ie;
              switch (n) {
                case o("WAProtoConst").ENC.VARINT:
                  ie = t.readVarInt(o("WABinary").parseInt64OrThrow);
                  break;
                case o("WAProtoConst").ENC.BIT64:
                  ie = t.readBinary(8);
                  break;
                case o("WAProtoConst").ENC.BINARY:
                  ie = t.readBinary(
                    t.readVarInt(o("WABinary").parseUint64OrThrow),
                  );
                  break;
                case o("WAProtoConst").ENC.BIT32:
                  ie = t.readBinary(4);
                  break;
              }
              A.$$unsafeUnknownFields[r] = ie;
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
        H();
      return A;
    }
    function w(e) {
      return e >= 0 ? e : 4294967296 + e;
    }
    ((l.ProtobufEntryLimitError = o(
      "WAProtoEntryLimitError",
    ).ProtobufEntryLimitError),
      (l.decodeProtobuf = f),
      (l.decodeProtobufWithTaggedUnions = g),
      (l.decodeProtobufWithUnknowns = h),
      (l.getUnknownFields = y));
  },
  98,
);
