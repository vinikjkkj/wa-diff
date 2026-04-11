__d(
  "react-relay/relay-hooks/loadQuery",
  ["invariant", "relay-runtime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (e = n("relay-runtime")).__internal.fetchQueryDeduped,
      u = e.Observable,
      c = e.PreloadableQueryRegistry,
      d = e.ReplaySubject,
      m = e.createOperationDescriptor,
      p = e.getRequest,
      _ = e.getRequestIdentifier,
      f = 100001;
    function g(e, t, n, r, o) {
      var a;
      f++;
      var i =
          (a = r == null ? void 0 : r.fetchPolicy) != null
            ? a
            : "store-or-network",
        g = babelHelpers.extends(
          {},
          r == null ? void 0 : r.networkCacheConfig,
          { force: !0 },
        ),
        h,
        y = !1,
        C = function (n, r) {
          return ((y = !0), e.executeWithSource({ operation: n, source: r }));
        },
        b = new d(),
        v = u.create(function (e) {
          return b.subscribe(e);
        }),
        S,
        R = null,
        L = !1,
        E = function (r, o) {
          L = !0;
          var t = new d(),
            a = "raw-network-request-" + _(r, n),
            i = s(e, a, function () {
              var t = e.getNetwork();
              return t.execute(r, n, g, void 0, void 0, void 0, void 0, o);
            }),
            l = i.subscribe({
              complete: function () {
                t.complete();
              },
              error: function (n) {
                ((R = n), t.error(n));
              },
              next: function (n) {
                t.next(n);
              },
            }),
            c = l.unsubscribe;
          return (
            (S = c),
            u.create(function (e) {
              var n = t.subscribe(e);
              return function () {
                (n.unsubscribe(), S());
              };
            })
          );
        },
        k,
        I = function (n, r) {
          L = !0;
          var t = s(e, n.request.identifier, r).subscribe({
            complete: function () {
              b.complete();
            },
            error: function (t) {
              b.error(t);
            },
            next: function (t) {
              b.next(t);
            },
          });
          k = t.unsubscribe;
        },
        T = function (r) {
          var t = m(r, n, g);
          if (((h = e.retain(t)), i !== "store-only")) {
            var o =
              i !== "store-or-network" || e.check(t).status !== "available";
            o &&
              I(t, function () {
                var n = E(r.params, function () {
                    return e.check(t);
                  }),
                  o = C(t, n);
                return o;
              });
          }
        },
        D,
        x,
        $;
      if (t.kind === "PreloadableConcreteRequest") {
        var P = t;
        D = P.params;
        var N = D;
        (($ = N.id), $ !== null || l(0, 22441, D.name));
        var M = c.get($);
        if (M != null) T(M);
        else {
          var w = i === "store-only" ? null : E(D),
            A = c.onLoad($, function (t) {
              x();
              var r = m(t, n, g);
              ((h = e.retain(r)),
                w != null &&
                  I(r, function () {
                    return C(r, w);
                  }));
            });
          x = A.dispose;
        }
      } else {
        var F = t,
          O = p(F);
        ((D = O.params), ($ = D.cacheID != null ? D.cacheID : D.id), T(O));
      }
      var B = !1,
        W = !1,
        q = !1,
        U = function () {
          W || (h && h.dispose(), (W = !0));
        },
        V = function () {
          q || (y ? k && k() : S && S(), x && x(), (q = !0));
        };
      return {
        cancelNetworkRequest: V,
        dispose: function () {
          B || (U(), V(), (B = !0));
        },
        environment: e,
        environmentProviderOptions: o,
        fetchKey: f,
        fetchPolicy: i,
        id: $,
        get isDisposed() {
          return B || W;
        },
        kind: "PreloadedQuery",
        name: D.name,
        networkCacheConfig: g,
        get networkError() {
          return R;
        },
        releaseQuery: U,
        source: L ? v : void 0,
        variables: n,
      };
    }
    a.exports = { loadQuery: g };
  },
  null,
);
