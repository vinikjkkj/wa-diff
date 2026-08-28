__d(
  "AdsConversionGoalVOStrings",
  ["fbt", "GeoLink.react", "react"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react"));
    function c() {
      return s._(
        /*BTDS*/ "The selected product set is not eligible for this performance goal. Your catalog and product set need to have at least one connected data source, such as Meta Pixel or Conversions API, which sends values for Purchase events. {line break}{=m2}",
        [
          s._param("line break", u.jsx("div", { children: u.jsx("br", {}) })),
          s._implicitParam(
            "=m2",
            u.jsx(r("GeoLink.react"), {
              href: "https://www.facebook.com/business/help/571188993373447?id=561906377587030",
              children: s._(
                /*BTDS*/ "About eligibility requirements for maximize value of conversions",
              ),
            }),
          ),
        ],
      );
    }
    c.displayName = c.name + " [from " + i.id + "]";
    function d() {
      return s._(
        /*BTDS*/ "The maximize value of conversions performance goal is currently unavailable for iOS 14 ad accounts.",
      );
    }
    ((d.displayName = d.name + " [from " + i.id + "]"),
      (l.getIneligibleCatalogSaleValueOptimizationHoverCardNew = c),
      (l.getIOS14IneligibleValueOptimizationHoverCard = d));
  },
  226,
);
