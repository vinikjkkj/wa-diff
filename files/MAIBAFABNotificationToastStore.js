__d(
  "MAIBAFABNotificationToastStore",
  ["MAIBAFabIssueTypes", "stripMAIBAEntityTags"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "Promo",
      s = "ProactivePromo",
      u = "Recommendation",
      c = "ASASupportIntentDoRAActive",
      d = "ASASupportIntentDoRAPayment";
    function m(e) {
      return e === c || e === d;
    }
    var p = new Set([
      "aymt_account_unsettled_tip_v2",
      "aymt_maiba_fab_account_issue_tip",
      "aymt_risk_disabled_ad_account_tip",
      "aymt_risk_disabled_ad_account_tip_v2",
    ]);
    function _(e) {
      return e != null && p.has(e);
    }
    function f(e, t) {
      return e === "aymt_maiba_fab_cmo_tip" && t != null;
    }
    function g(t) {
      return t === e || t === d;
    }
    function h(e) {
      return e === u;
    }
    var y = "HIDDEN_FOR_FAB",
      C = 5,
      b = [],
      v = new Set(),
      S = new Set();
    function R() {
      for (var e of v) e();
    }
    var L = new Set();
    function E(e) {
      return (
        L.add(e),
        function () {
          L.delete(e);
        }
      );
    }
    function k(e) {
      for (var t of L) if (t(e)) return !0;
      return !1;
    }
    function I(e) {
      for (var t of S) t(e);
    }
    function T(e) {
      (e.threadStatus === y && !h(e.toastType)) ||
        (e.isIssue === !0 &&
          (e.snippet.includes("<suppress-notification>") ||
            r("stripMAIBAEntityTags")(e.snippet).trim() === "")) ||
        (e.toastId != null &&
          b.some(function (t) {
            return t.toastId === e.toastId;
          })) ||
        b.filter(function (t) {
          return (
            (t.isIssue === !0) == (e.isIssue === !0) &&
            (t.isOrdinaryMBSNotification === !0) ==
              (e.isOrdinaryMBSNotification === !0)
          );
        }).length >= C ||
        ((b = [].concat(b, [e])), R(), I(e));
    }
    function D(e) {
      var t = e != null ? e : $();
      if (t != null) {
        var n = b.indexOf(t);
        n !== -1 && ((b = [].concat(b.slice(0, n), b.slice(n + 1))), R());
      }
    }
    function x(e, t) {
      return (
        e.isIssue !== !0 &&
        (t === void 0 || e.adAccountId == null || e.adAccountId === t)
      );
    }
    function $(e, t) {
      var n;
      return (n = b.find(function (n) {
        return x(n, t) && (e == null || e(n));
      })) != null
        ? n
        : null;
    }
    function P(e, t) {
      var n,
        r = b.filter(function (t) {
          return (
            t.isIssue === !0 &&
            (e == null ||
              t.adAccountId === e ||
              o("MAIBAFabIssueTypes").isMAIBAFabAccountWideIssueType(
                t.toastType,
              ))
          );
        });
      return t != null && r.includes(t)
        ? t
        : (n = r.sort(function (e, t) {
              var n,
                r,
                o,
                a,
                i =
                  ((n = t.activityTimestampMs) != null ? n : 0) -
                  ((r = e.activityTimestampMs) != null ? r : 0),
                l = (o = e.toastId) != null ? o : "",
                s = (a = t.toastId) != null ? a : "";
              return i || l.length - s.length || (l < s ? -1 : l > s ? 1 : 0);
            })[0]) != null
          ? n
          : null;
    }
    function N(e) {
      ((b = b.filter(function (t) {
        return (
          t.isIssue !== !0 ||
          (e != null &&
            t.adAccountId !== e &&
            !o("MAIBAFabIssueTypes").isMAIBAFabAccountWideIssueType(
              t.toastType,
            ))
        );
      })),
        R());
    }
    function M(e, t) {
      return b.filter(function (n) {
        return x(n, t) && (e == null || e(n));
      }).length;
    }
    function w(e) {
      return (
        v.add(e),
        function () {
          v.delete(e);
        }
      );
    }
    function A(e) {
      return (
        S.add(e),
        function () {
          S.delete(e);
        }
      );
    }
    var F = new Set();
    function O(e) {
      if (!(e.threadStatus === y && !h(e.toastType))) for (var t of F) t(e);
    }
    function B(e) {
      return (
        F.add(e),
        function () {
          F.delete(e);
        }
      );
    }
    ((l.PROMO_TOAST_TYPE = e),
      (l.PROACTIVE_PROMO_TOAST_TYPE = s),
      (l.RECOMMENDATION_TOAST_TYPE = u),
      (l.ASA_SUPPORT_INTENT_DORA_ACTIVE_TOAST_TYPE = c),
      (l.ASA_SUPPORT_INTENT_DORA_PAYMENT_TOAST_TYPE = d),
      (l.isSupportIntentDoRAToastType = m),
      (l.isIssueOnlyMAIBAFabTipID = _),
      (l.isMAIBAMBSAsyncTaskResult = f),
      (l.isPromoToastType = g),
      (l.isActivateOnClickToastType = h),
      (l.HIDDEN_FOR_FAB_THREAD_STATUS = y),
      (l.registerMAIBAFABNotificationToastConsumer = E),
      (l.hasMAIBAFABNotificationToastConsumer = k),
      (l.showMAIBAFABNotificationToast = T),
      (l.dismissMAIBAFABNotificationToast = D),
      (l.getMAIBAFABNotificationToast = $),
      (l.getMAIBAFABIssueToast = P),
      (l.clearMAIBAFABIssueToasts = N),
      (l.getMAIBAFABNotificationToastCount = M),
      (l.subscribeMAIBAFABNotificationToast = w),
      (l.subscribeMAIBAFABNotificationToastEnqueued = A),
      (l.announceMAIBAMessageWhileHidden = O),
      (l.subscribeMAIBAMessageWhileHidden = B));
  },
  98,
);
