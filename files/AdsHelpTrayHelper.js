__d(
  "AdsHelpTrayHelper",
  [
    "AdsAccountStore",
    "AdsHelpTrayToggleModalAction",
    "AdsHelpTrayUtils",
    "isStringNullOrEmpty",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      r("AdsHelpTrayToggleModalAction").dispatch(
        { data: { openModal: null } },
        { line: "30", module: "AdsHelpTrayHelper.js", moduleID: i.id },
      );
    }
    function s(e, t) {
      r("AdsHelpTrayToggleModalAction").dispatch(
        { data: { openModal: e, source: t } },
        { line: "46", module: "AdsHelpTrayHelper.js", moduleID: i.id },
      );
    }
    function u(e) {
      switch (e) {
        case "BIZ_SUITE_HOME_INSIGHTS":
        case "LIVE_MARKETING_CALL":
        case "SCHEDULE_MARKETING_CALL":
        case "CHAT":
        case "CHAT_INBOX":
        case "GUIDED_FIX_POLICY_SNIPPET":
        case "GUIDED_FIX_OVERVIEW":
        case "GUIDED_FIX_RESTRICTION_INFO":
        case "ADS_REJECTION_PREVENTION_GUIDANCE":
        case "XFAC_ALR_CHAT":
          return !1;
        default:
          return !0;
      }
    }
    function c(e) {
      switch (e) {
        case "SUPPORT_CASE":
        case "SUPPORT_CASE_HISTORY":
        case "SUPPORT_FORM":
        case "EMBEDDED_CONTACT_FORM":
        case "REQUEST_A_CALL_SUBMITTED_LANDING_PAGE":
        case "META_PRO_REQUEST_CHAT":
        case "META_PRO_REQUEST_CHAT_CONFIRMATION":
        case "META_PRO_REQUEST_CHAT_ERROR":
          return !1;
        default:
          return !0;
      }
    }
    function d(e, t, n) {
      return {
        adAccountID:
          t != null ? t : r("AdsAccountStore").getSelectedAccountID(),
        pathname: o("AdsHelpTrayUtils").getReleventArticlesProcessedURL(),
        query: e,
        searchIssueID: r("isStringNullOrEmpty")(n) ? void 0 : n,
      };
    }
    ((l.hideHelpTrayModal = e),
      (l.openHelpTrayModal = s),
      (l.shouldShowHeader = u),
      (l.showSearchBarHelper = c),
      (l.getSearchResultsSectionParams = d));
  },
  98,
);
