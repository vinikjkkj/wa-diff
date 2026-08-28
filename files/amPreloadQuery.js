__d(
  "amPreloadQuery",
  ["getRequestIdentifierWithSortedArrays", "relay-runtime", "setTimeout"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 3e4,
      s = "store-or-network",
      u = new Map();
    function c(e, t, n, a, i, l) {
      var s = u.get(e);
      s == null && ((s = new Map()), u.set(e, s));
      var c = s,
        d = _(e, c, t, n, a, l),
        m =
          d.kind === "network"
            ? o("relay-runtime").Observable.create(function (o) {
                var i;
                if (c.get(d.cacheKey) == null) {
                  var l = _(e, c, t, n, a);
                  l.kind === "network" && (i = l.subject.subscribe(o));
                } else i = d.subject.subscribe(o);
                return function () {
                  var t;
                  ((t = i) == null || t.unsubscribe(),
                    !e.isServer() &&
                      r("setTimeout")(function () {
                        g(
                          c,
                          d,
                          a == null ? void 0 : a.onCleanupPrefetchedQuery,
                        );
                      }, f(a)));
                };
              })
            : null;
      return {
        environment: e,
        environmentProviderOptions: i,
        fetchKey: d.fetchKey,
        fetchPolicy: d.fetchPolicy,
        id: d.id,
        kind: "PreloadedQuery_DEPRECATED",
        name: d.name,
        networkCacheConfig: a == null ? void 0 : a.networkCacheConfig,
        source: m,
        status: d.status,
        variables: n,
      };
    }
    function d(e) {
      var t, n;
      if (e.kind === "PreloadableConcreteRequest") {
        var r = e;
        ((t = r.params),
          (n =
            t.id != null
              ? o("relay-runtime").PreloadableQueryRegistry.get(t.id)
              : null));
      } else ((n = o("relay-runtime").getRequest(e)), (t = n.params));
      return [t, n];
    }
    function m(e, t, n) {
      return (
        "" +
        r("getRequestIdentifierWithSortedArrays")(e, t) +
        (n != null ? "-" + n : "")
      );
    }
    function p(e, t, n) {
      var r = d(e),
        o = r[0],
        a = r[1];
      return m(o, t, n == null ? void 0 : n.fetchKey);
    }
    function _(e, t, n, a, i, l) {
      var u,
        c = d(n),
        p = c[0],
        _ = c[1],
        h = (u = i == null ? void 0 : i.fetchPolicy) != null ? u : s,
        y = i == null ? void 0 : i.fetchKey,
        C = m(p, a, y),
        b = t.get(C),
        v = e.getNetwork(),
        S = babelHelpers.extends(
          { force: !0 },
          i == null ? void 0 : i.networkCacheConfig,
        ),
        R =
          h === s && _ != null && _ != null
            ? e.check(o("relay-runtime").createOperationDescriptor(_, a, S))
            : { status: "missing" },
        L;
      if (R.status === "available" && _ != null) {
        var E;
        ((L =
          b && b.kind === "cache"
            ? b
            : {
                cacheKey: C,
                fetchKey: y,
                fetchPolicy: h,
                id: p.id,
                kind: "cache",
                name: p.name,
                status: {
                  cacheConfig: S,
                  fetchTime:
                    (E = R == null ? void 0 : R.fetchTime) != null ? E : null,
                  source: "cache",
                },
              }),
          !e.isServer() &&
            b == null &&
            r("setTimeout")(function () {
              L != null &&
                g(t, L, i == null ? void 0 : i.onCleanupPrefetchedQuery);
            }, f(i)));
      } else if (b == null || b.kind !== "network") {
        var k = v.execute(p, a, S, null),
          I = new (o("relay-runtime").ReplaySubject)();
        L = {
          cacheKey: C,
          fetchKey: y,
          fetchPolicy: h,
          id: p.id,
          kind: "network",
          name: p.name,
          status: { cacheConfig: S, fetchTime: null, source: "network" },
          subject: I,
          subscription: k
            .finally(function () {
              e.isServer() ||
                r("setTimeout")(function () {
                  L != null &&
                    g(t, L, i == null ? void 0 : i.onCleanupPrefetchedQuery);
                }, f(i));
            })
            .subscribe({
              complete: function () {
                (I.complete(),
                  l == null ||
                    l({
                      name: "preload.network.complete",
                      querySpec: {
                        cacheKey: C,
                        environment: e,
                        fetchKey: i == null ? void 0 : i.fetchKey,
                        fetchPolicy: i == null ? void 0 : i.fetchPolicy,
                        params: p,
                        variables: a,
                      },
                    }));
              },
              error: function (n) {
                (I.error(n),
                  l == null ||
                    l({
                      error: n,
                      name: "preload.network.error",
                      querySpec: {
                        cacheKey: C,
                        environment: e,
                        fetchKey: i == null ? void 0 : i.fetchKey,
                        fetchPolicy: i == null ? void 0 : i.fetchPolicy,
                        params: p,
                        variables: a,
                      },
                    }));
              },
              next: function (n) {
                (I.next(n),
                  l == null ||
                    l({
                      name: "preload.network.next",
                      querySpec: {
                        cacheKey: C,
                        environment: e,
                        fetchKey: i == null ? void 0 : i.fetchKey,
                        fetchPolicy: i == null ? void 0 : i.fetchPolicy,
                        params: p,
                        variables: a,
                      },
                      response: n,
                    }));
              },
              start: function () {
                l == null ||
                  l({
                    name: "preload.network.start",
                    querySpec: {
                      cacheKey: C,
                      environment: e,
                      fetchKey: i == null ? void 0 : i.fetchKey,
                      fetchPolicy: i == null ? void 0 : i.fetchPolicy,
                      params: p,
                      variables: a,
                    },
                  });
              },
            }),
        };
      } else L = b;
      return (t.set(C, L), L);
    }
    function f(t) {
      var n;
      return (n = t == null ? void 0 : t.prefetchTTL) != null ? n : e;
    }
    function g(e, t, n) {
      var r = e.get(t.cacheKey);
      r != null &&
        r === t &&
        (r.kind === "network" && r.subscription.unsubscribe(),
        e.delete(r.cacheKey),
        n == null || n());
    }
    function h(e, t, n, r, o) {
      var a,
        i,
        l = p(t, n, r),
        d = (a = u.get(e)) == null ? void 0 : a.get(l),
        m = (i = r == null ? void 0 : r.fetchPolicy) != null ? i : s;
      return d == null || (m !== s && d.kind !== "network")
        ? null
        : c(e, t, n, r, o);
    }
    function y(e, t) {
      var n = u.get(e);
      if (n != null) {
        var r = n.get(t);
        if (r != null)
          return (
            r.kind === "network" && r.subscription.unsubscribe(),
            n.delete(t)
          );
      }
      return !1;
    }
    function C() {
      u.clear();
    }
    ((l.preloadQuery = c),
      (l.getCacheKey = p),
      (l.getPreloadedQuery = h),
      (l.removePreloadedQuery = y),
      (l.clearAll = C));
  },
  98,
);
