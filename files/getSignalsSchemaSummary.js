__d(
  "getSignalsSchemaSummary",
  ["SignalsValidationUtils", "isTruthy"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "pii_keys",
      s = "content_data";
    function u(t, n) {
      n === void 0 && (n = "");
      var a = t.additionalInfoURL,
        i = t.exampleFiles,
        l = t.id,
        c = [],
        d = [],
        m = [],
        p = {},
        _ = {},
        f = {},
        g = {},
        h = {},
        y = {},
        C = {},
        b = [],
        v = [],
        S = {},
        R = r("isTruthy")(n) ? n + "." : "",
        L = t.type;
      if (
        (L != null && t.id != null && ((S[L] = S[L] || []), S[L].push(t.id)),
        t.props != null && Array.isArray(t.props))
      )
        for (
          var E = function () {
              var n = t.props[k],
                r = n.key;
              if (typeof n == "object" && r != null) {
                var a = n.type,
                  i = R + r;
                if (
                  (a != null &&
                    typeof a == "object" &&
                    a.canHaveExtraProps === !0 &&
                    m.push(i),
                  typeof a == "object")
                ) {
                  var L = u(a, r);
                  (c.push.apply(c, L.allSimplePropKeysInSchema),
                    d.push.apply(d, L.noUISimplePropKeysInSchema),
                    m.push.apply(m, L.extraPropsCollectors),
                    (p = babelHelpers.extends(
                      {},
                      p,
                      L.schemasForSimplePropsInSchema,
                    )),
                    (_ = babelHelpers.extends({}, _, L.typesForSimplePropKeys)),
                    (f = babelHelpers.extends(
                      {},
                      f,
                      L.typesForSimplePropPaths,
                    )),
                    (g = babelHelpers.extends({}, g, L.keysForSimplePropPaths)),
                    (h = babelHelpers.extends({}, h, L.pathForSimplePropKeys)),
                    (C = babelHelpers.extends(
                      {},
                      C,
                      L.keysForSubschemasWithID,
                    )));
                  for (var E in L.keysForSimplePropsTypesInSchema)
                    if (
                      o("SignalsValidationUtils").hasProp(
                        L.keysForSimplePropsTypesInSchema,
                        E,
                      )
                    ) {
                      var I;
                      ((y[E] = y[E] || []),
                        (I = y[E]).push.apply(
                          I,
                          L.keysForSimplePropsTypesInSchema[E],
                        ));
                    }
                  (b.push.apply(b, L.piiKeys), v.push.apply(v, L.contentKeys));
                  var T = Object.keys(L.subschemasByType);
                  T.forEach(function (e) {
                    var t;
                    ((S[e] = S[e] || []),
                      (t = S[e]).push.apply(t, L.subschemasByType[e]));
                  });
                } else
                  (c.push(r),
                    n.noUI === !0 && d.push(r),
                    (p[r] = n),
                    (_[r] = a),
                    (f[i] = a),
                    (g[i] = r),
                    (h[r] = i),
                    a != null && ((y[a] = y[a] || []), y[a].push(r)),
                    l != null && (C[l] = [].concat(C[l] || [], [r])),
                    t.type === e ? b.push(r) : t.type === s && v.push(r));
              }
            },
            k = 0;
          k < t.props.length;
          k++
        )
          E();
      return {
        additionalInfoURL: a,
        allSimplePropKeysInSchema: c,
        contentKeys: v,
        exampleFiles: i,
        extraPropsCollectors: m,
        id: l,
        keysForSimplePropPaths: g,
        keysForSimplePropsTypesInSchema: y,
        keysForSubschemasWithID: C,
        noUISimplePropKeysInSchema: d,
        pathForSimplePropKeys: h,
        piiKeys: b,
        schemasForSimplePropsInSchema: p,
        subschemasByType: S,
        typesForSimplePropKeys: _,
        typesForSimplePropPaths: f,
        validIf: t.validIf,
      };
    }
    function c(e) {
      return u(e);
    }
    l.default = c;
  },
  98,
);
