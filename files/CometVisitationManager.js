__d(
  "CometVisitationManager",
  [
    "CometSmartGraphqlPrefetch",
    "FBLogger",
    "isSearchCometGlobalResultPageTracePolicy",
    "pageID",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        "comet.marketplace.category": "comet.marketplace.home",
        "comet.marketplace.home.hoisted_pdp": "comet.marketplace.home",
      },
      s = {},
      u = null,
      c = null,
      d = !1;
    function m(e) {
      return (
        e.tracePolicy +
        ":" +
        e.instanceId +
        ":" +
        e.subsessionCount +
        ":" +
        e.timeStampMs / 1e3
      );
    }
    function p(t) {
      if (t != null) {
        var n = e[t] ? e[t] : t;
        if (u !== n) {
          var a = s[n];
          (a
            ? (a.subsessionCount++, (a.timeStampMs = Date.now()))
            : (s[n] = {
                instanceId: r("pageID"),
                subsessionCount: 1,
                timeStampMs: Date.now(),
                tracePolicy: n,
              }),
            (c = u),
            (u = n),
            o("CometSmartGraphqlPrefetch").logPrefetchedQueries(u));
        }
      }
    }
    function _() {
      if (!d)
        return (
          r("FBLogger")("CometVisitationManager").mustfix(
            "Attempting to get the current visitation id without initialization.",
          ),
          null
        );
      if (u == null || !s[u]) return null;
      var e = m(s[u]);
      if (
        u != null &&
        r("isSearchCometGlobalResultPageTracePolicy")(u) &&
        c != null &&
        s[c]
      ) {
        var t = m(s[c]);
        return e + "|" + t;
      }
      return e;
    }
    function f(e) {
      d || (p(e), (d = !0));
    }
    function g(e) {
      if (!d) {
        r("FBLogger")("CometVisitationManager").mustfix(
          "Updating the visitation manager without initialization",
        );
        return;
      }
      p(e);
    }
    function h(e) {
      g(e.main.route.tracePolicy);
    }
    ((l.getCurrentVisitationId = _),
      (l.init = f),
      (l.update = g),
      (l.updateFromRouterState = h));
  },
  98,
);
