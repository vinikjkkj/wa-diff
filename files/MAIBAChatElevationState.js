__d(
  "MAIBAChatElevationState",
  ["$InternalEnum", "react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useCallback,
      d = u.useContext,
      m = u.useSyncExternalStore,
      p = s.createContext(!1),
      _ = n("$InternalEnum")({
        ADS_MANAGER_PLATFORM_CHAT: "ads_manager_platform_chat",
        BILLING_FAILED_PAYMENT_AUTO_OPEN:
          "billing_failed_payment_auto_open_controller",
        BILLING_HUB_PERSISTENT_HOST: "billing_hub_persistent_maiba_host",
        BILLING_PAY_NOW_COPILOT: "billing_pay_now_copilot",
        BILLING_WIZARD_OVER_PAGE_CHAT: "billing_wizard_over_page_chat",
        BILLING_WIZARD_PLATFORM_CHAT: "billing_wizard_platform_chat",
        BUSINESS_REAUTH_DIALOG: "business_reauth_dialog",
        GAME_MODAL: "game_modal",
      }),
      f = new Map(),
      g = new Map(),
      h = new Set(),
      y = !1,
      C = null;
    function b(e, t) {
      ((y = e), (C = t));
    }
    function v(e, t, n) {
      var r,
        o = (r = e.get(t)) != null ? r : 0;
      return n
        ? (e.set(t, o + 1), o === 0)
        : o === 0
          ? !1
          : o > 1
            ? (e.set(t, o - 1), !1)
            : (e.delete(t), !0);
    }
    function S() {
      for (var e of h) e();
    }
    function R(e, t) {
      v(f, t, e) && S();
    }
    function L(e, t) {
      v(g, t, e) && S();
    }
    function E(e) {
      y !== e && ((y = e), C == null || C(e), S());
    }
    function k() {
      return y;
    }
    function I(e) {
      return f.has(e);
    }
    function T(e) {
      return g.has(e);
    }
    function D(e) {
      return (
        h.add(e),
        function () {
          h.delete(e);
        }
      );
    }
    function x() {
      return f.size > 0;
    }
    function $() {
      return !1;
    }
    function P() {
      return m(D, x, $);
    }
    function N(e) {
      var t = c(
        function () {
          return I(e);
        },
        [e],
      );
      return m(D, t, $);
    }
    function M(e) {
      var t = c(
        function () {
          return T(e);
        },
        [e],
      );
      return m(D, t, $);
    }
    function w() {
      return m(D, k, $);
    }
    function A(e) {
      var t = e.children,
        n = e.hasPersistentHost;
      return s.jsx(p.Provider, { value: n, children: t });
    }
    A.displayName = A.name + " [from " + i.id + "]";
    function F() {
      return d(p);
    }
    ((l.MAIBAElevationSource = _),
      (l.configureBillingFailedPaymentAutoOpenChatOwnership = b),
      (l.applyMAIBAElevatedAboveModal = R),
      (l.applyMAIBAElevationHost = L),
      (l.applyBillingFailedPaymentAutoOpenChatOwned = E),
      (l.getIsBillingFailedPaymentAutoOpenChatOwned = k),
      (l.getIsMAIBAElevationSourceActive = I),
      (l.getHasMAIBAElevationHost = T),
      (l.useIsMAIBAElevatedAboveModal = P),
      (l.useIsMAIBAElevationSourceActive = N),
      (l.useHasMAIBAElevationHost = M),
      (l.useIsBillingFailedPaymentAutoOpenChatOwned = w),
      (l.MAIBAPersistentHostContextProvider = A),
      (l.useHasMAIBAPersistentHost = F));
  },
  98,
);
