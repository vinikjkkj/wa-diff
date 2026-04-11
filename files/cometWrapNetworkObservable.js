__d(
  "cometWrapNetworkObservable",
  [
    "CometRelayErrorHandling",
    "cometWrapWithRetryOnError",
    "cr:7269",
    "cr:7581",
    "gkx",
    "relay-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return n("cr:7269")
        ? function (e) {
            return o("relay-runtime").Observable.create(function (t) {
              return s(e).subscribe({
                complete: t.complete,
                error: function (a) {
                  var e,
                    i,
                    l,
                    s,
                    u = t.error(a);
                  if (
                    o("CometRelayErrorHandling").shouldSkipErrorSideEffects(a)
                  )
                    return u;
                  var c = a == null ? void 0 : a.source,
                    d =
                      (e =
                        (i = c == null ? void 0 : c.errorCode) != null
                          ? i
                          : c == null
                            ? void 0
                            : c.code) != null
                        ? e
                        : c == null
                          ? void 0
                          : c.error,
                    m =
                      (l = c == null ? void 0 : c.errorDescription) != null
                        ? l
                        : c == null
                          ? void 0
                          : c.description,
                    p =
                      (s = c == null ? void 0 : c.errorSummary) != null
                        ? s
                        : c == null
                          ? void 0
                          : c.summary,
                    _ = null;
                  if (r("gkx")("24215")) {
                    var f;
                    ((_ =
                      (f = c == null ? void 0 : c.debug_info) != null
                        ? f
                        : c == null
                          ? void 0
                          : c.message),
                      m === _ && (_ = null));
                  }
                  return (
                    d &&
                      p &&
                      m &&
                      n("cr:7269")(
                        d,
                        p,
                        m,
                        c == null ? void 0 : c.redirectTo,
                        !0,
                        _,
                      ),
                    u
                  );
                },
                next: function (n) {
                  if (Array.isArray(n))
                    for (var e of n) {
                      var r = u(e);
                      if (r != null) {
                        t.error(r);
                        return;
                      }
                    }
                  else {
                    var o = u(n);
                    if (o != null) {
                      t.error(o);
                      return;
                    }
                  }
                  t.next(n);
                },
              });
            });
          }
        : function (e) {
            return e;
          };
    }
    function s(e) {
      return n("cr:7581") ? r("cometWrapWithRetryOnError")(e, n("cr:7581")) : e;
    }
    function u(e) {
      var t = e.data,
        n = Object.prototype.hasOwnProperty.call(e, "errors")
          ? e.errors
          : void 0;
      if (Array.isArray(n)) {
        for (var r of n)
          if (
            r != null &&
            typeof r == "object" &&
            (r.severity === "CRITICAL" || r.severity === "ERROR") &&
            Array.isArray(r.path) &&
            r.path.length === 3 &&
            r.path[0] === "viewer" &&
            r.path[1] === "news_feed" &&
            r.path[2] === "edges"
          ) {
            var a,
              i = t == null || (a = t.viewer) == null ? void 0 : a.news_feed,
              l = i == null ? void 0 : i.edges;
            if (
              i != null &&
              (l == null || (Array.isArray(l) && l.length === 0))
            )
              return o("relay-runtime").RelayError.create(
                "CometNewsFeed",
                "Error evaluating Comet News Feed, edges cannot be resolved.",
              );
          }
      }
    }
    l.default = e;
  },
  98,
);
