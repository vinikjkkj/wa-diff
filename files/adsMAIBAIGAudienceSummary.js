__d(
  "adsMAIBAIGAudienceSummary",
  [
    "MAIBAAudienceLocationUtils",
    "RelayHooks",
    "adsMAIBAIGAudienceSummary_campaign.graphql",
    "adsMAIBAIGAudienceSummary_draftAudience.graphql",
    "adsMAIBAIGAudienceSummary_savedAudience.graphql",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c =
        e !== void 0
          ? e
          : (e = n("adsMAIBAIGAudienceSummary_campaign.graphql")),
      d =
        s !== void 0
          ? s
          : (s = n("adsMAIBAIGAudienceSummary_draftAudience.graphql")),
      m =
        u !== void 0
          ? u
          : (u = n("adsMAIBAIGAudienceSummary_savedAudience.graphql")),
      p = Object.freeze([
        "behaviors",
        "demographics",
        "education_majors",
        "education_schools",
        "family_statuses",
        "income",
        "industries",
        "interested_in",
        "interests",
        "life_events",
        "relationship_statuses",
        "user_adclusters",
        "work_employers",
        "work_positions",
      ]);
    function _(e, t) {
      var n,
        r,
        a,
        i,
        l,
        s,
        u = e == null ? null : o("RelayHooks").readInlineData(c, e),
        d =
          t &&
          (u == null || (n = u.saved_audience) == null ? void 0 : n.id) != null,
        m = d
          ? S(
              u == null || (r = u.saved_audience) == null
                ? void 0
                : r.target_spec_string_without_placements,
            )
          : null,
        p = S(u == null ? void 0 : u.targeting_spec_json),
        _ = d ? m : p,
        f = L(_, "targeting_automation"),
        g = I(R(_, "genders")),
        h = w(_),
        y = g;
      if (y.length === 0 && !d) {
        var C;
        y = (C = u == null ? void 0 : u.targeting_genders) != null ? C : [];
      }
      var b = h;
      if (b.length === 0 && !d) {
        var k;
        b =
          (k = u == null ? void 0 : u.targeting_flexible_spec_names) != null
            ? k
            : [];
      }
      var T = A(_);
      if (T == null && !d) {
        var D;
        T =
          (D = u == null ? void 0 : u.targeting_geo_locations_summary) != null
            ? D
            : null;
      }
      var x =
          E(f, "advantage_audience") === 1 ||
          (!d &&
            E(f, "advantage_audience") == null &&
            (u == null ? void 0 : u.targeting_advantage_audience) === 1),
        $ = x ? v(_) : null,
        P =
          (a = E(_, "age_min")) != null
            ? a
            : d
              ? null
              : u == null
                ? void 0
                : u.targeting_age_min;
      return {
        advantageAudience: x,
        ageMax:
          (i = (l = $ == null ? void 0 : $[1]) != null ? l : E(_, "age_max")) !=
          null
            ? i
            : d
              ? null
              : u == null
                ? void 0
                : u.targeting_age_max,
        ageMin: (s = $ == null ? void 0 : $[0]) != null ? s : P,
        genders: y,
        interests: b,
        isAvailable: u != null,
        location: T,
        minAgeConstraint: x ? P : null,
      };
    }
    function f(e, t) {
      return e == null || t == null ? null : String(e) + "\u2013" + String(t);
    }
    function g(e) {
      var t = e.filter(function (e) {
        return e !== "";
      });
      return t.length > 0 ? t.join(", ") : null;
    }
    function h(e, t) {
      var n,
        r = e == null ? null : o("RelayHooks").readInlineData(d, e);
      return C(
        _(r, !1),
        null,
        t,
        r == null ? void 0 : r.targeting_spec_json,
        (n = r == null ? void 0 : r.targeting_countries) != null ? n : [],
      );
    }
    function y(e) {
      var t = o("RelayHooks").readInlineData(m, e);
      return C(
        null,
        t.id,
        t.name == null || t.name === "" ? t.id : t.name,
        t.target_spec_string_without_placements,
      );
    }
    function C(e, t, n, r, o) {
      var a, i, l;
      o === void 0 && (o = []);
      var s = S(r),
        u = e != null ? e : b(s),
        c = $(s, o);
      return {
        advantageAudience: {
          advantage_audience_status: u.advantageAudience ? "ON" : "OFF",
          min_age_constraint: (a = u.minAgeConstraint) != null ? a : 18,
        },
        audienceComplianceData: null,
        audienceID: t,
        displayName: n,
        geoLocations: c.length > 0 ? c : null,
        interests: D(s),
        maxAge: (i = u.ageMax) != null ? i : 65,
        minAge: (l = u.ageMin) != null ? l : 18,
        targetGenders: M(u.genders),
        targetingSpecCountryCodes: [],
        targetRelaxOption:
          k(s, "targeting_optimization") === "expansion_all"
            ? "EXPANSION"
            : "NONE",
        targetSpec: r,
      };
    }
    function b(e) {
      var t,
        n,
        r = E(L(e, "targeting_automation"), "advantage_audience") === 1,
        o = r ? v(e) : null,
        a = E(e, "age_min");
      return {
        advantageAudience: r,
        ageMax: (t = o == null ? void 0 : o[1]) != null ? t : E(e, "age_max"),
        ageMin: (n = o == null ? void 0 : o[0]) != null ? n : a,
        genders: I(R(e, "genders")),
        interests: w(e),
        isAvailable: !0,
        location: A(e),
        minAgeConstraint: r ? a : null,
      };
    }
    function v(e) {
      var t = R(e, "age_range");
      if (!Array.isArray(t) || t.length !== 2) return null;
      var n = t[0],
        r = t[1];
      return typeof n == "number" && typeof r == "number" ? [n, r] : null;
    }
    function S(e) {
      if (e == null || e === "") return null;
      try {
        var t = JSON.parse(e);
        return t != null && typeof t == "object" && !Array.isArray(t)
          ? t
          : null;
      } catch (e) {
        return null;
      }
    }
    function R(e, t) {
      return e == null || typeof e != "object" || Array.isArray(e)
        ? null
        : e[t];
    }
    function L(e, t) {
      var n = R(e, t);
      return n != null && typeof n == "object" && !Array.isArray(n) ? n : null;
    }
    function E(e, t) {
      var n = R(e, t);
      if (typeof n == "number") return n;
      if (typeof n == "string" && n !== "") {
        var r = parseInt(n, 10);
        return Number.isNaN(r) ? null : r;
      }
      return null;
    }
    function k(e, t) {
      var n = R(e, t);
      return typeof n == "string" && n !== "" ? n : null;
    }
    function I(e) {
      if (!Array.isArray(e)) return [];
      var t = [];
      for (var n of e)
        typeof n == "string" && n !== ""
          ? t.push(n)
          : typeof n == "number" && t.push(String(n));
      return t;
    }
    function T(e) {
      if (!Array.isArray(e)) return [];
      var t = [];
      for (var n of e) {
        if (typeof n == "string" && n !== "") {
          t.push(n);
          continue;
        }
        var r = k(n, "name");
        r != null && t.push(r);
      }
      return t;
    }
    function D(e) {
      if (e == null) return null;
      var t = [],
        n = R(e, "flexible_spec");
      if (Array.isArray(n)) for (var r of n) x(t, R(r, "interests"));
      return (x(t, R(e, "interests")), t.length > 0 ? t : null);
    }
    function x(e, t) {
      if (Array.isArray(t)) {
        var n = function () {
          var t = N(r, "id"),
            n = k(r, "name");
          t != null &&
            n != null &&
            !e.some(function (e) {
              return e.id === t;
            }) &&
            e.push({ id: t, name: n });
        };
        for (var r of t) n();
      }
    }
    function $(e, t) {
      var n = L(e, "geo_locations"),
        r = I(R(n, "countries")),
        a = [];
      for (var i of r.length > 0 ? r : t)
        a.push({
          country_code: i,
          display_name: o("MAIBAAudienceLocationUtils").getCountryDisplayName(
            i,
          ),
          key: i,
          latitude: null,
          location_type: "COUNTRY",
          longitude: null,
          primary_city_key: null,
          radius: null,
          region_key: null,
        });
      return (
        P(a, n, "cities", "CITY"),
        P(a, n, "regions", "REGION"),
        P(a, n, "zips", "ZIP"),
        P(a, n, "custom_locations", "CUSTOM_LOCATION"),
        a
      );
    }
    function P(e, t, n, r) {
      var o = R(t, n);
      if (Array.isArray(o))
        for (var a of o) {
          var i,
            l,
            s,
            u,
            c = N(a, "key");
          c != null &&
            e.push({
              country_code:
                (i = k(a, "country_code")) != null ? i : k(a, "country"),
              display_name: (l = k(a, "name")) != null ? l : c,
              key: c,
              latitude: E(a, "latitude"),
              location_type: r,
              longitude: E(a, "longitude"),
              primary_city_key:
                (s = N(a, "primary_city_key")) != null
                  ? s
                  : N(a, "primary_city_id"),
              radius: E(a, "radius"),
              region_key:
                (u = N(a, "region_key")) != null ? u : N(a, "region_id"),
            });
        }
    }
    function N(e, t) {
      var n = R(e, t);
      return typeof n == "string" ? n : typeof n == "number" ? String(n) : null;
    }
    function M(e) {
      return e.length !== 1
        ? "ALL"
        : (function (e) {
            return e === 1 ? "MALE" : e === 2 ? "FEMALE" : "ALL";
          })(parseInt(e[0], 10));
    }
    function w(e) {
      if (e == null) return [];
      var t = [],
        n = R(e, "flexible_spec");
      if (Array.isArray(n))
        for (var r of n) for (var o of p) t.push.apply(t, T(R(r, o)));
      for (var a of p) t.push.apply(t, T(R(e, a)));
      return Array.from(new Set(t));
    }
    function A(e) {
      var t = L(e, "geo_locations");
      if (t == null) return null;
      var n = [];
      for (var r of ["cities", "regions", "zips", "custom_locations"])
        n.push.apply(n, T(R(t, r)));
      return (
        n.push.apply(
          n,
          I(R(t, "countries")).map(
            o("MAIBAAudienceLocationUtils").getCountryDisplayName,
          ),
        ),
        g(Array.from(new Set(n)))
      );
    }
    ((l.adsMAIBAIGAudienceSummary_campaign = c),
      (l.adsMAIBAIGAudienceSummary_draftAudience = d),
      (l.adsMAIBAIGAudienceSummary_savedAudience = m),
      (l.buildIGAudienceSummary = _),
      (l.formatIGAudienceAgeRange = f),
      (l.formatIGAudienceNames = g),
      (l.buildIGBoostDraftAudience = h),
      (l.buildIGBoostSavedAudience = y));
  },
  98,
);
