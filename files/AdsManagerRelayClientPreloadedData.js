__d(
  "AdsManagerRelayClientPreloadedData",
  [
    "FBLogger",
    "GraphPreloadingTTL",
    "amPreloadQuery",
    "memoizeWithArgsLFUCache",
    "setTimeout",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new Map();
    function s(e, t, n, a, i, l, s) {
      var c = babelHelpers.extends({}, i, {
          onCleanupPrefetchedQuery: function () {
            (s == null ||
              s({
                name: "preload.end",
                querySpec: d,
                removedCachedQuery: !0,
                stale: !0,
              }),
              r("FBLogger")("ams_frontend").warn(
                "[GraphQL Preloading] Cached GraphQL query name:%s interaction:%s wasn't removed after %s minutes.",
                n.params.name,
                e,
                o("GraphPreloadingTTL").STALE_REQUEST_TIME_LIMIT_MIN,
              ));
          },
          prefetchTTL: o("GraphPreloadingTTL").STALE_REQUEST_TIME_LIMIT_MS,
        }),
        d = u(t, n, a, i);
      return (
        s == null || s({ name: "preload.start", querySpec: d }),
        o("amPreloadQuery").preloadQuery(t, n, a, c, l, s),
        d
      );
    }
    var u = r("memoizeWithArgsLFUCache")(
      function (e, t, n, r) {
        var a = r != null ? r : {},
          i = a.fetchKey,
          l = a.fetchPolicy;
        return {
          cacheKey: o("amPreloadQuery").getCacheKey(t, n, r),
          environment: e,
          fetchKey: i,
          fetchPolicy: l,
          params: t.params,
          variables: n,
        };
      },
      function (e, t, n, r) {
        return (
          e.constructor.name + "_" + o("amPreloadQuery").getCacheKey(t, n, r)
        );
      },
    );
    function c(e, t, n, r, a, i) {
      var l = o("amPreloadQuery").getPreloadedQuery(e, t, n, r, a),
        s = u(e, t, n, r);
      return (
        l == null && (i == null || i({ name: "preload.miss", querySpec: s })),
        l
      );
    }
    function d(t, n, r, o, a) {
      var i,
        l = u(t, n, r, o),
        s = (i = e.get(l)) != null ? i : [];
      (s.push(JSON.stringify(r)),
        e.set(l, s),
        a == null || a({ consumers: s, name: "preload.hit", querySpec: l }));
    }
    function m(t, n) {
      r("setTimeout")(function () {
        var r = t.cacheKey,
          a = t.environment,
          i = o("amPreloadQuery").removePreloadedQuery(a, r);
        (e.delete(t),
          n == null ||
            n({
              name: "preload.end",
              querySpec: t,
              removedCachedQuery: i,
              stale: !1,
            }));
      }, o("GraphPreloadingTTL").DEFAULT_CACHE_TTL);
    }
    function p(t) {
      (e.clear(),
        o("amPreloadQuery").clearAll(),
        t == null || t({ name: "preload.clear_on_mutation" }));
    }
    ((l.preloadGraphQLData = s),
      (l.get = c),
      (l.addDataConsumer = d),
      (l.delayedRemove = m),
      (l.clearAll = p));
  },
  98,
);
