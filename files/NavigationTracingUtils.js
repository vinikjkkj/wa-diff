__d(
  "NavigationTracingUtils",
  ["interaction-tracing-metrics", "performance", "performanceNavigationStart"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = r("performanceNavigationStart")();
    function u(t) {
      var n,
        a,
        i =
          ((e || (e = r("performance"))) == null
            ? void 0
            : (e || (e = r("performance"))).timing) || {},
        l =
          ((e || (e = r("performance"))) == null ||
          (n = (e || (e = r("performance"))).navigation) == null
            ? void 0
            : n.redirectCount) || 0;
      o(
        "interaction-tracing-metrics",
      ).InteractionTracingMetricsCore.addAnnotationInt(t, "redirectCount", l);
      var u =
        typeof (e || (e = r("performance"))).getEntriesByType == "function"
          ? (e || (e = r("performance"))).getEntriesByType("navigation")[0]
          : null;
      (u != null &&
        u.nextHopProtocol &&
        o(
          "interaction-tracing-metrics",
        ).InteractionTracingMetricsCore.addAnnotation(
          t,
          "httpProtocol",
          u.nextHopProtocol,
        ),
        u != null && u.type
          ? o(
              "interaction-tracing-metrics",
            ).InteractionTracingMetricsCore.addAnnotation(
              t,
              "navigationType",
              u.type,
            )
          : ((a = (e || (e = r("performance"))).navigation) == null
              ? void 0
              : a.type) != null &&
            o(
              "interaction-tracing-metrics",
            ).InteractionTracingMetricsCore.addAnnotation(
              t,
              "navigationType",
              (e || (e = r("performance"))).navigation.type,
            ));
      for (var c in i)
        typeof i[c] == "number" &&
          i[c] >= s &&
          o(
            "interaction-tracing-metrics",
          ).InteractionTracingMetricsCore.addMarkerPoint(
            t,
            c,
            "NavigationTiming",
            i[c] - s,
          );
      (u != null &&
        u.workerStart &&
        o(
          "interaction-tracing-metrics",
        ).InteractionTracingMetricsCore.addMarkerPoint(
          t,
          "workerStart",
          "NavigationTiming",
          u.workerStart,
        ),
        u != null &&
          u.fetchStart &&
          o(
            "interaction-tracing-metrics",
          ).InteractionTracingMetricsCore.addMarkerPoint(
            t,
            "navFetchStart",
            "NavigationTiming",
            u.fetchStart,
          ),
        u != null &&
          u.fetchStart &&
          u != null &&
          u.workerStart &&
          o(
            "interaction-tracing-metrics",
          ).InteractionTracingMetricsCore.addAnnotationInt(
            t,
            "workerProcessingTime",
            u.fetchStart - u.workerStart,
          ),
        o(
          "interaction-tracing-metrics",
        ).InteractionTracingMetricsCore.addAnnotationInt(
          t,
          "documentDOMElementCount",
          document.getElementsByTagName("*").length,
        ));
    }
    function c(e) {
      var t = document.referrer;
      if (typeof t == "string") {
        var n = /^\w+:\/\/[^\/]+/.exec(t);
        n &&
          n[0] &&
          o(
            "interaction-tracing-metrics",
          ).InteractionTracingMetricsCore.addAnnotation(e, "referrer", n[0]);
      }
    }
    ((l.addNavigationTiming = u), (l.addReferrer = c));
  },
  98,
);
