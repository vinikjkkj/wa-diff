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
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["child"];
    function s(t, n, r) {
      var a = o("WebBloksUtils").nullthrows(
          o("WebBloksUtils").getFirstKey(t),
          "not a valid bloksmodel",
        ),
        i = babelHelpers.extends({}, t[a]),
        l = new (o("WebBloksModel").WebBloksModel)(a, i),
        u = l.getExpression(o("WebBloksConstants").ON_BIND) != null;
      if (a === o("WebBloksConstants").BK_INTERNAL_SHADOW) {
        var c = i.child,
          d = babelHelpers.objectWithoutPropertiesLoose(i, e);
        d.id = String(d.id);
        var m = null,
          p = s(o("WebBloksUtils").cast(c), n, m);
        return (
          p.shadowParents
            ? p.shadowParents.unshift(d)
            : (p.shadowParents = [d]),
          (u = u || p.get(o("WebBloksConstants").DESCENDANT_HAS_BIND)),
          p
        );
      }
      var _ = n[a];
      if (_ != null) {
        var f = _.plural_subnodes,
          g = _.subnodes;
        if (g) {
          for (var h of g)
            if (i[h] != null) {
              var y = null,
                C = s(i[h], n, y);
              ((i[h] = C),
                (u = u || C.get(o("WebBloksConstants").DESCENDANT_HAS_BIND)));
            }
        }
        if (f) {
          var b = function (t) {
            i[t] != null &&
              (i[t] = i[t].map(function (e, t) {
                var r = null,
                  a = s(e, n, r);
                return (
                  (u = u || a.get(o("WebBloksConstants").DESCENDANT_HAS_BIND)),
                  a
                );
              }));
          };
          for (var v of f) b(v);
        }
      }
      return ((i[o("WebBloksConstants").DESCENDANT_HAS_BIND] = u), l);
    }
    function u(e, t, n) {
      var r = e.component_queries,
        a = r === void 0 ? [] : r,
        i = e.embedded_payloads,
        l = i === void 0 ? [] : i,
        u = e.data,
        c = u === void 0 ? [] : u,
        d = e.props,
        m = d === void 0 ? [] : d,
        p = e.ft,
        _ = p === void 0 ? {} : p,
        f = e.values,
        g = f === void 0 ? [] : f,
        h = e.templates,
        y = h === void 0 ? {} : h,
        C = e.ft_declare,
        b = e.ft_include;
      return new (o("WebBloksTreeResources").WebBloksTreeResources)(
        c,
        new Map(
          l.map(function (e) {
            return [e.id, e];
          }),
        ),
        m,
        o(
          "WebBloksScopedComponentQueryDefinition",
        ).generateTreeScopedComponentQueryDefs(t, a, n),
        _,
        C,
        b,
        new Map(
          Object.entries(y).map(function (e) {
            var r = e[0],
              a = e[1];
            return [r, s(o("WebBloksUtils").cast(a), n, t.sourceMapNode)];
          }),
        ),
        g.map(function (e) {
          return babelHelpers.extends({}, e, {
            expression: o("WebBloksScriptParser").parse(e.expression),
          });
        }),
      );
    }
    ((l.parseBloksModelFromJSON = s), (l.parseBloksTreeResources = u));
  },
  98,
);
