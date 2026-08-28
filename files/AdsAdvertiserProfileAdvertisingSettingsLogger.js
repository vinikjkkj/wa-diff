__d(
  "AdsAdvertiserProfileAdvertisingSettingsLogger",
  ["AdsInterfacesLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      r("AdsInterfacesLogger").logOnce({
        eventName: "ad_account_settings_page_impression",
        data: { to_tool: e, source: "advertising_settings" },
      });
    }
    function s(e) {
      var t = e.entryPoint,
        n = e.eventCategory,
        o = e.navEntryPoint;
      r("AdsInterfacesLogger").logOnce({
        eventName: "ad_account_settings_page_entry",
        eventCategory: n,
        data: {
          event_source: o,
          message: t,
          to_section: "account_settings",
          to_tool: "home_page",
          source: "advertising_settings_index_page",
        },
      });
    }
    function u() {
      r("AdsInterfacesLogger").logOnce({
        eventName: "asp_index_page_impression",
      });
    }
    function c(e) {
      var t = e.entryPoint,
        n = e.eventCategory,
        o = e.gridWidgetGroup,
        a = e.isEnabled,
        i = e.navEntryPoint,
        l = e.objective;
      r("AdsInterfacesLogger").logOnce({
        eventName: "ad_account_settings_page_entry",
        eventCategory: n,
        data: {
          event_source: i,
          message: t,
          to_section: "account_settings",
          to_tool: o,
          source: "advertising_settings_details_page",
          is_enabled: a,
          objective: l,
        },
      });
    }
    function d(e) {
      var t = e.entryPoint,
        n = e.eventCategory,
        o = e.gridWidgetGroup,
        a = e.navEntryPoint;
      r("AdsInterfacesLogger").logOnce({
        eventName: "ad_account_settings_page_entry",
        eventCategory: n,
        data: {
          event_source: a,
          message: t,
          to_section: "account_settings",
          to_tool: o,
          source: "advertising_settings_details_page_or_old_aas",
        },
      });
    }
    function m(e, t) {
      r("AdsInterfacesLogger").log({
        eventName: "ads_asp_grid_widget_impression",
        data: { ad_account_id: e, message: t },
      });
    }
    ((l.logAdvertisingSettingsPageImpression = e),
      (l.logAdvertisingSettingsHomePageEntry = s),
      (l.logAdvertisingSettingsIndexPageImpression = u),
      (l.logAdvertisingSettingsDetailedPageEntry = c),
      (l.logMaybeAdvertisingSettingsDetailedPageEntry = d),
      (l.logAdvertisingSettingsPageGridWidgetImpression = m));
  },
  98,
);
