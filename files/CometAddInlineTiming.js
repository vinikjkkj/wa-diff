__d(
  "CometAddInlineTiming",
  [
    "CometQPLPayloadStore",
    "InteractionTracingMetrics",
    "performance",
    "performanceNavigationStart",
    "qplAnnotationsIntServerJS",
    "qplTagServerJS",
    "qplTimingsServerJS",
    "vc-tracker",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = r("performanceNavigationStart")(),
      u = null;
    function c() {
      if (u != null) return u;
      var t = new Map();
      if (typeof (e || (e = r("performance"))).getEntriesByType == "function") {
        var n = (e || (e = r("performance"))).getEntriesByType("resource");
        n.forEach(function (e) {
          var n = r("vc-tracker").trimHash(e.name);
          t.set(n, e);
        });
      }
      return ((u = t), u);
    }
    function d(e) {
      var t,
        n = (t = window) != null ? t : self,
        o =
          n &&
          n._qplInl &&
          typeof n._qplInl == "object" &&
          n._qplInl.getPoints &&
          typeof n._qplInl.getPoints == "function";
      if (o) {
        var a = n._qplInl.getPoints().client;
        a &&
          Object.keys(a).forEach(function (t) {
            r("qplTimingsServerJS")(e, t, a[t]);
          });
      }
    }
    function m(t, n, a, i) {
      (i === void 0 && (i = ""), d(n));
      var l = c(),
        u = r("qplTimingsServerJS")();
      if (u != null) {
        var m = u[n],
          _ = o("CometQPLPayloadStore").getPayloadBytesSent(),
          f = 0,
          g = 0,
          h,
          y =
            typeof (e || (e = r("performance"))).getEntriesByType == "function"
              ? (e || (e = r("performance"))).getEntriesByType("navigation")
              : null;
        if (m) {
          var C = {};
          if (
            (Object.keys(m).forEach(function (e) {
              var n = m[e] - s,
                o = {};
              if (_ && _[e]) {
                var l = _[e],
                  u = l[0],
                  c = l[1];
                (u != null && ((o.bytes = u), (f += u)),
                  c != null && ((o.bytesCompressed = c), (g += c)));
              }
              e.indexOf("ssr_") === 0
                ? r("InteractionTracingMetrics").addMarkerPoint(
                    t,
                    i + e,
                    "AppTiming",
                    n,
                    o,
                  )
                : ((C[e] = {
                    data: o,
                    end: n,
                    payloadType:
                      e.indexOf("adp_") === 0 ? "RelayPreloader" : "TierFlush",
                    pkgStat: {
                      css: {
                        cacheCount: 0,
                        cacheRate: 0,
                        decodedBodySize: 0,
                        encodedBodySize: 0,
                        totalCount: 0,
                        transferSize: 0,
                      },
                      js: {
                        cacheCount: 0,
                        cacheRate: 0,
                        decodedBodySize: 0,
                        encodedBodySize: 0,
                        totalCount: 0,
                        transferSize: 0,
                      },
                    },
                    points: { InlineInit: n },
                    start: a,
                  }),
                  (h == null || h.start < n) && (h = C[e]));
            }),
            y && y[0])
          ) {
            var b = y[0],
              v = b.decodedBodySize,
              S = b.encodedBodySize,
              R = b.transferSize;
            (r("InteractionTracingMetrics").addMetadata(
              t,
              i + "encodedBodySize",
              S,
            ),
              r("InteractionTracingMetrics").addMetadata(
                t,
                i + "decodedBodySize",
                v,
              ),
              r("InteractionTracingMetrics").addMetadata(
                t,
                i + "transferSize",
                R,
              ),
              h != null &&
                h.data.bytes == null &&
                ((h.data.bytes = v - f), (h.data.bytesCompressed = S - g)));
          }
          var L = u[n + "-server"];
          if (L) {
            var E,
              k =
                ((e || (e = r("performance"))) == null
                  ? void 0
                  : (e || (e = r("performance"))).timing) || {},
              I = s,
              T = (E = L.earlyFlush) != null ? E : L.earlyFlushEnd;
            (k.requestStart &&
              k.responseStart &&
              T &&
              (I = (k.requestStart + k.responseStart - T) / 2),
              r("InteractionTracingMetrics").addAnnotationDouble(
                t,
                i + "client_startTime_for_offset",
                I,
              ),
              r("InteractionTracingMetrics").addAnnotationDouble(
                t,
                i + "client_nav_start",
                s,
              ),
              r("InteractionTracingMetrics").addAnnotationDouble(
                t,
                i + "navTiming_requestStart",
                k.requestStart,
              ),
              r("InteractionTracingMetrics").addAnnotationDouble(
                t,
                i + "navTiming_responseStart",
                k.responseStart,
              ),
              r("InteractionTracingMetrics").addAnnotationDouble(
                t,
                i + "server_earlyFlush_for_offset_raw",
                T,
              ),
              r("InteractionTracingMetrics").addAnnotationDouble(
                t,
                i + "server_requestStart",
                I - s,
              ));
            var D = {};
            (Object.keys(L).forEach(function (e) {
              var n = L[e] + I - s;
              if (e.endsWith("Start")) {
                var o = e.slice(0, -5);
                D[o] != null ? (D[o].start = n) : (D[o] = { start: n });
              } else if (e.endsWith("End")) {
                var a = e.slice(0, -3);
                D[a] != null ? (D[a].end = n) : (D[a] = { end: n });
              } else if (
                (e.startsWith("adp_") && !e.startsWith("adp_thread")) ||
                e.endsWith("Preloader")
              ) {
                var l =
                  L.allPreloadersStart != null
                    ? L.allPreloadersStart + I - s
                    : I - s;
                D[e] = { end: n, start: l };
              } else
                r("InteractionTracingMetrics").addMarkerPoint(
                  t,
                  i + "server_" + e,
                  "ServerTimings",
                  n,
                );
              C[e] && (C[e].points.ServerFlush = n);
            }),
              Object.keys(D).forEach(function (e) {
                var n = D[e],
                  o = n.end,
                  a = n.start;
                o != null && a != null
                  ? r("InteractionTracingMetrics").addSubspan(
                      t,
                      i + "server_" + e,
                      "ServerTimings",
                      a,
                      o,
                      {},
                    )
                  : o == null
                    ? r("InteractionTracingMetrics").addMarkerPoint(
                        t,
                        i + "server_" + e + "Start",
                        "ServerTimings",
                        a,
                      )
                    : a == null &&
                      r("InteractionTracingMetrics").addMarkerPoint(
                        t,
                        i + "server_" + e + "End",
                        "ServerTimings",
                        o,
                      );
              }));
          }
          p(t, n, C, l);
        }
      }
    }
    function p(e, t, n, a) {
      var i = o("CometQPLPayloadStore").getPayloadMap();
      if (!(i == null || i[t] == null)) {
        var l = {
            css: {
              cacheCount: 0,
              cacheRate: 0,
              decodedBodySize: 0,
              encodedBodySize: 0,
              totalCount: 0,
              transferSize: 0,
            },
            js: {
              cacheCount: 0,
              cacheRate: 0,
              decodedBodySize: 0,
              encodedBodySize: 0,
              totalCount: 0,
              transferSize: 0,
            },
          },
          s = i[t];
        (Object.keys(s).forEach(function (t) {
          var o,
            i = s[t].refs,
            u = r("vc-tracker").trimHash(s[t].url),
            c = a.get(u);
          if (c) {
            var d = ((o = /\.(js|css)(\?|$)/.exec(u)) != null ? o : [])[1];
            d &&
              ((l[d].decodedBodySize += c.decodedBodySize),
              (l[d].encodedBodySize += c.encodedBodySize),
              (l[d].transferSize += c.transferSize),
              l[d].totalCount++,
              c.transferSize === 0 && l[d].cacheCount++);
            var m = {
              duration: c.responseEnd - c.requestStart,
              end: c.responseEnd,
              initiator: i[0],
              refs: i,
              requestStart: c.requestStart,
              start: c.startTime,
              transferSize: c.transferSize,
              url: u,
            };
            if (
              (i.forEach(function (e) {
                n[e] &&
                  (n[m.initiator] &&
                    n[e].points.InlineInit < n[m.initiator].points.InlineInit &&
                    (m.initiator = e),
                  (typeof n[e].points.ResourceDone != "number" ||
                    n[e].points.ResourceDone < m.end) &&
                    ((n[e].points.LastResourceStart = m.start),
                    (n[e].points.ResourceDone = m.end)));
              }),
              n[m.initiator] &&
                (typeof n[m.initiator].points.DownloadStart != "number" ||
                  n[m.initiator].points.DownloadStart > m.start) &&
                (n[m.initiator].points.DownloadStart = m.start),
              r("InteractionTracingMetrics").addPayloadResource(e, t, m),
              d && n[m.initiator])
            ) {
              var p = n[m.initiator].pkgStat[d];
              ((p.encodedBodySize += c.encodedBodySize),
                (p.transferSize += c.transferSize),
                p.totalCount++,
                c.transferSize === 0 && p.cacheCount++);
            }
          }
        }),
          Object.keys(n).forEach(function (t) {
            (Object.keys(n[t].points).forEach(function (o) {
              ((n[t].end = Math.max(n[t].end, n[t].points[o])),
                o !== "ServerFlush" &&
                  r("InteractionTracingMetrics").addMarkerPoint(
                    e,
                    t + "_" + o,
                    n[t].payloadType,
                    n[t].points[o],
                    o === "InlineInit" ? n[t].data : {},
                  ));
            }),
              r("InteractionTracingMetrics").addPayloadTiming(e, t, n[t]));
          }));
        for (var u in l) {
          var c = l[u];
          c.totalCount > 0 &&
            (c.cacheRate = Math.round((c.cacheCount / c.totalCount) * 100));
          for (var d in c)
            r("InteractionTracingMetrics").addMetadata(
              e,
              "pageload_" + u + "_" + d,
              c[d],
            );
        }
      }
    }
    function _(e) {
      var t = r("qplTagServerJS")();
      t &&
        t.length &&
        t.forEach(function (t) {
          t &&
            t.length &&
            t.forEach(function (t) {
              r("InteractionTracingMetrics").addTag(e, "CometTags", t);
            });
        });
    }
    function f(e, t) {
      var n = r("qplAnnotationsIntServerJS")();
      if (n != null) {
        var o = n[t + "-server"];
        o &&
          Object.keys(o).forEach(function (t) {
            var n = o[t];
            r("InteractionTracingMetrics").addAnnotationInt(
              e,
              "server_" + t,
              n,
            );
          });
      }
    }
    ((l.getResourceTimingMap = c),
      (l.addInlineTiming = m),
      (l.addServerTags = _),
      (l.addServerAnnotationsInt = f));
  },
  98,
);
