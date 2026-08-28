__d(
  "AdsAIContextUtils",
  [
    "AdAccountId",
    "AdsAIContextLightweightUtils",
    "AdsAIContextPathUtils",
    "AdsInsightsTimeRangeUtil",
    "AdsManagerAppContext",
    "LocalDateInterval",
    "MAIBAInlinedContext",
    "MAIBAVisualContextAdObjectData",
    "MAIBAVisualContextSurfaceData",
    "isStringNullOrEmpty",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n,
        r,
        a,
        i = o("AdAccountId").getAdAccountId(e),
        l = o(
          "AdsAIContextLightweightUtils",
        ).getAdsAIClientContextWithoutAssetsInfo(i),
        u = s(),
        c = o("MAIBAVisualContextSurfaceData").getALSurfaceData(),
        d = o("MAIBAVisualContextAdObjectData").getAdObjectData(
          o("MAIBAVisualContextAdObjectData").LIMIT_OF_CAMPAIGNS,
          o("MAIBAVisualContextAdObjectData").LIMIT_OF_ADGROUPS_PER_CAMPAIGN,
        ),
        m = [].concat(
          (n = d == null ? void 0 : d.adgroup_info_from_selector) != null
            ? n
            : [],
          (r = d == null ? void 0 : d.campaign_group_info_from_selector) != null
            ? r
            : [],
          (a = d == null ? void 0 : d.campaign_info_from_selector) != null
            ? a
            : [],
        ),
        p = o("AdsAIContextLightweightUtils").getOrganizationId(),
        _ = o("MAIBAInlinedContext").getInlinedContext(
          babelHelpers.extends(
            {},
            i != null && p == null ? { ad_account_id: i } : null,
            {
              organization_id: p,
              date_range: u == null ? void 0 : u.metrics_date_range,
              metadata: { is_user_editing_draft: m.length > 0 },
              message_type: t,
            },
          ),
        );
      return babelHelpers.extends({}, l, {
        context: { ad_spec: m, visual_context_surface_data: JSON.stringify(c) },
        inlined_context: _,
      });
    }
    function s() {
      var e,
        t,
        n,
        a = o("AdsAIContextPathUtils").getURLParams(),
        i = a.pathname,
        l = a.searchParams,
        s = o("AdsAIContextLightweightUtils").determineView(i);
      switch (s) {
        case "ACCOUNT_OVERVIEW":
          return ((e = { preset: "last_7d" }), { metrics_date_range: e });
        case "TABLE":
          if (((e = u(l)), e == null)) {
            var c;
            if (
              ((t =
                r("AdsManagerAppContext") == null ||
                (c = r("AdsManagerAppContext").getValue("DATE_PRESET")) == null
                  ? void 0
                  : c.toString()),
              t === void 0)
            ) {
              var d, m;
              n = {
                start:
                  r("AdsManagerAppContext") == null ||
                  (d = r("AdsManagerAppContext").getValue(
                    "DATE_INTERVAL_START",
                  )) == null
                    ? void 0
                    : d.toString(),
                end:
                  r("AdsManagerAppContext") == null ||
                  (m = r("AdsManagerAppContext").getValue(
                    "DATE_INTERVAL_END",
                  )) == null
                    ? void 0
                    : m.toString(),
              };
            }
            e = { interval: n, preset: t };
          }
          return { metrics_date_range: e };
        case "ADS_REPORTING":
          return { metrics_date_range: u(l) };
      }
      return null;
    }
    function u(e) {
      var t = e.get("time_range");
      if (
        (t == null && (t = e.get("date")),
        t == null && (t = e.get("insights_date")),
        t != null)
      ) {
        var n = t.split(","),
          o = n[0],
          a = n[1];
        if (!r("isStringNullOrEmpty")(o)) {
          var i = o.split("_"),
            l = i[0],
            s = i[1];
          return { preset: a, interval: c(l, s) };
        }
        return { preset: a };
      }
      return null;
    }
    function c(e, t) {
      var n = o("AdsInsightsTimeRangeUtil").intervalToAPIParams(
          r("LocalDateInterval").fromStrings(e, t),
        ),
        a = n.since,
        i = n.until;
      return { start: a, end: i };
    }
    ((l.getAdsAIClientContext = e), (l.extractViewFilters = s));
  },
  98,
);
