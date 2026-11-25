__d(
  "WAWebQplFlow",
  ["QPLEvent", "WAWebEnvironment", "WAWebNoop", "WAWebQplFlowWrapper"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = 0;
    function u(t, n) {
      var a,
        i,
        l = (a = n == null ? void 0 : n.instanceKey) != null ? a : s++,
        u = !0,
        d = o("WAWebQplFlowWrapper").QPL.markerStart(t, {
          annotations: n == null ? void 0 : n.annotations,
          cancelOnUnload: !0,
          instanceKey: l,
          timeoutInMs: n == null ? void 0 : n.timeoutInMs,
          timestamp: n == null ? void 0 : n.timestamp,
        }),
        m = n == null ? void 0 : n.timeoutInMs,
        p =
          m == null
            ? null
            : ((i = n == null ? void 0 : n.timestamp) != null ? i : c()) + m;
      d.annotate({
        string: {
          subplatform: r("WAWebEnvironment").isWindows ? "hybrid" : "web",
          environment: r("WAWebEnvironment").getEnvironment(),
        },
      });
      function _(e, t, n) {
        u &&
          ((u = !1),
          t != null && d.annotate(t),
          n == null ? d.end(e) : d.end(e, { timestamp: n }));
      }
      return {
        addAnnotations: function (t) {
          u && d.annotate(t);
        },
        addPoint: function (t, n, r) {
          u &&
            d.addPoint(t, {
              data: n,
              timestamp: r == null ? void 0 : r.timestamp,
            });
        },
        addPointLocal: function (t, n, r) {
          u &&
            d.addPointLocal(t, {
              data: n,
              timestamp: r == null ? void 0 : r.timestamp,
            });
        },
        endCancel: function (t, n, r) {
          _(4, n, r == null ? void 0 : r.timestamp);
        },
        endFail: function (t, n, r) {
          if (u) {
            var e = r == null ? void 0 : r.timestamp;
            (d.addPoint(t, { data: n, timestamp: e }), _(3, void 0, e));
          }
        },
        endFailWithError: function (t, n, r, o) {
          if (u) {
            var e = o == null ? void 0 : o.timestamp;
            (d.addPoint(t, { data: r, timestamp: e }),
              d.annotate({ string: { failReason: n } }),
              _(3, void 0, e));
          }
        },
        endSuccess: function (t, n) {
          _(2, t, n == null ? void 0 : n.timestamp);
        },
        endTimeout: function (t, n) {
          _(113, t, n == null ? void 0 : n.timestamp);
        },
        getQPLAttrs: function () {
          return {
            instanceKey: l,
            markerId: (e || (e = o("QPLEvent"))).getMarkerId(t),
          };
        },
        hasPassedTimeout: function (t) {
          var e;
          return (
            p != null &&
            c() >= p + ((e = t == null ? void 0 : t.graceInMs) != null ? e : 0)
          );
        },
        isActive: function () {
          return u;
        },
        start: r("WAWebNoop"),
      };
    }
    function c() {
      return self.performance.timeOrigin + self.performance.now();
    }
    l.startQplFlow = u;
  },
  98,
);
