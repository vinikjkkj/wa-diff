__d(
  "AdsAIEntrypointAvailabilityUtils",
  ["AdsAIContextPathUtils", "AdsAIUtils", "gkx", "justknobx", "qex"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      var e = o("AdsAIContextPathUtils").getURLParams();
      if (!e) return !1;
      var t = e.pathname,
        n = e.searchParams,
        r = t.replace(/\/$/, ""),
        a = n.has("act"),
        i =
          r === "/adsmanager/manage/campaigns" ||
          r === "/adsmanager/manage/ads" ||
          r === "/adsmanager/manage/adsets";
      return i && a;
    }
    function s(e) {
      return c(e) && r("gkx")("7228");
    }
    function u(e) {
      return (
        o("AdsAIUtils").getIsAdsAIBetaM2AvailableOnCurrentSurface(e) &&
        r("gkx")("18975")
      );
    }
    function c(e) {
      return o("AdsAIUtils").getIsAdsAIBetaM2AvailableOnCurrentSurface(e)
        ? r("gkx")("21900")
          ? !0
          : r("qex")._("1817") === !0
        : !1;
    }
    function d() {
      return r("gkx")("14389") ? !0 : r("gkx")("16964");
    }
    function m() {
      return r("gkx")("14389") ? !0 : r("gkx")("16968");
    }
    function p() {
      return r("gkx")("16644");
    }
    function _() {
      return o("AdsAIUtils").getIsAdsAIBetaM2AvailableOnCurrentSurface(
        "MONETIZATION_MANAGER",
      );
    }
    function f() {
      return _();
    }
    function g() {
      return o("AdsAIUtils").getIsAdsAIBetaM2AvailableOnCurrentSurface(
        "EVENTS_MANAGER",
      );
    }
    function h() {
      return r("gkx")("20") ? "footer" : "none";
    }
    function y(e) {
      return o("AdsAIUtils").getIsAdsAIBetaM2AvailableOnCurrentSurface(e)
        ? r("gkx")("20")
        : !1;
    }
    function C() {
      var e = o("AdsAIContextPathUtils").getURLParams();
      if (!e) return !1;
      var t = e.pathname,
        n = e.searchParams,
        r = t.replace(/\/$/, ""),
        a = n.has("act"),
        i =
          o("AdsAIContextPathUtils").ADS_MANAGER_BASE_PATHNAME +
          o("AdsAIContextPathUtils").ACCOUNT_OVERVIEW_PATHNAME;
      return r.startsWith(i) && a;
    }
    function b() {
      var e = o("AdsAIContextPathUtils").getURLParams();
      if (!e) return !1;
      var t = e.pathname,
        n = e.searchParams,
        r = t.replace(/\/$/, ""),
        a = n.has("act"),
        i =
          o("AdsAIContextPathUtils").ADS_MANAGER_BASE_PATHNAME +
          o("AdsAIContextPathUtils").AUDIENCES_PATHNAME;
      return r === i && a;
    }
    function v() {
      var e = o("AdsAIContextPathUtils").getURLParams();
      if (!e) return !1;
      var t = e.pathname,
        n = e.searchParams,
        r = t.replace(/\/$/, ""),
        a = n.has("act"),
        i =
          r === "/adsmanager/manage/campaigns/history" ||
          r === "/adsmanager/manage/adsets/history" ||
          r === "/adsmanager/manage/ads/history";
      return i && a;
    }
    function S() {
      var e = o("AdsAIContextPathUtils").getURLParams();
      if (!e) return !1;
      var t = e.pathname,
        n = e.searchParams,
        r = t.replace(/\/$/, ""),
        a = n.has("act"),
        i = r.startsWith(o("AdsAIContextPathUtils").ADS_MANAGER_BASE_PATHNAME),
        l =
          i &&
          (r.includes(o("AdsAIContextPathUtils").EDIT_TERMINAL_PATHNAME) ||
            r.endsWith("/app") ||
            r ===
              o("AdsAIContextPathUtils").ADS_MANAGER_BASE_PATHNAME +
                "/creation" ||
            r.startsWith(
              o("AdsAIContextPathUtils").ADS_MANAGER_BASE_PATHNAME +
                o("AdsAIContextPathUtils").CREATION_PACKAGE_PATHNAME,
            ));
      return l && a;
    }
    function R() {
      var e = o("AdsAIContextPathUtils").getURLParams();
      if (!e) return !1;
      var t = e.pathname,
        n = e.searchParams,
        r = t.replace(/\/$/, ""),
        a = n.has("act"),
        i = r.startsWith(o("AdsAIContextPathUtils").ADS_MANAGER_BASE_PATHNAME);
      return (
        i &&
        r.includes(o("AdsAIContextPathUtils").INSIGHTS_TERMINAL_PATHNAME) &&
        a
      );
    }
    function L() {
      var e = o("AdsAIContextPathUtils").getURLParams();
      if (!e) return !1;
      var t = e.pathname,
        n = e.searchParams,
        r = t.replace(/\/$/, ""),
        a = n.has("act"),
        i =
          o("AdsAIContextPathUtils").ADS_MANAGER_BASE_PATHNAME +
          o("AdsAIContextPathUtils").ADS_REPORTING_PATHNAME;
      return r.startsWith(i) && a;
    }
    function E() {
      var e = o("AdsAIContextPathUtils").getURLParams();
      if (!e) return !1;
      var t = e.pathname,
        n = e.searchParams,
        r = t.replace(/\/$/, ""),
        a = n.has("act"),
        i =
          o("AdsAIContextPathUtils").ADS_MANAGER_BASE_PATHNAME +
          o("AdsAIContextPathUtils").ADVERTISING_SETTINGS_PATHNAME,
        l =
          o("AdsAIContextPathUtils").ADS_MANAGER_BASE_PATHNAME +
          o("AdsAIContextPathUtils").AD_ACCOUNT_SETTINGS_PATHNAME;
      return (r.startsWith(i) || r.startsWith(l)) && a;
    }
    function k() {
      var e = o("AdsAIContextPathUtils").getURLParams();
      if (!e) return !1;
      var t = e.pathname,
        n = t.replace(/\/$/, "");
      return (
        n.startsWith(
          o("AdsAIContextPathUtils").BILLING_AND_PAYMENTS_BASE_PATHNAME,
        ) ||
        n.startsWith(
          o("AdsAIContextPathUtils").ADS_MANAGER_BASE_PATHNAME +
            o("AdsAIContextPathUtils").BILLING_AND_PAYMENTS_BASE_PATHNAME,
        )
      );
    }
    function I() {
      return (
        e() ||
        C() ||
        b() ||
        S() ||
        R() ||
        L() ||
        (r("justknobx")._("3100") && k()) ||
        E() ||
        v()
      );
    }
    function T() {
      return (
        I() &&
        h() === "footer" &&
        o("AdsAIUtils").getIsAdsAIBetaM2AvailableOnCurrentSurface(
          "getShouldShowFabInFooter",
          !1,
        )
      );
    }
    ((l.isTableView = e),
      (l.getIsMAIBAAnomalyEntrypointAvailable = s),
      (l.getIsMAIBAMPEntrypointAvailable = u),
      (l.getIsGoldenPathEntrypointAvailable = c),
      (l.getIsInSituExperiment = d),
      (l.getIsInSituExperimentWithoutExposure = m),
      (l.getIsGoldenPathJanMVPEntrypointAvailable = p),
      (l.getIsAdsAIBetaEntrypointAvailableForMonetizationManager = _),
      (l.getShouldShowMoMaFab = f),
      (l.getIsAdsAIBetaEntrypointAvailableForEventsManager = g),
      (l.getFabPosition = h),
      (l.getMaibaAMDFabEntrypointIfEligible = y),
      (l.isAccountOverviewPage = C),
      (l.isAudiencesPage = b),
      (l.isHistoryPage = v),
      (l.isCreationEditingPage = S),
      (l.isInsightsPage = R),
      (l.isAdsReportingPage = L),
      (l.isAdvertisingSettingsPage = E),
      (l.isBillingPage = k),
      (l.isFabFooterEligiblePage = I),
      (l.getShouldShowFabInFooter = T));
  },
  98,
);
