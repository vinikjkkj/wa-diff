__d(
  "WAWebEphemeralFbtKic",
  [
    "fbt",
    "WALogger",
    "WAWebContactCollection",
    "WAWebContactGetters",
    "WAWebEphemeralFbtKicHoursDaysHelpers",
    "WAWebEphemeralFbtKicTypes",
    "WAWebFrontendContactGetters",
    "WAWebMiscGatingUtils",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e, u, c, d, m, p, _, f;
    function g(e, t) {
      return (
        e === void 0 && (e = 0),
        D(
          o("WAWebEphemeralFbtKicTypes").EphemeralStringType
            .SettingChangeByOthers,
          e,
          t,
        )
      );
    }
    function h(e, t) {
      return (
        e === void 0 && (e = 0),
        N(
          o("WAWebEphemeralFbtKicTypes").EphemeralStringType
            .SettingChangeByOthers,
          e,
          t,
        )
      );
    }
    function y(e) {
      return (
        e === void 0 && (e = 0),
        D(
          o("WAWebEphemeralFbtKicTypes").EphemeralStringType.SettingChangeByYou,
          e,
        )
      );
    }
    function C(e) {
      return (
        e === void 0 && (e = 0),
        D(
          o("WAWebEphemeralFbtKicTypes").EphemeralStringType
            .SettingChangeByUnknown,
          e,
        )
      );
    }
    function b(e, t) {
      return (
        e === void 0 && (e = 0),
        D(
          o("WAWebEphemeralFbtKicTypes").EphemeralStringType
            .SettingChangeByOthersAsAdmin,
          e,
          t,
        )
      );
    }
    function v(e, t) {
      return (
        e === void 0 && (e = 0),
        N(
          o("WAWebEphemeralFbtKicTypes").EphemeralStringType
            .SettingChangeByOthersAsAdmin,
          e,
          t,
        )
      );
    }
    function S(e) {
      return (
        e === void 0 && (e = 0),
        D(
          o("WAWebEphemeralFbtKicTypes").EphemeralStringType
            .SettingChangeByYouAsAdmin,
          e,
        )
      );
    }
    function R(e) {
      return (
        e === void 0 && (e = 0),
        D(
          o("WAWebEphemeralFbtKicTypes").EphemeralStringType
            .SettingChangeByUnknownAsAdmin,
          e,
        )
      );
    }
    function L(e) {
      return (
        e === void 0 && (e = 0),
        D(o("WAWebEphemeralFbtKicTypes").EphemeralStringType.Duration, e)
      );
    }
    function E(e) {
      return (
        e === void 0 && (e = 0),
        D(o("WAWebEphemeralFbtKicTypes").EphemeralStringType.OutOfSyncInfo, e)
      );
    }
    function k(e) {
      return (
        e === void 0 && (e = 0),
        D(o("WAWebEphemeralFbtKicTypes").EphemeralStringType.Explanation, e)
      );
    }
    function I(e, t) {
      return (
        e === void 0 && (e = 0),
        D(
          o("WAWebEphemeralFbtKicTypes").EphemeralStringType.ModeChangeByOthers,
          e,
          t,
        )
      );
    }
    function T(e) {
      return (
        e === void 0 && (e = 0),
        D(o("WAWebEphemeralFbtKicTypes").EphemeralStringType.ModeChangeByYou, e)
      );
    }
    function D(t, n, r) {
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
      if (n === 0) return x(t, r);
      if (n <= 60) return $(t, n, r);
      if (n < 3600) {
        var a = Math.floor(n / 60);
        return P(t, a, r);
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
    function x(e, t) {
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
                  /*BTDS*/ "{person-name} turned off disappearing messages. Click to change.",
                  [s._param("person-name", t)],
                )
              : e ===
                  o("WAWebEphemeralFbtKicTypes").EphemeralStringType
                    .SettingChangeByYouAsAdmin
                ? s._(
                    /*BTDS*/ "You turned off disappearing messages. Click to change.",
                  )
                : e ===
                    o("WAWebEphemeralFbtKicTypes").EphemeralStringType
                      .SettingChangeByUnknownAsAdmin
                  ? s._(
                      /*BTDS*/ "Disappearing messages were turned off. Click to change.",
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
    function $(e, t, n) {
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
                  /*BTDS*/ '_j{"*":"{person-name} turned on disappearing messages. New messages will disappear from this chat {number_of_seconds} seconds after they\'re sent, except when kept. Click to change.","_1":"{person-name} turned on disappearing messages. New messages will disappear from this chat 1 second after they\'re sent, except when kept. Click to change."}',
                  [
                    s._plural(t, "number_of_seconds"),
                    s._param("person-name", n),
                  ],
                )
              : e ===
                  o("WAWebEphemeralFbtKicTypes").EphemeralStringType
                    .SettingChangeByYouAsAdmin
                ? s._(
                    /*BTDS*/ '_j{"*":"You turned on disappearing messages. New messages will disappear from this chat {number_of_seconds} seconds after they\'re sent, except when kept. Click to change.","_1":"You turned on disappearing messages. New messages will disappear from this chat 1 second after they\'re sent, except when kept. Click to change."}',
                    [s._plural(t, "number_of_seconds")],
                  )
                : e ===
                    o("WAWebEphemeralFbtKicTypes").EphemeralStringType
                      .SettingChangeByUnknownAsAdmin
                  ? s._(
                      /*BTDS*/ '_j{"*":"Disappearing messages were turned on. New messages will disappear from this chat {number_of_seconds} seconds after they\'re sent, except when kept. Click to change.","_1":"Disappearing messages were turned on. New messages will disappear from this chat 1 second after they\'re sent, except when kept. Click to change."}',
                      [s._plural(t, "number_of_seconds")],
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
                          /*BTDS*/ '_j{"*":"This message will disappear from this chat {number_of_seconds} seconds after it\'s sent, except when kept.","_1":"This message will disappear from this chat 1 second after it\'s sent, except when kept."}',
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
                                /*BTDS*/ '_j{"*":"{person-name} uses a default timer for disappearing messages in new chats. New messages will disappear from this chat {number_of_seconds} seconds after they\'re sent, except when kept. Click to set your own default timer.","_1":"{person-name} uses a default timer for disappearing messages in new chats. New messages will disappear from this chat 1 second after they\'re sent, except when kept. Click to set your own default timer."}',
                                [
                                  s._plural(t, "number_of_seconds"),
                                  s._param("person-name", n),
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
                                /*BTDS*/ '_j{"*":"You use a default timer for disappearing messages in new chats. New messages will disappear from this chat {number_of_seconds} seconds after they\'re sent, except when kept. Click to change your default timer.","_1":"You use a default timer for disappearing messages in new chats. New messages will disappear from this chat 1 second after they\'re sent, except when kept. Click to change your default timer."}',
                                [s._plural(t, "number_of_seconds")],
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
    function P(e, t, n) {
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
                  /*BTDS*/ '_j{"*":"{person-name} turned on disappearing messages. New messages will disappear from this chat {number_of_minutes} minutes after they\'re sent, except when kept. Click to change.","_1":"{person-name} turned on disappearing messages. New messages will disappear from this chat 1 minute after they\'re sent, except when kept. Click to change."}',
                  [
                    s._plural(t, "number_of_minutes"),
                    s._param("person-name", n),
                  ],
                )
              : e ===
                  o("WAWebEphemeralFbtKicTypes").EphemeralStringType
                    .SettingChangeByYouAsAdmin
                ? s._(
                    /*BTDS*/ '_j{"*":"You turned on disappearing messages. New messages will disappear from this chat {number_of_minutes} minutes after they\'re sent, except when kept. Click to change.","_1":"You turned on disappearing messages. New messages will disappear from this chat 1 minute after they\'re sent, except when kept. Click to change."}',
                    [s._plural(t, "number_of_minutes")],
                  )
                : e ===
                    o("WAWebEphemeralFbtKicTypes").EphemeralStringType
                      .SettingChangeByUnknownAsAdmin
                  ? s._(
                      /*BTDS*/ '_j{"*":"Disappearing messages were turned on. New messages will disappear from this chat {number_of_minutes} minutes after they\'re sent, except when kept. Click to change.","_1":"Disappearing messages were turned on. New messages will disappear from this chat 1 minute after they\'re sent, except when kept. Click to change."}',
                      [s._plural(t, "number_of_minutes")],
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
                          /*BTDS*/ '_j{"*":"This message will disappear from this chat {number_of_minutes} minutes after it\'s sent, except when kept.","_1":"This message will disappear from this chat 1 minute after it\'s sent, except when kept."}',
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
                                /*BTDS*/ '_j{"*":"{person-name} uses a default timer for disappearing messages in new chats. New messages will disappear from this chat {number_of_minutes} minutes after they\'re sent, except when kept. Click to set your own default timer.","_1":"{person-name} uses a default timer for disappearing messages in new chats. New messages will disappear from this chat 1 minute after they\'re sent, except when kept. Click to set your own default timer."}',
                                [
                                  s._plural(t, "number_of_minutes"),
                                  s._param("person-name", n),
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
                                /*BTDS*/ '_j{"*":"You use a default timer for disappearing messages in new chats. New messages will disappear from this chat {number_of_minutes} minutes after they\'re sent, except when kept. Click to change your default timer.","_1":"You use a default timer for disappearing messages in new chats. New messages will disappear from this chat 1 minute after they\'re sent, except when kept. Click to change your default timer."}',
                                [s._plural(t, "number_of_minutes")],
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
    function N(e, t, n) {
      if ((t === void 0 && (t = 0), t < 0))
        return (
          o("WALogger")
            .ERROR(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "getEphemeralString ",
                  " is given invalid duration ",
                  "",
                ])),
              e,
              t,
            )
            .sendLogs("invalid-duration"),
          ""
        );
      if (t === 0) return M(e, n);
      if (t <= 60) return w(e, t, n);
      if (t < 3600) {
        var r = Math.floor(t / 60);
        return A(e, r, n);
      } else if (t <= 1440 * 60) {
        var a = Math.floor(t / 60 / 60);
        return o(
          "WAWebEphemeralFbtKicHoursDaysHelpers",
        ).getEphemeralOnHoursComponent(e, a, n);
      }
      var i = Math.floor(t / 24 / 60 / 60);
      return o(
        "WAWebEphemeralFbtKicHoursDaysHelpers",
      ).getEphemeralOnDaysComponent(e, i, n);
    }
    function M(e, t) {
      return e ===
        o("WAWebEphemeralFbtKicTypes").EphemeralStringType
          .SettingChangeByOthers && t != null
        ? s._(/*BTDS*/ "{person-name} turned off disappearing messages.", [
            s._param("person-name", t),
          ])
        : e ===
              o("WAWebEphemeralFbtKicTypes").EphemeralStringType
                .SettingChangeByOthersAsAdmin && t != null
          ? s._(
              /*BTDS*/ "{person-name} turned off disappearing messages. Click to change.",
              [s._param("person-name", t)],
            )
          : (o("WALogger")
              .ERROR(
                p ||
                  (p = babelHelpers.taggedTemplateLiteralLoose([
                    "getEphemeralOffL10nComponent is given invalid type ",
                    "",
                  ])),
                e,
              )
              .sendLogs("invalid-ephemeral-string-type"),
            "");
    }
    function w(e, t, n) {
      return e ===
        o("WAWebEphemeralFbtKicTypes").EphemeralStringType
          .SettingChangeByOthers && n != null
        ? s._(
            /*BTDS*/ '_j{"*":"{person-name} turned on disappearing messages. New messages will disappear from this chat {number_of_seconds} seconds after they\'re sent, except when kept.","_1":"{person-name} turned on disappearing messages. New messages will disappear from this chat 1 second after they\'re sent, except when kept."}',
            [s._plural(t, "number_of_seconds"), s._param("person-name", n)],
          )
        : e ===
              o("WAWebEphemeralFbtKicTypes").EphemeralStringType
                .SettingChangeByOthersAsAdmin && n != null
          ? s._(
              /*BTDS*/ '_j{"*":"{person-name} turned on disappearing messages. New messages will disappear from this chat {number_of_seconds} seconds after they\'re sent, except when kept. Click to change.","_1":"{person-name} turned on disappearing messages. New messages will disappear from this chat 1 second after they\'re sent, except when kept. Click to change."}',
              [s._plural(t, "number_of_seconds"), s._param("person-name", n)],
            )
          : (o("WALogger")
              .ERROR(
                _ ||
                  (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "getEphemeralOnSecondsL10nComponent is given type ",
                    " and name ",
                    "",
                  ])),
                e,
                n,
              )
              .sendLogs("invalid-ephemeral-string-type"),
            "");
    }
    function A(e, t, n) {
      return e ===
        o("WAWebEphemeralFbtKicTypes").EphemeralStringType
          .SettingChangeByOthers && n != null
        ? s._(
            /*BTDS*/ '_j{"*":"{person-name} turned on disappearing messages. New messages will disappear from this chat {number_of_minutes} minutes after they\'re sent, except when kept.","_1":"{person-name} turned on disappearing messages. New messages will disappear from this chat 1 minute after they\'re sent, except when kept."}',
            [s._plural(t, "number_of_minutes"), s._param("person-name", n)],
          )
        : e ===
              o("WAWebEphemeralFbtKicTypes").EphemeralStringType
                .SettingChangeByOthersAsAdmin && n != null
          ? s._(
              /*BTDS*/ '_j{"*":"{person-name} turned on disappearing messages. New messages will disappear from this chat {number_of_minutes} minutes after they\'re sent, except when kept. Click to change.","_1":"{person-name} turned on disappearing messages. New messages will disappear from this chat 1 minute after they\'re sent, except when kept. Click to change."}',
              [s._plural(t, "number_of_minutes"), s._param("person-name", n)],
            )
          : (o("WALogger")
              .ERROR(
                f ||
                  (f = babelHelpers.taggedTemplateLiteralLoose([
                    "getEphemeralOnMinutesL10nComponent is given type ",
                    " and name ",
                    "",
                  ])),
                e,
                n,
              )
              .sendLogs("invalid-ephemeral-string-type"),
            "");
    }
    function F(e) {
      var t = o("WAWebContactCollection").ContactCollection.assertGet(e);
      if (o("WAWebContactGetters").getIsMe(t))
        return s._(/*BTDS*/ "Kept by you");
      var n = o("WAWebFrontendContactGetters").getFormattedName(t);
      return s._(/*BTDS*/ "Kept by {person-name}", [
        s._param("person-name", n),
      ]);
    }
    ((F.displayName = F.name + " [from " + i.id + "]"),
      (l.EphemeralStringType = o(
        "WAWebEphemeralFbtKicTypes",
      ).EphemeralStringType),
      (l.getDisappearingMessageSettingOthersStringKic = g),
      (l.getDisappearingMessageSettingOthersGroupStringKic = h),
      (l.getDisappearingMessageSettingYouStringKic = y),
      (l.getDisappearingMessageSettingUnknownStringKic = C),
      (l.getDisappearingMessageSettingOthersAsAdminStringKic = b),
      (l.getDisappearingMessageSettingOthersAsAdminGroupStringKic = v),
      (l.getDisappearingMessageSettingYouAsAdminStringKic = S),
      (l.getDisappearingMessageSettingUnknownAsAdminStringKic = R),
      (l.getDisappearingMessageDurationStringKic = L),
      (l.getDisappearingMessageOutOfSyncInfoStringKic = E),
      (l.getDisappearingMessageExplanationStringKic = k),
      (l.getDisappearingModeOtherStringKic = I),
      (l.getDisappearingModeYouStringKic = T),
      (l.getKeptByString = F));
  },
  226,
);
