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
      if (!n) {
        var r = new Error(
          "Message Class " + String(t) + " does not have internalSpec",
        );
        throw (r.stack, r);
      }
      var a = t.internalDefaults || {},
        i = Object.keys(n).filter(function (e) {
          return e !== o("WAProtoConst").KEYS.ONEOF;
        }),
        l = new Array(i.length),
        s = [],
        c = [],
        d = new Array(i.length),
        m = n[o("WAProtoConst").KEYS.ONEOF] || {};
      i.sort(function (e, t) {
        var r = u(n, e),
          o = u(n, t);
        return r[0] - o[0];
      });
      for (var p = 0; p < i.length; p++) {
        var _ = i[p],
          f = u(n, _);
        d[p] = a[_];
        var g = f[1],
          h = f[0];
        if (
          (s.push(h),
          c.push(g),
          (g & o("WAProtoConst").TYPE_MASK) === o("WAProtoConst").TYPES.MESSAGE)
        )
          l[p] = f[2];
        else if (
          (g & o("WAProtoConst").TYPE_MASK) ===
          o("WAProtoConst").TYPES.ENUM
        ) {
          var y = f[2];
          if (typeof y.cast == "function") l[p] = y;
          else {
            var C = !0,
              b = 0;
            for (var v in y) C && v !== b++ && (C = !1);
            var S = void 0;
            if (C) {
              S = [];
              for (var R = 0; R < b; R++) S.push(!0);
            } else {
              S = {};
              for (var L in y) S[y[L]] = !0;
            }
            l[p] = S;
          }
        } else if (
          (g & o("WAProtoConst").TYPE_MASK) ===
          o("WAProtoConst").TYPES.MAP
        ) {
          if (f.length !== 3) {
            var E = new Error(
              "Map field " +
                _ +
                " should have exactly three elements in its internalSpec",
            );
            throw (E.stack, E);
          }
          l[p] = f[2];
        } else l[p] = null;
      }
      var k = {},
        I = function (t) {
          m[t].forEach(function (e) {
            (k[e] || (k[e] = []), k[e].push(t));
          });
        };
      for (var T in m) I(T);
      var D =
          n[o("WAProtoConst").KEYS.RESERVED] &&
          n[o("WAProtoConst").KEYS.RESERVED][
            o("WAProtoConst").KEYS.RESERVED_TAGS
          ],
        x =
          n[o("WAProtoConst").KEYS.RESERVED] &&
          n[o("WAProtoConst").KEYS.RESERVED][
            o("WAProtoConst").KEYS.RESERVED_FIELDS
          ],
        $ = new e(i, s, c, d, l, m, k, D, x);
      return ((t.internalCompiledSpec = $), $);
    }
    function u(e, t) {
      var n = e[t];
      if (n == null) {
        var r = new Error("fieldData of " + t + " is missing");
        throw (r.stack, r);
      }
      return n;
    }
    ((l.Spec = e), (l.compileSpec = s));
  },
  98,
);
