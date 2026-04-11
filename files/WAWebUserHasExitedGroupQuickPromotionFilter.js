__d(
  "WAWebUserHasExitedGroupQuickPromotionFilter",
  [
    "WANullthrows",
    "WATimeUtils",
    "WAWebCommonQPSurfacesTypes",
    "WAWebQuickPromotionValidatorUtils",
    "WAWebUserPrefsGeneral",
    "WAWebUserPrefsMeUser",
  ],
  function (t, n, r, o, a, i, l) {
    var e = {
        reason:
          "filtersRuleValidator:exitedGroupFilter: Group privacy setting is not all",
      },
      s = {
        reason:
          "filtersRuleValidator:exitedGroupFilter: No group metadata found",
      },
      u = {
        reason:
          "filtersRuleValidator:exitedGroupFilter: User is a group member",
      },
      c = {
        reason:
          "filtersRuleValidator:exitedGroupFilter: User not found as past participant",
      },
      d = {
        reason:
          "filtersRuleValidator:exitedGroupFilter: User exited group timestamp outside threshold",
      },
      m = {
        name: "whatsapp_user_has_exited_group",
        filter: function (n, a, i) {
          var t,
            l = i == null || (t = i.group) == null ? void 0 : t.groupMetadata;
          if (l == null) return s;
          var m = !l.participants.iAmMember();
          if (!m) return u;
          var p = l.pastParticipants.get(
            o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(),
          );
          if (p == null) return c;
          var _ = o(
              "WAWebQuickPromotionValidatorUtils",
            ).convertFilterParametersIntoMap(a),
            f = parseInt(r("WANullthrows")(_.get("param")), 10);
          if (
            !o("WATimeUtils").isInFuture(
              o("WATimeUtils").futureUnixTime(
                f,
                o("WATimeUtils").castToUnixTime(p.leaveTs),
              ),
            )
          )
            return d;
          var g = o("WAWebUserPrefsGeneral").getUserPrivacySettings();
          return g.groupAdd !== "all"
            ? e
            : o("WAWebCommonQPSurfacesTypes").RESULT_TRUE;
        },
      };
    l.userHasExitedGroupFilter = m;
  },
  98,
);
