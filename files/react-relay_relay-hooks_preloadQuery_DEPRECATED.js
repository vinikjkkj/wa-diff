__d(
  "react-relay/relay-hooks/preloadQuery_DEPRECATED",
  ["relay-runtime"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e,
      l = (e = n("relay-runtime")).Observable,
      s = e.PreloadableQueryRegistry,
      u = e.ReplaySubject,
      c = e.createOperationDescriptor,
      d = e.getRequest,
      m = e.getRequestIdentifier,
      p = 30 * 1e3,
      _ = typeof WeakMap == "function",
      f = "store-or-network",
      g = _ ? new WeakMap() : new Map();
    function h(e, t, n, r, o) {
      var a = g.get(e);
      a == null && ((a = new Map()), g.set(e, a));
      var i = a,
        s = y(e, i, t, n, r),
        u =
          s.kind === "network"
            ? l.create(function (o) {
                var a;
                if (i.get(s.cacheKey) == null) {
                  var l = y(e, i, t, n, r);
                  l.kind === "network" && (a = l.subject.subscribe(o));
                } else a = s.subject.subscribe(o);
                return function () {
                  var t;
                  ((t = a) == null || t.unsubscribe(),
                    !e.isServer() &&
                      setTimeout(function () {
                        s != null && C(i, s);
                      }, p));
                };
              })
            : null;
      return {
        environment: e,
        environmentProviderOptions: o,
        fetchKey: s.fetchKey,
        fetchPolicy: s.fetchPolicy,
        id: s.id,
        kind: "PreloadedQuery_DEPRECATED",
        name: s.name,
        networkCacheConfig: r == null ? void 0 : r.networkCacheConfig,
        source: u,
        status: s.status,
        variables: n,
      };
    }
    function y(e, t, n, r, o) {
      var a, i, l;
      if (n.kind === "PreloadableConcreteRequest") {
        var _ = n;
        ((i = _.params), (l = i.id != null ? s.get(i.id) : null));
      } else ((l = d(n)), (i = l.params));
      var g = e.getNetwork(),
        h = (a = o == null ? void 0 : o.fetchPolicy) != null ? a : f,
        y = o == null ? void 0 : o.fetchKey,
        b = babelHelpers.extends(
          { force: !0 },
          o == null ? void 0 : o.networkCacheConfig,
        ),
        v = "" + m(i, r) + (y != null ? "-" + y : ""),
        S = t.get(v);
      function R() {
        return l != null ? e.check(c(l, r, b)) : { status: "missing" };
      }
      var L = h === f ? R() : { status: "missing" },
        E;
      if (L.status === "available" && l != null) {
        var k;
        ((E =
          S && S.kind === "cache"
            ? S
            : {
                cacheKey: v,
                fetchKey: y,
                fetchPolicy: h,
                id: i.id,
                kind: "cache",
                name: i.name,
                status: {
                  cacheConfig: b,
                  fetchTime:
                    (k = L == null ? void 0 : L.fetchTime) != null ? k : null,
                  source: "cache",
                },
              }),
          !e.isServer() &&
            S == null &&
            setTimeout(function () {
              E != null && C(t, E);
            }, p));
      } else if (S == null || S.kind !== "network") {
        var I = g.execute(i, r, b, null, void 0, void 0, void 0, R),
          T = new u();
        E = {
          cacheKey: v,
          fetchKey: y,
          fetchPolicy: h,
          id: i.id,
          kind: "network",
          name: i.name,
          status: { cacheConfig: b, fetchTime: null, source: "network" },
          subject: T,
          subscription: I.finally(function () {
            e.isServer() ||
              setTimeout(function () {
                E != null && C(t, E);
              }, p);
          }).subscribe({
            complete: function () {
              T.complete();
            },
            error: function (t) {
              T.error(t);
            },
            next: function (t) {
              T.next(t);
            },
          }),
        };
      } else E = S;
      return (t.set(v, E), E);
    }
    function C(e, t) {
      var n = e.get(t.cacheKey);
      n != null &&
        n === t &&
        (n.kind === "network" && n.subscription.unsubscribe(),
        e.delete(n.cacheKey));
    }
    a.exports = h;
  },
  null,
);
