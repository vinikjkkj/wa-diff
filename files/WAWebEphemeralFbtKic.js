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
  ],
  function (t, n, r, o, a, i, l, s) {
    var e, u, c, d;
    function m(e) {
      return C(
        o("WAWebEphemeralFbtKicTypes").EphemeralStringType.OutOfSyncInfo,
        e,
      );
    }
    function p() {
      return s._(/*BTDS*/ "Sent with a different timer");
    }
    function _() {
      return s._(/*BTDS*/ "This message won't disappear");
    }
    function f() {
      return s._(
        /*BTDS*/ "The sender may be using an older version of WhatsApp.",
      );
    }
    function g(e) {
      return (
        e === void 0 && (e = 0),
        C(o("WAWebEphemeralFbtKicTypes").EphemeralStringType.Explanation, e)
      );
    }
    function h(e, t) {
      return (
        e === void 0 && (e = 0),
        C(
          o("WAWebEphemeralFbtKicTypes").EphemeralStringType.ModeChangeByOthers,
          e,
          t,
        )
      );
    }
    function y(e) {
      return (
        e === void 0 && (e = 0),
        C(o("WAWebEphemeralFbtKicTypes").EphemeralStringType.ModeChangeByYou, e)
      );
    }
    function C(t, n, r) {
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
      if (n === 0) return b(t, r);
      if (n <= 60) return v(t, n, r);
      if (n < 3600) {
        var a = Math.floor(n / 60);
        return S(t, a, r);
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
    function b(e, t) {
      return e ===
        o("WAWebEphemeralFbtKicTypes").EphemeralStringType
          .SettingChangeByOthers && t != null
        ? s._(/*BTDS*/ "{person-name} turned off disappearing messages.", [
            s._param("person-name", t),
          ])
        : e ===
            o("WAWebEphemeralFbtKicTypes").EphemeralStringType
              .SettingChangeByYou
          ? s._(/*BTDS*/ "You turned off disappearing messages.")
          : e ===
              o("WAWebEphemeralFbtKicTypes").EphemeralStringType
                .SettingChangeByUnknown
            ? s._(/*BTDS*/ "Disappearing messages were turned off.")
            : e ===
                  o("WAWebEphemeralFbtKicTypes").EphemeralStringType
                    .SettingChangeByOthersAsAdmin && t != null
              ? s._(
                  /*BTDS*/ "{person-name} turned off disappearing messages. {dm-action}",
                  [
                    s._param("person-name", t),
                    s._param(
                      "dm-action",
                      o("WAWebEphemeralCTAFbt").getDmActionChangeSettingFbt(),
                    ),
                  ],
                )
              : e ===
                  o("WAWebEphemeralFbtKicTypes").EphemeralStringType
                    .SettingChangeByYouAsAdmin
                ? s._(
                    /*BTDS*/ "You turned off disappearing messages. {dm-action}",
                    [
                      s._param(
                        "dm-action",
                        o("WAWebEphemeralCTAFbt").getDmActionChangeSettingFbt(),
                      ),
                    ],
                  )
                : e ===
                    o("WAWebEphemeralFbtKicTypes").EphemeralStringType
                      .SettingChangeByUnknownAsAdmin
                  ? s._(
                      /*BTDS*/ "Disappearing messages were turned off. {dm-action}",
                      [
                        s._param(
                          "dm-action",
                          o(
                            "WAWebEphemeralCTAFbt",
                          ).getDmActionChangeSettingFbt(),
                        ),
                      ],
                    )
                  : e ===
                      o("WAWebEphemeralFbtKicTypes").EphemeralStringType
                        .Duration
                    ? s._(/*BTDS*/ "Off")
                    : e ===
                        o("WAWebEphemeralFbtKicTypes").EphemeralStringType
                          .OutOfSyncInfo
                      ? s._(
                          /*BTDS*/ "This message will not disappear from the chat. The sender may be on an old version of WhatsApp.",
                        )
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
    function v(e, t, n) {
      var r = o("WAWebMiscGatingUtils").isDefaultDisappearingMessagesEnabled();
      return e ===
        o("WAWebEphemeralFbtKicTypes").EphemeralStringType
          .SettingChangeByOthers && n != null
        ? s._(
            /*BTDS*/ '_j{"*":"{person-name} turned on disappearing messages. New messages will disappear from this chat {number_of_seconds} seconds after they\'re sent, except when kept.","_1":"{person-name} turned on disappearing messages. New messages will disappear from this chat 1 second after they\'re sent, except when kept."}',
            [s._plural(t, "number_of_seconds"), s._param("person-name", n)],
          )
        : e ===
            o("WAWebEphemeralFbtKicTypes").EphemeralStringType
              .SettingChangeByYou
          ? s._(
              /*BTDS*/ '_j{"*":"You turned on disappearing messages. New messages will disappear from this chat {number_of_seconds} seconds after they\'re sent, except when kept.","_1":"You turned on disappearing messages. New messages will disappear from this chat 1 second after they\'re sent, except when kept."}',
              [s._plural(t, "number_of_seconds")],
            )
          : e ===
              o("WAWebEphemeralFbtKicTypes").EphemeralStringType
                .SettingChangeByUnknown
            ? s._(
                /*BTDS*/ '_j{"*":"Disappearing messages were turned on. New messages will disappear from this chat {number_of_seconds} seconds after they\'re sent, except when kept.","_1":"Disappearing messages were turned on. New messages will disappear from this chat 1 second after they\'re sent, except when kept."}',
                [s._plural(t, "number_of_seconds")],
              )
            : e ===
                  o("WAWebEphemeralFbtKicTypes").EphemeralStringType
                    .SettingChangeByOthersAsAdmin && n != null
              ? s._(
                  /*BTDS*/ '_j{"*":"{person-name} turned on disappearing messages. New messages will disappear from this chat {number_of_seconds} seconds after they\'re sent, except when kept. {dm-action}","_1":"{person-name} turned on disappearing messages. New messages will disappear from this chat 1 second after they\'re sent, except when kept. {dm-action}"}',
                  [
                    s._plural(t, "number_of_seconds"),
                    s._param("person-name", n),
                    s._param(
                      "dm-action",
                      o("WAWebEphemeralCTAFbt").getDmActionChangeSettingFbt(),
                    ),
                  ],
                )
              : e ===
                  o("WAWebEphemeralFbtKicTypes").EphemeralStringType
                    .SettingChangeByYouAsAdmin
                ? s._(
                    /*BTDS*/ '_j{"*":"You turned on disappearing messages. New messages will disappear from this chat {number_of_seconds} seconds after they\'re sent, except when kept. {dm-action}","_1":"You turned on disappearing messages. New messages will disappear from this chat 1 second after they\'re sent, except when kept. {dm-action}"}',
                    [
                      s._plural(t, "number_of_seconds"),
                      s._param(
                        "dm-action",
                        o("WAWebEphemeralCTAFbt").getDmActionChangeSettingFbt(),
                      ),
                    ],
                  )
                : e ===
                    o("WAWebEphemeralFbtKicTypes").EphemeralStringType
                      .SettingChangeByUnknownAsAdmin
                  ? s._(
                      /*BTDS*/ '_j{"*":"Disappearing messages were turned on. New messages will disappear from this chat {number_of_seconds} seconds after they\'re sent, except when kept. {dm-action}","_1":"Disappearing messages were turned on. New messages will disappear from this chat 1 second after they\'re sent, except when kept. {dm-action}"}',
                      [
                        s._plural(t, "number_of_seconds"),
                        s._param(
                          "dm-action",
                          o(
                            "WAWebEphemeralCTAFbt",
                          ).getDmActionChangeSettingFbt(),
                        ),
                      ],
                    )
                  : e ===
                      o("WAWebEphemeralFbtKicTypes").EphemeralStringType
                        .Duration
                    ? s._(
                        /*BTDS*/ '_j{"*":"{number_of_seconds} seconds","_1":"1 second"}',
                        [s._plural(t, "number_of_seconds")],
                      )
                    : e ===
                        o("WAWebEphemeralFbtKicTypes").EphemeralStringType
                          .OutOfSyncInfo
                      ? s._(
                          /*BTDS*/ '_j{"*":"There was a disappearing message timer conflict. This message will disappear after {number_of_seconds} seconds.","_1":"There was a disappearing message timer conflict. This message will disappear after 1 second."}',
                          [s._plural(t, "number_of_seconds")],
                        )
                      : e ===
                          o("WAWebEphemeralFbtKicTypes").EphemeralStringType
                            .Explanation
                        ? s._(
                            /*BTDS*/ '_j{"*":"New messages will disappear from this chat {number_of_seconds} seconds after they\'re sent, except when kept.","_1":"New messages will disappear from this chat 1 second after they\'re sent, except when kept."}',
                            [s._plural(t, "number_of_seconds")],
                          )
                        : e ===
                            o("WAWebEphemeralFbtKicTypes").EphemeralStringType
                              .ModeChangeByOthers
                          ? r
                            ? s._(
                                /*BTDS*/ '_j{"*":"{person-name} uses a default timer for disappearing messages in new chats. New messages will disappear from this chat {number_of_seconds} seconds after they\'re sent, except when kept. {dm-action}","_1":"{person-name} uses a default timer for disappearing messages in new chats. New messages will disappear from this chat 1 second after they\'re sent, except when kept. {dm-action}"}',
                                [
                                  s._plural(t, "number_of_seconds"),
                                  s._param("person-name", n),
                                  s._param(
                                    "dm-action",
                                    o(
                                      "WAWebEphemeralCTAFbt",
                                    ).getDmActionSetOwnTimerFbt(),
                                  ),
                                ],
                              )
                            : s._(
                                /*BTDS*/ '_j{"*":"{person-name} uses a default timer for disappearing messages in new chats. New messages will disappear from this chat {number_of_seconds} seconds after they\'re sent, except when kept. Click to learn more.","_1":"{person-name} uses a default timer for disappearing messages in new chats. New messages will disappear from this chat 1 second after they\'re sent, except when kept. Click to learn more."}',
                                [
                                  s._plural(t, "number_of_seconds"),
                                  s._param("person-name", n),
                                ],
                              )
                          : e ===
                                o("WAWebEphemeralFbtKicTypes")
                                  .EphemeralStringType.ModeChangeByYou && r
                            ? s._(
                                /*BTDS*/ '_j{"*":"You use a default timer for disappearing messages in new chats. New messages will disappear from this chat {number_of_seconds} seconds after they\'re sent, except when kept. {dm-action}","_1":"You use a default timer for disappearing messages in new chats. New messages will disappear from this chat 1 second after they\'re sent, except when kept. {dm-action}"}',
                                [
                                  s._plural(t, "number_of_seconds"),
                                  s._param(
                                    "dm-action",
                                    o(
                                      "WAWebEphemeralCTAFbt",
                                    ).getDmActionChangeDefaultTimerFbt(),
                                  ),
                                ],
                              )
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
    function S(e, t, n) {
      var r = o("WAWebMiscGatingUtils").isDefaultDisappearingMessagesEnabled();
      return e ===
        o("WAWebEphemeralFbtKicTypes").EphemeralStringType
          .SettingChangeByOthers && n != null
        ? s._(
            /*BTDS*/ '_j{"*":"{person-name} turned on disappearing messages. New messages will disappear from this chat {number_of_minutes} minutes after they\'re sent, except when kept.","_1":"{person-name} turned on disappearing messages. New messages will disappear from this chat 1 minute after they\'re sent, except when kept."}',
            [s._plural(t, "number_of_minutes"), s._param("person-name", n)],
          )
        : e ===
            o("WAWebEphemeralFbtKicTypes").EphemeralStringType
              .SettingChangeByYou
          ? s._(
              /*BTDS*/ '_j{"*":"You turned on disappearing messages. New messages will disappear from this chat {number_of_minutes} minutes after they\'re sent, except when kept.","_1":"You turned on disappearing messages. New messages will disappear from this chat 1 minute after they\'re sent, except when kept."}',
              [s._plural(t, "number_of_minutes")],
            )
          : e ===
              o("WAWebEphemeralFbtKicTypes").EphemeralStringType
                .SettingChangeByUnknown
            ? s._(
                /*BTDS*/ '_j{"*":"Disappearing messages were turned on. New messages will disappear from this chat {number_of_minutes} minutes after they\'re sent, except when kept.","_1":"Disappearing messages were turned on. New messages will disappear from this chat 1 minute after they\'re sent, except when kept."}',
                [s._plural(t, "number_of_minutes")],
              )
            : e ===
                  o("WAWebEphemeralFbtKicTypes").EphemeralStringType
                    .SettingChangeByOthersAsAdmin && n != null
              ? s._(
                  /*BTDS*/ '_j{"*":"{person-name} turned on disappearing messages. New messages will disappear from this chat {number_of_minutes} minutes after they\'re sent, except when kept. {dm-action}","_1":"{person-name} turned on disappearing messages. New messages will disappear from this chat 1 minute after they\'re sent, except when kept. {dm-action}"}',
                  [
                    s._plural(t, "number_of_minutes"),
                    s._param("person-name", n),
                    s._param(
                      "dm-action",
                      o("WAWebEphemeralCTAFbt").getDmActionChangeSettingFbt(),
                    ),
                  ],
                )
              : e ===
                  o("WAWebEphemeralFbtKicTypes").EphemeralStringType
                    .SettingChangeByYouAsAdmin
                ? s._(
                    /*BTDS*/ '_j{"*":"You turned on disappearing messages. New messages will disappear from this chat {number_of_minutes} minutes after they\'re sent, except when kept. {dm-action}","_1":"You turned on disappearing messages. New messages will disappear from this chat 1 minute after they\'re sent, except when kept. {dm-action}"}',
                    [
                      s._plural(t, "number_of_minutes"),
                      s._param(
                        "dm-action",
                        o("WAWebEphemeralCTAFbt").getDmActionChangeSettingFbt(),
                      ),
                    ],
                  )
                : e ===
                    o("WAWebEphemeralFbtKicTypes").EphemeralStringType
                      .SettingChangeByUnknownAsAdmin
                  ? s._(
                      /*BTDS*/ '_j{"*":"Disappearing messages were turned on. New messages will disappear from this chat {number_of_minutes} minutes after they\'re sent, except when kept. {dm-action}","_1":"Disappearing messages were turned on. New messages will disappear from this chat 1 minute after they\'re sent, except when kept. {dm-action}"}',
                      [
                        s._plural(t, "number_of_minutes"),
                        s._param(
                          "dm-action",
                          o(
                            "WAWebEphemeralCTAFbt",
                          ).getDmActionChangeSettingFbt(),
                        ),
                      ],
                    )
                  : e ===
                      o("WAWebEphemeralFbtKicTypes").EphemeralStringType
                        .Duration
                    ? s._(
                        /*BTDS*/ '_j{"*":"{number_of_minutes} minutes","_1":"1 minute"}',
                        [s._plural(t, "number_of_minutes")],
                      )
                    : e ===
                        o("WAWebEphemeralFbtKicTypes").EphemeralStringType
                          .OutOfSyncInfo
                      ? s._(
                          /*BTDS*/ '_j{"*":"There was a disappearing message timer conflict. This message will disappear after {number_of_minutes} minutes.","_1":"There was a disappearing message timer conflict. This message will disappear after 1 minute."}',
                          [s._plural(t, "number_of_minutes")],
                        )
                      : e ===
                          o("WAWebEphemeralFbtKicTypes").EphemeralStringType
                            .Explanation
                        ? s._(
                            /*BTDS*/ '_j{"*":"New messages will disappear from this chat {number_of_minutes} minutes after they\'re sent, except when kept.","_1":"New messages will disappear from this chat 1 minute after they\'re sent, except when kept."}',
                            [s._plural(t, "number_of_minutes")],
                          )
                        : e ===
                            o("WAWebEphemeralFbtKicTypes").EphemeralStringType
                              .ModeChangeByOthers
                          ? r
                            ? s._(
                                /*BTDS*/ '_j{"*":"{person-name} uses a default timer for disappearing messages in new chats. New messages will disappear from this chat {number_of_minutes} minutes after they\'re sent, except when kept. {dm-action}","_1":"{person-name} uses a default timer for disappearing messages in new chats. New messages will disappear from this chat 1 minute after they\'re sent, except when kept. {dm-action}"}',
                                [
                                  s._plural(t, "number_of_minutes"),
                                  s._param("person-name", n),
                                  s._param(
                                    "dm-action",
                                    o(
                                      "WAWebEphemeralCTAFbt",
                                    ).getDmActionSetOwnTimerFbt(),
                                  ),
                                ],
                              )
                            : s._(
                                /*BTDS*/ '_j{"*":"{person-name} uses a default timer for disappearing messages in new chats. New messages will disappear from this chat {number_of_minutes} minutes after they\'re sent, except when kept. Click to learn more.","_1":"{person-name} uses a default timer for disappearing messages in new chats. New messages will disappear from this chat 1 minute after they\'re sent, except when kept. Click to learn more."}',
                                [
                                  s._plural(t, "number_of_minutes"),
                                  s._param("person-name", n),
                                ],
                              )
                          : e ===
                                o("WAWebEphemeralFbtKicTypes")
                                  .EphemeralStringType.ModeChangeByYou && r
                            ? s._(
                                /*BTDS*/ '_j{"*":"You use a default timer for disappearing messages in new chats. New messages will disappear from this chat {number_of_minutes} minutes after they\'re sent, except when kept. {dm-action}","_1":"You use a default timer for disappearing messages in new chats. New messages will disappear from this chat 1 minute after they\'re sent, except when kept. {dm-action}"}',
                                [
                                  s._plural(t, "number_of_minutes"),
                                  s._param(
                                    "dm-action",
                                    o(
                                      "WAWebEphemeralCTAFbt",
                                    ).getDmActionChangeDefaultTimerFbt(),
                                  ),
                                ],
                              )
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
    function R(e) {
      var t = o("WAWebContactCollection").ContactCollection.assertGet(e);
      if (o("WAWebContactGetters").getIsMe(t))
        return s._(/*BTDS*/ "Kept by you");
      var n = o("WAWebFrontendContactGetters").getFormattedName(t);
      return s._(/*BTDS*/ "Kept by {person-name}", [
        s._param("person-name", n),
      ]);
    }
    ((l.EphemeralStringType = o(
      "WAWebEphemeralFbtKicTypes",
    ).EphemeralStringType),
      (l.getDisappearingMessageOutOfSyncDifferentBody = m),
      (l.getDisappearingMessageOutOfSyncDifferentTitle = p),
      (l.getDisappearingMessageOutOfSyncWontDisappearTitle = _),
      (l.getDisappearingMessageOutOfSyncWontDisappearBody = f),
      (l.getDisappearingMessageExplanationStringKic = g),
      (l.getDisappearingModeOtherStringKic = h),
      (l.getDisappearingModeYouStringKic = y),
      (l.getKeptByString = R));
  },
  226,
);
