__d(
  "AdsTargetingConstants",
  [
    "fbt",
    "AdsCommonTargetingDefaultConstants",
    "AdsPersonalSettingsBusinessConstraintsMinAgeConstants",
    "LocationConstants",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = 65,
      u = { All: 0, Empty: -1, Men: 1, Women: 2 },
      c = s._(/*BTDS*/ "All"),
      d = s._(/*BTDS*/ "Men"),
      m = s._(/*BTDS*/ "Women"),
      p = s._(/*BTDS*/ "Gender"),
      _ = s._(/*BTDS*/ "App exclusions"),
      f = s._(
        /*BTDS*/ "You can choose to exclude people who have already installed your app.",
      ),
      g = s._(
        /*BTDS*/ "Don't show ads to people who've already installed your app.",
      ),
      h = s._(/*BTDS*/ "Excluding people who've already installed your app"),
      y = s._(/*BTDS*/ "None"),
      C = 180,
      b = 180,
      v = 730;
    function S(e, t) {
      var n = {
        geo_locations: {
          cities: [],
          countries: [e],
          regions: [],
          zips: [],
          location_types: r("LocationConstants").DEFAULT_LOCATION_TYPES,
        },
        age_max: o("AdsCommonTargetingDefaultConstants").DEFAULT_MAX_AGE,
        age_min: t,
        genders: o("AdsCommonTargetingDefaultConstants").DEFAULT_GENDER,
      };
      return n;
    }
    var R = s._(/*BTDS*/ "About custom audiences");
    ((l.DEFAULT_MIN_SELECTABLE_AGE = r(
      "AdsPersonalSettingsBusinessConstraintsMinAgeConstants",
    ).DEFAULT_MIN_AGE_BUSINESS_CONSTRAINTS),
      (l.DEFAULT_MAX_SELECTABLE_AGE = e),
      (l.GENDERS = u),
      (l.ALL_LABEL = c),
      (l.MEN_LABEL = d),
      (l.WOMEN_LABEL = m),
      (l.GENDER_LABEL = p),
      (l.TARGETING_APP_INSTALL_STATE_LABEL = _),
      (l.TARGETING_APP_INSTALL_STATE_HELP_MESSAGE = f),
      (l.TARGETING_APP_INSTALL_STATE_CHECKBOX_TEXT = g),
      (l.TARGETING_APP_INSTALL_STATE_NOT_INSTALLED_READ_ONLY_TEXT = h),
      (l.TARGETING_APP_INSTALL_STATE_UNCHECKED_READ_ONLY_TEXT = y),
      (l.DEFAULT_CUSTOM_AUDIENCE_MAXIMUM_RETENTION_DAYS = C),
      (l.DEFAULT_CUSTOM_AUDIENCE_RETENTION_DAYS = b),
      (l.ENGAGEMENT_CUSTOM_AUDIENCE_MAXIMUM_RETENTION_DAYS = v),
      (l.getDefaultTargetingSpec = S),
      (l.CUSTOM_AUDIENCE_LEARN_MORE = R));
  },
  226,
);
