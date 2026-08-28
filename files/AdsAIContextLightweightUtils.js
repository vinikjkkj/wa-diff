__d(
  "AdsAIContextLightweightUtils",
  [
    "ALToolTab",
    "AdsAIContextPathUtils",
    "BusinessConsoleDynamicFields",
    "CurrentUser",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n = e.replace(/\/$/, ""),
        r = t.replace(/\/$/, "");
      return n === r || n.startsWith(r + "/");
    }
    function s(t) {
      return e(
        t,
        o("AdsAIContextPathUtils").ADS_MANAGER_BASE_PATHNAME +
          o("AdsAIContextPathUtils").L3_PATHNAME +
          o("AdsAIContextPathUtils").STANDALONE_EDIT_TERMINAL_PATHNAME,
      ) ||
        e(
          t,
          o("AdsAIContextPathUtils").ADS_MANAGER_BASE_PATHNAME +
            o("AdsAIContextPathUtils").L2_PATHNAME +
            o("AdsAIContextPathUtils").STANDALONE_EDIT_TERMINAL_PATHNAME,
        ) ||
        e(
          t,
          o("AdsAIContextPathUtils").ADS_MANAGER_BASE_PATHNAME +
            o("AdsAIContextPathUtils").L1_PATHNAME +
            o("AdsAIContextPathUtils").STANDALONE_EDIT_TERMINAL_PATHNAME,
        )
        ? "STANDALONE_EDIT"
        : e(
              t,
              o("AdsAIContextPathUtils").ADS_MANAGER_BASE_PATHNAME +
                o("AdsAIContextPathUtils").L3_PATHNAME +
                o("AdsAIContextPathUtils").HISTORY_TERMINAL_PATHNAME,
            ) ||
            e(
              t,
              o("AdsAIContextPathUtils").ADS_MANAGER_BASE_PATHNAME +
                o("AdsAIContextPathUtils").L2_PATHNAME +
                o("AdsAIContextPathUtils").HISTORY_TERMINAL_PATHNAME,
            ) ||
            e(
              t,
              o("AdsAIContextPathUtils").ADS_MANAGER_BASE_PATHNAME +
                o("AdsAIContextPathUtils").L1_PATHNAME +
                o("AdsAIContextPathUtils").HISTORY_TERMINAL_PATHNAME,
            ) ||
            e(
              t,
              o("AdsAIContextPathUtils").ADS_MANAGER_BASE_PATHNAME +
                o("AdsAIContextPathUtils").CREATION_PACKAGE_PATHNAME +
                o("AdsAIContextPathUtils").HISTORY_TERMINAL_PATHNAME,
            )
          ? "HISTORY"
          : e(
                t,
                o("AdsAIContextPathUtils").ADS_MANAGER_BASE_PATHNAME +
                  o("AdsAIContextPathUtils").L3_PATHNAME +
                  o("AdsAIContextPathUtils").INSIGHTS_TERMINAL_PATHNAME,
              ) ||
              e(
                t,
                o("AdsAIContextPathUtils").ADS_MANAGER_BASE_PATHNAME +
                  o("AdsAIContextPathUtils").L2_PATHNAME +
                  o("AdsAIContextPathUtils").INSIGHTS_TERMINAL_PATHNAME,
              ) ||
              e(
                t,
                o("AdsAIContextPathUtils").ADS_MANAGER_BASE_PATHNAME +
                  o("AdsAIContextPathUtils").L1_PATHNAME +
                  o("AdsAIContextPathUtils").INSIGHTS_TERMINAL_PATHNAME,
              )
            ? "INSIGHTS"
            : e(
                  t,
                  o("AdsAIContextPathUtils").ADS_MANAGER_BASE_PATHNAME +
                    o("AdsAIContextPathUtils").L3_PATHNAME +
                    o("AdsAIContextPathUtils").EDIT_TERMINAL_PATHNAME,
                ) ||
                e(
                  t,
                  o("AdsAIContextPathUtils").ADS_MANAGER_BASE_PATHNAME +
                    o("AdsAIContextPathUtils").L2_PATHNAME +
                    o("AdsAIContextPathUtils").EDIT_TERMINAL_PATHNAME,
                ) ||
                e(
                  t,
                  o("AdsAIContextPathUtils").ADS_MANAGER_BASE_PATHNAME +
                    o("AdsAIContextPathUtils").L1_PATHNAME +
                    o("AdsAIContextPathUtils").EDIT_TERMINAL_PATHNAME,
                ) ||
                e(
                  t,
                  o("AdsAIContextPathUtils").ADS_MANAGER_BASE_PATHNAME +
                    o("AdsAIContextPathUtils").CREATION_PACKAGE_PATHNAME,
                )
              ? "EDIT"
              : e(
                    t,
                    o("AdsAIContextPathUtils").ADS_MANAGER_BASE_PATHNAME +
                      o("AdsAIContextPathUtils").L3_PATHNAME,
                  ) ||
                  e(
                    t,
                    o("AdsAIContextPathUtils").ADS_MANAGER_BASE_PATHNAME +
                      o("AdsAIContextPathUtils").L2_PATHNAME,
                  ) ||
                  e(
                    t,
                    o("AdsAIContextPathUtils").ADS_MANAGER_BASE_PATHNAME +
                      o("AdsAIContextPathUtils").L1_PATHNAME,
                  )
                ? "TABLE"
                : t.startsWith(
                      o("AdsAIContextPathUtils").ADS_MANAGER_BASE_PATHNAME +
                        o("AdsAIContextPathUtils").ACCOUNT_OVERVIEW_PATHNAME,
                    )
                  ? "ACCOUNT_OVERVIEW"
                  : t.startsWith(
                        o("AdsAIContextPathUtils").ADS_MANAGER_BASE_PATHNAME +
                          o("AdsAIContextPathUtils").ADS_REPORTING_PATHNAME,
                      )
                    ? "ADS_REPORTING"
                    : t.startsWith(
                          o("AdsAIContextPathUtils").ADS_MANAGER_BASE_PATHNAME +
                            o("AdsAIContextPathUtils").AUDIENCES_PATHNAME,
                        )
                      ? "AUDIENCES"
                      : t.startsWith(
                            o("AdsAIContextPathUtils")
                              .ADS_MANAGER_BASE_PATHNAME +
                              o("AdsAIContextPathUtils")
                                .ADVERTISING_SETTINGS_PATHNAME,
                          )
                        ? "ADVERTISING_SETTINGS"
                        : t.startsWith(
                              o("AdsAIContextPathUtils")
                                .ADS_MANAGER_BASE_PATHNAME +
                                o("AdsAIContextPathUtils")
                                  .AD_ACCOUNT_SETTINGS_PATHNAME,
                            )
                          ? "AD_ACCOUNT_SETTINGS"
                          : t.startsWith(
                                o("AdsAIContextPathUtils")
                                  .META_BUSINESS_SUITE_BASE_PATHNAME,
                              )
                            ? "TABLE"
                            : t.startsWith(
                                  o("AdsAIContextPathUtils")
                                    .BILLING_AND_PAYMENTS_BASE_PATHNAME,
                                )
                              ? "BILLING_AND_PAYMENTS"
                              : "UNKNOWN_VIEW";
    }
    function u(e) {
      var t = o("AdsAIContextPathUtils").getURLParams(),
        n = t.pathname;
      return m(n, e);
    }
    function c(e) {
      return e.startsWith(
        o("AdsAIContextPathUtils").BUSINESS_SUPPORT_HOME_BASE_PATHNAME,
      )
        ? r("CurrentUser").getID()
        : null;
    }
    function d() {
      var e = o("ALToolTab").getCurrentToolTab(),
        t = e.tool;
      if (t === "Organization Manager") {
        var n = o("BusinessConsoleDynamicFields").enterprise_id;
        if (n != null && n !== "") return n;
      }
      return null;
    }
    function m(e, t) {
      var n = c(e),
        r = t != null ? { ad_account_id: t } : {};
      return babelHelpers.extends({}, r, { fb_account_id: n });
    }
    ((l.determineView = s),
      (l.getAdsAIClientContextWithoutAssetsInfo = u),
      (l.getOrganizationId = d));
  },
  98,
);
