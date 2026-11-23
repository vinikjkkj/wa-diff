__d(
  "MAIBABusinessSetupFinishHandle",
  [
    "MAIBABusinessSetupCompletion",
    "MAIBABusinessSetupConstants",
    "MAIBAChatSendInterceptorStore",
    "Promise",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react")),
      c = u.useEffect,
      d = u.useSyncExternalStore,
      m = new Map(),
      p = new Set();
    function _() {
      for (var e of p) e();
    }
    function f(e) {
      return (
        p.add(e),
        function () {
          p.delete(e);
        }
      );
    }
    function g(e) {
      var t = m.get(e);
      return (
        t == null &&
          ((t = {
            editRequestedWorkspaceKey: null,
            executor: null,
            finishApplyInFlight: !1,
            known: !1,
            openWorkspace: null,
            pendingFinish: !1,
            retryWorkspaceKey: null,
          }),
          m.set(e, t)),
        t
      );
    }
    function h(e, t, n) {
      if (e !== "") {
        var r = g(e);
        ((r.executor = t), (r.known = !0), (r.openWorkspace = n), _());
      }
    }
    function y(e, t) {
      if (e !== "") {
        var n = m.get(e);
        n == null ||
          n.executor == null ||
          (t != null && n.executor.onFinish !== t) ||
          ((n.executor = null), _());
      }
    }
    function C(e) {
      var t = g(e);
      t.pendingFinish || ((t.pendingFinish = !0), _());
    }
    function b(e, t) {
      (e != null && e !== "" && C(e), t());
    }
    function v(e) {
      var t = m.get(e);
      t == null || !t.pendingFinish || ((t.pendingFinish = !1), _());
    }
    function S(e) {
      var t = m.get(e);
      return t == null || !t.pendingFinish
        ? !1
        : ((t.pendingFinish = !1), _(), !0);
    }
    function R(e) {
      var t, n;
      return e == null || e === ""
        ? !1
        : (t = (n = m.get(e)) == null ? void 0 : n.pendingFinish) != null
          ? t
          : !1;
    }
    function L(e, t) {
      return e == null || e === "" ? null : JSON.stringify([e, t]);
    }
    function E(e, t, n) {
      if (!(e == null || e === "")) {
        var r = L(t, n);
        if (r != null) {
          var o = g(e);
          o.retryWorkspaceKey !== r && ((o.retryWorkspaceKey = r), _());
        }
      }
    }
    function k(e) {
      if (!(e == null || e === "")) {
        var t = m.get(e);
        t == null ||
          t.retryWorkspaceKey == null ||
          ((t.retryWorkspaceKey = null), _());
      }
    }
    function I(e, t, n) {
      var r = L(t, n);
      return d(f, function () {
        var t;
        return e == null || r == null
          ? !1
          : ((t = m.get(e)) == null ? void 0 : t.retryWorkspaceKey) === r;
      });
    }
    function T(e, t, n) {
      if (!(e == null || e === "")) {
        var r = JSON.stringify([t, n]),
          o = g(e);
        o.editRequestedWorkspaceKey !== r &&
          ((o.editRequestedWorkspaceKey = r), _());
      }
    }
    function D(e, t, n) {
      var r = JSON.stringify([t, n]);
      return d(f, function () {
        var t;
        return e == null
          ? !1
          : ((t = m.get(e)) == null ? void 0 : t.editRequestedWorkspaceKey) ===
              r;
      });
    }
    function x(e) {
      return d(f, function () {
        return R(e);
      });
    }
    function $(e) {
      if (e == null || e === "") return !0;
      var t = g(e);
      return t.finishApplyInFlight
        ? !1
        : ((t.finishApplyInFlight = !0), _(), !0);
    }
    function P(e) {
      if (!(e == null || e === "")) {
        var t = m.get(e);
        t == null ||
          !t.finishApplyInFlight ||
          ((t.finishApplyInFlight = !1), _());
      }
    }
    function N(e) {
      var t, n;
      return e == null || e === ""
        ? !1
        : (t = (n = m.get(e)) == null ? void 0 : n.finishApplyInFlight) != null
          ? t
          : !1;
    }
    function M(e) {
      return d(f, function () {
        return N(e);
      });
    }
    function w(t, r, a, i, l) {
      var s = x(t),
        u = M(t);
      c(
        function () {
          if (!(!s || t == null || t === "")) {
            if (
              a ||
              o("MAIBABusinessSetupCompletion").getBusinessSetupCompletion(t) !=
                null
            ) {
              v(t);
              return;
            }
            if (!r) {
              !i && !u && v(t);
              return;
            }
            S(t) &&
              (e || (e = n("Promise"))).resolve().then(function () {
                l();
              });
          }
        },
        [r, t, u, a, i, l, s],
      );
    }
    function A(e, t) {
      var n, r;
      return (
        ((n = (r = t.executor) == null ? void 0 : r.isCompleted) != null
          ? n
          : !1) ||
        o("MAIBABusinessSetupCompletion").getBusinessSetupCompletion(e) != null
      );
    }
    function F(e) {
      var t = e.message;
      if (
        t == null ||
        t.trim() !==
          o("MAIBABusinessSetupConstants").BUSINESS_SETUP_FINISH_MESSAGE ||
        e.originComponent ===
          o("MAIBABusinessSetupConstants")
            .BUSINESS_SETUP_FINISH_ORIGIN_COMPONENT
      )
        return !1;
      var n = e.externalConversationId;
      if (n == null || n === "") return !1;
      var r = m.get(n);
      return r == null || !r.known || A(n, r)
        ? !1
        : r.executor != null && r.executor.canFinish
          ? (r.executor.onFinish(), !0)
          : ((e.originComponent ===
              o("MAIBABusinessSetupConstants")
                .BUSINESS_SETUP_ERROR_CARD_ORIGIN_COMPONENT &&
              r.executor != null) ||
              ((r.executor == null || r.executor.shouldDeferFinish) && C(n),
              r.openWorkspace == null || r.openWorkspace()),
            !0);
    }
    (o("MAIBAChatSendInterceptorStore").registerSendInterceptor(F),
      (l.publishBusinessSetupFinishExecutor = h),
      (l.clearBusinessSetupFinishExecutor = y),
      (l.requestBusinessSetupFinishInWorkspace = b),
      (l.clearPendingBusinessSetupFinish = v),
      (l.getPendingBusinessSetupFinish = R),
      (l.retainBusinessSetupRetryWorkspace = E),
      (l.clearBusinessSetupRetryWorkspace = k),
      (l.useIsBusinessSetupRetryWorkspace = I),
      (l.markBusinessSetupEditRequested = T),
      (l.useIsBusinessSetupEditRequested = D),
      (l.tryBeginBusinessSetupFinishApply = $),
      (l.endBusinessSetupFinishApply = P),
      (l.useBusinessSetupFinishApplyInFlight = M),
      (l.useConsumePendingBusinessSetupFinish = w));
  },
  98,
);
