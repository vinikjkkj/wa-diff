__d(
  "WebLoomCore",
  [
    "FBLogger",
    "InteractionTracingLoomProvider",
    "Promise",
    "QPLEvent",
    "QPLLoomProvider",
    "ResourceTimingLoomProvider",
    "VisualCompletionLoomProvider",
    "WebLoomEventBuffer",
    "WebLoomSampling",
    "WebLoomSerializer",
    "addAnnotations",
    "asyncToGeneratorRuntime",
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
      c,
      d = new Set(["InteractionTracing"]),
      m = (function () {
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
        var a = t.prototype;
        return (
          (a.setDebugLogToConsole = function (t) {
            this.$10 = t;
          }),
          (a.getNextSequenceNumber = function () {
            var e = this.$14;
            return (this.$14++, e);
          }),
          (a.getSessionId = function () {
            return this.$13;
          }),
          (a.getActiveTraces = function () {
            return this.$3;
          }),
          (a.addProvider = function (t, n) {
            (n === void 0 && (n = !0),
              this.$6.has(t.loomProviderId) ||
                (this.$7.push(t), this.$6.add(t.loomProviderId)),
              n &&
                !this.$5.has(t.loomProviderId) &&
                this.$5.add(t.loomProviderId));
          }),
          (a.addStatusListener = function (t) {
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
          (a.maybeStartTraceForInteraction = function (t, n, r, a, i) {
            var e = (c || (c = o("QPLEvent"))).getMarkerId(r),
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
            var u = i + this.$1.appStart,
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
              u,
              this.$1.useLiteTracing ? d : void 0,
            );
          }),
          (a.startTraceManually = function (t, n, r, a, i, l) {
            var e = (c || (c = o("QPLEvent"))).getMarkerId(n),
              s = r + this.$1.appStart,
              u = {
                interaction_id: t,
                qpl_marker_id: "" + e,
                sample_rate: a,
                type: "INTERACTION",
              };
            return (
              l != null && (u.interaction_class = l),
              i != null && (u.trace_policy = i),
              this.startTrace(t, u, s, this.$1.useLiteTracing ? d : void 0)
            );
          }),
          (a.endTraceForInteraction = function (t, n, o) {
            var e,
              a,
              i = t.traceId,
              l = babelHelpers.extends({}, null);
            for (var c in t.annotations)
              for (var d in t.annotations[c]) l[d] = t.annotations[c][d];
            l.qpl_action = n;
            var m = (s || (s = r("mapObject")))(t.tagSet, function (e) {
                return Array.from(e);
              }),
              p = t.completed,
              _ =
                (e = t.markerPoints.visuallyComplete) == null
                  ? void 0
                  : e.timestamp,
              f = (a = t.markerPoints.logVC) == null ? void 0 : a.timestamp,
              g = Math.max(
                p != null ? p : 0,
                _ != null ? _ : 0,
                f != null ? f : 0,
                o != null ? o : 0,
              ),
              h = g > 0 ? g : (u || (u = r("performanceNow")))(),
              y = h + this.$1.appStart;
            return this.endTrace(i, y, l, m);
          }),
          (a.startTrace = function (t, n, a, i) {
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
            var m = this.$18(s);
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
          (a.$18 = function (t) {
            return this.$13 + "_" + t.sequenceNumber;
          }),
          (a.endTrace = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t, a, i, l) {
                var s = this.$3.get(t);
                if (!s)
                  return (
                    r("FBLogger")("web_loom").mustfix(
                      "No trace running for triggerId: %s",
                      t,
                    ),
                    !1
                  );
                var u = s.traceContext.sequenceNumber;
                (this.$3.delete(t),
                  this.$4.set(u, s),
                  this.$19(s, "END_PENDING"));
                var c = [];
                (s.providerInstances.forEach(function (e) {
                  var t = e.loomTraceWillEnd();
                  t && c.push(t);
                }),
                  this.$15 && (this.$15(), (this.$15 = null)));
                var d = window.location.href;
                try {
                  yield (e || (e = n("Promise"))).all(c);
                  var m = this.$1.perfXData,
                    p = s.traceContext.triggerInfo,
                    _ = {
                      app_id: this.$1.appId,
                      start_time_us: Math.round(s.traceContext.startTime * 1e3),
                      end_time_us: Math.round(a * 1e3),
                      trigger_id: s.traceContext.triggerId,
                      trigger_info: p,
                      trigger_metadata: i,
                      trigger_metadata_sets: l,
                      client_push_phase: m.client_push_phase,
                      device_num_cores:
                        m.num_cores != null ? Math.floor(m.num_cores) : null,
                      device_ram_bytes:
                        m.ram_gb != null ? m.ram_gb * 1073741824 : null,
                      is_rtl: m.isRTL,
                      locale: m.locale,
                      network_effective_connection_type:
                        m.effective_connection_type,
                      network_downlink_bps:
                        m.downlink_megabits != null &&
                        m.downlink_megabits * 1e6 < 1e20
                          ? m.downlink_megabits * 1e6
                          : null,
                      network_rtt_ms: m.rtt_ms,
                      client_rev: this.$1.clientRev,
                      server_rev: this.$1.serverRev,
                      spin_mode: this.$1.spinMode,
                      start_uri: s.startURI,
                      end_uri: d,
                    },
                    f = o("WebLoomSerializer").serialize(
                      this.$2,
                      _,
                      s.traceContext.buffer,
                      s.traceContext.jsSelfProfilerData,
                    );
                  if (((s.traceContext.jsSelfProfilerData = null), f != null)) {
                    var g = {
                      trace: f,
                      session_id: this.$13,
                      sequence_number: s.traceContext.sequenceNumber,
                      qpl_marker_id: p.qpl_marker_id,
                      trace_policy: p.trace_policy,
                      sample_rate: p.sample_rate,
                    };
                    (this.$2.Transport.post(g, {
                      onComplete: this.$16 > 0 ? this.$20(u) : this.$21(u, s),
                      isHighPri: this.$9,
                    }),
                      this.$19(s, "UPLOAD_PENDING"));
                  } else
                    (this.$19(s, "COMPLETE"),
                      this.$4.delete(u),
                      r("fb-error")
                        .FBLogger("webloom")
                        .warn(
                          "[Loom Trace]Failed to serialize trace, trace will be dropped. QPL marker id: %s",
                          p.qpl_marker_id,
                        ));
                } catch (e) {
                  (this.$19(s, "ERROR"), this.$4.delete(u));
                }
                return !0;
              },
            );
            function a(e, n, r, o) {
              return t.apply(this, arguments);
            }
            return a;
          })()),
          (a.flush = function (t) {
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
          (a.setIsDevToolsConnected = function (t) {
            this.$9 = t;
          }),
          (a.setStuckTraceTimeoutMs = function (t) {
            this.$16 = t;
          }),
          (a.$20 = function (t) {
            var e = this,
              n = setTimeout(function () {
                var n = e.$4.get(t);
                n != null && (e.$19(n, "ERROR"), e.$4.delete(t));
              }, this.$16);
            return function () {
              clearTimeout(n);
              var r = e.$4.get(t);
              r != null && (e.$19(r, "COMPLETE"), e.$4.delete(t));
            };
          }),
          (a.$21 = function (t, n) {
            var e = this;
            return function () {
              e.$4.has(t) && (e.$19(n, "COMPLETE"), e.$4.delete(t));
            };
          }),
          (a.$19 = function (t, n) {
            ((t.status = n),
              this.$12.forEach(function (e) {
                return e(t.traceContext, t.status);
              }));
          }),
          (a.$17 = function () {
            var e = typeof console != "undefined" ? console : null;
            e && e.log.apply(e, arguments);
          }),
          t
        );
      })();
    l.default = m;
  },
  98,
);
