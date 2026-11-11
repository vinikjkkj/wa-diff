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
      m = d;
    function p(e, t) {
      var n = new (o("WABinary").Binary)(t),
        r = T(e, n, void 0, !1, !1, 0, h());
      return (o("WAProtoValidate").checkRequirements(e, r), r);
    }
    function _(e, t) {
      var n = new (o("WABinary").Binary)(t),
        r = T(e, n, void 0, !1, !0, 0, h());
      return (o("WAProtoValidate").checkRequirements(e, r), r);
    }
    function f(e, t) {
      var n = new (o("WABinary").Binary)(t),
        r = T(e, n, void 0, !0, !1, 0, h());
      return (o("WAProtoValidate").checkRequirements(e, r), r);
    }
    function g(e) {
      return r("WAHasProperty")(e, "$$unsafeUnknownFields")
        ? e.$$unsafeUnknownFields
        : null;
    }
    function h() {
      return r("justknobx")._("7544") ? new WeakMap() : null;
    }
    function y(e, t, n, r, a) {
      e != null &&
        !(r & o("WAProtoConst").FLAGS.PACKED) &&
        (r & o("WAProtoConst").FLAGS.REPEATED ||
          (r & o("WAProtoConst").TYPE_MASK) === o("WAProtoConst").TYPES.MAP) &&
        C(e, t, n, a);
    }
    function C(e, t, n, r) {
      var a = e[t],
        i = (typeof a == "number" ? a : 0) + 1;
      if (i > r)
        throw new (o("WAProtoEntryLimitError").ProtobufEntryLimitError)(n);
      e[t] = i;
    }
    function b(e) {
      var t = e.reduce(function (e, t) {
        return e + t.emojis.length;
      }, 0);
      if (t > d)
        throw new (o("WAProtoEntryLimitError").ProtobufEntryLimitError)(
          "emojis",
        );
    }
    function v(t, n, r, a, i, l, s, u) {
      try {
        return T(t, n, r, a, i, l, s, u);
      } catch (t) {
        if (
          s == null ||
          u ||
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
    function S(e, t, n) {
      if (e !== o("WAProtoUtils").typeToEncType(t)) {
        var r = new Error("FormatError: " + n + " encoded with wire type " + e);
        throw (r.stack, r);
      }
    }
    function R(e, t, n) {
      switch (t) {
        case o("WAProtoConst").TYPES.INT32:
          return L(
            n,
            -2147483648,
            2147483648,
            e,
            o("WABinary").parseInt64OrThrow,
          );
        case o("WAProtoConst").TYPES.INT64:
          return n.readVarInt(E);
        case o("WAProtoConst").TYPES.UINT32:
          return L(n, 0, 4294967296, e, o("WABinary").parseUint64OrThrow);
        case o("WAProtoConst").TYPES.UINT64:
          return n.readVarInt(k);
        case o("WAProtoConst").TYPES.SINT32: {
          var r = L(n, 0, 4294967296, e, o("WABinary").parseInt64OrThrow);
          return r & 1 ? ~(r >>> 1) : r >>> 1;
        }
        case o("WAProtoConst").TYPES.SINT64:
          return n.readVarInt(I);
        case o("WAProtoConst").TYPES.BOOL:
          return !!L(n, 0, 2, e, o("WABinary").parseUint64OrThrow);
        case o("WAProtoConst").TYPES.ENUM:
          return n.readVarInt(o("WABinary").parseInt64OrThrow);
        case o("WAProtoConst").TYPES.FIXED64:
          return n.readLong(k, !0);
        case o("WAProtoConst").TYPES.SFIXED64:
          return n.readLong(E, !0);
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
    function L(e, t, n, r, o) {
      var a = e.readVarInt(o);
      if (a < t || a >= n) {
        var i = new Error(
          "FormatError: " + r + " encoded with out-of-range value " + a,
        );
        throw (i.stack, i);
      }
      return a;
    }
    function E(e, t) {
      var n = o("WABinary").longFitsInDouble(!0, e, t);
      if (n) {
        var r = D(t);
        return e * 4294967296 + r;
      } else {
        var a = e < 0,
          i;
        a ? (i = t === 0 ? -e : ~e) : (i = e);
        var l = a ? -t : t;
        return o("WAHex").createHexLongFrom32Bits(i, l, a);
      }
    }
    function k(e, t) {
      var n = o("WABinary").longFitsInDouble(!1, e, t);
      if (n) {
        var r = D(e),
          a = D(t);
        return r * 4294967296 + a;
      } else return o("WAHex").createHexLongFrom32Bits(e, t);
    }
    function I(e, t) {
      var n = e >>> 1,
        r = (e << 31) | (t >>> 1);
      return (t & 1 && ((n = ~n), (r = ~r)), E(n, r));
    }
    function T(e, t, n, a, i, l, d, p) {
      var _;
      if (
        (l === void 0 && (l = 0),
        d === void 0 && (d = null),
        p === void 0 && (p = !1),
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
        h = d != null && (p || e.name === "Message" || f || g),
        E = f ? c : m,
        k = o("WAProtoCompile").compileSpec(e),
        I = k.fields,
        D = k.fieldToOneof,
        x = k.meta,
        $ = k.names,
        P = k.oneofToFields,
        N = k.reservedFields,
        M = k.reservedTags,
        w = k.types,
        A = e.internalDefaults,
        F = n || babelHelpers.extends({}, A) || {};
      F.$$unknownFieldCount =
        (_ = n == null ? void 0 : n.$$unknownFieldCount) != null ? _ : 0;
      var O = null;
      if (d != null && (f || g)) {
        var B;
        ((O = (B = d.get(F)) != null ? B : []), d.set(F, O));
      }
      for (var W = 0; W < $.length; W++)
        w[W] & o("WAProtoConst").FLAGS.REPEATED
          ? (F[$[W]] = [])
          : w[W] ===
              (o("WAProtoConst").TYPES.MAP & o("WAProtoConst").TYPE_MASK) &&
            (F[$[W]] = new Map());
      for (
        var q = 0,
          U = I.length > 0,
          V = I[0],
          H = function () {
            var e = L(
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
              do (++q === I.length && (q = 0), (V = I[q]));
              while (r !== V && q !== s);
            }
            if (U && r === V) {
              var u = $[q],
                c = w[q];
              (S(n, c, u), y(O, q, u, c, E));
              var m = c & o("WAProtoConst").TYPE_MASK,
                p = x[q];
              if (c & o("WAProtoConst").FLAGS.PACKED)
                for (
                  var _ = t.readVarInt(o("WABinary").parseUint64OrThrow),
                    f = t.readBinary(_);
                  f.size();
                ) {
                  O != null && C(O, q, u, E);
                  var g = R(u, m, f);
                  (m !== o("WAProtoConst").TYPES.ENUM ||
                    p[g] ||
                    (p.cast == null ? void 0 : p.cast(g)) !== void 0) &&
                    F[u].push(g);
                }
              else if (m === o("WAProtoConst").TYPES.MESSAGE) {
                var b = t.readVarInt(o("WABinary").parseUint64OrThrow),
                  k = t.readBinary(b);
                if (c & o("WAProtoConst").FLAGS.REPEATED) {
                  var A = v(p, k, void 0, a, i, l + 1, d, h);
                  if (A === void 0) return 1;
                  F[u].push(A);
                } else F[u] = T(p, k, F[u], a, i, l + 1, d, h);
              } else if (m === o("WAProtoConst").TYPES.MAP) {
                for (
                  var B = t.readVarInt(o("WABinary").parseUint64OrThrow),
                    W = t.readBinary(B),
                    H,
                    G,
                    z = !1,
                    j = 0;
                  j < x[q].length;
                  j++
                ) {
                  var K = L(
                      W,
                      0,
                      4294967296,
                      "map field and enc type",
                      o("WABinary").parseInt64OrThrow,
                    ),
                    Q = K & 7,
                    X = K >>> 3,
                    Y = void 0;
                  switch (Q) {
                    case o("WAProtoConst").ENC.VARINT:
                      Y = W.readVarInt(o("WABinary").parseInt64OrThrow);
                      break;
                    case o("WAProtoConst").ENC.BIT64:
                      Y = W.readBinary(8);
                      break;
                    case o("WAProtoConst").ENC.BINARY: {
                      var J = p[j];
                      if (
                        J === o("WAProtoConst").TYPES.BYTES ||
                        J === o("WAProtoConst").TYPES.STRING
                      )
                        Y = R(u, J, W);
                      else {
                        var Z = W.readVarInt(o("WABinary").parseUint64OrThrow),
                          ee = W.readBinary(Z),
                          te = v(J, ee, void 0, a, i, l + 1, d, h);
                        if (te === void 0) {
                          z = !0;
                          break;
                        }
                        Y = te;
                      }
                      break;
                    }
                    case o("WAProtoConst").ENC.BIT32:
                      Y = W.readBinary(4);
                      break;
                  }
                  X === 1 ? (H = Y) : (G = Y);
                }
                z || F[u].set(H, G);
              } else {
                var ne = R(u, m, t);
                (m !== o("WAProtoConst").TYPES.ENUM ||
                  p[ne] ||
                  (p.cast == null ? void 0 : p.cast(ne)) !== void 0) &&
                  (c & o("WAProtoConst").FLAGS.REPEATED
                    ? F[u].push(ne)
                    : (F[u] = ne));
              }
              var re = D[u];
              (re &&
                typeof F[u] != "undefined" &&
                re.forEach(function (e) {
                  var t = P[e].filter(function (e) {
                    return e !== u;
                  });
                  if (
                    (t.forEach(function (e) {
                      delete F[e];
                    }),
                    i)
                  ) {
                    var n;
                    ((F[e] =
                      ((n = { type: u, value: F[u] }),
                      (n[o("WABaseProto").TAGGED_UNION_TAG] = !0),
                      n)),
                      delete F[u]);
                  }
                }),
                (M[r] || N[u]) && delete F[u]);
            } else if ((F.$$unknownFieldCount++, a)) {
              F.$$unsafeUnknownFields || (F.$$unsafeUnknownFields = {});
              var oe;
              switch (n) {
                case o("WAProtoConst").ENC.VARINT:
                  oe = t.readVarInt(o("WABinary").parseInt64OrThrow);
                  break;
                case o("WAProtoConst").ENC.BIT64:
                  oe = t.readBinary(8);
                  break;
                case o("WAProtoConst").ENC.BINARY:
                  oe = t.readBinary(
                    t.readVarInt(o("WABinary").parseUint64OrThrow),
                  );
                  break;
                case o("WAProtoConst").ENC.BIT32:
                  oe = t.readBinary(4);
                  break;
              }
              F.$$unsafeUnknownFields[r] = oe;
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
      return (f && d != null && b(F.stickers), F);
    }
    function D(e) {
      return e >= 0 ? e : 4294967296 + e;
    }
    ((l.ProtobufEntryLimitError = o(
      "WAProtoEntryLimitError",
    ).ProtobufEntryLimitError),
      (l.decodeProtobuf = p),
      (l.decodeProtobufWithTaggedUnions = _),
      (l.decodeProtobufWithUnknowns = f),
      (l.getUnknownFields = g));
  },
  98,
);
