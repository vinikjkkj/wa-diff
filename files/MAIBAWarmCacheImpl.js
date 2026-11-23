__d(
  "MAIBAWarmCacheImpl",
  [
    "MAIBAInlinedContext",
    "MAIBARelayEnvironment",
    "MAIBAWarmCacheImplBusinessContextMutation.graphql",
    "MAIBAWarmCacheImplMutation.graphql",
    "RelayModern",
    "extractMAIBAViewFilters",
    "getMAIBAPageAdAccountID",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = e !== void 0 ? e : (e = n("MAIBAWarmCacheImplMutation.graphql")),
      c =
        s !== void 0
          ? s
          : (s = n("MAIBAWarmCacheImplBusinessContextMutation.graphql")),
      d = 500,
      m = new Map(),
      p = new Set();
    function _(e) {
      var t, n, a;
      if (r("gkx")("18058")) {
        var i =
          e != null ? e : o("MAIBARelayEnvironment").MAIBARelayEnvironment;
        if (i != null) {
          var l = r("getMAIBAPageAdAccountID")();
          if (l != null) {
            var s =
                (t =
                  (n = r("extractMAIBAViewFilters")()) == null ||
                  (n = n.metrics_date_range) == null
                    ? void 0
                    : n.preset) != null
                  ? t
                  : null,
              c = String(l) + "|" + (s != null ? s : "_"),
              p = Date.now(),
              _ = (a = m.get(c)) != null ? a : 0;
            p - _ < d ||
              (m.set(c, p),
              o("RelayModern").commitMutation(i, {
                mutation: u,
                variables: { input: { ad_account_id: l, date_preset: s } },
                onError: function () {},
              }));
          }
        }
      }
    }
    function f(e) {
      var t = e != null ? e : o("MAIBARelayEnvironment").MAIBARelayEnvironment;
      if (t != null) {
        var n = r("getMAIBAPageAdAccountID")();
        n != null &&
          (p.has(n) ||
            (p.add(n),
            o("RelayModern").commitMutation(t, {
              mutation: c,
              variables: { input: { ad_account_id: n } },
              onCompleted: function (t) {
                var e = t == null ? void 0 : t.maiba_warm_business_context;
                e == null ||
                  e === "" ||
                  o("MAIBAInlinedContext").updateInlinedContext({
                    synthesized_business_context: e,
                  });
              },
              onError: function () {
                p.delete(n);
              },
            })));
      }
    }
    ((l.fire = _), (l.fireBusinessContext = f));
  },
  98,
);
