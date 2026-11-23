__d(
  "MAWCreateUpdateThreadUtils",
  ["MAWMICSchema", "MAWQplProxy", "qpl"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, a) {
      (t.forEach(function (t) {
        return o("MAWQplProxy").sendQplPointThroughBridge(
          r("qpl")._(1056836502, "2778"),
          e,
          { annotations: n, instanceKey: t },
        );
      }),
        a != null &&
          o("MAWQplProxy").sendQplPointThroughBridge(
            r("qpl")._(25313175, "1551"),
            "thread_mapping_" + e,
            { instanceKey: a },
          ));
    }
    function s(t, n, r, o) {
      n != null && e(t, [n], r, o);
    }
    function u(e, t, n, r) {
      e === "init_sync" &&
        o("MAWQplProxy").sendQplPointThroughBridge(
          o("MAWMICSchema").EVENT,
          t,
          { annotations: r != null ? r : {} },
          void 0,
          { toClientId: n },
        );
    }
    function c(e, t, n) {
      e === "init_sync" &&
        o("MAWQplProxy").sendQPLBoolAnnotationThroughBridge(
          o("MAWMICSchema").EVENT,
          t,
          !0,
          void 0,
          { toClientId: n },
        );
    }
    ((l.sendThreadMappingQPLPoints = e),
      (l.sendThreadMappingQPLPoint = s),
      (l.maybeSendMICPoint = u),
      (l.maybeSendMICState = c));
  },
  98,
);
