__d(
  "TimeSliceInteraction",
  [
    "ArtilleryComponentSaverOptionsStatic",
    "ArtilleryTraceIDUtils",
    "ErrorGuard",
    "ErrorPubSub",
    "FBLogger",
    "ProfilingCounters",
    "ProfilingCountersStore",
    "Random",
    "ResourceTimingsStore",
    "ResourceTypes",
    "TSIAdsReliabilityHook",
    "TimeSlice",
    "TimeSliceInteractionBootloadForPost",
    "TimeSliceInteractionReliability",
    "TimeSliceInteractionSV",
    "TimingAnnotations",
    "Visibility",
    "err",
    "performance",
    "performanceAbsoluteNow",
    "performanceNavigationStart",
    "requestIdleCallbackAcrossTransitions",
  ],
  function (t, n, r, o, a, i) {
    var e,
      l,
      s,
      u,
      c,
      d = { pointGroup: null, type: null, isPointOfInterest: null },
      m = new Map(),
      p = new Map(),
      _ = new (n("TimingAnnotations").EmptyTimingAnnotations)(),
      f = new (n("TimingAnnotations").EmptyTraceTimingAnnotations)(),
      g = "artillery_javascript_actions";
    function h(e) {
      var t = "visibility_state_" + e,
        n = { isPointOfInterest: !0, pointGroup: "visibility_state_changes" };
      return function () {
        return L.informGlobally(t, n);
      };
    }
    if (n("Visibility") && n("Visibility").addListener) {
      var y;
      ((y = n("Visibility")).addListener(y.HIDDEN, h("hidden")),
        y.addListener(y.VISIBLE, h("visible")));
    }
    function C(e) {
      if (n("Visibility")) {
        var t = n("Visibility").isHidden()
          ? n("Visibility").HIDDEN
          : n("Visibility").VISIBLE;
        e.inform("visibility_state_" + t, {
          pointGroup: "visibility_state_changes",
        });
      }
    }
    function b(e) {
      var t = n("TimeSliceInteractionSV").interaction_to_coinflip,
        r = Object.prototype.hasOwnProperty.call(t, e)
          ? t[e]
          : n("TimeSliceInteractionSV").default_rate,
        o = !1;
      n("Random").coinflip(r) && (o = !0);
      var a = 0;
      return (
        o ? (a = 1 / r) : r === 0 ? (a = 0) : (a = 1 - 1 / r),
        { enabled: o, probability: a }
      );
    }
    function v() {
      return p.size !== 0;
    }
    function S(e) {
      return babelHelpers.extends({}, e, {
        annotations: e.annotations.prepareToSend(),
      });
    }
    function R(t, r) {
      var o = (
          e || (e = n("ProfilingCountersStore"))
        ).getNestedTotalsByAttributions(r, t),
        a = o.attributed,
        i = o.unattributed,
        l = {};
      for (var s of Object.entries(a)) {
        var u = s[0],
          c = s[1];
        l["internal:" + u] = c;
      }
      for (var d of Object.entries(i)) {
        var m = d[0],
          p = d[1];
        l["external:" + m] = p;
      }
      return l;
    }
    var L = (function () {
      "use strict";
      function r(t, r) {
        var o = this;
        (r === void 0 && (r = !1),
          (this.$2 = null),
          (this.$4 = !0),
          (this.$5 = []),
          (this.$6 = !1),
          (this.$7 = []),
          (this.$8 = []),
          (this.$9 = new (n("TimingAnnotations").TraceTimingAnnotations)()),
          (this.$11 = null),
          (this.$16 = {}));
        var a = b(t),
          i = a.enabled,
          u = a.probability;
        ((this.$1 = t),
          (this.$12 = u),
          (this.$10 = r
            ? n("performanceNavigationStart")()
            : (l || (l = n("performanceAbsoluteNow")))()),
          (this.$15 = new Map()));
        var c = this.inform("trace_started", {
          type: 3,
          pointGroup: "e2e",
          isPointOfInterest: !0,
          ts: this.$10,
        });
        if (
          ((s || (s = n("performance"))) &&
            (s || (s = n("performance"))).now &&
            c.addStringAnnotation(
              "offset_from_start_of_req_ms",
              (s || (s = n("performance"))).now().toString(),
            ),
          C(this),
          p.set(this, []),
          this.isEnabledAndNotDone() &&
            (this.$3 = n("ArtilleryTraceIDUtils").newTraceId()),
          !i)
        )
          this.disable(!0);
        else if (this.isEnabledAndNotDone()) {
          var d = n("ProfilingCounters").getObserver().expressInterest();
          (this.$8.push(d),
            (this.$13 = (e || (e = n("ProfilingCountersStore")))
              .getInstance()
              .open()),
            (this.$14 = n("TimeSlice").getBuffer().open()),
            this.$8.push(function () {
              (o.$14 && o.$14.close(), o.$13 && o.$13.close());
            }));
        }
        n("TimeSliceInteractionReliability").bumpLifecycleCounter(
          "starting",
          t,
          "full",
        );
      }
      ((r.create = function (t, n) {
        n === void 0 && (n = !1);
        var e = new r(t, n);
        return (
          e.trace().addStringAnnotation("initiatorType", "manually_ended"),
          e
        );
      }),
        (r.informGlobally = function (t, r) {
          if (!v()) return _;
          var e = (l || (l = n("performanceAbsoluteNow")))(),
            o = new (n("TimingAnnotations"))(),
            a = babelHelpers.extends(
              {
                ts: e,
                name: t,
                annotations: o,
                guardStack: n("TimeSlice").getGuardNameStack(),
              },
              d,
              r,
            );
          return (
            o.addStringAnnotation("global_point", "1"),
            p.forEach(function (e) {
              return e.push(a);
            }),
            o
          );
        }));
      var o = r.prototype;
      return (
        (o.recordWithExtraSaver = function (t, n, r) {
          if (this.isEnabled()) {
            var e = this.$15.get(t) || {};
            (n != null && r != null && (e[n] = r), this.$15.set(t, e));
          }
          return this;
        }),
        (o.inform = function (t, r) {
          if (!this.isEnabledAndNotDone()) return _;
          var e = r == null ? void 0 : r.ts,
            o =
              e != null && e !== 0
                ? e
                : (l || (l = n("performanceAbsoluteNow")))(),
            a = new (n("TimingAnnotations"))(),
            i = this.isEnabledAndNotDone()
              ? n("TimeSlice").getGuardNameStack()
              : [];
          return (
            this.$7.push(
              babelHelpers.extends(
                { ts: o, name: t, annotations: a, guardStack: i },
                d,
                r,
              ),
            ),
            a
          );
        }),
        (o.informPointWithOverride = function (t, r) {
          var e = (l || (l = n("performanceAbsoluteNow")))();
          if (!this.isEnabledAndNotDone() || !this.$16) return _;
          var o = this.isEnabledAndNotDone()
              ? n("TimeSlice").getGuardNameStack()
              : [],
            a = this.$16[t];
          if (a) ((a.ts = e), (a.guardStack = o), Object.assign(a, r || {}));
          else {
            var i = new (n("TimingAnnotations"))();
            this.$16[t] = babelHelpers.extends(
              { ts: e, name: t, annotations: i, guardStack: o },
              d,
              r,
            );
          }
          return this.$16[t].annotations;
        }),
        (o.invokeWithProfiling = function (r, o) {
          if (!this.isEnabledAndNotDone()) return o();
          var e = this.inform("start_" + r);
          this.$5.push(e);
          var a = (c || (c = n("ErrorGuard"))).applyWithGuard(o, t, [], {
            name: r,
          });
          return (this.inform("finished_" + r), this.$5.pop(), a);
        }),
        (o.getCurrentInvocation = function () {
          return this.isEnabledAndNotDone()
            ? this.$5.length < 1
              ? _
              : this.$5[this.$5.length - 1]
            : _;
        }),
        (o.finish = function (t) {
          var e = this;
          if (
            (this.$17(
              t === !0 ? "client_tsi_finish_on_unload" : "client_tsi_finish",
            ),
            !!this.$4)
          ) {
            if (t === !0 && this.$11) {
              this.$11();
              return;
            }
            if (this.$6)
              n("FBLogger")("TimeSliceInteraction").warn(
                "Trace was already marked as ended",
              );
            else {
              (C(this),
                n("TimeSliceInteractionReliability").bumpLifecycleCounter(
                  "finishing",
                  this.$1,
                  "full",
                ),
                this.inform("trace_ended", {
                  type: 4,
                  pointGroup: "e2e",
                  isPointOfInterest: !0,
                }));
              var r = this.isEnabledAndNotDone();
              (r &&
                this.trace().addStringAnnotation("weight", "" + 1 / this.$12),
                navigator &&
                  navigator.connection &&
                  (typeof navigator.connection.downlink == "number" &&
                    this.trace().addStringAnnotation(
                      "browser_downlink_megabits",
                      navigator.connection.downlink.toString(),
                    ),
                  typeof navigator.connection.rtt == "number" &&
                    this.trace().addStringAnnotation(
                      "browser_rtt_ms",
                      navigator.connection.rtt.toString(),
                    ),
                  typeof navigator.connection.effectiveType == "string" &&
                    this.trace().addStringAnnotation(
                      "browser_effective_connection_type",
                      navigator.connection.effectiveType,
                    )));
              var o = (l || (l = n("performanceAbsoluteNow")))(),
                a = p.get(this);
              p.delete(this);
              var i = this.$13 != null ? this.$13.close() : [],
                s = this.$14 != null ? this.$14.close() : [],
                u = this.$14 != null ? this.$14.hasOverflown() : !1,
                c = this.$14 != null ? this.$14.getOverflowSize() : 0;
              if (r) {
                var d = function () {
                  (r && e.$18(o, a, i, s, u, c), e.$19());
                };
                t === !0
                  ? d()
                  : (this.$11 = function () {
                      return n("requestIdleCallbackAcrossTransitions")(
                        function () {
                          return d();
                        },
                      );
                    });
              }
              (this.$11 && this.$11(), (this.$6 = !0));
            }
          }
        }),
        (o.trace = function () {
          return this.$4 ? this.$9 : f;
        }),
        (o.getTraceID = function () {
          return this.$4 ? this.$3 : null;
        }),
        (o.isEnabled = function () {
          return this.$4;
        }),
        (o.disable = function (t) {
          (t === void 0 && (t = !1),
            p.delete(this),
            !t &&
              this.$4 &&
              n("TimeSliceInteractionReliability").bumpLifecycleCounter(
                "disabled",
                this.$1,
                "full",
              ),
            (this.$4 = !1),
            this.$19());
        }),
        (o.receiveAsyncResponse = function (t) {
          return (
            t != null && t.artillery_info && this.isEnabledAndNotDone()
              ? this.$20(t.artillery_info.artillery_join_points)
              : this.disable(),
            this
          );
        }),
        (o.addArtilleryIDHeader = function (t) {
          return (
            this.$4 &&
              t.setRequestHeader(
                "X-ARTILLERY-REQ-METADATA",
                JSON.stringify({ trace_id: this.$3 }),
              ),
            this
          );
        }),
        (o.$20 = function (t) {
          return this.isEnabledAndNotDone() ? ((this.$2 = t), this) : this;
        }),
        (o.$18 = function (r, o, a, i, l, u) {
          var t = this;
          if ((this.$17("client_tsi_post_start"), !!this.isEnabled())) {
            var c = o != null ? this.$7.concat(o) : this.$7;
            c.push.apply(c, Object.values(this.$16));
            var d = c.map(S),
              m = [],
              p = new Map(this.$15.entries());
            n("TimeSliceInteractionBootloadForPost")(
              function (o, c, _, f, h, y) {
                (t.$17("client_tsi_post_ready"),
                  n("TimeSliceInteractionReliability").bumpLifecycleCounter(
                    "posting",
                    t.$1,
                    "full",
                  ));
                var C = f.getMetrics(
                  t.$10,
                  r,
                  i,
                  (e || (e = n("ProfilingCountersStore"))).toMap(a),
                  {
                    includeRefTreeIDs: !0,
                    counterFunction: function (t) {
                      return R(m, t);
                    },
                  },
                );
                (t.$9.addStringAnnotation(
                  "overflown_timeslice_buffer",
                  l ? "1" : "0",
                ),
                  t.$9.addStringAnnotation(
                    "overflown_timeslice_entry_count",
                    "" + u,
                  ));
                var b;
                if (
                  (s || (s = n("performance"))) &&
                  (s || (s = n("performance"))).timing &&
                  (s || (s = n("performance"))).timing.navigationStart
                ) {
                  var v = i.length > 0 ? i[0].begin : null,
                    S = _.getMetrics(
                      v != null && v < t.$10 ? v : t.$10,
                      {},
                      null,
                      r,
                      !0,
                      !0,
                    );
                  b = S.data;
                  var L = S.diagnostics;
                  (L &&
                    (t.$9.addStringAnnotation(
                      "number_of_valid_entries",
                      L.numValidEntries.toString(),
                    ),
                    t.$9.addStringAnnotation(
                      "number_of_success_metrics",
                      L.numSuccessfulMetrics.toString(),
                    )),
                    Object.values(b).forEach(function (e) {
                      return e.forEach(function (e) {
                        var t = e.desc,
                          r = e.type,
                          o = null;
                        ((r === n("ResourceTypes").JS ||
                          r === n("ResourceTypes").CSS ||
                          r === n("ResourceTypes").XHR) &&
                          (o = n("ResourceTimingsStore").getAnnotationsFor(
                            r,
                            t,
                          )),
                          (e.annotations = o));
                      });
                    }));
                } else b = {};
                var E = {};
                p.forEach(function (e, t) {
                  var r = n("ArtilleryComponentSaverOptionsStatic").options[t],
                    o = !!(r && r.shouldCompress);
                  if (o) {
                    var a = h.compressStringToSnappy(JSON.stringify(e));
                    if (a != null) {
                      E[t] = { data: a, isCompressed: !0 };
                      return;
                    }
                  }
                  E[t] = { isCompressed: !1, data: e };
                });
                var k = {
                  trace_id: t.$3,
                  join_points: t.$2,
                  action_name: t.$1,
                  points: d,
                  traceAnnotations: t.$9.prepareToSend(),
                  timeslices: f.formatMetricsForTransport(C),
                  resource_timings: b,
                  extra_savers: E,
                };
                ((k = y.addCommonValues(k)),
                  n("TimeSliceInteractionSV").compression_enabled &&
                    (k = t.$21(h, k)),
                  o.post(g, k, { compress: !1 }));
              },
            );
          }
        }),
        (o.$21 = function (t, n) {
          var e = [
              "points",
              "timeslices",
              "resource_timings",
              "sampler_profile",
            ],
            r = {};
          return (
            e.forEach(function (e) {
              var o = n[e];
              if (o != null) {
                var a = JSON.stringify(o),
                  i = t.compressStringToSnappy(a);
                i !== null && ((r[e] = i), delete n[e]);
              }
            }),
            babelHelpers.extends({}, n, { miny: r })
          );
        }),
        (o.$19 = function () {
          ((this.$7 = []),
            this.$8 &&
              (this.$8.forEach(function (e) {
                return e();
              }),
              (this.$8 = [])),
            (this.$16 = {}),
            (this.$11 = null),
            (this.$15 = new Map()));
        }),
        (o.isEnabledAndNotDone = function () {
          return this.$4 && !this.$6;
        }),
        (o.isDone = function () {
          return this.$6;
        }),
        (o.$17 = function (t) {
          n("TSIAdsReliabilityHook").event(this.$1, t, this.getTraceID());
        }),
        r
      );
    })();
    a.exports = L;
  },
  null,
);
