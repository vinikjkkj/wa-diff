__d(
  "maybeUpdateCampaignRegulationsSpec",
  [
    "AdsCampaignRecordAccessors",
    "AdsRegionalRegulatedCategory",
    "CAAPRegulationUtils",
    "adsFinservLocationUtils",
    "immutable",
    "isEmpty",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t, n) {
      var a,
        i,
        l = n.excludedLocations,
        s = n.includedLocations,
        u = t,
        c = o(
          "adsFinservLocationUtils",
        ).getRegulatedCategoriesByLocationsWithExclusions(s, l),
        d = new Set(
          (a =
            (i = u.regional_regulated_categories) == null
              ? void 0
              : i.toArray()) != null
            ? a
            : [],
        );
      if (
        (c.length ||
          (c.push(r("AdsRegionalRegulatedCategory").VOLUNTARY_VERIFICATION),
          d.add(r("AdsRegionalRegulatedCategory").VOLUNTARY_VERIFICATION)),
        c.includes(r("AdsRegionalRegulatedCategory").TAIWAN_UNIVERSAL) &&
          d.add(r("AdsRegionalRegulatedCategory").TAIWAN_UNIVERSAL),
        c.includes(r("AdsRegionalRegulatedCategory").SINGAPORE_UNIVERSAL) &&
          d.add(r("AdsRegionalRegulatedCategory").SINGAPORE_UNIVERSAL),
        c.includes(r("AdsRegionalRegulatedCategory").THAILAND_UNIVERSAL) &&
          d.add(r("AdsRegionalRegulatedCategory").THAILAND_UNIVERSAL),
        c.includes(r("AdsRegionalRegulatedCategory").MALAYSIA_UNIVERSAL) &&
          d.add(r("AdsRegionalRegulatedCategory").MALAYSIA_UNIVERSAL),
        c.includes(r("AdsRegionalRegulatedCategory").BRAZIL_REGULATION) &&
          d.add(r("AdsRegionalRegulatedCategory").BRAZIL_REGULATION),
        c.includes(r("AdsRegionalRegulatedCategory").AUSTRALIA_UNIVERSAL) &&
          d.add(r("AdsRegionalRegulatedCategory").AUSTRALIA_UNIVERSAL),
        c.includes(r("AdsRegionalRegulatedCategory").HONGKONG_FINSERV) &&
          d.add(r("AdsRegionalRegulatedCategory").HONGKONG_FINSERV),
        c.includes(r("AdsRegionalRegulatedCategory").THAILAND_FINSERV) &&
          d.add(r("AdsRegionalRegulatedCategory").THAILAND_FINSERV),
        c.includes(r("AdsRegionalRegulatedCategory").IRELAND_FINSERV) &&
          d.add(r("AdsRegionalRegulatedCategory").IRELAND_FINSERV),
        c.includes(r("AdsRegionalRegulatedCategory").ISRAEL_FINSERV) &&
          d.add(r("AdsRegionalRegulatedCategory").ISRAEL_FINSERV),
        c.includes(r("AdsRegionalRegulatedCategory").SPAIN_FINSERV) &&
          d.add(r("AdsRegionalRegulatedCategory").SPAIN_FINSERV),
        c.includes(r("AdsRegionalRegulatedCategory").GLOBAL_FINSERV) &&
          d.add(r("AdsRegionalRegulatedCategory").GLOBAL_FINSERV),
        (e || (e = r("isEmpty")))(
          o("CAAPRegulationUtils").getCAAPFinservRegulations(Array.from(d)),
        ) ||
          o("CAAPRegulationUtils")
            .getCAAPFinservRegulations(c)
            .forEach(function (e) {
              return d.add(e);
            }),
        d.size > 0)
      ) {
        var m = new Set(c);
        d.forEach(function (e) {
          m.has(e) || d.delete(e);
        });
      }
      if (d.size > 0) {
        var p = r("immutable").List(d);
        u = r("AdsCampaignRecordAccessors").regional_regulated_categories.set(
          p,
          u,
        );
      } else
        u = r("AdsCampaignRecordAccessors").regional_regulated_categories.set(
          r("immutable").List(),
          u,
        );
      if (u.regional_regulation_identities != null) {
        var _ = o(
            "adsFinservLocationUtils",
          ).getRegulationIdentitiesFieldsByRegulatedCategories(c),
          f = _.reduce(function (e, t) {
            var n,
              r =
                (n = u.regional_regulation_identities) == null
                  ? void 0
                  : n.get(t);
            return (r != null && (e[t] = r), e);
          }, {});
        return r(
          "AdsCampaignRecordAccessors",
        ).regional_regulation_identities.set(r("immutable").fromJS(f), u);
      }
      return u;
    }
    l.default = s;
  },
  98,
);
