__d(
  "AdsEventsManagerNavigationHelperV2",
  [
    "AdsEventsManagerLeftNavigationItems",
    "AdsEventsManagerURIHelper",
    "XAdsEventsManagerHomeController",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, r, o, a, i, l) {
      var s = {};
      ((s.ads_objective = o),
        i != null && (s.my_opt = i),
        a != null && (s.event_name = a),
        (s.eligibility_check_result = l.toString()));
      var u = c(
        "APP_EVENT",
        {
          adAccountID: t,
          businessID: n,
          dataSourceID: e,
          dialog: null,
          navSource: r,
        },
        "SETTINGS",
      );
      return (u.addQueryData(s), u);
    }
    function s(e, t, n, r) {
      var o = {};
      o.universal_link_uri = r;
      var a = c(
        "APP_EVENT",
        {
          adAccountID: e,
          businessID: t,
          dataSourceID: n,
          dialog: "universal_link_verification",
          navSource: null,
        },
        "SETTINGS",
      );
      return (a.addQueryData(o), a);
    }
    function u(e) {
      var t = e.adAccountID,
        n = e.businessID;
      return (t != null ? t : n) == null
        ? r("XAdsEventsManagerHomeController").getURIBuilder().getURI()
        : o("AdsEventsManagerURIHelper")
            .getBaseURI({ adAccountID: t, businessID: n, dialog: null })
            .setPath("/events_manager2/custom_conversions/");
    }
    function c(e, t, n) {
      n === void 0 && (n = "OVERVIEW");
      var a = t.adAccountID,
        i = t.businessID,
        l = t.dataSourceID,
        s = t.dialog,
        u = t.navSource;
      if ((a != null ? a : i) == null)
        return r("XAdsEventsManagerHomeController").getURIBuilder().getURI();
      var c = m(e),
        d = "";
      switch (n) {
        case "OVERVIEW":
          d = "overview";
          break;
        case "HISTORY":
          d = "history";
          break;
        case "DIAGNOSTICS":
          d = "diagnostics";
          break;
        case "TEST_EVENTS":
          d = "test_events";
          break;
        case "SETTINGS":
          d = "settings";
          break;
        case "SDK_UPGRADE":
          d = "sdk_upgrade";
          break;
        default:
          throw r("err")("Unsupported tab type");
      }
      return o("AdsEventsManagerURIHelper")
        .getBaseURI({ adAccountID: a, businessID: i, dialog: s, navSource: u })
        .setPath("/events_manager2/list/" + c + "/" + l + "/" + d);
    }
    function d(e) {
      var t = e.adAccountID,
        n = e.businessID,
        r = e.dataSourceID;
      return r == null || (t == null && n == null)
        ? null
        : c(
            "ALL",
            {
              adAccountID: t,
              businessID: n,
              dataSourceID: r,
              dialog: "edit_pixel_events",
              navSource: null,
            },
            "SETTINGS",
          ).toString();
    }
    function m(e) {
      var t = r("err")("Unsupported data source type: " + (e != null ? e : ""));
      switch (e) {
        case "APP_EVENT":
          return "app";
        case "DATA_SET":
          return "offline_data_set";
        case "PIXEL":
          return "pixel";
        case "CRM":
          return "pixel";
        case "PAGE":
        case "ALL":
          return "dataset";
        default:
          throw t;
      }
    }
    function p(e) {
      switch (e) {
        case r("AdsEventsManagerLeftNavigationItems").DATA_SOURCES:
          return "data_sources";
        case r("AdsEventsManagerLeftNavigationItems").CUSTOM_CONVERSIONS:
          return "custom_conversions";
        case r("AdsEventsManagerLeftNavigationItems").OVERVIEW_PAGE:
          return "overview_page";
        default:
          return null;
      }
    }
    ((l.getAppAEMV2EligibilityCheckerURI = e),
      (l.getUniversalLinkVerificationURI = s),
      (l.getCustomConversionsURI = u),
      (l.getDataSourceURI = c),
      (l.getEditPixelEventsSettingsHref = d),
      (l.resolveDataSourceTypeForURI = m),
      (l.resolveDiagnosticsChannelFromLeftNavItem = p));
  },
  98,
);
