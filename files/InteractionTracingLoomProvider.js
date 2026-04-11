__d(
  "InteractionTracingLoomProvider",
  ["interaction-tracing-metrics", "sanitizeURIStringForLoom"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return e.substr(0, 7) === "http://" || e.substr(0, 8) === "https://";
    }
    var s = (function () {
        function t(e, t, n) {
          ((this.$1 = e), (this.$2 = t), (this.$3 = n));
        }
        var n = t.prototype;
        return (
          (n.$4 = function (n) {
            return this.$3.sanitizeURIs && e(n)
              ? r("sanitizeURIStringForLoom")(n, this.$2)
              : n;
          }),
          (n.$5 = function (t, n) {
            var e = this.$1;
            e && e.buffer.addEvent(t, n + this.$3.appStart);
          }),
          (n.$6 = function (t, n) {
            var e = this,
              r = t.subSpans,
              o = function (a) {
                r[a].forEach(function (r, o) {
                  var i = {
                    blockName: a + "_" + o,
                    blockType: r.type,
                    execUnitName: a,
                    traceId: n,
                    traceType: t.type,
                  };
                  (e.$5(
                    babelHelpers.extends(
                      { type: "INTERACTION_TRACE_START" },
                      i,
                    ),
                    r.start,
                  ),
                    e.$5(
                      babelHelpers.extends(
                        {
                          blockAnnotations: r.data,
                          type: "INTERACTION_TRACE_END",
                        },
                        i,
                      ),
                      r.end,
                    ));
                });
              };
            for (var a in r) o(a);
          }),
          (n.$7 = function (t, n) {
            var e = t.payloadResources;
            for (var r in e) {
              var o = e[r],
                a = this.$4(r),
                i = {
                  blockName: a,
                  blockType: "PayloadResources",
                  execUnitName: o.initiator,
                  traceId: n,
                  traceType: t.type,
                };
              (this.$5(
                babelHelpers.extends({ type: "INTERACTION_TRACE_START" }, i),
                o.start,
              ),
                this.$5(
                  {
                    blockName: a,
                    execUnitName: o.initiator,
                    pointAnnotations: {},
                    pointName: "requestStart",
                    traceId: n,
                    type: "INTERACTION_TRACE_POINT",
                  },
                  o.requestStart,
                ),
                this.$5(
                  babelHelpers.extends(
                    {
                      blockAnnotations: {
                        refs: o.refs.join(","),
                        transferSize: o.transferSize,
                        url: this.$4(o.url),
                      },
                      type: "INTERACTION_TRACE_END",
                    },
                    i,
                  ),
                  o.end,
                ));
            }
          }),
          (n.$8 = function (t, n) {
            var e = t.imagePreloaderTimings;
            for (var r in e) {
              var o = e[r],
                a = this.$4(r),
                i = {
                  blockName: a,
                  blockType: "ImagePreloaders",
                  execUnitName: o.playloadName,
                  traceId: n,
                  traceType: t.type,
                };
              (this.$5(
                babelHelpers.extends({ type: "INTERACTION_TRACE_START" }, i),
                o.start,
              ),
                this.$5(
                  {
                    blockName: a,
                    execUnitName: o.playloadName,
                    pointAnnotations: {},
                    pointName: "requestStart",
                    traceId: n,
                    type: "INTERACTION_TRACE_POINT",
                  },
                  o.requestStart,
                ),
                this.$5(
                  babelHelpers.extends(
                    {
                      blockAnnotations: { url: a },
                      type: "INTERACTION_TRACE_END",
                    },
                    i,
                  ),
                  o.end,
                ));
            }
          }),
          (n.$9 = function (t, n) {
            var e = this,
              r = t.payloadTimings,
              o = function (a) {
                var o = r[a];
                if (o.start == null || o.end == null) return { v: void 0 };
                var i = {
                  blockName: a,
                  blockType: o.payloadType,
                  execUnitName: a,
                  traceId: n,
                  traceType: t.type,
                };
                (e.$5(
                  babelHelpers.extends({ type: "INTERACTION_TRACE_START" }, i),
                  o.start,
                ),
                  Object.keys(o.points).forEach(function (t) {
                    e.$5(
                      {
                        blockName: a,
                        execUnitName: a,
                        pointAnnotations: {},
                        pointName: t,
                        traceId: n,
                        type: "INTERACTION_TRACE_POINT",
                      },
                      o.points[t],
                    );
                  }));
                var l = babelHelpers.extends({}, o.data);
                for (var s in o.pkgStat) {
                  var u = o.pkgStat[s];
                  for (var c in u) l[s + "_" + c] = u[c];
                }
                e.$5(
                  babelHelpers.extends(
                    { blockAnnotations: l, type: "INTERACTION_TRACE_END" },
                    i,
                  ),
                  o.end,
                );
              },
              a;
            for (var i in r) if (((a = o(i)), a)) return a.v;
          }),
          (n.$10 = function (t, n) {
            var e = t.markerPoints;
            for (var r in e) {
              var o = e[r],
                a = o.timestamp,
                i = o.type,
                l = {
                  blockName: r,
                  blockType: i,
                  execUnitName: r,
                  traceId: n,
                  traceType: t.type,
                };
              (this.$5(
                babelHelpers.extends({ type: "INTERACTION_TRACE_START" }, l),
                a,
              ),
                this.$5(
                  babelHelpers.extends(
                    {
                      blockAnnotations: o.data || {},
                      type: "INTERACTION_TRACE_END",
                    },
                    l,
                  ),
                  a,
                ));
            }
          }),
          (n.$11 = function (t, n) {
            var e = t.requireDeferreds;
            for (var r in e) {
              var o = e[r],
                a = {
                  blockName: r,
                  blockType: "RequireDeferreds",
                  execUnitName: r,
                  traceId: n,
                  traceType: t.type,
                },
                i = o.end;
              i != null &&
                (this.$5(
                  babelHelpers.extends({ type: "INTERACTION_TRACE_START" }, a),
                  o.start,
                ),
                this.$5(
                  babelHelpers.extends(
                    {
                      blockAnnotations: {
                        alreadyRequired: !!o.alreadyRequired,
                      },
                      type: "INTERACTION_TRACE_END",
                    },
                    a,
                  ),
                  i,
                ));
            }
          }),
          (n.$12 = function (t, n, r, o) {
            for (var e = 0; e < o.length; e++) {
              var a = {
                blockName: t + "_" + e,
                blockType: t,
                execUnitName: t + "_" + e,
                traceId: r,
                traceType: n.type,
              };
              (this.$5(
                babelHelpers.extends({ type: "INTERACTION_TRACE_START" }, a),
                o[e].start,
              ),
                this.$5(
                  babelHelpers.extends(
                    { blockAnnotations: {}, type: "INTERACTION_TRACE_END" },
                    a,
                  ),
                  o[e].end,
                ));
            }
          }),
          (n.$13 = function (t) {
            var e = this;
            (t.vcStateLog != null &&
              t.vcStateLog.forEach(function (n, r) {
                var o = n[0],
                  a = n[1],
                  i = {
                    blockName: r,
                    blockType: "VCState",
                    execUnitName: "VCState",
                    traceId: t.traceId,
                    traceType: t.type,
                  };
                (e.$5(
                  babelHelpers.extends({ type: "INTERACTION_TRACE_START" }, i),
                  o,
                ),
                  e.$5(
                    babelHelpers.extends(
                      { blockAnnotations: {}, type: "INTERACTION_TRACE_END" },
                      i,
                    ),
                    a,
                  ));
              }),
              t.vcMutationLog != null &&
                t.vcMutationLog.forEach(function (n) {
                  var r,
                    o,
                    a = (r = n.finalState) != null ? r : "",
                    i = {
                      blockName: n.mutationType + "_" + a + "_" + n.veid,
                      blockType: "VCMutation",
                      execUnitName: (o = n.finalState) != null ? o : "mutation",
                      traceId: t.traceId,
                      traceType: t.type,
                    };
                  (e.$5(
                    babelHelpers.extends(
                      { type: "INTERACTION_TRACE_START" },
                      i,
                    ),
                    n.mutationTime,
                  ),
                    e.$5(
                      babelHelpers.extends(
                        {
                          blockAnnotations: { data: JSON.stringify(n) },
                          type: "INTERACTION_TRACE_END",
                        },
                        i,
                      ),
                      n.paintTime,
                    ));
                }));
          }),
          (n.$14 = function (t) {
            var e = this;
            t.factoryTimings.forEach(function (n) {
              var r = {
                blockName: n.name,
                blockType: "Factories",
                execUnitName: "Factories",
                traceId: t.traceId,
                traceType: t.type,
              };
              (e.$5(
                babelHelpers.extends({ type: "INTERACTION_TRACE_START" }, r),
                n.start,
              ),
                e.$5(
                  babelHelpers.extends(
                    { blockAnnotations: {}, type: "INTERACTION_TRACE_END" },
                    r,
                  ),
                  n.end,
                ));
            });
          }),
          (n.loomTraceWillEnd = function () {
            var e = this,
              t = this.$1;
            if (t) {
              var n = o(
                  "interaction-tracing-metrics",
                ).InteractionTracingMetricsCore.dump(),
                r = [];
              if (
                t.triggerInfo.type === "INTERACTION" &&
                t.triggerInfo.interaction_id != null
              )
                r.push(t.triggerInfo.interaction_id);
              else
                for (var a in n) {
                  var i = n[a],
                    l =
                      i.completed != null
                        ? this.$3.appStart + i.completed
                        : null;
                  (l == null || l > t.startTime) && r.push(a);
                }
              r.forEach(function (t) {
                var r = n[t];
                (e.$6(r, t),
                  e.$10(r, t),
                  e.$11(r, t),
                  e.$7(r, t),
                  e.$8(r, t),
                  e.$9(r, t),
                  e.$12("hidden", r, t, r.hiddenTimings),
                  e.$12("offline", r, t, r.offlineTimings),
                  e.$14(r),
                  e.$13(r));
              });
            }
          }),
          t
        );
      })(),
      u = {
        getInstance: function (t, n, r) {
          return new s(t, n, r);
        },
        isSupported: function () {
          return !0;
        },
        loomProviderId: "InteractionTracing",
      };
    l.default = u;
  },
  98,
);
