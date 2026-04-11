__d(
  "LWICometSAFRUtils",
  [
    "CometRelay",
    "LWICometRadiusUtils",
    "LWICometSAFRUtils_ageRestrictions.graphql",
    "LWICometSAFRUtils_genderRestrictions.graphql",
    "LWICometSAFRUtils_radiusRestrictions.graphql",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = new Set(["carousel", "carousel_image", "carousel_video"]);
    function d(t, r) {
      var a,
        i,
        l = o("CometRelay").readInlineData(
          e !== void 0
            ? e
            : (e = n("LWICometSAFRUtils_ageRestrictions.graphql")),
          r,
        ),
        s = l.age;
      if (s == null) return t;
      var u = s.max_age_range,
        c = s.min_age_range;
      return {
        isMaxAgeFixed: s.is_max_age_fixed === !0,
        isMinAgeFixed: s.is_min_age_fixed === !0,
        maxAgeRange: u.length !== 0 ? new Set(u) : null,
        maxTargetingAge:
          (a = s.default_max_age) != null ? a : t.maxTargetingAge,
        minAgeRange: c.length !== 0 ? new Set(c) : null,
        minTargetingAge:
          (i = s.default_min_age) != null ? i : t.minTargetingAge,
      };
    }
    function m(e, t) {
      var r = o("CometRelay").readInlineData(
          s !== void 0
            ? s
            : (s = n("LWICometSAFRUtils_genderRestrictions.graphql")),
          t,
        ),
        a = r.gender;
      return a == null ? e : { isGenderFixed: !a.is_enabled };
    }
    function p(e, t) {
      var r = o("CometRelay").readInlineData(
          u !== void 0
            ? u
            : (u = n("LWICometSAFRUtils_radiusRestrictions.graphql")),
          t,
        ),
        a = r.location_radius;
      if (a == null) return e;
      var i = a.default_radius_unit,
        l = a.default_radius_value,
        s = a.max_radius,
        c = a.min_radius;
      if (i == null || l == null || c == null) return e;
      switch (i) {
        case "KILOMETER": {
          var d = Math.ceil(
              o("LWICometRadiusUtils").convertKilometersToMiles(l),
            ),
            m =
              s != null
                ? Math.ceil(
                    o("LWICometRadiusUtils").convertKilometersToMiles(s),
                  )
                : null,
            p = Math.ceil(o("LWICometRadiusUtils").convertKilometersToMiles(c));
          return {
            CITY: {
              kilometer: {
                defaultVal: l,
                max: s != null ? s : e.CITY.kilometer.max,
                min: c,
              },
              mile: {
                defaultVal: d,
                max: m != null ? m : e.CITY.mile.max,
                min: p,
              },
            },
            CUSTOM_LOCATION: {
              kilometer: {
                defaultVal: l,
                max: s != null ? s : e.CUSTOM_LOCATION.kilometer.max,
                min: c,
              },
              mile: {
                defaultVal: d,
                max: m != null ? m : e.CUSTOM_LOCATION.mile.max,
                min: p,
              },
            },
            PLACE: {
              kilometer: {
                defaultVal: l,
                max: s != null ? s : e.PLACE.kilometer.max,
                min: c,
              },
              mile: {
                defaultVal: d,
                max: m != null ? m : e.PLACE.mile.max,
                min: p,
              },
            },
          };
        }
        case "MILE":
        default: {
          var _ = Math.ceil(
              o("LWICometRadiusUtils").convertMilesToKilometers(l),
            ),
            f =
              s != null
                ? Math.ceil(
                    o("LWICometRadiusUtils").convertMilesToKilometers(s),
                  )
                : null,
            g = Math.ceil(o("LWICometRadiusUtils").convertMilesToKilometers(c));
          return {
            CITY: {
              kilometer: {
                defaultVal: _,
                max: f != null ? f : e.CITY.kilometer.max,
                min: g,
              },
              mile: {
                defaultVal: l,
                max: s != null ? s : e.CITY.mile.max,
                min: c,
              },
            },
            CUSTOM_LOCATION: {
              kilometer: {
                defaultVal: _,
                max: f != null ? f : e.CUSTOM_LOCATION.kilometer.max,
                min: g,
              },
              mile: {
                defaultVal: l,
                max: s != null ? s : e.CUSTOM_LOCATION.mile.max,
                min: c,
              },
            },
            PLACE: {
              kilometer: {
                defaultVal: _,
                max: f != null ? f : e.PLACE.kilometer.max,
                min: g,
              },
              mile: {
                defaultVal: l,
                max: s != null ? s : e.PLACE.mile.max,
                min: c,
              },
            },
          };
        }
      }
    }
    ((l.AD_FORMAT_CAROUSEL_RESTRICTION_MAP = c),
      (l.getAgeConfig = d),
      (l.getGenderConfig = m),
      (l.getRadiusConfig = p));
  },
  98,
);
