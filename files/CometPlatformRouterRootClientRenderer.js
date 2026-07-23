__d(
  "CometPlatformRouterRootClientRenderer",
  [
    "CometBlendedInitialLoadTraceLog",
    "CometNavigationTracing",
    "CometPlatformBaseClientRootRenderer",
    "ExecutionEnvironment",
    "FBLogger",
    "InteractionTracingMetrics",
    "getErrorSafe",
    "getInstanceIdentifierFromRoute",
    "setTimeout",
    "uuidv4",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s, u;
    function c(e) {
      var t = e.config;
      if (s != null) {
        r("FBLogger")("comet_platform_root_client", "multiple_init").mustfix(
          "Multiple calls to CometPlatformRootClient.init are not supported.",
        );
        return;
      }
      ((s = t),
        d(e),
        r("setTimeout")(function () {
          p();
        }));
    }
    function d(t) {
      var n = t.additionalRoots,
        a = t.backgroundRouteInfo,
        i = t.client_id,
        l = t.config,
        s = t.expectedPreloaders,
        u = t.initialRouteInfo,
        c = t.qplEvents,
        d = t.rootElementID,
        m = t.ssrEnabled;
      if ((e || (e = r("ExecutionEnvironment"))).canUseDOM) {
        var p = l.buildRootComponent,
          _ = l.clientQPLEvent,
          f = l.initClient,
          g = l.initialLoadTraceConfig,
          h = u.route,
          y = u.timeSpentMetaData,
          C = r("uuidv4")(),
          b = r("getInstanceIdentifierFromRoute")(h);
        o("CometNavigationTracing").traceInitialLoad(
          C,
          i,
          h.tracePolicy,
          b,
          function (e) {
            (r("CometBlendedInitialLoadTraceLog").logInitialLoadStart(
              h.tracePolicy,
            ),
              o("CometPlatformBaseClientRootRenderer").initClientRender({
                additionalRoots: n,
                buildRootComponent: function () {
                  var e, t;
                  return p(
                    {
                      initialBackgroundRoute: a == null ? void 0 : a.route,
                      initialBackgroundTimeSpentMetadata:
                        a == null ? void 0 : a.timeSpentMetaData,
                      initialRootRoute: h,
                      initialTimeSpentMetadata: y,
                      interactionQPLEvent:
                        (e = c == null ? void 0 : c.interaction) != null
                          ? e
                          : void 0,
                      navigationQPLEvent:
                        (t = c == null ? void 0 : c.navigation) != null
                          ? t
                          : void 0,
                    },
                    C,
                  );
                },
                config: l,
                expectedPreloaders: s,
                initClient: function () {
                  return f({
                    client_id: i,
                    initialRoute: h,
                    rootElementID: d,
                    timeSpentMetadata: y,
                    traceAPI: e,
                  });
                },
                rootElementID: d,
                ssrEnabled: m != null ? m : !0,
                traceAPI: e,
              }),
              e.onLog(function (e, t) {
                r("CometBlendedInitialLoadTraceLog").log("main", t);
              }),
              e.onVcMetricsComplete(function (t, n) {
                r("CometBlendedInitialLoadTraceLog").logVc(
                  "main",
                  e.getInstanceKey(),
                  t,
                  n,
                );
              }));
          },
          _ != null ? _ : c == null ? void 0 : c.initial_load,
          g,
          l.VCConfigOverride,
          h.canonicalRouteName,
        );
      }
    }
    function m(e) {
      if (u != null) {
        r("FBLogger")(
          "comet_platform_root_client",
          "multiple_init_deferred",
        ).mustfix(
          "Multiple calls to CometPlatformRootClient.setInitDeferredPayload are not supported.",
        );
        return;
      }
      ((u = e), _("setInitDeferredPayload"), p());
    }
    function p() {
      if (!(u == null || s == null)) {
        var e = s,
          t = e.DeferredRoot,
          n = u;
        t.onReady(function (e) {
          (_("initDeferred_execute"), e.initDeferred(n));
        });
      }
    }
    function _(e) {
      try {
        r("InteractionTracingMetrics")
          .currentInteractionLogger()
          .forEach(function (t) {
            r("InteractionTracingMetrics").addMarkerPoint(
              t.traceId,
              e,
              "AppTiming",
            );
          });
      } catch (n) {
        var t = r("getErrorSafe")(n);
        r("FBLogger")("comet_platform_root_client", "apptiming_log_failure")
          .catching(t)
          .mustfix("Failed to add marker point %s", e);
      }
    }
    ((l.initialize = c), (l.setInitDeferredPayload = m));
  },
  98,
);
