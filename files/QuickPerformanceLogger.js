__d(
  "QuickPerformanceLogger",
  [
    "Arbiter",
    "Env",
    "FBLogger",
    "ODS",
    "PerfFalcoEvent",
    "PerfXSharedFields",
    "Promise",
    "QPLCore",
    "QPLEvent",
    "QPLInspector",
    "Run",
    "WebStorage",
    "clearTimeout",
    "cr:12180",
    "cr:1984081",
    "cr:686",
    "getErrorSafe",
    "gkx",
    "guid",
    "performanceAbsoluteNow",
    "performanceNavigationStart",
    "performanceNow",
    "setTimeout",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _,
      f = typeof window != "undefined" ? window : self;
    function g(t, n) {
      r("FBLogger")("qpl")
        .catching(r("getErrorSafe")(n))
        .MUSTFIX(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "QPL error in ",
              "",
            ])),
          t,
        );
    }
    function h(e) {
      var t = r("PerfXSharedFields").getCommonData(),
        n = {
          memory_stats: {
            total_mem: t.ram_gb != null ? t.ram_gb * 1073741824 : null,
          },
          network_stats: {
            downlink_megabits: t.downlink_megabits,
            network_subtype: t.effective_connection_type,
            rtt_ms: t.rtt_ms,
          },
          sitedata_info: {
            client_push_phase: t.client_push_phase,
            client_revision: t.client_revision,
            server_revision: t.server_revision,
          },
          locale_info: { locale: t.locale, isRTL: t.isRTL },
        };
      if (
        (r("gkx")("20836") &&
          (n.workplace_info = { is_gemini: r("gkx")("21050") }),
        r("gkx")("21051") && typeof f.__sapienzMetadataCallback__ == "function")
      ) {
        var o = f.__sapienzMetadataCallback__();
        n.sapienz = {
          request_id: String(o.requestId),
          config_name: String(o.configName),
        };
      }
      return babelHelpers.extends({}, e, {
        metadata: babelHelpers.extends({}, e.metadata, n),
      });
    }
    function y(e, t, n) {
      return { i: e, m: n, r: t };
    }
    function C(e, t) {
      return new (_ || (_ = n("Promise")))(function () {
        var n = t || e;
        (typeof f.__je2e_recordQPLMarker == "function" &&
          f.__je2e_recordQPLMarker(n),
          (p || (p = r("Env"))).enable_qplinspector === !0 &&
            r("QPLInspector").appendLog(n),
          r("gkx")("21053") || r("gkx")("20935") || r("gkx")("5679")
            ? r("PerfFalcoEvent").logImmediately(function () {
                return n;
              })
            : r("gkx")("2160") ||
                r("gkx")("21055") ||
                r("gkx")("1624") ||
                r("gkx")("9550")
              ? r("PerfFalcoEvent").logCritical(function () {
                  return n;
                })
              : r("PerfFalcoEvent").log(function () {
                  return n;
                }));
      });
    }
    function b(e) {
      var t = (s || (s = o("QPLEvent"))).getMarkerId(e),
        n = t + "_" + r("guid")();
      return (
        (m || (m = o("ODS"))).bumpEntityKey(
          2401,
          "obc.www.all",
          "qpl.e2e_tracing_id_generated." + t,
        ),
        n
      );
    }
    function v(e) {
      var t = babelHelpers.extends({}, e, {
        config_type: r("gkx")("21056") ? "alpha_beta" : "prod",
      });
      return h(t);
    }
    function S() {
      return (
        (p || (p = r("Env"))).enable_qplinspector === !0 ||
        typeof f.__je2e_recordQPLMarker == "function" ||
        r("gkx")("21057")
      );
    }
    function R() {
      r("Arbiter").inform("qpl_debugger_finished");
    }
    var L = (u || (u = r("performanceAbsoluteNow")))();
    typeof f.__je2e_felabsTracePlugin_setQplInit == "function" &&
      f.__je2e_felabsTracePlugin_setQplInit((c || (c = r("performanceNow")))());
    var E = {
        debug: function (t, n, r) {},
        warn: function (t) {
          r("FBLogger")("qpl").blameToPreviousDirectory().warn(t);
        },
      },
      k = "qpl",
      I = (function (e) {
        function t() {
          var t;
          t =
            e.call(this, {
              decorateEventBeforeUpload: v,
              unsampleAllEvents: S,
              onDebuggingIdEnded: R,
              monotonicNowMs: u || (u = r("performanceAbsoluteNow")),
              unixNowMs: u || (u = r("performanceAbsoluteNow")),
              moduleLoadTimestamp: L,
              logger: E,
              sendEvent: C,
              e2eTracingIDGenerator: b,
              runtimeAbstractionLayer: {
                setTimeout: r("setTimeout"),
                clearTimeout: r("clearTimeout"),
              },
              debugLoggingEnabled: (p || (p = r("Env"))).qpl_debug_logging,
              onError: g,
            }) || this;
          var n = r("gkx")("21055")
            ? r("gkx")("21058")
              ? function (e) {
                  return o("Run").onBeforeUnload(e, !1);
                }
              : o("Run").onBeforeUnload
            : o("Run").onUnload;
          return (
            n(function () {
              (t.$QuickPerformanceLogger$p_1(),
                t.$QuickPerformanceLogger$p_2(706, {
                  respectUnloadPolicy: !0,
                  timestamp: t.currentTimestamp(),
                }));
            }),
            t.$QuickPerformanceLogger$p_3(),
            t.initQplFlipperPlugin(),
            t.initQplSapienzPlugin(),
            t.initQplUserTimingPlugin(),
            t
          );
        }
        babelHelpers.inheritsLoose(t, e);
        var a = t.prototype;
        return (
          (a.$QuickPerformanceLogger$p_3 = function () {
            var e = this,
              t = (d || (d = r("WebStorage"))).getSessionStorageForRead();
            if (!t) {
              this.$QuickPerformanceLogger$p_4(
                "#loadSavedState",
                "sessionStorage is not available",
              );
              return;
            }
            var n = t.getItem(k);
            if (n != null) {
              t.removeItem(k);
              var o = JSON.parse(n);
              if (o == null) {
                this.$QuickPerformanceLogger$p_4(
                  "#loadSavedState",
                  "Saved state failed to deserialize",
                );
                return;
              }
              if (o.markers == null || o.markers.length === 0) {
                this.$QuickPerformanceLogger$p_4(
                  "#loadSavedState",
                  "No saved markers found",
                );
                return;
              }
              o.markers.forEach(function (t) {
                var n = t[0],
                  r = t[1],
                  o = t[2];
                (e.addMarker(n, r, o),
                  e.$QuickPerformanceLogger$p_4(
                    "#loadSavedState",
                    "Marker " + n + " (instanceKey: " + r + ") resumed",
                  ));
              });
            }
          }),
          (a.$QuickPerformanceLogger$p_1 = function () {
            var e = this,
              t = [];
            if (
              (this.activeMarkers.forEach(function (e, n) {
                e.forEach(function (e, r) {
                  e.resumeAfterNavigation === !0 &&
                    (delete e.resumeAfterNavigation, t.push([n, r, e]));
                });
              }),
              t.length > 0)
            ) {
              var n = { markers: t },
                o = (d || (d = r("WebStorage"))).getSessionStorage(),
                a = d.setItemGuarded(o, k, JSON.stringify(n));
              (a &&
                (t.forEach(function (t) {
                  var n = t[0],
                    r = t[1],
                    o = t[2],
                    a = y(n, o.sampleRate, o.samplingMethod);
                  e.markerEnd(a, 96, r);
                }),
                this.$QuickPerformanceLogger$p_4(
                  "#storeSavedState",
                  "Failed to store saved state: " + a.message,
                ),
                r("FBLogger")("qpl")
                  .catching(a)
                  .warn(
                    "Failed to store QPL state: " + JSON.stringify(n, null, 2),
                  )),
                t.forEach(function (t) {
                  var n = t[0],
                    r = t[1];
                  e.deleteMarker(n, r);
                }));
            }
          }),
          (a.markerStoreBeforeNavigation = function (t, n) {
            var e = n === void 0 ? {} : n,
              r = e.instanceKey,
              a = r === void 0 ? 0 : r,
              i = (s || (s = o("QPLEvent"))).getMarkerId(t),
              l = this.getMarker(t, a);
            if (!l) {
              this.$QuickPerformanceLogger$p_4(
                "markerStoreBeforeNavigation",
                "Failed to set marker to store on page unload. Could not find marker " +
                  i +
                  ", instancekey=" +
                  a,
              );
              return;
            }
            ((l.resumeAfterNavigation = !0),
              this.$QuickPerformanceLogger$p_4(
                "markerStoreBeforeNavigation",
                "Set marker " +
                  i +
                  " to store on page unload, instancekey=" +
                  a,
              ));
          }),
          (a.markerStartFromNavStart = function (t, n, o) {
            n === void 0 && (n = 0);
            var e = o === void 0 ? {} : o,
              a = e.cancelExisting,
              i = a === void 0 ? !1 : a,
              l = e.cancelOnUnload,
              s = l === void 0 ? !1 : l,
              u = e.trackedForLoss,
              c = u === void 0 ? !1 : u,
              d = e.type,
              m = d === void 0 ? 1 : d,
              p = e.qplInternalDoNotUseConvertToTimeOnServer,
              _ = e.onMarkerTimeout__DoNotUse,
              f = e.timeoutMS,
              g = f === void 0 ? null : f,
              h = e.crashResilient,
              y = h === void 0 ? !1 : h,
              C = r("performanceNavigationStart")(),
              b = typeof p == "function" ? p(C) : void 0;
            if (
              (this.markerStart(t, n, C, {
                cancelExisting: i,
                cancelOnUnload: s,
                trackedForLoss: c,
                type: m,
                qplInternalDoNotUseAbsoluteTimeOrigin: b,
                onMarkerTimeout__DoNotUse: _,
                timeoutMS: g,
                crashResilient: y,
              }),
              r("performanceNavigationStart").isPolyfilled === !0)
            ) {
              var v = this.getMarker(t, n);
              v && (v.timestampIsApproximate = !0);
            }
          }),
          (a.markerStartForJoinFromNavStart = function (t, n, o) {
            var e = o === void 0 ? {} : o,
              a = e.instanceKey,
              i = a === void 0 ? 0 : a,
              l = e.cancelExisting,
              s = l === void 0 ? !1 : l,
              u = e.cancelOnUnload,
              c = u === void 0 ? !1 : u,
              d = e.trackedForLoss,
              m = d === void 0 ? !1 : d,
              p = e.type,
              _ = p === void 0 ? 1 : p,
              f = e.qplInternalDoNotUseConvertToTimeOnServer,
              g = e.absoluteTimeOriginMs,
              h = e.sourceIsPrimary,
              y = h === void 0 ? !1 : h,
              C = e.closeSession,
              b = e.unreliableSourceClockProcessId,
              v = e.onMarkerTimeout__DoNotUse,
              S = e.timeoutMS,
              R = e.crashResilient,
              L = R === void 0 ? !1 : R,
              E = r("performanceNavigationStart")(),
              k = typeof f == "function" ? f(E) : void 0;
            if (
              (this.markerStartForJoin(t, n, {
                instanceKey: i,
                cancelExisting: s,
                cancelOnUnload: c,
                trackedForLoss: m,
                type: _,
                qplInternalDoNotUseAbsoluteTimeOrigin: k,
                monotonicTimestamp: E,
                absoluteTimeOriginMs: g,
                sourceIsPrimary: y,
                closeSession: C,
                unreliableSourceClockProcessId: b,
                timeoutMS: S,
                onMarkerTimeout__DoNotUse: v,
                crashResilient: L,
              }),
              r("performanceNavigationStart").isPolyfilled === !0)
            ) {
              var I = this.getMarker(t, i);
              I && (I.timestampIsApproximate = !0);
            }
          }),
          (a.$QuickPerformanceLogger$p_2 = function (t, n) {
            var e = this,
              r = n === void 0 ? {} : n,
              o = r.respectUnloadPolicy,
              a = r.timestamp;
            this.activeMarkers.forEach(function (n, r) {
              n.forEach(function (n, i) {
                if (o !== !0 || n.cancelOnUnload === !0) {
                  var l = y(r, n.sampleRate, n.samplingMethod);
                  e.markerEnd(l, t, i, a);
                }
              });
            });
          }),
          (a.$QuickPerformanceLogger$p_4 = function (t, n, r) {
            E.debug(t, n, r);
          }),
          (a.initQplFlipperPlugin = function () {
            n("cr:686") != null &&
              this.addListener(n("cr:686").qplFlipperPlugin.listener());
          }),
          (a.initQplSapienzPlugin = function () {
            n("cr:1984081") != null &&
              this.addListener(n("cr:1984081").getQplSapienzListener());
          }),
          (a.initQplUserTimingPlugin = function () {
            n("cr:12180") != null &&
              this.addListener(n("cr:12180").getQplUserTimingListener());
          }),
          t
        );
      })(r("QPLCore")),
      T = new I(),
      D = T;
    l.default = D;
  },
  98,
);
