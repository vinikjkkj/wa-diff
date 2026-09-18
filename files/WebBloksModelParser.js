__d(
  "WebBloksModelParser",
  [
    "WebBloksConstants",
    "WebBloksMinificationUtils",
    "WebBloksModel",
    "WebBloksScopedComponentQueryDefinition",
    "WebBloksScriptParser",
    "WebBloksSourceMapNode",
    "WebBloksSourceMapPayloadMetadata",
    "WebBloksSourceMapRootNode",
    "WebBloksTreeResources",
    "WebBloksUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n) {
      var r = n.toMinifiedStyle;
      return r == null
        ? t
        : o("WebBloksMinificationUtils").getLogicalWebBloksAttributeKey(
            e,
            t,
            r,
          );
    }
    function s(e, t, n, r, a) {
      var i = o("WebBloksUtils").nullthrows(
          o("WebBloksUtils").getFirstKey(e),
          "not a valid bloksmodel",
        ),
        l = n
          ? o("WebBloksModel").getLogicalWebBloksStyleId(i, r.toLogicalStyle)
          : i,
        u = e,
        c = babelHelpers.extends({}, u[i]);
      if (l === o("WebBloksConstants").BK_INTERNAL_SHADOW) {
        var d = n
            ? c[o("WebBloksConstants").BK_INTERNAL_SHADOW_CHILD]
            : c.child,
          m = n ? c[o("WebBloksConstants").ID_ATTRIBUTE_KEY] : c.id,
          p = n
            ? c[o("WebBloksConstants").BK_INTERNAL_SHADOW_INIT_STATE]
            : c.init_state,
          _ = n
            ? c[o("WebBloksConstants").BK_INTERNAL_SHADOW_REDUCE]
            : c.reduce,
          f = { id: String(m), init_state: p, reduce: _ },
          g = null,
          h = s(o("WebBloksUtils").cast(d), t, n, r, g);
        return (
          h.shadowParents
            ? h.shadowParents.unshift(f)
            : (h.shadowParents = [f]),
          h
        );
      }
      var y = n
          ? o("WebBloksModel").createWebBloksModelFromMinifiedValues(
              i,
              c,
              r.toLogicalStyle,
            )
          : o("WebBloksModel").createWebBloksModelFromLogicalValues(
              l,
              c,
              o("WebBloksUtils").nullthrows(
                r.toMinifiedStyle,
                "Missing style minification map for unminified WebBloks payload.",
              ),
            ),
        C = y.get(o("WebBloksConstants").ON_BIND_ATTRIBUTE_KEY) != null,
        b = t[l];
      if (b != null) {
        var v = b.plural_subnodes,
          S = b.subnodes;
        if (S)
          for (var R of S) {
            var L = y.getUntyped(R);
            if (L != null) {
              var E = null,
                k = s(o("WebBloksUtils").cast(L), t, n, r, E);
              (y.set(R, k),
                (C =
                  C ||
                  k.getUntyped(o("WebBloksConstants").DESCENDANT_HAS_BIND) ===
                    !0));
            }
          }
        if (v) {
          var I = function (a) {
            var e = y.getUntyped(a);
            if (e != null) {
              var i = o("WebBloksUtils")
                .cast(e)
                .map(function (e, a) {
                  var i = null,
                    l = s(e, t, n, r, i);
                  return (
                    (C =
                      C ||
                      l.getUntyped(
                        o("WebBloksConstants").DESCENDANT_HAS_BIND,
                      ) === !0),
                    l
                  );
                });
              y.set(a, i);
            }
          };
          for (var T of v) I(T);
        }
      }
      return (
        y.set(o("WebBloksConstants").DESCENDANT_HAS_BIND, C),
        y.getExpression(o("WebBloksConstants").ON_BIND_ATTRIBUTE_KEY),
        y
      );
    }
    function u(e, t, n, r, a) {
      var i = e.component_queries,
        l = i === void 0 ? [] : i,
        u = e.embedded_payloads,
        c = u === void 0 ? [] : u,
        d = e.data,
        m = d === void 0 ? [] : d,
        p = e.props,
        _ = p === void 0 ? [] : p,
        f = e.ft,
        g = f === void 0 ? {} : f,
        h = e.values,
        y = h === void 0 ? [] : h,
        C = e.templates,
        b = C === void 0 ? {} : C,
        v = e.ft_declare,
        S = e.ft_include,
        R = e.depth;
      return new (o("WebBloksTreeResources").WebBloksTreeResources)(
        m,
        new Map(
          c.map(function (e) {
            return [e.id, e];
          }),
        ),
        _,
        o(
          "WebBloksScopedComponentQueryDefinition",
        ).generateTreeScopedComponentQueryDefs(t, l, n),
        g,
        v,
        S,
        new Map(
          Object.entries(b).map(function (e) {
            var i = e[0],
              l = e[1];
            return [i, s(o("WebBloksUtils").cast(l), n, r, a, t.sourceMapNode)];
          }),
        ),
        y.map(function (e) {
          return babelHelpers.extends({}, e, {
            expression: o("WebBloksScriptParser").parse(e.expression),
          });
        }),
        R,
      );
    }
    ((l.parseBloksModelFromJSON = s), (l.parseBloksTreeResources = u));
  },
  98,
);
