__d(
  "WebLoomCore",
  [
    "FBLogger",
    "InteractionTracingLoomProvider",
    "QPLEvent",
    "QPLLoomProvider",
    "ResourceTimingLoomProvider",
    "VisualCompletionLoomProvider",
    "WebLoomEventBuffer",
    "WebLoomSampling",
    "WebLoomSerializer",
    "addAnnotations",
    "fb-error",
    "mapObject",
    "one-trace",
    "performanceNow",
    "uuidv4",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = new Set(["InteractionTracing"]),
      d = (function () {
        function t(e, t) {
          var n,
            a,
            i = this;
          ((this.$1 = e),
            (this.$2 = t),
            (this.$7 = [
              r("InteractionTracingLoomProvider"),
              r("VisualCompletionLoomProvider"),
              r("ResourceTimingLoomProvider"),
              r("QPLLoomProvider"),
            ]),
            (this.$5 = new Set(
              this.$7.map(function (e) {
                return e.loomProviderId;
              }),
            )),
            (this.$6 = new Set(
              this.$7.map(function (e) {
                return e.loomProviderId;
              }),
            )),
            (this.$3 = new Map()),
            (this.$4 = new Map()),
            (this.$8 = o("WebLoomSerializer").isSupported()),
            (this.$9 = !1),
            (this.$10 = (n = e.debugLogToConsole) != null ? n : !1),
            (this.$16 = (a = e.stuckTraceTimeoutMs) != null ? a : 0),
            (this.$11 = 1),
            (this.$12 = new Map()),
            (this.$13 = r("uuidv4")()),
            (this.$14 = 1),
            this.addStatusListener(function (e, t) {
              i.$10 &&
                i.$17("[Web Loom] trace", t, {
                  interactionId: e.triggerId,
                  traceReferenceId: i.$18(e),
                  qplMarkerId: e.triggerInfo.qpl_marker_id,
                  tracePolicy: e.triggerInfo.trace_policy,
                });
            }));
        }
        var n = t.prototype;
        return (
          (n.setDebugLogToConsole = function (t) {
            this.$10 = t;
          }),
          (n.getNextSequenceNumber = function () {
            var e = this.$14;
            return (this.$14++, e);
          }),
          (n.getSessionId = function () {
            return this.$13;
          }),
          (n.getActiveTraces = function () {
            return this.$3;
          }),
          (n.addProvider = function (t, n) {
            (n === void 0 && (n = !0),
              this.$6.has(t.loomProviderId) ||
                (this.$7.push(t), this.$6.add(t.loomProviderId)),
              n &&
                !this.$5.has(t.loomProviderId) &&
                this.$5.add(t.loomProviderId));
          }),
          (n.addStatusListener = function (t) {
            var e = this,
              n = this.$11++;
            return (
              this.$12.set(n, t),
              {
                dispose: function () {
                  e.$12.delete(n);
                },
              }
            );
          }),
          (n.maybeStartTraceForInteraction = function (t, n, r, a, i) {
            var e = (u || (u = o("QPLEvent"))).getMarkerId(r),
              l = o("WebLoomSampling").getSampleRate(
                this.$1,
                "INTERACTION",
                e,
                a,
              ),
              s = this.$2.Random.coinflip(l);
            if (
              (this.$10 &&
                this.$17("[Web Loom] maybeStartTraceForInteraction", {
                  interactionId: t,
                  markerId: e,
                  tracePolicy: a,
                  sampleRate: l,
                  passedSamplingCheck: s,
                }),
              !s)
            )
              return null;
            var d = i + this.$1.appStart,
              m = {
                interaction_class: n,
                interaction_id: t,
                qpl_marker_id: "" + e,
                sample_rate: l,
                trace_policy: a,
                type: "INTERACTION",
              };
            return this.startTrace(
              t,
              m,
              d,
              this.$1.useLiteTracing ? c : void 0,
            );
          }),
          (n.startTraceManually = function (t, n, r, a, i, l) {
            var e = (u || (u = o("QPLEvent"))).getMarkerId(n),
              s = r + this.$1.appStart,
              d = {
                interaction_id: t,
                qpl_marker_id: "" + e,
                sample_rate: a,
                type: "INTERACTION",
              };
            return (
              l != null && (d.interaction_class = l),
              i != null && (d.trace_policy = i),
              this.startTrace(t, d, s, this.$1.useLiteTracing ? c : void 0)
            );
          }),
          (n.endTraceForInteraction = function (n, o, a) {
            var t,
              i,
              l = n.traceId,
              u = babelHelpers.extends({}, null);
            for (var c in n.annotations)
              for (var d in n.annotations[c]) u[d] = n.annotations[c][d];
            u.qpl_action = o;
            var m = (e || (e = r("mapObject")))(n.tagSet, function (e) {
                return Array.from(e);
              }),
              p = n.completed,
              _ =
                (t = n.markerPoints.visuallyComplete) == null
                  ? void 0
                  : t.timestamp,
              f = (i = n.markerPoints.logVC) == null ? void 0 : i.timestamp,
              g = Math.max(
                p != null ? p : 0,
                _ != null ? _ : 0,
                f != null ? f : 0,
                a != null ? a : 0,
              ),
              h = g > 0 ? g : (s || (s = r("performanceNow")))(),
              y = h + this.$1.appStart;
            return this.endTrace(l, y, u, m);
          }),
          (n.startTrace = function (t, n, a, i, l) {
            var e = this,
              s;
            if (
              (i === void 0 && (i = this.$5),
              l === void 0 && (l = {}),
              !this.$8)
            )
              return null;
            if (this.$3.has(t))
              return (
                r("FBLogger")("web_loom").mustfix(
                  "Already running trace for triggerId: %s",
                  t,
                ),
                null
              );
            var u = this.$14++,
              c = {
                buffer: new (o("WebLoomEventBuffer").WebLoomEventBuffer)(),
                triggerId: t,
                triggerInfo: n,
                startTime: a,
                sequenceNumber: u,
              },
              d = new Set(),
              m = [];
            this.$7.forEach(function (t) {
              i.has(t.loomProviderId) &&
                t.isSupported() &&
                (m.push(t.getInstance(c, e.$2, e.$1)), d.add(t.loomProviderId));
            });
            var p = "STARTED";
            (this.$3.set(t, {
              traceContext: c,
              providerInstances: m,
              loomProviders: d,
              secondaryOneTraceLinkage:
                (s = l.secondaryOneTraceLinkage) != null ? s : !1,
              status: p,
              startURI: window.location.href,
            }),
              this.$12.forEach(function (e) {
                return e(c, p);
              }));
            var _ = this.$18(c);
            return (this.$19(), { traceReferenceId: _, loomProviders: d });
          }),
          (n.$19 = function () {
            var e = this;
            !r("one-trace") ||
              this.$15 != null ||
              this.$3.size === 0 ||
              (this.$15 = r("one-trace").subscribe("trace-start", function (t) {
                if (!(t.traceType !== "LONGTASK" && t.traceType !== "INP")) {
                  var n = Array.from(e.$3.values()),
                    o = n[n.length - 1];
                  for (var a of n) a.secondaryOneTraceLinkage || (o = a);
                  o != null &&
                    r("addAnnotations")(t.annotations, {
                      string: { loomRefId: e.$18(o.traceContext) },
                      string_array: {
                        loomProviders: Array.from(o.loomProviders),
                        loomRefIds: n.map(function (t) {
                          return e.$18(t.traceContext);
                        }),
                      },
                    });
                }
              }));
          }),
          (n.$18 = function (t) {
            return this.$13 + "_" + t.sequenceNumber;
          }),
          (n.endTrace = async function (t, n, a, i) {
            var e = this.$3.get(t);
            if (!e)
              return (
                r("FBLogger")("web_loom").mustfix(
                  "No trace running for triggerId: %s",
                  t,
                ),
                !1
              );
            var l = e.traceContext.sequenceNumber;
            (this.$3.delete(t),
              this.$3.size === 0 && this.$15 && (this.$15(), (this.$15 = null)),
              this.$4.set(l, e),
              this.$20(e, "END_PENDING"));
            var s = [];
            e.providerInstances.forEach(function (e) {
              var t = e.loomTraceWillEnd();
              t && s.push(t);
            });
            var u = window.location.href;
            try {
              await Promise.all(s);
              var c = this.$1.perfXData,
                d = e.traceContext.triggerInfo,
                m = {
                  app_id: this.$1.appId,
                  start_time_us: Math.round(e.traceContext.startTime * 1e3),
                  end_time_us: Math.round(n * 1e3),
                  trigger_id: e.traceContext.triggerId,
                  trigger_info: d,
                  trigger_metadata: a,
                  trigger_metadata_sets: i,
                  client_push_phase: c.client_push_phase,
                  device_num_cores:
                    c.num_cores != null ? Math.floor(c.num_cores) : null,
                  device_ram_bytes:
                    c.ram_gb != null ? c.ram_gb * 1073741824 : null,
                  is_rtl: c.isRTL,
                  locale: c.locale,
                  network_effective_connection_type:
                    c.effective_connection_type,
                  network_downlink_bps:
                    c.downlink_megabits != null &&
                    c.downlink_megabits * 1e6 < 1e20
                      ? c.downlink_megabits * 1e6
                      : null,
                  network_rtt_ms: c.rtt_ms,
                  client_rev: this.$1.clientRev,
                  server_rev: this.$1.serverRev,
                  spin_mode: this.$1.spinMode,
                  start_uri: e.startURI,
                  end_uri: u,
                },
                p = o("WebLoomSerializer").serialize(
                  this.$2,
                  m,
                  e.traceContext.buffer,
                  e.traceContext.jsSelfProfilerData,
                );
              if (((e.traceContext.jsSelfProfilerData = null), p != null)) {
                var _ = {
                  trace: p,
                  session_id: this.$13,
                  sequence_number: e.traceContext.sequenceNumber,
                  qpl_marker_id: d.qpl_marker_id,
                  trace_policy: d.trace_policy,
                  sample_rate: d.sample_rate,
                };
                (this.$2.Transport.post(_, {
                  onComplete: this.$16 > 0 ? this.$21(l) : this.$22(l, e),
                  isHighPri: this.$9,
                }),
                  this.$20(e, "UPLOAD_PENDING"));
              } else
                (this.$20(e, "COMPLETE"),
                  this.$4.delete(l),
                  r("fb-error")
                    .FBLogger("webloom")
                    .warn(
                      "[Loom Trace]Failed to serialize trace, trace will be dropped. QPL marker id: %s",
                      d.qpl_marker_id,
                    ));
            } catch (t) {
              (this.$20(e, "ERROR"), this.$4.delete(l));
            }
            return !0;
          }),
          (n.flush = function (t) {
            var e = this,
              n = new Set(),
              r = new Set();
            if (
              (this.$4.forEach(function (e) {
                e.status === "END_PENDING"
                  ? n.add(e.traceContext.sequenceNumber)
                  : e.status === "UPLOAD_PENDING" &&
                    r.add(e.traceContext.sequenceNumber);
              }),
              n.size > 0)
            )
              var o = this.addStatusListener(function (r) {
                (n.delete(r.sequenceNumber),
                  n.size === 0 && (e.$2.Transport.flush(t, t), o.dispose()));
              });
            else r.size > 0 ? this.$2.Transport.flush(t, t) : t && t();
          }),
          (n.setIsDevToolsConnected = function (t) {
            this.$9 = t;
          }),
          (n.setStuckTraceTimeoutMs = function (t) {
            this.$16 = t;
          }),
          (n.$21 = function (t) {
            var e = this,
              n = setTimeout(function () {
                var n = e.$4.get(t);
                n != null && (e.$20(n, "ERROR"), e.$4.delete(t));
              }, this.$16);
            return function () {
              clearTimeout(n);
              var r = e.$4.get(t);
              r != null && (e.$20(r, "COMPLETE"), e.$4.delete(t));
            };
          }),
          (n.$22 = function (t, n) {
            var e = this;
            return function () {
              e.$4.has(t) && (e.$20(n, "COMPLETE"), e.$4.delete(t));
            };
          }),
          (n.$20 = function (t, n) {
            ((t.status = n),
              this.$12.forEach(function (e) {
                return e(t.traceContext, t.status);
              }));
          }),
          (n.$17 = function () {
            var e = typeof console != "undefined" ? console : null;
            e && e.log.apply(e, arguments);
          }),
          t
        );
      })();
    l.default = d;
  },
  98,
);
