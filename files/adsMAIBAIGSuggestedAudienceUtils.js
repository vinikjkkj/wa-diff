__d(
  "adsMAIBAIGSuggestedAudienceUtils",
  ["FBLogger", "PolarisBoostAudienceUtils", "getErrorSafe"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      var r = f(e.targetSpec);
      return [
        {
          adObjectID: t,
          field: "saved_audience",
          kind: "value",
          level: "L2",
          originalValue: n,
          value: null,
        },
        {
          adObjectID: t,
          field: "targeting",
          kind: "value",
          level: "L2",
          originalValue: r,
          value: d(e, r),
        },
      ];
    }
    var s = Object.freeze({ sectionKind: "audience" });
    async function u(t, n, o, a) {
      var i = babelHelpers.extends({}, s, { adObjectID: o }),
        l = e(n, o, a),
        u = [],
        c = [];
      for (var d of l)
        d.kind === "value" &&
          (d.field === "targeting"
            ? u.push(babelHelpers.extends({}, d, { laneHint: "llm" }))
            : c.push(d));
      var m = await t.applySection(u, i, {
        requireWorkspaceVersionBumpForCommit: !0,
        settleWhenReplyHasNoWorkspaceUpdate: !0,
      });
      if (m.status !== "committed" || a == null) return m.status;
      try {
        var p = await t.applySection(c, i);
        if (p.status === "committed") return "committed";
        r("FBLogger")("maiba_ig_audience").warn(
          "Saved the suggested audience targeting but could not clear the saved audience: %s",
          p.status,
        );
      } catch (e) {
        r("FBLogger")("maiba_ig_audience")
          .catching(r("getErrorSafe")(e))
          .warn(
            "Saved the suggested audience targeting but could not clear the saved audience",
          );
      }
      return "saved_audience_not_cleared";
    }
    function c(e) {
      r("FBLogger")("maiba_ig_audience")
        .catching(r("getErrorSafe")(e))
        .warn("Failed to save suggested audience targeting to the draft");
    }
    function d(e, t) {
      var n,
        r,
        a = o("PolarisBoostAudienceUtils").getAdCustomTargettingOptions(e),
        i = a.age_max,
        l = a.age_min,
        s = a.age_range,
        u = e.advantageAudience.advantage_audience_status === "ON",
        c = g(h(t, "targeting_automation")),
        d = [];
      e.targetGenders === "MALE"
        ? (d = [1])
        : e.targetGenders === "FEMALE" && (d = [2]);
      var _ = babelHelpers.extends({}, t, {
        age_max: i,
        age_min: l,
        age_range: s,
        flexible_spec: m(t.flexible_spec, (n = e.interests) != null ? n : []),
        genders: d,
        geo_locations: p((r = e.geoLocations) != null ? r : []),
        targeting_automation: babelHelpers.extends({}, c != null ? c : {}, {
          advantage_audience: u ? 1 : 0,
        }),
        targeting_optimization:
          u || e.targetRelaxOption === "EXPANSION" ? "expansion_all" : "none",
      });
      return (delete _.interests, delete _.target_relax_option, _);
    }
    function m(e, t) {
      var n = [];
      if (Array.isArray(e))
        for (var r of e) {
          var o = g(r);
          o != null && n.push(babelHelpers.extends({}, o));
        }
      var a = t.map(function (e) {
          var t = e.id,
            n = e.name;
          return { id: t, name: n };
        }),
        i = !1,
        l = [];
      for (var s of n) {
        var u = babelHelpers.extends({}, s);
        (Object.hasOwn(u, "interests") &&
          (!i && a.length > 0
            ? ((u.interests = a), (i = !0))
            : delete u.interests),
          Object.keys(u).length > 0 && l.push(u));
      }
      return (!i && a.length > 0 && l.push({ interests: a }), l);
    }
    function p(e) {
      var t = [],
        n = [],
        r = [],
        o = [],
        a = [];
      for (var i of e)
        e: {
          if (i.location_type === "COUNTRY") {
            t.push(i.key);
            break e;
          }
          if (i.location_type === "CITY") {
            n.push(
              _({
                country: i.country_code,
                key: i.key,
                name: i.display_name,
                radius: i.radius,
                region_id: i.region_key,
              }),
            );
            break e;
          }
          if (i.location_type === "REGION") {
            r.push(
              _({ country: i.country_code, key: i.key, name: i.display_name }),
            );
            break e;
          }
          if (i.location_type === "ZIP") {
            o.push(
              _({
                country: i.country_code,
                key: i.key,
                name: i.display_name,
                primary_city_id: i.primary_city_key,
                region_id: i.region_key,
              }),
            );
            break e;
          }
          if (i.location_type === "CUSTOM_LOCATION") {
            a.push(
              _({
                address_string: i.display_name,
                country: i.country_code,
                key: i.key,
                latitude: i.latitude,
                longitude: i.longitude,
                name: i.display_name,
                primary_city_id: i.primary_city_key,
                radius: i.radius,
                region_id: i.region_key,
              }),
            );
            break e;
          }
          continue;
        }
      return {
        cities: n,
        countries: t,
        custom_locations: a,
        regions: r,
        zips: o,
      };
    }
    function _(e) {
      return Object.fromEntries(
        Object.entries(e).filter(function (e) {
          var t = e[1];
          return t != null;
        }),
      );
    }
    function f(e) {
      if (e == null || e === "") return {};
      try {
        var t,
          n = JSON.parse(e);
        return (t = g(n)) != null ? t : {};
      } catch (e) {
        return (
          r("FBLogger")("maiba_ig_audience")
            .catching(r("getErrorSafe")(e))
            .warn("Failed to parse the suggested audience targeting spec"),
          {}
        );
      }
    }
    function g(e) {
      return e != null && typeof e == "object" && !Array.isArray(e) ? e : null;
    }
    function h(e, t) {
      return e == null || typeof e != "object" || Array.isArray(e)
        ? null
        : e[t];
    }
    ((l.buildIGSuggestedAudienceDraftPatches = e),
      (l.saveIGSuggestedAudience = u),
      (l.logIGSuggestedAudienceSaveFailure = c));
  },
  98,
);
