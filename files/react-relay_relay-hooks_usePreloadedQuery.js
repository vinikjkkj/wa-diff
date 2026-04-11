__d(
  "react-relay/relay-hooks/usePreloadedQuery",
  [
    "invariant",
    "react",
    "react-relay/relay-hooks/useLazyLoadQueryNode",
    "react-relay/relay-hooks/useMemoOperationDescriptor",
    "react-relay/relay-hooks/useRelayEnvironment",
    "relay-runtime",
    "warning",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = n("react")),
      u = s.useDebugValue,
      c = n("relay-runtime").__internal,
      d = c.fetchQueryDeduped,
      m = c.fetchQuery;
    function p(e, t, r) {
      var o = n("react-relay/relay-hooks/useRelayEnvironment")(),
        a = n("react-relay/relay-hooks/useMemoOperationDescriptor")(
          e,
          t != null ? t.variables : {},
          t != null ? t.networkCacheConfig : void 0,
        ),
        i;
      if (t != null) {
        var s = t.fetchKey,
          u = t.fetchPolicy,
          c = t.source;
        if (t.kind === "PreloadedQuery_DEPRECATED")
          (a.request.node.params.name === t.name ||
            l(0, 15566, a.request.node.params.name, t.name),
            (i = {
              componentDisplayName: "usePreloadedQuery()",
              fetchKey: s,
              fetchObservable: d(o, a.request.identifier, function () {
                return o === t.environment && c != null
                  ? o.executeWithSource({ operation: a, source: c })
                  : o.execute({ operation: a });
              }),
              fetchPolicy: u,
              query: a,
              renderPolicy: r == null ? void 0 : r.UNSTABLE_renderPolicy,
            }));
        else {
          n("warning")(
            t.isDisposed === !1,
            "usePreloadedQuery(): Expected preloadedQuery to not be disposed yet. This is because disposing the query marks it for future garbage collection, and as such query results may no longer be present in the Relay store. In the future, this will become a hard error.",
          );
          var p = m(o, a),
            _;
          (c != null && o === t.environment
            ? (_ = c.ifEmpty(p))
            : (o !== t.environment &&
                n("warning")(
                  !1,
                  "usePreloadedQuery(): usePreloadedQuery was passed a preloaded query that was created with a different environment than the one that is currently in context. In the future, this will become a hard error.",
                ),
              (_ = p)),
            (i = {
              componentDisplayName: "usePreloadedQuery()",
              fetchKey: s,
              fetchObservable: _,
              fetchPolicy: u,
              query: a,
              renderPolicy: r == null ? void 0 : r.UNSTABLE_renderPolicy,
            }));
        }
      } else
        i = {
          componentDisplayName: "usePreloadedQuery()",
          fragmentNode: e.fragment,
        };
      var f = n("react-relay/relay-hooks/useLazyLoadQueryNode")(i);
      return f;
    }
    a.exports = p;
  },
  null,
);
