__d(
  "CometNavigationTracing",
  [
    "ix",
    "BootloaderEvents",
    "CometAddInlineTiming",
    "CometCurrentInitialLoadVC",
    "CometEventTimings",
    "CometInteractionTracingConfig",
    "CometNavigationTracingQPLEvents",
    "CometOfflineTracing",
    "Env",
    "ExecutionEnvironment",
    "FBLogger",
    "InteractionTracingMetrics",
    "NavigationTracing",
    "Network",
    "QuickMarkersComet",
    "SiteData",
    "WebStorageEstimator",
    "WorkPWAUtil",
    "__getModuleTimeDetails",
    "cr:719780",
    "gkx",
    "ifRequired",
    "performance",
    "performanceNow",
    "promiseDone",
    "qplAnnotationsIntServerJS",
    "qplAnnotationsStringServerJS",
    "uuidv4",
    "vc-tracker",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c,
      d,
      m = r("gkx")("7024");
    function p(e, t) {
      Object.keys(t).forEach(function (n) {
        t[n].forEach(function (t) {
          r("InteractionTracingMetrics").addImagePreloader(e, t.name, {
            end: t.responseEnd,
            playloadName: n,
            requestStart: t.requestStart,
            start: t.startTime,
          });
        });
      });
    }
    function _(t) {
      var n = {};
      if ((e || (e = r("ExecutionEnvironment"))).canUseDOM)
        for (
          var o = new Set(),
            a = document.querySelectorAll(
              "link[rel=preload][as=image][data-preloader]",
            ),
            i = 0;
          i < a.length;
          i++
        ) {
          var l = a[i],
            s = l.getAttribute("href");
          if (s != null) {
            var u = r("vc-tracker").trimHash(s);
            if (!t.has(u) || o.has(u)) continue;
            o.add(u);
            var c = l.dataset.preloader,
              d = t.get(u);
            d != null && (c in n ? n[c].push(d) : (n[c] = [d]));
          }
        }
      return n;
    }
    function f(e) {
      var t = _(o("CometAddInlineTiming").getResourceTimingMap());
      t !== void 0 && p(e, t);
    }
    var g = {
      Emoji: "emoji",
      PredictedSpritable: "predictedSpritable",
      PredictedUnspritable: "predictedUnspritable",
      Scontent: "scontent",
      Spritable: "spritable",
      UnpredictedSpritable: "unpredictedSpritable",
      UnpredictedUnspritable: "unpredictedUnspritable",
      Unspritable: "unspritable",
    };
    function h(e) {
      if (typeof (u || (u = r("performance"))).getEntriesByType != "function")
        return {};
      var t = s.getAllPaths(),
        n = Object.values(g).reduce(function (e, t) {
          return (
            (e[t] = {
              cacheCount: 0,
              cacheRate: 0,
              decodedBodySize: 0,
              encodedBodySize: 0,
              totalCount: 0,
              transferSize: 0,
            }),
            e
          );
        }, {});
      function o(e, t) {
        var r = t.decodedBodySize,
          o = t.encodedBodySize,
          a = t.transferSize;
        ((n[e].totalCount += 1),
          (n[e].transferSize += a),
          (n[e].encodedBodySize += o),
          (n[e].decodedBodySize += r),
          (n[e].cacheCount += a === 0 ? 1 : 0));
      }
      var a = (u || (u = r("performance")))
        .getEntriesByType("resource")
        .filter(function (t) {
          return e == null ? !0 : t.startTime >= e;
        });
      return (
        a.forEach(function (e) {
          if (!(e.name.contains(".js") || e.name.contains(".css")))
            if (e.name.contains("rsrc") && e.name.contains(".png")) {
              var n = null;
              (t.has(e.name) ? (n = g.Spritable) : (n = g.Unspritable),
                o(n, e),
                e.initiator === "link"
                  ? o(
                      n === g.Spritable
                        ? g.PredictedSpritable
                        : g.PredictedUnspritable,
                      e,
                    )
                  : o(
                      n === g.Spritable
                        ? g.UnpredictedSpritable
                        : g.UnpredictedUnspritable,
                      e,
                    ));
            } else
              e.name.contains("emoji") && e.name.contains(".png")
                ? o(g.Emoji, e)
                : e.name.contains("scontent") &&
                  !e.name.contains(".kf") &&
                  o(g.Scontent, e);
        }),
        n
      );
    }
    function y(e, t) {
      var n = h(t),
        o = function (o) {
          var t = n[o];
          (t.totalCount > 0 &&
            (t.cacheRate = Math.round((t.cacheCount / t.totalCount) * 100)),
            Object.keys(t).forEach(function (n) {
              r("InteractionTracingMetrics").addMetadata(
                e,
                o + "_img_" + n,
                t[n],
              );
            }));
        };
      for (var a in n) o(a);
    }
    function C(e, t) {
      var n = r("__getModuleTimeDetails")(),
        o = [];
      if (
        (Object.keys(n).map(function (e) {
          var r = n[e];
          r.factoryStart && r.factoryEnd && r.factoryEnd < t && o.push(r);
        }),
        o.length !== 0)
      ) {
        o.sort(function (e, t) {
          return e.factoryStart - t.factoryStart;
        });
        var a = null,
          i = 0;
        (o.forEach(function (t) {
          (a == null || a.factoryEnd < t.factoryStart) &&
            ((a = t),
            (i += t.factoryEnd - t.factoryStart),
            r("InteractionTracingMetrics").addFactoryTiming(e, {
              end: t.factoryEnd,
              name: t.id,
              start: t.factoryStart,
            }));
        }),
          r("InteractionTracingMetrics").addSubspan(
            e,
            "factoriesPriorToTrace",
            "JSFactories",
            o[0].factoryStart,
            o[o.length - 1].factoryEnd,
            { totalTime: i },
          ));
      }
    }
    function b(e, t) {
      var n = r("qplAnnotationsIntServerJS")();
      if (n != null) {
        var o = n[t + "-server"];
        (o == null ? void 0 : o.hadSSRError) === 1 &&
          r("InteractionTracingMetrics").addAnnotationBoolean(
            e,
            "hadSSRError",
            !0,
          );
      }
    }
    function v(e, t) {
      var n = r("qplAnnotationsStringServerJS")();
      if (n != null) {
        var o = n[t + "-server"];
        o &&
          Object.keys(o).forEach(function (t) {
            var n = o[t];
            r("InteractionTracingMetrics").addAnnotation(e, "server_" + t, n);
          });
      }
    }
    function S(e) {
      if (typeof (u || (u = r("performance"))).getEntriesByType == "function") {
        var t = (u || (u = r("performance"))).getEntriesByType("navigation")[0];
        if (t != null) {
          var n = t.serverTiming;
          if (n != null)
            for (var o of n)
              o.name.startsWith("slb_") &&
                r("InteractionTracingMetrics").addAnnotationInt(
                  e,
                  o.name,
                  Math.round(o.duration),
                );
        }
      }
    }
    function R(e, t) {
      e == null &&
        r("FBLogger")("comet_infra", "qpl_initial_load_undefined").info(
          "No INITIAL_LOAD QPL event set for trace policy '%s'. Falling back to default.",
          t,
        );
    }
    function L(t, a, i, l, s, u, p, _, g) {
      var h = (c || (c = r("performanceNow")))();
      n("cr:719780") && n("cr:719780").init(a);
      var y =
        u != null ? u : r("CometNavigationTracingQPLEvents").initialLoadClient;
      (o("QuickMarkersComet").mark("NavigationTracingStart"),
        R(u, i != null ? i : ""),
        o("NavigationTracing").traceInitialLoad(
          {
            VCConfigOverride: _,
            cfg: p,
            instanceIdentifier: l,
            interactionClass: "contingent",
            interactionID: t,
            qplEvent: y,
            startTime: 0,
            tracePolicy: i,
            traceStartTime: h,
            traceType: "INITIAL_LOAD",
            tracingConfig: o("CometInteractionTracingConfig").tracingConfig,
          },
          function (i) {
            (o("QuickMarkersComet").mark("InteractionTracingStart"),
              i.onCompleteSync(function () {
                o("QuickMarkersComet").mark("InteractionTracingComplete");
              }));
            var l = (d || (d = r("Env"))).brsid;
            (l != null && i.addAnnotation("brsid", "" + l),
              (e || (e = r("ExecutionEnvironment"))).canUseDOM &&
                (i.addAnnotation("host", window.location.hostname),
                navigator.storage != null &&
                  typeof navigator.storage.estimate == "function" &&
                  r("promiseDone")(
                    o("WebStorageEstimator")
                      .estimateStorage()
                      .then(function (e) {
                        ((e == null ? void 0 : e.quota) != null &&
                          i.addAnnotationInt("storageQuota", e.quota),
                          (e == null ? void 0 : e.usage) != null &&
                            i.addAnnotationInt("storageUsage", e.usage));
                      }),
                  )),
              i.onComplete(function (l) {
                var s;
                if (
                  (o("QuickMarkersComet").mark("InitialLoadComplete"),
                  f(t),
                  o("CometAddInlineTiming").addInlineTiming(t, a, 0),
                  r("Network").containsNetworkInformation())
                ) {
                  var u = r("Network").getRTT();
                  u != null && i.addAnnotationInt("network_RTT", u);
                  var c = r("Network").getEffectiveType();
                  c != null &&
                    i.addAnnotation(
                      "network_connectivityEffectiveType",
                      String(c),
                    );
                  var d = r("Network").getBandwidth();
                  d != null && i.addAnnotationInt("network_bandwidth", d);
                  var p = r("Network").getType();
                  p != null &&
                    i.addAnnotation("network_connectivityType", String(p));
                }
                ((e || (e = r("ExecutionEnvironment"))).canUseDOM &&
                  window.navigator &&
                  window.navigator.hardwareConcurrency &&
                  i.addAnnotationInt(
                    "hardwareConcurrency",
                    window.navigator.hardwareConcurrency,
                  ),
                  o("CometAddInlineTiming").addServerAnnotationsInt(t, a),
                  b(t, a),
                  v(t, a),
                  S(t),
                  o("CometAddInlineTiming").addServerTags(t),
                  r("gkx")("23406") && C(t, h),
                  r("InteractionTracingMetrics").addMetadata(
                    t,
                    "pkg_cohort",
                    r("SiteData").pkg_cohort,
                  ),
                  r("InteractionTracingMetrics").addMetadata(
                    t,
                    "comet_env",
                    r("SiteData").comet_env,
                  ),
                  g != null &&
                    r("InteractionTracingMetrics").addMetadata(
                      t,
                      "canonical_route",
                      g,
                    ),
                  o("WorkPWAUtil").isBrowserPWA() &&
                    r("InteractionTracingMetrics").addMetadata(t, "is_pwa", !0),
                  i.addMetadata("is_mobile", r("gkx")("22968")),
                  n("cr:719780") && n("cr:719780").log(),
                  m && E(t),
                  o("CometCurrentInitialLoadVC").setInitialLoadVC(
                    (s = l.markerPoints.visuallyComplete) == null
                      ? void 0
                      : s.timestamp,
                  ),
                  i.addAnnotationInt(
                    o("CometOfflineTracing").OFFLINE_NETWORK_STATUS_ANNOTATION,
                    o("CometOfflineTracing").getOfflineCount(),
                  ),
                  r("ifRequired")("CometBTManifestLoader", function (e) {
                    i.addAnnotationBoolean(
                      "longtail_needed",
                      o(
                        "BootloaderEvents",
                      ).getHasDetectedResourceInLongTailBTManifest(),
                    );
                  }));
              }),
              s(i));
          },
        ));
    }
    function E(e, t) {
      (r("InteractionTracingMetrics").addMetadata(
        e,
        "hasExtraResourceMetadata",
        1,
      ),
        y(e, t));
    }
    function k(e, t, n, a, i, l, s, u) {
      var c;
      i === void 0 && (i = r("uuidv4")());
      var p = o("CometEventTimings").getCurrentQueueTime(n),
        _ = p[0],
        f = p[1];
      o("NavigationTracing").traceNavigation(
        {
          VCConfigOverride: s,
          eventQueueTime: f,
          interactionClass: "responsive",
          interactionID: i,
          namespace: u,
          qplEvent: l,
          startTime: _,
          tracePolicy:
            (c = t == null ? void 0 : t.tracePolicy) != null ? c : null,
          traceType: "NAVIGATION",
          tracingConfig: o("CometInteractionTracingConfig").tracingConfig,
        },
        function (e) {
          (e.onComplete(function () {
            var n = (d || (d = r("Env"))).brsid;
            (n != null && e.addAnnotation("brsid", "" + n),
              m && E(i, _),
              o("CometAddInlineTiming").addServerTags(i),
              e.addMetadata("is_mobile", r("gkx")("22968")),
              o("WorkPWAUtil").isBrowserPWA() && e.addMetadata("is_pwa", !0),
              (t == null ? void 0 : t.canonicalRouteName) != null &&
                e.addMetadata(
                  "canonical_route",
                  t == null ? void 0 : t.canonicalRouteName,
                ),
              e.addAnnotationInt(
                o("CometOfflineTracing").OFFLINE_NETWORK_STATUS_ANNOTATION,
                o("CometOfflineTracing").getOfflineCount(),
              ));
          }),
            a(e));
        },
      );
    }
    ((l.addSlbServerTimingAnnotations = S),
      (l.traceInitialLoad = L),
      (l.traceNavigation = k));
  },
  98,
);
