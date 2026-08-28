__d(
  "CAAPRegulationUtils",
  ["AdsBuyingTypes", "AdsRegionalRegulatedCategory"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = new Set([(e = r("AdsRegionalRegulatedCategory")).TAIWAN_UNIVERSAL]),
      u = [e.AUSTRALIA_FINSERV, e.TAIWAN_FINSERV].filter(Boolean),
      c = [e.SINGAPORE_UNIVERSAL, e.TAIWAN_UNIVERSAL].filter(Boolean),
      d = [].concat(u, c);
    function m(e) {
      return e.filter(function (e) {
        return u.includes(e);
      });
    }
    function p(e) {
      return e.filter(function (e) {
        return c.includes(e);
      });
    }
    function _(e, t) {
      var n = e.filter(function (e) {
          return e.isFinServ;
        }),
        r = e.filter(function (e) {
          return e.isUniversal;
        }),
        o = (
          t
            ? n.concat(
                r.filter(function (e) {
                  return !e.isFinServ;
                }),
              )
            : r
        ).toSorted(function (e, t) {
          return e.regulationType
            .toString()
            .localeCompare(t.regulationType.toString());
        });
      return o;
    }
    function f(e, t) {
      var n = e.filter(function (e) {
          return e.isFinServ;
        }),
        r = e.filter(function (e) {
          return e.isUniversal;
        }),
        o = (
          t
            ? n.concat(r).filter(function (e) {
                return s.has(e.regulationType) === !1;
              })
            : r
        ).toSorted(function (e, t) {
          return e.regulationType
            .toString()
            .localeCompare(t.regulationType.toString());
        });
      return o;
    }
    function g(e, t) {
      return t &&
        e.length === 1 &&
        e[0].campaignGroup.buying_type === r("AdsBuyingTypes").RESERVED
        ? [
            {
              ad_target_spec_json: JSON.stringify(t),
              campaign_id: e[0].campaign.id,
            },
          ]
        : e.map(function (e) {
            return {
              ad_target_spec_json: JSON.stringify(e.campaign.targeting),
              campaign_id: e.campaign.id,
            };
          });
    }
    function h(e, t) {
      return t &&
        e.length === 1 &&
        e[0].campaignGroup.buying_type === r("AdsBuyingTypes").RESERVED
        ? [
            {
              ad_target_spec_json: JSON.stringify({
                geo_locations: t.geo_locations,
                excluded_geo_locations: t.excluded_geo_locations,
              }),
              campaign_id: e[0].campaign.id,
            },
          ]
        : e.map(function (e) {
            return {
              ad_target_spec_json: JSON.stringify({
                geo_locations: e.campaign.targeting.geo_locations,
                excluded_geo_locations:
                  e.campaign.targeting.excluded_geo_locations,
              }),
              campaign_id: e.campaign.id,
            };
          });
    }
    ((l.UAVRegulationsWithFinserv = s),
      (l.CAAP_FINSERV_REGULATORY_REGIONS = u),
      (l.CAAP_UNIVERSAL_REGULATORY_REGIONS = c),
      (l.CAAP_ALL_REGULATORY_REGIONS = d),
      (l.getCAAPFinservRegulations = m),
      (l.getCAAPUniversalRegulations = p),
      (l.getCAAPDisplayedRegulations = _),
      (l.getDisplayedRegulations = f),
      (l.getCampaignIDTargetSpec = g),
      (l.getCampaignIDTargetGeoLocationsSpec = h));
  },
  98,
);
