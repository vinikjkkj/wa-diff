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
        u = babelHelpers.extends({}, e[i]);
      if (l === o("WebBloksConstants").BK_INTERNAL_SHADOW) {
        var c = n
            ? u[o("WebBloksConstants").BK_INTERNAL_SHADOW_CHILD]
            : u.child,
          d = n ? u[o("WebBloksConstants").ID_ATTRIBUTE_KEY] : u.id,
          m = n
            ? u[o("WebBloksConstants").BK_INTERNAL_SHADOW_INIT_STATE]
            : u.init_state,
          p = n
            ? u[o("WebBloksConstants").BK_INTERNAL_SHADOW_REDUCE]
            : u.reduce,
          _ = { id: String(d), init_state: m, reduce: p },
          f = null,
          g = s(o("WebBloksUtils").cast(c), t, n, r, f);
        return (
          g.shadowParents
            ? g.shadowParents.unshift(_)
            : (g.shadowParents = [_]),
          g
        );
      }
      var h = n
          ? o("WebBloksModel").createWebBloksModelFromMinifiedValues(
              i,
              u,
              r.toLogicalStyle,
            )
          : o("WebBloksModel").createWebBloksModelFromLogicalValues(
              l,
              u,
              o("WebBloksUtils").nullthrows(
                r.toMinifiedStyle,
                "Missing style minification map for unminified WebBloks payload.",
              ),
            ),
        y = h.get(o("WebBloksConstants").ON_BIND_ATTRIBUTE_KEY) != null,
        C = t[l];
      if (C != null) {
        var b = C.plural_subnodes,
          v = C.subnodes;
        if (v)
          for (var S of v) {
            var R = h.getUntyped(S);
            if (R != null) {
              var L = null,
                E = s(o("WebBloksUtils").cast(R), t, n, r, L);
              (h.set(S, E),
                (y =
                  y ||
                  E.getUntyped(o("WebBloksConstants").DESCENDANT_HAS_BIND) ===
                    !0));
            }
          }
        if (b) {
          var k = function (a) {
            var e = h.getUntyped(a);
            if (e != null) {
              var i = o("WebBloksUtils")
                .cast(e)
                .map(function (e, a) {
                  var i = null,
                    l = s(e, t, n, r, i);
                  return (
                    (y =
                      y ||
                      l.getUntyped(
                        o("WebBloksConstants").DESCENDANT_HAS_BIND,
                      ) === !0),
                    l
                  );
                });
              h.set(a, i);
            }
          };
          for (var I of b) k(I);
        }
      }
      return (
        h.set(o("WebBloksConstants").DESCENDANT_HAS_BIND, y),
        h.getExpression(o("WebBloksConstants").ON_BIND_ATTRIBUTE_KEY),
        h
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
