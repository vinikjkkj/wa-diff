__d(
  "InteractionTracingMetricsCore",
  ["addAnnotations", "addJoinId", "hero-tracing-placeholder", "performanceNow"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = new Map(),
      u = new Map(),
      c = new Map(),
      d = {
        string: {},
        int: {},
        double: {},
        bool: {},
        string_array: {},
        int_array: {},
        double_array: {},
        bool_array: {},
      },
      m = { interactionCount: 0 },
      p = 1e4,
      _ = function () {
        var e = new Map(c),
          t = function (n) {
            e.forEach(function (e) {
              n(e);
            });
          },
          n = {
            addGlobalMetadata: function (t, o) {
              if (typeof o == "number") {
                var e;
                r("addAnnotations")(d, { int: ((e = {}), (e[t] = o), e) });
              } else if (typeof o == "string") {
                var a;
                r("addAnnotations")(d, { string: ((a = {}), (a[t] = o), a) });
              } else if (typeof o == "boolean") {
                var i;
                r("addAnnotations")(d, { bool: ((i = {}), (i[t] = o), i) });
              }
              n.addMetadata(t, o);
            },
            addMetadata: function (n, o) {
              t(function (e) {
                if (typeof o == "number") {
                  var t;
                  r("addAnnotations")(e.annotations, {
                    int: ((t = {}), (t[n] = o), t),
                  });
                } else if (typeof o == "string") {
                  var a;
                  r("addAnnotations")(e.annotations, {
                    string: ((a = {}), (a[n] = o), a),
                  });
                } else if (typeof o == "boolean") {
                  var i;
                  r("addAnnotations")(e.annotations, {
                    bool: ((i = {}), (i[n] = o), i),
                  });
                }
              });
            },
            addRequireDeferred: function (n, r) {
              var e = [];
              return (
                t(function (t) {
                  if (t.requireDeferreds[n] == null) {
                    var o = (t.requireDeferreds[n] = { start: r });
                    e.push(o);
                  }
                }),
                function (t, n) {
                  e.forEach(function (e) {
                    ((e.end = t),
                      (e.duration = t - r),
                      n && (e.alreadyRequired = !0));
                  });
                }
              );
            },
            forEach: function (n) {
              t(function (e) {
                n(e);
              });
            },
          };
        return n;
      },
      f = {
        addFactoryTiming: function (t, n) {
          var e = u.get(t);
          e && e.factoryTimings.push(n);
        },
        addGlobalMetadata: function (t, n, o) {
          if (typeof o == "number") {
            var e;
            (r("addAnnotations")(d, { int: ((e = {}), (e[n] = o), e) }),
              f.addAnnotationInt(t, n, o));
          } else if (typeof o == "string") {
            var a;
            (r("addAnnotations")(d, { string: ((a = {}), (a[n] = o), a) }),
              f.addAnnotation(t, n, o));
          } else if (typeof o == "boolean") {
            var i;
            (r("addAnnotations")(d, { bool: ((i = {}), (i[n] = o), i) }),
              f.addAnnotationBoolean(t, n, o));
          }
        },
        addJoinId: function (t, n, o) {
          var e = c.get(t);
          e != null && r("addJoinId")(e, n, o);
        },
        addHeroBootload: function (t, n) {
          var e = u.get(t);
          e && e.heroBootloads.push(n);
        },
        addHeroRelay: function (t, n) {
          var e = u.get(t);
          e && e.heroRelay.push(n);
        },
        addHeroPendingPlaceholders: function (t, n) {
          var e = u.get(t);
          e && (e.pendingPlaceholders = e.pendingPlaceholders.concat(n));
        },
        addHiddenTiming: function (t, n) {
          var e = u.get(t);
          e && (e.hiddenTimings = n);
        },
        addImagePreloader: function (t, n, r) {
          var e = u.get(t);
          e && (e.imagePreloaderTimings[n] = r);
        },
        addMarkerPoint: function (n, o, a, i, l) {
          i === void 0 && (i = (e || (e = r("performanceNow")))());
          var t = u.get(n);
          t &&
            i >= t.start &&
            ((t.markerPoints[o] = { timestamp: i, type: a }),
            l && (t.markerPoints[o].data = l));
        },
        addFirstMarkerPoint: function (t, n, r, o, a) {
          a === void 0 && (a = {});
          var e = u.get(t);
          if (!e) return !1;
          var i = e.markerPoints[n];
          return o >= e.start && (!i || i.timestamp > o)
            ? ((e.markerPoints[n] = { timestamp: o, type: r }),
              a != null && (e.markerPoints[n].data = a),
              !0)
            : !1;
        },
        addMetadata: function (t, n, o) {
          var e = u.get(t);
          if (e) {
            if (typeof o == "number") {
              var a;
              r("addAnnotations")(e.annotations, {
                int: ((a = {}), (a[n] = o), a),
              });
            } else if (typeof o == "string") {
              var i;
              r("addAnnotations")(e.annotations, {
                string: ((i = {}), (i[n] = o), i),
              });
            } else if (typeof o == "boolean") {
              var l;
              r("addAnnotations")(e.annotations, {
                bool: ((l = {}), (l[n] = o), l),
              });
            }
          }
        },
        addAnnotation: function (t, n, o) {
          var e = u.get(t);
          if (e) {
            var a;
            r("addAnnotations")(e.annotations, {
              string: ((a = {}), (a[n] = o), a),
            });
          }
        },
        addAnnotationInt: function (t, n, o) {
          var e = u.get(t);
          if (e) {
            var a;
            r("addAnnotations")(e.annotations, {
              int: ((a = {}), (a[n] = o), a),
            });
          }
        },
        addAnnotationDouble: function (t, n, o) {
          var e = u.get(t);
          if (e) {
            var a;
            r("addAnnotations")(e.annotations, {
              double: ((a = {}), (a[n] = o), a),
            });
          }
        },
        addAnnotationBoolean: function (t, n, o) {
          var e = u.get(t);
          if (e) {
            var a;
            r("addAnnotations")(e.annotations, {
              bool: ((a = {}), (a[n] = o), a),
            });
          }
        },
        addAnnotationStringArray: function (t, n, o) {
          var e = u.get(t);
          if (e) {
            var a;
            r("addAnnotations")(e.annotations, {
              string_array: ((a = {}), (a[n] = o), a),
            });
          }
        },
        addAnnotationIntArray: function (t, n, o) {
          var e = u.get(t);
          if (e) {
            var a;
            r("addAnnotations")(e.annotations, {
              int_array: ((a = {}), (a[n] = o), a),
            });
          }
        },
        addAnnotationDoubleArray: function (t, n, o) {
          var e = u.get(t);
          if (e) {
            var a;
            r("addAnnotations")(e.annotations, {
              double_array: ((a = {}), (a[n] = o), a),
            });
          }
        },
        addAnnotationBooleanArray: function (t, n, o) {
          var e = u.get(t);
          if (e) {
            var a;
            r("addAnnotations")(e.annotations, {
              bool_array: ((a = {}), (a[n] = o), a),
            });
          }
        },
        addOfflineTiming: function (t, n) {
          var e = u.get(t);
          e && (e.offlineTimings = n);
        },
        addPayloadResource: function (t, n, r) {
          var e = u.get(t);
          e && (e.payloadResources[n] = r);
        },
        addPayloadTiming: function (t, n, r) {
          var e = u.get(t);
          e && (e.payloadTimings[n] = r);
        },
        addReactRender: function (t, n, r, o, a, i, l) {
          var e = u.get(t);
          if (e) {
            var s = {
                actualDuration: a,
                baseDuration: i,
                duration: o - r,
                end: o,
                phase: l,
                start: r,
              },
              c = e.reactRender[n];
            c
              ? c.length < p && (c.push(s), e.commitSet.add(o))
              : ((e.reactRender[n] = [s]), e.commitSet.add(o));
          }
        },
        addSubspan: function (t, n, r, o, a, i) {
          var e = u.get(t);
          if (e) {
            var l = { data: i, end: a, start: o, type: r };
            e.subSpans[n] ? e.subSpans[n].push(l) : (e.subSpans[n] = [l]);
          }
        },
        addMountPoint: function (t, n, r) {
          var e = "Mount_" + r;
          f.addFirstMarkerPoint(t, e, "VisualCompletion", n);
        },
        addMountPointMetadata: function (t, n, r) {
          var e = f.get(t),
            o = "Mount_" + n,
            a = e == null ? void 0 : e.markerPoints[o];
          if (a) {
            var i = a.data || {};
            ((a.data = i),
              Object.keys(r).forEach(function (e) {
                i[e] = r[e];
              }));
          }
        },
        addTag: function (t, n, r) {
          var e = u.get(t);
          e && (e.tagSet[n] || (e.tagSet[n] = new Set()), e.tagSet[n].add(r));
        },
        addTracedInteraction: function (t, n, r) {
          var e = {
            annotations: {
              string: {},
              int: {},
              double: {},
              bool: {},
              string_array: {},
              int_array: {},
              double_array: {},
              bool_array: {},
            },
            commitSet: new Set(),
            factoryTimings: [],
            hasVcReport: !1,
            heroBootloads: [],
            heroRelay: [],
            hiddenTimings: [],
            imagePreloaderTimings: {},
            markerPoints: {},
            navigationTiming: {},
            offlineTimings: [],
            payloadResources: {},
            payloadTimings: {},
            pendingPlaceholders: [],
            placeholderMap: {},
            reactRender: {},
            requireDeferreds: {},
            start: n,
            subSpans: {},
            tagSet: {},
            traceId: t,
            vcStateLog: null,
            vcMutationLog: null,
            wasCanceled: !1,
            wasOffline: !1,
          };
          for (var o in d) for (var a in d[o]) e.annotations[o][a] = d[o][a];
          return (
            u.set(t, e),
            c.set(t, e),
            s.set(t, r),
            m.interactionCount++,
            e
          );
        },
        complete: function (n) {
          var t = u.get(n);
          if (t && t.completed == null) {
            (r("addAnnotations")(t.annotations, {
              int: { endedByHeroComplete: 1 },
            }),
              (t.completed = (e || (e = r("performanceNow")))()));
            var o = s.get(n);
            (o && o(t), s.delete(n), c.delete(n));
          }
        },
        currentInteractionLogger: _,
        dump: function () {
          var e = {},
            t = Array.from(u.values());
          return (
            t
              .sort(function (e, t) {
                return e.start - t.start;
              })
              .forEach(function (t) {
                var n = t.traceId,
                  r = o(
                    "hero-tracing-placeholder",
                  ).HeroPendingPlaceholderTracker.dump(t.traceId);
                e[n] = babelHelpers.extends({}, t, {
                  pendingPlaceholders: r,
                  e2e:
                    t.completed != null
                      ? ((t.completed - t.start) / 1e3).toFixed(2)
                      : "?",
                });
              }),
            e
          );
        },
        get: function (t) {
          return u.get(t);
        },
        markPlaceholderEnd: function (n, o, a, i) {
          i === void 0 && (i = (e || (e = r("performanceNow")))());
          var t = u.get(n);
          if (t) {
            var l = t.placeholderMap;
            l[o] &&
              l[o].forEach(function (e) {
                e.endTime == null && a === e.description && (e.endTime = i);
              });
          }
        },
        markPlaceholderStart: function (t, n, r, o, a) {
          var e = u.get(t);
          if (e) {
            var i = e.placeholderMap,
              l = { description: o, startTime: r, endTime: null, spanType: a };
            i[n] ? i[n].push(l) : (i[n] = [l]);
          }
        },
        removeMarkerPoint: function (t, n) {
          var e = u.get(t);
          e && delete e.markerPoints[n];
        },
        setInteractionClass: function (t, n) {
          var e = u.get(t);
          e && (e.interactionClass = n);
        },
        setInteractionType: function (t, n, r, o) {
          var e = u.get(t);
          e && ((e.interactionClass = n), (e.type = r), (e.qplEvent = o));
        },
        delete: function (t) {
          u.delete(t);
        },
        getInteractionStat: function () {
          return m;
        },
      },
      g = f;
    l.default = g;
  },
  98,
);
