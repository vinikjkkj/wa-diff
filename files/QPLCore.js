__d(
  "QPLCore",
  [
    "QPLCoreHelpers",
    "QPLEvent",
    "QPLMarkerMap",
    "QPLTimestamp",
    "QPLUtils",
    "QuickPerformanceLoggerTypes",
    "uuidv4",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e) {
      if (e == null) return e;
      var t = {};
      for (var n in e) t[n] = String(e[n]);
      return t;
    }
    function u(e) {
      if (e == null) return e;
      var t = {};
      for (var n in e) t[n] = e[n].map(String);
      return t;
    }
    function c(e, t, n, r) {
      var o,
        a = t[e];
      if (!a || Object.entries(a).length === 0) return null;
      var i = {};
      return (
        Object.keys(a).forEach(function (e) {
          var t = a[e];
          t == null || t.length === 0
            ? delete a[e]
            : r
              ? (i[e] = r(t))
              : (i[e] = t);
        }),
        (o = {}),
        (o[e] = babelHelpers.extends({}, n && n[e], i)),
        o
      );
    }
    function d(e, t) {
      if (e == null) return t;
      var n = babelHelpers.extends(
        {},
        t,
        c("string", e, t),
        c("int", e, t, Math.trunc),
        c("double", e, t),
        c("bool", e, t),
        c("string_array", e, t),
        c("int_array", e, t, function (e) {
          return e.map(Math.trunc);
        }),
        c("double_array", e, t),
        c("bool_array", e, t),
      );
      return (
        Object.keys(n).forEach(function (e) {
          var t = n[e];
          (t == null || Object.entries(t).length === 0) && delete n[e];
        }),
        Object.entries(n).length !== 0 ? n : null
      );
    }
    function m(e, t) {
      var n = {};
      (g.isMarkerTracked(t) && (n.tracked_for_loss = !0),
        typeof t.absoluteTimeOrigin == "number" &&
          (n.absolute_time_origin_ns = o(
            "QPLTimestamp",
          ).timestampToSerializedNanoseconds(t.absoluteTimeOrigin)));
      var r = babelHelpers.extends({}, e, n);
      return r;
    }
    function p(e, t) {
      if (!t) return e;
      var n = {};
      return (
        t.string && (n.annotations = t.string),
        t.int && (n.annotations_int = s(t.int)),
        t.double && (n.annotations_double = t.double),
        t.bool && (n.annotations_bool = t.bool),
        t.string_array && (n.annotations_string_array = t.string_array),
        t.int_array && (n.annotations_int_array = u(t.int_array)),
        t.double_array && (n.annotations_double_array = t.double_array),
        t.bool_array && (n.annotations_bool_array = t.bool_array),
        babelHelpers.extends({}, e, n)
      );
    }
    var _ = new Map([
      [
        o("QuickPerformanceLoggerTypes").EVENT_BASED_SAMPLING,
        "random_sampling",
      ],
      [o("QuickPerformanceLoggerTypes").USER_BASED_SAMPLING, "per_user"],
    ]);
    function f(e, t) {
      return e === 0
        ? !1
        : e <= 1
          ? !0
          : typeof t == "string"
            ? o("QPLUtils").unsignedCrc32(t) % e === 0
            : Math.random() * e <= 1;
    }
    var g = (function () {
      function t(e) {
        var t;
        ((this.$2 = 1),
          (this.$3 = 100),
          (this.$4 = new Map()),
          (this.$5 = new Map()),
          (this.$6 = null),
          (this.$8 = new Map()),
          (this.activeMarkers = new Map()),
          (this.$1 = e),
          (this.$7 = e.logger),
          (this.$5 = (t = e.listenersWithMarker) != null ? t : new Map()),
          (this.$9 = new (r("QPLMarkerMap"))()));
      }
      var n = t.prototype;
      return (
        (n.$10 = function (t, n) {
          try {
            return n();
          } catch (e) {
            this.$1.onError && this.$1.onError(t, e);
          }
        }),
        (n.getMarker = function (n, r) {
          var t = this;
          return this.$10("getMarker", function () {
            var a = t.$11((e || (e = o("QPLEvent"))).getMarkerId(n));
            if (!a) return null;
            var i = a.get(r);
            return i || null;
          });
        }),
        (n.isMarkerOn = function (n, r) {
          var t,
            a = this;
          return (
            r === void 0 && (r = 0),
            (t = this.$10("isMarkerOn", function () {
              var t = a.$11((e || (e = o("QPLEvent"))).getMarkerId(n));
              if (!t) return !1;
              var i = t.get(r);
              return !!i;
            })) != null
              ? t
              : !1
          );
        }),
        (t.isMarkerTracked = function (t) {
          return t.trackedForLoss === !0 || t.type === 2;
        }),
        (n.$11 = function (t) {
          return this.activeMarkers.get(t);
        }),
        (n.addMarker = function (t, n, r) {
          var e = this.activeMarkers.get(t);
          (e || ((e = new Map()), this.activeMarkers.set(t, e)), e.set(n, r));
        }),
        (n.deleteMarker = function (t, n) {
          var e;
          ((e = this.activeMarkers.get(t)) == null || e.delete(n),
            this.$12(t, n));
        }),
        (n.markerStart = function (r, a, i, l) {
          var n = this;
          (a === void 0 && (a = 0),
            i === void 0 && (i = this.currentTimestamp()));
          var s = l === void 0 ? {} : l,
            u = s.cancelExisting,
            c = u === void 0 ? !1 : u,
            d = s.cancelOnUnload,
            m = d === void 0 ? !1 : d,
            p = s.trackedForLoss,
            _ = p === void 0 ? !1 : p,
            f = s.type,
            g = f === void 0 ? 1 : f,
            h = s.samplingBasis,
            y = h === void 0 ? null : h,
            C = s.qplInternalDoNotUseAbsoluteTimeOrigin,
            b = s.timeoutMS,
            v = b === void 0 ? null : b,
            S = s.onMarkerTimeout__DoNotUse,
            R = S === void 0 ? null : S,
            L = s.enableE2ETracing,
            E = L === void 0 ? !1 : L,
            k = s.crashResilient,
            I = k === void 0 ? !1 : k;
          this.$10("markerStart", function () {
            var l = n.getMarker(r, a);
            if (l) {
              var s = Math.round(i - l.timestamp);
              c &&
                (n.markerAnnotate(
                  r,
                  {
                    string: { cancelType: "DUPLICATE_EVENT" },
                    int: { time_between_markers_ms: s },
                  },
                  { instanceKey: a },
                ),
                n.markerEnd(r, 4, a, i));
            }
            var u = n.$13(r, y),
              d = u[0],
              p = u[1],
              f = u[2],
              h = null;
            E &&
              (h = n.$1.e2eTracingIDGenerator
                ? n.$1.e2eTracingIDGenerator(r)
                : null);
            var b = {
              event: r,
              passesSampling: d,
              timestamp: i,
              sampleRate: p,
              samplingMethod: f,
              points: [],
              cancelOnUnload: m,
              trackedForLoss: _,
              type: g,
              timeoutMS: v,
              e2eTracingID: h,
              isCrashResilient: I,
            };
            if (
              (typeof C == "number" && (b.absoluteTimeOrigin = C),
              n.$4.forEach(function (e) {
                e.onMarkerStart && e.onMarkerStart(r, a, i);
              }),
              n.$5.forEach(function (e) {
                e.onMarkerStartWithMarker(r, a, i, b);
              }),
              d &&
                (n.addMarker((e || (e = o("QPLEvent"))).getMarkerId(r), a, b),
                v != null && n.$14(r, a, v, R)),
              d &&
                t.isMarkerTracked(b) &&
                n.$15({
                  marker_id: 27787271,
                  action_id: 51,
                  sample_rate: 1,
                  annotations_int: {
                    tracked_marker_id: String(
                      (e || (e = o("QPLEvent"))).getMarkerId(r),
                    ),
                  },
                  marker_type: 1,
                }),
              h !== null)
            ) {
              var S;
              n.markerAnnotate(
                r,
                { string: ((S = {}), (S.qpl_e2e__tracing_id = h), S) },
                { instanceKey: a },
              );
            }
            d &&
              n.$4.forEach(function (e) {
                e.onMarkerStarted && e.onMarkerStarted(r, a, i, n.$16(b));
              });
          });
        }),
        (n.$16 = function (t) {
          if (t == null) {
            var e = { isCrashResilient: !1 };
            return e;
          }
          return { isCrashResilient: t.isCrashResilient };
        }),
        (n.$17 = function (t, n) {
          this.$9.delete(t, n);
        }),
        (n.$18 = function (t, n, r) {
          this.$9.set(t, n, r);
        }),
        (n.$12 = function (t, n) {
          var e,
            r = this.$9.get(t, n);
          r &&
            (e = this.$1.runtimeAbstractionLayer) != null &&
            e.clearTimeout &&
            (this.$1.runtimeAbstractionLayer.clearTimeout(r), this.$17(t, n));
        }),
        (n.$14 = function (n, r, a, i) {
          var t = this,
            l = (e || (e = o("QPLEvent"))).getMarkerId(n);
          try {
            var s, u;
            if (
              (this.$12(l, r),
              !((s = this.$1.runtimeAbstractionLayer) != null && s.setTimeout))
            )
              return;
            var c =
              (u = this.$1.runtimeAbstractionLayer) == null
                ? void 0
                : u.setTimeout(function () {
                    (i != null && i(n, r),
                      t.$4.forEach(function (e) {
                        e.onTimeoutEvent != null &&
                          e.onTimeoutEvent({
                            event: n,
                            instanceKey: r,
                            passesSampling: !0,
                          });
                      }),
                      t.$17(l, r),
                      t.markerEnd(n, 113, r));
                  }, a);
            this.$18(l, r, c);
          } catch (e) {}
        }),
        (n.markerAnnotate = function (t, n, r) {
          var e = this,
            o = r === void 0 ? {} : r,
            a = o.instanceKey,
            i = a === void 0 ? 0 : a;
          this.$10("markerAnnotate", function () {
            e.$4.forEach(function (e) {
              Object.keys(n).forEach(function (r) {
                var o = n[r];
                o &&
                  Object.keys(o).forEach(function (n) {
                    e.onAnnotation && e.onAnnotation(t, i, n, o[n], r);
                  });
              });
            });
            var r = e.getMarker(t, i);
            r && (r.annotations = d(n, r.annotations));
          });
        }),
        (n.markerPoint = function (t, n, r) {
          var e = this,
            o = r === void 0 ? {} : r,
            a = o.instanceKey,
            i = a === void 0 ? 0 : a,
            l = o.data,
            s = o.timestamp,
            u = s === void 0 ? this.currentTimestamp() : s;
          this.$10("markerPoint", function () {
            e.$4.forEach(function (e) {
              e.onMarkerPoint && e.onMarkerPoint(t, i, n, l, u);
            });
            var r = e.getMarker(t, i);
            if (r) {
              var o = { name: n, timeSinceStart: Math.trunc(u - r.timestamp) },
                a = d(l);
              (a && (o.data = a), r.points.push(o));
            }
          });
        }),
        (n.markerEnd = function (n, r, a, i) {
          var t = this;
          (a === void 0 && (a = 0),
            i === void 0 && (i = this.currentTimestamp()),
            this.$10("markerEnd", function () {
              var l = t.getMarker(n, a);
              if (!l) {
                t.$4.forEach(function (e) {
                  var o = { durationMs: 0, passesSampling: !1 };
                  e.onMarkerEnd &&
                    e.onMarkerEnd(
                      r,
                      n,
                      a,
                      i,
                      babelHelpers.extends({}, o, t.$16(l)),
                    );
                });
                return;
              }
              var c = r,
                d = t.$19(l, l.timestamp, i);
              d && r === 2 && (c = 5947);
              var f = l.points.map(function (e) {
                  return e.data
                    ? {
                        name: e.name,
                        timeSinceStart: String(e.timeSinceStart),
                        data: (function (t, n, r, o, a, i, l, c) {
                          var d = {};
                          if (
                            (((t = e.data) == null ? void 0 : t.string) !=
                              null && (d.string = e.data.string),
                            ((n = e.data) == null ? void 0 : n.string_array) !=
                              null && (d.string_array = e.data.string_array),
                            ((r = e.data) == null ? void 0 : r.int) != null)
                          ) {
                            var m;
                            d.int = s((m = e.data) == null ? void 0 : m.int);
                          }
                          if (
                            ((o = e.data) == null ? void 0 : o.int_array) !=
                            null
                          ) {
                            var p;
                            d.int_array = u(
                              (p = e.data) == null ? void 0 : p.int_array,
                            );
                          }
                          return (
                            ((a = e.data) == null ? void 0 : a.double) !=
                              null && (d.double = e.data.double),
                            ((i = e.data) == null ? void 0 : i.double_array) !=
                              null && (d.double_array = e.data.double_array),
                            ((l = e.data) == null ? void 0 : l.bool) != null &&
                              (d.bool = e.data.bool),
                            ((c = e.data) == null ? void 0 : c.bool_array) !=
                              null && (d.bool_array = e.data.bool_array),
                            d
                          );
                        })(),
                      }
                    : {
                        name: e.name,
                        timeSinceStart: String(e.timeSinceStart),
                      };
                }),
                g = {
                  marker_id: (e || (e = o("QPLEvent"))).getMarkerId(n),
                  action_id: c,
                  instance_id: a,
                  sample_rate: l.sampleRate,
                  method: _.get(l.samplingMethod),
                  duration_ns: o("QPLTimestamp").calculateDurationAsNanoseconds(
                    l.timestamp,
                    i,
                  ),
                  points: f,
                  metadata: {
                    application_analytics: {
                      time_since_qpl_module_init: i - t.$1.moduleLoadTimestamp,
                    },
                  },
                  marker_type: l.type,
                  flags: 1,
                  unique_marker_id_debug_only: l.uniqueMarkerDebugId,
                },
                h = p(g, l.annotations),
                y = m(h, l);
              (t.$4.forEach(function (e) {
                var t = {
                  durationMs: l ? i - l.timestamp : 0,
                  logData: y,
                  passesSampling: l.passesSampling,
                  isCrashResilient: l.isCrashResilient,
                };
                e.onMarkerEnd && e.onMarkerEnd(c, n, a, i, t);
              }),
                l.passesSampling &&
                  (l.timestampIsApproximate !== !0 && t.$15(y),
                  t.$6 === (e || (e = o("QPLEvent"))).getMarkerId(n) &&
                    t.$1.onDebuggingIdEnded &&
                    t.$1.onDebuggingIdEnded()),
                t.deleteMarker(e.getMarkerId(n), a));
            }));
        }),
        (n.markerDrop = function (n, r) {
          var t = this;
          (r === void 0 && (r = 0),
            this.$10("markerDrop", function () {
              var a = t.getMarker(n, r);
              t.deleteMarker((e || (e = o("QPLEvent"))).getMarkerId(n), r);
              var i = t.currentTimestamp();
              t.$4.forEach(function (e) {
                if (e.onMarkerDrop) {
                  var o;
                  e.onMarkerDrop(
                    n,
                    r,
                    i,
                    babelHelpers.extends(
                      {
                        passesSampling:
                          (o = a == null ? void 0 : a.passesSampling) != null
                            ? o
                            : !1,
                      },
                      t.$16(a),
                    ),
                  );
                }
              });
            }));
        }),
        (n.markEvent = function (n, r, a, i) {
          var t = this,
            l = i === void 0 ? {} : i,
            s = l.timestamp,
            u = s === void 0 ? this.currentTimestamp() : s,
            c = l.annotations;
          this.$10("markEvent", function () {
            var i;
            if (
              (t.$4.forEach(function (e) {
                e.onMarkEvent &&
                  e.onMarkEvent({ event: n, timestamp: u, annotations: c });
              }),
              !((i = t.$1.quickLogConfigHelper) != null && i.isKillswitchOn()))
            ) {
              var l = t.$13(n),
                s = l[0],
                m = l[1],
                f = l[2];
              if (s) {
                var g = d(typeof c == "function" ? c() : c),
                  h = {
                    marker_id: (e || (e = o("QPLEvent"))).getMarkerId(n),
                    action_id: 51,
                    instance_id: 0,
                    sample_rate: m,
                    method: _.get(f),
                    da_type: r,
                    da_level: a,
                    metadata: {
                      application_analytics: {
                        time_since_qpl_module_init:
                          u - t.$1.moduleLoadTimestamp,
                      },
                    },
                    marker_type: 1,
                    flags: 1,
                  };
                t.$15(p(h, g));
              }
            }
          });
        }),
        (n.markerStartForJoin = function (t, n, r) {
          var e = this,
            a = r === void 0 ? {} : r,
            i = a.instanceKey,
            l = i === void 0 ? 0 : i,
            s = a.cancelExisting,
            u = s === void 0 ? !1 : s,
            c = a.cancelOnUnload,
            d = c === void 0 ? !1 : c,
            m = a.trackedForLoss,
            p = m === void 0 ? !1 : m,
            _ = a.type,
            f = _ === void 0 ? 1 : _,
            g = a.qplInternalDoNotUseAbsoluteTimeOrigin,
            h = g === void 0 ? null : g,
            y = a.timeoutMS,
            C = y === void 0 ? null : y,
            b = a.monotonicTimestamp,
            v = b === void 0 ? this.currentTimestamp() : b,
            S = a.absoluteTimeOriginMs,
            R = S === void 0 ? this.currentUnixTimestamp() : S,
            L = a.sourceIsPrimary,
            E = L === void 0 ? !1 : L,
            k = a.closeSession,
            I = a.onMarkerTimeout__DoNotUse,
            T = a.unreliableSourceClockProcessId,
            D = a.crashResilient,
            x = a.joinNamespaces,
            $ = a.actionPriority;
          this.$10("markerStartForJoin", function () {
            e.markerStart(t, l, v, {
              cancelExisting: u,
              cancelOnUnload: d,
              trackedForLoss: p,
              type: f,
              samplingBasis: n,
              qplInternalDoNotUseAbsoluteTimeOrigin: h,
              timeoutMS: C,
              onMarkerTimeout__DoNotUse: I,
              crashResilient: D,
            });
            var r = o("QPLCoreHelpers").generateJoinAnnotations(
              n,
              R,
              E,
              k,
              T,
              x,
              $,
            );
            e.markerAnnotate(t, r, { instanceKey: l });
          });
        }),
        (n.addAlignmentPointForJoin = function (t, n, r) {
          var e = this,
            a = r === void 0 ? {} : r,
            i = a.instanceKey,
            l = i === void 0 ? 0 : i,
            s = a.requestId,
            u = s === void 0 ? "default_id" : s,
            c = a.timestamp,
            d = c === void 0 ? this.currentTimestamp() : c;
          this.$10("addAlignmentPointForJoin", function () {
            var r = o("QPLCoreHelpers").getAlignmentPointName(n, u);
            r != null && e.markerPoint(t, r, { instanceKey: l, timestamp: d });
          });
        }),
        (n.setAlwaysOnSampleRate = function (t, n) {
          this.$8.set(t, n);
        }),
        (n.setDefaultSampleRate = function (t) {
          this.$3 = t;
        }),
        (n.currentTimestamp = function () {
          var e,
            t = this;
          return (e = this.$10("currentTimestamp", function () {
            return t.$1.monotonicNowMs();
          })) != null
            ? e
            : 0;
        }),
        (n.currentUnixTimestamp = function () {
          var e,
            t = this;
          return (e = this.$10("currentUnixTimestamp", function () {
            return t.$1.unixNowMs();
          })) != null
            ? e
            : 0;
        }),
        (n.enableDebug = function (t) {
          this.$6 = t;
        }),
        (n.disableDebug = function () {
          this.$6 = null;
        }),
        (n.addListener = function (t) {
          var e,
            n = this;
          return (e = this.$10("addListener", function () {
            var e = n.$2++;
            return (
              n.$4.set(e, t),
              {
                dispose: function () {
                  n.$4.delete(e);
                },
              }
            );
          })) != null
            ? e
            : { dispose: function () {} };
        }),
        (n.$13 = function (n, r) {
          var t, a;
          if (
            (this.$1.unsampleAllEvents && this.$1.unsampleAllEvents()) ||
            this.$6 === (e || (e = o("QPLEvent"))).getMarkerId(n)
          )
            return [
              !0,
              1,
              o("QuickPerformanceLoggerTypes").EVENT_BASED_SAMPLING,
            ];
          var i = (e || (e = o("QPLEvent"))).getSampleRate(n),
            l = e.getSamplingMethod(n);
          if (
            this.$8.get(n) == null &&
            i !== 0 &&
            l === o("QuickPerformanceLoggerTypes").USER_BASED_SAMPLING
          )
            return [
              !0,
              i != null ? i : 1,
              o("QuickPerformanceLoggerTypes").USER_BASED_SAMPLING,
            ];
          var s =
              (t = (a = this.$8.get(n)) != null ? a : i) != null ? t : this.$3,
            u =
              l != null
                ? l
                : o("QuickPerformanceLoggerTypes").EVENT_BASED_SAMPLING,
            c = f(s, r);
          return [c, s, u];
        }),
        (n.$15 = function (t) {
          this.$4.forEach(function (e) {
            e.onUploadEvent && e.onUploadEvent(t);
          });
          var e = this.$1.decorateEventBeforeUpload
            ? this.$1.decorateEventBeforeUpload(t)
            : t;
          this.$1.sendEvent(t, e);
        }),
        (n.$19 = function (t, n, r) {
          if (t.timeoutMS == null) return !1;
          var e = r - n;
          return e >= t.timeoutMS;
        }),
        (n.getActiveMarkerIds = function (t) {
          var e,
            n = this,
            r = t.type;
          return (e = this.$10("getActiveMarkerIds", function () {
            var e = new Set();
            return (
              n.activeMarkers.forEach(function (t, n) {
                t.forEach(function (t) {
                  if (t.type === r) {
                    e.add(n);
                    return;
                  }
                });
              }),
              Array.from(e)
            );
          })) != null
            ? e
            : [];
        }),
        (n.getActiveE2ETraceIds = function () {
          var e,
            t = this;
          return (e = this.$10("getActiveE2ETraceIds", function () {
            var e = new Map();
            return (
              t.activeMarkers.forEach(function (t, n) {
                var r = new Map();
                (t.forEach(function (e, t) {
                  e.e2eTracingID != null &&
                    r.set(t, { e2eTraceID: e.e2eTracingID, qplEvent: e.event });
                }),
                  r.size > 0 && e.set(n, r));
              }),
              e
            );
          })) != null
            ? e
            : new Map();
        }),
        (n.getActiveE2ETraceIdsAsArray = function () {
          var e,
            t = this;
          return (e = this.$10("getActiveE2ETraceIdsAsArray", function () {
            var e = [];
            return (
              t.activeMarkers.forEach(function (t, n) {
                t.forEach(function (t, n) {
                  t.e2eTracingID != null && e.push(t.e2eTracingID);
                });
              }),
              e
            );
          })) != null
            ? e
            : [];
        }),
        (n.forEachMarkerInstance = function (t, n) {
          var e = this;
          this.$10("forEachMarkerInstance", function () {
            var r = e.$11(t);
            if (r)
              for (var o of r.entries()) {
                var a = o[0],
                  i = o[1];
                n(a, i.event);
              }
          });
        }),
        (n.getMarkerStartTs = function (t, n) {
          var e = this,
            r = n === void 0 ? {} : n,
            o = r.instanceKey,
            a = o === void 0 ? 0 : o;
          return this.$10("getMarkerStartTs", function () {
            var n = e.getMarker(t, a);
            if (n) return n.timestamp;
          });
        }),
        (n.markerLogDebugPoints = function (n, a) {
          var t = this,
            i = a === void 0 ? {} : a,
            l = i.instanceKey,
            s = l === void 0 ? 0 : l;
          this.$10("markerLogDebugPoints", function () {
            var a = (e || (e = o("QPLEvent"))).getMarkerId(n),
              i = t.getMarker(n, s);
            if (i) {
              var l = r("uuidv4")();
              i.uniqueMarkerDebugId = l;
            }
          });
        }),
        t
      );
    })();
    ((g.normalizeAnnotations = d), (l.default = g));
  },
  98,
);
