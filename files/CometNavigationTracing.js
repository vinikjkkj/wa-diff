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
    "justknobx",
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
      d = r("gkx")("7024");
    function m(e, t) {
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
    function p(e) {
      for (
        var t = {},
          n = new Set(),
          o = document.querySelectorAll(
            "link[rel=preload][as=image][data-preloader]",
          ),
          a = 0;
        a < o.length;
        a++
      ) {
        var i = o[a],
          l = i.getAttribute("href");
        if (l != null) {
          var s = r("vc-tracker").trimHash(l);
          if (!e.has(s) || n.has(s)) continue;
          n.add(s);
          var u = i.dataset.preloader,
            c = e.get(s);
          c != null && (u in t ? t[u].push(c) : (t[u] = [c]));
        }
      }
      return t;
    }
    function _(e) {
      var t = p(o("CometAddInlineTiming").getResourceTimingMap());
      t !== void 0 && m(e, t);
    }
    var f = {
      Emoji: "emoji",
      PredictedSpritable: "predictedSpritable",
      PredictedUnspritable: "predictedUnspritable",
      Scontent: "scontent",
      Spritable: "spritable",
      UnpredictedSpritable: "unpredictedSpritable",
      UnpredictedUnspritable: "unpredictedUnspritable",
      Unspritable: "unspritable",
    };
    function g(t) {
      if (typeof (e || (e = r("performance"))).getEntriesByType != "function")
        return {};
      var n = s.getAllPaths(),
        o = Object.values(f).reduce(function (e, t) {
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
      function a(e, t) {
        var n = t.decodedBodySize,
          r = t.encodedBodySize,
          a = t.transferSize;
        ((o[e].totalCount += 1),
          (o[e].transferSize += a),
          (o[e].encodedBodySize += r),
          (o[e].decodedBodySize += n),
          (o[e].cacheCount += a === 0 ? 1 : 0));
      }
      var i = (e || (e = r("performance")))
        .getEntriesByType("resource")
        .filter(function (e) {
          return t == null ? !0 : e.startTime >= t;
        });
      return (
        i.forEach(function (e) {
          if (!(e.name.contains(".js") || e.name.contains(".css")))
            if (e.name.contains("rsrc") && e.name.contains(".png")) {
              var t = null;
              (n.has(e.name) ? (t = f.Spritable) : (t = f.Unspritable),
                a(t, e),
                e.initiator === "link"
                  ? a(
                      t === f.Spritable
                        ? f.PredictedSpritable
                        : f.PredictedUnspritable,
                      e,
                    )
                  : a(
                      t === f.Spritable
                        ? f.UnpredictedSpritable
                        : f.UnpredictedUnspritable,
                      e,
                    ));
            } else
              e.name.contains("emoji") && e.name.contains(".png")
                ? a(f.Emoji, e)
                : e.name.contains("scontent") &&
                  !e.name.contains(".kf") &&
                  a(f.Scontent, e);
        }),
        o
      );
    }
    function h(e, t) {
      var n = g(t),
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
    function y(e, t) {
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
    function C(e, t) {
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
    function b(e, t) {
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
    function v(e, t) {
      e == null &&
        r("FBLogger")("comet_infra", "qpl_initial_load_undefined").info(
          "No INITIAL_LOAD QPL event set for trace policy '%s'. Falling back to default.",
          t,
        );
    }
    function S(e, t, a, i, l, s, m, p, f) {
      var g = (u || (u = r("performanceNow")))();
      n("cr:719780") && n("cr:719780").init(t);
      var h =
        s != null
          ? s
          : r("justknobx")._("3478")
            ? r("CometNavigationTracingQPLEvents").initialLoadClient
            : r("CometNavigationTracingQPLEvents").fbWebInitialLoad_CHANGE_ME;
      (o("QuickMarkersComet").mark("NavigationTracingStart"),
        v(s, a != null ? a : ""),
        o("NavigationTracing").traceInitialLoad(
          {
            VCConfigOverride: p,
            cfg: m,
            instanceIdentifier: i,
            interactionClass: "contingent",
            interactionID: e,
            qplEvent: h,
            startTime: 0,
            tracePolicy: a,
            traceStartTime: g,
            traceType: "INITIAL_LOAD",
            tracingConfig: o("CometInteractionTracingConfig").tracingConfig,
          },
          function (a) {
            (o("QuickMarkersComet").mark("InteractionTracingStart"),
              a.onCompleteSync(function () {
                o("QuickMarkersComet").mark("InteractionTracingComplete");
              }));
            var i = (c || (c = r("Env"))).brsid;
            (i != null && a.addAnnotation("brsid", "" + i),
              a.addAnnotation("host", window.location.hostname),
              navigator.storage != null &&
                typeof navigator.storage.estimate == "function" &&
                r("promiseDone")(
                  o("WebStorageEstimator")
                    .estimateStorage()
                    .then(function (e) {
                      ((e == null ? void 0 : e.quota) != null &&
                        a.addAnnotationInt("storageQuota", e.quota),
                        (e == null ? void 0 : e.usage) != null &&
                          a.addAnnotationInt("storageUsage", e.usage));
                    }),
                ),
              a.onComplete(function (i) {
                var l;
                if (
                  (o("QuickMarkersComet").mark("InitialLoadComplete"),
                  _(e),
                  o("CometAddInlineTiming").addInlineTiming(e, t, 0),
                  r("Network").containsNetworkInformation())
                ) {
                  var s = r("Network").getRTT();
                  s != null && a.addAnnotationInt("network_RTT", s);
                  var u = r("Network").getEffectiveType();
                  u != null &&
                    a.addAnnotation(
                      "network_connectivityEffectiveType",
                      String(u),
                    );
                  var c = r("Network").getBandwidth();
                  c != null && a.addAnnotationInt("network_bandwidth", c);
                  var m = r("Network").getType();
                  m != null &&
                    a.addAnnotation("network_connectivityType", String(m));
                }
                (window.navigator &&
                  window.navigator.hardwareConcurrency &&
                  a.addAnnotationInt(
                    "hardwareConcurrency",
                    window.navigator.hardwareConcurrency,
                  ),
                  o("CometAddInlineTiming").addServerAnnotationsInt(e, t),
                  C(e, t),
                  b(e, t),
                  o("CometAddInlineTiming").addServerTags(e),
                  r("gkx")("23406") && y(e, g),
                  r("InteractionTracingMetrics").addMetadata(
                    e,
                    "pkg_cohort",
                    r("SiteData").pkg_cohort,
                  ),
                  r("InteractionTracingMetrics").addMetadata(
                    e,
                    "comet_env",
                    r("SiteData").comet_env,
                  ),
                  f != null &&
                    r("InteractionTracingMetrics").addMetadata(
                      e,
                      "canonical_route",
                      f,
                    ),
                  o("WorkPWAUtil").isBrowserPWA() &&
                    r("InteractionTracingMetrics").addMetadata(e, "is_pwa", !0),
                  a.addMetadata("is_mobile", r("gkx")("22968")),
                  n("cr:719780") && n("cr:719780").log(),
                  d && R(e),
                  o("CometCurrentInitialLoadVC").setInitialLoadVC(
                    (l = i.markerPoints.visuallyComplete) == null
                      ? void 0
                      : l.timestamp,
                  ),
                  a.addAnnotationInt(
                    o("CometOfflineTracing").OFFLINE_NETWORK_STATUS_ANNOTATION,
                    o("CometOfflineTracing").getOfflineCount(),
                  ),
                  r("ifRequired")("CometBTManifestLoader", function (e) {
                    a.addAnnotationBoolean(
                      "longtail_needed",
                      o(
                        "BootloaderEvents",
                      ).getHasDetectedResourceInLongTailBTManifest(),
                    );
                  }));
              }),
              l(a));
          },
        ));
    }
    function R(e, t) {
      (r("InteractionTracingMetrics").addMetadata(
        e,
        "hasExtraResourceMetadata",
        1,
      ),
        h(e, t));
    }
    function L(e, t, n, a, i, l, s, u) {
      var m;
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
            (m = t == null ? void 0 : t.tracePolicy) != null ? m : null,
          traceType: "NAVIGATION",
          tracingConfig: o("CometInteractionTracingConfig").tracingConfig,
        },
        function (e) {
          (e.onComplete(function () {
            var n = (c || (c = r("Env"))).brsid;
            (n != null && e.addAnnotation("brsid", "" + n),
              d && R(i, _),
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
    ((l.traceInitialLoad = S), (l.traceNavigation = L));
  },
  98,
);
