__d(
  "QPLSharing",
  [
    "FBLogger",
    "QPLEvent",
    "QPLUserFlow",
    "QuickLogActionType",
    "QuickPerformanceLogger",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s;
    function u(e) {
      var t,
        n,
        r = e.ppSubscriptions ? c(e.ppSubscriptions) : new Map(),
        o = e.lmSubscriptions ? d(e.lmSubscriptions) : new Map(),
        a = e.lmSubscriptions ? m(e.lmSubscriptions) : new Map(),
        i = e.lmSubscriptions ? p(e.lmSubscriptions) : new Map();
      return {
        ppRegistration: (t = e.ppRegistration) != null ? t : new Map(),
        ppSubscriptions: r,
        lmSubscriptions: o,
        lmSubeventLabels: (n = e.lmSubeventLabels) != null ? n : new Map(),
        lmEnds: a,
        lmStarts: i,
        customPointFn: e.customPointFn,
        customFlowPointFn: e.customFlowPointFn,
      };
    }
    function c(e) {
      var t = new Map();
      for (var n of e) {
        var r = n[0],
          o = n[1],
          a = o == null ? void 0 : o.providers;
        if (a) for (var i of a) _(t, i, new Set()).add(r);
      }
      return t;
    }
    function d(e) {
      var t = new Map();
      for (var n of e) {
        var r = n[0],
          a = n[1],
          i = a == null ? void 0 : a.subspans;
        if (i)
          for (var l of i) {
            var u = l.event;
            ((l.event = r),
              _(t, (s || (s = o("QPLEvent"))).getMarkerId(u), []).push(l));
          }
      }
      return t;
    }
    function m(e) {
      var t = new Map();
      for (var n of e) {
        var r = n[0],
          a = n[1],
          i = a == null ? void 0 : a.ends;
        if (i)
          for (var l of i) {
            var u = l.event;
            ((l.event = r),
              _(t, (s || (s = o("QPLEvent"))).getMarkerId(u), []).push(l));
          }
      }
      return t;
    }
    function p(e) {
      var t = new Map();
      for (var n of e) {
        var r = n[0],
          a = n[1],
          i = a == null ? void 0 : a.starts;
        if (i)
          for (var l of i) {
            var u = l.event;
            ((l.event = r),
              _(t, (s || (s = o("QPLEvent"))).getMarkerId(u), []).push(l));
          }
      }
      return t;
    }
    function _(e, t, n) {
      var r = e.get(t);
      return r != null ? r : (e.set(t, n), n);
    }
    function f(e, t) {
      return e + t;
    }
    function g(e) {
      var t = new Map();
      for (var n of Object.entries(e)) {
        var r = n[0],
          o = n[1];
        typeof o == "number" && t.set(o, r);
      }
      return t;
    }
    var h = (function () {
      function t() {
        var n = this;
        ((this.$3 = !1),
          (this.$5 = function (e, t, r) {
            (n.$7(e, r), n.$8(e, { timestamp: r }, "_start"));
          }),
          (this.$6 = function (e, r, o, a) {
            var i = {
              timestamp: a,
              data: { string: { QuickLogAction: t.$4.get(e) || "" } },
            };
            (n.$8(r, i, "_end", o), n.$9(r, e, a, o));
          }),
          (this.$1 = {
            ppRegistration: new Map(),
            ppSubscriptions: new Map(),
            lmSubscriptions: new Map(),
            lmSubeventLabels: new Map(),
            lmEnds: new Map(),
            lmStarts: new Map(),
            customPointFn: void 0,
            customFlowPointFn: void 0,
          }),
          (this.$2 = new Map()),
          (e || (e = r("QuickPerformanceLogger"))).addListener({
            onMarkerStart: this.$5,
            onMarkerEnd: this.$6,
          }));
      }
      var n = t.prototype;
      return (
        (n.init = function (t) {
          ((this.$1 = u(t)), (this.$3 = !0));
        }),
        (n.$10 = function (t, n) {
          var e;
          return t.excludeActions != null && t.excludeActions.has(n)
            ? null
            : (t.defaultAction != null && (e = t.defaultAction),
              t.mirrorAction != null && (e = n),
              t.actionMap != null &&
                t.actionMap.has(n) &&
                (e = t.actionMap.get(n)),
              e);
        }),
        (n.$7 = function (n, a) {
          var t = this.$1.lmStarts,
            i = t.get((s || (s = o("QPLEvent"))).getMarkerId(n));
          if (i)
            for (var l of i) {
              var u,
                c,
                d,
                m = l.event,
                p = l.type,
                _ = (u = l.markerOverride) != null ? u : !1,
                f = (c = l.regularOptions) != null ? c : {},
                g = (d = l.flowOptions) != null ? d : {},
                h = (s || (s = o("QPLEvent"))).getMarkerId(n);
              if (
                !(
                  !_ &&
                  (e || (e = r("QuickPerformanceLogger")))
                    .getActiveMarkerIds({ type: p })
                    .includes((s || (s = o("QPLEvent"))).getMarkerId(m))
                )
              ) {
                if (l.customStartFn != null) {
                  l.customStartFn(
                    m,
                    p,
                    l.regularInstanceKey,
                    f,
                    babelHelpers.extends({}, g, { timestamp: a }),
                  );
                  continue;
                }
                switch (p) {
                  case 1:
                    (e || (e = r("QuickPerformanceLogger"))).markerStart(
                      m,
                      l.regularInstanceKey,
                      a,
                      f,
                    );
                    break;
                  case 2:
                    (r("QPLUserFlow").start(
                      m,
                      babelHelpers.extends({}, g, { timestamp: a }),
                    ),
                      r("QPLUserFlow").addAnnotations(
                        m,
                        { string: { linked_marker_started: h.toString() } },
                        { instanceKey: l.regularInstanceKey },
                      ));
                    break;
                }
              }
            }
        }),
        (n.$9 = function (n, a, i, l) {
          var t = this,
            u = this.$1.lmEnds,
            c = u.get((s || (s = o("QPLEvent"))).getMarkerId(n)),
            d = this.$1.lmSubeventLabels.get(n) || "";
          if (c) {
            var m = function (c) {
                var u = c.event,
                  m = null,
                  p = (s || (s = o("QPLEvent"))).getMarkerId(n),
                  _ = s.getMarkerId(u);
                if (
                  (c.customAction &&
                    ((m = c.customAction(a, p, _, l, i)), m == null)) ||
                  (m == null && ((m = t.$10(c, a)), m == null))
                )
                  return 0;
                (e || (e = r("QuickPerformanceLogger"))).forEachMarkerInstance(
                  s.getMarkerId(u),
                  function (t) {
                    if (m != null) {
                      var _ = (
                          e || (e = r("QuickPerformanceLogger"))
                        ).getMarker(u, t),
                        f = e.getMarker(n, l),
                        g = {
                          int: { submarker: p, submarker_instance_key: l },
                        };
                      if (
                        c.shouldDropMarker != null &&
                        c.shouldDropMarker(_, f)
                      )
                        (e || (e = r("QuickPerformanceLogger"))).markerDrop(
                          u,
                          t,
                        );
                      else {
                        if (c.mirrorAnnotations != null) {
                          var h = function () {
                            var e = y[0],
                              t = y[1];
                            t.forEach(function (t) {
                              var n,
                                r =
                                  f == null ||
                                  (n = f.annotations) == null ||
                                  (n = n[e]) == null
                                    ? void 0
                                    : n[t];
                              if (r != null)
                                if (g[e] == null) {
                                  var o;
                                  g[e] = ((o = {}), (o[t] = r), o);
                                } else {
                                  var a;
                                  Object.assign(
                                    g[e],
                                    ((a = {}), (a[t] = r), a),
                                  );
                                }
                            });
                          };
                          for (var y of Object.entries(c.mirrorAnnotations))
                            h();
                        }
                        switch (_ == null ? void 0 : _.type) {
                          case 1:
                            (e || (e = r("QuickPerformanceLogger"))).markerEnd(
                              u,
                              m,
                              t,
                              i,
                            );
                            break;
                          case 2:
                            switch (
                              (r("QPLUserFlow").addAnnotations(
                                u,
                                {
                                  string: { linked_marker_ended: p.toString() },
                                },
                                { instanceKey: t },
                              ),
                              m)
                            ) {
                              case 4:
                                r("QPLUserFlow").endCancel(u, {
                                  annotations: g,
                                  instanceKey: t,
                                  cancelReason: 4,
                                });
                                break;
                              case 630:
                                r("QPLUserFlow").endCancel(u, {
                                  annotations: g,
                                  instanceKey: t,
                                  cancelReason: 630,
                                });
                                break;
                              case 615:
                                r("QPLUserFlow").endCancel(u, {
                                  annotations: g,
                                  instanceKey: t,
                                  cancelReason: 615,
                                });
                                break;
                              case 706:
                                r("QPLUserFlow").endCancel(u, {
                                  annotations: g,
                                  instanceKey: t,
                                  cancelReason: 706,
                                });
                                break;
                              case 113:
                                r("QPLUserFlow").endTimeout(u, {
                                  annotations: g,
                                  instanceKey: t,
                                });
                                break;
                              case 3:
                              case 87:
                                r("QPLUserFlow").endFailure(
                                  u,
                                  "linked_marker_failed",
                                  { annotations: g, instanceKey: t },
                                );
                                break;
                              case 2:
                                r("QPLUserFlow").endSuccess(u, {
                                  annotations: g,
                                  instanceKey: t,
                                });
                                break;
                              default:
                                (r("FBLogger")("qpl", "linkedMarkers")
                                  .blameToPreviousFrame()
                                  .warn(
                                    "Falling back to end main marker with raw QPL due to submarker's action type not being an official end type for QPL User Flows. Main marker: %s submarker: %s Action: %s",
                                    (s || (s = o("QPLEvent"))).getMarkerId(u),
                                    d,
                                    a,
                                  ),
                                  (
                                    e || (e = r("QuickPerformanceLogger"))
                                  ).markerAnnotate(u, g, { instanceKey: t }),
                                  (
                                    e || (e = r("QuickPerformanceLogger"))
                                  ).markerEnd(u, m, t));
                            }
                            break;
                        }
                      }
                    }
                  },
                );
              },
              p;
            for (var _ of c) p = m(_);
          }
        }),
        (n.$11 = function (t) {
          var e = this.$1.lmSubeventLabels.has(t);
          return e;
        }),
        (n.$8 = function (n, a, i, l) {
          var t = this,
            u = this.$1.lmSubscriptions,
            c = u.get((s || (s = o("QPLEvent"))).getMarkerId(n));
          if (c) {
            if (!this.$11(n)) return;
            var d = this.$1.lmSubeventLabels.get(n) || "";
            d += i;
            var m = a,
              p = function () {
                var o = _.event,
                  a = _.mirrorSubspanAnnotations;
                if (l != null) {
                  var i = (e || (e = r("QuickPerformanceLogger"))).getMarker(
                    n,
                    l,
                  );
                  if (i != null && a != null) {
                    var s = function () {
                      var e,
                        t = u[0],
                        n = u[1],
                        r = (e = m.data) != null ? e : {};
                      (n.forEach(function (e) {
                        var n,
                          o =
                            i == null ||
                            (n = i.annotations) == null ||
                            (n = n[t]) == null
                              ? void 0
                              : n[e],
                          a = "subspan_" + e;
                        if (o != null)
                          if (r[t] == null) {
                            var l;
                            r[t] = ((l = {}), (l[a] = o), l);
                          } else {
                            var s;
                            Object.assign(r[t], ((s = {}), (s[a] = o), s));
                          }
                      }),
                        (m = babelHelpers.extends({}, m, { data: r })));
                    };
                    for (var u of Object.entries(a)) s();
                  }
                }
                t.$12(o, d, m);
              };
            for (var _ of c) p();
          }
        }),
        (n.emitPoint = function (t, n, r, o) {
          this.$13(t, n) &&
            (this.$14(t, n, r, o),
            this.$15(f(t, n), { ppName: t, pointName: n, options: r }));
        }),
        (n.$13 = function (t, n) {
          var e,
            r = this.$1.ppRegistration,
            o = ((e = r.get(t)) == null ? void 0 : e.has(n)) || !1;
          return o;
        }),
        (n.$14 = function (n, o, a, i) {
          var t,
            l = this.$1.ppSubscriptions,
            s = babelHelpers.extends({}, a, {
              timestamp:
                (t = a == null ? void 0 : a.timestamp) != null
                  ? t
                  : (e || (e = r("QuickPerformanceLogger"))).currentTimestamp(),
            }),
            u = l.get(n);
          if (u) for (var c of u) this.$12(c, n + "/" + o, s, i);
        }),
        (n.$12 = function (n, a, i, l) {
          var t = this;
          (e || (e = r("QuickPerformanceLogger"))).forEachMarkerInstance(
            (s || (s = o("QPLEvent"))).getMarkerId(n),
            function (o) {
              var s,
                u = {
                  instanceKey: o,
                  data: (i == null ? void 0 : i.data) || void 0,
                  timestamp: i == null ? void 0 : i.timestamp,
                };
              switch (
                (s = (e || (e = r("QuickPerformanceLogger"))).getMarker(
                  n,
                  o,
                )) == null
                  ? void 0
                  : s.type
              ) {
                case 1:
                  t.$16(n, a, u, l);
                  break;
                case 2:
                  t.$17(n, a, u, l);
                  break;
              }
            },
          );
        }),
        (n.$16 = function (n, o, a, i) {
          this.$1.customPointFn
            ? this.$1.customPointFn(n, o, a, i)
            : (e || (e = r("QuickPerformanceLogger"))).markerPoint(n, o, a);
        }),
        (n.$17 = function (t, n, o, a) {
          this.$1.customFlowPointFn
            ? this.$1.customFlowPointFn(t, n, o, a)
            : r("QPLUserFlow").addPoint(t, n, o);
        }),
        (n.$15 = function (t, n) {
          var e = this.$2.get(t);
          if (e) for (var r of e) r(n);
        }),
        (n.onSharedPoint = function (t, n, r) {
          var e = this;
          return (
            _(this.$2, f(t, n), []).push(r),
            {
              dispose: function () {
                var o = e.$2.get(f(t, n));
                if (o) {
                  var a = o.indexOf(r);
                  a !== -1 && o.splice(a, 1);
                }
              },
            }
          );
        }),
        (n.clearOnSharedPoints = function () {
          this.$2 = new Map();
        }),
        (n.isInitialized = function () {
          return this.$3;
        }),
        t
      );
    })();
    h.$4 = g(r("QuickLogActionType"));
    var y = new h();
    l.default = y;
  },
  98,
);
