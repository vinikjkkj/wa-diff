__d(
  "AdsPERouteHelper",
  [
    "AdFLEXRouteConfig",
    "AdsConvergenceIsFocusModeV2Selectors",
    "AdsEditorSelectedIDsSelector",
    "AdsMgmtActivityEditorLifecycleGatingUtils",
    "AdsMgmtOpenTrayStore",
    "AdsMgmtStandaloneRouteUtils",
    "AdsObjectTypeUtils",
    "AdsPERouteName",
    "AdsPETablePageProvider",
    "AdsSelectionLevelSelectors",
    "adsMgmtTrayStateSelector",
    "adsPENavStateSelector",
    "createObjectFrom",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _,
      f,
      g,
      h,
      y,
      C,
      b,
      v,
      S,
      R,
      L,
      E,
      k,
      I,
      T,
      D,
      x,
      $,
      P,
      N,
      M,
      w,
      A,
      F,
      O,
      B = "*",
      W =
        ((f = {}),
        (f.AUDIENCES = {}),
        (f.PAGES = {}),
        (f.IMAGES = {}),
        (f.MANAGE_ADS =
          ((_ = {}),
          (_.ACCOUNT =
            ((e = {}),
            (e.ACTIVITY_HISTORY_DRAWER = !0),
            (e.EDITOR_DRAWER = !0),
            (e.INSIGHTS_DRAWER = !0),
            e)),
          (_.CREATIVES = ((s = {}), (s.ACTIVITY_HISTORY_DRAWER = !0), s)),
          (_.L3 =
            ((u = {}),
            (u.ACTIVITY_HISTORY_DRAWER = !0),
            (u.EDITOR_DRAWER = !0),
            (u.GOALS_DRAWER = !0),
            (u.INSIGHTS_DRAWER = !0),
            u)),
          (_.L2 =
            ((c = {}),
            (c.ACTIVITY_HISTORY_DRAWER = !0),
            (c.EDITOR_DRAWER = !0),
            (c.INSIGHTS_DRAWER = !0),
            c)),
          (_.L1 =
            ((d = {}),
            (d.ACTIVITY_HISTORY_DRAWER = !0),
            (d.EDITOR_DRAWER = !0),
            (d.INSIGHTS_DRAWER = !0),
            d)),
          (_.CAMPAIGN_OVERVIEW =
            ((m = {}),
            (m.EDITOR_DRAWER = !0),
            (m.INSIGHTS_DRAWER = !0),
            (m.ACTIVITY_HISTORY_DRAWER = !0),
            m)),
          (_.VIEW_REPORT = {}),
          (_.PACKAGE_AD_CREATION =
            ((p = {}),
            (p.EDITOR_DRAWER = !0),
            (p.ACTIVITY_HISTORY_DRAWER = !0),
            (p.INSIGHTS_DRAWER = !0),
            p)),
          (_.ADVERTISING_SETTINGS = {}),
          (_.AD_ACCOUNT_SETTINGS = {}),
          _)),
        (f.RULES = {}),
        (f.SCRIPTS = {}),
        (f.REPORTING = {}),
        (f.CREATIVE_REPORTING = {}),
        (f.AUTO2_CAMPAIGN_PLANNING = {}),
        (f.AUTO2_MIDFLIGHT = {}),
        (f.DYNAMIC_EXPERIENCE = {}),
        (f.PORTFOLIOS = {}),
        f),
      q =
        ((g = {}),
        (g.AUDIENCES = (O = r("AdsPERouteName")).AUDIENCES),
        (g.PAGES = O.PAGES),
        (g.IMAGES = O.IMAGES),
        (g.MANAGE_ADS = O.MANAGE_ADS),
        (g.MANAGE_MESSAGES = O.MANAGE_MESSAGES),
        (g.RULES = O.RULES),
        (g.REPORTING = O.REPORTING),
        (g.CREATION = O.CREATION),
        (g.CREATIVE_REPORTING = O.CREATIVE_REPORTING),
        (g.AUTO2_CAMPAIGN_PLANNING = O.AUTO2_CAMPAIGN_PLANNING),
        (g.AUTO2_MIDFLIGHT = O.AUTO2_MIDFLIGHT),
        (g.DYNAMIC_EXPERIENCE = O.DYNAMIC_EXPERIENCE),
        (g.CUSTOM_ANALYTICS_CONFIGURATIONS = O.CUSTOM_ANALYTICS_CONFIGURATIONS),
        (g.PORTFOLIOS = O.PORTFOLIOS),
        g),
      U =
        ((F = {}),
        (F.ACCOUNT =
          ((h = {}),
          (h.ACTIVITY_HISTORY_DRAWER = O.ACCOUNTS_HISTORY),
          (h[B] = O.ACCOUNTS),
          h)),
        (F.CREATIVES = ((y = {}), (y[B] = O.CREATIVES), y)),
        (F.PERSONALIZED_INSIGHTS =
          ((C = {}), (C[B] = O.REPORTING_PERSONALIZED_INSIGHTS), C)),
        (F.CREATIVE_INSIGHTS =
          ((b = {}), (b[B] = O.REPORTING_CREATIVE_INSIGHTS), b)),
        (F.ADVERTISER_TRENDS =
          ((v = {}), (v[B] = O.REPORTING_ADVERTISER_TRENDS), v)),
        (F.PRODUCTS = ((S = {}), (S[B] = O.PRODUCTS), S)),
        (F.PRODUCT_INSIGHTS = ((R = {}), (R[B] = O.PRODUCT_INSIGHTS), R)),
        (F.PRODUCT_BENCHMARKING =
          ((L = {}), (L[B] = O.PRODUCT_BENCHMARKING), L)),
        (F.PRODUCT_REPORTS = ((E = {}), (E[B] = O.PRODUCT_REPORTS), E)),
        (F.PRODUCT_SETS = ((k = {}), (k[B] = O.PRODUCT_SETS), k)),
        (F.MANAGE_REPORTS = ((I = {}), (I[B] = O.REPORTING_MANAGE), I)),
        (F.EXPORT_HISTORY = ((T = {}), (T[B] = O.REPORTING_EXPORT_HISTORY), T)),
        (F.PACKAGE_AD_CREATION =
          ((D = {}),
          (D.ACTIVITY_HISTORY_DRAWER = O.CREATION_PACKAGE_HISTORY),
          (D.INSIGHTS_DRAWER = O.CREATION_PACKAGE_INSIGHTS),
          (D[B] = O.CREATION_PACKAGE),
          D)),
        (F.VIEW_REPORT = ((x = {}), (x[B] = O.REPORTING_VIEW), x)),
        (F.BUSINESS_VIEW_REPORT =
          (($ = {}), ($[B] = O.BUSINESS_REPORTING_VIEW), $)),
        (F.L3 =
          ((P = {}),
          (P.ACTIVITY_HISTORY_DRAWER = O.CAMPAIGNS_HISTORY),
          (P.EDITOR_DRAWER = O.CAMPAIGNS_EDIT),
          (P.GOALS_DRAWER = O.CAMPAIGNS_GOALS),
          (P.INSIGHTS_DRAWER = O.CAMPAIGNS_INSIGHTS),
          (P[B] = O.CAMPAIGNS),
          P)),
        (F.L2 =
          ((N = {}),
          (N.ACTIVITY_HISTORY_DRAWER = O.ADSETS_HISTORY),
          (N.EDITOR_DRAWER = O.ADSETS_EDIT),
          (N.INSIGHTS_DRAWER = O.ADSETS_INSIGHTS),
          (N[B] = O.ADSETS),
          N)),
        (F.L1 =
          ((M = {}),
          (M.ACTIVITY_HISTORY_DRAWER = O.ADS_HISTORY),
          (M.EDITOR_DRAWER = O.ADS_EDIT),
          (M.INSIGHTS_DRAWER = O.ADS_INSIGHTS),
          (M[B] = O.ADS),
          M)),
        (F.ADVERTISING_SETTINGS =
          ((w = {}), (w[B] = O.ADVERTISING_SETTINGS), w)),
        (F.AD_ACCOUNT_SETTINGS = ((A = {}), (A[B] = O.AD_ACCOUNT_SETTINGS), A)),
        F),
      V = r("createObjectFrom")([
        "BUSINESS_VIEW_REPORT",
        "MANAGE_REPORTS",
        "VIEW_REPORT",
        "EXPORT_HISTORY",
        "PERSONALIZED_INSIGHTS",
        "PRODUCTS",
        "PRODUCT_INSIGHTS",
        "PRODUCT_BENCHMARKING",
        "PRODUCT_REPORTS",
        "PRODUCT_SETS",
        "CREATIVE_INSIGHTS",
        "ADVERTISER_TRENDS",
      ]),
      H = {
        getOpenTray: function () {
          return r("adsMgmtTrayStateSelector")();
        },
        shouldUseStandaloneRouteIfExists: function () {
          return o(
            "AdsMgmtActivityEditorLifecycleGatingUtils",
          ).isActivityBasedEditorEnabledWithoutExposure()
            ? !1
            : o(
                "AdsConvergenceIsFocusModeV2Selectors",
              ).shouldExpandEditorSelector();
        },
        getDefaultOpenTray: function () {
          return o(
            "AdsMgmtOpenTrayStore",
          ).AdsMgmtOpenTrayStore.getDefaultOpenTray();
        },
        getTreeNavState: function () {
          return o(
            "AdsMgmtOpenTrayStore",
          ).AdsMgmtOpenTrayStore.getTreeNavState();
        },
        getCurrentNavState: function () {
          return r("adsPENavStateSelector")();
        },
        getCurrentNavSection: function () {
          var e = H.getCurrentNavState();
          return e.section;
        },
        getCurrentNavTool: function () {
          var e = H.getCurrentNavState();
          return e.tool;
        },
        getCurrentPage: function () {
          var e = H.getCurrentNavSection();
          return e === "L1"
            ? r("AdsPETablePageProvider")().ad_page_id
            : e === "L2"
              ? r("AdsPETablePageProvider")().adset_page_id
              : r("AdsPETablePageProvider")().campaign_page_id;
        },
        isValidNavState: function (t, n) {
          if (!t.tool && !t.section && !n) return !1;
          var e = W[t.tool];
          if (!e) return !1;
          if (
            (!t.section && !n) ||
            (t.tool === "REPORTING" && t.section && V[t.section])
          )
            return !0;
          if (!t.section) return !1;
          var r = e[t.section];
          return r ? (n ? !!r[n] : !0) : !1;
        },
        getRouteFromNavState: function (t, n) {
          var e,
            o =
              r("AdFLEXRouteConfig") == null ||
              (e = r("AdFLEXRouteConfig").getForTool(t.tool)) == null ||
              e.getRoute == null
                ? void 0
                : e.getRoute(t.section, n);
          if (o != null) return o;
          if (!H.isValidNavState(t, n)) return null;
          var a = t.section ? H.getRouteFromSection(t.section, n) : null;
          return a || H.getRouteFromTool(t.tool);
        },
        getRouteFromTool: function (t) {
          return q[t];
        },
        getRouteFromSection: function (t, n) {
          var e = U[t];
          if (!e) return null;
          var r = n && e[n],
            a = r;
          if (H.shouldUseStandaloneRouteIfExists()) {
            var i;
            a =
              (i = o("AdsMgmtStandaloneRouteUtils").toggleStandaloneRoute(r)) !=
              null
                ? i
                : r;
          }
          return a != null ? a : e[B];
        },
        getSectionSelectedIDs: function (t) {
          var e = o("AdsSelectionLevelSelectors").adsSelectionLevelSelector(t),
            n = o("AdsObjectTypeUtils").getAdLevelFromObjectLevel(e);
          return n != null
            ? o("AdsEditorSelectedIDsSelector").AdsEditorSelectedIDsSelector(n)
            : [];
        },
        hasSectionSelection: function (t) {
          var e = H.getSectionSelectedIDs(t);
          return e.length > 0;
        },
      },
      G = H;
    l.default = G;
  },
  98,
);
