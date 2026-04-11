__d(
  "CometSSREntrypoint",
  ["objectValues", "relay-runtime/util/withProvidedVariables"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t,
        n,
        o,
        a,
        i,
        l,
        s,
        u,
        c,
        d = r("relay-runtime/util/withProvidedVariables")(
          e.variables,
          e.parameters.params.providedVariables,
        );
      return {
        actor_id:
          (t =
            (n = e.environmentProviderOptions) == null ? void 0 : n.actorID) !=
          null
            ? t
            : null,
        exclude_from_ssr:
          (o =
            (a = e.environmentProviderOptions) == null
              ? void 0
              : a.excludeFromSSR) != null
            ? o
            : !1,
        graphql_env_override_ref:
          (i =
            (l = e.environmentProviderOptions) == null
              ? void 0
              : l.graphQLEnvOverrideRef) != null
            ? i
            : null,
        id: e.parameters.params.id,
        name: e.parameters.params.name,
        num_connections_for_ssr:
          (s =
            (u = e.environmentProviderOptions) == null
              ? void 0
              : u.numConnectionsForSSR) != null
            ? s
            : null,
        preloader_group:
          (c = e.environmentProviderOptions) == null
            ? void 0
            : c.preloaderGroup,
        variables: d,
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
        c = [e.root.getModuleId()],
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
        o = r.queries;
      return o.map(e);
    }
    function c(t) {
      var n = t.map(function (e) {
        return s(e.entryPoint, e.entryPointParams);
      });
      return n.map(function (t) {
        var n = t.queries,
          r = t.roots;
        return { queries: n.map(e), roots: r };
      });
    }
    function d(e, t) {
      var n = m(e, t),
        r = n.queries,
        o = n.roots;
      return { queries: r, roots: o };
    }
    function m(t, n) {
      var r = s(t, n),
        o = r.extraProps,
        a = r.queries,
        i = r.roots;
      return { extraProps: o, queries: a.map(e), roots: i };
    }
    function p() {
      throw new Error(
        "This function should not be called. It exists solely for the type-generation",
      );
    }
    function _(t, n) {
      var o,
        a,
        i = t.map(function (e) {
          return s(e.entryPoint, e.entryPointParams);
        }),
        l = i.map(function (t) {
          var n = t.queries,
            r = t.roots;
          return { queries: n.map(e), roots: r };
        }),
        u = r("objectValues")(
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
          .map(e),
        c = r("objectValues")(
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
          .map(e);
      return { appshellQueries: { deferred: c, display: u }, routeObjects: l };
    }
    ((l.processRootEntryPoint = u),
      (l.processRootEntryPoints = c),
      (l.processRootEntryPointData = d),
      (l.processRootEntryPointDataWithExtraProps = m),
      (l.preloadQuery = p),
      (l.processServerEntryPoints = _));
  },
  98,
);
