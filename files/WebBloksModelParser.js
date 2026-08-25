__d(
  "WebBloksModelParser",
  [
    "WebBloksConstants",
    "WebBloksModel",
    "WebBloksScopedComponentQueryDefinition",
    "WebBloksScriptParser",
    "WebBloksSourceMapNode",
    "WebBloksSourceMapPayloadMetadata",
    "WebBloksSourceMapRootNode",
    "WebBloksTreeResources",
    "WebBloksUtils",
    "webBloksGlobalAttributeKeys",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["child"];
    function s(t, n, a, i, l, u) {
      u === void 0 && (u = !1);
      var c = o("WebBloksUtils").nullthrows(
          o("WebBloksUtils").getFirstKey(t),
          "not a valid bloksmodel",
        ),
        d = babelHelpers.extends({}, t[c]),
        m = o("WebBloksModel").createWebBloksModelFromWire(c, d, l, u),
        p = m.styleId,
        _ =
          m.getExpression(
            u
              ? r("webBloksGlobalAttributeKeys").toCanonicalAttrs.on_bind
              : "on_bind",
          ) != null;
      if (
        p === o("WebBloksConstants").BK_INTERNAL_SHADOW ||
        p === o("WebBloksConstants").BK_INTERNAL_SHADOW_MINIFIED
      ) {
        var f, g;
        if (u)
          ((f = m.get(o("WebBloksConstants").BK_INTERNAL_SHADOW_CHILD)),
            (g = {
              id: String(
                m.get(r("webBloksGlobalAttributeKeys").toCanonicalAttrs.id),
              ),
              init_state: m.get(
                o("WebBloksConstants").BK_INTERNAL_SHADOW_INIT_STATE,
              ),
              reduce: m.get(o("WebBloksConstants").BK_INTERNAL_SHADOW_REDUCE),
            }));
        else {
          var h = d.child,
            y = babelHelpers.objectWithoutPropertiesLoose(d, e);
          ((f = h), (g = y), (g.id = String(g.id)));
        }
        var C = null,
          b = s(o("WebBloksUtils").cast(f), n, a, C, l, u);
        return (
          b.shadowParents
            ? b.shadowParents.unshift(g)
            : (b.shadowParents = [g]),
          (_ = _ || b.get(o("WebBloksConstants").DESCENDANT_HAS_BIND)),
          b
        );
      }
      var v = n[p];
      if (v != null) {
        var S = v.plural_subnodes,
          R = v.subnodes;
        if (R)
          for (var L of R) {
            var E = m.getWireAttributeKey(L);
            if (d[E] != null) {
              var k = null,
                I = s(d[E], n, a, k, l, u);
              ((d[E] = I),
                (_ = _ || I.get(o("WebBloksConstants").DESCENDANT_HAS_BIND)));
            }
          }
        if (S) {
          var T = function () {
            var e = m.getWireAttributeKey(D);
            d[e] != null &&
              (d[e] = d[e].map(function (e, t) {
                var r = null,
                  i = s(e, n, a, r, l, u);
                return (
                  (_ = _ || i.get(o("WebBloksConstants").DESCENDANT_HAS_BIND)),
                  i
                );
              }));
          };
          for (var D of S) T();
        }
      }
      return ((d[o("WebBloksConstants").DESCENDANT_HAS_BIND] = _), m);
    }
    function u(e, t, n, r, a, i) {
      var l = e.component_queries,
        u = l === void 0 ? [] : l,
        c = e.embedded_payloads,
        d = c === void 0 ? [] : c,
        m = e.data,
        p = m === void 0 ? [] : m,
        _ = e.props,
        f = _ === void 0 ? [] : _,
        g = e.ft,
        h = g === void 0 ? {} : g,
        y = e.values,
        C = y === void 0 ? [] : y,
        b = e.templates,
        v = b === void 0 ? {} : b,
        S = e.ft_declare,
        R = e.ft_include,
        L = e.depth;
      return (
        i === void 0 && (i = !1),
        new (o("WebBloksTreeResources").WebBloksTreeResources)(
          p,
          new Map(
            d.map(function (e) {
              return [e.id, e];
            }),
          ),
          f,
          o(
            "WebBloksScopedComponentQueryDefinition",
          ).generateTreeScopedComponentQueryDefs(t, u, n),
          h,
          S,
          R,
          new Map(
            Object.entries(v).map(function (e) {
              var l = e[0],
                u = e[1];
              return [
                l,
                s(o("WebBloksUtils").cast(u), n, r, t.sourceMapNode, a, i),
              ];
            }),
          ),
          C.map(function (e) {
            return babelHelpers.extends({}, e, {
              expression: o("WebBloksScriptParser").parse(e.expression),
            });
          }),
          L,
        )
      );
    }
    ((l.parseBloksModelFromJSON = s), (l.parseBloksTreeResources = u));
  },
  98,
);
