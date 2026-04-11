__d(
  "WAProtoCompile",
  ["WAProtoConst"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = function (t, n, r, o, a, i, l, s, u) {
      ((this.names = t),
        (this.fields = n),
        (this.types = r),
        (this.defaults = o),
        (this.meta = a),
        (this.oneofToFields = i),
        (this.fieldToOneof = l),
        (this.reservedTags = s
          ? s.reduce(function (e, t) {
              return ((e[t] = !0), e);
            }, {})
          : {}),
        (this.reservedFields = u
          ? u.reduce(function (e, t) {
              return ((e[t] = !0), e);
            }, {})
          : {}));
    };
    function s(t) {
      if (t.internalCompiledSpec) return t.internalCompiledSpec;
      var n = t.internalSpec;
      if (!n)
        throw new Error(
          "Message Class " + String(t) + " does not have internalSpec",
        );
      var r = t.internalDefaults || {},
        a = Object.keys(n).filter(function (e) {
          return e !== o("WAProtoConst").KEYS.ONEOF;
        }),
        i = new Array(a.length),
        l = [],
        s = [],
        c = new Array(a.length),
        d = n[o("WAProtoConst").KEYS.ONEOF] || {};
      a.sort(function (e, t) {
        var r = u(n, e),
          o = u(n, t);
        return r[0] - o[0];
      });
      for (var m = 0; m < a.length; m++) {
        var p = a[m],
          _ = u(n, p);
        c[m] = r[p];
        var f = _[1],
          g = _[0];
        if (
          (l.push(g),
          s.push(f),
          (f & o("WAProtoConst").TYPE_MASK) === o("WAProtoConst").TYPES.MESSAGE)
        )
          i[m] = _[2];
        else if (
          (f & o("WAProtoConst").TYPE_MASK) ===
          o("WAProtoConst").TYPES.ENUM
        ) {
          var h = _[2];
          if (typeof h.cast == "function") i[m] = h;
          else {
            var y = !0,
              C = 0;
            for (var b in h) y && b !== C++ && (y = !1);
            var v = void 0;
            if (y) {
              v = [];
              for (var S = 0; S < C; S++) v.push(!0);
            } else {
              v = {};
              for (var R in h) v[h[R]] = !0;
            }
            i[m] = v;
          }
        } else if (
          (f & o("WAProtoConst").TYPE_MASK) ===
          o("WAProtoConst").TYPES.MAP
        ) {
          if (_.length !== 3)
            throw new Error(
              "Map field " +
                p +
                " should have exactly three elements in its internalSpec",
            );
          i[m] = _[2];
        } else i[m] = null;
      }
      var L = {},
        E = function (t) {
          d[t].forEach(function (e) {
            (L[e] || (L[e] = []), L[e].push(t));
          });
        };
      for (var k in d) E(k);
      var I =
          n[o("WAProtoConst").KEYS.RESERVED] &&
          n[o("WAProtoConst").KEYS.RESERVED][
            o("WAProtoConst").KEYS.RESERVED_TAGS
          ],
        T =
          n[o("WAProtoConst").KEYS.RESERVED] &&
          n[o("WAProtoConst").KEYS.RESERVED][
            o("WAProtoConst").KEYS.RESERVED_FIELDS
          ],
        D = new e(a, l, s, c, i, d, L, I, T);
      return ((t.internalCompiledSpec = D), D);
    }
    function u(e, t) {
      var n = e[t];
      if (n == null) throw new Error("fieldData of " + t + " is missing");
      return n;
    }
    ((l.Spec = e), (l.compileSpec = s));
  },
  98,
);
