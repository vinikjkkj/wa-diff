__d(
  "WAWebEphemeralL10N",
  [
    "fbt",
    "$InternalEnum",
    "WALogger",
    "WAWebEphemeralCTAFbt",
    "WAWebL10N",
    "WAWebMiscGatingUtils",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c,
      d,
      m,
      p,
      _ = n("$InternalEnum").Mirrored([
        "SettingChangeByOthers",
        "SettingChangeByYou",
        "SettingChangeByUnknown",
        "SettingChangeByOthersAsAdmin",
        "SettingChangeByYouAsAdmin",
        "SettingChangeByUnknownAsAdmin",
        "Duration",
        "OutOfSyncInfo",
        "Explanation",
        "ModeChangeByOthers",
        "ModeChangeByYou",
      ]);
    function f(e) {
      return (e === void 0 && (e = 0), h(_.Duration, e));
    }
    function g(e) {
      return (e === void 0 && (e = 0), h(_.Explanation, e));
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
        return v(t, i, r);
      }
      var l = Math.floor(n / 24 / 60 / 60);
      return S(t, l, r);
    }
    function y(e, t) {
      return e === _.SettingChangeByOthers && t != null
        ? s._(/*BTDS*/ "", [s._param("name", t)])
        : e === _.SettingChangeByYou
          ? s._(/*BTDS*/ "")
          : e === _.SettingChangeByUnknown
            ? s._(/*BTDS*/ "")
            : e === _.SettingChangeByOthersAsAdmin && t != null
              ? s._(/*BTDS*/ "", [
                  s._param("name", t),
                  s._param(
                    "dm-action",
                    o("WAWebEphemeralCTAFbt").getDmActionChangeSettingFbt(),
                  ),
                ])
              : e === _.SettingChangeByYouAsAdmin
                ? s._(/*BTDS*/ "", [
                    s._param(
                      "dm-action",
                      o("WAWebEphemeralCTAFbt").getDmActionChangeSettingFbt(),
                    ),
                  ])
                : e === _.SettingChangeByUnknownAsAdmin
                  ? s._(/*BTDS*/ "", [
                      s._param(
                        "dm-action",
                        o("WAWebEphemeralCTAFbt").getDmActionChangeSettingFbt(),
                      ),
                    ])
                  : e === _.Duration
                    ? s._(/*BTDS*/ "")
                    : e === _.OutOfSyncInfo
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
      var a = o("WAWebMiscGatingUtils").isDefaultDisappearingMessagesEnabled(),
        i = r("WAWebL10N").n(t);
      return e === _.SettingChangeByOthers && n != null
        ? s._(/*BTDS*/ "", [s._plural(t, "number"), s._param("name", n)])
        : e === _.SettingChangeByYou
          ? s._(/*BTDS*/ "", [s._plural(t, "number")])
          : e === _.SettingChangeByUnknown
            ? s._(/*BTDS*/ "", [s._plural(t, "number")])
            : e === _.SettingChangeByOthersAsAdmin && n != null
              ? s._(/*BTDS*/ "", [
                  s._plural(t, "number"),
                  s._param("name", n),
                  s._param(
                    "dm-action",
                    o("WAWebEphemeralCTAFbt").getDmActionChangeSettingFbt(),
                  ),
                ])
              : e === _.SettingChangeByYouAsAdmin
                ? s._(/*BTDS*/ "", [
                    s._plural(t, "number"),
                    s._param(
                      "dm-action",
                      o("WAWebEphemeralCTAFbt").getDmActionChangeSettingFbt(),
                    ),
                  ])
                : e === _.SettingChangeByUnknownAsAdmin
                  ? s._(/*BTDS*/ "", [
                      s._plural(t, "number"),
                      s._param(
                        "dm-action",
                        o("WAWebEphemeralCTAFbt").getDmActionChangeSettingFbt(),
                      ),
                    ])
                  : e === _.Duration
                    ? s._(/*BTDS*/ "", [s._plural(t, "number")])
                    : e === _.OutOfSyncInfo
                      ? s._(/*BTDS*/ "", [s._plural(t, "number")])
                      : e === _.Explanation
                        ? s._(/*BTDS*/ "", [s._plural(t, "number")])
                        : e === _.ModeChangeByOthers
                          ? a
                            ? s._(/*BTDS*/ "", [
                                s._plural(t, "number"),
                                s._param("name", n),
                                s._param(
                                  "dm-action",
                                  o(
                                    "WAWebEphemeralCTAFbt",
                                  ).getDmActionSetOwnTimerFbt(),
                                ),
                              ])
                            : s._(/*BTDS*/ "", [
                                s._plural(t),
                                s._param("name", n),
                                s._param("number", i),
                              ])
                          : e === _.ModeChangeByYou && a
                            ? s._(/*BTDS*/ "", [
                                s._plural(t, "number"),
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
      var a = o("WAWebMiscGatingUtils").isDefaultDisappearingMessagesEnabled(),
        i = r("WAWebL10N").n(t);
      return e === _.SettingChangeByOthers && n != null
        ? s._(/*BTDS*/ "", [s._plural(t, "number"), s._param("name", n)])
        : e === _.SettingChangeByYou
          ? s._(/*BTDS*/ "", [s._plural(t, "number")])
          : e === _.SettingChangeByUnknown
            ? s._(/*BTDS*/ "", [s._plural(t, "number")])
            : e === _.SettingChangeByOthersAsAdmin && n != null
              ? s._(/*BTDS*/ "", [
                  s._plural(t, "number"),
                  s._param("name", n),
                  s._param(
                    "dm-action",
                    o("WAWebEphemeralCTAFbt").getDmActionChangeSettingFbt(),
                  ),
                ])
              : e === _.SettingChangeByYouAsAdmin
                ? s._(/*BTDS*/ "", [
                    s._plural(t, "number"),
                    s._param(
                      "dm-action",
                      o("WAWebEphemeralCTAFbt").getDmActionChangeSettingFbt(),
                    ),
                  ])
                : e === _.SettingChangeByUnknownAsAdmin
                  ? s._(/*BTDS*/ "", [
                      s._plural(t, "number"),
                      s._param(
                        "dm-action",
                        o("WAWebEphemeralCTAFbt").getDmActionChangeSettingFbt(),
                      ),
                    ])
                  : e === _.Duration
                    ? s._(/*BTDS*/ "", [s._plural(t, "number")])
                    : e === _.OutOfSyncInfo
                      ? s._(/*BTDS*/ "", [s._plural(t, "number")])
                      : e === _.Explanation
                        ? s._(/*BTDS*/ "", [s._plural(t, "number")])
                        : e === _.ModeChangeByOthers
                          ? a
                            ? s._(/*BTDS*/ "", [
                                s._plural(t, "number"),
                                s._param("name", n),
                                s._param(
                                  "dm-action",
                                  o(
                                    "WAWebEphemeralCTAFbt",
                                  ).getDmActionSetOwnTimerFbt(),
                                ),
                              ])
                            : s._(/*BTDS*/ "", [
                                s._plural(t),
                                s._param("name", n),
                                s._param("number", i),
                              ])
                          : e === _.ModeChangeByYou && a
                            ? s._(/*BTDS*/ "", [
                                s._plural(t, "number"),
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
    function v(e, t, n) {
      var a = o("WAWebMiscGatingUtils").isDefaultDisappearingMessagesEnabled(),
        i = r("WAWebL10N").n(t);
      return e === _.SettingChangeByOthers && n != null
        ? s._(/*BTDS*/ "", [s._plural(t, "number"), s._param("name", n)])
        : e === _.SettingChangeByYou
          ? s._(/*BTDS*/ "", [s._plural(t, "number")])
          : e === _.SettingChangeByUnknown
            ? s._(/*BTDS*/ "", [s._plural(t, "number")])
            : e === _.SettingChangeByOthersAsAdmin && n != null
              ? s._(/*BTDS*/ "", [
                  s._plural(t, "number"),
                  s._param("name", n),
                  s._param(
                    "dm-action",
                    o("WAWebEphemeralCTAFbt").getDmActionChangeSettingFbt(),
                  ),
                ])
              : e === _.SettingChangeByYouAsAdmin
                ? s._(/*BTDS*/ "", [
                    s._plural(t, "number"),
                    s._param(
                      "dm-action",
                      o("WAWebEphemeralCTAFbt").getDmActionChangeSettingFbt(),
                    ),
                  ])
                : e === _.SettingChangeByUnknownAsAdmin
                  ? s._(/*BTDS*/ "", [
                      s._plural(t, "number"),
                      s._param(
                        "dm-action",
                        o("WAWebEphemeralCTAFbt").getDmActionChangeSettingFbt(),
                      ),
                    ])
                  : e === _.Duration
                    ? s._(/*BTDS*/ "", [s._plural(t, "number")])
                    : e === _.OutOfSyncInfo
                      ? s._(/*BTDS*/ "", [s._plural(t, "number")])
                      : e === _.Explanation
                        ? s._(/*BTDS*/ "", [s._plural(t, "number")])
                        : e === _.ModeChangeByOthers
                          ? a
                            ? s._(/*BTDS*/ "", [
                                s._plural(t, "number"),
                                s._param("name", n),
                                s._param(
                                  "dm-action",
                                  o(
                                    "WAWebEphemeralCTAFbt",
                                  ).getDmActionSetOwnTimerFbt(),
                                ),
                              ])
                            : s._(/*BTDS*/ "", [
                                s._plural(t),
                                s._param("name", n),
                                s._param("number", i),
                              ])
                          : e === _.ModeChangeByYou && a
                            ? s._(/*BTDS*/ "", [
                                s._plural(t, "number"),
                                s._param(
                                  "dm-action",
                                  o(
                                    "WAWebEphemeralCTAFbt",
                                  ).getDmActionChangeDefaultTimerFbt(),
                                ),
                              ])
                            : (o("WALogger")
                                .ERROR(
                                  m ||
                                    (m =
                                      babelHelpers.taggedTemplateLiteralLoose([
                                        "getEphemeralOnHoursString is given type ",
                                        " and name ",
                                        "",
                                      ])),
                                  e,
                                  n,
                                )
                                .sendLogs("invalid-ephemeral-string-type"),
                              "");
    }
    function S(e, t, n) {
      var a = o("WAWebMiscGatingUtils").isDefaultDisappearingMessagesEnabled(),
        i = r("WAWebL10N").n(t);
      return e === _.SettingChangeByOthers && n != null
        ? s._(/*BTDS*/ "", [s._plural(t, "number"), s._param("name", n)])
        : e === _.SettingChangeByYou
          ? s._(/*BTDS*/ "", [s._plural(t, "number")])
          : e === _.SettingChangeByUnknown
            ? s._(/*BTDS*/ "", [s._plural(t, "number")])
            : e === _.SettingChangeByOthersAsAdmin && n != null
              ? s._(/*BTDS*/ "", [
                  s._plural(t, "number"),
                  s._param("name", n),
                  s._param(
                    "dm-action",
                    o("WAWebEphemeralCTAFbt").getDmActionChangeSettingFbt(),
                  ),
                ])
              : e === _.SettingChangeByYouAsAdmin
                ? s._(/*BTDS*/ "", [
                    s._plural(t, "number"),
                    s._param(
                      "dm-action",
                      o("WAWebEphemeralCTAFbt").getDmActionChangeSettingFbt(),
                    ),
                  ])
                : e === _.SettingChangeByUnknownAsAdmin
                  ? s._(/*BTDS*/ "", [
                      s._plural(t, "number"),
                      s._param(
                        "dm-action",
                        o("WAWebEphemeralCTAFbt").getDmActionChangeSettingFbt(),
                      ),
                    ])
                  : e === _.Duration
                    ? s._(/*BTDS*/ "", [s._plural(t, "number")])
                    : e === _.OutOfSyncInfo
                      ? s._(/*BTDS*/ "", [s._plural(t, "number")])
                      : e === _.Explanation
                        ? s._(/*BTDS*/ "", [s._plural(t, "number")])
                        : e === _.ModeChangeByOthers
                          ? a
                            ? s._(/*BTDS*/ "", [
                                s._plural(t, "number"),
                                s._param("name", n),
                                s._param(
                                  "dm-action",
                                  o(
                                    "WAWebEphemeralCTAFbt",
                                  ).getDmActionSetOwnTimerFbt(),
                                ),
                              ])
                            : s._(/*BTDS*/ "", [
                                s._plural(t),
                                s._param("name", n),
                                s._param("number", i),
                              ])
                          : e === _.ModeChangeByYou && a
                            ? s._(/*BTDS*/ "", [
                                s._plural(t, "number"),
                                s._param(
                                  "dm-action",
                                  o(
                                    "WAWebEphemeralCTAFbt",
                                  ).getDmActionChangeDefaultTimerFbt(),
                                ),
                              ])
                            : (o("WALogger")
                                .ERROR(
                                  p ||
                                    (p =
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
    ((l.getDisappearingMessageDurationString = f),
      (l.getDisappearingMessageExplanationString = g));
  },
  226,
);
