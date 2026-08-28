__d(
  "AdsEventsManagerURIHelper",
  ["URI", "XAdsEventsManagerHomeControllerRouteBuilder"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["adAccountID", "businessID", "dataSourceID", "view"],
      s;
    function u(e) {
      var t = e.adAccountID,
        n = e.businessID,
        o = e.dialog,
        a = e.navSource;
      return t != null
        ? new (s || (s = r("URI")))(
            r("XAdsEventsManagerHomeControllerRouteBuilder").buildURL({
              act: t,
              business_id: n != null ? n : "",
              dialog: o == null ? void 0 : o.toString(),
              nav_source: a != null ? a : "",
            }),
          )
        : new (s || (s = r("URI")))(
            r("XAdsEventsManagerHomeControllerRouteBuilder").buildURL({
              business_id: n != null ? n : "",
              dialog: o == null ? void 0 : o.toString(),
              nav_source: a != null ? a : "",
            }),
          );
    }
    function c(e, t, n, o) {
      var a = o ? "MAI" : "AEO";
      return new (s || (s = r("URI")))(
        r("XAdsEventsManagerHomeControllerRouteBuilder").buildExtraURL(
          "/events_manager2/conversion_config/{data_source_id}/{optimization}/",
          {
            act: e != null ? e : "",
            business_id: t != null ? t : "",
            data_source_id: n,
            optimization: a,
          },
        ),
      );
    }
    function d(t, n) {
      var o = null;
      switch (t) {
        case "PIXEL":
          o = "pixel";
          break;
        case "APP_EVENT":
          o = "app";
          break;
        case "DATA_SET":
          o = "offline_data_set";
          break;
        case "PAGE":
        case "ALL":
        case "CRM":
        case "BUSINESS_MESSAGING":
          o = "dataset";
          break;
      }
      var a = n.adAccountID,
        i = n.businessID,
        l = n.dataSourceID,
        u = n.view,
        c = babelHelpers.objectWithoutPropertiesLoose(n, e);
      return a == null
        ? new (s || (s = r("URI")))(
            r("XAdsEventsManagerHomeControllerRouteBuilder").buildExtraURL(
              "/events_manager2/list/{data_source_type}/{data_source_id}/{?view}/",
              babelHelpers.extends({}, c, {
                business_id: i != null ? i : "",
                data_source_id: l,
                data_source_type: o != null ? o : "dataset",
                view: u != null ? u : "overview",
              }),
            ),
          )
        : new (s || (s = r("URI")))(
            r("XAdsEventsManagerHomeControllerRouteBuilder").buildExtraURL(
              "/events_manager2/list/{data_source_type}/{data_source_id}/{?view}/",
              babelHelpers.extends({}, c, {
                act: a != null ? a : "",
                business_id: i != null ? i : "",
                data_source_id: l,
                data_source_type: o != null ? o : "dataset",
                view: u != null ? u : "overview",
              }),
            ),
          );
    }
    function m(e, t) {
      return new (s || (s = r("URI")))(
        r("XAdsEventsManagerHomeControllerRouteBuilder").buildExtraURL(
          "/events_manager2/lead_gen_funnel2/{data_source_id}/",
          { business_id: t != null ? t : "", data_source_id: e },
        ),
      );
    }
    function p(e) {
      return new (s || (s = r("URI")))(
        r("XAdsEventsManagerHomeControllerRouteBuilder").buildExtraURL(
          "/events_manager2/zapier_onboarding/",
          e,
        ),
      );
    }
    function _(e) {
      return new (s || (s = r("URI")))(
        r("XAdsEventsManagerHomeControllerRouteBuilder").buildExtraURL(
          "/events_manager2/make_onboarding/",
          e,
        ),
      );
    }
    function f(e) {
      return new (s || (s = r("URI")))(
        r("XAdsEventsManagerHomeControllerRouteBuilder").buildExtraURL(
          "/events_manager2/datahash_onboarding/",
          e,
        ),
      );
    }
    function g(e) {
      var t = e.adAccountID,
        n = e.businessID,
        r = e.dialog,
        o = e.guidanceFlow,
        a = e.navSource,
        i = e.partner,
        l = e.websiteUrl,
        s = u({
          adAccountID: t,
          businessID: n,
          dialog: r,
          navSource: a,
        }).setPath("/events_manager2/overview/");
      return (
        o != null && s.addQueryData("guidance_flow", o),
        i != null && s.addQueryData("partner", i),
        l != null && s.addQueryData("website_url", l),
        s
      );
    }
    function h(e, t, n) {
      return r("XAdsEventsManagerHomeControllerRouteBuilder").buildExtraURL(
        "/events_manager2/crm_implementation_guide/{data_source_id}/",
        {
          act: t != null ? t : "",
          business_id: n != null ? n : "",
          data_source_id: e,
        },
      );
    }
    ((l.getBaseURI = u),
      (l.getAppConversionConfigToolURI = c),
      (l.getDataSourceURI = d),
      (l.getLeadGenFunnel2URI = m),
      (l.getZapierOnboardingURI = p),
      (l.getMakeOnboardingURI = _),
      (l.getDatahashOnboardingURI = f),
      (l.getOverviewBaseURI = g),
      (l.getCRMIntegrationInstructionUrl = h));
  },
  98,
);
