__d(
  "AdsManagerQPLUserFlowLoggerListeners",
  [
    "AdsDraftPublishQPLUserFlowLoggingConsts",
    "AdsManagerQPLUserFlowLogger",
    "AdsManagerQPLUserFlowLoggerHelpers",
    "Arbiter",
    "ErrorMetadata",
    "ErrorPubSub",
    "FBLogger",
    "GraphAPI",
    "LocalDateTime",
    "ODS",
    "QPLEvent",
    "QPLUserFlow",
    "QuickPerformanceLogger",
    "Timezone",
    "differenceSets",
    "ghlTestUBT",
    "ifRequired",
    "qpl",
    "vulture",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d,
      m = !1,
      p = new Set(
        [
          (d = r("qpl"))._(270230822, "8871"),
          d._(270224526, "4214"),
          d._(270215750, "3483"),
          d._(270220074, "1492"),
          d._(270213045, "3432"),
          d._(270215397, "2368"),
          d._(270212559, "3488"),
          d._(270206071, "2438"),
          d._(270215913, "3593"),
          d._(270206062, "3563"),
          d._(270210288, "1246"),
          d._(270212866, "3324"),
          d._(270219249, "8280"),
          d._(270220916, "3566"),
          d._(270216928, "3999"),
          d._(270207869, "3460"),
        ].map((c || (c = o("QPLEvent"))).getMarkerId),
      ),
      _ = new Set(
        o("AdsDraftPublishQPLUserFlowLoggingConsts").PUBLISH_USER_FLOWS.map(
          c.getMarkerId,
        ),
      ),
      f = 1024;
    function g(e) {
      var t = String(e);
      return t.length > f ? t.substring(0, f - 3) + "..." : t;
    }
    function h(e) {
      return (
        e.type === "fatal" ||
        (e.type === "error" &&
          (e.loggingSource !== "FBLOGGER" ||
            e.project === "am_unintended_ad_mutation")) ||
        (e.type === "warn" && e.project === "bootloader") ||
        e.project === "ads_manager_firedrill"
      );
    }
    function y(t) {
      (t === void 0 && (t = null),
        r("ghlTestUBT")(function (e) {
          m = e;
        }),
        (e || (e = r("ErrorPubSub"))).unshiftListener(function (e) {
          var t = r("QPLUserFlow").getActiveFlowIDs();
          if (t.length !== 0) {
            if (e.project === "asyncresponse") {
              var n,
                a = (n = e.messageParams) != null ? n : [],
                i = a[0],
                l = a[1],
                s = a[2];
              t.forEach(function (t) {
                (u || (u = r("QuickPerformanceLogger"))).forEachMarkerInstance(
                  t,
                  function (t, n) {
                    var o;
                    r("QPLUserFlow").addPoint(n, "XCONTROLLER_FAILED", {
                      data: {
                        string: {
                          errorCode: i,
                          url:
                            s == null || (o = s.split("?")) == null
                              ? void 0
                              : o[0],
                          type: e.type,
                        },
                      },
                      instanceKey: t,
                    });
                  },
                );
              });
              return;
            }
            if (!(!h(e) && e.project !== "graph_api")) {
              var c = new (r("ErrorMetadata"))();
              (c.clearEntries(),
                t.forEach(function (t) {
                  h(e) &&
                    (
                      u || (u = r("QuickPerformanceLogger"))
                    ).forEachMarkerInstance(t, function (t, n) {
                      r("QPLUserFlow").addPoint(n, "JAVASCRIPT_ERROR_THROWN", {
                        data: {
                          string: {
                            logging_source: e.loggingSource,
                            message_format: g(e.messageFormat),
                            type: e.type,
                            hash: e.hash,
                          },
                          string_array: {
                            message_params: e.messageParams.map(g),
                          },
                        },
                        instanceKey: t,
                      });
                    });
                  var n = o("AdsManagerQPLUserFlowLoggerHelpers")
                    .getActiveFlowInstanceIDs()
                    .get(t);
                  n != null &&
                    (e.type !== "fatal" &&
                      c.addEntry("QPL", "ACTIVE_FLOW_ID", String(t)),
                    n.forEach(function (e) {
                      var n = e.instanceId;
                      (c.addEntry("QPL", "ACTIVE_FLOW_INSTANCE_ID", n),
                        o(
                          "AdsManagerQPLUserFlowLoggerHelpers",
                        ).isDebugEnabled() &&
                          r("FBLogger")("ads").info(
                            "[Reliability QPL User Flow] Associating error with instance ID %s for %s",
                            n,
                            o(
                              "AdsManagerQPLUserFlowLoggerHelpers",
                            ).getQuickLogModuleKey(t),
                          ));
                    }));
                }));
              var d = c.format();
              e.metadata
                ? (e.metadata = [].concat(e.metadata, d))
                : (e.metadata = d);
            }
          }
        }),
        r("GraphAPI").addErrorHandler(function (e) {
          var t = r("QPLUserFlow").getActiveFlowIDs();
          t.forEach(function (t) {
            (u || (u = r("QuickPerformanceLogger"))).forEachMarkerInstance(
              t,
              function (t, n) {
                var o;
                r("QPLUserFlow").addPoint(n, "GRAPH_API_FAILED", {
                  data: {
                    string: {
                      call_name: e.method + ":" + e.name,
                      request_source: e.source,
                      www_request_id:
                        (o = e.www_request_id) != null ? o : e.api_fbtrace_id,
                    },
                    int: {
                      error_code: e.error.code,
                      error_subcode: e.error.error_subcode,
                    },
                  },
                  instanceKey: t,
                });
              },
            );
          });
        }));
      var n = new Map();
      ((u || (u = r("QuickPerformanceLogger"))).addListener({
        onMarkerStarted: function (a, i, l) {
          var e,
            d,
            f = (u || (u = r("QuickPerformanceLogger"))).getMarker(a, i);
          if (
            o("AdsManagerQPLUserFlowLoggerHelpers").shouldAnnotateAndTrack({
              qplEvent: a,
              marker: f,
            })
          ) {
            var g = (c || (c = o("QPLEvent"))).getMarkerId(a);
            (s || (s = o("ODS"))).bumpEntityKey(
              2401,
              "ads.manager.qpl_health.marker_start",
              o("AdsManagerQPLUserFlowLoggerHelpers").getQuickLogModuleKey(g),
            );
            var h =
              (e =
                f == null ||
                (d = f.annotations) == null ||
                (d = d.string) == null
                  ? void 0
                  : d.flow_instance_id) != null
                ? e
                : o("AdsManagerQPLUserFlowLoggerHelpers").generateInstanceID(
                    a,
                    i,
                  );
            if (
              (o("AdsManagerQPLUserFlowLoggerHelpers").addBaseAnnotations(
                a,
                i,
                h,
              ),
              o("AdsManagerQPLUserFlowLoggerHelpers").trackInstance(a, i, h),
              r("QPLUserFlow").addAnnotations(
                a,
                { bool: { is_blocked: m } },
                { instanceKey: i },
              ),
              p.has(g) &&
                r("ifRequired")(
                  "AdsInsightsObjectStatsStore",
                  function (e) {
                    r("ifRequired")(
                      "AdsPELastUpdatedStore",
                      function (t) {
                        var a,
                          i,
                          l = e.getCacheKeys(),
                          s = r("LocalDateTime")
                            .now(o("Timezone").getEnvironmentTimezoneID())
                            .toUTCDate()
                            .getTime(),
                          c =
                            (a =
                              (i = t.getLastUpdated()) == null ||
                              (i = i.toUTCDate()) == null
                                ? void 0
                                : i.getTime()) != null
                              ? a
                              : s;
                        (n.set(g, l),
                          (u || (u = r("QuickPerformanceLogger"))).markerStart(
                            r("qpl")._(41500414, "1468"),
                            g,
                            void 0,
                            { enableE2ETracing: !0 },
                          ),
                          u.markerAnnotate(
                            r("qpl")._(41500414, "1468"),
                            {
                              int: {
                                qpl_event: g,
                                insights_time_since_last_update_seconds:
                                  (s - c) / 1e3,
                                insights_start_update_time_seconds: c / 1e3,
                                insights_start_num_cache_keys: l.size,
                              },
                            },
                            { instanceKey: g },
                          ));
                      },
                      function () {
                        r("vulture")("NowmCJV_INKCKSn1DUics2sy3MM=");
                      },
                    );
                  },
                  function () {
                    r("vulture")("I-tFHEuOk0X5N_FuOk3Mxj8gPC0=");
                  },
                ),
              _.has((c || (c = o("QPLEvent"))).getMarkerId(a)))
            ) {
              var y;
              (y = t) == null ||
                y.getAllOngoingInteraction().forEach(function (e, t) {
                  t === "am.toast_card.publish" &&
                    o("AdsManagerQPLUserFlowLogger").appendArrayAnnotations(
                      a,
                      {
                        string_array: {
                          perf_publish_interaction_ids: [e.interactionID],
                        },
                      },
                      { instanceKey: i },
                    );
                });
            }
          }
        },
        onMarkerEnd: function (t, a, i, l) {
          var e,
            d = (u || (u = r("QuickPerformanceLogger"))).getMarker(a, i);
          if (
            o("AdsManagerQPLUserFlowLoggerHelpers").shouldAnnotateAndTrack({
              qplEvent: a,
              marker: d,
            })
          ) {
            var m = (c || (c = o("QPLEvent"))).getMarkerId(a),
              _ =
                (e = o("AdsManagerQPLUserFlowLoggerHelpers")
                  .getActiveFlowInstanceIDs()
                  .get(m)) == null
                  ? void 0
                  : e.get(i);
            if (
              ((s || (s = o("ODS"))).bumpEntityKey(
                2401,
                "ads.manager.qpl_health.marker_end",
                o("AdsManagerQPLUserFlowLoggerHelpers").getQuickLogModuleKey(m),
              ),
              t === 4)
            ) {
              var f,
                g = o(
                  "AdsManagerQPLUserFlowLoggerHelpers",
                ).getQuickLogModuleKey(m),
                h =
                  d == null ||
                  (f = d.annotations) == null ||
                  (f = f.string) == null
                    ? void 0
                    : f.cancelType;
              r("FBLogger")("ads")
                .addToCategoryKey(g + ":" + (h != null ? h : "CANCEL"))
                .warn(
                  "Marker %s (flow instance ID %s) was cancelled",
                  g,
                  _ == null ? void 0 : _.instanceId,
                );
            }
            if (
              _ != null &&
              o("AdsManagerQPLUserFlowLoggerHelpers").isDebugEnabled()
            ) {
              var y = _.instanceId;
              r("FBLogger")("ads").info(
                "[Reliability QPL User Flow] Ending marker %s (ID %s) for instanceKey %s with action %s, cleaning up flow instance ID %s",
                o("AdsManagerQPLUserFlowLoggerHelpers").getQuickLogModuleKey(m),
                m,
                i,
                o("AdsManagerQPLUserFlowLoggerHelpers").getQuickLogActionName(
                  t,
                ),
                y,
              );
            }
            (o("AdsManagerQPLUserFlowLoggerHelpers").untrackInstance(a, i),
              p.has(m) &&
                r("ifRequired")(
                  "AdsInsightsObjectStatsStore",
                  function (e) {
                    r("ifRequired")(
                      "AdsPELastUpdatedStore",
                      function (a) {
                        var i,
                          l,
                          s,
                          c = e.getCacheKeys(),
                          d = r("differenceSets")(
                            c,
                            (i = n.get(m)) != null ? i : new Set(),
                          ),
                          p = r("differenceSets")(
                            (l = n.get(m)) != null ? l : new Set(),
                            c,
                          );
                        ((
                          u || (u = r("QuickPerformanceLogger"))
                        ).markerAnnotate(
                          r("qpl")._(41500414, "1468"),
                          {
                            int: {
                              insights_end_update_time_seconds:
                                ((s = a.getLastUpdated()) != null
                                  ? s
                                  : r("LocalDateTime").now(
                                      o("Timezone").getEnvironmentTimezoneID(),
                                    )
                                )
                                  .toUTCDate()
                                  .getTime() / 1e3,
                              insights_end_num_cache_keys: c.size,
                              insights_num_new_cache_keys: d.size,
                              insights_num_removed_cache_keys: p.size,
                            },
                          },
                          { instanceKey: m },
                        ),
                          u.markerEnd(r("qpl")._(41500414, "1468"), t, m),
                          n.delete(m));
                      },
                      function () {
                        r("vulture")("ZmxZqDJe-9KRyNCn0XTSlvPHUw4=");
                      },
                    );
                  },
                  function () {
                    r("vulture")("rtAGxfoDTwQqoRxygycTEjpWupc=");
                  },
                ));
          }
        },
        onUploadEvent: function (t) {
          o("AdsManagerQPLUserFlowLoggerHelpers").shouldAnnotateAndTrack({
            eventData: t,
          }) &&
            (s || (s = o("ODS"))).bumpEntityKey(
              2401,
              "ads.manager.qpl_health.upload_event",
              o("AdsManagerQPLUserFlowLoggerHelpers").getQuickLogModuleKey(
                t.marker_id,
              ),
            );
        },
      }),
        r("Arbiter").subscribe("AsyncRequest/will_send", function (e, t) {
          var n = t.request,
            a = o(
              "AdsManagerQPLUserFlowLoggerHelpers",
            ).getActiveFlowInstanceIDs(),
            i = [];
          (a.forEach(function (e) {
            e.forEach(function (e) {
              var t = e.instanceId;
              i.push(t);
            });
          }),
            i.length > 0 &&
              n.setRequestHeader(
                "X-FB-QPL-Active-Flow-Instances",
                i.sort().join(","),
              ));
          var l = (
              u || (u = r("QuickPerformanceLogger"))
            ).getActiveE2ETraceIds(),
            s = [];
          (l.forEach(function (e) {
            e.forEach(function (e) {
              var t = e.e2eTraceID;
              s.push(t);
            });
          }),
            s.length > 0 &&
              n.setRequestHeader(
                "X-FB-QPL-Active-E2E-Trace-IDs",
                s.sort().join(","),
              ));
        }));
    }
    l.initListenersHelper = y;
  },
  98,
);
