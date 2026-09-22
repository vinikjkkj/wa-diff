__d(
  "WAWebBizBroadcastProAudienceQueryLoader",
  [
    "CometRelay",
    "WALogger",
    "WAWebBizBroadcastProAudienceTableQuery",
    "react",
    "useWAWebTimeout",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = u || (u = o("react")),
      d = c.useCallback,
      m = c.useEffect,
      p = c.useRef,
      _ = c.useState,
      f = new Set(),
      g = new Map(),
      h = 100,
      y = 5e3,
      C = 360,
      b = 3,
      v = 3,
      S = 10,
      R = 6e4;
    function L(e) {
      return o("CometRelay").loadQuery(
        e,
        o("WAWebBizBroadcastProAudienceTableQuery").proAudienceTableQuery,
        { first: h },
        { fetchPolicy: "network-only" },
      );
    }
    function E(t) {
      var n = _(!1),
        r = n[0],
        a = n[1],
        i = _(f),
        l = i[0],
        u = i[1],
        c = p(new Map()),
        L = p(g),
        E = p(null),
        T = p(null),
        D = o("useWAWebTimeout").useManualTimeout(function () {
          T.current == null || T.current();
        }),
        x = D[0],
        $ = D[1],
        P = d(function () {
          u(new Set(c.current.keys()));
        }, []),
        N = d(
          function () {
            c.current.size > 0 && ((c.current = new Map()), P());
          },
          [P],
        );
      m(
        function () {
          var n = !1,
            r = null,
            i = 0,
            l = new Map(),
            u = 0,
            d = 0,
            m = function () {
              var e;
              ($(), (e = r) == null || e.unsubscribe(), (r = null));
            },
            p = function (n) {
              (N(),
                o("WALogger")
                  .ERROR(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "Gave up polling BB Pro audience ingestion state",
                      ])),
                  )
                  .catching(n)
                  .sendLogs("bb-pro-audience-ingestion-poll-failed"));
            },
            _ = function () {
              (a(!0), N());
            },
            f = function () {
              if (++i >= C) {
                _();
                return;
              }
              x(y);
            },
            D = function (t) {
              var e = ++d - b;
              if (e <= 0) {
                x(y);
                return;
              }
              if (l.size === 0 && u === 0) {
                p(t);
                return;
              }
              if (e > S) {
                (_(), p(t));
                return;
              }
              (e === 1 &&
                o("WALogger")
                  .ERROR(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "Slowed BB Pro audience ingestion polling after repeated failures",
                      ])),
                  )
                  .catching(t)
                  .sendLogs("bb-pro-audience-ingestion-poll-slowed"),
                x(R));
            },
            M = function () {
              (m(),
                (r = o("CometRelay")
                  .fetchQuery(
                    t,
                    o("WAWebBizBroadcastProAudienceTableQuery")
                      .proAudienceTableQuery,
                    { first: h },
                    { fetchPolicy: "network-only" },
                  )
                  .subscribe({
                    error: function (t) {
                      n || D(t);
                    },
                    next: function (t) {
                      if (!n) {
                        d = 0;
                        var e = l;
                        if (
                          ((l = o(
                            "WAWebBizBroadcastProAudienceTableQuery",
                          ).getIngestingProAudienceTallies(t)),
                          (L.current = o(
                            "WAWebBizBroadcastProAudienceTableQuery",
                          ).getProAudienceSubscriberSizes(t)),
                          c.current.size > 0)
                        ) {
                          var r = k(c.current, l, L.current),
                            s = r.size !== c.current.size;
                          ((c.current = r), s && P());
                        }
                        if (l.size === 0) {
                          if (((i = 0), a(!1), u > 0)) {
                            ((u -= 1), x(y));
                            return;
                          }
                          c.current.size > 0 && x(y);
                          return;
                        }
                        ((u = 0), I(l, e) && ((i = 0), a(!1)), f());
                      }
                    },
                  })));
            };
          return (
            (T.current = M),
            (E.current = function (e) {
              if (((i = 0), (u = v), (d = 0), a(!1), e != null)) {
                var t;
                (c.current.set(e, {
                  baselineSize: (t = L.current.get(e)) != null ? t : null,
                  roundsLeft: v,
                }),
                  P());
              }
              M();
            }),
            M(),
            function () {
              ((n = !0),
                (T.current = null),
                (E.current = null),
                m(),
                (L.current = g),
                N());
            }
          );
        },
        [$, N, t, P, x],
      );
      var M = d(function (e) {
        E.current == null || E.current(e);
      }, []);
      return {
        hasStalledIngestion: r,
        pendingConfirmAudienceIds: l,
        refresh: M,
      };
    }
    function k(e, t, n) {
      var r = new Map();
      for (var o of e.entries()) {
        var a,
          i,
          l = o[0],
          s = o[1],
          u = n.get(l),
          c = s.baselineSize != null && u != null && u !== s.baselineSize;
        if (!c) {
          var d = (a = (i = s.baselineSize) != null ? i : u) != null ? a : null;
          if (t.has(l)) {
            r.set(l, babelHelpers.extends({}, s, { baselineSize: d }));
            continue;
          }
          s.roundsLeft > 1 &&
            r.set(
              l,
              babelHelpers.extends({}, s, {
                baselineSize: d,
                roundsLeft: s.roundsLeft - 1,
              }),
            );
        }
      }
      return r;
    }
    function I(e, t) {
      for (var n of e) {
        var r = n[0],
          o = n[1],
          a = t.get(r);
        if (a == null || o > a) return !0;
      }
      return !1;
    }
    ((l.PRO_AUDIENCE_QUERY_PAGE_SIZE = h),
      (l.PRO_AUDIENCE_POLL_INTERVAL_MS = y),
      (l.PRO_AUDIENCE_POLL_MAX_STALLED_ROUNDS = C),
      (l.PRO_AUDIENCE_POLL_FAST_RETRIES = b),
      (l.PRO_AUDIENCE_POLL_CONFIRMING_ROUNDS = v),
      (l.PRO_AUDIENCE_POLL_SLOW_RETRIES = S),
      (l.PRO_AUDIENCE_POLL_SLOW_INTERVAL_MS = R),
      (l.preloadProAudienceQuery = L),
      (l.useProAudienceIngestionPoll = E));
  },
  98,
);
