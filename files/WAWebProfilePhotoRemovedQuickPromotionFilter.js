__d(
  "WAWebProfilePhotoRemovedQuickPromotionFilter",
  [
    "WANullthrows",
    "WATimeUtils",
    "WAWebCommonQPSurfacesTypes",
    "WAWebQuickPromotionValidatorUtils",
    "WAWebUserPrefsGeneral",
  ],
  function (t, n, r, o, a, i, l) {
    var e = {
        reason:
          "filtersRuleValidator:profilePhotoRemovedFilter: profile photo privacy setting is not all",
      },
      s = {
        reason:
          "filtersRuleValidator:profilePhotoRemovedFilter: no timestamp found for last profile pic edit",
      },
      u = {
        reason:
          "filtersRuleValidator:profilePhotoRemovedFilter: last profile pic edit is outside threshold",
      },
      c = {
        reason:
          "filtersRuleValidator:profilePhotoRemovedFilter: threshold parameter not a valid number",
      },
      d = {
        name: "whatsapp_user_has_removed_profile_photo_first_time",
        filter: function (n, a, i) {
          var t = o("WAWebUserPrefsGeneral").getLastProfilePicThumbUpdate();
          if (t == null) return s;
          var l = o(
              "WAWebQuickPromotionValidatorUtils",
            ).convertFilterParametersIntoMap(a),
            d = parseInt(r("WANullthrows")(l.get("param")), 10);
          if (Number.isNaN(d)) return c;
          if (
            !o("WATimeUtils").isInFuture(
              o("WATimeUtils").futureUnixTime(
                d,
                o("WATimeUtils").castToUnixTime(t),
              ),
            )
          )
            return u;
          var m = o("WAWebUserPrefsGeneral").getUserPrivacySettings();
          return m.profilePicture !== "all"
            ? e
            : o("WAWebCommonQPSurfacesTypes").RESULT_TRUE;
        },
      };
    l.profilePhotoRemovedFilter = d;
  },
  98,
);
