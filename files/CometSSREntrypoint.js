__d(
  "CometSSREntrypoint",
  ["objectValues", "relay-runtime/util/withProvidedVariables"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n,
        o,
        a,
        i,
        l,
        s,
        u,
        c,
        d,
        m = r("relay-runtime/util/withProvidedVariables")(
          e.variables,
          e.parameters.params.providedVariables,
          t,
        );
      return {
        actor_id:
          (n =
            (o = e.environmentProviderOptions) == null ? void 0 : o.actorID) !=
          null
            ? n
            : null,
        exclude_from_ssr:
          (a =
            (i = e.environmentProviderOptions) == null
              ? void 0
              : i.excludeFromSSR) != null
            ? a
            : !1,
        graphql_env_override_ref:
          (l =
            (s = e.environmentProviderOptions) == null
              ? void 0
              : s.graphQLEnvOverrideRef) != null
            ? l
            : null,
        id: e.parameters.params.id,
        name: e.parameters.params.name,
        num_connections_for_ssr:
          (u =
            (c = e.environmentProviderOptions) == null
              ? void 0
              : c.numConnectionsForSSR) != null
            ? u
            : null,
        preloader_group:
          (d = e.environmentProviderOptions) == null
            ? void 0
            : d.preloaderGroup,
        variables: m,
      };
    }
    function s(e, t) {
      var n = e.getPreloadProps(t),
        o = n.entryPoints,
        a = n.extraProps,
        i = n.queries,
        l = i != null ? i : {},
        u = r("objectValues")(l).filter(function (e) {
          var t, n;
          return (
            e != null &&
            ((t =
              e == null || (n = e.options) == null ? void 0 : n.includeIf) !=
            null
              ? t
              : !0)
          );
        }),
        c = [e.root],
        d = a != null ? [a] : [];
      if (o != null) {
        var m = Object.keys(o);
        m.forEach(function (e) {
          var t = o[e];
          if (t != null) {
            var n = t.entryPoint,
              r = t.entryPointParams,
              a = s(n, r);
            ((u = u.concat(a.queries)),
              (c = c.concat(a.roots)),
              (d = d.concat(a.extraProps)));
          }
        });
      }
      return { extraProps: d, queries: u, roots: c };
    }
    function u(t, n) {
      var r = s(t, n),
        o = r.queries,
        a = new Map();
      return o.map(function (t) {
        return e(t, a);
      });
    }
    function c(e) {
      return d(e, new Map());
    }
    function d(t, n) {
      var r = t.map(function (e) {
        return s(e.entryPoint, e.entryPointParams);
      });
      return r.map(function (t) {
        var r = t.queries,
          o = t.roots;
        return {
          queries: r.map(function (t) {
            return e(t, n);
          }),
          roots: o.map(function (e) {
            return e.getModuleId();
          }),
        };
      });
    }
    function m(e, t) {
      var n = p(e, t),
        r = n.queries,
        o = n.roots;
      return { queries: r, roots: o };
    }
    function p(e, t) {
      var n = _(e, t),
        r = n.extraProps,
        o = n.queries,
        a = n.roots;
      return {
        extraProps: r,
        queries: o,
        roots: a.map(function (e) {
          return e.getModuleId();
        }),
      };
    }
    function _(t, n) {
      var r = s(t, n),
        o = r.extraProps,
        a = r.queries,
        i = r.roots,
        l = new Map();
      return {
        extraProps: o,
        queries: a.map(function (t) {
          return e(t, l);
        }),
        roots: i,
      };
    }
    function f() {
      var e = new Error(
        "This function should not be called. It exists solely for the type-generation",
      );
      throw (e.stack, e);
    }
    function g(t, n) {
      var o,
        a,
        i = r("objectValues")(
          (o =
            n == null || n.getDisplayQueries == null
              ? void 0
              : n.getDisplayQueries()) != null
            ? o
            : {},
        )
          .filter(function (e) {
            return e != null;
          })
          .map(function (n) {
            return e(n, t);
          }),
        l = r("objectValues")(
          (a =
            n == null || n.getDeferredQueries == null
              ? void 0
              : n.getDeferredQueries()) != null
            ? a
            : {},
        )
          .filter(function (e) {
            return e != null;
          })
          .map(function (n) {
            return e(n, t);
          });
      return { deferred: l, display: i };
    }
    function h(e, t) {
      var n = new Map(),
        r = d(e, n),
        o = g(n, t);
      return { appshellQueries: o, routeObjects: r };
    }
    ((l.processRootEntryPoint = u),
      (l.processRootEntryPoints = c),
      (l.processRootEntryPointData = m),
      (l.processRootEntryPointDataWithExtraProps = p),
      (l.processRootEntryPointDataWithJSResources = _),
      (l.preloadQuery = f),
      (l.processServerEntryPoints = h));
  },
  98,
);
