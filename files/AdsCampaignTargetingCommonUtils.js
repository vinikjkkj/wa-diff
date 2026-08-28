__d(
  "AdsCampaignTargetingCommonUtils",
  [
    "AdsCountryGroupConfig.experimental",
    "AdsCountryRegionsConfig.experimental",
    "isEmpty",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e, t, n) {
      var r, o, a, i, l, s, u, c, d, m;
      return (r =
        (e == null || (o = e.countries) == null
          ? void 0
          : o.some(function (e) {
              return t.has(e);
            })) ||
        (e == null || (a = e.cities) == null
          ? void 0
          : a.some(function (e) {
              var n = e.country;
              return n != null && t.has(n);
            })) ||
        (e == null || (i = e.subcities) == null
          ? void 0
          : i.some(function (e) {
              var n = e.country;
              return n != null && t.has(n);
            })) ||
        (e == null || (l = e.regions) == null
          ? void 0
          : l.some(function (e) {
              var n = e.country;
              return n != null && t.has(n);
            })) ||
        (e == null || (s = e.zips) == null
          ? void 0
          : s.some(function (e) {
              var n = e.country;
              return n != null && t.has(n);
            })) ||
        (e == null || (u = e.places) == null
          ? void 0
          : u.some(function (e) {
              var n = e.country;
              return n != null && t.has(n);
            })) ||
        (e == null || (c = e.neighborhoods) == null
          ? void 0
          : c.some(function (e) {
              var n = e.country;
              return n != null && t.has(n);
            })) ||
        (e == null || (d = e.custom_locations) == null
          ? void 0
          : d.some(function (e) {
              var n = e.country;
              return n != null && t.has(n);
            })) ||
        (e == null || (m = e.country_groups) == null
          ? void 0
          : m.some(function (e) {
              return e != null && n.has(e);
            }))) != null
        ? r
        : !1;
    }
    function u(e, t) {
      if (e == null) return !1;
      var n = e.cities,
        r = e.countries,
        o = e.custom_locations,
        a = e.places,
        i = e.regions,
        l = e.subcities,
        s = e.zips,
        u = [r, n, l, i, s, a, o].every(function (e) {
          return e == null;
        });
      if (u || e.country_groups != null) return !1;
      var c =
          r == null ||
          r.every(function (e) {
            return t.has(e);
          }),
        d = [n, l, i, s, a, o].every(function (e) {
          return (
            e == null ||
            e.every(function (e) {
              var n = e.country;
              return n != null && t.has(n);
            })
          );
        });
      return c && d;
    }
    function c(e, t, n) {
      var r,
        o,
        a,
        i,
        l,
        s,
        u,
        c,
        d,
        p,
        _ = m(t),
        f = n.difference(_);
      if (f.size === 0) return !1;
      var g = m(e),
        h =
          (r =
            g.intersection(f).size > 0 ||
            [
              (o = e == null ? void 0 : e.cities) != null ? o : [],
              (a = e == null ? void 0 : e.subcities) != null ? a : [],
              (i = e == null ? void 0 : e.regions) != null ? i : [],
              (l = e == null ? void 0 : e.zips) != null ? l : [],
              (s = e == null ? void 0 : e.places) != null ? s : [],
              (u = e == null ? void 0 : e.custom_locations) != null ? u : [],
              (c = e == null ? void 0 : e.neighborhoods) != null ? c : [],
              (d = e == null ? void 0 : e.subneighborhoods) != null ? d : [],
              (p = e == null ? void 0 : e.geo_markets) != null ? p : [],
            ].some(function (e) {
              return e.some(function (e) {
                var t = e.country;
                return t != null && f.has(t);
              });
            })) != null
            ? r
            : !1;
      return h;
    }
    function d(t, n, o) {
      var a, i, l, s, u, c, d, p, _;
      if (t == null) return !1;
      var f = m(t),
        g = m(n),
        h = f.difference(g),
        y = h.difference(o).size === 0;
      if (!y) return !1;
      var C = [
        (a = t == null ? void 0 : t.cities) != null ? a : [],
        (i = t == null ? void 0 : t.subcities) != null ? i : [],
        (l = t == null ? void 0 : t.regions) != null ? l : [],
        (s = t == null ? void 0 : t.zips) != null ? s : [],
        (u = t == null ? void 0 : t.places) != null ? u : [],
        (c = t == null ? void 0 : t.custom_locations) != null ? c : [],
        (d = t == null ? void 0 : t.neighborhoods) != null ? d : [],
        (p = t == null ? void 0 : t.subneighborhoods) != null ? p : [],
        (_ = t == null ? void 0 : t.geo_markets) != null ? _ : [],
      ];
      return f.size === 0 &&
        C.every(function (t) {
          return (e || (e = r("isEmpty")))(t);
        })
        ? !1
        : C.every(function (e) {
            return e.every(function (e) {
              var t = e.country;
              return t == null || o.has(t) || g.has(t);
            });
          });
    }
    function m(e) {
      var t,
        n,
        r = (t = e == null ? void 0 : e.countries) != null ? t : [],
        o = (n = e == null ? void 0 : e.country_groups) != null ? n : [];
      return (
        o.forEach(function (e) {
          var t = p(e);
          r = r.concat(t);
        }),
        new Set(r)
      );
    }
    function p(e) {
      var t, n;
      return (t =
        (n = r("AdsCountryGroupConfig.experimental").countryGroupsMetadata.find(
          function (t) {
            return t.id === e;
          },
        )) == null
          ? void 0
          : n.countries) != null
        ? t
        : [];
    }
    function _(e, t) {
      var n,
        r,
        o,
        a,
        i,
        l,
        s,
        u,
        c = g(e),
        d = c.intersection(t).size > 0;
      if (d) return !0;
      var m = [
        (n = e == null ? void 0 : e.cities) != null ? n : [],
        (r = e == null ? void 0 : e.subcities) != null ? r : [],
        (o = e == null ? void 0 : e.zips) != null ? o : [],
        (a = e == null ? void 0 : e.places) != null ? a : [],
        (i = e == null ? void 0 : e.custom_locations) != null ? i : [],
        (l = e == null ? void 0 : e.neighborhoods) != null ? l : [],
        (s = e == null ? void 0 : e.subneighborhoods) != null ? s : [],
      ];
      return (u = m.some(function (e) {
        return e.some(function (e) {
          var n = e.region_id;
          return n != null && t.has(n.toString());
        });
      })) != null
        ? u
        : !1;
    }
    function f(e, t, n) {
      var r,
        o,
        a,
        i,
        l,
        s,
        u,
        c,
        d = g(e, n),
        m = d.isSubsetOf(t),
        p = [
          (r = e == null ? void 0 : e.cities) != null ? r : [],
          (o = e == null ? void 0 : e.subcities) != null ? o : [],
          (a = e == null ? void 0 : e.zips) != null ? a : [],
          (i = e == null ? void 0 : e.places) != null ? i : [],
          (l = e == null ? void 0 : e.custom_locations) != null ? l : [],
          (s = e == null ? void 0 : e.neighborhoods) != null ? s : [],
          (u = e == null ? void 0 : e.subneighborhoods) != null ? u : [],
        ],
        _ =
          (c = p.every(function (e) {
            return e
              .filter(function (e) {
                var t = e.country;
                return t != null && (!n || n.has(t));
              })
              .every(function (e) {
                var n = e.region_id;
                return n == null || t.has(n.toString());
              });
          })) != null
            ? c
            : !1;
      return m && _;
    }
    function g(e, t) {
      var n,
        r,
        o,
        a = (n = e == null ? void 0 : e.regions) != null ? n : [],
        i = a
          .map(function (e) {
            return e.key;
          })
          .filter(Boolean),
        l =
          (r =
            e == null || (o = e.countries) == null
              ? void 0
              : o.filter(function (e) {
                  return !t || t.has(e);
                })) != null
            ? r
            : [];
      return (
        l.forEach(function (e) {
          var t = h(e);
          i = i.concat(t);
        }),
        new Set(i)
      );
    }
    function h(e) {
      var t, n;
      return (t =
        (n = r(
          "AdsCountryRegionsConfig.experimental",
        ).countryRegionsMetadata.find(function (t) {
          return t.country === e;
        })) == null
          ? void 0
          : n.regionIDs) != null
        ? t
        : [];
    }
    ((l.doesCampaignTargetingContainRequiredLocations = s),
      (l.doesCampaignTargetingOnlyContainRequiredCountry = u),
      (l.isAnyRequiredCountryTargeted = c),
      (l.doesTargetOnlyCountriesInRequiredCountries = d),
      (l.isAnyRequiredRegionTargeted = _),
      (l.doesTargetOnlyInRequiredRegions = f));
  },
  98,
);
