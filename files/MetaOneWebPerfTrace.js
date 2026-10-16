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
        complete: function () {
          var t = e;
          if (((e = null), t != null)) {
            var n;
            (n = r("InteractionTracing").getPendingInteractionById(t)) ==
              null || n.forceCompleteTrace();
          }
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
      _ = null,
      f = !1,
      g = new Set(),
      h = r("qpl")._(580714498, "3601");
    function y(e) {
      var t = { entrypoint: e.entrypoint, surface: e.surface };
      return (
        e.productType != null && (t.product_type = e.productType),
        e.subType != null && (t.sub_type = e.subType),
        e.tierCategory != null && (t.tier_category = e.tierCategory),
        e.businessID != null && (t.business_id = e.businessID),
        t
      );
    }
    function C(e, t) {
      var n = y(t);
      for (var r of Object.keys(n)) {
        var o = n[r];
        o != null && e.addAnnotation(r, o);
      }
    }
    var b = {
        __resetForTesting: function () {
          (u.reset(),
            m.reset(),
            c.reset(),
            d.reset(),
            p.reset(),
            (_ = null),
            (s = null),
            (f = !1),
            g.clear());
        },
        annotateDialogOpen: function (t, n) {
          var e = m.getID();
          e != null && r("InteractionTracingMetrics").addAnnotation(e, t, n);
        },
        annotateJourneyTierCategory: function (t) {
          var e = s;
          (e != null && (s = babelHelpers.extends({}, e, { tierCategory: t })),
            f &&
              r("QPLUserFlow").addAnnotations(h, {
                string: { tier_category: t },
              }));
        },
        annotatePurchaseFunnel: function (t, n) {
          var e;
          f &&
            r("QPLUserFlow").addAnnotations(h, {
              string: ((e = {}), (e[t] = n), e),
            });
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
          f &&
            ((f = !1),
            r("QPLUserFlow").endCancel(h, {
              annotations: { string: { cancel_reason: t } },
            }));
        },
        cancelStepTransition: function (t) {
          p.cancel(t);
        },
        endPurchaseCompletion: function () {
          var e = d.getID();
          (e != null &&
            r("InteractionTracingMetrics").addAnnotation(
              e,
              "completion_signal",
              "payment_reported",
            ),
            d.complete());
        },
        endPurchaseFunnelSpan: function (t) {
          f && r("QPLUserFlow").addPoint(h, t + "_end");
        },
        endPurchaseFunnelSuccess: function (t) {
          f &&
            ((f = !1),
            r("QPLUserFlow").endSuccess(h, {
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
        failPurchaseCompletion: function (t, n) {
          var e = d.getID();
          if (e != null) {
            var o = n == null ? void 0 : n.errorCode;
            o != null &&
              o !== "" &&
              r("InteractionTracingMetrics").addAnnotation(e, "error_code", o);
            var a = n == null ? void 0 : n.errorOperation;
            a != null &&
              a !== "" &&
              r("InteractionTracingMetrics").addAnnotation(
                e,
                "error_operation",
                a,
              );
          }
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
        getPendingStepTransitionIDFor: function (t) {
          return _ === t ? p.getID() : null;
        },
        markPurchaseFunnelError: function (t, n) {
          f && r("QPLUserFlow").markError(h, t, n != null ? { error: n } : {});
        },
        markPurchaseFunnelPoint: function (t) {
          f && r("QPLUserFlow").addPoint(h, t);
        },
        markPurchaseFunnelPointOnce: function (t) {
          !f || g.has(t) || (g.add(t), r("QPLUserFlow").addPoint(h, t));
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
                return C(t, e);
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
              return C(e, t);
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
                return C(t, e);
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
                return C(t, e);
              },
            );
        },
        startPurchaseFunnel: function (t) {
          (g.clear(),
            (s = t),
            r("QPLUserFlow").start(h, {
              annotations: { string: y(t) },
              cancelExisting: !0,
            }),
            (f = !0));
        },
        startPurchaseFunnelSpan: function (t) {
          f && r("QPLUserFlow").addPoint(h, t + "_start");
        },
        startStepTransition: function (t) {
          var e = s;
          e != null &&
            ((_ = t),
            p.start(
              {
                interactionClass: "responsive",
                qplEvent: r("qpl")._(580724469, "3602"),
                tracePolicy: "meta_one.step_transition",
                traceType: "INTERACTION",
              },
              function (n) {
                (C(n, e), n.addAnnotation("step", t));
              },
            ));
        },
      },
      v = b;
    l.default = v;
  },
  98,
);
