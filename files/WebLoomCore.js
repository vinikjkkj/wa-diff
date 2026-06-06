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
            a = this;
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
            (this.$11 = 1),
            (this.$12 = new Map()),
            (this.$13 = r("uuidv4")()),
            (this.$14 = 1),
            this.addStatusListener(function (e, t) {
              a.$10 &&
                a.$16("[Web Loom] trace", t, {
                  interactionId: e.triggerId,
                  traceReferenceId: a.$17(e),
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
                this.$16("[Web Loom] maybeStartTraceForInteraction", {
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
          (n.startTrace = function (t, n, a, i) {
            var e = this;
            if ((i === void 0 && (i = this.$5), !this.$8)) return null;
            if (this.$3.has(t))
              return (
                r("FBLogger")("web_loom").mustfix(
                  "Already running trace for triggerId: %s",
                  t,
                ),
                null
              );
            var l = this.$14++,
              s = {
                buffer: new (o("WebLoomEventBuffer").WebLoomEventBuffer)(),
                triggerId: t,
                triggerInfo: n,
                startTime: a,
                sequenceNumber: l,
              },
              u = new Set(),
              c = [];
            this.$7.forEach(function (t) {
              i.has(t.loomProviderId) &&
                t.isSupported() &&
                (c.push(t.getInstance(s, e.$2, e.$1)), u.add(t.loomProviderId));
            });
            var d = "STARTED";
            (this.$3.set(t, {
              traceContext: s,
              providerInstances: c,
              status: d,
              startURI: window.location.href,
            }),
              this.$12.forEach(function (e) {
                return e(s, d);
              }));
            var m = this.$17(s);
            return (
              r("one-trace") &&
                (this.$15 && (this.$15(), (this.$15 = null)),
                (this.$15 = r("one-trace").subscribe(
                  "trace-start",
                  function (e) {
                    (e.traceType === "LONGTASK" || e.traceType === "INP") &&
                      r("addAnnotations")(e.annotations, {
                        string: { loomRefId: m },
                        string_array: { loomProviders: Array.from(u) },
                      });
                  },
                ))),
              { traceReferenceId: m, loomProviders: u }
            );
          }),
          (n.$17 = function (t) {
            return this.$13 + "_" + t.sequenceNumber;
          }),
          (n.endTrace = async function (t, n, a, i) {
            var e = this,
              l = this.$3.get(t);
            if (!l)
              return (
                r("FBLogger")("web_loom").mustfix(
                  "No trace running for triggerId: %s",
                  t,
                ),
                !1
              );
            var s = l.traceContext.sequenceNumber;
            (this.$3.delete(t), this.$4.set(s, l), this.$18(l, "END_PENDING"));
            var u = [];
            (l.providerInstances.forEach(function (e) {
              var t = e.loomTraceWillEnd();
              t && u.push(t);
            }),
              this.$15 && (this.$15(), (this.$15 = null)));
            var c = window.location.href;
            try {
              await Promise.all(u);
              var d = this.$1.perfXData,
                m = l.traceContext.triggerInfo,
                p = {
                  app_id: this.$1.appId,
                  start_time_us: Math.round(l.traceContext.startTime * 1e3),
                  end_time_us: Math.round(n * 1e3),
                  trigger_id: l.traceContext.triggerId,
                  trigger_info: m,
                  trigger_metadata: a,
                  trigger_metadata_sets: i,
                  client_push_phase: d.client_push_phase,
                  device_num_cores:
                    d.num_cores != null ? Math.floor(d.num_cores) : null,
                  device_ram_bytes:
                    d.ram_gb != null ? d.ram_gb * 1073741824 : null,
                  is_rtl: d.isRTL,
                  locale: d.locale,
                  network_effective_connection_type:
                    d.effective_connection_type,
                  network_downlink_bps:
                    d.downlink_megabits != null &&
                    d.downlink_megabits * 1e6 < 1e20
                      ? d.downlink_megabits * 1e6
                      : null,
                  network_rtt_ms: d.rtt_ms,
                  client_rev: this.$1.clientRev,
                  server_rev: this.$1.serverRev,
                  spin_mode: this.$1.spinMode,
                  start_uri: l.startURI,
                  end_uri: c,
                },
                _ = o("WebLoomSerializer").serialize(
                  this.$2,
                  p,
                  l.traceContext.buffer,
                  l.traceContext.jsSelfProfilerData,
                );
              if (((l.traceContext.jsSelfProfilerData = null), _ != null)) {
                var f = {
                  trace: _,
                  session_id: this.$13,
                  sequence_number: l.traceContext.sequenceNumber,
                  qpl_marker_id: m.qpl_marker_id,
                  trace_policy: m.trace_policy,
                  sample_rate: m.sample_rate,
                };
                (this.$2.Transport.post(f, {
                  onComplete: function () {
                    (e.$18(l, "COMPLETE"), e.$4.delete(s));
                  },
                  isHighPri: this.$9,
                }),
                  this.$18(l, "UPLOAD_PENDING"));
              } else
                (this.$18(l, "COMPLETE"),
                  this.$4.delete(s),
                  r("fb-error")
                    .FBLogger("webloom")
                    .warn(
                      "[Loom Trace]Failed to serialize trace, trace will be dropped. QPL marker id: %s",
                      m.qpl_marker_id,
                    ));
            } catch (e) {
              (this.$18(l, "ERROR"), this.$4.delete(s));
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
          (n.$18 = function (t, n) {
            ((t.status = n),
              this.$12.forEach(function (e) {
                return e(t.traceContext, t.status);
              }));
          }),
          (n.$16 = function () {
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
