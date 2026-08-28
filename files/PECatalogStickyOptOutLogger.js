__d(
  "PECatalogStickyOptOutLogger",
  [
    "CatalogBusinessEventsLoggerHelper",
    "PECatalogStickyOptOutReader",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return r("justknobx")._("5095");
    }
    function s(t, n, a, i, l, s, u) {
      if (!(t == null || !e())) {
        var c = a.objective,
          d = a.pageId,
          m = a.urlType,
          p = o("PECatalogStickyOptOutReader").getStickyOptOutGranular(
            t,
            n,
            c,
            d,
            m,
            !0,
            l,
            s,
          ),
          _ = o("PECatalogStickyOptOutReader").getStickyOptOut(t, n, l, s);
        (r("CatalogBusinessEventsLoggerHelper")
          .getAdsCreationLogger()
          .setEvent("pe_catalog_sticky_opt_out")
          .setAdAccountID(t)
          .setActionData({
            adgroup_id: u == null ? void 0 : u.adgroupId,
            catalog_id: d,
            objective: c,
            operation: "read",
            read_arm: i ? "granular" : "control",
            surface: "connected_sources",
            url_type: m,
            user_settings_id: u == null ? void 0 : u.userSettingsId,
            value: String(p.shouldStickyOptOut),
          })
          .log(),
          p.shouldStickyOptOut !== _.shouldStickyOptOut &&
            r("CatalogBusinessEventsLoggerHelper")
              .getAdsCreationLogger()
              .setEvent("pe_granular_sticky_opt_out_differ")
              .setAdAccountID(t)
              .setActionData({
                adgroup_id: u == null ? void 0 : u.adgroupId,
                catalog_id: d,
                objective: c,
                surface: "connected_sources",
                url_type: m,
                user_settings_id: u == null ? void 0 : u.userSettingsId,
                value_after: String(p.shouldStickyOptOut),
                value_before: String(_.shouldStickyOptOut),
              })
              .log());
      }
    }
    function u(t, n, o, a) {
      if (!(t == null || !e())) {
        var i = n.objective,
          l = n.pageId,
          s = n.urlType;
        r("CatalogBusinessEventsLoggerHelper")
          .getAdsCreationLogger()
          .setEvent("pe_catalog_sticky_opt_out")
          .setAdAccountID(t)
          .setActionData({
            adgroup_id: a == null ? void 0 : a.adgroupId,
            catalog_id: l,
            objective: i,
            operation: "write",
            surface: "connected_sources",
            url_type: s,
            user_settings_id: a == null ? void 0 : a.userSettingsId,
            value: String(o),
          })
          .log();
      }
    }
    ((l.logGranularStickyOptOutReadShadow = s),
      (l.logGranularStickyOptOutWriteShadow = u));
  },
  98,
);
