__d(
  "logMAIBAMemoryImportFunnelEvent",
  ["AdsHelpTrayUILoggerStoreUtils", "uuidv4"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        AYMT_UPSELL_CARD: "aymt_upsell_card",
        PASTE_REMINDER: "paste_reminder",
        SETTINGS: "settings",
      },
      s = new Map();
    function u(e) {
      s.set(e, {
        entryPoint: e,
        importSessionId: r("uuidv4")(),
        lastEvent: null,
      });
    }
    function c(e) {
      s.has(e) || u(e);
    }
    function d(e, t) {
      var n = s.get(e);
      n != null && s.set(e, babelHelpers.extends({}, n, t));
    }
    function m(e) {
      s.delete(e);
    }
    function p(e) {
      var t;
      return (t = s.get(e)) == null ? void 0 : t.importSessionId;
    }
    var _ = new Set([
      "maiba_memory_import_add_to_memory_click",
      "maiba_memory_import_card_xout",
      "maiba_memory_import_modal_dismissed",
      "maiba_memory_import_no_tip_returned",
      "maiba_memory_import_reminder_xout",
      "maiba_memory_import_tip_load_failed",
    ]);
    function f(e, t, n) {
      n != null && n !== "" && (e[t] = n);
    }
    function g(e, t, n) {
      var r,
        a = s.get(t),
        i = babelHelpers.extends({}, n);
      (f(i, "import_session_id", a == null ? void 0 : a.importSessionId),
        f(
          i,
          "entry_point",
          (r = a == null ? void 0 : a.entryPoint) != null ? r : t,
        ),
        f(i, "experiment_arm", a == null ? void 0 : a.experimentArm),
        f(i, "tip_name", a == null ? void 0 : a.tipName),
        f(i, "tip_id", a == null ? void 0 : a.tipId),
        f(i, "maiba_ad_account_id", a == null ? void 0 : a.adAccountId),
        o("AdsHelpTrayUILoggerStoreUtils").logHelpTrayEvents(e, i),
        a != null &&
          (_.has(e)
            ? s.delete(t)
            : s.set(t, babelHelpers.extends({}, a, { lastEvent: e }))));
    }
    function h(t, n) {
      g(t, e.AYMT_UPSELL_CARD, n);
    }
    function y() {
      h("maiba_memory_import_tips_requested");
    }
    function C() {
      h("maiba_memory_import_tip_received");
    }
    function b() {
      h("maiba_memory_import_no_tip_returned");
    }
    function v(e) {
      e === void 0 && (e = {});
      var t = {};
      (f(t, "error_message", e.errorMessage),
        h("maiba_memory_import_tip_load_failed", t));
    }
    function S() {
      h("maiba_memory_import_card_impression");
    }
    function R() {
      h("maiba_memory_import_card_cta_click");
    }
    function L() {
      h("maiba_memory_import_card_xout");
    }
    function E(t) {
      (u(e.PASTE_REMINDER),
        d(e.PASTE_REMINDER, t),
        g("maiba_memory_import_reminder_impression", e.PASTE_REMINDER));
    }
    function k(t) {
      (p(e.PASTE_REMINDER) == null &&
        (u(e.PASTE_REMINDER), d(e.PASTE_REMINDER, t)),
        g("maiba_memory_import_reminder_cta_click", e.PASTE_REMINDER));
    }
    function I() {
      g("maiba_memory_import_reminder_xout", e.PASTE_REMINDER);
    }
    function T(e) {
      g("maiba_memory_import_modal_opened", e);
    }
    function D(e) {
      g("maiba_memory_import_prompt_copied", e);
    }
    function x(e, t) {
      var n;
      ((n = s.get(e)) == null ? void 0 : n.lastEvent) !==
        "maiba_memory_import_context_pasted" &&
        g("maiba_memory_import_context_pasted", e, {
          pasted_char_count: String(t.pastedCharCount),
        });
    }
    function $(e, t) {
      g("maiba_memory_import_add_to_memory_click", e, {
        pasted_char_count: String(t.pastedCharCount),
      });
    }
    function P(e) {
      g("maiba_memory_import_modal_dismissed", e);
    }
    function N(e) {
      g("maiba_memory_import_modal_back_to_settings", e);
    }
    ((l.MAIBA_MEMORY_IMPORT_ENTRY_POINT = e),
      (l.startMAIBAMemoryImportJourney = u),
      (l.startMAIBAMemoryImportJourneyIfNeeded = c),
      (l.annotateMAIBAMemoryImportJourney = d),
      (l.endMAIBAMemoryImportJourney = m),
      (l.getMAIBAMemoryImportSessionID = p),
      (l.logMAIBAMemoryImportTipsRequested = y),
      (l.logMAIBAMemoryImportTipReceived = C),
      (l.logMAIBAMemoryImportNoTipReturned = b),
      (l.logMAIBAMemoryImportTipLoadFailed = v),
      (l.logMAIBAMemoryImportCardImpression = S),
      (l.logMAIBAMemoryImportCardCTAClick = R),
      (l.logMAIBAMemoryImportCardXout = L),
      (l.logMAIBAMemoryImportReminderImpression = E),
      (l.logMAIBAMemoryImportReminderCTAClick = k),
      (l.logMAIBAMemoryImportReminderXout = I),
      (l.logMAIBAMemoryImportModalOpened = T),
      (l.logMAIBAMemoryImportPromptCopied = D),
      (l.logMAIBAMemoryImportContextPasted = x),
      (l.logMAIBAMemoryImportAddToMemoryClick = $),
      (l.logMAIBAMemoryImportModalDismissed = P),
      (l.logMAIBAMemoryImportModalBackToSettings = N));
  },
  98,
);
