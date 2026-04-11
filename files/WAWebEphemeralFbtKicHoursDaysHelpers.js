__d(
  "WAWebEphemeralFbtKicHoursDaysHelpers",
  ["fbt", "WALogger", "WAWebEphemeralFbtKicTypes", "WAWebMiscGatingUtils"],
  function (t, n, r, o, a, i, l, s) {
    var e, u, c, d;
    function m(t, n, r) {
      var a = o("WAWebMiscGatingUtils").isDefaultDisappearingMessagesEnabled();
      return t ===
        o("WAWebEphemeralFbtKicTypes").EphemeralStringType
          .SettingChangeByOthers && r != null
        ? s._(
            /*BTDS*/ '_j{"*":"{person-name} turned on disappearing messages. New messages will disappear from this chat {number_of_hours} hours after they\'re sent, except when kept.","_1":"{person-name} turned on disappearing messages. New messages will disappear from this chat 1 hour after they\'re sent, except when kept."}',
            [s._plural(n, "number_of_hours"), s._param("person-name", r)],
          )
        : t ===
            o("WAWebEphemeralFbtKicTypes").EphemeralStringType
              .SettingChangeByYou
          ? s._(
              /*BTDS*/ '_j{"*":"You turned on disappearing messages. New messages will disappear from this chat {number_of_hours} hours after they\'re sent, except when kept.","_1":"You turned on disappearing messages. New messages will disappear from this chat 1 hour after they\'re sent, except when kept."}',
              [s._plural(n, "number_of_hours")],
            )
          : t ===
              o("WAWebEphemeralFbtKicTypes").EphemeralStringType
                .SettingChangeByUnknown
            ? s._(
                /*BTDS*/ '_j{"*":"Disappearing messages were turned on. New messages will disappear from this chat {number_of_hours} hours after they\'re sent, except when kept.","_1":"Disappearing messages were turned on. New messages will disappear from this chat 1 hour after they\'re sent, except when kept."}',
                [s._plural(n, "number_of_hours")],
              )
            : t ===
                  o("WAWebEphemeralFbtKicTypes").EphemeralStringType
                    .SettingChangeByOthersAsAdmin && r != null
              ? s._(
                  /*BTDS*/ '_j{"*":"{person-name} turned on disappearing messages. New messages will disappear from this chat {number_of_hours} hours after they\'re sent, except when kept. Click to change.","_1":"{person-name} turned on disappearing messages. New messages will disappear from this chat 1 hour after they\'re sent, except when kept. Click to change."}',
                  [s._plural(n, "number_of_hours"), s._param("person-name", r)],
                )
              : t ===
                  o("WAWebEphemeralFbtKicTypes").EphemeralStringType
                    .SettingChangeByYouAsAdmin
                ? s._(
                    /*BTDS*/ '_j{"*":"You turned on disappearing messages. New messages will disappear from this chat {number_of_hours} hours after they\'re sent, except when kept. Click to change.","_1":"You turned on disappearing messages. New messages will disappear from this chat 1 hour after they\'re sent, except when kept. Click to change."}',
                    [s._plural(n, "number_of_hours")],
                  )
                : t ===
                    o("WAWebEphemeralFbtKicTypes").EphemeralStringType
                      .SettingChangeByUnknownAsAdmin
                  ? s._(
                      /*BTDS*/ '_j{"*":"Disappearing messages were turned on. New messages will disappear from this chat {number_of_hours} hours after they\'re sent, except when kept. Click to change.","_1":"Disappearing messages were turned on. New messages will disappear from this chat 1 hour after they\'re sent, except when kept. Click to change."}',
                      [s._plural(n, "number_of_hours")],
                    )
                  : t ===
                      o("WAWebEphemeralFbtKicTypes").EphemeralStringType
                        .Duration
                    ? s._(
                        /*BTDS*/ '_j{"*":"{number_of_hours} hours","_1":"1 hour"}',
                        [s._plural(n, "number_of_hours")],
                      )
                    : t ===
                        o("WAWebEphemeralFbtKicTypes").EphemeralStringType
                          .OutOfSyncInfo
                      ? s._(
                          /*BTDS*/ '_j{"*":"This message will disappear from this chat {number_of_hours} hours after it\'s sent, except when kept.","_1":"This message will disappear from this chat 1 hour after it\'s sent, except when kept."}',
                          [s._plural(n, "number_of_hours")],
                        )
                      : t ===
                          o("WAWebEphemeralFbtKicTypes").EphemeralStringType
                            .Explanation
                        ? s._(
                            /*BTDS*/ '_j{"*":"New messages will disappear from this chat {number_of_hours} hours after they\'re sent, except when kept.","_1":"New messages will disappear from this chat 1 hour after they\'re sent, except when kept."}',
                            [s._plural(n, "number_of_hours")],
                          )
                        : t ===
                            o("WAWebEphemeralFbtKicTypes").EphemeralStringType
                              .ModeChangeByOthers
                          ? a
                            ? s._(
                                /*BTDS*/ '_j{"*":"{person-name} uses a default timer for disappearing messages in new chats. New messages will disappear from this chat {number_of_hours} hours after they\'re sent, except when kept. Click to set your own default timer.","_1":"{person-name} uses a default timer for disappearing messages in new chats. New messages will disappear from this chat 1 hour after they\'re sent, except when kept. Click to set your own default timer."}',
                                [
                                  s._plural(n, "number_of_hours"),
                                  s._param("person-name", r),
                                ],
                              )
                            : s._(
                                /*BTDS*/ '_j{"*":"{person-name} uses a default timer for disappearing messages in new chats. New messages will disappear from this chat {number_of_hours} hours after they\'re sent, except when kept. Click to learn more.","_1":"{person-name} uses a default timer for disappearing messages in new chats. New messages will disappear from this chat 1 hour after they\'re sent, except when kept. Click to learn more."}',
                                [
                                  s._plural(n, "number_of_hours"),
                                  s._param("person-name", r),
                                ],
                              )
                          : t ===
                                o("WAWebEphemeralFbtKicTypes")
                                  .EphemeralStringType.ModeChangeByYou && a
                            ? s._(
                                /*BTDS*/ '_j{"*":"You use a default timer for disappearing messages in new chats. New messages will disappear from this chat {number_of_hours} hours after they\'re sent, except when kept. Click to change your default timer.","_1":"You use a default timer for disappearing messages in new chats. New messages will disappear from this chat 1 hour after they\'re sent, except when kept. Click to change your default timer."}',
                                [s._plural(n, "number_of_hours")],
                              )
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
    function p(e, t, n) {
      var r = o("WAWebMiscGatingUtils").isDefaultDisappearingMessagesEnabled();
      return e ===
        o("WAWebEphemeralFbtKicTypes").EphemeralStringType
          .SettingChangeByOthers && n != null
        ? s._(
            /*BTDS*/ '_j{"*":"{person-name} turned on disappearing messages. New messages will disappear from this chat {number_of_days} days after they\'re sent, except when kept.","_1":"{person-name} turned on disappearing messages. New messages will disappear from this chat 1 day after they\'re sent, except when kept."}',
            [s._plural(t, "number_of_days"), s._param("person-name", n)],
          )
        : e ===
            o("WAWebEphemeralFbtKicTypes").EphemeralStringType
              .SettingChangeByYou
          ? s._(
              /*BTDS*/ '_j{"*":"You turned on disappearing messages. New messages will disappear from this chat {number_of_days} days after they\'re sent, except when kept.","_1":"You turned on disappearing messages. New messages will disappear from this chat 1 day after they\'re sent, except when kept."}',
              [s._plural(t, "number_of_days")],
            )
          : e ===
              o("WAWebEphemeralFbtKicTypes").EphemeralStringType
                .SettingChangeByUnknown
            ? s._(
                /*BTDS*/ '_j{"*":"Disappearing messages were turned on. New messages will disappear from this chat {number_of_days} days after they\'re sent, except when kept.","_1":"Disappearing messages were turned on. New messages will disappear from this chat 1 day after they\'re sent, except when kept."}',
                [s._plural(t, "number_of_days")],
              )
            : e ===
                  o("WAWebEphemeralFbtKicTypes").EphemeralStringType
                    .SettingChangeByOthersAsAdmin && n != null
              ? s._(
                  /*BTDS*/ '_j{"*":"{person-name} turned on disappearing messages. New messages will disappear from this chat {number_of_days} days after they\'re sent, except when kept. Click to change.","_1":"{person-name} turned on disappearing messages. New messages will disappear from this chat 1 day after they\'re sent, except when kept. Click to change."}',
                  [s._plural(t, "number_of_days"), s._param("person-name", n)],
                )
              : e ===
                  o("WAWebEphemeralFbtKicTypes").EphemeralStringType
                    .SettingChangeByYouAsAdmin
                ? s._(
                    /*BTDS*/ '_j{"*":"You turned on disappearing messages. New messages will disappear from this chat {number_of_days} days after they\'re sent, except when kept. Click to change.","_1":"You turned on disappearing messages. New messages will disappear from this chat 1 day after they\'re sent, except when kept. Click to change."}',
                    [s._plural(t, "number_of_days")],
                  )
                : e ===
                    o("WAWebEphemeralFbtKicTypes").EphemeralStringType
                      .SettingChangeByUnknownAsAdmin
                  ? s._(
                      /*BTDS*/ '_j{"*":"Disappearing messages were turned on. New messages will disappear from this chat {number_of_days} days after they\'re sent, except when kept. Click to change.","_1":"Disappearing messages were turned on. New messages will disappear from this chat 1 day after they\'re sent, except when kept. Click to change."}',
                      [s._plural(t, "number_of_days")],
                    )
                  : e ===
                      o("WAWebEphemeralFbtKicTypes").EphemeralStringType
                        .Duration
                    ? s._(
                        /*BTDS*/ '_j{"*":"{number_of_days} days","_1":"1 day"}',
                        [s._plural(t, "number_of_days")],
                      )
                    : e ===
                        o("WAWebEphemeralFbtKicTypes").EphemeralStringType
                          .OutOfSyncInfo
                      ? s._(
                          /*BTDS*/ '_j{"*":"This message will disappear from this chat {number_of_days} days after it\'s sent, except when kept.","_1":"This message will disappear from this chat 1 day after it\'s sent, except when kept."}',
                          [s._plural(t, "number_of_days")],
                        )
                      : e ===
                          o("WAWebEphemeralFbtKicTypes").EphemeralStringType
                            .Explanation
                        ? s._(
                            /*BTDS*/ '_j{"*":"New messages will disappear from this chat {number_of_days} days after they\'re sent, except when kept.","_1":"New messages will disappear from this chat 1 day after they\'re sent, except when kept."}',
                            [s._plural(t, "number_of_days")],
                          )
                        : e ===
                            o("WAWebEphemeralFbtKicTypes").EphemeralStringType
                              .ModeChangeByOthers
                          ? r
                            ? s._(
                                /*BTDS*/ '_j{"*":"{person-name} uses a default timer for disappearing messages in new chats. New messages will disappear from this chat {number_of_days} days after they\'re sent, except when kept. Click to set your own default timer.","_1":"{person-name} uses a default timer for disappearing messages in new chats. New messages will disappear from this chat 1 day after they\'re sent, except when kept. Click to set your own default timer."}',
                                [
                                  s._plural(t, "number_of_days"),
                                  s._param("person-name", n),
                                ],
                              )
                            : s._(
                                /*BTDS*/ '_j{"*":"{person-name} uses a default timer for disappearing messages in new chats. New messages will disappear from this chat {number_of_days} days after they\'re sent, except when kept. Click to learn more.","_1":"{person-name} uses a default timer for disappearing messages in new chats. New messages will disappear from this chat 1 day after they\'re sent, except when kept. Click to learn more."}',
                                [
                                  s._plural(t, "number_of_days"),
                                  s._param("person-name", n),
                                ],
                              )
                          : e ===
                                o("WAWebEphemeralFbtKicTypes")
                                  .EphemeralStringType.ModeChangeByYou && r
                            ? s._(
                                /*BTDS*/ '_j{"*":"You use a default timer for disappearing messages in new chats. New messages will disappear from this chat {number_of_days} days after they\'re sent, except when kept. Click to change your default timer.","_1":"You use a default timer for disappearing messages in new chats. New messages will disappear from this chat 1 day after they\'re sent, except when kept. Click to change your default timer."}',
                                [s._plural(t, "number_of_days")],
                              )
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
    function _(e, t, n) {
      return e ===
        o("WAWebEphemeralFbtKicTypes").EphemeralStringType
          .SettingChangeByOthers && n != null
        ? s._(
            /*BTDS*/ '_j{"*":"{person-name} turned on disappearing messages. New messages will disappear from this chat {number_of_hours} hours after they\'re sent, except when kept.","_1":"{person-name} turned on disappearing messages. New messages will disappear from this chat 1 hour after they\'re sent, except when kept."}',
            [s._plural(t, "number_of_hours"), s._param("person-name", n)],
          )
        : e ===
              o("WAWebEphemeralFbtKicTypes").EphemeralStringType
                .SettingChangeByOthersAsAdmin && n != null
          ? s._(
              /*BTDS*/ '_j{"*":"{person-name} turned on disappearing messages. New messages will disappear from this chat {number_of_hours} hours after they\'re sent, except when kept. Click to change.","_1":"{person-name} turned on disappearing messages. New messages will disappear from this chat 1 hour after they\'re sent, except when kept. Click to change."}',
              [s._plural(t, "number_of_hours"), s._param("person-name", n)],
            )
          : (o("WALogger")
              .ERROR(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "getEphemeralOnHoursL10nComponent is given type ",
                    " and name ",
                    "",
                  ])),
                e,
                n,
              )
              .sendLogs("invalid-ephemeral-string-type"),
            "");
    }
    function f(e, t, n) {
      return e ===
        o("WAWebEphemeralFbtKicTypes").EphemeralStringType
          .SettingChangeByOthers && n != null
        ? s._(
            /*BTDS*/ '_j{"*":"{person-name} turned on disappearing messages. New messages will disappear from this chat {number_of_days} days after they\'re sent, except when kept.","_1":"{person-name} turned on disappearing messages. New messages will disappear from this chat 1 day after they\'re sent, except when kept."}',
            [s._plural(t, "number_of_days"), s._param("person-name", n)],
          )
        : e ===
              o("WAWebEphemeralFbtKicTypes").EphemeralStringType
                .SettingChangeByOthersAsAdmin && n != null
          ? s._(
              /*BTDS*/ '_j{"*":"{person-name} turned on disappearing messages. New messages will disappear from this chat {number_of_days} days after they\'re sent, except when kept. Click to change.","_1":"{person-name} turned on disappearing messages. New messages will disappear from this chat 1 day after they\'re sent, except when kept. Click to change."}',
              [s._plural(t, "number_of_days"), s._param("person-name", n)],
            )
          : (o("WALogger")
              .ERROR(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "getEphemeralOnDaysL10nComponent is given type ",
                    " and name ",
                    "",
                  ])),
                e,
                n,
              )
              .sendLogs("invalid-ephemeral-string-type"),
            "");
    }
    ((l.getEphemeralOnHoursString = m),
      (l.getEphemeralOnDaysString = p),
      (l.getEphemeralOnHoursComponent = _),
      (l.getEphemeralOnDaysComponent = f));
  },
  226,
);
