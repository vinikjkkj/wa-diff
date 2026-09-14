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
    function e(t, n, r, a, i) {
      var l = o("WebBloksUtils").nullthrows(
          o("WebBloksUtils").getFirstKey(t),
          "not a valid bloksmodel",
        ),
        s = babelHelpers.extends({}, t[l]);
      if (l === o("WebBloksConstants").BK_INTERNAL_SHADOW) {
        var u = s.child,
          c = s.id,
          d = s.init_state,
          m = s.reduce,
          p = { id: String(c), init_state: d, reduce: m },
          _ = null,
          f = e(o("WebBloksUtils").cast(u), n, r, _, i);
        return (
          f.shadowParents
            ? f.shadowParents.unshift(p)
            : (f.shadowParents = [p]),
          f
        );
      }
      var g = o("WebBloksModel").createWebBloksModelFromLogicalValues(l, s, i),
        h = g.get(o("WebBloksConstants").ON_BIND_ATTRIBUTE_KEY) != null,
        y = n[l];
      if (y != null) {
        var C = y.plural_subnodes,
          b = y.subnodes;
        if (b)
          for (var v of b) {
            var S = g.getUntyped(v);
            if (S != null) {
              var R = o(
                  "WebBloksMinificationUtils",
                ).getLogicalWebBloksAttributeKey(String(l), v, i),
                L = null,
                E = e(o("WebBloksUtils").cast(S), n, r, L, i);
              (g.set(v, E),
                (h =
                  h ||
                  E.getUntyped(o("WebBloksConstants").DESCENDANT_HAS_BIND) ===
                    !0));
            }
          }
        if (C) {
          var k = function () {
            var t = g.getUntyped(I);
            if (t != null) {
              var a = o(
                  "WebBloksMinificationUtils",
                ).getLogicalWebBloksAttributeKey(String(l), I, i),
                s = o("WebBloksUtils")
                  .cast(t)
                  .map(function (t, a) {
                    var l = null,
                      s = e(t, n, r, l, i);
                    return (
                      (h =
                        h ||
                        s.getUntyped(
                          o("WebBloksConstants").DESCENDANT_HAS_BIND,
                        ) === !0),
                      s
                    );
                  });
              g.set(I, s);
            }
          };
          for (var I of C) k();
        }
      }
      return (
        g.set(o("WebBloksConstants").DESCENDANT_HAS_BIND, h),
        g.getExpression(o("WebBloksConstants").ON_BIND_ATTRIBUTE_KEY),
        g
      );
    }
    function s(t, n, r, a, i) {
      var l = t.component_queries,
        s = l === void 0 ? [] : l,
        u = t.embedded_payloads,
        c = u === void 0 ? [] : u,
        d = t.data,
        m = d === void 0 ? [] : d,
        p = t.props,
        _ = p === void 0 ? [] : p,
        f = t.ft,
        g = f === void 0 ? {} : f,
        h = t.values,
        y = h === void 0 ? [] : h,
        C = t.templates,
        b = C === void 0 ? {} : C,
        v = t.ft_declare,
        S = t.ft_include,
        R = t.depth;
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
        ).generateTreeScopedComponentQueryDefs(n, s, r),
        g,
        v,
        S,
        new Map(
          Object.entries(b).map(function (t) {
            var l = t[0],
              s = t[1];
            return [l, e(o("WebBloksUtils").cast(s), r, a, n.sourceMapNode, i)];
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
    ((l.parseBloksModelFromJSON = e), (l.parseBloksTreeResources = s));
  },
  98,
);
