__d(
  "AdsPerfInteractionAddSpansUtil",
  [
    "AdsMgmtPreloaderLoggerUtils",
    "AdsMgmtStartupLogger",
    "InteractionTracingMetrics",
    "concatArrays",
    "performance",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e) {
      return e.replace(/\d{2,}/g, "{ID}");
    }
    function u(e, t) {
      var n = e.eventType,
        r = e.start;
      return {
        eventType: n != null ? n : "unknown",
        entryPointStartBeforeInteractionStart: t - r,
      };
    }
    function c(e, t) {
      return e + ":" + t;
    }
    function d(e, t, n, o, a) {
      var i,
        l = n.defaultAnnotations,
        u = n.spanEnd,
        c = n.spanStart,
        d = l.eventType,
        p = e.consumers,
        _ = e.request,
        f = e.resultStatus,
        g = _.method,
        h = _.name,
        y = _.params,
        C = _.path,
        b = _.source,
        v = b != null ? b + " " : "",
        S = s(h),
        R = "[Preloader] [" + d + "] " + v + S,
        L =
          y instanceof FormData
            ? []
            : (i = y == null ? void 0 : y.fields) != null
              ? i
              : [],
        E = {
          path: C,
          fields: L,
          method: g,
          resultStatus: f != null ? f : "unknown",
          consumers: p != null ? p : [],
        };
      (r("InteractionTracingMetrics").addSubspan(
        t,
        R,
        "AdsEntryPoints",
        c,
        u,
        babelHelpers.extends({}, l, E),
      ),
        m(a, { eventType: d, queryKey: o }));
    }
    function m(e, t) {
      var n = t.eventType,
        r = t.queryKey;
      e.forEach(function (e) {
        var t = e.data;
        t.is_preloaded === !0 && t.query_key === r && (t.eventType = "AP_" + n);
      });
    }
    function p(e, t, n) {
      var o = n.defaultAnnotations,
        a = n.spanEnd,
        i = n.spanStart,
        l = e.moduleId,
        s = "[Bootload] [" + o.eventType + "] " + l;
      r("InteractionTracingMetrics").addSubspan(
        t,
        s,
        "AdsEntryPoints",
        i,
        a,
        babelHelpers.extends({}, o),
      );
    }
    function _(e, t) {
      var n = r("InteractionTracingMetrics").get(e);
      if (n) {
        var o = n.start,
          a = n.subSpans,
          i = r("concatArrays")(
            Object.values(a).filter(function (e) {
              return e.every(function (e) {
                var t = e.type;
                return t === "GraphAPI";
              });
            }),
          );
        Object.keys(t).forEach(function (n) {
          var r = t[n],
            a = r.end,
            l = r.start,
            s = a != null ? a : l;
          if (!(s < o)) {
            var c = {
              spanStart: Math.max(l, o),
              spanEnd: s,
              defaultAnnotations: u(r, o),
            };
            switch (r.type) {
              case "Preload": {
                d(r, e, c, n, i);
                break;
              }
              case "Bootload":
                p(r, e, c);
            }
          }
        });
      }
    }
    function f(e) {
      var t = o("AdsMgmtStartupLogger").getLoomServerData(e);
      t != null &&
        Object.keys(t).forEach(function (n) {
          var a = t[n],
            i = a.end,
            l = a.start,
            s = a.subspanType;
          (l != null &&
            r("InteractionTracingMetrics").addSubspan(
              e,
              i != null ? n : n + "_START",
              s,
              l != null ? l : 0,
              i != null ? i : l,
              { source: "server data" },
            ),
            o("AdsMgmtStartupLogger").addAnnotationsToTrace(e));
        });
    }
    function g(e) {
      var t = function () {
        var t = n.int,
          o = n.marker,
          a = n.point,
          i = n.string,
          l = n.stringArray,
          s = {};
        (Object.keys(i).forEach(function (e) {
          s[e] = i[e];
        }),
          Object.keys(t).forEach(function (e) {
            s[e] = t[e];
          }),
          Object.keys(a).forEach(function (e) {
            s[e] = a[e];
          }),
          l &&
            Object.keys(l).forEach(function (e) {
              s[e] = l[e];
            }),
          r("InteractionTracingMetrics").addSubspan(
            e,
            "[" + i.eventType + "] " + i.preloader + " " + i.requestSource,
            "AdsPreloaderEvent",
            o.start,
            o.start,
            s,
          ));
      };
      for (var n of o("AdsMgmtPreloaderLoggerUtils").getPreloaderDataToLog(
        "interaction_tracing",
      ))
        t();
    }
    function h(t) {
      var n = 0,
        o = 0;
      ((e || (e = r("performance"))) != null &&
        typeof (e || (e = r("performance"))).getEntriesByType == "function" &&
        (e || (e = r("performance")))
          .getEntriesByType("resource")
          .forEach(function (e) {
            ((n += e.transferSize), (o += e.encodedBodySize));
          }),
        r("InteractionTracingMetrics").addAnnotationInt(
          t,
          "total_transfer_size_bytes",
          n,
        ),
        r("InteractionTracingMetrics").addAnnotationInt(
          t,
          "total_encoded_body_size_bytes",
          o,
        ));
    }
    var y = '{"require":[["Bootloader","handlePayload"';
    function C(e) {
      var t = 0,
        n = document.querySelectorAll("script[data-content-len][data-sjs]");
      (n.forEach(function (e) {
        var n,
          r = (n = e.textContent) != null ? n : "";
        if (r.startsWith(y)) {
          var o = e.getAttribute("data-content-len");
          if (o != null) {
            var a = parseInt(o, 10);
            isNaN(a) || (t += a);
          }
        }
      }),
        r("InteractionTracingMetrics").addAnnotationInt(
          e,
          "bootloader_payload_html_bytes",
          t,
        ));
    }
    function b(e) {
      var t = e.indexOf("?"),
        n = t === -1 ? e : e.substring(0, t);
      return (
        n.substring(n.lastIndexOf(".") + 1) === "js" &&
        !n.includes("rsrc-translations.php")
      );
    }
    function v(e, t) {
      return t === 0
        ? e > 0
          ? "hit"
          : "opaque"
        : t < e
          ? "revalidated"
          : "miss";
    }
    function S(t) {
      if (
        !(
          (e || (e = r("performance"))) == null ||
          typeof (e || (e = r("performance"))).getEntriesByType != "function"
        )
      ) {
        var n = {
          hitCount: 0,
          missBytes: 0,
          missCount: 0,
          opaqueCount: 0,
          revalidatedBytes: 0,
          revalidatedCount: 0,
          swCount: 0,
          totalCount: 0,
        };
        ((e || (e = r("performance")))
          .getEntriesByType("resource")
          .forEach(function (e) {
            if (b(e.name)) {
              var t = e.encodedBodySize,
                r = e.transferSize,
                o = e.workerStart;
              (n.totalCount++, o > 0 && n.swCount++);
              e: {
                var a = v(t, r);
                if (a === "hit") {
                  n.hitCount++;
                  break e;
                }
                if (a === "opaque") {
                  n.opaqueCount++;
                  break e;
                }
                if (a === "revalidated") {
                  (n.revalidatedCount++, (n.revalidatedBytes += r));
                  break e;
                }
                if (a === "miss") {
                  (n.missCount++, (n.missBytes += r));
                  break e;
                }
                throw Error(
                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                    a,
                );
              }
            }
          }),
          r("InteractionTracingMetrics").addAnnotationInt(
            t,
            "js_rt_total_count",
            n.totalCount,
          ),
          r("InteractionTracingMetrics").addAnnotationInt(
            t,
            "js_rt_hit_count",
            n.hitCount,
          ),
          r("InteractionTracingMetrics").addAnnotationInt(
            t,
            "js_rt_opaque_count",
            n.opaqueCount,
          ),
          r("InteractionTracingMetrics").addAnnotationInt(
            t,
            "js_rt_revalidated_count",
            n.revalidatedCount,
          ),
          r("InteractionTracingMetrics").addAnnotationInt(
            t,
            "js_rt_miss_count",
            n.missCount,
          ),
          r("InteractionTracingMetrics").addAnnotationInt(
            t,
            "js_rt_sw_count",
            n.swCount,
          ),
          r("InteractionTracingMetrics").addAnnotationInt(
            t,
            "js_rt_revalidated_bytes",
            n.revalidatedBytes,
          ),
          r("InteractionTracingMetrics").addAnnotationInt(
            t,
            "js_rt_miss_bytes",
            n.missBytes,
          ));
      }
    }
    ((l.replaceIDsInSpanName = s),
      (l.getCallName = c),
      (l.addEntryPointDataToTrace = _),
      (l.addServerDataToTrace = f),
      (l.addPreloaderEventsToTrace = g),
      (l.addTotalSizesDownloadedDuringLoad = h),
      (l.addBootloaderPayloadHTMLBytesToTrace = C),
      (l.isJSResource = b),
      (l.getJSResourceCacheOutcome = v),
      (l.addJSResourceCacheOutcomesToTrace = S));
  },
  98,
);
