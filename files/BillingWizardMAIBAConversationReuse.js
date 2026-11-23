__d(
  "BillingWizardMAIBAConversationReuse",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = 36e5,
      l = 300 * 1e3,
      s = new Map();
    function u(e, t, n) {
      var r,
        o,
        a,
        i,
        l,
        s,
        u = t.adAccountID;
      return u == null || u === "" || n == null || n === ""
        ? null
        : JSON.stringify([
            e,
            u,
            (r = (o = t.entrypointContext) == null ? void 0 : o.prompt_id) !=
            null
              ? r
              : null,
            (a =
              (i = t.entrypointContext) == null ? void 0 : i.additional_info) !=
            null
              ? a
              : null,
            (l = (s = t.userInput) == null ? void 0 : s.initialUserMessage) !=
            null
              ? l
              : null,
          ]);
    }
    function c(e, t, n, r) {
      if (!(e == null || t === "")) {
        var o = s.get(e),
          a = (o == null ? void 0 : o.conversationID) === t;
        (o != null && !a && o.launchedAtMs > n) ||
          s.set(e, {
            conversationID: t,
            isConfirmed:
              r || (a && (o == null ? void 0 : o.isConfirmed) === !0),
            launchedAtMs: n,
          });
      }
    }
    function d(e, t, n) {
      c(e, t, n, !1);
    }
    function m(e, t, n) {
      c(e, t, n, !0);
    }
    function p(t, n) {
      if ((n === void 0 && (n = Date.now()), t == null)) return null;
      var r = s.get(t);
      if (r == null) return null;
      var o = r.isConfirmed ? e : l;
      return n - r.launchedAtMs > o ? (s.delete(t), null) : r.conversationID;
    }
    function _() {
      s.clear();
    }
    ((i.BILLING_WIZARD_MAIBA_CONVERSATION_REUSE_WINDOW_MS = e),
      (i.BILLING_WIZARD_MAIBA_UNCONFIRMED_CONVERSATION_REUSE_WINDOW_MS = l),
      (i.getBillingWizardMAIBAConversationReuseKey = u),
      (i.rememberBillingWizardMAIBAConversationLaunch = d),
      (i.confirmBillingWizardMAIBAConversation = m),
      (i.getReusableBillingWizardMAIBAConversationID = p),
      (i.clearBillingWizardMAIBAConversations = _));
  },
  66,
);
