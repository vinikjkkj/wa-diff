__d(
  "adsMAIBAIGAudienceUtils",
  [
    "MAIBAIGAudienceStrings",
    "MAIBAIGStrings",
    "PolarisBoostAudienceRadioButtonFormatUtils",
    "PolarisBoostAudienceUtils",
    "adsMAIBABoostGoalConfig",
    "adsMAIBAIGAudienceSummary",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return e.flatMap(function (e) {
        if (e == null) return [];
        var t = o("adsMAIBAIGAudienceSummary").buildIGBoostSavedAudience(e),
          n = t.audienceID;
        return n == null || n === "" ? [] : [t];
      });
    }
    function s(e, t) {
      var n = t == null ? void 0 : t.audienceID;
      return t != null &&
        n != null &&
        n !== "" &&
        !e.some(function (e) {
          return e.audienceID === n;
        })
        ? [].concat(e, [t])
        : e;
    }
    function u(e, t) {
      var n,
        r =
          (n = o("adsMAIBABoostGoalConfig").resolveBoostGoalConfig(e, t)) ==
          null
            ? void 0
            : n.goalId;
      return r === "ENGAGEMENT" || r === "VIDEO_VIEWS"
        ? "POST_ENGAGEMENT"
        : r === "INSTAGRAM_PROFILE_VISITS" ||
            r === "PAGE_VISITS" ||
            r === "PROFILE_VISITS"
          ? "PROFILE_VISITS"
          : r === "MESSAGES"
            ? t === "INSTAGRAM_DIRECT"
              ? "DIRECT_MESSAGE"
              : t === "MESSENGER"
                ? "MESSENGER_MESSAGE"
                : t === "WHATSAPP"
                  ? "WHATSAPP_MESSAGE"
                  : "MULTI_DESTINATION_MESSAGE"
            : r === "WEBSITE_VISITORS"
              ? "WEBSITE_CLICK"
              : r === void 0 || r === "CALLS" || r === "REACH"
                ? null
                : (function () {
                    throw Error(
                      "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                        r,
                    );
                  })();
    }
    function c(e, t, n, r) {
      var a,
        i,
        l,
        s,
        u,
        c,
        d,
        m,
        p,
        _ =
          (a = e.geoLocations) == null
            ? void 0
            : a.find(function (e) {
                return e.location_type === "CUSTOM_LOCATION";
              });
      return {
        input: {
          advantage_audience: babelHelpers.extends({}, e.advantageAudience),
          age_max: e.maxAge,
          age_min: e.minAge,
          city_keys:
            (i = e.geoLocations) == null
              ? void 0
              : i
                  .filter(function (e) {
                    return e.location_type === "CITY";
                  })
                  .map(function (e) {
                    return e.key;
                  }),
          countries:
            (l = e.geoLocations) == null
              ? void 0
              : l
                  .filter(function (e) {
                    return e.location_type === "COUNTRY";
                  })
                  .map(function (e) {
                    return e.key;
                  }),
          destination: n,
          flow_id: t,
          genders: o("PolarisBoostAudienceUtils").getGenders(e),
          interest_ids:
            (s = e.interests) == null
              ? void 0
              : s.map(function (e) {
                  return e.id;
                }),
          latitude: (u = _ == null ? void 0 : _.latitude) != null ? u : void 0,
          longitude:
            (c = _ == null ? void 0 : _.longitude) != null ? c : void 0,
          media_id: r,
          radius: (d = _ == null ? void 0 : _.radius) != null ? d : void 0,
          region_keys:
            (m = e.geoLocations) == null
              ? void 0
              : m
                  .filter(function (e) {
                    return e.location_type === "REGION";
                  })
                  .map(function (e) {
                    return e.key;
                  }),
          zip_keys:
            (p = e.geoLocations) == null
              ? void 0
              : p
                  .filter(function (e) {
                    return e.location_type === "ZIP";
                  })
                  .map(function (e) {
                    return e.key;
                  }),
        },
      };
    }
    function d(e, t, n) {
      return o("PolarisBoostAudienceRadioButtonFormatUtils")
        .getSelectedDescription(f(e, n), t)
        .filter(function (e) {
          return e != null && e !== "\n";
        });
    }
    function m(e, t) {
      return e == null || t == null
        ? e === t
        : e.length === t.length &&
            e.every(function (e, n) {
              var r, o, a;
              return (
                e.key === ((r = t[n]) == null ? void 0 : r.key) &&
                e.location_type ===
                  ((o = t[n]) == null ? void 0 : o.location_type) &&
                e.display_name ===
                  ((a = t[n]) == null ? void 0 : a.display_name)
              );
            });
    }
    function p(e, t) {
      if (!e.isAvailable)
        return [o("MAIBAIGStrings").SUMMARY_UNAVAILABLE_LABEL];
      var n = [],
        r = e.location,
        a = r != null && r !== "";
      (r != null &&
        r !== "" &&
        n.push(o("MAIBAIGAudienceStrings").getAudienceLocationSummary(r)),
        n.push(
          o("MAIBAIGAudienceStrings").getAudienceGenderSummary(_(e.genders)),
        ));
      var i = o("adsMAIBAIGAudienceSummary").formatIGAudienceAgeRange(
        e.ageMin,
        e.ageMax,
      );
      i != null && n.push(o("MAIBAIGAudienceStrings").getAudienceAgeSummary(i));
      var l = o("adsMAIBAIGAudienceSummary").formatIGAudienceNames(e.interests);
      return (
        l != null &&
          n.push(o("MAIBAIGAudienceStrings").getAudienceInterestsSummary(l)),
        n.push(
          o("MAIBAIGAudienceStrings").getAdvantageAudienceSummary(
            e.advantageAudience
              ? o("MAIBAIGAudienceStrings").ADVANTAGE_AUDIENCE_ON_LABEL
              : o("MAIBAIGAudienceStrings").ADVANTAGE_AUDIENCE_OFF_LABEL,
          ),
        ),
        !a && i == null && l == null && t != null && t !== "" && n.unshift(t),
        n
      );
    }
    function _(e) {
      return e.length !== 1
        ? o("MAIBAIGAudienceStrings").ALL_GENDERS_LABEL
        : (function (e) {
            return e === 1
              ? o("MAIBAIGAudienceStrings").MEN_GENDER_LABEL
              : e === 2
                ? o("MAIBAIGAudienceStrings").WOMEN_GENDER_LABEL
                : o("MAIBAIGAudienceStrings").ALL_GENDERS_LABEL;
          })(parseInt(e[0], 10));
    }
    function f(e, t) {
      var n,
        r,
        o,
        a,
        i,
        l =
          t != null && t !== ""
            ? [t]
            : (n =
                  (r = e.geoLocations) == null
                    ? void 0
                    : r.map(function (e) {
                        return e.display_name;
                      })) != null
              ? n
              : [];
      return {
        advantage_audience: e.advantageAudience,
        audience_code: (o = e.audienceCode) != null ? o : null,
        audience_id: e.audienceID,
        display_name: e.displayName,
        genders: e.targetGenders === "ALL" ? [] : [e.targetGenders],
        geo_locations: l,
        interests:
          (a =
            (i = e.interests) == null
              ? void 0
              : i.map(function (e) {
                  return e.name;
                })) != null
            ? a
            : [],
        max_age: e.maxAge,
        min_age: e.minAge,
        target_relax_option: e.targetRelaxOption,
        targeting_spec_country_codes: null,
      };
    }
    ((l.buildIGBoostSavedAudiences = e),
      (l.includeSelectedIGBoostAudience = s),
      (l.getIGBoostDestination = u),
      (l.getIGPotentialReachQueryVariables = c),
      (l.getIGAudienceDescriptions = d),
      (l.haveSameIGAudienceLocations = m),
      (l.buildIGAudienceSummaryLines = p));
  },
  98,
);
