__d(
  "adsIntelligentComponentContextBootloadedSelector",
  [
    "AdsApplicationIDs",
    "AdsIntelligentComponentContextTypes",
    "AdsSelectorBootloadedStore",
    "JSResource",
    "WebApiApplication",
    "adsCreateStoreSelector",
    "objectValues",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c =
        ((e = {}),
        (e[r("AdsApplicationIDs").ADS_POWER_EDITOR] = (s = r(
          "AdsSelectorBootloadedStore",
        )).create(
          (u = r("JSResource"))(
            "adsIntelligentComponentContextSelector",
          ).__setRef("adsIntelligentComponentContextBootloadedSelector"),
        )),
        (e[r("AdsApplicationIDs").ADS_CAMPAIGN_MANAGER] = s.create(
          u("adsCMIntelligentComponentContextSelector").__setRef(
            "adsIntelligentComponentContextBootloadedSelector",
          ),
        )),
        (e[r("AdsApplicationIDs").BUSINESS_ACCOUNTS] = s.create(
          u("adsEMIntelligentComponentContextSelector").__setRef(
            "adsIntelligentComponentContextBootloadedSelector",
          ),
        )),
        (e.default = s.create(
          u("adsDefaultIntelligentComponentContextSelector").__setRef(
            "adsIntelligentComponentContextBootloadedSelector",
          ),
        )),
        e),
      d = o(
        "AdsIntelligentComponentContextTypes",
      ).AdsIntelligentComponentContextRecordFactory();
    function m() {
      var e,
        t,
        n = (e = o("WebApiApplication").getClientID()) != null ? e : "default";
      return (t = c[n]) != null ? t : c.default;
    }
    var p = r("adsCreateStoreSelector")(
        r("objectValues")(c),
        function (t) {
          return m().onLoadedSelector(d);
        },
        { name: i.id + ".adsIntelligentComponentContextBootloadedSelector" },
      ),
      _ = p;
    l.default = _;
  },
  98,
);
