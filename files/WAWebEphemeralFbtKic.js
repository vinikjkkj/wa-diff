__d(
  "WAWebEphemeralFbtKic",
  [
    "fbt",
    "WALogger",
    "WAWebContactCollection",
    "WAWebContactGetters",
    "WAWebEphemeralCTAFbt",
    "WAWebEphemeralFbtKicHoursDaysHelpers",
    "WAWebEphemeralFbtKicTypes",
    "WAWebFrontendContactGetters",
    "WAWebMiscGatingUtils",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e, u, c, d;
    function m(e) {
      return h(
        o("WAWebEphemeralFbtKicTypes").EphemeralStringType.OutOfSyncInfo,
        e,
      );
    }
    function p() {
      return s._(/*BTDS*/ "");
    }
    function _(e) {
      return (
        e === void 0 && (e = 0),
        h(o("WAWebEphemeralFbtKicTypes").EphemeralStringType.Explanation, e)
      );
    }
    function f(e, t) {
      return (
        e === void 0 && (e = 0),
        h(
          o("WAWebEphemeralFbtKicTypes").EphemeralStringType.ModeChangeByOthers,
          e,
          t,
        )
      );
    }
    function g(e) {
      return (
        e === void 0 && (e = 0),
        h(o("WAWebEphemeralFbtKicTypes").EphemeralStringType.ModeChangeByYou, e)
      );
    }
    function h(t, n, r) {
      if ((n === void 0 && (n = 0), n < 0))
        return (
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "getEphemeralString ",
                  " is given invalid duration ",
                  "",
                ])),
              t,
              n,
            )
            .sendLogs("invalid-duration"),
          ""
        );
      if (n === 0) return y(t, r);
      if (n <= 60) return C(t, n, r);
      if (n < 3600) {
        var a = Math.floor(n / 60);
        return b(t, a, r);
      } else if (n <= 1440 * 60) {
        var i = Math.floor(n / 60 / 60);
        return o(
          "WAWebEphemeralFbtKicHoursDaysHelpers",
        ).getEphemeralOnHoursString(t, i, r);
      }
      var l = Math.floor(n / 24 / 60 / 60);
      return o("WAWebEphemeralFbtKicHoursDaysHelpers").getEphemeralOnDaysString(
        t,
        l,
        r,
      );
    }
    function y(e, t) {
      return e ===
        o("WAWebEphemeralFbtKicTypes").EphemeralStringType
          .SettingChangeByOthers && t != null
        ? s._(/*BTDS*/ "", [s._param("person-name", t)])
        : e ===
            o("WAWebEphemeralFbtKicTypes").EphemeralStringType
              .SettingChangeByYou
          ? s._(/*BTDS*/ "")
          : e ===
              o("WAWebEphemeralFbtKicTypes").EphemeralStringType
                .SettingChangeByUnknown
            ? s._(/*BTDS*/ "")
            : e ===
                  o("WAWebEphemeralFbtKicTypes").EphemeralStringType
                    .SettingChangeByOthersAsAdmin && t != null
              ? s._(/*BTDS*/ "", [
                  s._param("person-name", t),
                  s._param(
                    "dm-action",
                    o("WAWebEphemeralCTAFbt").getDmActionChangeSettingFbt(),
                  ),
                ])
              : e ===
                  o("WAWebEphemeralFbtKicTypes").EphemeralStringType
                    .SettingChangeByYouAsAdmin
                ? s._(/*BTDS*/ "", [
                    s._param(
                      "dm-action",
                      o("WAWebEphemeralCTAFbt").getDmActionChangeSettingFbt(),
                    ),
                  ])
                : e ===
                    o("WAWebEphemeralFbtKicTypes").EphemeralStringType
                      .SettingChangeByUnknownAsAdmin
                  ? s._(/*BTDS*/ "", [
                      s._param(
                        "dm-action",
                        o("WAWebEphemeralCTAFbt").getDmActionChangeSettingFbt(),
                      ),
                    ])
                  : e ===
                      o("WAWebEphemeralFbtKicTypes").EphemeralStringType
                        .Duration
                    ? s._(/*BTDS*/ "")
                    : e ===
                        o("WAWebEphemeralFbtKicTypes").EphemeralStringType
                          .OutOfSyncInfo
                      ? r("justknobx")._("8068")
                        ? s._(/*BTDS*/ "")
                        : s._(/*BTDS*/ "")
                      : (o("WALogger")
                          .ERROR(
                            u ||
                              (u = babelHelpers.taggedTemplateLiteralLoose([
                                "getEphemeralOffString is given invalid type ",
                                "",
                              ])),
                            e,
                          )
                          .sendLogs("invalid-ephemeral-string-type"),
                        "");
    }
    function C(e, t, n) {
      var r = o("WAWebMiscGatingUtils").isDefaultDisappearingMessagesEnabled();
      return e ===
        o("WAWebEphemeralFbtKicTypes").EphemeralStringType
          .SettingChangeByOthers && n != null
        ? s._(/*BTDS*/ "", [
            s._plural(t, "number_of_seconds"),
            s._param("person-name", n),
          ])
        : e ===
            o("WAWebEphemeralFbtKicTypes").EphemeralStringType
              .SettingChangeByYou
          ? s._(/*BTDS*/ "", [s._plural(t, "number_of_seconds")])
          : e ===
              o("WAWebEphemeralFbtKicTypes").EphemeralStringType
                .SettingChangeByUnknown
            ? s._(/*BTDS*/ "", [s._plural(t, "number_of_seconds")])
            : e ===
                  o("WAWebEphemeralFbtKicTypes").EphemeralStringType
                    .SettingChangeByOthersAsAdmin && n != null
              ? s._(/*BTDS*/ "", [
                  s._plural(t, "number_of_seconds"),
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
                    s._plural(t, "number_of_seconds"),
                    s._param(
                      "dm-action",
                      o("WAWebEphemeralCTAFbt").getDmActionChangeSettingFbt(),
                    ),
                  ])
                : e ===
                    o("WAWebEphemeralFbtKicTypes").EphemeralStringType
                      .SettingChangeByUnknownAsAdmin
                  ? s._(/*BTDS*/ "", [
                      s._plural(t, "number_of_seconds"),
                      s._param(
                        "dm-action",
                        o("WAWebEphemeralCTAFbt").getDmActionChangeSettingFbt(),
                      ),
                    ])
                  : e ===
                      o("WAWebEphemeralFbtKicTypes").EphemeralStringType
                        .Duration
                    ? s._(/*BTDS*/ "", [s._plural(t, "number_of_seconds")])
                    : e ===
                        o("WAWebEphemeralFbtKicTypes").EphemeralStringType
                          .OutOfSyncInfo
                      ? s._(/*BTDS*/ "", [s._plural(t, "number_of_seconds")])
                      : e ===
                          o("WAWebEphemeralFbtKicTypes").EphemeralStringType
                            .Explanation
                        ? s._(/*BTDS*/ "", [s._plural(t, "number_of_seconds")])
                        : e ===
                            o("WAWebEphemeralFbtKicTypes").EphemeralStringType
                              .ModeChangeByOthers
                          ? r
                            ? s._(/*BTDS*/ "", [
                                s._plural(t, "number_of_seconds"),
                                s._param("person-name", n),
                                s._param(
                                  "dm-action",
                                  o(
                                    "WAWebEphemeralCTAFbt",
                                  ).getDmActionSetOwnTimerFbt(),
                                ),
                              ])
                            : s._(/*BTDS*/ "", [
                                s._plural(t, "number_of_seconds"),
                                s._param("person-name", n),
                              ])
                          : e ===
                                o("WAWebEphemeralFbtKicTypes")
                                  .EphemeralStringType.ModeChangeByYou && r
                            ? s._(/*BTDS*/ "", [
                                s._plural(t, "number_of_seconds"),
                                s._param(
                                  "dm-action",
                                  o(
                                    "WAWebEphemeralCTAFbt",
                                  ).getDmActionChangeDefaultTimerFbt(),
                                ),
                              ])
                            : (o("WALogger")
                                .ERROR(
                                  c ||
                                    (c =
                                      babelHelpers.taggedTemplateLiteralLoose([
                                        "getEphemeralOnSecondsString is given type ",
                                        " and name ",
                                        "",
                                      ])),
                                  e,
                                  n,
                                )
                                .sendLogs("invalid-ephemeral-string-type"),
                              "");
    }
    function b(e, t, n) {
      var r = o("WAWebMiscGatingUtils").isDefaultDisappearingMessagesEnabled();
      return e ===
        o("WAWebEphemeralFbtKicTypes").EphemeralStringType
          .SettingChangeByOthers && n != null
        ? s._(/*BTDS*/ "", [
            s._plural(t, "number_of_minutes"),
            s._param("person-name", n),
          ])
        : e ===
            o("WAWebEphemeralFbtKicTypes").EphemeralStringType
              .SettingChangeByYou
          ? s._(/*BTDS*/ "", [s._plural(t, "number_of_minutes")])
          : e ===
              o("WAWebEphemeralFbtKicTypes").EphemeralStringType
                .SettingChangeByUnknown
            ? s._(/*BTDS*/ "", [s._plural(t, "number_of_minutes")])
            : e ===
                  o("WAWebEphemeralFbtKicTypes").EphemeralStringType
                    .SettingChangeByOthersAsAdmin && n != null
              ? s._(/*BTDS*/ "", [
                  s._plural(t, "number_of_minutes"),
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
                    s._plural(t, "number_of_minutes"),
                    s._param(
                      "dm-action",
                      o("WAWebEphemeralCTAFbt").getDmActionChangeSettingFbt(),
                    ),
                  ])
                : e ===
                    o("WAWebEphemeralFbtKicTypes").EphemeralStringType
                      .SettingChangeByUnknownAsAdmin
                  ? s._(/*BTDS*/ "", [
                      s._plural(t, "number_of_minutes"),
                      s._param(
                        "dm-action",
                        o("WAWebEphemeralCTAFbt").getDmActionChangeSettingFbt(),
                      ),
                    ])
                  : e ===
                      o("WAWebEphemeralFbtKicTypes").EphemeralStringType
                        .Duration
                    ? s._(/*BTDS*/ "", [s._plural(t, "number_of_minutes")])
                    : e ===
                        o("WAWebEphemeralFbtKicTypes").EphemeralStringType
                          .OutOfSyncInfo
                      ? s._(/*BTDS*/ "", [s._plural(t, "number_of_minutes")])
                      : e ===
                          o("WAWebEphemeralFbtKicTypes").EphemeralStringType
                            .Explanation
                        ? s._(/*BTDS*/ "", [s._plural(t, "number_of_minutes")])
                        : e ===
                            o("WAWebEphemeralFbtKicTypes").EphemeralStringType
                              .ModeChangeByOthers
                          ? r
                            ? s._(/*BTDS*/ "", [
                                s._plural(t, "number_of_minutes"),
                                s._param("person-name", n),
                                s._param(
                                  "dm-action",
                                  o(
                                    "WAWebEphemeralCTAFbt",
                                  ).getDmActionSetOwnTimerFbt(),
                                ),
                              ])
                            : s._(/*BTDS*/ "", [
                                s._plural(t, "number_of_minutes"),
                                s._param("person-name", n),
                              ])
                          : e ===
                                o("WAWebEphemeralFbtKicTypes")
                                  .EphemeralStringType.ModeChangeByYou && r
                            ? s._(/*BTDS*/ "", [
                                s._plural(t, "number_of_minutes"),
                                s._param(
                                  "dm-action",
                                  o(
                                    "WAWebEphemeralCTAFbt",
                                  ).getDmActionChangeDefaultTimerFbt(),
                                ),
                              ])
                            : (o("WALogger")
                                .ERROR(
                                  d ||
                                    (d =
                                      babelHelpers.taggedTemplateLiteralLoose([
                                        "getEphemeralOnMinutesString is given type ",
                                        " and name ",
                                        "",
                                      ])),
                                  e,
                                  n,
                                )
                                .sendLogs("invalid-ephemeral-string-type"),
                              "");
    }
    function v(e) {
      var t = o("WAWebContactCollection").ContactCollection.assertGet(e);
      if (o("WAWebContactGetters").getIsMe(t)) return s._(/*BTDS*/ "");
      var n = o("WAWebFrontendContactGetters").getFormattedName(t);
      return s._(/*BTDS*/ "", [s._param("person-name", n)]);
    }
    ((l.getDisappearingMessageOutOfSyncDifferentBody = m),
      (l.getDisappearingMessageOutOfSyncDifferentTitle = p),
      (l.getDisappearingMessageExplanationStringKic = _),
      (l.getDisappearingModeOtherStringKic = f),
      (l.getDisappearingModeYouStringKic = g),
      (l.getKeptByString = v));
  },
  226,
);
