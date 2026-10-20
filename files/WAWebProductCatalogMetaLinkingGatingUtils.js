__d(
  "WAWebProductCatalogMetaLinkingGatingUtils",
  ["WAWebABProps"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return s() ? u() : !1;
    }
    function s() {
      return o("WAWebABProps").getABPropConfigValue(
        "meta_catalog_linking_m2_enabled",
      );
    }
    function u() {
      var e = window.location.search,
        t = new URLSearchParams(e);
      return t.get("force_disable_catalog") === "1";
    }
    ((l.shouldShowMetaLinkedDisabledCatalogTooltipForSelf = e),
      (l.linkedCatalogDisabledTooltipEnabled = s),
      (l.shouldDisableCatalogDueToMetaLinkingForProfileOptions = u));
  },
  98,
);
