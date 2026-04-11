__d(
  "WAWebQplFlow",
  ["QPLEvent", "WAWebEnvironment", "WAWebNoop", "WAWebQplFlowWrapper"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = 0;
    function u(t, n) {
      var a,
        i = (a = n == null ? void 0 : n.instanceKey) != null ? a : s++,
        l = !0,
        u = o("WAWebQplFlowWrapper").QPL.markerStart(t, {
          annotations: n == null ? void 0 : n.annotations,
          cancelOnUnload: !0,
          instanceKey: i,
          timeoutInMs: n == null ? void 0 : n.timeoutInMs,
        });
      return (
        u.annotate({
          string: {
            subplatform: r("WAWebEnvironment").isWindows ? "hybrid" : "web",
            environment: r("WAWebEnvironment").getEnvironment(),
          },
        }),
        {
          addAnnotations: function (t) {
            u.annotate(t);
          },
          addPoint: function (t, n) {
            u.addPoint(t, { data: n });
          },
          endCancel: function (t, n) {
            ((l = !1), n != null && u.annotate(n), u.end(4));
          },
          endFail: function (t, n) {
            ((l = !1), u.addPoint(t, { data: n }), u.end(3));
          },
          endFailWithError: function (t, n, r) {
            ((l = !1),
              u.addPoint(t, { data: r }),
              u.annotate({ string: { failReason: n } }),
              u.end(3));
          },
          endSuccess: function (t) {
            ((l = !1), t != null && u.annotate(t), u.end(2));
          },
          getQPLAttrs: function () {
            return {
              instanceKey: i,
              markerId: (e || (e = o("QPLEvent"))).getMarkerId(t),
            };
          },
          isActive: function () {
            return l;
          },
          start: r("WAWebNoop"),
        }
      );
    }
    l.startQplFlow = u;
  },
  98,
);
