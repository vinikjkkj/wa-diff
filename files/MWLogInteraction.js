__d(
  "MWLogInteraction",
  ["ExecutionEnvironment", "ifRequireable", "qpl"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = r("qpl")._(30605361, "6204");
    function u(t) {
      if ((e || (e = r("ExecutionEnvironment"))).isInBrowser) {
        var n = m();
        n == null || n.cancelTrace(t, !0);
      }
    }
    function c(t) {
      if ((e || (e = r("ExecutionEnvironment"))).isInBrowser) {
        var n = m();
        (n == null || n.addAnnotation("successReason", t),
          n == null || n.forceCompleteTrace());
      }
    }
    function d(t) {
      if ((e || (e = r("ExecutionEnvironment"))).isInBrowser) {
        var n = m();
        n == null || n.addMarkerPoint(t, "AppTiming");
      }
    }
    function m() {
      if ((e || (e = r("ExecutionEnvironment"))).isInBrowser)
        return r("ifRequireable")("InteractionTracing", function (e) {
          return Array.from(e.getPendingInteractions()).find(function (e) {
            var t, n;
            if (
              ((t = e.getTrace()) == null ? void 0 : t.qplEvent) === s &&
              ((n = e.getTrace()) == null ? void 0 : n.tracePolicy) ===
                "comet.jewel.messenger"
            )
              return !0;
          });
        });
    }
    function p(t) {
      (e || (e = r("ExecutionEnvironment"))).isInBrowser &&
        r("ifRequireable")("InteractionTracing", function (e) {
          e.getPendingInteractions().forEach(function (e) {
            e.addMarkerPoint(t, "AppTiming");
          });
        });
    }
    function _(t, n) {
      if ((e || (e = r("ExecutionEnvironment"))).isInBrowser) {
        var o = m();
        o == null || o.addAnnotationInt(t, n);
      }
    }
    function f(t, n) {
      if ((e || (e = r("ExecutionEnvironment"))).isInBrowser) {
        var o = m();
        o == null || o.addAnnotation(t, n);
      }
    }
    ((l.logPopoverOpenCancel = u),
      (l.logPopoverOpenComplete = c),
      (l.logPopoverOpenPoint = d),
      (l.getPopoverTrace = m),
      (l.addPointToInteractionTracing = p),
      (l.addAnnotationIntToInteractionTracing = _),
      (l.addAnnotationStringToInteractionTracing = f));
  },
  98,
);
