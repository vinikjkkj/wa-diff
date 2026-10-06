__d(
  "MetaOneWebPerfTrace",
  ["InteractionTracing", "InteractionTracingMetrics", "QPLUserFlow", "qpl"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      var e = null,
        t = function (n, o) {
          var t = e;
          if (((e = null), t != null)) {
            var a;
            (a = r("InteractionTracing").getPendingInteractionById(t)) ==
              null || a[n](o, !0);
          }
        };
      return {
        cancel: function (n) {
          return t("cancelTrace", n);
        },
        fail: function (n) {
          return t("failTrace", n);
        },
        getID: function () {
          return e;
        },
        reset: function () {
          e = null;
        },
        start: function (n, o) {
          var t = e;
          if (t != null) {
            var a;
            (a = r("InteractionTracing").getPendingInteractionById(t)) ==
              null || a.cancelTrace("new_interaction", !0);
          }
          return ((e = r("InteractionTracing").startInteraction(n, o)), e);
        },
      };
    }
    var s = null,
      u = e(),
      c = e(),
      d = e(),
      m = e(),
      p = e(),
      _ = !1,
      f = new Set(),
      g = r("qpl")._(580714498, "3601");
    function h(e, t) {
      (e.addAnnotation("surface", t.surface),
        e.addAnnotation("entrypoint", t.entrypoint),
        t.productType != null && e.addAnnotation("product_type", t.productType),
        t.businessID != null && e.addAnnotation("business_id", t.businessID));
    }
    function y(e) {
      var t = { entrypoint: e.entrypoint, surface: e.surface };
      return (
        e.productType != null && (t.product_type = e.productType),
        e.businessID != null && (t.business_id = e.businessID),
        t
      );
    }
    var C = {
        __resetForTesting: function () {
          (u.reset(),
            m.reset(),
            c.reset(),
            d.reset(),
            p.reset(),
            (s = null),
            (_ = !1),
            f.clear());
        },
        annotateDialogOpen: function (t, n) {
          var e = m.getID();
          e != null && r("InteractionTracingMetrics").addAnnotation(e, t, n);
        },
        cancelBillableAccountReady: function (t) {
          u.cancel(t);
        },
        cancelDialogOpen: function (t) {
          m.cancel(t);
        },
        cancelOrderReady: function (t) {
          c.cancel(t);
        },
        cancelPurchaseCompletion: function (t) {
          d.cancel(t);
        },
        cancelPurchaseFunnel: function (t) {
          _ &&
            ((_ = !1),
            r("QPLUserFlow").endCancel(g, {
              annotations: { string: { cancel_reason: t } },
            }));
        },
        cancelStepTransition: function (t) {
          p.cancel(t);
        },
        endPurchaseFunnelSpan: function (t) {
          _ && r("QPLUserFlow").addPoint(g, t + "_end");
        },
        endPurchaseFunnelSuccess: function (t) {
          _ &&
            ((_ = !1),
            r("QPLUserFlow").endSuccess(g, {
              annotations: { string: { end_destination: t } },
            }));
        },
        failBillableAccountReady: function (t) {
          u.fail(t);
        },
        failDialogOpen: function (t) {
          m.fail(t);
        },
        failOrderReady: function (t) {
          c.fail(t);
        },
        failPurchaseCompletion: function (t) {
          d.fail(t);
        },
        getPendingBillableAccountReadyID: function () {
          return u.getID();
        },
        getPendingDialogOpenID: function () {
          return m.getID();
        },
        getPendingOrderReadyID: function () {
          return c.getID();
        },
        getPendingPurchaseCompletionID: function () {
          return d.getID();
        },
        getPendingStepTransitionID: function () {
          return p.getID();
        },
        markPurchaseFunnelError: function (t, n) {
          _ && r("QPLUserFlow").markError(g, t, n != null ? { error: n } : {});
        },
        markPurchaseFunnelPoint: function (t) {
          _ && r("QPLUserFlow").addPoint(g, t);
        },
        markPurchaseFunnelPointOnce: function (t) {
          !_ || f.has(t) || (f.add(t), r("QPLUserFlow").addPoint(g, t));
        },
        startBillableAccountReady: function () {
          var e = s;
          e != null &&
            u.start(
              {
                interactionClass: "contingent",
                qplEvent: r("qpl")._(580715936, "1638"),
                tracePolicy: "meta_one.billable_account_ready",
                traceType: "INTERACTION",
              },
              function (t) {
                return h(t, e);
              },
            );
        },
        startDialogOpen: function (t) {
          return m.start(
            {
              interactionClass: "contingent",
              qplEvent: r("qpl")._(580714497, "1941"),
              tracePolicy: "meta_one.dialog_open",
              traceType: "INTERACTION",
            },
            function (e) {
              (e.addAnnotation("surface", t.surface),
                e.addAnnotation("entrypoint", t.entrypoint),
                t.productType != null &&
                  e.addAnnotation("product_type", t.productType),
                t.businessID != null &&
                  e.addAnnotation("business_id", t.businessID));
            },
          );
        },
        startOrderReady: function () {
          var e = s;
          e != null &&
            c.start(
              {
                interactionClass: "contingent",
                qplEvent: r("qpl")._(580727304, "1840"),
                tracePolicy: "meta_one.order_ready",
                traceType: "INTERACTION",
              },
              function (t) {
                return h(t, e);
              },
            );
        },
        startPurchaseCompletion: function () {
          var e = s;
          e != null &&
            d.start(
              {
                interactionClass: "contingent",
                qplEvent: r("qpl")._(580725270, "3070"),
                tracePolicy: "meta_one.purchase_completion",
                traceType: "INTERACTION",
              },
              function (t) {
                return h(t, e);
              },
            );
        },
        startPurchaseFunnel: function (t) {
          (f.clear(),
            (s = t),
            r("QPLUserFlow").start(g, {
              annotations: { string: y(t) },
              cancelExisting: !0,
            }),
            (_ = !0));
        },
        startPurchaseFunnelSpan: function (t) {
          _ && r("QPLUserFlow").addPoint(g, t + "_start");
        },
        startStepTransition: function (t) {
          var e = s;
          e != null &&
            p.start(
              {
                interactionClass: "responsive",
                qplEvent: r("qpl")._(580724469, "3602"),
                tracePolicy: "meta_one.step_transition",
                traceType: "INTERACTION",
              },
              function (n) {
                (h(n, e), n.addAnnotation("step", t));
              },
            );
        },
      },
      b = C;
    l.default = b;
  },
  98,
);
