__d(
  "useCometInteractionTracing",
  [
    "CometAddInlineTiming",
    "CometInteractionTracingConfig",
    "CometOfflineTracing",
    "InteractionTracing",
    "forEachObject",
    "gkx",
    "nullthrows",
    "react",
    "react-compiler-runtime",
    "useGetCometRouteTracePolicy",
    "uuidv4",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = s.useCallback,
      c = s.useRef,
      d = 0;
    function m() {
      return d++;
    }
    function p(e, t, n, a, i) {
      var l = o("react-compiler-runtime").c(8),
        s = r("useGetCometRouteTracePolicy")(),
        u;
      l[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((u = m()), (l[0] = u))
        : (u = l[0]);
      var d = c("" + u),
        p;
      return (
        l[1] !== i ||
        l[2] !== s ||
        l[3] !== t ||
        l[4] !== e ||
        l[5] !== a ||
        l[6] !== n
          ? ((p = function (u, c, m, p, f, g) {
              var l,
                h,
                y =
                  g != null
                    ? g
                    : o("CometInteractionTracingConfig").tracingConfig,
                C = r("uuidv4")(),
                b =
                  (l = (h = p != null ? p : a) != null ? h : s()) != null
                    ? l
                    : "comet.app",
                v = b + "_" + d.current + (f != null ? "_" + f : "");
              v = "" + b + (f != null ? f : d.current);
              var S = null;
              return (
                r("InteractionTracing").trace(
                  e,
                  function (e) {
                    S = e;
                    var t = r("InteractionTracing").checkAndMarkRevisit(b),
                      n = r("InteractionTracing").checkAndMarkRevisit(v);
                    (e.addMetadata("revisit", t ? 1 : 0),
                      e.addMetadata("is_mobile", r("gkx")("22968")),
                      e.addMetadata("instance_revisit", n ? 1 : 0),
                      i != null &&
                        r("forEachObject")(i, function (t, n) {
                          n != null && t != null && e.addMetadata(n, t);
                        }),
                      e.addAnnotationInt(
                        o("CometOfflineTracing")
                          .OFFLINE_NETWORK_STATUS_ANNOTATION,
                        o("CometOfflineTracing").getOfflineCount(),
                      ),
                      e.onComplete(_),
                      u(e));
                  },
                  t,
                  n,
                  b,
                  C,
                  c,
                  m,
                  y,
                ),
                r("nullthrows")(S)
              );
            }),
            (l[1] = i),
            (l[2] = s),
            (l[3] = t),
            (l[4] = e),
            (l[5] = a),
            (l[6] = n),
            (l[7] = p))
          : (p = l[7]),
        p
      );
    }
    function _(e) {
      o("CometAddInlineTiming").addServerTags(e.traceId);
    }
    l.default = p;
  },
  98,
);
