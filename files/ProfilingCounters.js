__d(
  "ProfilingCounters",
  [
    "ErrorPubSub",
    "ExecutionContextObservers",
    "OnDemandExecutionContextObserver",
    "ProfilingCountersStore",
    "TimeSlice",
    "err",
    "performanceAbsoluteNow",
  ],
  function (t, n, r, o, a, i) {
    var e, l, s, u;
    (e || (e = n("performanceAbsoluteNow")))();
    var c = {
        ALL: "ALL",
        ONLY_ON_CONTINUATIONS_AND_FIRST_EXEC:
          "ONLY_ON_CONTINUATIONS_AND_FIRST_EXEC",
      },
      d = 100,
      m = [],
      p = (function (e) {
        "use strict";
        function t() {
          return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        var r = t.prototype;
        return (
          (r.onNewContextCreatedWhileEnabled = function (t, n, r) {
            return _.currentContext().getPropagatedContextForChild(
              !!(r && r.isContinuation),
            );
          }),
          (r.onBeforeContextStartedWhileEnabled = function (t, n, r) {
            var e = r && r.propagateCounterAttribution,
              o = null;
            if (t.executionNumber > 0 && n)
              for (var a of Object.entries(n)) {
                var i = a[0],
                  l = a[1],
                  s = l.propagationType;
                s !== "ONLY_ON_CONTINUATIONS_AND_FIRST_EXEC" &&
                  ((o = o || {}), (o[i] = l));
              }
            else o = n;
            var u = _.currentContext().getExecutionContext(
                !!(r && r.isContinuation),
                o,
              ),
              d = new _(!1, u, t.contextID);
            return (
              e != null && d.addAttribution(e, c.ALL),
              _.nestContext(d),
              null
            );
          }),
          (r.onAfterContextEndedWhileEnabled = function (t, r, o, a) {
            var e = _.unnestContext();
            t.isRoot &&
              (l || (l = n("ProfilingCountersStore")))
                .getInstance()
                .pushElement(e);
          }),
          (r.getBeforeID = function () {
            return (s || (s = n("ExecutionContextObservers"))).beforeIDs
              .PROFILING_COUNTERS;
          }),
          (r.getAfterID = function () {
            return (s || (s = n("ExecutionContextObservers"))).afterIDs
              .PROFILING_COUNTERS;
          }),
          (r.onDisable = function () {
            _.resetState();
          }),
          t
        );
      })(n("OnDemandExecutionContextObserver")),
      _ = (function () {
        "use strict";
        function e(e, t, n) {
          ((this.isGlobal = e),
            (this.propagatedAttributions = t),
            (this.newAttributions = null),
            (this.active = null),
            (this.processedNestedContexts = null),
            (this.newAttributionsCount = 0),
            (this.$1 = n));
        }
        ((e.getObserver = function () {
          return (e.$2 || (e.$2 = new p()), e.$2);
        }),
          (e.wrapInSingleContext = function (n) {
            var t = new e(!1, null, 0);
            return (
              n.forEach(function (e) {
                return t.$3(e, !1);
              }),
              t
            );
          }),
          (e.startTiming = function (n) {
            return e.currentContext().getActiveCounters().startTiming(n);
          }),
          (e.stopTiming = function (n) {
            return e.currentContext().getActiveCounters().stopTiming(n);
          }),
          (e.currentContext = function () {
            return m[m.length - 1];
          }));
        var t = e.prototype;
        return (
          (t.addAttribution = function (t, n) {
            return (
              this.$4(t) ||
                (this.newAttributions == null && (this.newAttributions = {}),
                (this.newAttributions[t] = {
                  newCounterIdx: this.newAttributionsCount,
                  propagationType: n,
                  snapshotAtStart: this.hasActiveCounters()
                    ? this.getActiveCounters().getTotals()
                    : null,
                }),
                this.newAttributionsCount++),
              this
            );
          }),
          (t.$5 = function (t, n) {
            return n != null && n[t] != null;
          }),
          (t.$4 = function (t) {
            return (
              this.$5(t, this.propagatedAttributions) ||
              this.$5(t, this.newAttributions)
            );
          }),
          (e.$6 = function (t, n, r) {
            for (var e = 0; e < r.length; e++) {
              var o = r[e],
                a = o[0],
                i = o[1],
                l = i.propagationType;
              (l === c.ALL || n) && (t[a] = i);
            }
          }),
          (t.getPropagatedContextForChild = function (n) {
            var t;
            if (this.newAttributions == null) {
              if (this.propagatedAttributions == null || n)
                return this.propagatedAttributions;
              t = Object.entries(this.propagatedAttributions);
              for (var r = !0, o = 0; o < t.length; o++) {
                var a = t[o],
                  i = a[0],
                  l = a[1];
                if (
                  l.propagationType === c.ONLY_ON_CONTINUATIONS_AND_FIRST_EXEC
                ) {
                  r = !1;
                  break;
                }
              }
              if (r) return this.propagatedAttributions;
            }
            var s = {};
            return (
              this.propagatedAttributions != null &&
                e.$6(s, n, t || Object.entries(this.propagatedAttributions)),
              this.newAttributions != null &&
                e.$6(s, n, Object.entries(this.newAttributions)),
              s
            );
          }),
          (t.getExecutionContext = function (n, r) {
            var t = n ? this.getPropagatedContextForChild(n) || {} : {};
            return (r && e.$6(t, n, Object.entries(r)), t);
          }),
          (t.getActiveCounters = function () {
            return (
              this.active == null && (this.active = new f()),
              this.active
            );
          }),
          (t.$7 = function () {
            return this.isGlobal;
          }),
          (t.hasActiveCounters = function () {
            return this.active != null;
          }),
          (e.nestContext = function (t) {
            m.push(t);
          }),
          (e.unnestContext = function () {
            if (m.length === 1)
              throw n("err")("popping off the global context");
            var t = m.pop();
            if (t.hasActiveCounters()) var r = t.getActiveCounters();
            return (
              (t.hasActiveCounters() || t.processedNestedContexts != null) &&
                e.currentContext().$3(t),
              t
            );
          }),
          (t.$3 = function (t, n) {
            (n === void 0 && (n = !0),
              !this.$7() &&
                ((n &&
                  this.processedNestedContexts != null &&
                  this.processedNestedContexts.length >= d) ||
                  ((this.processedNestedContexts =
                    this.processedNestedContexts || []),
                  this.processedNestedContexts.push(t))));
          }),
          (t.getTimeSliceContextID = function () {
            return this.$1;
          }),
          (e.resetState = function () {
            m = [new e(!0, null, 0)];
          }),
          (e.getHandle = function () {
            return g;
          }),
          e
        );
      })();
    _.AttributionPropagation = c;
    var f = (function () {
      "use strict";
      function t() {
        ((this.$1 = null), (this.$2 = null), (this.$3 = null));
      }
      var r = t.prototype;
      return (
        (r.startTiming = function (o) {
          var r = t.$4++,
            a = { value: 0, counter: o, id: r, lastStartTime: 0 },
            i = this.$1 || [];
          ((this.$2 = this.$2 || {}), (this.$2[r] = i.length), i.push(a));
          var l = (e || (e = n("performanceAbsoluteNow")))();
          if (((a.lastStartTime = l), i.length > 1)) {
            var s = i[i.length - 2];
            s.value += l - s.lastStartTime;
          }
          return ((this.$1 = i), r);
        }),
        (r.stopTiming = function (r) {
          var t = (e || (e = n("performanceAbsoluteNow")))(),
            o = this.$2,
            a = this.$1;
          if (o == null || a == null) {
            var i = n("err")("token does not match the counter context");
            return ((u || (u = n("ErrorPubSub"))).reportError(i), 0);
          }
          var l = o[r];
          if ((delete o[r], l == null || a[l] == null)) return 0;
          for (var s = null, c = 0; a.length - 1 > l; ) {
            var d = a.pop();
            ((c += d.value),
              delete o[d.id],
              s == null && d.lastStartTime != null && (s = d.lastStartTime));
          }
          var m = a.pop();
          ((m.value += t - (s || m.lastStartTime)), (m.value += c));
          var p = this.$3 || {};
          return (
            (p[m.counter] = p[m.counter] || 0),
            (p[m.counter] += m.value),
            a.length > 0 && (a[a.length - 1].lastStartTime = t),
            (this.$1 = a),
            (this.$3 = p),
            (this.$2 = o),
            m.value
          );
        }),
        (r.getTotals = function () {
          return babelHelpers.extends({}, this.$3 || {});
        }),
        (r.openCounterCount = function () {
          return this.$1 != null ? this.$1.length : 0;
        }),
        t
      );
    })();
    ((f.$4 = 1),
      m.push(new _(!0, null, 0)),
      n("TimeSlice").registerExecutionContextObserver(_.getObserver()));
    var g = _.getObserver().expressInterest();
    ((t.ProfilingCounters = _), (a.exports = _));
  },
  3,
);
