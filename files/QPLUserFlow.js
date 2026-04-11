__d(
  "QPLUserFlow",
  [
    "ErrorMetadata",
    "ErrorPubSub",
    "QuickPerformanceLogger",
    "cr:1752405",
    "performance",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s, u;
    function c(e, t) {
      if (t === null) return e != null ? e : null;
      var n = e != null ? e : {};
      return (n.string || (n.string = {}), (n.string.uf_debug_info = t), n);
    }
    var d = 1024;
    function m(e) {
      var t = String(e);
      return t.length > d ? t.substring(0, d - 3) + "..." : t;
    }
    var p = (function () {
        function t() {
          var t = this;
          (n("cr:1752405")(),
            (e || (e = r("ErrorPubSub"))).unshiftListener(function (e) {
              if (e.type === "fatal") {
                var n = t.getActiveFlowIDs();
                if (n.length !== 0) {
                  var o = new (r("ErrorMetadata"))();
                  (o.clearEntries(),
                    n.forEach(function (n) {
                      (
                        s || (s = r("QuickPerformanceLogger"))
                      ).forEachMarkerInstance(n, function (n, r) {
                        t.addPoint(r, "JAVASCRIPT_ERROR_THROWN", {
                          data: {
                            string: {
                              logging_source: e.loggingSource,
                              message_format: m(e.messageFormat),
                              type: e.type,
                            },
                            string_array: {
                              message_params: e.messageParams.map(m),
                            },
                          },
                          instanceKey: n,
                        });
                      });
                    }),
                    n.forEach(function (e) {
                      o.addEntry("QPL", "ACTIVE_FLOW_ID", e.toString());
                    }));
                  var a = o.format();
                  e.metadata
                    ? (e.metadata = [].concat(e.metadata, a))
                    : (e.metadata = a);
                }
              }
            }));
        }
        var o = t.prototype;
        return (
          (o.start = function (t, n) {
            var e = n === void 0 ? {} : n,
              o = e.annotations,
              a = e.cancelExisting,
              i = a === void 0 ? !1 : a,
              l = e.cancelOnUnload,
              u = l === void 0 ? !0 : l,
              c = e.enableE2ETracing,
              d = c === void 0 ? !1 : c,
              m = e.instanceKey,
              p = m === void 0 ? 0 : m,
              _ = e.joinOptions,
              f = e.onFlowTimeout__doNOTUSE,
              g = e.qplInternalDoNotUseAbsoluteTimeOrigin,
              h = e.timeoutInMs,
              y = e.timestamp,
              C = e.trackedForLoss,
              b = C === void 0 ? !0 : C;
            (_ != null
              ? (s || (s = r("QuickPerformanceLogger"))).markerStartForJoin(
                  t,
                  _.joinId,
                  {
                    instanceKey: p,
                    cancelExisting: i,
                    cancelOnUnload: u,
                    trackedForLoss: b,
                    type: 2,
                    qplInternalDoNotUseAbsoluteTimeOrigin: g,
                    monotonicTimestamp: y,
                    absoluteTimeOriginMs: _.absoluteTimeOriginMs,
                    sourceIsPrimary: _.sourceIsPrimary,
                    closeSession: _.closeSession,
                    unreliableSourceClockProcessId:
                      _.unreliableSourceClockProcessId,
                    timeoutMS: h,
                    onMarkerTimeout__DoNotUse: f,
                    crashResilient: !0,
                  },
                )
              : (s || (s = r("QuickPerformanceLogger"))).markerStart(t, p, y, {
                  cancelExisting: i,
                  cancelOnUnload: u,
                  trackedForLoss: b,
                  type: 2,
                  qplInternalDoNotUseAbsoluteTimeOrigin: g,
                  timeoutMS: h,
                  onMarkerTimeout__DoNotUse: f,
                  enableE2ETracing: d,
                  crashResilient: !0,
                }),
              o &&
                (s || (s = r("QuickPerformanceLogger"))).markerAnnotate(t, o, {
                  instanceKey: p,
                }));
          }),
          (o.addAlignmentPointForJoin = function (t, n, o) {
            var e = o === void 0 ? {} : o,
              a = e.instanceKey,
              i = e.requestId,
              l = e.timestamp;
            (s || (s = r("QuickPerformanceLogger"))).addAlignmentPointForJoin(
              t,
              n,
              { instanceKey: a, requestId: i, timestamp: l },
            );
          }),
          (o.startFromNavStart = function (t, n) {
            var e = n === void 0 ? {} : n,
              o = e.annotations,
              a = e.cancelExisting,
              i = a === void 0 ? !1 : a,
              l = e.cancelOnUnload,
              c = l === void 0 ? !0 : l,
              d = e.instanceKey,
              m = d === void 0 ? 0 : d,
              p = e.joinOptions,
              _ = e.onFlowTimeout__doNOTUSE,
              f = e.qplInternalDoNotUseConvertToTimeOnServer,
              g = e.timeoutInMs,
              h = e.trackedForLoss,
              y = h === void 0 ? !0 : h;
            if (
              (p != null
                ? (
                    s || (s = r("QuickPerformanceLogger"))
                  ).markerStartForJoinFromNavStart(t, p.joinId, {
                    instanceKey: m,
                    cancelExisting: i,
                    cancelOnUnload: c,
                    trackedForLoss: y,
                    type: 2,
                    qplInternalDoNotUseConvertToTimeOnServer: f,
                    absoluteTimeOriginMs: p.absoluteTimeOriginMs,
                    sourceIsPrimary: p.sourceIsPrimary,
                    closeSession: p.closeSession,
                    unreliableSourceClockProcessId:
                      p.unreliableSourceClockProcessId,
                    timeoutMS: g,
                    onMarkerTimeout__DoNotUse: _,
                    crashResilient: !0,
                  })
                : (
                    s || (s = r("QuickPerformanceLogger"))
                  ).markerStartFromNavStart(t, m, {
                    cancelExisting: i,
                    cancelOnUnload: c,
                    trackedForLoss: y,
                    type: 2,
                    qplInternalDoNotUseConvertToTimeOnServer: f,
                    timeoutMS: g,
                    onMarkerTimeout__DoNotUse: _,
                    crashResilient: !0,
                  }),
              o &&
                (s || (s = r("QuickPerformanceLogger"))).markerAnnotate(t, o, {
                  instanceKey: m,
                }),
              (p == null ? void 0 : p.addAlignmentPoints) === !0)
            ) {
              var C,
                b =
                  (C = p == null ? void 0 : p.requestId) != null
                    ? C
                    : "default_id",
                v =
                  (u || (u = r("performance"))) == null
                    ? void 0
                    : (u || (u = r("performance"))).timing.requestStart;
              v != null &&
                this.addAlignmentPointForJoin(t, 0, {
                  instanceKey: m,
                  requestId: b,
                  timestamp: v,
                });
              var S =
                (u || (u = r("performance"))) == null
                  ? void 0
                  : (u || (u = r("performance"))).timing.responseEnd;
              S != null &&
                this.addAlignmentPointForJoin(t, 3, {
                  instanceKey: m,
                  requestId: b,
                  timestamp: S,
                });
            }
          }),
          (o.endSuccess = function (t, n) {
            var e = n === void 0 ? {} : n,
              r = e.annotations,
              o = e.instanceKey,
              a = o === void 0 ? 0 : o,
              i = e.partialCompleteForFurtherJoin,
              l = i === void 0 ? !1 : i,
              s = e.timestamp;
            this.$1(t, l === !0 ? 12524 : 2, a, r, s);
          }),
          (o.endFailure = function (t, n, r) {
            var e = r === void 0 ? {} : r,
              o = e.annotations,
              a = e.debugInfo,
              i = e.error,
              l = e.instanceKey,
              s = l === void 0 ? 0 : l,
              u = e.timestamp;
            (this.markError(t, n, { debugInfo: a, instanceKey: s, error: i }),
              this.$1(t, 3, s, o, u));
          }),
          (o.endValidationFailure_DO_NOT_USE = function (t, n) {
            var e = n === void 0 ? {} : n,
              r = e.annotations,
              o = e.debugInfo,
              a = e.instanceKey,
              i = a === void 0 ? 0 : a,
              l = e.timestamp;
            (this.markError(t, "validation_failed", {
              debugInfo: o,
              instanceKey: i,
            }),
              this.$1(t, 7952, i, r, l));
          }),
          (o.endTimeout = function (t, n) {
            var e = n === void 0 ? {} : n,
              o = e.instanceKey,
              a = o === void 0 ? 0 : o,
              i = e.annotations,
              l = e.timestamp,
              u =
                l === void 0
                  ? (s || (s = r("QuickPerformanceLogger"))).currentTimestamp()
                  : l;
            this.$1(t, 113, a, i, u);
          }),
          (o.endCancel = function (t, n) {
            var e = n === void 0 ? {} : n,
              r = e.instanceKey,
              o = r === void 0 ? 0 : r,
              a = e.cancelReason,
              i = a === void 0 ? 4 : a,
              l = e.annotations,
              s = e.timestamp;
            this.$1(t, i, o, l, s);
          }),
          (o.$1 = function (t, n, o, a, i) {
            (i === void 0 &&
              (i = (s || (s = r("QuickPerformanceLogger"))).currentTimestamp()),
              a &&
                (s || (s = r("QuickPerformanceLogger"))).markerAnnotate(t, a, {
                  instanceKey: o,
                }),
              (s || (s = r("QuickPerformanceLogger"))).markerEnd(t, n, o, i));
          }),
          (o.addAnnotations = function (t, n, o) {
            var e = o === void 0 ? {} : o,
              a = e.instanceKey;
            (s || (s = r("QuickPerformanceLogger"))).markerAnnotate(t, n, {
              instanceKey: a,
            });
          }),
          (o.addPoint = function (t, n, o) {
            var e = o === void 0 ? {} : o,
              a = e.data,
              i = e.debugInfo,
              l = e.instanceKey,
              u = e.timestamp,
              d = c(a, i != null ? i : null);
            (s || (s = r("QuickPerformanceLogger"))).markerPoint(t, n, {
              data: d,
              instanceKey: l,
              timestamp: u,
            });
          }),
          (o.markError = function (t, n, o) {
            var e,
              a = o === void 0 ? {} : o,
              i = a.debugInfo,
              l = a.error,
              u = a.instanceKey;
            ((s || (s = r("QuickPerformanceLogger"))).markerAnnotate(
              t,
              babelHelpers.extends({}, this.$2(l), {
                bool: ((e = {}), (e.uf_has_error = !0), e),
              }),
              { instanceKey: u },
            ),
              this.addPoint(t, n, { debugInfo: i, instanceKey: u }));
          }),
          (o.storeBeforeNavigation = function (t, n) {
            var e = n === void 0 ? {} : n,
              o = e.instanceKey,
              a = o === void 0 ? 0 : o;
            (
              s || (s = r("QuickPerformanceLogger"))
            ).markerStoreBeforeNavigation(t, { instanceKey: a });
          }),
          (o.getActiveFlowIDs = function () {
            return (s || (s = r("QuickPerformanceLogger"))).getActiveMarkerIds({
              type: 2,
            });
          }),
          (o.$2 = function (t) {
            var e, n;
            if (t == null) return {};
            var r = { int: {}, string: {} };
            r.string.uf_error_name = t.name;
            var o = t;
            if (
              ((o == null || (e = o.source) == null ? void 0 : e.code) !=
                null &&
                (r.int.uf_graphql_error_code =
                  o == null ? void 0 : o.source.code),
              (o == null || (n = o.source) == null || (n = n.exception) == null
                ? void 0
                : n.class) != null)
            ) {
              var a;
              r.string.uf_graphql_exception_class =
                o == null || (a = o.source) == null || (a = a.exception) == null
                  ? void 0
                  : a.class;
            }
            return r;
          }),
          t
        );
      })(),
      _ = new p();
    l.default = _;
  },
  98,
);
