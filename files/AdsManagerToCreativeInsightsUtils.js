__d(
  "AdsManagerToCreativeInsightsUtils",
  [
    "fbt",
    "AdsInsightsColumns",
    "AdsInsightsField",
    "AdsInsightsTableFormatter",
    "AdsManagerToCreativeInsightsPeerBenchmarkConfig",
    "AdsManagerToCreativeInsightsPeerBenchmarkTooltip.react",
    "AdsReportingCreativeInsightsUtils",
    "GeoBaseText.react",
    "GeoHeading.react",
    "GeoLink.react",
    "GeoText.react",
    "intlNumUtils",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = o("AdsInsightsColumns").makeActionID(
        "video_play_actions",
        "video_view",
      ),
      d = o("AdsInsightsColumns").makeActionID(
        "video_avg_time_watched_actions",
        "video_view",
      ),
      m = o("AdsInsightsColumns").makeActionID(
        "video_p25_watched_actions",
        "video_view",
      ),
      p = o("AdsInsightsColumns").makeActionID(
        "video_p50_watched_actions",
        "video_view",
      ),
      _ = o("AdsInsightsColumns").makeActionID(
        "video_p75_watched_actions",
        "video_view",
      ),
      f = o("AdsInsightsColumns").makeActionID(
        "video_p95_watched_actions",
        "video_view",
      ),
      g = o("AdsInsightsColumns").makeActionID(
        "video_p100_watched_actions",
        "video_view",
      ),
      h = o("AdsInsightsColumns").makeActionID(
        "video_view_per_impression",
        "video_view",
      ),
      y = o("AdsInsightsColumns").makeActionID("video_hold_rate", "video_view"),
      C = [c, d],
      b = [m, p, _, f],
      v = o("AdsInsightsColumns").makeActionID(
        "video_play_retention_curve_actions",
        "video_view",
      ),
      S = [].concat(C, b, [g, v]);
    function R() {
      var e = [].concat(S);
      return (
        o(
          "AdsReportingCreativeInsightsUtils",
        ).isVideoCtrAllocatedWithoutExposure()
          ? e.push(
              h,
              y,
              o("AdsManagerToCreativeInsightsPeerBenchmarkConfig")
                .METRICS_BENCHMARK_HOOK_RATE,
              o("AdsManagerToCreativeInsightsPeerBenchmarkConfig")
                .METRICS_BENCHMARK_HOLD_RATE,
              r("AdsInsightsField").VIDEO_CTR_BY_SECOND,
            )
          : o(
              "AdsReportingCreativeInsightsUtils",
            ).shouldShowHookAndHoldRateMetrics() && e.push(h, y),
        e
      );
    }
    function L(e) {
      var t = e;
      if (typeof t == "string")
        try {
          t = JSON.parse(t);
        } catch (e) {
          return [];
        }
      if (!Array.isArray(t)) return [];
      var n = [];
      for (var r of t)
        if (typeof r == "string") {
          var o = null,
            a = null;
          for (var i of r.split(",")) {
            var l = i.indexOf("=");
            if (!(l < 0)) {
              var s = i.slice(0, l),
                u = Number(i.slice(l + 1));
              s === "second" ? (o = u) : s === "ctr" && (a = u);
            }
          }
          o != null &&
            a != null &&
            Number.isFinite(o) &&
            Number.isFinite(a) &&
            n.push({ ctr: a, second: o });
        }
      return n.sort(function (e, t) {
        return e.second - t.second;
      });
    }
    function E(e) {
      return (
        r("intlNumUtils").formatNumberWithThousandDelimiters(e * 100, 4) + "%"
      );
    }
    var k = 0.25;
    function I(e) {
      var t = 0;
      for (var n of e.values()) n > 0 && t++;
      return t;
    }
    function T(e, t) {
      return t <= 0 ? !0 : e / t < k;
    }
    function D(e) {
      switch (e) {
        case c:
          return s._(/*BTDS*/ "");
        case d:
          return s._(/*BTDS*/ "");
        case m:
          return s._(/*BTDS*/ "");
        case p:
          return s._(/*BTDS*/ "");
        case _:
          return s._(/*BTDS*/ "");
        case f:
          return s._(/*BTDS*/ "");
        default:
          return "";
      }
    }
    function x(e) {
      return e === "video_hook_rate"
        ? s._(/*BTDS*/ "")
        : e === "video_hold_rate"
          ? s._(/*BTDS*/ "")
          : "";
    }
    function $(e) {
      var t = e[v],
        n = 3,
        r =
          Array.isArray(t) && (t == null ? void 0 : t[n]) != null
            ? Number(t[n])
            : null;
      return r;
    }
    function P(e) {
      var t = "video_hook_rate",
        n = x(t),
        a = {
          benchmark:
            e[
              o("AdsManagerToCreativeInsightsPeerBenchmarkConfig")
                .METRICS_BENCHMARK_HOOK_RATE
            ],
          calculation: s._(/*BTDS*/ ""),
          description: s._(/*BTDS*/ ""),
        },
        i = e[h],
        l = o(
          "AdsManagerToCreativeInsightsPeerBenchmarkConfig",
        ).parsePeerBenchmarkMedian(
          e[
            o("AdsManagerToCreativeInsightsPeerBenchmarkConfig")
              .METRICS_BENCHMARK_HOOK_RATE
          ],
        );
      if (i != null)
        return {
          key: t,
          title: n,
          subtitle: u.jsx(
            r("AdsManagerToCreativeInsightsPeerBenchmarkTooltip.react"),
            babelHelpers.extends({}, a, { actualRatio: Number(i) }),
          ),
          value: Number(i),
          benchmarkDeltaPercent: o(
            "AdsManagerToCreativeInsightsPeerBenchmarkConfig",
          ).getPeerDeltaPercent(Number(i), l),
          formattedValue: M(h, e),
        };
      var c = $(e);
      return {
        key: t,
        title: n,
        subtitle: u.jsx(
          r("AdsManagerToCreativeInsightsPeerBenchmarkTooltip.react"),
          babelHelpers.extends({}, a, {
            actualRatio: c != null ? c / 100 : null,
          }),
        ),
        value: c,
        benchmarkDeltaPercent: o(
          "AdsManagerToCreativeInsightsPeerBenchmarkConfig",
        ).getPeerDeltaPercent(c != null ? c / 100 : null, l),
        formattedValue:
          c != null ? s._(/*BTDS*/ "", [s._param("hook_rate", c)]) : null,
      };
    }
    function N(e) {
      var t = "video_hold_rate",
        n = x(t),
        a = {
          benchmark:
            e[
              o("AdsManagerToCreativeInsightsPeerBenchmarkConfig")
                .METRICS_BENCHMARK_HOLD_RATE
            ],
          calculation: s._(/*BTDS*/ ""),
          description: s._(/*BTDS*/ ""),
        },
        i = e[y],
        l = o(
          "AdsManagerToCreativeInsightsPeerBenchmarkConfig",
        ).parsePeerBenchmarkMedian(
          e[
            o("AdsManagerToCreativeInsightsPeerBenchmarkConfig")
              .METRICS_BENCHMARK_HOLD_RATE
          ],
        );
      if (i != null)
        return {
          key: t,
          title: n,
          subtitle: u.jsx(
            r("AdsManagerToCreativeInsightsPeerBenchmarkTooltip.react"),
            babelHelpers.extends({}, a, { actualRatio: Number(i) }),
          ),
          value: Number(i),
          benchmarkDeltaPercent: o(
            "AdsManagerToCreativeInsightsPeerBenchmarkConfig",
          ).getPeerDeltaPercent(Number(i), l),
          formattedValue: M(y, e),
        };
      var d = e[g],
        m = e[c],
        p = $(e),
        _ =
          p != null && m != null
            ? Math.round((Number(m) * Number(p)) / 100)
            : null,
        f = _ != null && _ !== 0 && d != null ? (Number(d) * 100) / _ : null;
      return {
        key: t,
        title: n,
        subtitle: u.jsx(
          r("AdsManagerToCreativeInsightsPeerBenchmarkTooltip.react"),
          babelHelpers.extends({}, a, {
            actualRatio: f != null ? f / 100 : null,
          }),
        ),
        value: f,
        benchmarkDeltaPercent: o(
          "AdsManagerToCreativeInsightsPeerBenchmarkConfig",
        ).getPeerDeltaPercent(f != null ? f / 100 : null, l),
        formattedValue:
          f != null
            ? s._(/*BTDS*/ "", [
                s._param("hold_rate", Math.round(f * 100) / 100),
              ])
            : null,
      };
    }
    function M(e, t) {
      var n = o("AdsInsightsTableFormatter").getFieldFormatter(e),
        r = t[e];
      return r != null
        ? s._(/*BTDS*/ "", [s._param("number", n(r))])
        : String(r);
    }
    function w(e) {
      var t = e.description,
        n = e.inDevelopment,
        o = e.title,
        a = e.url,
        i =
          n === !0
            ? s._(/*BTDS*/ "", [
                s._param(
                  "in-dev link",
                  u.jsx(r("GeoLink.react"), {
                    href: "https://www.facebook.com/business/help/162567804385118",
                    target: "_blank",
                    children: u.jsxs(r("GeoBaseText.react"), {
                      color: "value",
                      size: "value",
                      children: [
                        u.jsx("span", {
                          style: { textDecoration: "underline" },
                          children: "in development",
                        }),
                        ".",
                      ],
                    }),
                  }),
                ),
              ])
            : "",
        l =
          a != null
            ? u.jsx(r("GeoLink.react"), {
                href: a,
                target: "_blank",
                children: s._(/*BTDS*/ ""),
              })
            : "";
      return s._(/*BTDS*/ "", [
        s._param(
          "content title",
          u.jsx(r("GeoHeading.react"), { level: 4, children: o }),
        ),
        s._param(
          "content description",
          u.jsx(r("GeoText.react"), { children: t }),
        ),
        s._implicitParam(
          "=m2",
          u.jsx("div", {
            style: { marginTop: "8px" },
            children: s._(/*BTDS*/ "", [s._param("in-content dev", i)]),
          }),
        ),
        s._implicitParam(
          "=m3",
          u.jsx("div", {
            style: { marginTop: "8px" },
            children: s._(/*BTDS*/ "", [s._param("learn more link", l)]),
          }),
        ),
      ]);
    }
    w.displayName = w.name + " [from " + i.id + "]";
    function A(e) {
      switch (e) {
        case c:
          return "https://www.facebook.com/business/help/592054664510127";
        case d:
          return "https://www.facebook.com/business/help/1794520550789165";
        case m:
          return "https://www.facebook.com/business/help/279891745529019";
        case p:
          return "https://www.facebook.com/business/help/314749525373946";
        case _:
          return "https://www.facebook.com/business/help/737379346320683";
        case f:
          return "https://www.facebook.com/business/help/259313030934362";
        case "video_hook_rate":
          return "https://www.facebook.com/business/help/1591938568393543";
        case "video_hold_rate":
          return "https://www.facebook.com/business/help/1216404939613119";
        default:
          return "";
      }
    }
    function F(e) {
      return s._(/*BTDS*/ "", [s._param("milestone value", e)]);
    }
    F.displayName = F.name + " [from " + i.id + "]";
    function O(e) {
      return s._(/*BTDS*/ "", [s._param("milestone value", e)]);
    }
    O.displayName = O.name + " [from " + i.id + "]";
    function B(e) {
      switch (e) {
        case c:
          return w({
            title: s._(/*BTDS*/ ""),
            description: s._(/*BTDS*/ "", [
              s._param(
                "impression link",
                u.jsx(r("GeoLink.react"), {
                  href: "https://www.facebook.com/business/help/675615482516035",
                  target: "_blank",
                  children: u.jsx(r("GeoBaseText.react"), {
                    color: "value",
                    size: "value",
                    children: u.jsx("span", {
                      style: { textDecoration: "underline" },
                      children: "impression",
                    }),
                  }),
                }),
              ),
            ]),
            url: A(e),
          });
        case d:
          return w({
            title: s._(/*BTDS*/ ""),
            description: s._(/*BTDS*/ "", [
              s._param(
                "impression link",
                u.jsx(r("GeoLink.react"), {
                  href: "https://www.facebook.com/business/help/675615482516035",
                  target: "_blank",
                  children: u.jsx(r("GeoBaseText.react"), {
                    color: "value",
                    size: "value",
                    children: u.jsx("span", {
                      style: { textDecoration: "underline" },
                      children: "impression",
                    }),
                  }),
                }),
              ),
            ]),
            inDevelopment: !0,
            url: A(e),
          });
        case m:
          return w({ title: F(25), description: O(25), url: A(e) });
        case p:
          return w({ title: F(50), description: O(50), url: A(e) });
        case _:
          return w({ title: F(75), description: O(75), url: A(e) });
        case f:
          return w({ title: F(95), description: O(95), url: A(e) });
        default:
          return "";
      }
    }
    ((l.METRICS_TOTAL_VIEW = c),
      (l.METRICS_P100 = g),
      (l.METRICS_HOOK_RATE = h),
      (l.METRICS_HOLD_RATE = y),
      (l.METRICS_CONFIG_TOP = C),
      (l.METRICS_CONFIG_QUARTILE = b),
      (l.METRICS_CONFIG_CHART = v),
      (l.METRICS_CTR_BY_SECOND = r("AdsInsightsField").VIDEO_CTR_BY_SECOND),
      (l.METRICS_CONFIG = S),
      (l.getFetchedMetricsConfig = R),
      (l.parseVideoCtrBySecond = L),
      (l.formatCtrPercent = E),
      (l.countNonZeroCtrPoints = I),
      (l.isVideoCtrCoverageSparse = T),
      (l.getMetricsTitle = D),
      (l.getVideoHookRateMetric = P),
      (l.getVideoHoldRateMetric = N),
      (l.formatMetric = M),
      (l.getMetricURL = A),
      (l.getMetricToolTip = B));
  },
  226,
);
