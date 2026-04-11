__d(
  "WAProtoValidate",
  ["WAHasProperty", "WALogger", "WAProtoCompile", "WAProtoConst"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d,
      m = Number.MAX_SAFE_INTEGER;
    function p(e, t) {
      var n = f(e, t);
      if (n)
        throw (
          n.reverse(),
          new TypeError("Message missing required value " + n.join("."))
        );
    }
    function _(e, t) {
      p(e, t);
      var n = v(t, e);
      if (n)
        throw (
          n.path.reverse(),
          new TypeError("Invalid value at " + n.path.join(".") + ": " + n.error)
        );
    }
    function f(e, t) {
      for (
        var n = o("WAProtoCompile").compileSpec(e),
          a = n.meta,
          i = n.names,
          l = n.types,
          s = void 0,
          u = 0;
        u < l.length && !s;
        u++
      ) {
        var c = l[u],
          d = i[u],
          m = r("WAHasProperty")(t, d) ? t[d] : void 0;
        if (c & o("WAProtoConst").FLAGS.REQUIRED && m == null) s = [d];
        else if (
          (c & o("WAProtoConst").TYPE_MASK) ===
            o("WAProtoConst").TYPES.MESSAGE &&
          c & o("WAProtoConst").FLAGS.REPEATED &&
          m != null
        ) {
          var p = a[u],
            _ = void 0;
          for (_ = 0; _ < m.length && !s; _++) s = f(p, m[_]);
          s && s.push(d + "[" + _ + "]");
        } else
          (c & o("WAProtoConst").TYPE_MASK) ===
            o("WAProtoConst").TYPES.MESSAGE &&
            m != null &&
            ((s = f(a[u], m)), s && s.push(d));
      }
      return s;
    }
    function g(t, n, r) {
      return typeof t == "string"
        ? /^-?0x[0-9a-f]{16}$/i.test(t)
          ? !1
          : (o("WALogger")
              .LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    '"',
                    '" is not a valid long',
                  ])),
                C(t),
              )
              .color("red"),
            {
              path: [],
              error:
                "value must be a hex string of the form '0x123...' or '-0x123...' where the tail is always 16 characters long",
            })
        : h(t, n, r);
    }
    function h(e, t, n) {
      return typeof e != "number" || e !== e || Math.floor(e) !== e
        ? (o("WALogger")
            .LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  '"',
                  '" is not a valid int',
                ])),
              C(e),
            )
            .color("red"),
          { path: [], error: "value must be an int" })
        : e < t || e >= n
          ? (o("WALogger")
              .LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    '"',
                    '" is out of range',
                  ])),
                C(e),
              )
              .color("red"),
            { path: [], error: "value is out of range" })
          : !1;
    }
    function y(e, t, n) {
      if (!e)
        return (
          o("WALogger")
            .LOG(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  '"',
                  '" is not ',
                  "",
                ])),
              C(n),
              t,
            )
            .color("red"),
          { path: [], error: "value is invalid" }
        );
    }
    function C(e) {
      return typeof e == "string"
        ? '"' + e + '"'
        : Array.isArray(e)
          ? "[" + e.join(", ") + "]"
          : "" + e;
    }
    var b = [
      void 0,
      function (e) {
        return h(e, -2147483648, 2147483648);
      },
      function (e) {
        return g(e, -m, m + 1);
      },
      function (e) {
        return h(e, 0, 4294967296);
      },
      function (e) {
        return g(e, 0, m + 1);
      },
      function (e) {
        return h(e, -2147483648, 2147483648);
      },
      function (e) {
        return g(e, -m, m + 1);
      },
      function (e) {
        return y(typeof e == "boolean", "boolean", e);
      },
      function (e, t) {
        return y(
          typeof e == "number" && (t[e] || t.cast(e) !== void 0),
          "in enum",
          e,
        );
      },
      function (e) {
        return g(e, 0, m + 1);
      },
      function (e) {
        return g(e, -m, m + 1);
      },
      function (e) {
        return y(typeof e == "number", "number", e);
      },
      function (e) {
        return y(typeof e == "string", "string", e);
      },
      function (e) {
        return y(
          e instanceof ArrayBuffer || e instanceof Uint8Array,
          "ArrayBuffer or Uint8Array",
          e,
        );
      },
      v,
      function (e) {
        return h(e, 0, 4294967296);
      },
      function (e) {
        return h(e, -2147483648, 2147483648);
      },
      function (e) {
        return y(typeof e == "number", "number", e);
      },
    ];
    function v(e, t) {
      for (
        var n = o("WAProtoCompile").compileSpec(t),
          r = n.fields,
          a = n.fieldToOneof,
          i = n.meta,
          l = n.names,
          s = n.oneofToFields,
          u = n.reservedFields,
          c = n.reservedTags,
          m = n.types,
          p = void 0,
          _ = function () {
            var t = l[g],
              n = m[g],
              _ = e[t],
              f = n & o("WAProtoConst").TYPE_MASK,
              h = b[f],
              y =
                (n & o("WAProtoConst").TYPE_MASK) ===
                o("WAProtoConst").TYPES.MAP;
            if (h === void 0 && !y)
              throw new Error("Can not find the validator for type " + f);
            if (
              n &
                (o("WAProtoConst").FLAGS.PACKED |
                  o("WAProtoConst").FLAGS.REPEATED) &&
              _ != null
            )
              if (!Array.isArray(_))
                (o("WALogger")
                  .LOG(
                    d ||
                      (d = babelHelpers.taggedTemplateLiteralLoose([
                        '"',
                        '" is not an array',
                      ])),
                    C(_),
                  )
                  .color("red"),
                  (p = { path: [t], error: "repeated field must be array" }));
              else
                for (var v = i[g], S = 0; S < _.length && !p; S++)
                  ((p = h(_[S], v)), p && p.path.push(t + "[" + S + "]"));
            else if (y && _ != null) {
              var R = i[g],
                L = R[0],
                E = R[1],
                k = typeof E == "object" ? o("WAProtoConst").TYPES.MESSAGE : E,
                I = b[L],
                T = b[k];
              if (I === void 0 || T === void 0)
                throw new Error(
                  "Can not find the validator for Map with key type " +
                    L +
                    ", value type " +
                    k,
                );
              for (var D of _) {
                var x = D[0],
                  $ = D[1];
                if (((p = I(x, L)), p))
                  return (p.path.push(t + "'s key [" + x + "]"), { v: p });
                if (((p = T($, E)), p))
                  return (p.path.push(t + "[" + x + "]'s value"), { v: p });
              }
            } else if (_ != null) {
              ((p = h(_, i[g])), p && p.path.push(t));
              var P = a[t];
              (P &&
                P.forEach(function (n) {
                  var r = s[n].filter(function (e) {
                    return e !== t;
                  });
                  r.forEach(function (r) {
                    typeof e[r] != "undefined" &&
                      (p = {
                        path: [n],
                        error:
                          "oneof '" +
                          n +
                          "' has fields '" +
                          t +
                          "' and '" +
                          r +
                          "' set",
                      });
                  });
                }),
                c[r[g]] &&
                  (p = { path: [t], error: "tag " + r[g] + " is reserved" }),
                u[t] &&
                  (p = { path: [t], error: "field " + t + " is reserved" }));
            }
          },
          f,
          g = 0;
        g < l.length && !p;
        g++
      )
        if (((f = _()), f)) return f.v;
      return p;
    }
    ((l.checkRequirements = p), (l.checkValid = _));
  },
  98,
);
