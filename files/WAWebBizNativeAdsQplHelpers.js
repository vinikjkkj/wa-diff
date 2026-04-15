__d(
  "WAWebBizNativeAdsQplHelpers",
  ["$InternalEnum", "WAWebQplFlow", "qpl"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = n("$InternalEnum")({
        IDENTITY_RESOLUTION_START: "identity_resolution_start",
        IDENTITY_RESOLUTION_END: "identity_resolution_end",
        FETCH_TOKEN_START: "fetch_token_start",
        FETCH_TOKEN_END: "fetch_token_end",
        RESOLVE_IDENTITY_START: "resolve_identity_start",
        RESOLVE_IDENTITY_END: "resolve_identity_end",
        ONBOARD_WAA_START: "onboard_waa_start",
        ONBOARD_WAA_END: "onboard_waa_end",
        GET_RELAY_ENV_START: "get_relay_env_start",
        GET_RELAY_ENV_END: "get_relay_env_end",
        RESOLVE_ADS_PAGE_START: "resolve_ads_page_start",
        RESOLVE_ADS_PAGE_END: "resolve_ads_page_end",
        LOAD_ENTRYPOINT_START: "load_entrypoint_start",
        LOAD_ENTRYPOINT_END: "load_entrypoint_end",
        QUERY_LINKED_PAGES_START: "query_linked_pages_start",
        QUERY_LINKED_PAGES_END: "query_linked_pages_end",
        PRELOAD_AD_MGMT_QUERY_START: "preload_ad_mgmt_query_start",
        PRELOAD_AD_MGMT_QUERY_END: "preload_ad_mgmt_query_end",
        GRAPHQL_QUERY_START: "graphql_query_start",
        GRAPHQL_QUERY_END: "graphql_query_end",
        TABLE_RENDER: "table_render",
      }),
      s = null;
    function u(e, t) {
      var n = s;
      n != null && n.isActive() && n.endCancel();
      var a = r("qpl")._(1029378829, "3548"),
        i = o("WAWebQplFlow").startQplFlow(a, {
          timeoutInMs: 3e4,
          annotations: babelHelpers.extends({}, t, {
            bool: babelHelpers.extends({}, t == null ? void 0 : t.bool, {
              is_navigate_back: e,
            }),
          }),
        });
      return ((s = i), i);
    }
    function c(e, t) {
      var n;
      (n = s) == null || n.addPoint(e, t);
    }
    function d(e) {
      var t;
      (t = s) == null || t.addAnnotations({ string: { account_type: e } });
    }
    function m(e) {
      var t;
      (t = s) == null || t.addAnnotations({ int: { ad_count: e } });
    }
    function p(e) {
      var t;
      ((t = s) == null || t.endSuccess(e), (s = null));
    }
    function _(e, t) {
      var n;
      ((n = s) == null || n.endFail(e, t), (s = null));
    }
    function f() {
      var e;
      ((e = s) == null || e.endCancel(), (s = null));
    }
    ((l.AdsManagementQplPoint = e),
      (l.startAdsManagementQpl = u),
      (l.adsManagementQplAddPoint = c),
      (l.adsManagementQplAnnotateAccountType = d),
      (l.adsManagementQplAnnotateAdCount = m),
      (l.endAdsManagementQplSuccess = p),
      (l.endAdsManagementQplFail = _),
      (l.endAdsManagementQplCancel = f));
  },
  98,
);
