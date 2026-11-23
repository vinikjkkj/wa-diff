__d(
  "WAWebEphemeralFbtKicHoursDaysHelpers",
  [
    "fbt",
    "WALogger",
    "WAWebEphemeralCTAFbt",
    "WAWebEphemeralFbtKicTypes",
    "WAWebMiscGatingUtils",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e, u;
    function c(t, n, r) {
      var a = o("WAWebMiscGatingUtils").isDefaultDisappearingMessagesEnabled();
      return t ===
        o("WAWebEphemeralFbtKicTypes").EphemeralStringType
          .SettingChangeByOthers && r != null
        ? s._(/*BTDS*/ "", [
            s._plural(n, "number_of_hours"),
            s._param("person-name", r),
          ])
        : t ===
            o("WAWebEphemeralFbtKicTypes").EphemeralStringType
              .SettingChangeByYou
          ? s._(/*BTDS*/ "", [s._plural(n, "number_of_hours")])
          : t ===
              o("WAWebEphemeralFbtKicTypes").EphemeralStringType
                .SettingChangeByUnknown
            ? s._(/*BTDS*/ "", [s._plural(n, "number_of_hours")])
            : t ===
                  o("WAWebEphemeralFbtKicTypes").EphemeralStringType
                    .SettingChangeByOthersAsAdmin && r != null
              ? s._(/*BTDS*/ "", [
                  s._plural(n, "number_of_hours"),
                  s._param("person-name", r),
                  s._param(
                    "dm-action",
                    o("WAWebEphemeralCTAFbt").getDmActionChangeSettingFbt(),
                  ),
                ])
              : t ===
                  o("WAWebEphemeralFbtKicTypes").EphemeralStringType
                    .SettingChangeByYouAsAdmin
                ? s._(/*BTDS*/ "", [
                    s._plural(n, "number_of_hours"),
                    s._param(
                      "dm-action",
                      o("WAWebEphemeralCTAFbt").getDmActionChangeSettingFbt(),
                    ),
                  ])
                : t ===
                    o("WAWebEphemeralFbtKicTypes").EphemeralStringType
                      .SettingChangeByUnknownAsAdmin
                  ? s._(/*BTDS*/ "", [
                      s._plural(n, "number_of_hours"),
                      s._param(
                        "dm-action",
                        o("WAWebEphemeralCTAFbt").getDmActionChangeSettingFbt(),
                      ),
                    ])
                  : t ===
                      o("WAWebEphemeralFbtKicTypes").EphemeralStringType
                        .Duration
                    ? s._(/*BTDS*/ "", [s._plural(n, "number_of_hours")])
                    : t ===
                        o("WAWebEphemeralFbtKicTypes").EphemeralStringType
                          .OutOfSyncInfo
                      ? s._(/*BTDS*/ "", [s._plural(n, "number_of_hours")])
                      : t ===
                          o("WAWebEphemeralFbtKicTypes").EphemeralStringType
                            .Explanation
                        ? s._(/*BTDS*/ "", [s._plural(n, "number_of_hours")])
                        : t ===
                            o("WAWebEphemeralFbtKicTypes").EphemeralStringType
                              .ModeChangeByOthers
                          ? a
                            ? s._(/*BTDS*/ "", [
                                s._plural(n, "number_of_hours"),
                                s._param("person-name", r),
                                s._param(
                                  "dm-action",
                                  o(
                                    "WAWebEphemeralCTAFbt",
                                  ).getDmActionSetOwnTimerFbt(),
                                ),
                              ])
                            : s._(/*BTDS*/ "", [
                                s._plural(n, "number_of_hours"),
                                s._param("person-name", r),
                              ])
                          : t ===
                                o("WAWebEphemeralFbtKicTypes")
                                  .EphemeralStringType.ModeChangeByYou && a
                            ? s._(/*BTDS*/ "", [
                                s._plural(n, "number_of_hours"),
                                s._param(
                                  "dm-action",
                                  o(
                                    "WAWebEphemeralCTAFbt",
                                  ).getDmActionChangeDefaultTimerFbt(),
                                ),
                              ])
                            : (o("WALogger")
                                .ERROR(
                                  e ||
                                    (e =
                                      babelHelpers.taggedTemplateLiteralLoose([
                                        "getEphemeralOnHoursString is given type ",
                                        " and name ",
                                        "",
                                      ])),
                                  t,
                                  r,
                                )
                                .sendLogs("invalid-ephemeral-string-type"),
                              "");
    }
    function d(e, t, n) {
      var r = o("WAWebMiscGatingUtils").isDefaultDisappearingMessagesEnabled();
      return e ===
        o("WAWebEphemeralFbtKicTypes").EphemeralStringType
          .SettingChangeByOthers && n != null
        ? s._(/*BTDS*/ "", [
            s._plural(t, "number_of_days"),
            s._param("person-name", n),
          ])
        : e ===
            o("WAWebEphemeralFbtKicTypes").EphemeralStringType
              .SettingChangeByYou
          ? s._(/*BTDS*/ "", [s._plural(t, "number_of_days")])
          : e ===
              o("WAWebEphemeralFbtKicTypes").EphemeralStringType
                .SettingChangeByUnknown
            ? s._(/*BTDS*/ "", [s._plural(t, "number_of_days")])
            : e ===
                  o("WAWebEphemeralFbtKicTypes").EphemeralStringType
                    .SettingChangeByOthersAsAdmin && n != null
              ? s._(/*BTDS*/ "", [
                  s._plural(t, "number_of_days"),
                  s._param("person-name", n),
                  s._param(
                    "dm-action",
                    o("WAWebEphemeralCTAFbt").getDmActionChangeSettingFbt(),
                  ),
                ])
              : e ===
                  o("WAWebEphemeralFbtKicTypes").EphemeralStringType
                    .SettingChangeByYouAsAdmin
                ? s._(/*BTDS*/ "", [
                    s._plural(t, "number_of_days"),
                    s._param(
                      "dm-action",
                      o("WAWebEphemeralCTAFbt").getDmActionChangeSettingFbt(),
                    ),
                  ])
                : e ===
                    o("WAWebEphemeralFbtKicTypes").EphemeralStringType
                      .SettingChangeByUnknownAsAdmin
                  ? s._(/*BTDS*/ "", [
                      s._plural(t, "number_of_days"),
                      s._param(
                        "dm-action",
                        o("WAWebEphemeralCTAFbt").getDmActionChangeSettingFbt(),
                      ),
                    ])
                  : e ===
                      o("WAWebEphemeralFbtKicTypes").EphemeralStringType
                        .Duration
                    ? s._(/*BTDS*/ "", [s._plural(t, "number_of_days")])
                    : e ===
                        o("WAWebEphemeralFbtKicTypes").EphemeralStringType
                          .OutOfSyncInfo
                      ? s._(/*BTDS*/ "", [s._plural(t, "number_of_days")])
                      : e ===
                          o("WAWebEphemeralFbtKicTypes").EphemeralStringType
                            .Explanation
                        ? s._(/*BTDS*/ "", [s._plural(t, "number_of_days")])
                        : e ===
                            o("WAWebEphemeralFbtKicTypes").EphemeralStringType
                              .ModeChangeByOthers
                          ? r
                            ? s._(/*BTDS*/ "", [
                                s._plural(t, "number_of_days"),
                                s._param("person-name", n),
                                s._param(
                                  "dm-action",
                                  o(
                                    "WAWebEphemeralCTAFbt",
                                  ).getDmActionSetOwnTimerFbt(),
                                ),
                              ])
                            : s._(/*BTDS*/ "", [
                                s._plural(t, "number_of_days"),
                                s._param("person-name", n),
                              ])
                          : e ===
                                o("WAWebEphemeralFbtKicTypes")
                                  .EphemeralStringType.ModeChangeByYou && r
                            ? s._(/*BTDS*/ "", [
                                s._plural(t, "number_of_days"),
                                s._param(
                                  "dm-action",
                                  o(
                                    "WAWebEphemeralCTAFbt",
                                  ).getDmActionChangeDefaultTimerFbt(),
                                ),
                              ])
                            : (o("WALogger")
                                .ERROR(
                                  u ||
                                    (u =
                                      babelHelpers.taggedTemplateLiteralLoose([
                                        "getEphemeralOnDaysString is given type ",
                                        " and name ",
                                        "",
                                      ])),
                                  e,
                                  n,
                                )
                                .sendLogs("invalid-ephemeral-string-type"),
                              "");
    }
    ((l.getEphemeralOnHoursString = c), (l.getEphemeralOnDaysString = d));
  },
  226,
);
