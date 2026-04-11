__d(
  "useHeroFailTrigger",
  [
    "ErrorNormalizeUtils",
    "hero-tracing-placeholder",
    "interaction-tracing-metrics",
    "performanceNow",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react")),
      c = u.useCallback,
      d = u.useContext,
      m = 1e3;
    function p(e) {
      var t = e != null ? e : "";
      return t.length > m ? t.slice(0, m) + "..." : t;
    }
    function _() {
      var t = d(
          o("hero-tracing-placeholder").HeroCurrentInteractionForLoggingContext,
        ),
        n = d(o("hero-tracing-placeholder").HeroInteractionContext.Context);
      return c(
        function (a) {
          var i,
            l,
            s,
            u,
            c = a.description,
            d = a.error,
            m = a.interactionIDOfFailedTrace,
            _ = m === void 0 ? null : m,
            y = d == null ? void 0 : d.message;
          if ((d == null ? void 0 : d.messageFormat) != null) {
            var C = 0;
            y = d.messageFormat.replace(/%s/g, function (e) {
              return d.messageParams != null ? d.messageParams[C++] : "unknown";
            });
          }
          var b =
              y == null && c == null
                ? "unknown"
                : [p(c), p(y)].filter(Boolean).join(", "),
            v =
              _ != null
                ? _
                : (i = t.current) == null
                  ? void 0
                  : i.interactionUUID;
          if (v != null) {
            var S = o(
              "interaction-tracing-metrics",
            ).InteractionTracingMetricsCore.get(v);
            if (
              (S == null || (l = S.annotations.int) == null
                ? void 0
                : l.isError) !== 1
            ) {
              (o(
                "interaction-tracing-metrics",
              ).InteractionTracingMetricsCore.addMetadata(v, "isError", 1),
                o(
                  "interaction-tracing-metrics",
                ).InteractionTracingMetricsCore.addMetadata(
                  v,
                  "errorComponent",
                  b,
                ));
              var R = [];
              (Array.isArray(d == null ? void 0 : d.opes_mids) &&
                R.push.apply(R, d.opes_mids),
                Array.isArray(d == null ? void 0 : d.mids) &&
                  R.push.apply(R, d.mids),
                Array.isArray(
                  d == null || (s = d.source) == null ? void 0 : s.opes_mids,
                ) && R.push.apply(R, d.source.opes_mids),
                typeof (d == null ? void 0 : d.mid) == "string" &&
                  R.push(d.mid),
                R.length > 0 &&
                  o(
                    "interaction-tracing-metrics",
                  ).InteractionTracingMetricsCore.addAnnotationStringArray(
                    v,
                    "opes_mids",
                    R,
                  ),
                (d == null ? void 0 : d.fbtrace_id) != null &&
                  o(
                    "interaction-tracing-metrics",
                  ).InteractionTracingMetricsCore.addAnnotation(
                    v,
                    "error_www_request_id",
                    d.fbtrace_id,
                  ));
              var L =
                (u = d == null ? void 0 : d.errorCode) != null
                  ? u
                  : d == null
                    ? void 0
                    : d.code;
              L != null &&
                o(
                  "interaction-tracing-metrics",
                ).InteractionTracingMetricsCore.addMetadata(v, "error_code", L);
              var E = d == null ? void 0 : d.name;
              E != null &&
                o(
                  "interaction-tracing-metrics",
                ).InteractionTracingMetricsCore.addMetadata(v, "error_name", E);
              var k = h(d) || g(d);
              if (
                (!k &&
                  typeof (d == null ? void 0 : d.is_js_error) == "boolean" &&
                  (k = d == null ? void 0 : d.is_js_error),
                k &&
                  (o(
                    "interaction-tracing-metrics",
                  ).InteractionTracingMetricsCore.addAnnotationBoolean(
                    v,
                    "is_js_error",
                    k,
                  ),
                  d != null &&
                    (d == null ? void 0 : d.js_normalized_error) == null))
              ) {
                var I = r("ErrorNormalizeUtils").normalizeError(d);
                d.js_normalized_error = I;
              }
              if ((d == null ? void 0 : d.js_normalized_error) != null) {
                var T = d.js_normalized_error;
                f(v, T);
              }
              var D = n.pageletStack;
              S &&
                o(
                  "interaction-tracing-metrics",
                ).InteractionTracingMetricsCore.addSubspan(
                  v,
                  "Error: " + b,
                  "HeroTracing",
                  S.start,
                  (e || (e = r("performanceNow")))(),
                  {
                    pagelet: D[D.length - 1],
                    pageletStack: D,
                    spanType: "Error",
                  },
                );
            }
          }
        },
        [n, t],
      );
    }
    function f(e, t) {
      (o(
        "interaction-tracing-metrics",
      ).InteractionTracingMetricsCore.addAnnotation(
        e,
        "js_error_message_format",
        t.messageFormat,
      ),
        o(
          "interaction-tracing-metrics",
        ).InteractionTracingMetricsCore.addAnnotationStringArray(
          e,
          "js_error_message_params",
          t.messageParams,
        ),
        o(
          "interaction-tracing-metrics",
        ).InteractionTracingMetricsCore.addAnnotation(
          e,
          "js_error_type",
          t.type,
        ),
        t.loggingSource != null &&
          o(
            "interaction-tracing-metrics",
          ).InteractionTracingMetricsCore.addAnnotation(
            e,
            "js_error_logging_source",
            t.loggingSource,
          ),
        t.project != null &&
          o(
            "interaction-tracing-metrics",
          ).InteractionTracingMetricsCore.addAnnotation(
            e,
            "js_error_project",
            t.project,
          ));
    }
    function g(e) {
      var t,
        n,
        r = e == null ? void 0 : e.name;
      if (r === "Invariant Violation") return !0;
      var o =
        (t = e == null ? void 0 : e.message) != null
          ? t
          : e == null
            ? void 0
            : e.description;
      return (n =
        (o == null ? void 0 : o.includes("Minified React error")) ||
        (o == null ? void 0 : o.includes("Minified invariant"))) != null
        ? n
        : !1;
    }
    function h(e) {
      try {
        var t = [
          EvalError,
          RangeError,
          ReferenceError,
          SyntaxError,
          TypeError,
          URIError,
        ];
        return t.some(function (t) {
          return e instanceof t;
        });
      } catch (e) {
        return !1;
      }
    }
    l.default = _;
  },
  98,
);
