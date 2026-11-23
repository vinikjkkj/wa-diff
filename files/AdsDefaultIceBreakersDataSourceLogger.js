__d(
  "AdsDefaultIceBreakersDataSourceLogger",
  [
    "AdsLoadStateUtils_LEGACY",
    "AdsPageStore",
    "AndromedaValidatorConfigAndromedaHighTraffic",
    "AndromedaValidatorConfigAndromedaRelay",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "AdsDefaultIceBreakers-",
      s = new Set();
    function u(t, n, o, a) {
      try {
        var i = r(
          o === "store_legacy"
            ? "AndromedaValidatorConfigAndromedaHighTraffic"
            : "AndromedaValidatorConfigAndromedaRelay",
        );
        if (i.shouldSkipEventShadowValidation()) return;
        var l = a == null ? void 0 : a.matched,
          u = a == null ? void 0 : a.reason,
          c = a == null ? void 0 : a.storePageLoaded,
          d = [
            t,
            n,
            o,
            u != null ? u : "",
            c == null ? "" : String(c),
            l == null ? "" : String(l),
          ].join("|");
        if (s.has(d)) return;
        s.add(d);
        var m = {};
        (l != null && (m.matched = l), c != null && (m.store_page_loaded = c));
        var p = { caller: n, source: o };
        (u != null && (p.reason = u),
          i.log(
            e + t,
            { matched: !0 },
            { matched: l != null ? l : !0 },
            { extraAnnotations: { bool: m, string: p } },
          ));
      } catch (e) {}
    }
    function c(e) {
      if (e == null || e === "") return null;
      var t = r("AdsPageStore").getCached(String(e));
      return t == null || !o("AdsLoadStateUtils_LEGACY").isLoaded(t)
        ? null
        : {
            id: String(e),
            inbox_faq_automation: t.inbox_faq_automation,
            messenger_ads_default_icebreakers:
              t.messenger_ads_default_icebreakers,
          };
    }
    function d() {
      s.clear();
    }
    ((l.logAdsDefaultIceBreakersDataSource = u),
      (l.getCachedStorePageData = c),
      (l.resetForTesting = d));
  },
  98,
);
